import { useState } from 'react'

export function useInput(initialState){
    const [value, setValue] = useState(initialState)
    const handleChangeValue = (event) => setValue(event.target.value)
    return [value, handleChangeValue]
}

export function useClick(initialState){
    const [value, setValue] = useState(initialState)
    const handleChangeValue = () => setValue(!value)
    return [value, handleChangeValue]
}