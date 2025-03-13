const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-500 h-4 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  