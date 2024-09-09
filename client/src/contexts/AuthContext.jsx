import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = JSON.parse(localStorage.getItem('token'));
        if (savedToken) {
            setIsLoggedIn(true);
            setToken(savedToken);
        }
    }, []);

    const login = (token) => {
        setIsLoggedIn(true);
        setToken(token);
        localStorage.setItem('token', JSON.stringify(token));
    };

    const logout = () => {
        setIsLoggedIn(false);
        setToken(null);
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};