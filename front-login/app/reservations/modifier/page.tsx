'use client'
import { CalendarSelector, DisplayMenu, TextButton } from "@/components";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";

const ReservationModificationPage = () => {
  const [reservas, setReservas] = useState([
    { id: 1, nombre: "Reserva 1" },
    { id: 2, nombre: "Reserva 2" },
    { id: 3, nombre: "Reserva 3" },
  ]);
  const [selectedReserva, setSelectedReserva] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleReservaSelect = () => {
    //setSelectedReserva();
  };

  const handleReservaDelete = () => {
    // Aquí puedes agregar la lógica para eliminar la reserva seleccionada
    // Puedes utilizar el estado "selectedReserva" para obtener el ID de la reserva a eliminar
    console.log("Reserva eliminada:", selectedReserva);
  };

  const handleFormSubmit = () => {
    //event.preventDefault();
    // Aquí puedes agregar la lógica para modificar la reserva
    console.log("Reserva modificada");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">Reservatix</h1>
        <nav className="flex items-center space-x-4">
          <Link
            href="/reservations"
            className="text-2xl font-bold hover:text-blue-600"
          >
            Volver al administrador de reservas
          </Link>
          <FiArrowLeftCircle className="w-6 h-6 mr-2" />
        </nav>
      </header>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex space-x-4">
              <div>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Modificar Reserva
                </h1>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="reserva"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Seleccionar Reserva
                    </label>
                    <DisplayMenu
                      options={reservas}
                      onChange={() => {}}
                      version="v2"
                    />
                    {selectedReserva && (
                      <button
                        className="mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        onClick={handleReservaDelete}
                      >
                        Eliminar Reserva
                      </button>
                    )}
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div>
                      <CalendarSelector
                        selectedDate={selectedDate}
                        onChange={handleDateChange}
                        formatVersion="v2"
                      />
                      <TextButton
                        text = "Confirmar modificación"
                        onClick = {handleFormSubmit}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationModificationPage;

/**import { FiArrowLeftCircle } from "react-icons/fi";

const ReservationModificationPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">Reservatix</h1>
        <nav className="flex items-center space-x-4">
        <a href="/reservations" className="text-2xl font-bold hover:text-blue-600">
            Volver al administrador de reservas
          </a>
          <FiArrowLeftCircle className="w-6 h-6 mr-2" />
        </nav>
      </header>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex space-x-4">
              <div>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Modificar Reserva
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nombre reservante
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Fecha y Hora
                    </label>
                    <input
                      type="datetime-local"
                      name="date"
                      id="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Modificar Reserva
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationModificationPage;*/