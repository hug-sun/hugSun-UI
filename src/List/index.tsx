import React from 'react';
import { IListPropsType } from './PropsType';
import ListItem from '@/List/ListItem';
import './index.scss';

const prefixCls = 'h-list';

const List: React.FC<IListPropsType> & { Item: typeof ListItem } = props => {
  const { renderHeader, renderFooter } = props;
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-wrap`}>
        {renderHeader && (
          <div className={`${prefixCls}-header`}>
            {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
          </div>
        )}
        {props.children}
        {renderFooter && (
          <div className={`${prefixCls}-footer`}>
            {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
          </div>
        )}
      </div>
    </div>
  );
};

List.Item = ListItem;
List.defaultProps = {
  renderHeader: '',
  renderFooter: '',
};

export default List;
