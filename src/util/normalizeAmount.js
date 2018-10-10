export default function normalizeAmount(v, prev) {
  if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
    if (v === '.') {
      return '0.';
    }
    return prev;
  }
  return v;
}