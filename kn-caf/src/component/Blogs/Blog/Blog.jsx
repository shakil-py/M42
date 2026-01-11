const Blog = (dataBlog) => {
    const data = dataBlog.dataBlog
    const {author,cover,title}=data
    
    
    
    
  return (
    <div>
          <img className="w-full" src={cover} alt="" srcset="" />

      <h1 className="font-bold text-4xl text-red-400">{title} </h1>
      <h1>{author}</h1>
    </div>
  );
};

export default Blog;
