import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ShopLaterForm from './ShopLaterForm'

describe(`ShopLaterForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.ShopLaterForm by default', () => {
    const wrapper = shallow(<ShopLaterForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the ShopLaterForm given props', () => {
    const wrapper = shallow(<ShopLaterForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
