import React from "react";

interface OptionV1 {
  value: string;
  label: string;
}

interface OptionV2 {
  id: number;
  nombre: string;
}

interface OptionV3 {
  value: string;
  label: string;
}

interface PropsV1 {
  options: OptionV1[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  version: 'v1';
}

interface PropsV2 {
  options: OptionV2[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  version: 'v2';
}

interface PropsV3 {
  options: OptionV3[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  version: 'v3';
}

export const DisplayMenu = ({ options, onChange, version }: PropsV1 | PropsV2 | PropsV3) => {
  let classNamex: string;

  if (version === 'v1') {
    classNamex = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  } else if (version === 'v2') {
    classNamex = "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  } else if (version === 'v3'){
    classNamex = "w-64 h-12 px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:border-blue-600";
  } else {
    classNamex = "";
  }

  return (
    <select
      className={classNamex}
      onChange={onChange}
    >
      {version === 'v1' && options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
      {version === 'v2' && options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.nombre}
        </option>
      ))}
      {version === 'v3' && options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};