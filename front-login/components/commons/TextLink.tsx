
interface Props {
    text: string;
    onClick: () => void;
}

export const TextLink = ({ text, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className="text-sm font-light text-gray-500 dark:text-gray-400"
        >
            {text}
        </button>
    );
}
