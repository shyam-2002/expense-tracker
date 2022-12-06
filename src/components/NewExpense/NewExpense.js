import './NewExpense.css';

import ExpenseForm from './ExpenseForm';


function NewExpense(props) {

    function addNewExpenseHandler(newExpense){
        console.log("in newexpense.js");
        console.log(newExpense);
        props.onSaveNewExpense(newExpense);
    }

    return (
        <div className = 'new-expense'>
            <ExpenseForm onAddNewExpense = {addNewExpenseHandler}/>
        </div>
    );
}


export default NewExpense;