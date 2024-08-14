import { useState } from "react";
import ConfigPage from "./pages/ConfigPage/ConfigPage.tsx"
import ScoreKeeping from "./pages/ScoreKeeping/ScoreKeeping.tsx"
import {ConfigForm, QuizPages} from "./components.ts"
import './App.css'

interface AppState {
  currentPage: QuizPages,
  gameConfig: null | ConfigForm,
}

function App() {
  const [appState, setAppState] = useState<AppState>({
    currentPage: QuizPages.ConfigForm,
    gameConfig: null,
  })

  const handleChange = (name: string, value: QuizPages | ConfigForm) => {
    setAppState((currState) => {
      return {
        ...currState,
        [name]: value,
      };
    })
  }

  return (
    <>
      { appState.currentPage == QuizPages.ConfigForm && <ConfigPage setGlobalFunc={handleChange} /> }
      { appState.currentPage == QuizPages.Scoresheet && <ScoreKeeping /> }
    </>
  );
}

export default App
