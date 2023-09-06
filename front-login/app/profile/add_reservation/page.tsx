'use client'
import Link from 'next/link';
import { useState } from 'react';
import { CalendarSelector, SimpleSubmitButton, SpaceSelector } from '@/components';

export default function Add_Reservation() {
  const servicios = [
    { value: 'biblioteca', label: 'Biblioteca' },
    { value: 'otro-servicio', label: 'Otro servicio' },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null); // Nuevo estado para almacenar la sala seleccionada

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleRoomSelection = (room: any) => {
    setSelectedRoom(room);
  };

  const handleReservationConfirmation = () => {
    // Acá falta que agreguemos la lógica para confirmar la reserva
    console.log('Reserva confirmada');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <title>Reservando...</title>
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">Reservando...</h1>
        <nav className="flex items-center space-x-4">
          <Link legacyBehavior href="/">
            <a className="text-2xl font-bold hover:text-blue-600">Volver al Home</a>
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex space-x-4 mb-4">
          <div>
            <strong>Servicio:</strong> BIBLIOTECA
          </div>
          <CalendarSelector
          selectedDate={selectedDate}
          onChange={handleDateChange}
          />
        </div>

        <div className="flex space-x-4 overflow-x-auto whitespace-nowrap">
          <SpaceSelector
            selectedRoom={selectedRoom}
            onClick={handleRoomSelection}
            roomName="Sala 1"
            capacity={4}
          />
          <SpaceSelector
            selectedRoom={selectedRoom}
            onClick={handleRoomSelection}
            roomName="Sala 2"
            capacity={4}
          />
          <SpaceSelector
            selectedRoom={selectedRoom}
            onClick={handleRoomSelection}
            roomName="Sala 3"
            capacity={4}
          />
          <SpaceSelector
            selectedRoom={selectedRoom}
            onClick={handleRoomSelection}
            roomName="Sala 4"
            capacity={6}
          />
          <SpaceSelector
            selectedRoom={selectedRoom}
            onClick={handleRoomSelection}
            roomName="Sala 5"
            capacity={6}
          />
          <SpaceSelector
            selectedRoom={selectedRoom}
            onClick={handleRoomSelection}
            roomName="Sala 6"
            capacity={6}
          />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <SimpleSubmitButton 
          text="Confirmar Reserva"
          onClick={handleReservationConfirmation}
          size = "large"
        />
      </footer>
    </div>
  );
}
/**
import Link from 'next/link';

export default function Add_Reservation() {
  const servicios = [
    { value: 'biblioteca', label: 'Biblioteca' },
    { value: 'otro-servicio', label: 'Otro servicio' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <title>Reservando...</title>
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">Reservando...</h1>
        <nav className="flex items-center space-x-4">
          <Link legacyBehavior href="/">
            <a className="text-2xl font-bold hover:text-blue-600">Volver al Home</a>
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex space-x-4 mb-4">
          <div>
            <strong>Servicio:</strong> BIBLIOTECA
          </div>
          <div>
            <strong>Fecha:</strong>
            <select className="ml-2 w-24 h-10 px-2 py-1 rounded-md border border-gray-300 text-black focus:outline-none focus:border-blue-600">
              <option value="">27/06/2023</option>
              <option value="">28/06/2023</option>
              <option value="">29/06/2023</option>
            </select>
          </div>
          <div>
            <strong>Horario:</strong>
            <select className="ml-2 w-32 h-10 px-2 py-1 rounded-md border border-gray-300 text-black focus:outline-none focus:border-blue-600">
              <option value="">17:00-18:00</option>
              <option value="">18:00-19:00</option>
              <option value="">19:00-20:00</option>
            </select>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="bg-gray-200 p-4 rounded">
            <strong>Sala 1</strong>
            <p>Capacidad: 4 personas</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <strong>Sala 2</strong>
            <p>Capacidad: 4 personas</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <strong>Sala 3</strong>
            <p>Capacidad: 4 personas</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <strong>Sala 4</strong>
            <p>Capacidad: 6 personas</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <strong>Sala 5</strong>
            <p>Capacidad: 6 personas</p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <strong>Sala 6</strong>
            <p>Capacidad: 6 personas</p>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
      </footer>
    </div>
  );
}
*/