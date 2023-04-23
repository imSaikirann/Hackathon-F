
import React, { useState } from "react";
import './App.css'
import { User } from "./User";
import Table from "./Table";



function App()
{
  const [QueryN,setQuery] = useState("");
  const keys = ["name","nickname","rollnumber"]
  const handleN=(event)=>{
    setQuery(event.target.value)
  }
  const search=(data)=>{
    return data.filter((item)=>
    keys.some(key=>item[key].toLowerCase().includes(QueryN))
    )
  }
  return(
    <div className="App">
      <input type="text" placeholder="Search.."  value={QueryN} onChange={handleN}></input>
      <Table data={search(User)}></Table>
    </div>
  );
}

export default App;