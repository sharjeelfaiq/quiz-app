import { useState } from "react";
import MenuScreen from "./MenuScreen";
import QuizScreen from "./QuizScreen";
import EndScreen from "./EndScreen";
import { QuizContext } from "../context/QuizContext";

const Layout = () => {
  const [currentScreen, setCurrentScreen] = useState("menu");
  const [score, setScore] = useState(0);

  const values = {
    currentScreen,
    setCurrentScreen,
    score,
    setScore,
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen pb-36">
      <div className="mt-20 w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Quiz App</h1>
        <QuizContext.Provider value={values}>
          <div>
            {currentScreen === "menu" && <MenuScreen />}
            {currentScreen === "quiz" && <QuizScreen />}
            {currentScreen === "end" && <EndScreen />}
          </div>
        </QuizContext.Provider>
      </div>
    </div>
  );
};

export default Layout;
