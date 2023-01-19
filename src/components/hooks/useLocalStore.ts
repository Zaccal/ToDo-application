import { getToPathname } from '@remix-run/router'
import { useState, useEffect } from 'react'

const useLocalStore = <T>(key: string, value: T): [T, (newValue: T) => void] => {
    const getDefualtValue = () => {
        const gotItemFromLS = localStorage.getItem(key)
        
        if (gotItemFromLS) {
            return JSON.parse(gotItemFromLS)
        }

        return value
    }

    const [itemLS, setItemLS] = useState(getDefualtValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(itemLS))
    }, [itemLS, value])

    return [itemLS, setItemLS]
}

export default useLocalStore