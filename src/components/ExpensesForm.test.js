import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import ExpensesForm from './ExpensesForm'

afterEach(cleanup)

it("should render ExpensesForm Conponent", () => {
    const FormComponent = render(<ExpensesForm />)
    expect(FormComponent).toBeTruthy()
  
});

it("should select correct option", () => {
    
    const {getByTestId} = render(<ExpensesForm />)

    const selectButton = getByTestId("select-option")

    fireEvent.change(selectButton, {target: {value: 'Fika'}});
  
})