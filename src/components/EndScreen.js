import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { questions } from "../utils/QuestionBank";

const EndScreen = () => {
  const { score, setScore, setCurrentScreen } = useContext(QuizContext);

  const navigateToHome = () => {
    setCurrentScreen("menu");
    setScore(0);
  };

  const restartQuiz = () => {
    setCurrentScreen("quiz");
    setScore(0);
  };

  const getFeedback = () => {
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;

    if (percentage === 100) {
      return {
        message:
          "Outstanding performance! 🎉 You've mastered the quiz with a perfect score. Keep up the excellent work!",
        color: "text-green-600",
      };
    } else if (percentage >= 80) {
      return {
        message:
          "Impressive job! 🌟 You clearly have a solid grasp of the material. Continue to build on this knowledge!",
        color: "text-blue-600",
      };
    } else if (percentage >= 50) {
      return {
        message:
          "Good effort! 📚 You've shown potential, and with a bit more practice, you'll get even better. Don't hesitate to revisit the material!",
        color: "text-yellow-600",
      };
    } else {
      return {
        message:
          "Every attempt is a step forward! 💪 Review the questions, take your time, and try again. You've got this!",
        color: "text-red-600",
      };
    }
  };

  const feedback = getFeedback();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Quiz Completed
      </h1>
      <p className="text-lg mb-2 text-center text-gray-700">
        Your Score:{" "}
        <span className="font-semibold">
          {score}/{questions.length}
        </span>
      </p>
      <p className={`text-lg mb-6 text-center font-medium ${feedback.color}`}>
        {feedback.message}
      </p>
      <div className="space-y-2">
        <button
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={navigateToHome}
        >
          Go To Home
        </button>
        <button
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={restartQuiz}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default EndScreen;
