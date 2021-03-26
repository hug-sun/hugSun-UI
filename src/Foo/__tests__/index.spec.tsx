import React from 'react';
import { mount } from 'enzyme';
import Foo from '..';

describe('Foo', () => {
  it('Foo is h1 tag', () => {
    const wrapper = mount(<Foo title="title" />);

    console.dir(wrapper.html());
    expect(wrapper).toBeTruthy();
  });
});
