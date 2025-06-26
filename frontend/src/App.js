
import './App.css';
import { useState } from 'react';
import FeedBack from './Feedback';
import Dashboard from './Dashboard';
function App() {
  const [showFeedbackForm,setshowFeedbackForm]=useState(true);
  return (
    <>
  <h1> FeedBack Page</h1>
  <button onClick={()=>{setshowFeedbackForm(true);}}>
    FeedBack Form</button>
  <button onClick={()=>{setshowFeedbackForm(false);}}>
    FeedBack Data</button>
  <br></br>
  {showFeedbackForm && <FeedBack/>}
  {!showFeedbackForm && <Dashboard/>} 
  </>
);
}


export default App;
