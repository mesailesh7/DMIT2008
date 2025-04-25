import { fireEvent, render, screen, act } from '@testing-library/react';
// https://testing-library.com/docs/react-testing-library/
import '@testing-library/jest-dom'

import TodoList from '../components/TodoList'


test(
  "todo list title renders correctly",
  () => {
    // 1. set up the givens for the test (DOM, components, data, etc.)
    render(<TodoList />)
    // 2. retrieve something we are testing via the DOM, e.g. a rendered component
    const titleElement = screen.getByText("Our Todo List")
    // 3. declare what we expect to happen
    expect(titleElement).toBeInTheDocument()
  }
)

test(
  "todo list button renders correctly",
  () => {
    render(<TodoList />)
    // assumes 'a lot' about what guarantees a button:
    const buttonElement = screen.getByText("Add Todo")
    expect(buttonElement).toBeInTheDocument()
  }
)


test(
  "new todo item is successfully added to the list",
  () => {

    // 1. set up the givens for the test (DOM, components, data, etc.)
    render(<TodoList />)

    // 2a. retrieve something we are testing via the DOM, e.g. a rendered component
    //      -> i am using these selection methods to demonstrate variety
    const EXPECTED_STRING = "some value I would be writing in"

    const textInputElement = screen.getByLabelText("New Todo")
    const buttonElement = screen.getByText("Add Todo")
    const listElement = screen.getByTestId("todo-item-list")


    // 2b. simulating / firing off behaviours or interactions relevant to the test
    fireEvent.change(
      textInputElement,
      {
        target: { value: EXPECTED_STRING }
      }
    )
    expect(textInputElement.value).toBe(EXPECTED_STRING)

    act( // act MUST be used whenever you update application state
      () => { buttonElement.click() }
    )

    // 3. declare what we expect to happen
    expect(textInputElement.value).toBe('')
    expect(listElement).toHaveTextContent(EXPECTED_STRING)
  }
)
