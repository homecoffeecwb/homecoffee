import { createContext, useState } from 'react';
import React from 'react';

export interface Header {
    title:string

}

const initial_title = 'Painel de controle'

interface HeaderContextValue {
    title:string;
    setTitle: (title:string) => void;
    resetTitle: () => void
}

interface HeaderProviderProps {
    children: React.ReactNode
}


const HeaderContext = createContext<HeaderContextValue>({} as HeaderContextValue);

export default HeaderContext;

export const HeaderProvider:React.FC<HeaderProviderProps> = ({children}) => {
    const [title, setTitle] = useState(initial_title)

    const resetTitle = () => setTitle(initial_title)

    return (
         <HeaderContext.Provider value={{title, setTitle, resetTitle}}>
              {children}
         </HeaderContext.Provider>
    )
}