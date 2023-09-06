interface Props {
    text: string;
    onClick: () => void;
}

export const FillButton = ({ text, onClick}: Props) => {
    return (
        <div>
        <button
            onClick={onClick}
            type="button"
            className="flex items-center justify-center w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"   
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-2"
                >
                <path
                    fillRule="evenodd"
                    d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10C0 4.477 4.477 0 10 0zm5 10h-4v3h-2v-3H5v-2h4V5h2v3h4v2z"
                ></path>
            </svg>
                {text}
        </button>

        </div>
    );

}
