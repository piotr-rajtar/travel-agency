import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  description: '.description',
};

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }

  static now(){
    return (new Date(customDate)).getTime();
  }
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);

    expect(component).toBeTruthy();
  });

  it('should render header', () => {
    const component = shallow(<DaysToSummer />);

    expect(component.exists(select.description)).toEqual(true);
  });
});

const checkDescriptionAtDate = (date, expectedDescription = '') => {
  it(`should show correct description at ${date}`, () => {
    global.Date = mockDate(`${date}T12:00:00.135Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDescription = component.find(select.description).text();
    expect(renderedDescription).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date on Summer time', () => {
  checkDescriptionAtDate('2020-06-21');
  checkDescriptionAtDate('2020-08-30');
  checkDescriptionAtDate('2020-09-23');
});

describe('Component DaysToSummer with mocked Date of Summer time', () => {
  checkDescriptionAtDate('2020-01-28', '145 days to summer');
  checkDescriptionAtDate('2020-06-20', '1 day to summer');
  checkDescriptionAtDate('2020-09-24', '270 days to summer');
});

