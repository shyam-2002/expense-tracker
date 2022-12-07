// import {useState} from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


function ExpenseItem(props) {

    // const date = new Date();
    // const itemName = "Car Insurance";
    // const itemPrice = 500;
    // const [title, setTitle] = useState(props.title);

    // let func = ()=>{
    //     console.log("in new func");
    // }

    // function clickHandler(){
    //     setTitle('updated');
    //     setTimeout(()=>{
    //         console.log(title);
    //     }, 10000);
    //     let i = 0;
    //     while(true){
    //         console.log(i);
    //         i++;
    //     }
    //     console.log(title);
    //     func();

    // }

    // console.log(title);
    // setInterval()

    return (
        <li >
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick = {clickHandler}>click me</button> */}
            </Card>
        </li>

    );
}

export default ExpenseItem;