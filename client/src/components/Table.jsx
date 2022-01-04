import React, { useEffect } from "react";
import api from "../api/index";

function Table(){
    const [stockData, setStockData] = React.useState([]);
    useEffect(() => {
        async function fetchMyAPI(){
            let response = await api.getStocksDeatil()
            setStockData(response.data.data)
        }
        fetchMyAPI()
    }, [])

    let showTable = true;
    if(!stockData.length){
        showTable=false
    }

    return(
        <div className="tab">
        <table className="table table-bordered ">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">%</th>
                    <th scope="col">Announcement Date</th>
                    <th scope="col">Record Date</th>
                    <th scope="col">Ex-Dividend Date</th>
                </tr>
            </thead>
            <tbody>
                {stockData.map((stock) => {
                    return(
                        <tr>
                            <th scope="row">{stock[0]}</th>
                            <td>{stock[1]}</td>
                            <td>{stock[2]}</td>
                            <td>{stock[3]}</td>
                            <td>{stock[4]}</td>
                            <td>{stock[5]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    )
}

export default Table;