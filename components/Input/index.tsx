import { InputProps, InputVariant } from "@/types";
import { Controller } from "react-hook-form"
import cls from './Input.module.css'

const Input = ({ variant, name, type = 'text', control, options, ...rest }: InputProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                if (variant === InputVariant.select) {
                    return (
                        <select className={`${cls['default-select']} ${rest?.className || ''}`} {...rest} {...field}>
                            {options?.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    );
                }
                return <input className={`${cls['default-input']} ${rest?.className || ''}`} type={type} {...rest}  {...field} />;
            }}
        />
    )
}

export default Input