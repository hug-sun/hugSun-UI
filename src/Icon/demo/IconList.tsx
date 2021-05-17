import React from 'react';
import IconItem from './IconItem';
import './index.scss';
import iconList from '../iconList.json';

const IconList: React.FC = props => {
  return (
    <div className="demo-icon-list">
      {iconList.map(item => (
        <IconItem key={item} type={item} animate={item === 'loading'} />
      ))}
    </div>
  );
};

export default IconList;
