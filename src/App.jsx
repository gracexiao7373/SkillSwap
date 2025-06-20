import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Redirect root to login */}
            <Route index element={<Navigate to="login" replace />} />
            
            {/* Auth routes */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            
            {/* Protected routes */}
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
