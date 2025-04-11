import { HashRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/Welcome.jsx";
import ChallengesPage from "./pages/Challenges.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
