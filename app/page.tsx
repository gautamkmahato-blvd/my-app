"use client";

import { useEffect, useRef , useState} from "react";
import { useAnimate, stagger, motion, AnimatePresence  } from "framer-motion";
import { X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Lock, Phone, MessageSquare, Book, Tv, ShieldAlert } from "lucide-react";
import { 
  BookOpen, 
  ShieldCheck 
} from "lucide-react";
import { Check, User, MousePointer2 } from "lucide-react";

// Mock Data
const USERS = [
  { name: "Adelaide Sloan", email: "a.sloan@example.com", code: "A7ltvcCwFvD9u" },
  { name: "Selene Carey", email: "s.carey@example.com", code: "NYWuMQRbyHc6q" },
  { name: "Riggs Weiss", email: "r.weiss@example.com", code: "vDehzt9uJSfB8" },
  { name: "Callen Harmon", email: "c.harmon@example.com", code: "EToeN3Ri2PsBa" },
];

const BACKGROUND_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export function MagicLinksComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const linkBoxRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const [currentUser, setCurrentUser] = useState(USERS[0]);
  const [displayCode, setDisplayCode] = useState("");

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Background Animation: Shimmering characters
      const chars = bgRef.current?.children;
      if (chars) {
        gsap.to(chars, {
          opacity: 0.2,
          duration: "random(1.5, 3)",
          repeat: -1,
          yoyo: true,
          stagger: {
            amount: 4,
            from: "random",
          },
          ease: "sine.inOut",
        });
      }

      // 2. Main Sequence Timeline
      const tl = gsap.timeline({
        repeat: -1,
        onRepeat: () => {
          setCurrentUser((prev) => {
            const nextIdx = (USERS.indexOf(prev) + 1) % USERS.length;
            return USERS[nextIdx];
          });
          setDisplayCode("");
        },
      });

      // Reset State
      tl.set([linkBoxRef.current, badgeRef.current, glowRef.current], { opacity: 0, scale: 0.8 });
      tl.set(cursorRef.current, { x: 250, y: 150, opacity: 0 });

      // Step A: Show Link Box
      tl.to(linkBoxRef.current, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" }, "+=0.5");

      // Step B: Typewriter effect for code
      tl.to({}, {
        duration: 0.8,
        onUpdate: function () {
          const progress = this.progress();
          const fullCode = currentUser.code;
          const currentLen = Math.floor(progress * fullCode.length);
          setDisplayCode(fullCode.slice(0, currentLen));
        }
      });

      // Step C: Move Cursor to Box
      tl.to(cursorRef.current, { opacity: 1, duration: 0.2 }, "-=0.2");
      tl.to(cursorRef.current, { x: 0, y: -40, duration: 0.8, ease: "power2.inOut" });

      // Step D: Click Action
      tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
      tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
      
      // Step E: Flash and hide link box
      tl.to(linkBoxRef.current, { backgroundColor: "#FFF", duration: 0.1 });
      tl.to(linkBoxRef.current, { opacity: 0, scale: 1.1, duration: 0.2, ease: "power2.in" });
      tl.to(cursorRef.current, { opacity: 0, duration: 0.3 }, "-=0.2");

      // Step F: Activate Glow & Update Profile
      tl.to(glowRef.current, { opacity: 1, duration: 0.4 }, "-=0.1");
      
      // Fade out old text
      tl.to([nameRef.current, emailRef.current], { opacity: 0, y: 5, duration: 0.3 }, "-=0.2");
      
      // Trigger user update visual (Logic handled by state, so we just animate the appearance)
      tl.to([nameRef.current, emailRef.current], { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      
      // Step G: Pop Badge
      tl.to(badgeRef.current, { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        ease: "elastic.out(1, 0.5)" 
      }, "-=0.2");

      // Wait before loop
      tl.to({}, { duration: 2 });

    }, containerRef);

    return () => ctx.revert();
  }, [currentUser]); // Re-run effect when currentUser changes for the typewriter logic

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0A0A0A] text-white p-4">
      {/* Main Card */}
      <div 
        ref={containerRef}
        className="relative w-[420px] bg-[#0F0F0F] rounded-[32px] border border-white/10 overflow-hidden p-10 shadow-2xl"
      >
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[18px] font-semibold tracking-tight mb-2">Magic Links</h2>
          <p className="text-[14px] text-[#888] leading-relaxed max-w-[280px]">
            Improve sign-up conversion rates and filter out spam/fraud with Magic Links.
          </p>
        </div>

        {/* Central Stage */}
        <div className="relative h-[240px] flex flex-col items-center justify-center">
          
          {/* Character Background */}
          <div 
            ref={bgRef}
            className="absolute inset-0 grid grid-cols-12 gap-1 text-[10px] font-mono text-white/10 select-none overflow-hidden"
            style={{ maskImage: 'radial-gradient(circle, black 30%, transparent 80%)' }}
          >
            {Array.from({ length: 144 }).map((_, i) => (
              <span key={i} className="opacity-5">
                {BACKGROUND_CHARS[Math.floor(Math.random() * BACKGROUND_CHARS.length)]}
              </span>
            ))}
          </div>

          {/* Magic Link Box */}
          <div 
            ref={linkBoxRef}
            className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80px] bg-[#3B82F6] px-3 py-1.5 rounded-md flex items-center shadow-lg shadow-blue-500/20"
          >
            <span className="text-[13px] font-mono font-medium tracking-wider text-white">
              {displayCode}
            </span>
            <div className="w-[1px] h-4 bg-white/60 ml-1 animate-pulse" />
          </div>

          {/* Simulated Cursor */}
          <div 
            ref={cursorRef}
            className="absolute z-30 pointer-events-none text-white drop-shadow-md"
          >
            <MousePointer2 size={24} fill="black" strokeWidth={1.5} />
          </div>

          {/* Avatar Area */}
          <div className="relative mb-6">
            <div className="w-[120px] h-[120px] rounded-2xl bg-gradient-to-b from-[#1A1A1A] to-[#121212] border border-white/10 flex items-center justify-center overflow-hidden">
              <User size={60} className="text-white/20" strokeWidth={1} />
              
              {/* Internal Avatar Outline (The "Processing" Light) */}
              <div className="absolute inset-0 border-[1.5px] border-cyan-400/0 rounded-2xl pointer-events-none" />
            </div>

            {/* Bottom Cyan Glow Indicator */}
            <div 
              ref={glowRef}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_12px_#22D3EE]"
            />
          </div>

          {/* Profile Info */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span ref={nameRef} className="text-[16px] font-medium block">
                {currentUser.name}
              </span>
              <div ref={badgeRef} className="bg-blue-500 rounded-full p-0.5">
                <Check size={10} className="text-white" strokeWidth={4} />
              </div>
            </div>
            <span ref={emailRef} className="text-[13px] text-[#666] block mt-1">
              {currentUser.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const PasscodeCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.5,
        defaults: { ease: "power2.inOut" },
      });

      // Initial state
      gsap.set(bannerRef.current, { y: -100, opacity: 0 });
      gsap.set(badgeRef.current, { scale: 0 });
      gsap.set(glowRef.current, { opacity: 0, scale: 0.5 });

      tl.to(lockRef.current, {
        color: "#22d3ee",
        duration: 0.4,
      })
      .to(glowRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
      }, "<")
      .to(bannerRef.current, {
        y: 12,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.4)",
      }, "-=0.2")
      .to(badgeRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.75)",
      }, "-=0.3")
      .to({}, { duration: 2.5 }) // Hold
      .to([bannerRef.current, badgeRef.current, glowRef.current], {
        opacity: 0,
        scale: (i, el) => (el === badgeRef.current ? 0 : 1),
        y: (i, el) => (el === bannerRef.current ? -20 : 0),
        duration: 0.4,
        ease: "power2.in",
      })
      .to(lockRef.current, {
        color: "#4b5563",
        duration: 0.3,
      }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const apps = [
    { icon: Phone, label: "Phone" },
    { icon: MessageSquare, label: "SMS", hasBadge: true },
    { icon: BookOpen, label: "Books" },
    { icon: Tv, label: "TV" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div 
        ref={containerRef}
        className="w-full max-w-[420px] bg-[#0F0F0F] rounded-[32px] overflow-hidden border border-white/5 p-8 flex flex-col gap-8 shadow-2xl"
      >
        {/* Phone Simulation Area */}
        <div className="relative h-[240px] w-full bg-[#161616] rounded-[24px] border border-white/10 overflow-hidden flex flex-col items-center justify-center">
          
          {/* Notification Banner */}
          <div 
            ref={bannerRef}
            className="absolute top-0 left-3 right-3 bg-[#1F1F1F] border border-white/10 rounded-2xl p-3 flex items-center gap-3 z-20 shadow-xl"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-white leading-none mb-1">
                Security alert
              </span>
              <span className="text-[11px] text-zinc-400 leading-tight">
                Your security passcode is <span className="text-white font-medium">7646...</span>
              </span>
            </div>
          </div>

          {/* Top Status Area / Lock */}
          <div className="absolute top-6 flex flex-col items-center">
            <div className="relative">
              <div 
                ref={glowRef}
                className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full"
              />
              <div ref={lockRef} className="relative text-zinc-600">
                <Lock className="w-6 h-6" fill="currentColor" fillOpacity={0.1} />
              </div>
            </div>
          </div>

          {/* App Grid */}
          <div className="mt-12 grid grid-cols-4 gap-4 px-6 w-full">
            {apps.map((app, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div className="relative w-12 h-12 bg-[#222222] rounded-xl flex items-center justify-center border border-white/5">
                  <app.icon className="w-6 h-6 text-zinc-500" />
                  {app.hasBadge && (
                    <div 
                      ref={badgeRef}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center border-2 border-[#161616] shadow-lg"
                    >
                      <span className="text-[9px] font-bold text-white">1</span>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-zinc-500 font-medium">{app.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-xl font-semibold tracking-tight">
            Email and SMS one-time passcodes
          </h2>
          <p className="text-zinc-400 text-[15px] leading-relaxed">
            Fast and reliable one-time passcode delivery with built-in brute force prevention.
          </p>
        </div>
      </div>
    </div>
  );
};

gsap.registerPlugin(useGSAP);

/**
 * SecurityNotification Component
 * Recreates the mobile-style passcode alert animation with pixel-perfect accuracy.
 */
export function SecurityNotification() {
  const [isShowing, setIsShowing] = useState(false);

  // Loop the animation sequence
  useEffect(() => {
    const cycle = async () => {
      setIsShowing(true);
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setIsShowing(false);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      cycle();
    };

    const timeoutId = setTimeout(cycle, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] w-full bg-[#0a0a0a] font-sans">
      {/* Device Container */}
      <div className="relative w-[320px] h-[340px] bg-[#171717] rounded-[40px] border border-white/5 overflow-hidden shadow-2xl flex flex-col items-center pt-8">
        
        {/* Top Lock Icon */}
        <motion.div
          animate={{
            color: isShowing ? "#22d3ee" : "#525252",
            filter: isShowing ? "drop-shadow(0 0 8px #22d3ee)" : "none",
          }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Lock size={24} fill={isShowing ? "currentColor" : "transparent"} />
        </motion.div>

        {/* App Grid Mockup */}
        <div className="grid grid-cols-4 gap-4 px-6 w-full opacity-40">
          <AppIcon icon={<Phone size={22} />} label="Phone" />
          <div className="relative">
            <AppIcon icon={<MessageSquare size={22} />} label="SMS" active />
            {/* Notification Badge */}
            <AnimatePresence>
              {isShowing && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#22d3ee] rounded-full border-2 border-[#171717] flex items-center justify-center text-[10px] font-bold text-black"
                >
                  1
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AppIcon icon={<Book size={22} />} label="Books" />
          <AppIcon icon={<Tv size={22} />} label="TV" />
          
          {/* Bottom row (faded out as per video) */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-12 h-12 bg-white/5 rounded-xl mx-auto" />
          ))}
        </div>

        {/* Floating Notification Toast */}
        <AnimatePresence>
          {isShowing && (
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="absolute top-10 w-[90%] bg-[#1c1c1c]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl flex items-center gap-3 z-50"
            >
              {/* Profile/Avatar Pulse */}
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center overflow-hidden">
                   <div className="w-6 h-6 border-4 border-white/30 rounded-full" />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 rounded-full border border-cyan-400 opacity-50"
                />
              </div>

              <div className="flex flex-col overflow-hidden">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-semibold text-cyan-400">Security alert</span>
                </div>
                <div className="relative">
                  <p className="text-sm text-white/90 whitespace-nowrap">
                    Your security passcode is 7646...
                  </p>
                  {/* Typing/Reveal Mask */}
                  <motion.div
                    initial={{ x: "0%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, ease: "linear", delay: 0.5 }}
                    className="absolute inset-0 bg-[#1c1c1c]"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Caption Content */}
      <div className="mt-12 max-w-[400px] text-left px-4">
        <h2 className="text-xl font-medium text-white mb-2">
          Email and SMS one-time passcodes
        </h2>
        <p className="text-[#888888] text-base leading-relaxed">
          Fast and reliable one-time passcode delivery with built-in brute force prevention.
        </p>
      </div>
    </div>
  );
}

function AppIcon({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${active ? 'bg-white/10 text-white' : 'bg-white/5 text-white/40'}`}>
        {icon}
      </div>
      <span className="text-[10px] text-white/40 font-medium">{label}</span>
    </div>
  );
}


const blockedActors = [
  { email: "bad_actor+1@email.com", time: "Blocked Aug 4 at 14:09" },
  { email: "bad_actor+2@email.com", time: "Blocked Aug 4 at 14:10" },
  { email: "another.bad.actor@throwaway.com", time: "Blocked Aug 4 at 14:12" },
  { email: "bad_actor+3@email.com", time: "Blocked Aug 4 at 14:16" },
];

export function FraudAndAbusePreventionGSAP() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Independent continuous rotation for the top pill spinner
    gsap.to(".spinner-icon", {
      rotation: 360,
      repeat: -1,
      duration: 2,
      ease: "none",
    });

    // 2. Main synchronized sequence timeline
    const tl = gsap.timeline({ repeat: -1 });

    // --- RESET STATES ---
    tl.set(".animated-red-line", { strokeDasharray: 1, strokeDashoffset: 1, opacity: 1 })
      .set(".red-node", { scale: 0, opacity: 0 })
      .set(".node-email", { filter: "blur(4px)", opacity: 0 })
      .set(".node-time", { y: 10, opacity: 0 });

    // Initial delay before sequence starts
    tl.to({}, { duration: 0.5 });

    // --- DRAW AND REVEAL PHASE ---
    const ANIMATION_START = "start";
    tl.addLabel(ANIMATION_START);

    // Draw the red line downwards over 1.5 seconds
    tl.to(".animated-red-line", {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut",
      }, ANIMATION_START
    );

    // Stagger the nodes popping in (starts slightly after the line starts drawing)
    const staggerDelay = 0.3;
    tl.to(".red-node", {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: staggerDelay,
        ease: "back.out(2)",
      }, `${ANIMATION_START}+=0.2`
    );

    // Unblur and fade in the emails
    tl.to(".node-email", {
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.4,
        stagger: staggerDelay,
        ease: "power2.out",
      }, `${ANIMATION_START}+=0.2`
    );

    // Slide up and fade in the timestamps
    tl.to(".node-time", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: staggerDelay,
        ease: "power2.out",
      }, `${ANIMATION_START}+=0.2`
    );

    // --- HOLD PHASE ---
    // Wait for the user to view the completed timeline
    tl.to({}, { duration: 3 });

    // --- DEACTIVATE/FADE OUT PHASE ---
    const FADE_OUT = "fadeout";
    tl.addLabel(FADE_OUT);

    tl.to(".animated-red-line", { opacity: 0, duration: 0.5 }, FADE_OUT)
      .to(".red-node", { opacity: 0, duration: 0.5 }, FADE_OUT)
      .to(".node-email", { opacity: 0, duration: 0.5 }, FADE_OUT)
      .to(".node-time", { opacity: 0, duration: 0.5 }, FADE_OUT);

    // Brief pause before loop restarts
    tl.to({}, { duration: 0.5 });

  }, { scope: containerRef });

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-6 font-sans antialiased">
      
      {/* Main Card */}
      <div 
        ref={containerRef}
        className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.024] overflow-hidden w-[476px] h-[528px]"
      >
        
        {/* Header Text */}
        <div className="relative z-10 flex-none px-6 pt-6">
          <h3 className="text-sm font-medium text-white">Fraud and Abuse Prevention</h3>
          <p className="mt-2 text-pretty text-[14px] leading-5 text-gray-400">
            Reduce fraudulent sign-ups and free trial abuse by blocking high-risk disposable email domains and restricting the use of email subaddresses with the "+" separator.
          </p>
        </div>

        {/* Animation Area */}
        <div className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" aria-hidden="true">
          <div className="flex h-full items-center justify-center">
            <div className="w-min">
              
              {/* Top Alert Pill */}
              <div className="flex w-[19rem] items-center gap-3.5 rounded-md bg-gray-800 bg-gradient-to-br from-white/5 to-65% p-3 ring-[0.25rem] ring-gray-950/50 relative z-20">
                
                {/* Spinner Icon */}
                <div className="spinner-icon flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path stroke="url(#paint0_radial_27_5200)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M8 1.75v1.042m0 10.416v1.042m3.125-11.663-.521.902m-5.208 9.022-.521.902m8.537-8.538-.902.52m-9.02 5.21-.903.52M14.25 8h-1.042M2.792 8H1.75m11.662 3.125-.902-.52m-9.02-5.21-.903-.52m8.538 8.538-.52-.902m-5.21-9.022-.52-.902"></path>
                    <defs>
                      <radialGradient id="paint0_radial_27_5200" cx="0" cy="0" r="1" gradientTransform="rotate(102.529 4.047 5.711) scale(11.5244)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff"></stop>
                        <stop offset="1" stopColor="#fff" stopOpacity=".2"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                <div className="font-mono text-[10px] leading-4 text-gray-500">
                  Fraudulent sign-ups detected
                </div>
                <div className="ml-auto text-[10px] leading-[1.125rem] text-gray-600">
                  14:09
                </div>
              </div>

              {/* Timeline Sequence */}
              <div className="relative pl-[2.875rem] pt-16">
                
                {/* SVG Timeline Path */}
                <div className="absolute left-[1.1875rem] top-0 -z-10 aspect-[39/393] w-[2.4375rem]">
                  <svg viewBox="0 0 39 393" fill="none" className="absolute inset-0 w-full h-full">
                    {/* Background faint line */}
                    <path stroke="rgba(255,255,255,0.05)" d="M2 0V34.6863C2 36.808 2.84285 38.8429 4.34315 40.3431L34.6569 70.6569C36.1571 72.1571 37 74.192 37 76.3137V393"></path>
                    {/* Animated foreground red line (pathLength="1" allows easy GSAP strokeDashoffset animation) */}
                    <path className="animated-red-line" pathLength="1" stroke="#ef4444" strokeWidth="1.5" d="M2 0V34.6863C2 36.808 2.84285 38.8429 4.34315 40.3431L34.6569 70.6569C36.1571 72.1571 37 74.192 37 76.3137V393"></path>
                  </svg>
                </div>

                {/* The Blocked Actors List */}
                <div className="space-y-6">
                  {blockedActors.map((actor, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-[10px] leading-[1.125rem]">
                      
                      {/* Node/Dot */}
                      <div className="relative mt-[0.0625rem] flex w-5 h-5 flex-none items-center justify-center rounded-full bg-gray-600/20">
                        {/* Dim dot base */}
                        <div className="w-1 h-1 rounded-full bg-gray-600 shadow-[0_1px_rgba(255,255,255,0.1)_inset,0_1px_2px_rgba(0,0,0,0.25)]"></div>
                        
                        {/* Animated Red 'X' Overlay */}
                        <div className="red-node absolute inset-0 flex items-center justify-center rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                            <path stroke="#131316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="m5 5 6 6M11 5l-6 6"></path>
                          </svg>
                        </div>
                      </div>

                      {/* Text details */}
                      <div>
                        <div className="node-email font-medium text-white">
                          {actor.email}
                        </div>
                        <div className="node-time text-gray-600">
                          {actor.time}
                        </div>
                      </div>
                      
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export function AdvancedSecurityCardGSAP() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Create an infinite looping timeline
    const tl = gsap.timeline({ repeat: -1 });

    // --- 1. SET INITIAL STATES ---
    tl.set(".cyan-path", { 
      strokeDasharray: 1, 
      strokeDashoffset: 1, 
      opacity: 0 
    })
    .set(".glow-ring", { opacity: 0 })
    .set(".side-scanner", { y: -100, opacity: 0 })
    .set(".shimmer-sweep", { x: "-100%", y: "-100%" });

    // Small delay before starting
    tl.to({}, { duration: 0.5 });

    // --- 2. ACTIVATE (SCAN & DRAW) ---
    const ACTIVATE_LABEL = "activate";
    tl.addLabel(ACTIVATE_LABEL);

    // Fade in the ambient glow
    tl.to(".glow-ring", { 
      opacity: 1, 
      duration: 0.8, 
      ease: "power2.out" 
    }, ACTIVATE_LABEL);
    
    // Sweep the diagonal shimmer
    tl.to(".shimmer-sweep", { 
      x: "100%", 
      y: "100%", 
      duration: 2, 
      ease: "power1.inOut" 
    }, ACTIVATE_LABEL);

    // Slide the side scanners down linearly
    tl.to(".side-scanner", { 
      y: 120, 
      duration: 1.8, 
      ease: "none" 
    }, ACTIVATE_LABEL);
    
    // Simultaneously control the opacity of the side scanners
    tl.to(".side-scanner", {
      keyframes: [
        { opacity: 0, duration: 0 },
        { opacity: 1, duration: 0.36 }, // Fade in over first 20%
        { opacity: 1, duration: 1.08 }, // Hold for 60%
        { opacity: 0, duration: 0.36 }  // Fade out over last 20%
      ],
      ease: "none"
    }, ACTIVATE_LABEL);

    // Draw the cyan fingerprint lines with a slight stagger
    tl.to(".cyan-path", { 
      strokeDashoffset: 0, 
      opacity: 1, 
      duration: 1.5, 
      ease: "power2.inOut",
      stagger: 0.05
    }, ACTIVATE_LABEL);

    // --- 3. HOLD ---
    tl.to({}, { duration: 1.5 });

    // --- 4. DEACTIVATE ---
    const DEACTIVATE_LABEL = "deactivate";
    tl.addLabel(DEACTIVATE_LABEL);

    tl.to(".glow-ring", { opacity: 0, duration: 0.5 }, DEACTIVATE_LABEL);
    tl.to(".cyan-path", { opacity: 0, duration: 0.5 }, DEACTIVATE_LABEL);
    
    // Wait before restarting loop
    tl.to({}, { duration: 0.8 });

  }, { scope: containerRef }); // Scopes all GSAP queries to this container

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-6 font-sans antialiased">
      
      {/* Main Card */}
      <div 
        ref={containerRef}
        className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.024] overflow-hidden w-[476px] h-[260px]"
      >
        
        {/* Text Area (Ordered Last) */}
        <div className="relative z-20 flex-none px-6 order-last pb-6">
          <h3 className="text-sm font-medium text-white">Advanced security</h3>
          <p className="mt-2 text-pretty text-[14px] leading-5 text-gray-400">
            Clerk is SOC 2 type 2 compliant and CCPA compliant. We conduct regular third-party audits and penetration tests.
          </p>
        </div>

        {/* Animation Area */}
        <div className="pointer-events-none relative flex-auto select-none isolate min-h-[10.25rem]">
          
          {/* Subtle Bottom Glow Overlay */}
          <div className="absolute inset-0 -bottom-5 z-10 bg-[radial-gradient(50%_100%_at_top,rgba(33,33,38,0),rgba(33,33,38,0.68)_61.5%,rgb(33,33,38))]"></div>
          
          <div className="relative flex h-full items-center justify-center">
            
            {/* Dotted Grid Background with Radial Mask */}
            <div className="absolute left-1/2 top-1/2 ml-[-6.25rem] mt-[-6.25rem] aspect-square w-[12.5rem] [mask:radial-gradient(50%_50%_at_center,white,transparent)]">
              <div className="absolute inset-0 h-full w-full bg-[image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:12px_12px] opacity-40"></div>
            </div>

            {/* Left Chamfered Panel & Scanner */}
            <div className="absolute right-full top-1/2 mr-12 mt-[-8.75rem]">
              <div className="relative aspect-[224/280] w-[14rem] -scale-x-100">
                <svg viewBox="0 0 224 280" className="absolute inset-0 h-full w-full overflow-visible">
                  <path fill="#fff" fillOpacity="0.02" d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z" />
                  <path stroke="#fff" strokeOpacity="0.05" d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z" />
                </svg>
                <div className="absolute left-4 top-1/2 -mt-7 flex h-14 w-5 items-center overflow-hidden">
                  <div className="side-scanner flex h-full w-full relative">
                    <div className="-ml-4 h-10 w-5 rounded-full bg-[#5DE3FF]/20 blur"></div>
                    <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-t from-transparent via-[#5DE3FF]/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Chamfered Panel & Scanner */}
            <div className="absolute left-full top-1/2 ml-12 mt-[-8.75rem]">
              <div className="relative aspect-[224/280] w-[14rem]">
                <svg viewBox="0 0 224 280" className="absolute inset-0 h-full w-full overflow-visible">
                  <path fill="#fff" fillOpacity="0.02" d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z" />
                  <path stroke="#fff" strokeOpacity="0.05" d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z" />
                </svg>
                <div className="absolute left-4 top-1/2 -mt-7 flex h-14 w-5 items-center overflow-hidden">
                   <div className="side-scanner flex h-full w-full relative">
                    <div className="-ml-4 h-10 w-5 rounded-full bg-[#5DE3FF]/20 blur"></div>
                    <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-t from-transparent via-[#5DE3FF]/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Fingerprint Button */}
            <div className="relative h-[4.5rem] w-[4.5rem]">
              
              {/* Button Background Layers */}
              <div className="absolute inset-0 z-10 rounded-full bg-[#0a0a0a]/60 shadow-[0_1px_rgba(255,255,255,0.03)]"></div>
              <div className="absolute inset-1 z-10 rounded-full bg-gradient-to-tr from-transparent to-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)] bg-[#1f2937]"></div>
              
              {/* Inner Glowing Backdrop */}
              <div className="glow-ring absolute inset-1 z-10 rounded-full bg-gradient-to-tr from-[#64E5FF]/20 to-transparent opacity-0"></div>
              
              {/* Outer Glowing Rings */}
              <div className="glow-ring absolute inset-0 opacity-0 z-0">
                <div className="absolute -inset-0.5 rounded-full border border-sky-300/50 shadow-[0_0_1px_1px,0_0_2px_2px,0_0_4px_4px,0_0_8px_8px,0_0_16px_16px,0_0_32px_32px] shadow-sky-300/[0.04]"></div>
                <div className="absolute inset-1 rounded-full border border-sky-300/15 shadow-[inset_0_0_4px_2px] shadow-sky-600/15"></div>
              </div>

              {/* The SVG Asset */}
              <svg viewBox="0 0 44 44" className="absolute left-1/2 top-1/2 z-20 -ml-[22px] -mt-[22px] h-11 w-11">
                
                {/* Base Dim Path */}
                <path 
                  stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".25" strokeWidth="1.5" 
                  d="M32.147 27.52c0-5.471-4.543-9.908-10.147-9.908s-10.147 4.437-10.147 9.909c0 3.744 1.329 7.184 3.551 9.897a16.152 16.152 0 0 0 2.549 2.488m21.297-22.83C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372M34.176 5.785A25.735 25.735 0 0 0 22 2.75c-4.413 0-8.562 1.1-12.176 3.035M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198" 
                />

                {/* Animated Cyan Paths. Notice pathLength="1" which makes GSAP strokeDashoffset logic perfectly predictable */}
                <path className="cyan-path" pathLength="1" stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M39.25 17.076C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372" />
                <path className="cyan-path" pathLength="1" stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M34.177 5.785A25.735 25.735 0 0 0 22.001 2.75c-4.413 0-8.562 1.1-12.177 3.035" />
                <path className="cyan-path" pathLength="1" stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M32.148 27.52c0-5.471-4.543-9.908-10.147-9.908-5.605 0-10.148 4.437-10.148 9.909 0 3.744 1.33 7.184 3.552 9.897a16.152 16.152 0 0 0 2.548 2.488" />
                <path className="cyan-path" pathLength="1" stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198" />
                <path className="cyan-path" pathLength="1" stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935" />
              </svg>

              {/* Shimmer Sweep Overlay */}
              <div className="absolute inset-1 z-30 rounded-full mix-blend-overlay overflow-hidden">
                <div className="shimmer-sweep absolute inset-0 h-full w-full bg-gradient-to-br from-transparent from-[30%] via-sky-100/70 to-transparent to-[70%]"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export function AdvancedSecurityCard() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let isMounted = true;

    const runSequence = async () => {
      // Initial pause
      await new Promise((r) => setTimeout(r, 500));

      while (isMounted) {
        // --- 1. RESET ---
        await animate(".cyan-path", { pathLength: 0, opacity: 0 }, { duration: 0 });
        await animate(".glow-ring", { opacity: 0 }, { duration: 0 });
        await animate(".side-scanner", { y: -100, opacity: 0 }, { duration: 0 });
        await animate(".shimmer-sweep", { x: "-100%", y: "-100%" }, { duration: 0 });

        await new Promise((r) => setTimeout(r, 500));

        // --- 2. ACTIVATE (SCAN & DRAW) ---
        // Fade in the ambient glow
        animate(".glow-ring", { opacity: 1 }, { duration: 0.8, ease: "easeOut" });
        
        // Sweep the diagonal shimmer
        animate(".shimmer-sweep", { x: "100%", y: "100%" }, { duration: 2, ease: "easeInOut" });

        // Slide the side scanners down
        animate(
          ".side-scanner", 
          { y: 120, opacity: [0, 1, 1, 0] }, 
          { duration: 1.8, ease: "linear", times: [0, 0.2, 0.8, 1] }
        );

        // Draw the cyan fingerprint lines
        await animate(
          ".cyan-path", 
          { pathLength: 1, opacity: 1 }, 
          { duration: 1.5, ease: "easeInOut" }
        );

        // --- 3. HOLD ---
        await new Promise((r) => setTimeout(r, 1500));

        // --- 4. DEACTIVATE ---
        animate(".glow-ring", { opacity: 0 }, { duration: 0.5 });
        await animate(".cyan-path", { opacity: 0 }, { duration: 0.5 });
        
        // Wait before restarting loop
        await new Promise((r) => setTimeout(r, 800));
      }
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [animate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-6 font-sans antialiased">
      
      {/* Main Card */}
      <div 
        ref={scope}
        className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.024] overflow-hidden w-[476px] h-[260px]"
      >
        
        {/* Text Area (Ordered Last) */}
        <div className="relative z-20 flex-none px-6 order-last pb-6">
          <h3 className="text-sm font-medium text-white">Advanced security</h3>
          <p className="mt-2 text-pretty text-[14px] leading-5 text-gray-400">
            Clerk is SOC 2 type 2 compliant and CCPA compliant. We conduct regular third-party audits and penetration tests.
          </p>
        </div>

        {/* Animation Area */}
        <div className="pointer-events-none relative flex-auto select-none isolate min-h-[10.25rem]">
          
          {/* Subtle Bottom Glow Overlay */}
          <div className="absolute inset-0 -bottom-5 z-10 bg-[radial-gradient(50%_100%_at_top,rgba(33,33,38,0),rgba(33,33,38,0.68)_61.5%,rgb(33,33,38))]"></div>
          
          <div className="relative flex h-full items-center justify-center">
            
            {/* Dotted Grid Background with Radial Mask */}
            <div className="absolute left-1/2 top-1/2 ml-[-6.25rem] mt-[-6.25rem] aspect-square w-[12.5rem] [mask:radial-gradient(50%_50%_at_center,white,transparent)]">
              <div className="absolute inset-0 h-full w-full bg-[image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:12px_12px] opacity-40"></div>
            </div>

            {/* Left Chamfered Panel & Scanner */}
            <div className="absolute right-full top-1/2 mr-12 mt-[-8.75rem]">
              <div className="relative aspect-[224/280] w-[14rem] -scale-x-100">
                <svg viewBox="0 0 224 280" className="absolute inset-0 h-full w-full overflow-visible">
                  <path fill="#fff" fillOpacity="0.02" d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z" />
                  <path stroke="#fff" strokeOpacity="0.05" d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z" />
                </svg>
                <div className="absolute left-4 top-1/2 -mt-7 flex h-14 w-5 items-center overflow-hidden">
                  <div className="side-scanner flex h-full w-full relative">
                    <div className="-ml-4 h-10 w-5 rounded-full bg-[#5DE3FF]/20 blur"></div>
                    <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-t from-transparent via-[#5DE3FF]/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Chamfered Panel & Scanner */}
            <div className="absolute left-full top-1/2 ml-12 mt-[-8.75rem]">
              <div className="relative aspect-[224/280] w-[14rem]">
                <svg viewBox="0 0 224 280" className="absolute inset-0 h-full w-full overflow-visible">
                  <path fill="#fff" fillOpacity="0.02" d="M8 .25a8 8 0 0 0-8 8v91.704c0 2.258.954 4.411 2.628 5.927l10.744 9.738A7.998 7.998 0 0 1 16 121.546v36.408a7.998 7.998 0 0 1-2.628 5.927l-10.744 9.738A7.998 7.998 0 0 0 0 179.546v92.204a8 8 0 0 0 8 8h308a8 8 0 0 0 8-8V8.25a8 8 0 0 0-8-8H8Z" />
                  <path stroke="#fff" strokeOpacity="0.05" d="M.5 99.954V8.25A7.5 7.5 0 0 1 8 .75h308a7.5 7.5 0 0 1 7.5 7.5v263.5a7.5 7.5 0 0 1-7.5 7.5H8a7.5 7.5 0 0 1-7.5-7.5v-92.204a7.5 7.5 0 0 1 2.464-5.557l10.744-9.737a8.5 8.5 0 0 0 2.792-6.298v-36.408a8.5 8.5 0 0 0-2.792-6.298l-10.744-9.737A7.5 7.5 0 0 1 .5 99.954Z" />
                </svg>
                <div className="absolute left-4 top-1/2 -mt-7 flex h-14 w-5 items-center overflow-hidden">
                   <div className="side-scanner flex h-full w-full relative">
                    <div className="-ml-4 h-10 w-5 rounded-full bg-[#5DE3FF]/20 blur"></div>
                    <div className="absolute inset-y-4 left-0 w-px bg-gradient-to-t from-transparent via-[#5DE3FF]/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Fingerprint Button */}
            <div className="relative h-[4.5rem] w-[4.5rem]">
              
              {/* Button Background Layers */}
              <div className="absolute inset-0 z-10 rounded-full bg-[#0a0a0a]/60 shadow-[0_1px_rgba(255,255,255,0.03)]"></div>
              <div className="absolute inset-1 z-10 rounded-full bg-gradient-to-tr from-transparent to-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.5)] bg-[#1f2937]"></div>
              
              {/* Inner Glowing Backdrop */}
              <div className="glow-ring absolute inset-1 z-10 rounded-full bg-gradient-to-tr from-[#64E5FF]/20 to-transparent opacity-0"></div>
              
              {/* Outer Glowing Rings */}
              <div className="glow-ring absolute inset-0 opacity-0 z-0">
                <div className="absolute -inset-0.5 rounded-full border border-sky-300/50 shadow-[0_0_1px_1px,0_0_2px_2px,0_0_4px_4px,0_0_8px_8px,0_0_16px_16px,0_0_32px_32px] shadow-sky-300/[0.04]"></div>
                <div className="absolute inset-1 rounded-full border border-sky-300/15 shadow-[inset_0_0_4px_2px] shadow-sky-600/15"></div>
              </div>

              {/* The SVG Asset */}
              <svg viewBox="0 0 44 44" className="absolute left-1/2 top-1/2 z-20 -ml-[22px] -mt-[22px] h-11 w-11">
                
                {/* Base Dim Path */}
                <path 
                  stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".25" strokeWidth="1.5" 
                  d="M32.147 27.52c0-5.471-4.543-9.908-10.147-9.908s-10.147 4.437-10.147 9.909c0 3.744 1.329 7.184 3.551 9.897a16.152 16.152 0 0 0 2.549 2.488m21.297-22.83C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372M34.176 5.785A25.735 25.735 0 0 0 22 2.75c-4.413 0-8.562 1.1-12.176 3.035M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198" 
                />

                {/* Animated Cyan Paths */}
                <motion.path className="cyan-path" stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M39.25 17.076C35.67 11.45 29.283 7.704 22 7.704c-7.283 0-13.67 3.746-17.25 9.372" />
                <motion.path className="cyan-path" stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M34.177 5.785A25.735 25.735 0 0 0 22.001 2.75c-4.413 0-8.562 1.1-12.177 3.035" />
                <motion.path className="cyan-path" stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M32.148 27.52c0-5.471-4.543-9.908-10.147-9.908-5.605 0-10.148 4.437-10.148 9.909 0 3.744 1.33 7.184 3.552 9.897a16.152 16.152 0 0 0 2.548 2.488" />
                <motion.path className="cyan-path" stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 26.53c0 5.472 4.543 9.908 10.147 9.908.695 0 1.374-.068 2.03-.198" />
                <motion.path className="cyan-path" stroke="#5DE3FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M28.088 40.25c-6.322-.953-11.162-6.29-11.162-12.73 0-2.735 2.272-4.953 5.074-4.953s5.073 2.218 5.073 4.954c0 2.736 2.272 4.954 5.074 4.954s5.074-2.218 5.074-4.954c0-8.209-6.815-14.863-15.221-14.863-8.406 0-15.22 6.654-15.22 14.863 0 2.505.634 4.865 1.755 6.935" />
              </svg>

              {/* Shimmer Sweep Overlay */}
              <div className="absolute inset-1 z-30 rounded-full mix-blend-overlay overflow-hidden">
                <div className="shimmer-sweep absolute inset-0 h-full w-full bg-gradient-to-br from-transparent from-[30%] via-sky-100/70 to-transparent to-[70%]"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export function MultifactorAuthentication() {
  const [scope, animate] = useAnimate();
  const digitRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let isMounted = true;

    const runSequence = async () => {
      // Small initial delay before starting the loop
      await new Promise((r) => setTimeout(r, 500));

      while (isMounted) {
        // --- 1. RESET STATE ---
        // Hide all digits
        await animate(
          ".digit-text",
          { opacity: 0, scale: 0.1 },
          { duration: 0 }
        );
        
        // Hide and reset highlight box to position 0
        await animate(
          ".highlight-box",
          { opacity: 0, x: 0 },
          { duration: 0 }
        );

        // Pause on empty state
        await new Promise((r) => setTimeout(r, 800));

        // --- 2. START TYPING SEQUENCE ---
        // Show highlight box at position 0
        await animate(".highlight-box", { opacity: 1 }, { duration: 0.1 });

        for (let i = 0; i < 6; i++) {
          if (!isMounted) return;

          // Assign a random digit
          const box = digitRefs.current[i];
          if (box) {
            box.textContent = Math.floor(Math.random() * 10).toString();
          }

          // Delay simulating user typing speed
          await new Promise((r) => setTimeout(r, 400));

          // Spring animate the digit appearing
          animate(
            box!,
            { opacity: 1, scale: 1 },
            { duration: 0.3, type: "spring", bounce: 0.4 }
          );

          // Move the highlight box instantly to the next slot (if not the last digit)
          // Calculation: box width (32px) + gap (12px) = 44px
          if (i < 5) {
            await animate(".highlight-box", { x: (i + 1) * 44 }, { duration: 0 });
          }
        }

        // --- 3. END SEQUENCE ---
        // Wait briefly after typing the last digit
        await new Promise((r) => setTimeout(r, 300));
        
        // Fade out the highlight box
        await animate(".highlight-box", { opacity: 0 }, { duration: 0.2 });

        // Hold the final state for the user to read before looping
        await new Promise((r) => setTimeout(r, 2500));
      }
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [animate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-6 font-sans antialiased">
      
      {/* Main Card Container */}
      <div className="group isolate flex flex-col rounded-2xl bg-[#212126] shadow-[inset_0_1px,inset_0_0_0_1px] shadow-white/[0.024] overflow-hidden w-[476px] h-[260px]">
        
        {/* Bottom Text Section */}
        <div className="relative z-10 flex-none px-6 order-last pb-6">
          <h3 className="text-sm font-medium text-white">
            Multifactor Authentication
          </h3>
          <p className="mt-2 text-pretty text-[14px] leading-5 text-gray-400">
            Each user's self-serve multifactor settings are enforced automatically during sign-in.
          </p>
        </div>

        {/* Top Animation Section */}
        <div 
          ref={scope} 
          className="pointer-events-none relative flex-auto select-none min-h-[10.25rem]" 
          aria-hidden="true"
        >
          <div className="isolate flex h-full items-center justify-center">
            
            {/* Grid Relative Container */}
            <div className="relative">
              
              {/* Layer 1: Base Empty Boxes */}
              <div className="flex gap-3">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={`base-${i}`}
                    className="flex h-10 w-8 items-center justify-center overflow-hidden rounded-md bg-[#0a0a0a] shadow-[0_10px_19px_4px_rgba(0,0,0,0.16),0_-10px_16px_-4px_rgba(255,255,255,0.04),0_0_0_1px_rgba(255,255,255,0.01),0_1px_0_0_rgba(255,255,255,0.02)]"
                  />
                ))}
              </div>

              {/* Layer 2: Animated Digits */}
              <div className="absolute inset-0 flex gap-3 z-20">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={`digit-${i}`} className="flex h-10 w-8 items-center justify-center">
                    <div
                      ref={(el) => {
                        digitRefs.current[i] = el;
                      }}
                      className="digit-text relative z-20 font-mono font-medium text-white opacity-0 scale-10"
                    ></div>
                  </div>
                ))}
              </div>

              {/* Layer 3: Cyan Highlight Box & Cursor */}
              <div 
                className="highlight-box absolute left-0 top-0 h-10 w-8 rounded-md z-30 opacity-0"
                style={{
                  boxShadow: "rgb(93, 227, 255) 0px 0px 0px 1px inset, rgba(107, 231, 255, 0.2) 0px 0px 4px 2px"
                }}
              >
                {/* Custom CSS for the smooth pulsing cursor */}
                <style>{`
                  @keyframes smoothPulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.2; }
                  }
                  .cursor-pulse {
                    animation: smoothPulse 1s ease-in-out infinite;
                  }
                `}</style>
                <div 
                  className="cursor-pulse absolute left-1.5 h-px w-5 bg-[#5DE3FF]/40" 
                  style={{
                    bottom: "5px",
                    boxShadow: "rgba(107, 231, 255, 0.4) 0px 0px 4px"
                  }}
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


const LOGO_SETS = [
  [
    { name: "inngest", icon: "inngest" },
    { name: "durable", icon: "durable" },
    { name: "upst", icon: "upst" },
  ],
  [
    { name: "Profound", icon: "profound" },
    { name: "OpenRouter", icon: "openrouter" },
    { name: "sama", icon: "sama" },
  ],
  [
    { name: "Browserbase", icon: "browserbase" },
    { name: "braintrust", icon: "braintrust" },
    { name: "Higgs", icon: "higgs" },
  ],
];

const LogoPlaceholder = ({ name }: { name: string }) => {
  // Mapping names to simple visual representations as seen in the video
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="font-bold text-2xl tracking-tight text-[#111111]">
        {name === "Browserbase" ? (
          <div className="flex items-center gap-2">
            <div className="bg-black text-white w-8 h-8 flex items-center justify-center text-sm font-bold">B</div>
            <span>Browserbase</span>
          </div>
        ) : (
          name.toLowerCase()
        )}
      </span>
    </div>
  );
};

export function LogoCarousel2() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LOGO_SETS.length);
    }, 3000); // 3 second interval
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#F9FAFB] py-20 overflow-hidden border-y border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-3 divide-x divide-gray-200">
        {LOGO_SETS[0].map((_, colIndex) => (
          <div key={colIndex} className="relative h-32 flex items-center justify-center overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${index}-${colIndex}`}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.23, 1, 0.32, 1], // Custom ease-out cubic
                }}
                className="absolute"
              >
                <LogoPlaceholder name={LOGO_SETS[index][colIndex].name} />
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}


// --- Mock Data & Icons ---
// Using Lucide or simple SVGs to represent the logos in the video
const LOGO_PAIRS = [
  {
    left: { name: "inngest", icon: <InngestLogo /> },
    right: { name: "durable", icon: <DurableLogo /> },
  },
  {
    left: { name: "Profound", icon: <ProfoundLogo /> },
    right: { name: "OpenRouter", icon: <OpenRouterLogo /> },
  },
  {
    left: { name: "Browserbase", icon: <BrowserbaseLogo /> },
    right: { name: "braintrust", icon: <BraintrustLogo /> },
  },
];

// --- Minimalist SVG Implementations ---

function InngestLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

function DurableLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l9 4.5V17.5L12 22l-9-4.5V6.5L12 2z" />
    </svg>
  );
}

function ProfoundLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8l4 4-4 4-4-4 4-4z" fill="white" />
    </svg>
  );
}

function OpenRouterLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 3 21 3 21 8" />
      <line x1="10" y1="14" x2="21" y2="3" />
      <path d="M11 19l-9-9 9-9" />
    </svg>
  );
}

function BrowserbaseLogo() {
  return (
    <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-xl rounded-sm">
      B
    </div>
  );
}

function BraintrustLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 1 17 4.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 14.5 2z" />
    </svg>
  );
}

export function LogoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LOGO_PAIRS.length);
    }, 3000); // 3 seconds pause between transitions
    return () => clearInterval(timer);
  }, []);

  const variants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -40, opacity: 0 },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white font-sans">
      <div className="grid grid-cols-2 w-full max-w-[800px] border-t border-b border-[#f0f0f0]">
        {/* Left Column */}
        <div className="relative h-[240px] flex items-center justify-center border-r border-[#f0f0f0] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${index}`}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
            >
              {LOGO_PAIRS[index].left.icon}
              <span className="text-2xl font-bold tracking-tight text-black">
                {LOGO_PAIRS[index].left.name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column */}
        <div className="relative h-[240px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${index}`}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="flex items-center gap-2"
            >
              {LOGO_PAIRS[index].right.icon}
              <span className="text-2xl font-bold tracking-tight text-black">
                {LOGO_PAIRS[index].right.name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

const blockedActor = [
  { email: "bad_actor1@email.com", time: "Blocked Aug 4 at 14:09" },
  { email: "bad_actor2@email.com", time: "Blocked Aug 4 at 14:09" },
  { email: "another.bad.actor@throwaway.com", time: "Blocked Aug 4 at 14:12" },
  { email: "bad_actor3@email.com", time: "Blocked Aug 4 at 14:16" },
];

export function FraudPreventionCard() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let isMounted = true;

    const runSequence = async () => {
      // Small pause before starting
      await new Promise((r) => setTimeout(r, 500));

      while (isMounted) {
        // 1. Reset State
        await animate(".timeline-wrapper", { opacity: 1 }, { duration: 0 });
        await animate(".timeline-line", { height: "0%" }, { duration: 0 });
        await animate(
          ".timeline-item", 
          { opacity: 0, x: -10, scale: 0.9 }, 
          { duration: 0 }
        );

        await new Promise((r) => setTimeout(r, 500));

        // 2. Expand Timeline Line
        await animate(
          ".timeline-line", 
          { height: "100%" }, 
          { duration: 0.5, ease: "easeOut" }
        );

        // 3. Stagger in the Blocked Items
        await animate(
          ".timeline-item",
          { opacity: 1, x: 0, scale: 1 },
          { duration: 0.4, delay: stagger(0.15), ease: "easeOut" }
        );

        // 4. Hold the active state for the user to read
        await new Promise((r) => setTimeout(r, 3500));

        // 5. Fade out smoothly to restart the loop
        await animate(".timeline-wrapper", { opacity: 0 }, { duration: 0.5 });
        
        await new Promise((r) => setTimeout(r, 500));
      }
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [animate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] p-6 font-sans">
      <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 w-full max-w-[440px] shadow-2xl flex flex-col h-[480px]">
        
        {/* Header Static Text */}
        <div className="mb-8">
          <h3 className="text-white font-medium text-[16px] mb-2">
            Fraud and Abuse Prevention
          </h3>
          <p className="text-[14px] text-zinc-400 leading-relaxed">
            Reduce fraudulent sign-ups and free trial abuse by blocking high-risk disposable email domains and restricting the use of email subaddresses with the "+" separator.
          </p>
        </div>

        {/* Animation Area */}
        <div ref={scope} className="flex-grow relative flex flex-col items-start pl-2">
          
          {/* Top Pill Alert */}
          <div className="bg-[#18181b] border border-white/5 rounded-md px-3 py-2 flex items-center justify-between shadow-sm z-10 relative mb-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                 <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              </div>
              <span className="text-[13px] font-medium text-zinc-300">Fraudulent sign-ups detected</span>
            </div>
            <span className="text-[11px] text-zinc-500 ml-6">14:09</span>
          </div>

          {/* Timeline Wrapper */}
          <div className="timeline-wrapper relative pl-6 w-full">
             {/* The Vertical Line */}
             <div className="absolute left-[13px] top-2 bottom-4 w-px bg-zinc-800">
                <div className="timeline-line w-full bg-red-500/40 origin-top" style={{ height: "0%" }}></div>
             </div>

             {/* Blocked Actors List */}
             <div className="flex flex-col gap-5 pt-2">
               {blockedActors.map((actor, idx) => (
                 <div key={idx} className="timeline-item flex items-start gap-4 relative opacity-0">
                    
                    {/* Node / X Icon */}
                    <div className="absolute -left-[30px] top-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.3)] z-10">
                      <X className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>

                    {/* Text Details */}
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-zinc-200">{actor.email}</span>
                      <span className="text-[11px] text-zinc-500 mt-0.5">{actor.time}</span>
                    </div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export function MFACard() {
  const [scope, animate] = useAnimate();
  const digitRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let isMounted = true;

    const runSequence = async () => {
      // Small initial delay
      await new Promise((r) => setTimeout(r, 500));

      while (isMounted) {
        // 1. Reset all boxes to empty state
        for (let i = 0; i < 6; i++) {
          if (digitRefs.current[i]) {
            digitRefs.current[i]!.textContent = "";
            animate(
              digitRefs.current[i]!,
              { borderColor: "rgba(255, 255, 255, 0.05)" }, 
              { duration: 0 }
            );
          }
        }

        await new Promise((r) => setTimeout(r, 800));

        // 2. Type digits sequentially
        for (let i = 0; i < 6; i++) {
          if (!isMounted) return;
          
          const box = digitRefs.current[i]!;
          const randomDigit = Math.floor(Math.random() * 10).toString();

          // Active typing state (Cyan border)
          await animate(
            box,
            { borderColor: "#22d3ee" }, // Cyan-400
            { duration: 0.1 }
          );

          // Insert the number
          box.textContent = randomDigit;

          // Revert to "filled" state (Lighter grey than empty)
          animate(
            box,
            { borderColor: "rgba(255, 255, 255, 0.2)" }, 
            { duration: 0.2 }
          );

          // Delay before next digit
          await new Promise((r) => setTimeout(r, 250));
        }

        // 3. Pause at the end before looping
        await new Promise((r) => setTimeout(r, 2000));
      }
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [animate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a] p-6 font-sans">
      <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col justify-between w-full max-w-[400px] h-[340px] shadow-2xl">
        
        {/* Top: Animated Input Boxes */}
        <div ref={scope} className="flex-grow flex items-center justify-center">
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                ref={(el) => {
                  digitRefs.current[i] = el;
                }}
                className="w-10 h-12 rounded-md border border-white/5 bg-white/[0.02] flex items-center justify-center text-xl font-mono text-white transition-colors"
                style={{
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)"
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom: Static Text */}
        <div className="pt-8">
          <h3 className="text-white font-medium text-[15px] mb-2">
            Multifactor Authentication
          </h3>
          <p className="text-[14px] text-zinc-400 leading-relaxed">
            Each user's self-serve multifactor settings are enforced automatically during sign-in.
          </p>
        </div>
        
      </div>
    </div>
  );
}




export default function Home(){
  return(
    <>
      <MagicLinksComponent />
    </>
  )
}


