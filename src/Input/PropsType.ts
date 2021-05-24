import React, { ReactNode } from 'react';

/**
 * Input properties
 */
export default interface InputPropsType {
  max?: number;
  maxlength?: number;
  min?: number;
  placeholder?: string;
  type?:
    | 'button'
    | 'checkbox'
    | 'text'
    | 'textarea'
    | 'password'
    | 'reset'
    | 'submit'
    | 'number';
  value?: string;
  className?: string;
  prefixCls?: string;
  bordered?: boolean;
  id?: string;
  disabled?: boolean;
  size?: 'default' | 'large' | 'small';
  addonBefore?: ReactNode;
  addonAfter?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  defaultValue?: string;
  [propName: string]: any;
}

export interface InputFocusOptions {
  cursor?: 'start' | 'end' | 'all';
}

export const defaultProps = {
  precls: 'h-input',
  bordered: true,
  size: 'default',
};
