---
title: Input
nav:
  title: 组件
  path: /components
---

## 基础使用

### type

```tsx
import React from 'react';
import { Input, Icon } from 'hugSun-UI';
const [val, setVal] = React.useState(null);

const setProps = {};
export default () => {
  return (
    <>
      <span style={{ fontSize: '16px' }}>基本-大小</span>
      <Input></Input>
      <Input size="large"></Input>
      <span style={{ fontSize: '16px' }}> 带默认值</span>
      <Input defaultValue="默认值"></Input>
      <Input value="初始值"></Input>
      <span style={{ fontSize: '16px' }}>限制长度为5</span>
      <Input maxlength={5}></Input>
      <span style={{ fontSize: '16px' }}>带标签的 input</span>
      <Input addonBefore="before" addonAfter="after"></Input>
      <span style={{ fontSize: '16px' }}>带有前缀图标的 input</span>
      <Input prefix={<Icon type="loading" />}></Input>
    </>
  );
};
```

<API></API>
