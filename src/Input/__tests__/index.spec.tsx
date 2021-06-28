import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Input from '..';
import Icon from '..';
import toJson from 'enzyme-to-json';

describe('Input', () => {
  it('Input render correctly', () => {
    const wrapper = shallow(<Input>default</Input>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('className', () => {
    const wrapper = shallow(<Input className="propsCls">button</Input>);

    expect(wrapper.find('.h-input').hasClass('propsCls')).toBeTruthy();
  });

  it('size', () => {
    const wrapper = shallow(<Input size="large">large</Input>);

    expect(wrapper.find('.h-input').hasClass('h-input-lg')).toBeTruthy();
  });

  it('defaultValue', () => {
    const wrapper = shallow(<Input defaultValue="default"></Input>);

    expect(wrapper.find('.h-input').props().defaultValue).toBe('default');
  });

  it('addon', () => {
    const wrapper = shallow(<Input addonBefore="http://"></Input>);
    expect(wrapper.find('.h-input-addon').text()).toBe('http://');
  });

  it('limit maxlength', () => {
    const wrapper = shallow(<Input maxlength={5} />);
    expect(wrapper.find('.h-input').text().length).toBeLessThan(6);
  });
});

describe('prefix and suffix', () => {
  it('prefix', () => {
    const wrapper = shallow(<Input prefix="prefix" />);
    expect(wrapper.find('.h-input-prefix')).toBeTruthy();
  });
  it('suffix', () => {
    const wrapper = shallow(<Input suffix="suffix" />);
    expect(wrapper.find('.h-input-suffix')).toBeTruthy();
  });
});
