---
sidebar_label: "CodeBlock"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# CodeBlock

### Title

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Syntax highlighting

```js
console.log("Every repo must come with a mascot.");
```

### Line Highlighting

```js
１行
function HighlightText(highlight) {
  if (highlight) {
    // highlight-next-line
    return "This text is highlighted!";
  }

  return "Nothing highlighted";
}

複数行
// highlight-start
function HighlightText(highlight) {
  if (highlight) {
    return "This range is highlighted!";
  }

  return "Nothing highlighted";
}
// highlight-end
```

### Line numbering

```jsx {1,4-6,11} showLineNumbers
import React from "react";

function MyComponent(props) {
  if (props.isBar) {
    return <div>Bar</div>;
  }

  return <div>Foo</div>;
}

export default MyComponent;
```

### Using JSX markup in code blocks

<pre>
  <b>Input: </b>1 2 3 4{"\n"}
  <b>Output: </b>"366300745"{"\n"}
</pre>

### Codeblock & Tabs

<Tabs>
<TabItem value="js" label="JavaScript">

```js
function helloWorld() {
  console.log("Hello, world!");
}
```

</TabItem>
<TabItem value="py" label="Python">

```py
def hello_world():
  print("Hello, world!")
```

</TabItem>
<TabItem value="java" label="Java">

```java
class HelloWorld {
  public static void main(String args[]) {
    System.out.println("Hello, World");
  }
}
```

</TabItem>
</Tabs>
