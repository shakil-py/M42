const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <h1 className="text-3xl bg-gray-100 m-3 p-3 rounded-2xl">{title}</h1>
    </div>
  );
};

export default Bookmark;
