const Time = ({ reading_time }) => {
  console.log(reading_time);
  return (
    <div>
      <h1 className="text-4xl">My Total Reading Time : {reading_time}</h1>
    </div>
  );
};

export default Time;
