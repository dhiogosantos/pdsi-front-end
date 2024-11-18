import React, { createContext, useState, useContext } from 'react';

// Cria o contexto do usuário
const UserContext = createContext();

// Acessar o contexto de usuário
export const useUser = () => useContext(UserContext);

// Componente que proverá o contexto de usuário
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado inicial do usuário é null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
