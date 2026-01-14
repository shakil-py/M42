


const BookMarks = ({ bookMarks }) => {
    
    return (
        <div>
            {bookMarks.map(bookMark =>
                <h1 className="text-2xl">{ bookMark}</h1>
            )}
        </div>
    );
};

export default BookMarks;