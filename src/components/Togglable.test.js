import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Togglable from './Togglable'

describe('<Toggable />', () => {
  let component

  beforeEach(() => {
    component = render(<Togglable buttonLabel="show..."><div className="testDiv"/></Togglable>)
  })

  test('renders its children', () => {
    expect(component.container.querySelector('.testDiv')).not.toBe(null)
  })

  test('at start the children are not displayed', () => {
    const div = component.container.querySelector('.togglableContent')
    expect(div).toHaveStyle('display: none')
  })

  test('after clicking the button, children are displayed', () => {
    const button = component.getByText('show...')
    fireEvent.click(button)

    const div = component.container.querySelector('.togglableContent')
    expect(div).not.toHaveStyle('display: none')
  })
})