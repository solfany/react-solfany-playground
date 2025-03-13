const Question = ({ question, options, onSelect }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{question}</h2>
        <div className="mt-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelect(option)}
              className="w-full p-2 my-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Question;
  