import { useState } from "react";

type SwitchProps = {
    className?: string;
};

export default function Switch({ className = "" }: SwitchProps) {
    const [checked, setChecked] = useState(false);

    return (
        <div className={`relative h-5 ${className}`}>
            <input
                id="switch-component"
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(prev => !prev)}
                className="peer appearance-none w-50 h-100 rounded-2xl bg-gray-700 checked:bg-green-400 cursor-pointer transition-colors duration-150"
            />
            <label className="absolute top-10 left-8 text-9xl text-gray-100">開</label>
            <label className="absolute top-60 left-8 text-9xl text-gray-100">閉</label>
            <label
                htmlFor="switch-component"
                className="absolute top-0 left-0 h-50 w-50 rounded-2xl cursor-pointer border border-gray-300 bg-white shadow-sm transition-all duration-150 peer-checked:translate-y-50 peer-checked:border-gray-100"
            />  
        </div>
    );
}