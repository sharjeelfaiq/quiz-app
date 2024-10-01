import { useState, useEffect, useContext } from "react";
import { questions } from "../utils/QuestionBank";
import { QuizContext } from "../context/QuizContext";

const QuizScreen = () => {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null); // State to track feedback
  const { score, setScore, setCurrentScreen, timeLeft, setTimeLeft } =
    useContext(QuizContext);

  const rightAnswer = questions[count].correctAnswer;

  // Function to handle the timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId); // Clean up the timer
    } else {
      setCurrentScreen("end");
    }
  }, [timeLeft, setCurrentScreen, setTimeLeft]);

  const navigateForward = () => {
    // Check if the selected answer is correct
    if (selected === rightAnswer) {
      setScore((prevScore) => prevScore + 1);
      setFeedback(null); // No feedback needed for correct answer
    } else {
      setFeedback(rightAnswer); // Set feedback to show the correct answer
    }

    // Move to the next question after a short delay to allow the user to see feedback
    setTimeout(() => {
      setSelected(null);
      setFeedback(null); // Clear feedback for the next question
      count === questions.length - 1
        ? setCurrentScreen("end")
        : setCount((prevCount) => prevCount + 1);
    }, 1000); // 1 second delay
  };

  const OptionButton = ({ option }) => {
    const isSelected = selected === option;
    const isCorrect = option === rightAnswer;
    const showFeedback = feedback === rightAnswer; // Check if feedback should be shown

    return (
      <button
        onClick={() => !selected && setSelected(option)} // Prevent clicking after selection
        className={`w-full p-4 transition duration-300 rounded-lg shadow-md ${
          isSelected
            ? isCorrect
              ? "bg-green-600 text-white border-2 border-green-700" // Correct answer
              : "bg-red-600 text-white border-2 border-red-700" // Incorrect answer
            : showFeedback && option === rightAnswer // Only highlight the correct answer
            ? "bg-light-green-400 border-2 border-green-500" // Correct answer feedback
            : "bg-white text-gray-800 border border-gray-300 hover:border-blue-500 hover:bg-gray-100"
        }`}
        disabled={!!selected} // Disable button after selection
      >
        {option}
      </button>
    );
  };

  const isLastQuestion = count === questions.length - 1;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex justify-between mb-4">
        <span className="text-gray-800">
          Question: {count + 1}/{questions.length}
        </span>
        <span className="text-gray-800">
          Score: {score}/{questions.length}
        </span>
      </div>

      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        {questions[count].question}
      </h1>

      {/* Display the Timer */}
      <div className="mb-4 text-center text-red-600">
        Time Left: {timeLeft} seconds
      </div>

      <div className="space-y-4 mb-4">
        <OptionButton option={questions[count].option1} />
        <OptionButton option={questions[count].option2} />
        <OptionButton option={questions[count].option3} />
        <OptionButton option={questions[count].option4} />
      </div>

      <button
        className={`w-full py-3 text-white font-semibold rounded-lg shadow-md transition duration-300 focus:outline-none ${
          selected
            ? isLastQuestion
              ? "bg-green-600 hover:bg-green-700"
              : "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        onClick={navigateForward}
        disabled={!selected} // Disable button until an option is selected
      >
        {isLastQuestion ? "Finish Quiz" : "Next"}
      </button>
    </div>
  );
};

export default QuizScreen;
