import Icon from '..';
import React from 'react';
import './index.scss';
import { IIconType } from '@/Icon/PropsType';

const IconItem: React.FC<IIconType> = props => {
  const { type, animate } = props;
  return (
    <div className="demo-icon-item">
      <Icon type={type} animate={animate} />
      <span className="demo-icon-type">{type}</span>
    </div>
  );
};

export default IconItem;
