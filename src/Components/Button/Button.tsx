import React from 'react';
import style from './Button.module.css';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button = ({ children, ...rest }: IButton) => {
    return (
        <button {...rest} className={`${style.Button} ${rest.className}`}>
            {children}
        </button>
    )
}

export default Button;