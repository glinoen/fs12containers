import { render, screen, fireEvent } from '@testing-library/react'
import Todo from './Todo'

test('rendering single component', () => {
  const todo = {
    _id: 'dfdsft53e',
    done: false,
    text: 'testing component'
  }

  const deleteTodo = jest.fn()
  const completeTodo = jest.fn()
  
  const { getByText } = render(
    <Todo
      todo={todo}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
    />
  )

  const todoText = screen.getByText(/testing component/i)
  expect(todoText).toBeInTheDocument()

  const todoDone = screen.getByText(/this todo is not done/i)
  expect(todoDone).toBeInTheDocument()
  
  fireEvent.click(getByText(/delete/i));
  expect(deleteTodo).toHaveBeenCalledTimes(1);

  fireEvent.click(getByText(/set as done/i))
  expect(completeTodo).toHaveBeenCalledTimes(1)

})