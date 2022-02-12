import React from 'react';

interface ILabel {
    text: string
}

interface ITextField {
    labelProps: React.LabelHTMLAttributes<HTMLLabelElement> & ILabel,
    inputProps: React.InputHTMLAttributes<HTMLInputElement>
}

const TextField = ({ labelProps, inputProps }: ITextField) => {
    const { text, ...labelPropsrest } = labelProps;

    return (
        <div>
            <label {...labelPropsrest} className={`d-block ${labelPropsrest.className}`}>
                {text}
            </label>
            <input {...inputProps} />
        </div>
    )
}

export default TextField;