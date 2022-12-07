import {useState} from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import AddExpenseButton from './AddExpenseButton';


function NewExpense(props) {

    const [showInput, setShowInput] = useState(false);

    function addNewExpenseHandler(newExpense){
        console.log("in newexpense.js");
        console.log(newExpense);
        props.onSaveNewExpense(newExpense);
    }

    function changeShowInputState(currState) {
        setShowInput(currState);
    }


    if(showInput){
        return (
            <div className = 'new-expense'>
                <ExpenseForm onAddNewExpense = {addNewExpenseHandler} onChangeShowInputState = {changeShowInputState}/>
            </div>
        );
    }else{
        return (
            <AddExpenseButton className = 'new-expense' onChangeShowInputState = {changeShowInputState} />
        )
    }
    
}


export default NewExpense;