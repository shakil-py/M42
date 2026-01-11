import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("../../../public/blogs.json")
      .then((res) => res.json())
      .then((res) => setBlogs(res));
  }, []);
  console.log(blogs)
  return (
    <>
          <div className="w-2/3">
              {
                  blogs.map(dataBlog => (
                      <Blog dataBlog={dataBlog}></Blog>
                  ))
              }
        
      </div>
    </>
  );
};

export default Blogs;
