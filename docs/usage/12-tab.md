---
sidebar_label: "Tab"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# Tab

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

<Tabs
  defaultValue="apple"
  values={[
    { label: "Apple", value: "apple" },
    { label: "Orange", value: "orange" },
    { label: "Banana", value: "banana" },
  ]}
>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>
