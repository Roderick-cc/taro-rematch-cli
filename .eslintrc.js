/*
 * @Description: 
 * @Author: shide
 * @Date: 2021-04-19 19:44:12
 * @LastEditTime: 2021-04-19 21:09:40
 * @FilePath: /taro-cli/.eslintrc.js
 */
const codeConfig = require('./eslint/code')
const styleConfig = require('./eslint/styles')
const reactConfig = require('./eslint/react')
const deepmerge = require('deepmerge');
const isDebug = process.env.LINT_MODE === 'prod' ? 2 : 1;

const defautlConfig = {
  env: {
    'browser': true,
    'node': true,
    'mocha': true,
    'jest': true
  },
  extends: [
    'eslint:recommended',
    'taro/react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2017
  },
  globals: {
    'JSX': true,
    'React': true,
    'NodeJS': true
  },
  rules: {
    // 以下重写强制eslint默认规则等级
    'no-ex-assign': 2,
    'no-empty': isDebug,
    'no-invalid-regexp': 2,
    'no-misleading-character-class': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'require-atomic-updates': 2,
    'use-isnan': 2,
    'no-case-declarations': 2,
    'no-empty-pattern': 2,
    'no-fallthrough': 2,
    'no-useless-escape': 2,
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2
  }
}

const config = deepmerge.all([defautlConfig, styleConfig, codeConfig, reactConfig])


module.exports = config
