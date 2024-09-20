---
sidebar_label: "MyDoc"
sidebar_position: 50
id: mydoc
title: My Document
description: My document description
slug: /my-custom-url
---

# リンク

## リンクの書き方

### 同一階層

B [相対](./hello.md)

### 別階層

A [ルート](/docs/tutorial-basics/create-a-page).

B [相対](../docs/tutorial-basics/create-a-page).

C [絶対](http://localhost:3000/my-docusaurus/docs/tutorial-basics/create-a-page).

## 画像

別ページで表示

[Docusaurus logo](/img/docusaurus.png)

埋め込み

![Docusaurus logo](/img/docusaurus.png)

### Code Block

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## ADmonitions

Docusaurus has a special syntax to create admonitions and callouts:

:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::

## MDX and React Components

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
onClick={() => {
alert(`You clicked the color ${color} with label ${children}`)
}}>
{children}
</span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
