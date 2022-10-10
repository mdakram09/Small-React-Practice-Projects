import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#72FFFF',
  },
}));

export default function AddExpenseForm(props) {
  const classes = useStyles();
  const [expenseItemName, setExpenseItemName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const expenseItemNameHandler = (event) => {
    setExpenseItemName(event.target.value);
  };

  const expenseAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const expenseDateHandler = (event) => {
    setDate(event.target.value);
  };

  const formDataHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      expenseName: expenseItemName,
      cost: amount,
      createdDate: date.toString(),
    };

    props.mainState(expenseData);

    setExpenseItemName('');
    setAmount('');
    setDate('');
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={formDataHandler}
    >
      <TextField
        id="outlined-basic"
        label="Expense Item"
        variant="outlined"
        value={expenseItemName}
        onChange={expenseItemNameHandler}
      />
      <TextField
        type="number"
        id="outlined-basic"
        label="Amount"
        variant="outlined"
        value={amount}
        onChange={expenseAmountHandler}
      />
      <TextField
        type="date"
        id="outlined-basic"
        variant="outlined"
        value={date}
        onChange={expenseDateHandler}
      />
      <Button type="submit" variant="outlined" color="primary">
        Submit
      </Button>
    </form>
  );
}
