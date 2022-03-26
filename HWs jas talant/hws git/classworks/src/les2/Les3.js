import React, {useState} from "react";
import {tableData} from "./data";

function Les3(){
  const [data, setData] = useState(tableData);
  const [isChecked, setisChecked] = useState(true);
  const [isExisted, setisExisted] = useState(true)
  const [price,setprice] = useState("");
  const [count,setcount] = useState("");
  // const [color,setColor] = useState("#FFFFFF00");
  function filterInstalment(){
    if (isChecked === false){ setisChecked(true)}
    else{ setisChecked(false) }
    setData(isChecked ? data.filter((item) => item.instalment) : tableData);
  }
  function filterExist(){
    if (isExisted === false){ setisExisted(true)}
    else{ setisExisted(false) }
    setData(isExisted ? data.filter((item) => item.count>0) : tableData);
  }
  function incdecData1(){
    setcount("");
    if(price === "" | price === "↓") {
      setprice("↑");
      setData(data.sort((a, b) => Number(a.price.slice(0,-2).split(" ").join("")) > Number(b.price.slice(0,-2).split(" ").join("")) ? 1 : -1));
    }
    else{
      setprice("↓");
      setData(data.sort((a, b) => Number(a.price.slice(0,-2).split(" ").join("")) < Number(b.price.slice(0,-2).split(" ").join("")) ? 1 : -1));
    }
  }
  function incdecData2(){
    setprice("");
    if(count === "" | count === "↓") {
      setcount("↑");
      setData(data.sort((a, b) => a.count > b.count ? 1 : -1));
    }
    else{
      setcount("↓");
      setData(data.sort((a, b) => a.count < b.count ? 1 : -1));
    }
  }
  function putColor() {
    var e = document.getElementsByClassName("table")
    var i;
    for (i in data){
      if(i.count<5){
        e.setAttribute("background-color ", "#FFDDBD");
      }
    }
  }
  return(
    <>
      <label htmlFor="tbl1"> 
        <input id="tbl1" type="checkbox" className="tbl" onChange={filterInstalment}/>
        Только в рассрочку
      </label>
      <label htmlFor="tbl2"> 
        <input id="tbl2" type="checkbox" className="tbl" onChange={filterExist}/>
        Есть в наличии
      </label>
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th><div className="cap">Название</div></th>
            <th id="price" onClick={incdecData1}>Цена{price}</th>
            <th id="count" onClick={incdecData2}>Количество{count}</th>
            <th>В рассрочку</th>
          </tr>
        </thead>
        <tbody onChange={putColor}>
        { data.map( (item, index) => (
          <tr style={(item.count < 5) ? {backgroundColor:"#FFDDBD"} : {backgroundColor:"#F3F9FF"}} key={index}>
          <td>{item.id}</td>
          <td title={item.name}>
            <div className="cap">{item.name}</div></td>
          <td>{item.price}</td>
          <td>{item.count}</td>
          <td>{item.instalment ? "✅" : ""}</td>
        </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}

export default Les3;