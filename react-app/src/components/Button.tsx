import React from 'react'

interface buttonProps {
    children: string;
    color? : 'primary' | 'secondary' | 'danger' | 'success';    // the question mark is making the requirement optional to input in App()
    onClickButton: () => void;
}

const Button = ({children, onClickButton, color}: buttonProps) => {
    return (
        <button className = {'btn btn-' + color} onClick={onClickButton}
        > {children} </button>
    )
}

export default Button
