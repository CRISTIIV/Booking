interface Props {
    text: string;
    onClick: () => void;
    size?: "small" | "medium" | "large";
    color?: "blue" | "red" | "green" | "yellow" | "gray";
    disabled?: boolean;
  }
  
  export const SimpleSubmitButton = ({
    text,
    onClick,
    size = "medium",
    color = "blue",
    disabled = false,
  }: Props) => {
    let buttonClass = "";
    // Asignar clases de acuerdo al tamaño del botón
    if (size === "small") {
      buttonClass += `ml-4 bg-${color}-600 hover:bg-${color}-700 text-white ml-4 font-bold py-2 px-4 rounded text-sm`;
    } else if (size === "large") {
      buttonClass += `flex items-center justify-center w-full text-white bg-${color}-500 hover:bg-${color}-600 focus:ring-4 focus:outline-none focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`;
    } else if (size === "medium") {
      buttonClass += `ml-4 bg-${color}-600 hover:bg-${color}-700 text-white ml-4 font-bold py-2 px-4 rounded text-m`;
    }
  
    return (
      <div>
        <button
          onClick={onClick}
          type="button"
          className={`${buttonClass}`}
          disabled={disabled}
        >
          {text}
        </button>
      </div>
    );
  };
  /**interface Props {
    text: string;
    onClick: () => void;
    size?: "small" | "medium" | "large";
    color?: "blue" | "red" | "green" | "yellow" | "gray";
}

export const SimpleSubmitButton = ({ text, onClick, size = "medium", color = "blue"}: Props) => {
    let buttonClass = "";
    // Asignar clases de acuerdo al tamaño del botón
    if (size === "small") {
        buttonClass += `ml-4 bg-${color}-600 hover:bg-${color}-700 text-white ml-4 font-bold py-2 px-4 rounded text-sm`;
    } else if (size === "large") {
        buttonClass += `flex items-center justify-center w-full text-white bg-${color}-500 hover:bg-${color}-600 focus:ring-4 focus:outline-none focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`;
    } else if (size === "medium") {
        buttonClass += `ml-4 bg-${color}-600 hover:bg-${color}-700 text-white ml-4 font-bold py-2 px-4 rounded text-m`;
    }
    return(
        <div>
            <button
                onClick={onClick}
                type="button"
                className={`${buttonClass}`}
            >
                {text}
            </button>
        </div>

    );
}*/