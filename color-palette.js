import { hsl } from "d3-color";

const defaultBase = 3;
const defaultSaturation = 0.5;
const defaultLightnessMin = 0.5;
const defaultLightnessMax = 0.8;
const defaultLightnessDecay = 20;

/**
 * Generate a color scheme with a given number of colors.
 * @param {number} count The number of colors to generate.
 * @param {number} base The base number to use for the color scheme.
 * @param {number} saturation The saturation of the colors. Between 0 and 1.
 * @param {number} lightnessMin The minimum lightness of the colors. Between 0 and 1.
 * @param {number} lightnessMax The maximum lightness of the colors. Between 0 and 1.
 * @param {number} lightnessDecay The lightness decay of the colors.
 * @returns {*[{string}]} colors
 */
export function generate(
  count,
  base = defaultBase,
  saturation = defaultSaturation,
  lightnessMin = defaultLightnessMin,
  lightnessMax = defaultLightnessMax,
  lightnessDecay = defaultLightnessDecay
) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const tmp = i.toString(base).split("").reverse().join("");
    const hue = (360 * parseInt(tmp, base)) / Math.pow(base, tmp.length);
    const lightness =
      lightnessMin + (lightnessMax - lightnessMin) * (1 - Math.exp(-i / lightnessDecay));
    const color = hsl(hue, saturation, lightness);
    colors.push(color.formatHex());
  }
  return colors;
}