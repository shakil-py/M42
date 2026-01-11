// app file
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Header from './component/header/Navbar';

function App() {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <Blogs></Blogs>
      </div>
    </>
  );
}

export default App;
