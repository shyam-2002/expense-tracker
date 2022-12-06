import './Expenses.css';

import {useState} from 'react';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';


function Expenses(props){

    const [year, setYear] = useState('2020');

    function yearChangeHandler(newYear){
        console.log('in expenses');
        console.log(newYear);
        setYear(newYear);
    }
    console.log(year);

    return (
        // <div>
            <Card className = "expenses">
                <ExpensesFilter onYearChange = {yearChangeHandler} />
                <ExpenseItem title = {props.expenses[0].title} amount = {props.expenses[0].amount} date = {props.expenses[0].date} />
                <ExpenseItem title = {props.expenses[1].title} amount = {props.expenses[1].amount} date = {props.expenses[1].date} />
                <ExpenseItem title = {props.expenses[2].title} amount = {props.expenses[2].amount} date = {props.expenses[2].date} />
                <ExpenseItem title = {props.expenses[3].title} amount = {props.expenses[3].amount} date = {props.expenses[3].date} />
            </Card>
        // </div>
        
    );
}

export default Expenses;