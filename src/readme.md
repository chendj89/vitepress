### 规范

##### 文件命名

- 文件中导出多个方法用复数命名
  - useArrays.ts 复数名
  - useArraysUnit 具体方法

#### 定义接口

- 接口定义规则
  - `I`开头,如定义用户: `IUser`
  - 接口中尽量写注释
- 定义type
  - `T`开头,如定义新数组: `TArray`

```ts
// 定义方法
interface String {
  helloword(): string;
}
```



#### 文档注释[jsdoc](https://www.jsdoc.com.cn/)

- 复杂参数函数
```ts
/**
 * 
 * @param opts 操作
 * @param opts.name 名称
 * @param opts.age 年龄
 */
export function getName(opts:{name:string;age:number}){

}
```
