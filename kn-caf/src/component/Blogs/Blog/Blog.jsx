const Blog = (dataBlog) => {
    const data = dataBlog.dataBlog
    const {author,cover,title,post_date,hashtags}=data
    
    
    
    
  return (
    <>
      <div className="p-3 bg-gray-100">
        <img className="w-full rounded-2xl" src={cover} alt="" srcset="" />
        <div className="flex items-center p-2 ">
          <img src="../../../public/images/profile.png" alt="" />
          <div className="ml-4">
            <h1>Author: {author}</h1>
            <h1>Post Date: {post_date}</h1>
          </div>
        </div>

              <h1 className="font-bold text-4xl">{title} </h1>
              <p className="pt-2 mb-2">{hashtags}</p>
              <button className="btn bg-blue-300 p-2 rounded-xl font-bold text-black ">Mark As Read</button>
      </div>
    </>
  );
};

export default Blog;
