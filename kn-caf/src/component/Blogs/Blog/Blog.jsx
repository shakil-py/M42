const Blog = ({ dataBlog, handelBmarks }) => {
  const { author, cover, title, post_date, hashtags, reading_time } = dataBlog;

  return (
    <>
      <div className="p-3 bg-gray-100">
        <img className="w-full rounded-2xl" src={cover} alt="" srcset="" />
        <div className="flex items-center p-2 justify-between ">
          <div className="flex items-center ">
            <img src="../../../public/images/profile.png" alt="" />
            <div className="ml-4">
              <h1 className="font-extrabold text-xl"> {author}</h1>
              <h1>Post Date: {post_date}</h1>
            </div>
          </div>
          <div className="flex items-center ">
            <p className="font-semibold">{reading_time} minutes read </p>
            <button onClick={()=>handelBmarks(title)}>
              <i className="">
                <svg
                  className="h-6 w-10 font-semibold"
                  //   xmlns="http://www.w3.org/2000/svg"
                  //   width="20"
                  //   height="20"
                  //   viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M16 2H8a3.003 3.003 0 0 0-3 3v16.5a.5.5 0 0 0 .75.434l6.25-3.6l6.25 3.6A.5.5 0 0 0 19 21.5V5a3.003 3.003 0 0 0-3-3zm2 18.635l-5.75-3.312a.51.51 0 0 0-.5 0L6 20.635V5a2.003 2.003 0 0 1 2-2h8a2.003 2.003 0 0 1 2 2v15.635z"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>

        <h1 className="font-bold text-4xl">{title} </h1>
        <p className="pt-2 mb-2">{hashtags}</p>
        <button className="btn bg-blue-300 p-2 rounded-xl font-bold text-black ">
          Mark As Read
        </button>
      </div>
    </>
  );
};

export default Blog;
