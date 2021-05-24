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
const handleChange = () => {
  console.log('change', 111);
};
const handlePressEnter = () => {
  console.log('PressEnter', 111);
};
const handleFocus = () => {
  console.log('focus');
};

const setProps = {
  defaultValue: 'test',
  className: 'test',
};
export default () => {
  return (
    <>
      <Input
        {...setProps}
        onFocus={handleFocus}
        //  maxlength={5}
        prefix={<Icon type="loading" />}
        type="textarea"
      ></Input>
    </>
  );
};
```

<API></API>
