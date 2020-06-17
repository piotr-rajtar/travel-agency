import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

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

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  tripCost: '$29,318.86',
  limits: {
    min: 0,
    max: 6,
  },
};
  
const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};
  
const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for(let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /*test setup*/
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type = {type}
          setOrderOption = {mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /*common tests*/
    it(`renders  ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /*type-specific tests*/
    switch (type) {
      case 'dropdown': {
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue});
        });
        break;
      }
      case 'icons': {
        it('contains div and icons', () => {
          const iconDiv = renderedSubcomponent.find('.icon');
          const icon = iconDiv.find('Icon');
          
          expect(icon).toBeTruthy();
          expect(iconDiv).toBeTruthy();
          expect(iconDiv.length).toEqual(icon.length);
 
        });

        it('should run setOrderOption function on click', () => {
          const icon = renderedSubcomponent.find('div').find('.icon').last();

          //console.log(icon.debug());
          
          
          icon.simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          //call with argument return empty object as it is set in js code
        
        });

        break;
      }

      case 'checkboxes': {
        it('contains div and options', () => {
          const checkDiv = renderedSubcomponent.find('.checkboxes');
          expect(checkDiv.length).toBe(1);

          const options = checkDiv.find('label').find('input');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption on change', () => {
          const checkBox = renderedSubcomponent.find('.checkboxes').find('label').find(`input[value="${testValue}"]`);
          
          checkBox.simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: [mockProps.currentValue, testValue]});
        });

        break;
      }

      case 'number': {
        it('contains div and input field', () => {
          const numDiv = renderedSubcomponent.find('.number');
          expect(numDiv.length).toBe(1);
  
          const numInput = numDiv.find('input');
          expect(numInput.length).toBe(1);
        });

        it('should run setOrderOption on change', () => {
          const numInput = renderedSubcomponent.find('div').find('input');

          numInput.simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValueNumber});
        });

        break;
      }

      case 'text': {
        it('contains div and input  field', () => {
          const textDiv = renderedSubcomponent.find('div');
          const textInput = textDiv.find('input');

          expect(textDiv).toBeTruthy();
          expect(textInput).toBeTruthy();
        });

        it('should run setOrderOption on change', () => {
          const textInput = renderedSubcomponent.find('div').find('input');

          textInput.simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue});
        });

        break;
      }

      case 'date': {
        it('contains datePicker object', () => {
          const dateField = renderedSubcomponent.find(DatePicker);
          expect(dateField).toBeTruthy();
          expect(dateField).toEqual({});
        });

        it('should run setOrderOption on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue});
        });

        break;
      }
    }
  });
}