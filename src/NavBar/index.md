---
title: NavBar
nav:
  title: 组件
  path: /components
---

## 基础使用

### type

```tsx
import React from 'react';
import { NavBar, Icon, Input, List, Button } from 'hugSun-UI';

export default () => {
  return (
    <>
      <span style={{ fontSize: '16px' }}>左侧为icon</span>
      <NavBar
        title="test"
        icon={<Icon type="loading" />}
        onLeftClick={() => console.log('leftClick')}
      ></NavBar>
      <span style={{ fontSize: '16px' }}>左侧非icon</span>
      <NavBar title="test" leftContent="left"></NavBar>
      <span style={{ fontSize: '16px' }}>左侧是icon + 文字</span>
      <NavBar
        title="test"
        leftContent="left"
        icon={<Icon type="loading" />}
      ></NavBar>
      <span style={{ fontSize: '16px' }}>mode 为自定义颜色值</span>
      <NavBar title="test" leftContent="left" mode="#68274"></NavBar>
      <span style={{ fontSize: '16px' }}>右侧内容</span>
      <NavBar title="test" leftContent="left" rightContent="right"></NavBar>
    </>
  );
};
```

<API></API>
