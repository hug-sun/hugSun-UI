import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '..';

describe('Button', () => {
  it('Button render correctly', () => {
    const wrapper = shallow(<Button>default</Button>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('type', () => {
    const wrapper = shallow(<Button type="primary">primary</Button>);

    expect(wrapper.find('.h-button').hasClass('h-button-primary')).toBeTruthy();
  });
  it('onPress', () => {
    const onPress = jest.fn();
    const wrapper = shallow(<Button onPress={onPress}>button</Button>);

    wrapper.simulate('press');

    expect(onPress).toBeCalled();
  });
  it('disabled', () => {
    const wrapper = shallow(<Button disabled={true}>button</Button>);
    // react这边不能做到disabled禁用后测试对应事件不触发，
    // 因为enzyme底层并没有处理类似情况，
    // enzyme仅仅是获取判断时候存在对应handler，如果存在直接调用
    expect(
      wrapper.find('.h-button').hasClass('h-button-disabled'),
    ).toBeTruthy();
  });
  it('className', () => {
    const wrapper = shallow(<Button className="propsCls">button</Button>);

    expect(wrapper.find('.h-button').hasClass('propsCls')).toBeTruthy();
  });
  it('activeClassName', () => {
    const wrapper = shallow(<Button activeClassName="propsCls">button</Button>);

    wrapper.simulate('pressIn');
    expect(wrapper.find('.h-button').hasClass('propsCls')).toBeTruthy();

    wrapper.simulate('pressOut');
    expect(wrapper.find('.h-button').hasClass('propsCls')).toBeFalsy();
  });
});
