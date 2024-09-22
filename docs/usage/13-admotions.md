---
sidebar_label: "Admonitions"
---

# Admonitions

基本的な Markdown 構文に加えて、テキストを 3 つのコロンで囲み、その後にそのタイプを示すラベルを付ける特別な警告構文があります。

例：

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

## タイトルの設定

オプションでタイトルを指定することもできます。

:::note[Your Title **with** some _Markdown_ `syntax`!]

Some **content** with some _Markdown_ `syntax`.

:::

## 警告をネストする

警告はネストできます。親警告レベルごとに、さらにコロン : を使用します。

:::::info[Parent]

Parent content

::::danger[Child]

Child content

:::tip[Deep Child]

Deep child content

:::

::::

:::::

## MDX と一緒に警告を使う

警告内でも MDX を使用できます。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip[Use tabs in admonitions]

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::
