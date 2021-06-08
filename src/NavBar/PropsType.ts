import React, { ReactNode } from 'react';

/**
 * NavBar properties
 */
export default interface NavBarPropsType {
  mode?: string;
  title?: string;
  icon?: ReactNode;
  leftContent?: any;
  rightContent?: any;
  onLeftClick?: (e: Object) => void;
}
