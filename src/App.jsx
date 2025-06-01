import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Redirect root to login */}
          <Route index element={<Navigate to="login" replace />} />
          
          {/* Auth routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
