import React, { useState } from 'react';
import { IListItemPropsType } from '@/List/PropsType';
import Icon from '@/Icon';
import Touchable from '@ant-design/mobile-touchable';
import classNames from 'classnames';

const prefixCls = 'h-list-item';

const ListItem: React.FC<IListItemPropsType> = props => {
  const { arrow, extra, thumb, subtitle, children, onPress } = props;

  const createThumb = (thumb: IListItemPropsType['thumb']) => {
    if (!thumb) return null;
    if (typeof thumb === 'string') {
      return (
        <div className={`${prefixCls}-thumb`}>
          <img src={thumb} alt="" />
        </div>
      );
    } else {
      return <div className={`${prefixCls}-thumb`}>{thumb}</div>;
    }
  };

  const [active, setActive] = useState<boolean>(false);

  const innerCls = classNames(prefixCls, {
    [`${prefixCls}-active`]: active && arrow !== 'none',
  });

  return (
    <Touchable
      onPressIn={() => {
        setActive(true);
      }}
      onPress={onPress}
      onPressOut={() => {
        setActive(false);
      }}
    >
      <div className={innerCls}>
        <div className={`${prefixCls}-line`}>
          {createThumb(thumb)}
          <div className={`${prefixCls}-wrap`}>
            <div className={`${prefixCls}-title`}>{children}</div>
            {subtitle ? (
              <div className={`${prefixCls}-subtitle`}>{subtitle}</div>
            ) : null}
          </div>
          {extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
          {arrow !== 'none' ? (
            <div className={`${prefixCls}-arrow`}>
              <Icon
                type={`arrow-${arrow === 'horizontal' ? 'right' : arrow}`}
              />
            </div>
          ) : null}
        </div>
      </div>
    </Touchable>
  );
};

ListItem.defaultProps = {
  subtitle: '',
  extra: '',
  arrow: 'none',
};

export default ListItem;
