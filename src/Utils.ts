export function isEmptyOrWhitespace(str: string) {
  return !str || str.trim().length === 0;
}
export function isNullOrUndefined(value: any) {
  return value === null || value === undefined;
}
