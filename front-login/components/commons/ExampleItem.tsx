import React from "react";

interface Props {
    text: string;
    example: string;
}

export const ExampleItem = ({ text, example }: Props) => {
    return (
        <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <span className="font-medium">{text}</span>
            <p className="text-gray-500 dark:text-gray-400">{example}</p>
        </li>
    );
}