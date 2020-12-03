import {useState} from 'react'
export const UserInput = (initialValue) => {
    const [value,setValue] = useState(initialValue)
    return [
        {value,onChange:(e)=>setValue(e.target.value)},
        ()=>setValue(initialValue),
    ]
}
