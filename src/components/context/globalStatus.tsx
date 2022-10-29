import { createContext, ReactNode, useState } from 'react';
import { Employees, User } from './types';
export const GlobalState = createContext({});

interface Props {
    children: ReactNode
}

export const StorProvider = ({ children }: Props) => {
    const [employeesContext, setEmployeesContext] = useState<Array<Employees>>([]);
    const [userAuth, setUserAuth] = useState<User | Boolean>(localStorage.getItem("seccion") === 'true');

    return (
        <GlobalState.Provider value={{
            employeesContext, setEmployeesContext,
            userAuth, setUserAuth,
        }}>
            {children}
        </GlobalState.Provider>
    )
}