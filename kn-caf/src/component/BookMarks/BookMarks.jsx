import Bookmark from "./bookmark/Bookmark";


const BookMarks = ({ bookMarks }) => {
  
  return (
    <div className="  ">
          {
              bookMarks.map(bookmark => (
                  <Bookmark bookmark={bookmark}></Bookmark>
              ))
          }
    </div>
  );
};

export default BookMarks;
// const BookMarks = ({ bookMarks }) => {
//   return (
//     <div className="w-full bg-gray-200 p-3">
//       {bookMarks.map((bookmark) => (
//         <BookMark
//           key={bookmark.id} // Assuming each blog has a unique ID
//           bookmark={bookmark}
//         />
//       ))}
//     </div>
//   );
// };
