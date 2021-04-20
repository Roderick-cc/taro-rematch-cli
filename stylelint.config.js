/*
 * @Description: 
 * @Author: shide
 * @Date: 2021-04-19 20:25:56
 * @LastEditTime: 2021-04-19 20:26:08
 * @FilePath: /taro-cli/stylelint.config.js
 */

const MAX_CLASS_DEEP = 7

module.exports = {
  'extends': [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines'
  ],
  rules: {
    'font-family-no-missing-generic-family-keyword': [true, { ignoreFontFamilies: ['iconfont'] }],
    'unit-no-unknown': [true, { ignoreUnits: 'rpx' }],
    'color-named': null,
    'at-rule-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    /** 禁止未知属性 */
    'property-no-unknown': [true, { ignoreProperties: ['-webkit-box-orient', 'box-orient'] }],
    'media-feature-name-no-unknown': null,
    /** @description 禁止空块 */
    'block-no-empty': true,
    /** @description 括号左边必须有空格 */
    'block-opening-brace-space-before': 'always',
    /** @description 必须有分号 */
    'declaration-block-trailing-semicolon': 'always',
    /** @description 锁进为2 */
    'indentation': 2,
    /** @description 嵌套深度限制2 */
    'indentation': 2,
    /** @description 速写属性禁止冗余值 */
    'shorthand-property-no-redundant-values': true,
    /** @description 选择器命名必须小写字母-小写字母 */
    'selector-class-pattern': /^[a-z0-9]+([a-z0-9-]+[a-z0-9]+)?$|^subscribe\-\-live-player-subscribe\_\_btn$/,
    'scss/dollar-variable-pattern': /^[a-zA-Z]+([a-z0-9A-Z-]+[a-z0-9A-Z]+)?$/,
    'scss/at-mixin-pattern': /^[a-zA-Z]+([a-z0-9A-Z-]+[a-z0-9A-Z]+)?$/,
    /** @description 字符串必须使用单引号 */
    'string-quotes': 'single',
    /** @description 禁止无效十六进制颜色 */
    'color-no-invalid-hex': true,
    /** @description 禁止重复的字体系列名称。 */
    'font-family-no-duplicate-names': true,
    /** @description 禁止在字符串中使用（未转义的）换行符 */
    'string-no-newline': true,
    /** @description 禁止在声明块中使用重复的属性。 */
    'declaration-block-no-duplicate-properties': true,
    /** @description 禁止空块 */
    'block-no-empty': true,
    /** @description 禁止空注释 */
    'block-no-empty': true,
    /** @description 禁止覆盖覆盖相关的速记属性的速记属性 */
    'declaration-block-no-shorthand-property-overrides': true,
    /** @description 禁止使用未知的伪元素选择器。 */
    'selector-pseudo-element-no-unknown': true,
    /** @description 禁止空注释 */
    'comment-no-empty': true,
    /** @description 禁止权重高的选择器在权重交低的选择器前 */
    'no-descending-specificity': true,
    /** @description 禁止空来源 */
    'no-empty-source': true,
    /** @description 禁止重复@import */
    'no-duplicate-at-import-rules': true,
    /** @description 禁止在样式表中使用重复的选择器。 */
    'no-duplicate-selectors': true,
    /** @description 禁止使用多余的分号 */
    'no-extra-semicolons': true,
    /** @description 单位小数最多为2位 */
    'number-max-precision': 2,
    /** @description 单行声明块中的声明数量最多为100 */
    'declaration-block-single-line-max-declarations': 100,
    /** @description 属性选择器的数量最为2 */
    'selector-max-attribute': 2,
    /** @description 选择器中类数为最多5个 */
    'selector-max-class': MAX_CLASS_DEEP,
    'selector-max-combinators': MAX_CLASS_DEEP,
    'selector-max-compound-selectors': MAX_CLASS_DEEP,
    /** @description 选择器中的其他类型选择器数为2两个*/
    'selector-max-pseudo-class': 2,
    /** @description 选择器相邻的空行为1 */
    'selector-max-empty-lines': 1,
    'value-list-max-empty-lines': 0,
    /** @description 不允许按类型限定选择器。 */
    'selector-no-qualifying-type': true,
    /** @description 嵌套层数最大为5 */
    'max-nesting-depth': MAX_CLASS_DEEP,
    /** @description 禁止未知动画 */
    'no-unknown-animations': true,
    /** 颜色必须小写 */
    'color-hex-case': 'lower',
    /** @description 逗号后必须空格 */
    'function-comma-space-before': 'always',
    /** @description 网址必须字符串 */
    'function-url-quotes': 'always',
    /** @description 网址必须小写 */
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'property-case': 'lower',
    /** @description 声明块后必须换行 */
    'declaration-block-semicolon-newline-after': 'always',
    /** @description 禁止未知选择器 */
    'selector-type-no-unknown': [true, { ignoreTypes: ['page'] }],
    'declaration-property-value-disallowed-list': null
  }
}

