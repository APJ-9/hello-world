import React, { useRef } from 'react'
import './style.css'

interface Props {
    todo: string | number,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form
            className='input'
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }
            }>
            <input type="input" placeholder='Enter a task' className='input__box'
                ref={inputRef}
                value={todo}
                onChange={(event) => setTodo(event.target.value)} />
            <button className='input_submit' type='submit'>
                Go
            </button>
        </form>
    )
}

export default InputFeild