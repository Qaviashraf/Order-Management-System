import { ExampleData } from '../ExampleData'
import { useState } from "react"
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const LineGraph = ({user}) => {

    //Sorting Orders months
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const months = user.orders.map(order => {
        const date = new Date(order.deliveryDate);
        return date.getMonth();
    }).sort((a, b) => a - b) // Sort months in ascending order
        .map(month => monthNames[month]);


    //Checking how many orders in a month
    const ordersdata = [];
    let currentMonth = months[0];
    let currentMonthOrders = 0;

    for (let i = 0; i < months.length; i++) {
        if (months[i] === currentMonth) {
            currentMonthOrders++;
        } else {
            ordersdata.push({ month: currentMonth, orders: currentMonthOrders });
            currentMonth = months[i];
            currentMonthOrders = 1;
        }
    }
    ordersdata.push({ month: currentMonth, orders: currentMonthOrders }); // Push the last month


    const [userData, setUserData] = useState({
        labels: ordersdata.map((data) => data.month),
        datasets: [
            {
                label: "Monthly Orders",
                data: ordersdata.map((data) => data.orders),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black dark:white",
                borderWidth: 2,
            },
        ],
    });


    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true, // Start the y-axis at zero
                ticks: {
                    stepSize: 1
                }
            },
        },
    };

    return (
        <div style={{ width: 700, marginLeft: 70 }}>
            <Line data={userData} options={chartOptions} />
        </div>
    )
}