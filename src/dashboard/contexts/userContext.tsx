import { useEffect } from 'react';
import { createContext, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface User {
    name: string
    password: string
}

interface UserContextValue {
    value: User | null;
    setValue: (value:User|null) => void;
}

const UserContext = createContext<UserContextValue>({} as UserContextValue)

interface UserProviderProps {
    children: React.ReactNode
}

export default UserContext;


export const UserProvider:React.FC<UserProviderProps> = ({children}) => {
    const [value, setValue] = useState<User | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (!value) navigate('/dashboard/login')

        console.log(value)
    }, [value])

    return (
        <UserContext.Provider value={{value, setValue}}>
            {children}
        </UserContext.Provider>
    )
}