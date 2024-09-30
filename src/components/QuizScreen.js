import { useState, useContext } from "react";
import { questions } from "../utils/QuestionBank";
import { QuizContext } from "../context/QuizContext";

const QuizScreen = () => {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const { score, setScore, setCurrentScreen } = useContext(QuizContext);

  const rightAnswer = questions[count].correctAnswer;

  const navigateForward = () => {
    if (selected === rightAnswer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (count === questions.length - 1) {
      setCurrentScreen("end");
    } else {
      setCount(count + 1);
    }
  };

  const OptionButton = ({ option }) => (
    <button
      onClick={() => setSelected(option)}
      className={`w-full p-4 transition duration-300 rounded-lg shadow-md ${
        selected === option
          ? "bg-blue-600 text-white border-2 border-blue-700"
          : "bg-white text-gray-800 border border-gray-300 hover:border-blue-500 hover:bg-gray-100"
      }`}
    >
      {option}
    </button>
  );

  const isLastQuestion = count === questions.length - 1;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        {questions[count].question}
      </h1>
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
        disabled={!selected}
      >
        {isLastQuestion ? "Finish Quiz" : "Next"}
      </button>
    </div>
  );
};

export default QuizScreen;
