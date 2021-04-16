/**
 * Button properties
 */
export interface ButtonPropsType {
  /** 按钮样式 */
  type?: 'default' | 'primary' | 'warn';
  /** 是否禁用按钮 */
  disabled?: boolean;
  /** 按钮点触事件 */
  onPress?: (e?: React.SyntheticEvent) => void;
  /** 按钮是否显示加载中 */
  loading?: boolean;
  /** 额外的class名 */
  className?: string;
  /** 按钮active状态下额外的class名 */
  activeClassName?: string;
}
