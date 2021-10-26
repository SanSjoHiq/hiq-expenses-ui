import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import ExpensesForm from './ExpensesForm'
import { Container, Select } from '@mui/material'



afterEach(cleanup)

it("should render ExpensesForm Conponent", () => {
    const FormComponent = render(<ExpensesForm />)
    expect(FormComponent).toBeTruthy()
  
});

it("should select correct option", () => {
    
    const {getByTestId} = render(<ExpensesForm />);

    const selectOption = getByTestId("select-option");

    fireEvent.change(selectOption, {target: {value: 'Fika'}});
    fireEvent.change(selectOption, {target: {value: 'Terminalglasögon'}});

})

it("should test price input", () => {
    const {getByTestId} = render(<ExpensesForm />)

    const input = getByTestId("input-field");
    expect(input).toBeInTheDocument();
    
    fireEvent.change(input, {target: {value: 1200}})
    expect(input.value).toBe("1200");
})







