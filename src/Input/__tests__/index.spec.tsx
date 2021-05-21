import React from 'react';
import { shallow } from 'enzyme';
import Input from '..';
import toJson from 'enzyme-to-json';

describe('Input', () => {
  it('Input render correctly', () => {
    const wrapper = shallow(<Input>default</Input>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
