import { ExampleData } from '../ExampleData'
import { useState } from "react"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


export const PieGraph = () => {
    
    const id = localStorage.getItem('id');
    const user = ExampleData.find(userData => userData.id === id);
    

    const orders = user.orders;
    const categorydata = [];
    
    for (const order of orders) {
        const category = order.category;
        const existingCategory = categorydata.find(data => data.category === category);
    
        if (existingCategory) {
            existingCategory.orders++;
        } else {
            categorydata.push({ category: category, orders: 1 });
        }
    }
    console.log(categorydata);
    
    const [userData, setUserData] = useState({
        labels: categorydata.map((data) => data.category),
        datasets: [
          {
            label: "Orders",
            data: categorydata.map((data) => data.orders),
            backgroundColor: [
              "rgba(75,192,192,1)",
            //   "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
      


    return (
        <div style={{ width: 300,height:300,marginLeft:50 }}>
        <Pie data={userData} />
        </div>
    )
}