
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    useNavigate
} from "react-router-dom";

import { useState } from "react";

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/dashboard">Go to Dashboard</Link>
        </div>
    );
}

function Login({ onLogin }) {
    const navigate = useNavigate();

    function handleLogin() {
        onLogin();
        navigate("/dashboard");
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

function Dashboard({ onLogout }) {
    return (
        <div>
            <h1>Welcome to Dashboard!</h1>
            <p>You are logged in.</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function handleLogout() {
        setIsAuthenticated(false);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/login"
                    element={
                        <Login
                            onLogin={() => setIsAuthenticated(true)}
                        />
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                        >
                            <Dashboard onLogout={handleLogout} />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
