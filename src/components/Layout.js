import { useState, useEffect } from "react";
import MenuScreen from "./MenuScreen";
import QuizScreen from "./QuizScreen";
import EndScreen from "./EndScreen";
import { QuizContext } from "../context/QuizContext";

const originalTimeAllowed = 60;
const Layout = () => {
  const [currentScreen, setCurrentScreen] = useState("menu");
  const [timeLeft, setTimeLeft] = useState(originalTimeAllowed);
  const [score, setScore] = useState(0);

  const resetTimer = () => {
    setTimeLeft(originalTimeAllowed);
    return originalTimeAllowed;
  };

  const values = {
    currentScreen,
    setCurrentScreen,
    score,
    setScore,
    timeLeft,
    setTimeLeft,
    resetTimer
  };

  useEffect(() => {
    window.history.pushState(
      { screen: currentScreen },
      "",
      `#${currentScreen}`
    );
  }, [currentScreen]);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        setCurrentScreen(event.state.screen);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

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
