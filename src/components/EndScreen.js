import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { questions } from "../utils/QuestionBank";

const EndScreen = () => {
  const { score, setScore, setCurrentScreen } = useContext(QuizContext);

  const restartQuiz = () => {
    setCurrentScreen("menu");
    setScore(0);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Quiz Completed</h1>
      <p className="text-lg mb-6 text-center">
        Your Score: {score + "/" + questions.length}
      </p>
      <button
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={restartQuiz}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default EndScreen;
