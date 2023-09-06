'use client'
import { useRouter, usePathname } from "next/navigation";
import React, { createContext, useState, useContext, useEffect } from "react";

type AuthContextType = {
    login: (token: string) => void;
    logout: () => void;
};

interface Props {
    children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
    const isAuth = localStorage.getItem('token') ? true : false;
    const router = useRouter();
    const pathname = usePathname();

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isAuth);
    useEffect(() => {
        if (!isAuthenticated
            && pathname !== '/login' && pathname !== '/register'
        ) {
            localStorage.removeItem('token');
            router.push('/login');
            // } else {
            //     router.push('/profile/home');
        }
    }, [isAuthenticated]);

    const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within a AuthProvider");
    }
    return context;
}