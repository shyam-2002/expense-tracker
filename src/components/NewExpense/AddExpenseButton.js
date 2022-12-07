import './AddExpenseButton.css'

function AddExpenseButton (props) {


    function clickHandler() {
        props.onChangeShowInputState(true);
    }

    return (
        <div className = 'new-expense-button'>
            <button  onClick = {clickHandler} >Add New Expense</button>
        </div>
    );
}

export default AddExpenseButton;