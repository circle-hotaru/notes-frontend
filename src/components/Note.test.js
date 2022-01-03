import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Note from './Note'

test('renders conent', () => {
  const note = {
    content: 'Component testing is done with react-test-library',
    important: true,
  }

  const mockHandler = jest.fn()

  const component = render(<Note note={note} toggleImportance={mockHandler} />)
  const button = component.getByText('make not important')
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)

  const li = component.container.querySelector('li')

  //   component.debug()
  console.log(prettyDOM(li))

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-test-library'
  )

  const element = component.getByText('Component testing is done with react-test-library')
  expect(element).toBeDefined()

  const div = component.container.querySelector('.note')
  expect(div).toHaveTextContent('Component testing is done with react-test-library')




})
