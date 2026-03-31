/**
 * Polar order/checkout payloads vary by API version; resolve a product id when possible.
 */
export function extractPolarOrderProductId(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const d = data as Record<string, unknown>;

  if (typeof d.productId === 'string' && d.productId) return d.productId;
  if (typeof d.productId === 'number') return String(d.productId);

  const product = d.product;
  if (product && typeof product === 'object') {
    const pid = (product as Record<string, unknown>).id;
    if (typeof pid === 'string' && pid) return pid;
    if (typeof pid === 'number') return String(pid);
  }

  const items = (d.items ?? d.lineItems ?? d.orderItems) as unknown;
  if (!Array.isArray(items) || items.length === 0) return null;

  const first = items[0];
  if (!first || typeof first !== 'object') return null;
  const it = first as Record<string, unknown>;

  if (typeof it.productId === 'string' && it.productId) return it.productId;
  if (typeof it.productId === 'number') return String(it.productId);

  const itProduct = it.product;
  if (itProduct && typeof itProduct === 'object') {
    const pid = (itProduct as Record<string, unknown>).id;
    if (typeof pid === 'string' && pid) return pid;
    if (typeof pid === 'number') return String(pid);
  }

  const price = it.price;
  if (price && typeof price === 'object') {
    const pid = (price as Record<string, unknown>).productId;
    if (typeof pid === 'string' && pid) return pid;
    if (typeof pid === 'number') return String(pid);
  }

  return null;
}
