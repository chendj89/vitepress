declare global {
  /**
   * 用户
   */
  interface IUser {
    /**
     * 用户名
     */
    username: string;
    /**
     * 密码
     */
    pwd: string;
  }
  /**
   * 过滤参数
   * useFilter
   */
  // interface IFilter {
  //   /**
  //    * 文件路径
  //    */
  //   id: string;
  //   /**
  //    * 允许包含 执行顺序3
  //    */
  //   include: string[];
  //   /**
  //    * 不允许包含 执行顺序2
  //    */
  //   exclude: string[];
  //   /**
  //    * 文件结尾 执行顺序1
  //    */
  //   endsWith: string;
  //   /**
  //    * 自定义属性
  //    */
  //   [props: string]: any;
  // }
  type TUserOptions = Partial<
    {
      /**
       * 文件结尾
       */
      endsWith: string;
      alias: Record<string, string>;
    } & MergeExclusive<
      {
        /**
         * 包含路径
         */
        include: string[];
      },
      {
        /**
         * 排除路径
         */
        exclude: string[];
      }
    >
  >;
}

export {};
