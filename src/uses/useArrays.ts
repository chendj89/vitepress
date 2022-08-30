/**
 * 创建一个去重的`array`数组副本
 * @param array 要检查的数组
 * @returns 返回新的去重后的数组
 */
export function useArraysUniq<T>(array: T[]): T[] {
  return [...new Set(array)];
}
