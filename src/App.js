import { useState } from "react";
import MenuScreen from "./components/MenuScreen";
import QuizScreen from "./components/QuizScreen";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./context/QuizContext";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("menu");
  const [score, setScore] = useState(0);

  const values = {
    currentScreen,
    setCurrentScreen,
    score,
    setScore,
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen pb-52">
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

export default App;
