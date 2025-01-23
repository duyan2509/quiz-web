import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyLayout from "./Layout"
import AHome from "./pages/Admin/Home/Home"
import AQuizPage from "./pages/Admin/Quiz/QuizPage"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Home from "./pages/User/Home/Home"
import Setting from "./pages/User/Personal/Setting"
import MyQuiz from "./pages/User/Quiz/MyQuiz"
import QuizPage  from "./pages/User/Quiz/QuizPage";
import DetailQuiz from "./pages/User/Quiz/DetailQuiz"
import QuizAttempt from "./pages/User/Quiz/QuizAttemp";
const AppRoutes = () => {
    return (
      <Router>
        <MyLayout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/quizzes" element={<QuizPage />} />
            <Route path="/quizzes/:id/attempt" element={<QuizAttempt />} />
            <Route path="/quizzes/:id/history/:historyId" element={<QuizAttempt />} />
            <Route path="/quizzes/:id" element={<DetailQuiz />} />
            {/* User Routes */}
            <Route path="/settings" element={<Setting />} />
            <Route path="/my-quiz" element={<MyQuiz />} />
            {/* Admin Routes */}
            <Route path="/admin/home" element={<AHome />} />
            <Route path="/admin/quizzes" element={<AQuizPage />} />
          </Routes>
        </MyLayout>
      </Router>
    );
  };
  
  export default AppRoutes;
  