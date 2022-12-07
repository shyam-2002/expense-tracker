import './Chart.css';

import ChartBar from './ChartBar';


function Chart(props){

    const vals = props.dataPoints.map(item=>{
        return item.value;
    })

    let maxVal = Math.max(...vals);

    return (
        <div className = "chart">
            {
                props.dataPoints.map(item=>{
                    return <ChartBar key = {item.label} value = {item.value} maxValue = {maxVal} label = {item.label}/>
                })
            }
        </div>
    );
}


export default Chart;