/**
 * Check whether the given value is a boolean.
 * @param value The value to check (optional)
 * @returns true if the value is a boolean
 */
export function isBoolean(value?: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Check whether the given value is a function.
 * @param value The value to check (optional)
 * @returns true if the value is a function
 */
export function isFunction(value?: any): boolean {
  return typeof value === 'function';
}

/**
 * Check whether the given value is null or undefined.
 * @param value The value to check (optional)
 * @returns true if the value is null or undefined
 */
export function isNil(value?: any): value is null | undefined {
  return typeof value === 'undefined' || value === null;
}

/**
 * Check whether the given value is null.
 * @param value The value to check (optional)
 * @returns true if the value is null
 */
export function isNull(value?: any): value is null {
  return value === null;
}

/**
 * Check whether the given value is a number.
 * @param value The value to check (optional)
 * @returns true if the value is a number
 */
export function isNumber(value?: any): value is number {
  return typeof value === 'number';
}

/**
 * Check whether the given value is an object.
 * @param value The value to check (optional)
 * @returns true if the value is an object
 */
export function isObject(value?: any): value is object {
  return value !== null && typeof value === 'object';
}

/**
 * Check whether the given value is a plain object.
 * @param value The value to check (optional)
 * @returns true if the value is a plain object
 */
export function isPlainObject(value?: any): value is object {
  if (!isObject(value)) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);

  if (proto === null) {
    return true;
  }

  const ctor =
    Object.prototype.hasOwnProperty.call(proto, 'constructor') &&
    proto.constructor;

  return (
    typeof ctor === 'function' &&
    ctor instanceof ctor &&
    Function.prototype.toString.call(ctor) ===
      Function.prototype.toString.call(Object)
  );
}

/**
 * Check whether the given value is a string.
 * @param value The value to check (optional)
 * @returns true if the value is a string
 */
export function isString(value?: any): value is string {
  return typeof value === 'string';
}

/**
 * Check whether the given value is a symbol.
 * @param value The value to check (optional)
 * @returns true if the value is a symbol
 */
export function isSymbol(value?: any): value is symbol {
  return typeof value === 'symbol';
}

/**
 * Check whether the given value is undefined.
 * @param value The value to check (optional)
 * @returns true if the value is undefined
 */
export function isUndefined(value?: any): value is undefined {
  return typeof value === 'undefined';
}
