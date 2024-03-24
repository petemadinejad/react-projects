import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  //active tab => update UI => 
  //update tab style
  //update indicator => 
  //update content
  const [activeTab,setActiveTab]=useState(2);
  const handleActiveTab=(id)=>{
    setActiveTab(id)
    setCount((prevState)=>prevState+1)
  }
  const [isShow,setIsShow]=useState(true)
  const[count,setCount]=useState(0)

  return (
  <div>
    <button onClick={()=>setIsShow((isShow)=>!isShow)}>click Me</button>
    {isShow ? <div className="tab">
    <div className="tab__header">
      {
        tabData.map((tab)=>(
          <button  onClick={()=>handleActiveTab(tab.id)}
                  className={activeTab===tab.id ? "active":""} key={tab.id} >
            <span>{tab.title}</span>
            <span className="tab-indicator"></span>
          </button>
        ))
      }
    </div>
    <div className="tab__content">
      <div className="tab__content">{tabData[activeTab-1].content}-{count}</div>
    </div> 

  </div>: <p>closed tab</p>}
  </div>)
}

export default App;
