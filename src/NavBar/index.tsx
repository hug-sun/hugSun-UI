import React, { useEffect, useState } from 'react';
import './index.scss';
import classnames from 'classnames';

import NavBarPropsType from './PropsType';
const NavBar: React.FC<NavBarPropsType> = props => {
  const { mode } = props;

  let [title, setTitle] = useState<string>();
  let [leftContent, setLeftContent] = useState<any>();
  let [rightContent, setRightContent] = useState<any>();
  let [modeVal, setModeVal] = useState<any>();

  const reg1 = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
  const reg2 = /^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/;
  // 设置自定义颜色值
  useEffect(() => {
    setMode(props.mode);
  }, [props.mode]);

  // 当更新title和props.children时候更新title
  useEffect(() => {
    setTitleFn();
  }, [props.title, props.children]);

  // 左侧内容
  useEffect(() => {
    setLeftContentFn();
  }, [props.leftContent, props.icon]);

  // 设置mode
  const setMode = (mode: any) => {
    if (mode) {
      if (reg1.test(mode) || reg2.test(mode)) {
        setModeVal(mode);
      } else {
        setModeVal('');
      }
    } else {
      setModeVal('');
    }
  };

  // 左侧内容
  const setLeftContentFn = () => {
    if (props.leftContent && !props.icon) {
      setLeftContent(props.leftContent);
      return;
    }

    if (!props.leftContent && props.icon) {
      setLeftContent(props.icon);
      return;
    }

    if (props.leftContent && props.icon) {
      const newLeftContent = (
        <>
          {props.icon} {props.leftContent}
        </>
      );
      setLeftContent(newLeftContent);
      return;
    }
    setLeftContent('');
  };

  // 右侧内容
  useEffect(() => {
    if (props.rightContent) {
      setRightContent(props.rightContent);
      return;
    }
    setRightContent('');
  }, [props.rightContent]);

  // 设置className
  const setClassName = () => {
    const precls = 'h-navbar';
    return classnames(precls, {
      [`${precls}-normal`]: !mode,
    });
  };

  // 设置title
  const setTitleFn = () => {
    if (props.title) {
      setTitle(props.title);
      return;
    }
    if (typeof props.children === 'string') {
      setTitle(props.children);
      return;
    }
    setTitle('');
  };

  return (
    <div>
      <div
        role="button"
        className={setClassName()}
        style={{ backgroundColor: `${modeVal}` }}
        onClick={props.onLeftClick}
      >
        <div className="h-navbar-left">{leftContent}</div>
        <div className="h-navbar-title">{title}</div>
        <div className="h-navbar-right">{rightContent}</div>
      </div>
    </div>
  );
};

export default NavBar;
