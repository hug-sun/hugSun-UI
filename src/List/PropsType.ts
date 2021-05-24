import { ReactElement, SyntheticEvent } from 'react';

type renderType = string | ReactElement;
type listRenderFn = () => renderType;
type listRender = listRenderFn | renderType;
type listItemArrowType = 'up' | 'down' | 'horizontal' | 'none';

/**
 * List properties
 */
export interface IListPropsType {
  /**
   * @description       列表头部内容
   * @default           ""
   * @type              string | ReactElement | () => void | string | ReactElement
   */
  renderHeader?: listRender;
  /**
   * @description       列表尾部内容
   * @default           ""
   * @type              string | ReactElement | () => void | string | ReactElement
   */
  renderFooter?: listRender;
}

/**
 * ListItem properties
 */
export interface IListItemPropsType {
  /**
   * @description       列表副标题 此属性会在原本列表信息下方以多行的形式展示
   * @default           ""
   * @type              string | React.ReactElement
   */
  subtitle?: renderType;
  /**
   * @description       列表额外内容
   * @default           ""
   * @type              string | React.ReactElement
   */
  extra?: renderType;
  /**
   * @description       列表尾端箭头方向 设置none时不显示
   * @default           "none"
   * @type              "up" | "down" | "horizontal" | "none"
   */
  arrow?: listItemArrowType;
  /**
   * @description       缩略图 当传入字符串时需要
   * @default           ""
   * @type              string | React.ReactElement
   */
  thumb?: renderType;
  /**
   * @description       列表项点触事件
   * @default           null
   */
  onPress?: (e: SyntheticEvent) => void;
}

const List = (props: IListPropsType) => {};

const ListItem = (props: IListItemPropsType) => {};

export { List, ListItem };
