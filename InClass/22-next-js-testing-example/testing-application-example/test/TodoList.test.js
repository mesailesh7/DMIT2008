import { fireEvent, render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import TodoList from "../components/TodoList";

test("todo list title renders correctly", () => {
  // 1. set up the givens for the test (DOM, components, data, etc.)
  render(<TodoList />);
  // 2. retrieve something we are testing via the DOM, e.g. a rendered component
  const titleElement = screen.getByText("Our Todo List");
  // 3. declare what we expect to happen
  expect(titleElement).toBeInTheDocument();
});

// test("todo list title renders correctly", () => {
//   // 1. set up the givens for the test (DOM, components, data, etc.)
//   render(<TodoList />);
//   // 2. retrieve something we are testing via the DOM, e.g. a rendered component
//   const titleElement = screen.getByText("Our Todo List");
//   // 3. declare what we expect to happen
//   expect(titleElement).toBeInTheDocument();
// });

// test("Todo list button renders correctly"),
//   () => {
//     render(<TodoList />);
//     const buttonElement = screen.getByText("Add Todo");
//     expect(buttonElement).toBeInTheDocument();
//   };
