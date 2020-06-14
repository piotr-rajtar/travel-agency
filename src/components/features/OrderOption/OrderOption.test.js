import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crushing', () => {
    const type = 'icons';
    const name = 'name';

    const component = shallow(<OrderOption type={type} name={name} />);

    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const type = 'icons';
    const name = 'name';

    const component = shallow(<OrderOption type={type} name={name} />);

    expect(component.find('.title').text()).toEqual(name);
  });
});