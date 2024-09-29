import { useState, useContext } from "react";
import { questions } from "../utils/QuestionBank";
import { QuizContext } from "../context/QuizContext";

const QuizScreen = () => {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const rightAnswer = questions[count].correctAnswer;

  const { score, setScore, setCurrentScreen } = useContext(QuizContext);

  const navigateForward = () => {
    setSelected(null);
    if (count === questions.length - 1) {
      if (selected === rightAnswer) {
        setScore(score + 1);
      }
      setCurrentScreen("end");
    } else {
      if (selected === rightAnswer) {
        setScore(score + 1);
      }
      setCount(count === questions.length - 1 ? count : count + 1);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-4 text-center">
        {questions[count].question}
      </h1>
      <div className="space-y-3 mb-4">
        <button
          onClick={() => setSelected(questions[count].option1)}
          className={`w-full p-2 ${
            selected === questions[count].option1 &&
            "bg-gray-100 hover:bg-gray-200 transition duration-200"
          } rounded-lg`}
        >
          {questions[count].option1}
        </button>
        <button
          onClick={() => setSelected(questions[count].option2)}
          className={`w-full p-2 ${
            selected === questions[count].option2 &&
            "bg-gray-100 hover:bg-gray-200 transition duration-200"
          } rounded-lg`}
        >
          {questions[count].option2}
        </button>
        <button
          onClick={() => setSelected(questions[count].option3)}
          className={`w-full p-2 ${
            selected === questions[count].option3 &&
            "bg-gray-100 hover:bg-gray-200 transition duration-200"
          } rounded-lg`}
        >
          {questions[count].option3}
        </button>
        <button
          onClick={() => setSelected(questions[count].option4)}
          className={`w-full p-2 ${
            selected === questions[count].option4 &&
            "bg-gray-100 hover:bg-gray-200 transition duration-200"
          } rounded-lg`}
        >
          {questions[count].option4}
        </button>
      </div>
      <button
        className={`w-full py-2 px-4 ${selected ? "bg-blue-500 hover:bg-blue-700 focus:ring-blue-400" : "bg-gray-500 hover:bg-gray-700 focus:ring-gray-400"} transition duration-200  text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75`}
        onClick={navigateForward}
        disabled={!selected}
      >
        {count === questions.length - 1 ? "Finish Quiz" : "Next"}
      </button>
    </div>
  );
};

export default QuizScreen;
