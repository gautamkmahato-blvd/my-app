

## High-Level Pipeline

```
[HTML + CSS + Screenshot] → AI Generate → Render → Screenshot → Compare → Fix Loop → Output
```

---

## Detailed Implementation Plan

### Step 1: AI Code Generation

Send to Claude API with all 3 inputs:
```javascript
const response = await anthropic.messages.create({
  model: "claude-opus-4-6",
  messages: [{
    role: "user",
    content: [
      { type: "image", source: { type: "base64", media_type: "image/png", data: screenshotBase64 }},
      { type: "text", text: `Recreate this component exactly.
        HTML: ${html}
        CSS: ${css}
        Return ONLY a complete self-contained HTML file.` }
    ]
  }]
});
```

---

### Step 2: Render & Screenshot the Generated Code

Best options for headless rendering:

**Puppeteer (recommended)**
```javascript
const puppeteer = require('puppeteer');

async function renderAndScreenshot(htmlCode) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to match original element size
  await page.setViewport({ width: elementWidth, height: elementHeight });
  await page.setContent(htmlCode);
  
  // Wait for animations/fonts to load
  await page.waitForTimeout(2000);
  
  const screenshot = await page.screenshot({ 
    type: 'png',
    clip: { x: 0, y: 0, width: elementWidth, height: elementHeight }
  });
  
  await browser.close();
  return screenshot;
}
```

---

### Step 3: Visual Similarity Comparison

Two approaches, use both together:

**A) Pixel-level diff with `pixelmatch`**
```javascript
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');

function compareScreenshots(original, generated) {
  const img1 = PNG.sync.read(original);
  const img2 = PNG.sync.read(generated);
  
  const diff = new PNG({ width: img1.width, height: img1.height });
  const mismatchedPixels = pixelmatch(
    img1.data, img2.data, diff.data,
    img1.width, img1.height,
    { threshold: 0.1 }
  );
  
  const totalPixels = img1.width * img1.height;
  const similarityScore = ((totalPixels - mismatchedPixels) / totalPixels) * 100;
  
  return { similarityScore, diffImage: PNG.sync.write(diff) };
}
```

**B) AI-based semantic comparison (catches layout/color issues pixel diff misses)**
```javascript
async function aiCompare(originalScreenshot, generatedScreenshot) {
  const response = await anthropic.messages.create({
    model: "claude-opus-4-6",
    messages: [{
      role: "user",
      content: [
        { type: "image", source: { type: "base64", media_type: "image/png", data: originalScreenshot }},
        { type: "image", source: { type: "base64", media_type: "image/png", data: generatedScreenshot }},
        { type: "text", text: `Compare these two UI components. 
          Return JSON: {
            "score": 0-100,
            "issues": ["list of specific visual differences"]
          }` }
      ]
    }]
  });
  return JSON.parse(response.content[0].text);
}
```

---

### Step 4: Fix Loop

```javascript
async function fixLoop(html, css, originalScreenshot, maxIterations = 3) {
  let currentCode = await generateInitialCode(html, css, originalScreenshot);
  
  for (let i = 0; i < maxIterations; i++) {
    // Render generated code
    const generatedScreenshot = await renderAndScreenshot(currentCode);
    
    // Compare
    const pixelScore = compareScreenshots(originalScreenshot, generatedScreenshot);
    const aiResult = await aiCompare(originalScreenshot, generatedScreenshot);
    
    const finalScore = (pixelScore.similarityScore + aiResult.score) / 2;
    
    if (finalScore >= 99) {
      return { code: currentCode, score: finalScore, iterations: i + 1 };
    }
    
    // Ask AI to fix with diff context
    currentCode = await fixCode(currentCode, originalScreenshot, generatedScreenshot, aiResult.issues);
  }
  
  return { code: currentCode, score: finalScore };
}

async function fixCode(currentCode, originalScreenshot, generatedScreenshot, issues) {
  const response = await anthropic.messages.create({
    model: "claude-opus-4-6",
    messages: [{
      role: "user",
      content: [
        { type: "image", source: { type: "base64", media_type: "image/png", data: originalScreenshot }},
        { type: "image", source: { type: "base64", media_type: "image/png", data: generatedScreenshot }},
        { type: "text", text: `The generated component has these issues: ${issues.join(', ')}
          Current code: ${currentCode}
          Fix ONLY these specific issues. Return the complete fixed HTML.` }
      ]
    }]
  });
  return response.content[0].text;
}
```

---

### Full Orchestration

```javascript
async function fullPipeline({ html, css, screenshot }) {
  console.log("1. Generating initial code...");
  const initialCode = await generateInitialCode(html, css, screenshot);
  
  console.log("2. Starting fix loop...");
  const result = await fixLoop(html, css, screenshot);
  
  console.log(`Done! Score: ${result.score}% in ${result.iterations} iterations`);
  return result;
}
```

---

## Recommended Tech Stack

| Part | Tool |
|------|------|
| AI Generation | Claude API (claude-opus-4-6) |
| Headless Render | Puppeteer or Playwright |
| Pixel Diff | `pixelmatch` + `pngjs` |
| Semantic Diff | Claude Vision API |
| Framework | Node.js backend or Python |

---

## Key Tips

**Improve accuracy from the start:**
- Send element dimensions with the prompt so AI sizes it correctly
- Include computed CSS (not just class names) so fonts/colors are exact
- Tell AI to use inline styles for pixel-perfect accuracy

**For the comparison threshold:**
- 99% pixel match is very hard due to anti-aliasing and font rendering
- Use 95%+ pixel + 98%+ AI semantic as your "good enough" threshold
- Fonts render differently across OS — this is the biggest source of mismatch

**Limit iterations to 3** — Better to return the best result from all iterations instead of the last one.

