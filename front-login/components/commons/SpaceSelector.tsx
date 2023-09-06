
interface Props {
    selectedRoom: string | null;
    onClick: (room: string) => void;
    roomName: string;
    capacity: number;
}

export const SpaceSelector = ({ selectedRoom, onClick, roomName, capacity }: Props) => {
    const isSelected = selectedRoom === roomName;
    const backgroundColor = isSelected ? "bg-red-200" : "bg-gray-200";

    const handleClick = () => {
        onClick(roomName);
    };

    return (
        <div
            className={`flex-shrink-0 p-4 rounded ${backgroundColor}`}
            onClick={handleClick}
        >
            <strong style={{ color: 'black' }}>{roomName}</strong>
            <p style={{ color: 'black' }}>Capacidad: {capacity} personas</p>
        </div>
    );
}
