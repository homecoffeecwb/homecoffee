import { useContext } from 'react'
import HeaderContext from '../contexts/headerContext'

export const useHeader = () => {
    const headerContext = useContext(HeaderContext);

    return headerContext
}