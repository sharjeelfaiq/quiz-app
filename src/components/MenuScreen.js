import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const MenuScreen = () => {
  const { setCurrentScreen } = useContext(QuizContext);
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Welcome to the Quiz App</h1>
      <button 
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={() => setCurrentScreen("quiz")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MenuScreen;