import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/appContext";
import LoginPage from "./pages/loginPage";
import PropertyPage from "./pages/propertyPage";
import DetailedPage from "./pages/detailedPage";

function App() {
  return (
    <div className="app">
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/property" element={<PropertyPage />} />
            <Route path="/detailedPage/:id" element={<DetailedPage />} />
          </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
