/*
 * @Description: React eslint配置
 * @Author: zhoulong.yang
 * @Date: 2021-03-31 16:12:58
 * @LastEditors: zhoulong.yang
 * @LastEditTime: 2021-04-02 14:07:12
 */
const isDebug = process.env.LINT_MODE === 'prod' ? 2 : 1

module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  plugins: [
    "react",
    "react-hooks"
  ],
  rules: {
    /** @description 禁止使用数组索引为key */
    "react/no-array-index-key": 2,
    /** @description 阻止危险行为 */
    "react/no-danger": 2,
    /** @description 防止在一个文件中声明多个状态组件 */
    "react/no-multi-comp": [2, { ignoreStateless: true }],
    /** @description 防止错别字 */
    "react/no-typos": 2,
    /** @description 防止声明不使用的props */
    "react/no-unused-prop-types": isDebug,
    /** @description 没有子组件的组件不需要多余的闭合 */
    "react/self-closing-comp": 2,
    /** @description 多行组件闭合位置 */
    "react/jsx-closing-tag-location": isDebug,
    /** @description 禁止重复的道具 */
    "react/jsx-no-duplicate-props": 2,
    /** @description 防止道具之间多个空格 */
    "react/jsx-props-no-multi-spaces": isDebug,
    /** @description 多行组件必须存在括号包裹 */
    "react/jsx-wrap-multilines": 2,
    /** @description 违反hooks规则 */
    "react-hooks/rules-of-hooks": 2,
    /** @description hooks监听数组 */
    "react-hooks/exhaustive-deps": 1,
    /** @description 禁止使用children作为道具 */
    "react/no-children-prop": 2,
    "react/prop-types": 0,
    "react/sort-comp": 0
  }
}
