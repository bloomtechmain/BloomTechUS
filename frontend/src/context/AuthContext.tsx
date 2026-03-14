import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  googleLogin: (token: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async (token: string): Promise<void> => {
    try {
      const res = await axios.get<User>('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch {
      localStorage.removeItem('token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<void> => {
    const res = await axios.post<{ token: string; user: User }>(
      'http://localhost:5000/api/auth/login',
      { email, password }
    );
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
  };

  const googleLogin = async (token: string): Promise<void> => {
    const res = await axios.post<{ token: string; user: User }>(
      'http://localhost:5000/api/auth/google-login',
      { token }
    );
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
  };

  const register = async (name: string, email: string, password: string): Promise<void> => {
    await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
  };

  const logout = (): void => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, googleLogin, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
