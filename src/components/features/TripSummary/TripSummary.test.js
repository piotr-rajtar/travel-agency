import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='name' cost='cost' days={2} />);
    const expectedLink = '/trip/abc';

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render correct img attributes', () => {
    const id = 'abc';
    const cost = 'cost';
    const days = 2;
    const expectedImage = 'img.jpg';
    const expectedAlt = 'Alternative description';

    const component = shallow(<TripSummary id={id} image={expectedImage} name={expectedAlt} cost={cost} days={days} />);
    
    const renderedImage = component.find('img').prop('src');
    const renderedAlt = component.find('img').prop('alt');

    expect(renderedImage).toEqual(expectedImage);
    expect(renderedAlt).toEqual(expectedAlt);
  });

  it('should render correct props', () => {
    const id = 'abc';
    const image = 'img.jpg';
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = 2;

    const component = shallow(<TripSummary 
      id={id} 
      image={image} 
      name={expectedName} 
      cost={expectedCost}
      days={expectedDays} 
    />);

    const renderedName = component.find('.title').text();
    const renderedDays = parseInt(component.find('.details').childAt(0).text().split(' ')[0]);
    const renderedCost = component.find('.details').childAt(1).text().split(' ')[1];

    expect(renderedName).toEqual(expectedName);
    expect(renderedDays).toEqual(expectedDays);
    expect(renderedCost).toEqual(expectedCost);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in correct order', () => {
    const id = 'abc';
    const expectedTags = ['a', 'b', 'c'];
    const image = 'img.jpg';
    const name = 'name';
    const cost = 'cost';
    const days = 2;

    const component = shallow(<TripSummary
      id={id}
      tags={expectedTags}
      image={image}
      name={name}
      cost={cost}
      days={days}
    />);

    const firstTag = component.find('.tags').childAt(0).text();
    const secondTag = component.find('.tags').childAt(1).text();
    const thirdTag = component.find('.tags').childAt(2).text();

    expect(expectedTags[0]).toEqual(firstTag);
    expect(expectedTags[1]).toEqual(secondTag);
    expect(expectedTags[2]).toEqual(thirdTag);
    
  });

  it('should not render tags if props is incorrect', () => {
    const id = 'abc';
    const image = 'img.jpg';
    const name = 'name';
    const cost = 'cost';
    const days = 2;

    const component = shallow(<TripSummary
      id={id}
      image={image}
      name={name}
      cost={cost}
      days={days}
    />);

    expect(component.contains('.tags')).toBe(false);

  });

});