import React from 'react';
import style from './TextField.module.css';

interface ILabel {
    text: string
}

interface ITextField {
    containerProps?: React.HTMLAttributes<HTMLDivElement>,
    labelProps: React.LabelHTMLAttributes<HTMLLabelElement> & ILabel,
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

const TextField = ({ labelProps, inputProps, containerProps }: ITextField) => {
    const { text, ...labelPropsrest } = labelProps;

    return (
        <div {...containerProps}>
            <label {...labelPropsrest} className={`d-block ${labelPropsrest.className}`}>
                {text}
            </label>
            <input {...inputProps} className={`${style.TextField} ${inputProps?.className}`} />
        </div>
    )
}

export default TextField;