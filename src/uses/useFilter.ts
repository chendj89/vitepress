/**
 * 过滤文件
 * @param options
 * @returns
 */
/**
 * @param  {Partial<IFilter>} options
 */
export default function useFilter(options: Partial<IFilter>) {
  let defaults: IFilter = {
    include: [],
    exclude: ["node_modules"],
    id: "",
    endsWith: "",
  };
  let opts: IFilter = Object.assign({}, defaults, options);
  let isAllow = true;
  // 文件结尾不匹配，直接返回
  if (opts.endsWith) {
    if (!opts.id.endsWith(opts.endsWith)) {
      return false;
    }
  }
  // 文件在不应该包含的路径中，返回false
  opts.exclude.map((item) => {
    if (opts.id.includes(item)) {
      isAllow = false;
    }
  });
  if (isAllow) {
    // 文件在允许的路径中
    if (opts.include.length) {
      isAllow = false;
      opts.include.map((item) => {
        if (opts.id.includes(item)) {
          isAllow = true;
        }
      });
    }
  }
  return isAllow;
}
