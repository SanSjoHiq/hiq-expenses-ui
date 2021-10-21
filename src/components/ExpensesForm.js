import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { FormControl, MenuItem, TextField, Button } from '@mui/material';


const expensesType = [
    {
        value: "Terminalglasögon",
        label: "Terminalglasögon"
    },
    {
        value: "Fika",
        label: "Fika"
    },
    {
        value: "Kundlunch",
        label: "Kundlunch"
    },
    {
        value: "Kundmiddag",
        label: "Kundmiddag"
    },
    {
        value: "Övrigt",
        label: "Övrigt"
    }
];

const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        marginTop: '5% !important',
        padding: '0 30px',
        width: '50%',  
    },
    input: {
        marginTop: '5% !important',
        width: '50%'
    },
    form: {
        margin: '5% !important',
        width: '50%'
        
    }
})

export const ExpensesForm = () => {
    const [expenses, setExpenses] = useState("")
    const classes = useStyles();

    const handleSelectChange = (event) => {
        setExpenses(event.target.value)
    }
    return (
        <FormControl className={classes.form}>
            <TextField 
            className={classes.input}
            id="outlined-select-currency"
            select
            label="Välj typ av utlägg"
            value={expenses}
            onChange={handleSelectChange}>
            {expensesType.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                    {item.label}
                </MenuItem>
            ))}
            </TextField>
            <TextField 
            className={classes.input}
            required
            id="outlined-required"
            label="Summa"
            />
            <Button variant="contained" className={classes.button}>Lägg till</Button>

        </FormControl>
    )
}

export default ExpensesForm;