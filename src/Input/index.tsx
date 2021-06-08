import React, { useState, useRef, ReactElement } from 'react';
import './index.scss';
import classnames from 'classnames';
import InputPropsType, { defaultProps } from './PropsType';

const Input: React.FC<InputPropsType> = props => {
  // 定义ref
  const inputEl = useRef<HTMLInputElement>(null);
  // 设置input初始值
  const [oninput, setOninput] = useState<string | number>();
  // 设置input框的初始值
  const [value, setValue] = useState<string | number>();

  // type为number类型时候字符长度设置
  const setMaxLength = (event: any) => {
    let { maxlength, type } = props;
    if (maxlength && type == 'number') {
      let value = event.target.value;
      if (value && value?.length > maxlength) {
        setOninput(value?.slice(0, maxlength));
        return value?.slice(0, maxlength);
      }
      return;
    }
  };

  // onchange事件后的处理
  const resolveOnChange = (
    target: HTMLInputElement | HTMLTextAreaElement | null, // input or inputArea
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.CompositionEvent<HTMLElement>,
    onChange:
      | undefined
      | ((
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => void),
    defaultValue: string | undefined,
  ) => {
    if (!onChange) {
      return;
    }

    if (!target) {
      return;
    }

    if (defaultValue) {
    }
    let event = e;
    console.log(111);
    // 事件类型判断并处理
    onChange(
      event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    );
  };
  // onChange事件 输入框内容变化时候的回调
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { defaultValue, onChange } = props;
    setValue(e.target.value);
    resolveOnChange(inputEl.current, e, onChange, defaultValue);
  };

  //键盘事件处理
  const hanleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onPressEnter, onKeyDown } = props;
    if (onPressEnter && e.keyCode === 13) {
      onPressEnter(e);
      return;
    }
    onKeyDown?.(e);
  };

  // 聚焦事件
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { onFocus } = props;
    if (onFocus) {
      inputEl.current?.focus();
      onFocus(e);
    }
  };

  // 失焦事件
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { onBlur } = props;
    if (onBlur) {
      onBlur(e);
    }
  };

  // 渲染是否带有affix的组件
  const renderPrefix = (children: ReactElement) => {
    const { prefix, suffix } = props;
    const _prefix = prefix ? (
      <span className="h-input-affix h-input-prefix">{prefix}</span>
    ) : null;

    const _suffix = suffix ? (
      <span className="h-input-affix h-input-suffix">
        {suffix ? suffix : null}
      </span>
    ) : null;

    return (
      <span className="h-input-affix-wrap">
        {_prefix}
        {React.cloneElement(children)}
        {_suffix}
      </span>
    );
  };

  // 渲染是否带有addon的组件
  const RenderAddonInput = (children: ReactElement) => {
    const { addonBefore, addonAfter } = props;
    const _addonBefore = addonBefore ? (
      <span className="h-input-addon">{addonBefore}</span>
    ) : null;

    const _addonAfter = addonAfter ? (
      <span className="h-input-addon">{addonAfter}</span>
    ) : null;

    return (
      <span className="h-input-wrap">
        {_addonBefore}
        {React.cloneElement(children)}
        {_addonAfter}
      </span>
    );
  };

  // 渲染input
  const renderInput = () => {
    const { className, disabled, bordered, size } = props;

    const otherProps: any = {};
    const otherPropsArray: Array<string> = [
      'id',
      'type',
      'defaultValue',
      'placeholder',
      'maxlength',
      'value',
    ];
    // class设置
    const setClassName = () => {
      let { precls } = defaultProps;
      let cls: string = precls;
      return classnames(cls, className, {
        [`${precls}-sm`]: size === 'small',
        [`${precls}-lg`]: size === 'large',
        [`${precls}-disabled`]: disabled,
        [`${precls}-borderless`]: bordered,
      });
    };

    // 设置其他属性
    const setOtherPorps = () => {
      for (let item of otherPropsArray) {
        if (item in props) {
          otherProps[item] = props[item];
        }
      }
      return otherProps;
    };
    setOtherPorps();

    return (
      <>
        <input
          className={setClassName()}
          {...otherProps}
          disabled={disabled}
          onKeyDown={hanleKeyDown}
          onFocus={handleFocus}
          onInput={setMaxLength}
          onChange={handleOnChange}
        />
      </>
    );
  };

  return (
    <>
      {props.prefix || props.suffix
        ? RenderAddonInput(renderPrefix(renderInput()))
        : RenderAddonInput(renderInput())}{' '}
    </>
  );
};
export default Input;
