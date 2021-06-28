import React, { ReactNode } from 'react';

/**
 * Input properties
 */
export default interface InputPropsType {
  maxlength?: number;
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
  onChage?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  [propName: string]: any;
}

export const defaultProps = {
  precls: 'h-input',
  bordered: true,
  size: 'default',
};
