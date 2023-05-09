---
title: Highlight 代码高亮
group: 基础组件
---

# Highlight 代码高亮

> 迁移自 TechUI，并进行精简和修改以适配 TechUI Studio

高亮代码，相较编辑器而言要更轻量，组件封装了[highlight.js](https://highlightjs.org) 的高亮能力，目前 `highlight.js` 支持 [187 种不同类型的语言](https://highlightjs.org/static/demo/)，为防止打包体积过大，目前我们仅加载了部分语言类型，若有新增的语言需求，请联系我们添加。

## 何时使用

展示代码时使用，不需要编辑代码时使用。

## 代码演示

### 指定语言

你可以通过 `language` 指定语言高亮，通过 `theme` 指定高亮主题。

<code src="./demos/basic.tsx" ></code>

### 展示代码块行号

你可以通过 `lineNumber` 指定是否需要展示代码块行号。

<code src="./demos/lineNumber.tsx" ></code>

### JSON 格式

当格式为 json 时，`children` 支持传入 `object` 对象用于层级收放展示。

<code src="./demos/json.tsx" ></code>

## API 参数

### Highlight

| 参数       | 说明                                                                                                                                                                                   | 类型    | 默认值  |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :------ |
| language   | 指定语言类型，详见下表，若不指定语言组件会智能探测为可选类型语言中的一种进行渲染                                                                                                       | string  | -       |
| theme      | 指定主题，可选 `dark`, `light`                                                                                                                                                         | string  | `light` |
| lineNumber | 指定代码块行号是否开启，可选 `true`, `false`                                                                                                                                           | boolean | false   |
| copyable   | 指定代码块是否展示复制按钮，可选 `true`, `false`                                                                                                                                       | boolean | true    |
| height     | 指定代码块高度，用于需要控制代码块高度固定的场景, 非 innerHTML 场景有效                                                                                                                | number  | -       |
| innerHTML  | 使用 `dangerouslySetInnerHTML` 来渲染多段代码，代码使用`<pre><code></code></pre>`进行包裹，在从 cms 场景获取代码渲染的情况下非常有用，请自行确保传入的代码内容安全，防止`XSS`代码注入. | boolean | false   |

### 目前支持的语言列表

- javascript
- typescript
- css
- java
- json
- markdown
- xml
- yaml