// app file
import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/header/Navbar";
import BookMarks from "./component/BookMarks/BookMarks";
import Time from "./component/time/Time";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readTime, setTime] = useState(0);

  const handelBmarks = (dataBlog) => {
    const newdata = [...bookMarks, dataBlog]
    setBookMarks(newdata)
    console.log(newdata)
  };
  const MarkasRead = (time,id) => {
    const newTime = readTime + time;
    setTime(newTime);
    const aftblg=bookMarks.filter(blog=>blog.id!== id)
    setBookMarks(aftblg)
  };
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header></Header>
      </div>
      <div className="flex w-11/12 mx-auto">
        <div className="w-2/3 ">
          <Blogs handelBmarks={handelBmarks} MarkasRead={MarkasRead}></Blogs>
        </div>
        <div className=" bg-gray-200 w-1/3">
          <Time readTime={readTime}></Time>
          <BookMarks bookMarks={bookMarks}></BookMarks>
        </div>
      </div>
    </>
  );
}

export default App;
