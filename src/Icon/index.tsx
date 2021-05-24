import React from 'react';
import './iconfont/iconfont.scss';
import classNames from 'classnames';
import { IIconType } from './PropsType';

const prefixCls = 'h-icon';

const Icon: React.FC<IIconType> = props => {
  const { type, animate } = props;
  const innerCls = classNames({
    [prefixCls]: true,
    [`icon-${type}`]: true,
    [`${prefixCls}-animate`]: animate,
  });
  return <i className={innerCls} />;
};

export default Icon;
