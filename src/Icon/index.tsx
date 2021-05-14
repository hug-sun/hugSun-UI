import React from 'react';
import './iconfont/iconfont.scss';
import classNames from 'classnames';
import { IIconType } from './PropsType';

const prefix = 'h-icon';

const Icon: React.FC<IIconType> = props => {
  const { type, animate } = props;
  const innerCls = classNames({
    [prefix]: true,
    [`icon-${type}`]: true,
    [`${prefix}-animate`]: animate,
  });
  return <i className={innerCls} />;
};

export default Icon;
