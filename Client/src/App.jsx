import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AdminRoutes from "./routes/AdminRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
