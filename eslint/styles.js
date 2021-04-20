/*
 * @Description: 风格Eslint配置
 * @Author: zhoulong.yang
 * @Date: 2021-03-31 14:22:40
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-04-04 16:24:12
 */
const isDebug = process.env.LINT_MODE === 'prod' ? 2 : 1

module.exports = {
  rules: {
    /** @description 尽可能使用单引号 */
    "quotes": [2, "single"],
    /** @description 缩进为2格 */
    "indent": [2, 2, { SwitchCase: 1 }],
    /** @description 禁止分号 */
    "semi": [2, "never"],
    /** @description 操作符号前后空格 */
    "space-infix-ops": [2, { "int32Hint": false }],
    /** @description 一元操作符前后空格 */
    "space-unary-ops": 2,
    /** @description 注释前后空格 */
    "spaced-comment": 2,
    /** @description switch case 空格 */
    "switch-colon-spacing": 2,
    /** @description 数组括号前后使用空格 */
    "array-bracket-spacing": [2, "always"],
    /** @description 强制驼峰命名规则 */
    "camelcase": 2,
    /** @description 逗号后空格 */
    "comma-spacing": [2, { "before": false, "after": true }],
    /** @description 保存上下文名称 */
    "consistent-this": [2, "_this"],
    /** @description jsx props 使用双引号 */
    "jsx-quotes": [2, "prefer-double"],
    /** @description 一行代码最大长度100，tab为2 */
    "max-len": [isDebug, { code: 120, "tabWidth": 2 }],
    /** @description 一个文件最大行数 */
    "max-lines": [2, { max: 1000 }],
    /** @description 函数最大行数270（忽略注释、空行） */
    "max-lines-per-function": [2, { max: 270, "skipBlankLines": true, "skipComments": true }],
    /** @description 箭头函数的参数必须使用括号 */
    "arrow-parens": 2
  }
}
