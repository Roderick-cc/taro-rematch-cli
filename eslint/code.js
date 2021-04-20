/*
 * @Description: 编码限制
 * @Author: zhoulong.yang
 * @Date: 2021-03-31 14:22:45
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-04-12 10:42:08
 */
const isDebug = process.env.LINT_MODE === 'prod' ? 2 : 1
const { join } = require('path')

module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: join( __dirname, '../tsconfig.json')
  },
  rules: {
    /** @description 禁止使用未声明的变量，除非注释未global */
    "no-undef": 2,
    /** @description 禁止未使用的变量 */
    "no-unused-vars": 0,
    /** @description 禁止console */
    "no-console": [isDebug, { allow: ["error"] }],
    /** @description 禁止原生api */
    "no-alert": isDebug,
    /** @description 禁止变量提升 */
    "block-scoped-var": 2,
    /** @description 禁止var声明 */
    "no-var": 2,
    /** @description 声明后不改变的变量使用const声明 */
    "prefer-const": 2,
    /** @description 禁止未使用表达式 */
    "no-unused-expressions": isDebug,
    /** @description 嵌套深度最大为4 */
    "max-depth": [2, { max: 4 }],
    /** @description 回调函数嵌套最大4 */
    "max-nested-callbacks": [2, { max: 4 }],
    /** @description 禁止混用操作符 */
    "no-mixed-operators": 2,
    /** @description 禁用嵌套三元表达式 */
    "no-nested-ternary": 2,
    /** @description 禁止空函数 */
    "no-empty-function": isDebug,
    /** @description switch必须存在default语句 */
    "default-case": 2,
    /** @description 禁止重复导入模块 */
    "no-duplicate-imports": 2,
    /** @description 禁止未知意义数字 */
    "no-magic-numbers": 2,
    /** @description 尽可能使用.号访问 */
    "dot-notation": 2,
    /** @description if else 最多流程为3级 */
    "complexity": [2, 20],
    /** @description 函数要么返回值，要么永远不返回值 */
    "consistent-return": 2,
    /** @description 总是使用 === 和 !==  */
    "eqeqeq": 2,
    /** @description 禁止不必要的 await */
    "no-return-await": 2,
    /** @description 禁止逗号操作符 */
    "no-sequences": 2,
    /** @description 禁止不必要的字符串链接 */
    "no-useless-concat": 2,
    /** @description 函数必须显式返回类型 */
    "@typescript-eslint/explicit-function-return-type": 2,
    /** @description toString 只能在有用信息的对象上调用 */
    "@typescript-eslint/no-base-to-string": [2, { ignoredTypeNames: ["RegExp"] }],
    /** @description 比较运输必须使用清晰 */
    "@typescript-eslint/no-confusing-non-null-assertion": 2,
    /** @description 禁止空接口 */
    "@typescript-eslint/no-empty-interface": 2,
    /** @description 禁止使用any */
    "@typescript-eslint/no-explicit-any": 2,
    /** @description 禁止永远为true或永远为false的条件 */
    // "@typescript-eslint/no-unnecessary-condition": isDebug,
    /** @description 优先使用简洁的可选链表达式，而不是链式逻辑 */
    "@typescript-eslint/prefer-optional-chain": 2,
    /** @description 需要任何返回Promise的函数或方法以标记为异步 */
    "@typescript-eslint/promise-function-async": 2,
    /** @description 禁止声明不适用变量 */
    "@typescript-eslint/no-unused-vars": isDebug,
    /** @description this别名必须为_this */
    "@typescript-eslint/no-this-alias": [2, { allowedNames: ["_this"], allowDestructuring: true }]
  }
}
