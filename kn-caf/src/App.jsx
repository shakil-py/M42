// app file
import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/header/Navbar";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const handelBmarks = blog => {
    console.log("add soon")
  }
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <Blogs handelBmarks={handelBmarks}></Blogs>
      </div>
    </>
  );
}

export default App;
