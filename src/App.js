import './App.css';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import ExpensesList from './components/ExpensesList';

function App() {
  const dummyExpenses = [
    { expenseName: 'Briyani', cost: '150', createdDate: '10 October 2022' },
    { expenseName: 'Fried Rice', cost: '100', createdDate: '09 October 2022' },
    { expenseName: 'KFC', cost: '650', createdDate: '11 October 2022' },
  ];

  const [expenseMainState, setExpenseMainState] = useState(dummyExpenses);

  const mainState = (expenseState) => {
    setExpenseMainState((prevState) => {
      return [expenseState, ...prevState];
    });
    // console.log(expenseState);
  };
  console.log(expenseMainState);

  return (
    <div>
      <Container maxWidth="md">
        <AddExpenseForm mainState={mainState} />
        <ExpensesList expensesListMainStates={expenseMainState} />
      </Container>
    </div>
  );
}

export default App;
