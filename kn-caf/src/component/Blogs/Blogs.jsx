import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = ({handelBmarks,MarkasRead}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("../../../public/blogs.json")
      .then((res) => res.json())
      .then((res) => setBlogs(res));
  }, []);
  // console.log(blogs)
  return (
    <>
          <div className="">
              {
                  blogs.map(dataBlog => (
                      <Blog dataBlog={dataBlog} handelBmarks={handelBmarks} MarkasRead={MarkasRead} ></Blog>
                  ))
              }
        
      </div>
    </>
  );
};

export default Blogs;
