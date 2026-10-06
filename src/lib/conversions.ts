export function gramsToCups(grams: number, gramsPerCup: number): number {
  if (!gramsPerCup || gramsPerCup <= 0) return 0;
  return grams / gramsPerCup;
}

export function cupsToGrams(cups: number, gramsPerCup: number): number {
  if (!gramsPerCup || gramsPerCup <= 0) return 0;
  return cups * gramsPerCup;
}

export function mlToCups(ml: number, mlPerCup = 236.588): number {
  if (!mlPerCup || mlPerCup <= 0) return 0;
  return ml / mlPerCup;
}

export function gramsToOunces(grams: number): number {
  return grams / 28.349523125;
}

export function ouncesToGrams(ounces: number): number {
  return ounces * 28.349523125;
}

// Format cups as a readable string: e.g. "1 1/2" or "3/4"
export function formatCups(cups: number): string {
  if (!isFinite(cups)) return "";
  if (cups <= 0) return "0";

  const whole = Math.floor(cups);
  const frac = cups - whole;

  const fracStr = decimalToFraction(frac, 16);

  if (whole === 0) return fracStr || cups.toFixed(2);
  return fracStr ? `${whole} ${fracStr}` : `${whole}`;
}

function decimalToFraction(dec: number, maxDen = 16): string | null {
  if (dec < 1e-6) return null;
  let best = { num: 0, den: 1, err: 1 };
  for (let den = 1; den <= maxDen; den++) {
    const num = Math.round(dec * den);
    const err = Math.abs(dec - num / den);
    if (err < best.err) best = { num, den, err };
  }
  if (best.num === 0) return null;
  const g = gcd(best.num, best.den);
  return `${best.num / g}/${best.den / g}`;
}

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}
