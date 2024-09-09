import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Component/Page/App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Leaderboard from "./Component/Page/leaderBoard.tsx";
import Question from "./Component/Page/question.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/question/:type", // Route dynamique pour les questions
    element: <Question />,    // Utilisation d'un seul composant pour toutes les questions
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
