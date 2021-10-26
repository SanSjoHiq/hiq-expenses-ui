import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { FormControl, MenuItem, TextField, Button, Select, InputLabel, OutlinedInput } from '@mui/material';


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
        //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        backgroundColor: 'black !important',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        fontWeight: 'bold',
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
        
    },
    select: {
        width: '50%'
    }
})

export const ExpensesForm = () => {
    const [selectExpenses, setSelectExpenses] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const classes = useStyles();

    const handleSelectChange = (event) => {
        setSelectExpenses(event.target.value)
    }
    const handleInputChange = (event) => {
        setInputPrice(event.target.value)
    }

   const handleButtonSubmit = () => {
       console.log("typ:", selectExpenses, "pris:", inputPrice)
       
   }

    return (
        <FormControl className={classes.form}>
            <InputLabel id="select-label">Välj typ av utlägg</InputLabel>
            <Select
            labelId="select-label"
            className={classes.select}
            id="outlined-select-currency"
            select="true"
            label="Välj typ av utlägg"
            value={selectExpenses}
            onChange={handleSelectChange}
            input={<OutlinedInput label="Välj typ av utlägg" />}
            inputProps={{id: "select-option", 'data-testid': 'select-option'}}
            >
            
            {expensesType.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                    {item.label}
                </MenuItem>
            ))}
            </Select>
            <TextField 
            className={classes.input}
            required
            id="outlined-required"
            label="Summa"
            inputProps={{id: "input-field", 'data-testid': 'input-field'}}
            value={inputPrice}
            onChange={handleInputChange}
            />
            <Button variant="contained" className={classes.button} onClick={handleButtonSubmit}>Lägg till</Button>

        </FormControl>
    )
}

export default ExpensesForm;