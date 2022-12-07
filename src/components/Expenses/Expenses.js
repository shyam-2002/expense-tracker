import './Expenses.css';

import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';


function Expenses(props) {

    const [year, setYear] = useState('2020');

    function yearChangeHandler(newYear) {
        console.log('in expenses');
        console.log(newYear);
        setYear(newYear);
    }
    console.log(year);

    const filteredItems = props.expenses.filter(item=>{
        return item.date.getFullYear().toString() === year;
    })

    // const arr  = props.expenses.map(item => {
    //     return <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    // })

    console.log(props.expenses);


    return (
        // <div>
        <Card className="expenses">
            <ExpensesFilter currYear = {year} onYearChange={yearChangeHandler} />
            {/* <ExpenseItem title = {props.expenses[0].title} amount = {props.expenses[0].amount} date = {props.expenses[0].date} />
                <ExpenseItem title = {props.expenses[1].title} amount = {props.expenses[1].amount} date = {props.expenses[1].date} />
                <ExpenseItem title = {props.expenses[2].title} amount = {props.expenses[2].amount} date = {props.expenses[2].date} />
                <ExpenseItem title = {props.expenses[3].title} amount = {props.expenses[3].amount} date = {props.expenses[3].date} /> */}
            {
                // props.expenses.map(item => {
                //     return <ExpenseItem key = {item.id} title={item.title} amount={item.amount} date={item.date} />
                // })

                filteredItems.map(item => {
                    return <ExpenseItem key = {item.id} title={item.title} amount={item.amount} date={item.date} />
                })
                
            }
            {/* {
                arr
            } */}
        </Card>
        // </div>

    );
}

export default Expenses;