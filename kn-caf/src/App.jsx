// app file
import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/header/Navbar";
import BookMarks from './component/BookMark/BookMarks';
import Time from "./component/time/Time";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const handelBmarks = blogTItle => {
    const bkMarks=[...bookMarks,blogTItle]
    setBookMarks(bkMarks)
    
  }
  const [readTime, setTime] = useState(0)
  const MarkasRead = time => {
    const newTime = readTime+time
    setTime(newTime);
    
  }
  
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header></Header>
      </div>
      <div className="flex w-11/12 mx-auto">
        <div className="w-2/3 ">
          <Blogs handelBmarks={handelBmarks}MarkasRead={MarkasRead}></Blogs>
        </div>
        <div className="1/3">
          <Time readTime={readTime}></Time>
          <BookMarks bookMarks={bookMarks}></BookMarks>
        </div>
      </div>
    </>
  );
}

export default App;
