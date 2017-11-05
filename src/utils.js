// @flow

// eslint-disable-next-line
export function normalizePropToReactStyle(property: string): string {
  return property.replace(/(-.)/g, txt => txt.slice(1).toUpperCase());
}
