/**
 * Converts a camelCase string to a spaced string.
 *
 * This function takes a camelCase string (e.g., "VariableDeclaration") and inserts
 * a space before each uppercase letter, then trims any leading or trailing spaces.
 *
 * @param {string} str - The camelCase string to convert.
 * @returns {string} The converted string with spaces inserted before uppercase letters.
 *
 * @example
 * const input = "VariableDeclaration";
 * const output = camelCaseToSpaced(input);
 * console.log(output); // Output: "Variable Declaration"
 */

export function camelCaseToSpaced(str: string) {
  return str.replace(/([A-Z])/g, " $1").trim();
}
