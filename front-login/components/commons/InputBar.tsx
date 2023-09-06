'use client';
import React from "react";

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    text : string;
    name : string;
    example: string;
}

export const InputBar = ({ text, name, onChange, example }: Props) => {
    return (
        <div>
            <label htmlFor= {name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {text}
            </label>
            <input
                onChange={onChange}
                type={name}
                name={name}
                id={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={example}
            ></input>            
        </div>
    );
}