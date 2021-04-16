---
title: Button
nav:
  title: 组件
  path: /components
---

## 基础使用

### type

通过 type 属性切换 Button 组件样式

```tsx
import React from 'react';
import { Button } from 'hugSun-UI';

export default () => {
  return (
    <>
      <Button>default</Button>
      <br />
      <Button type="primary">primary</Button>
      <br />
      <Button type="warn">warn</Button>
    </>
  );
};
```

### disabled

通过 disabled 属性设置按钮是否禁用

```tsx
import React from 'react';
import { Button } from 'hugSun-UI';

export default () => {
  return (
    <>
      <Button
        disabled={true}
        onPress={() => {
          console.log(1);
        }}
      >
        default
      </Button>
      <br />
      <Button disabled={true} type="primary">
        primary
      </Button>
      <br />
      <Button disabled={true} type="warn">
        warn
      </Button>
    </>
  );
};
```

<API></API>
