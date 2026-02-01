


const BookMarks = ({ bookMarks }) => {
    
    return (
        <div className="w-full bg-gray-200 p-3  ">
            {bookMarks.map(bookMark =>
                <h1 className="font-bold text-3xl px-4 bg-gray-100 m-2 rounded-2xl py-4 ">{ bookMark}</h1>
            )}
        </div>
    );
};

export default BookMarks;