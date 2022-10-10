import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},

  card: {
    backgroundColor: '#00D7FF',
    margin: '2rem',
  },
});
const ExpensesList = (props) => {
  const classes = useStyles();

  //   const brokerState=(expenseData)=>{
  //     props.mainState(expenseData);
  //   }
  console.dir('from expenses list file:' + props.expensesListMainStates[0]);
  return (
    <div>
      {props.expensesListMainStates.map((expense) => (
        <Card className={classes.card} key={Math.random()}>
          <Typography color="textSecondary" gutterBottom>
            Name: {expense?.expenseName}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Amount: {expense?.cost}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Date: {expense?.createdDate}
          </Typography>
        </Card>
      ))}
    </div>
  );
};

export default ExpensesList;
