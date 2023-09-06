import React from "react";

interface Item {
    id: number;
    serviceName: string;
    date: string;
}

interface Props {
    items: Item[];
    itemSelected: (id: number) => void;
}

export const SelectorButton = ({ items, itemSelected }: Props) => {
    return (
        <>
            {items.map((Item) => (
                <div key={Item.id} className="flex items-center justify-between mb-4">
                    <p className="text-lg font-medium">{Item.serviceName}</p>
                    <div>
                        <p className="text-gray-600 dark:text-gray-300">{Item.date}</p>
                        <button
                            type="button"
                            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2.5 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
                            onClick={() => itemSelected(Item.id)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}