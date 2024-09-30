import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

const MenuScreen = () => {
  const { setCurrentScreen } = useContext(QuizContext);

  return (
    <div
      className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto flex flex-col justify-between"
      style={{ minHeight: "400px" }}
    >
      <div>
        <h1 className="text-2xl font-bold mb-6 text-center">
          Welcome to the Quiz App
        </h1>
        <button
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => setCurrentScreen("quiz")}
        >
          Start Quiz
        </button>
      </div>

      <div className="flex justify-center space-x-6 mt-6">
        <a
          href="https://github.com/sharjeelfaiq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
          />
        </a>
        <a
          href="https://linkedin.com/in/sharjeelfaiq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="text-blue-700 hover:text-blue-500 transition-colors duration-200"
          />
        </a>
        <a
          href="https://medium.com/@sharjeelfaiq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faMedium}
            size="2x"
            className="text-black hover:text-gray-700 transition-colors duration-200"
          />
        </a>
        <a
          href="https://www.npmjs.com/~mrmalik610"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faNpm}
            size="2x"
            className="text-red-600 hover:text-red-400 transition-colors duration-200"
          />
        </a>
      </div>
    </div>
  );
};

export default MenuScreen;
