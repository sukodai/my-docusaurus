---
sidebar_label: "MDX & React"
---

# MDX & React

Markdown ファイル内に JSX を記述し、それを React コンポーネントとしてレンダリングできます。

#### 埋め込み例

```jsx
export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.
```

#### 表示例

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

:::note
ただし、複雑になるのと、メンテナンス性のため、別ファイルに記述し、
マークダウンファイル内で、import して利用するのがおすすめです。
