import {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm (props){


    const [newTitle, setNewTitle] = useState(''); 
    const [newAmount, setNewAmount] = useState(''); 
    const [newDate, setNewDate] = useState(''); 


    function titleChangeHandler(event){
        setNewTitle(event.target.value);
    }

    function amountChangeHandler(event){
        setNewAmount(event.target.value);
    }

    function dateChangeHandler(event){
        setNewDate(event.target.value);
    }

    // console.log(newTitle, newAmount, newDate);

    // const [newData, setNewData] = useState({
    //     title : '',
    //     amount : '',
    //     date : ''
    // })

    // function titleChangeHandler(event){
    //     // setNewData({
    //     //     ...newData,
    //     //     title: event.target.value
    //     // });

    //     //better way 
    //     setNewData((prevState)=>{
    //         return {
    //             ...prevState,
    //             title : event.target.value
    //         }
    //     })
    // }

    // function amountChangeHandler(event){
    //     // setNewData({
    //     //     ...newData,
    //     //     amount: event.target.value
    //     // });

    //     setNewData((prevState)=>{
    //         return {
    //             ...prevState,
    //             amount : event.target.value
    //         }
    //     })
    // }

    // function dateChangeHandler(event){
    //     // setNewData({
    //     //     ...newData,
    //     //     date: event.target.value
    //     // });

    //     setNewData((prevState)=>{
    //         return {
    //             ...prevState,
    //             date : event.target.value
    //         }
    //     })
    // }

    // console.log(newData.title, newData.amount, newData.date);


    function cancelClickHandler(){
        props.onChangeShowInputState(false);
    }

    function submitHandler(event) {
        event.preventDefault();
        const newData = {
            id: Math.random(),
            title: newTitle,
            amount: parseInt(newAmount),
            date: new Date(newDate)
        }
        props.onAddNewExpense(newData);

        // newTitle += 'e';
        console.log(newData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
        cancelClickHandler();
    }

    
    // console.log(newTitle, newAmount, newDate);


    return (
        <form onSubmit = {submitHandler}>
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label>Title</label>
                    <input type="text" value = {newTitle} onChange = {titleChangeHandler} />
                </div>
                <div className = "new-expense__control">
                    <label>Amount</label>
                    <input type="number" min = "0.01" step = "0.01" value = {newAmount} onChange = {amountChangeHandler} />
                </div>
                <div className = "new-expense__control">
                    <label>Expense Date</label>
                    <input type="date" min = "2019-01-01" max = "2022-12-31" value = {newDate} onChange = {dateChangeHandler} />
                </div>
            </div>
            <div className = "new-expense__actions">
                <button type = "submit"  >Submit</button>
                <button onClick = {cancelClickHandler}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;