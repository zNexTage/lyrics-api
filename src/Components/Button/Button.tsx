import React from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

const Button = ({ children, ...rest }: IButton) => {
    return (
        <button {...rest}>
            {children}
        </button>
    )
}

export default Button;