import React from 'react';
import { shallow } from 'enzyme';
import List from '@/List';
import toJson from 'enzyme-to-json';

const { Item } = List;

describe('List', () => {
  it('List render correctly', () => {
    const wrapper = shallow(
      <List>
        <Item
          subtitle="subtitle"
          thumb={require('../../../public/images/logo.png')}
          extra="extra content"
          arrow="horizontal"
        >
          title
        </Item>
      </List>,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  describe('renderHeader', () => {
    it('renderHeader is string', () => {
      const wrapper = shallow(<List renderHeader="renderHeader" />);

      expect(wrapper.find('.h-list-header').text()).toBe('renderHeader');
    });

    it('renderHeader is function', () => {
      const wrapper = shallow(<List renderHeader={() => 'renderHeader'} />);

      expect(wrapper.find('.h-list-header').text()).toBe('renderHeader');
    });
  });
  describe('renderFooter', () => {
    it('renderFooter is string', () => {
      const wrapper = shallow(<List renderFooter="renderFooter" />);

      expect(wrapper.find('.h-list-footer').text()).toBe('renderFooter');
    });

    it('renderFooter is function', () => {
      const wrapper = shallow(<List renderFooter={() => 'renderFooter'} />);

      expect(wrapper.find('.h-list-footer').text()).toBe('renderFooter');
    });
  });
  describe('ListItem', () => {
    it('subtitle', () => {
      const wrapper = shallow(<Item subtitle="subtitle" />);

      expect(wrapper.find('.h-list-item-subtitle').text()).toBe('subtitle');
    });

    it('extra', () => {
      const wrapper = shallow(<Item extra="extra" />);

      expect(wrapper.find('.h-list-item-extra').text()).toBe('extra');
    });

    it('arrow', () => {
      const wrapper = shallow(<Item arrow="horizontal" />);

      expect(wrapper.find('.icon-arrow-right')).toBeTruthy();
    });

    it('thumb', () => {
      const wrapper = shallow(
        <Item thumb={require('../../../public/images/logo.png')} />,
      );

      expect(wrapper.find('.h-list-item-thumb').find('img')).toBeTruthy();
    });

    it('onPress', () => {
      const onPress = jest.fn();
      const wrapper = shallow(<Item onPress={onPress} />);
      wrapper.simulate('press');

      expect(onPress).toBeCalled();
    });
  });
});
