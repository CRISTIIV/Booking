'use client'
import { SelectorButton } from "@/components";
import Link from "next/link";
import { FiArrowLeftCircle } from "react-icons/fi";

const ReservationCancellationPage = () => {
  // Datos de ejemplo de las reservas del usuario
  const reservations = [
    {
      id: 1,
      serviceName: "Servicio A",
      date: "2023-06-10 14:00",
    },
    {
      id: 2,
      serviceName: "Servicio B",
      date: "2023-06-12 10:30",
    },
    {
      id: 3,
      serviceName: "Servicio C",
      date: "2023-06-15 16:45",
    },
  ];

  // Función para cancelar una reserva
  const cancelReservation = () => {
    // Lógica para cancelar la reserva con el ID proporcionado
    console.log("Reserva cancelada: ", "reservationId");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">Reservatix</h1>
        <nav className="flex items-center space-x-4">
          <Link href="/reservations" className="text-2xl font-bold hover:text-blue-600">
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
                  Cancelar Reserva
                </h1>
                <SelectorButton
                  items={reservations}
                  itemSelected={cancelReservation}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCancellationPage;