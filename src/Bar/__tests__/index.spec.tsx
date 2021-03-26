import React from 'react';
import { mount } from 'enzyme';
import Bar from '..';

describe('Bar', () => {
  it('Bar is button tag', () => {
    const wrapper = mount(<Bar text="button" />);

    expect(wrapper.find('button')).toBeTruthy();
  });
});
