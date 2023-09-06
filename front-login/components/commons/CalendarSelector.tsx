'use client'
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
    formatVersion: 'v1' | 'v2';
}

export const CalendarSelector = ({ selectedDate, onChange, formatVersion }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const date = value ? new Date(value) : null;
        onChange(date);
    };

    if (formatVersion === 'v1') {
        return (
            <div>
                <label htmlFor="calendar" className="ml-4 text-lg font-bold">
                    Fecha:
                </label>
                <DatePicker
                    id="calendar"
                    selected={selectedDate}
                    onChange={onChange}
                    dateFormat="dd/MM/yyyy"
                    className="w-64 h-12 px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:border-blue-600"
                />
            </div>
        );
    } else if (formatVersion === 'v2') {
        return (
            <div>
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Fecha: 
                </label>
                <input
                    type="datetime-local"
                    name="date"
                    id="date"
                    value={selectedDate ? selectedDate.toISOString().slice(0, -8) : ""}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
        );
    } else {
        return null; // Manejo de caso no válido o por defecto
    }
}

/**
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    selectedDate: Date | null;
    onChange: (date: Date | null) => void;
}

export const CalendarSelector = ({ selectedDate, onChange }: Props) => {
    return (
        <div className="flex items-center">
            <label htmlFor="calendar" className="ml-4 text-lg font-bold">
                 Fecha: 
            </label>
            <DatePicker
                id="calendar"
                selected={selectedDate}
                onChange={onChange}
                dateFormat="dd/MM/yyyy"
                className="w-64 h-12 px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:border-blue-600"
            />
        </div>
    );
}
*/