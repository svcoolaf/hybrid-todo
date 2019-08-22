import theme from "./theme";

function getMedia(min: number, max?: number) {
  return `@media (min-width: ${min}px)${
    max !== undefined ? ` and (max-width: ${max}px)` : ""
  }`;
}

const cssMediaQueries = {
  smaller: getMedia(0, theme.widths.small),
  small: getMedia(0, theme.widths.medium),
  big: getMedia(theme.widths.medium),
  impossible: getMedia(0, 0)
};

export default cssMediaQueries;

export function isWindowAvailable() {
  return typeof window !== "undefined";
}
export const MediaQueries = {
  smaller: isWindowAvailable()
    ? 0 < window.innerWidth && window.innerWidth < theme.widths.small
    : true,
  small: isWindowAvailable()
    ? 0 < window.innerWidth && window.innerWidth < theme.widths.medium
    : true,
  big: isWindowAvailable() ? theme.widths.medium < window.innerWidth : true,
  impossible: () => false
};
