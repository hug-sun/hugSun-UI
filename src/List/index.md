---
title: List
nav:
  title: 组件
  path: /components
---

## 基础使用

### type

通过 type 属性切换 Button 组件样式

```tsx
import React from 'react';
import { List } from 'hugSun-UI';

const { Item } = List;

export default () => {
  return (
    <>
      <List renderHeader={() => 'Basic Type'}>
        <Item>Title</Item>
        <Item arrow="horizontal">Title</Item>
        <Item extra="extra content" arrow="horizontal">
          Title
        </Item>
        <Item
          thumb={require('../../public/images/logo.png')}
          arrow="horizontal"
        >
          Title
        </Item>
      </List>

      <List renderHeader={() => 'Subtitle'}>
        <Item subtitle="subtitle" arrow="horizontal">
          Title
        </Item>
        <Item
          thumb={require('../../public/images/logo.png')}
          subtitle="subtitle"
          arrow="horizontal"
        >
          Title
        </Item>
        <Item
          thumb={require('../../public/images/logo.png')}
          subtitle="subtitle"
          extra="extra content"
          arrow="horizontal"
        >
          Title
        </Item>
      </List>
    </>
  );
};
```

## API

<API src="./PropsType.ts" exports='["List", "ListItem"]'></API>
