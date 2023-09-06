'use client'
import { DisplayMenu, SimpleSubmitButton, TextButton } from "@/components";
import { frontProfile } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";

const AdminReservationsPage = () => {

  const urlBookingModifier = process.env.NEXT_PUBLIC_URL_BOOKING_MODIFIER || '/modifier';
  const urlBookingCancel = process.env.NEXT_PUBLIC_URL_BOOKING_CANCEL || '/cancel';

  const servicios = [
    { value: '', label: 'Todos los servicios' },
    { value: 'tours', label: 'Tours' },
    { value: 'cine', label: 'Cine privado' },
    { value: 'eventos', label: 'Centros de eventos' },
  ];

  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleServiceChange = (event: any) => {
    setSelectedService(event.target.value);
    setSelectedTime("");
  };

  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };

  const handleConfirmReservation = () => {
    // Lógica para confirmar la reserva
    console.log("Reserva confirmada");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">Reservatix</h1>
        <nav className="flex items-center space-x-4">
          <Link href={frontProfile} className="text-2xl font-bold hover:text-blue-600">
            Volver al perfil
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
                  Administrar Reservas
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <DisplayMenu
                    options={servicios}
                    onChange={() => { }}
                    version='v1'
                  />
                  {selectedService && (
                    <div>
                      <label
                        htmlFor="time"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Horario Disponible
                      </label>
                      <select
                        name="time"
                        id="time"
                        value={selectedTime}
                        onChange={handleTimeChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="">Seleccionar horario</option>
                        {selectedService === "Servicio 1" && (
                          <>
                            <option value="09:00 AM">09:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                          </>
                        )}
                        {selectedService === "Servicio 2" && (
                          <>
                            <option value="13:00 PM">13:00 PM</option>
                            <option value="14:00 PM">14:00 PM</option>
                            <option value="15:00 PM">15:00 PM</option>
                          </>
                        )}
                        {selectedService === "Servicio 3" && (
                          <>
                            <option value="17:00 PM">17:00 PM</option>
                            <option value="18:00 PM">18:00 PM</option>
                            <option value="19:00 PM">19:00 PM</option>
                          </>
                        )}
                        {/* Agrega más opciones de horarios aquí */}
                      </select>
                    </div>
                  )}
                  <div className="flex space-x-4">
                    <Link href={urlBookingModifier}>
                      <SimpleSubmitButton
                        text="Modificar Reserva"
                        onClick={() => { }}
                      />
                    </Link>
                    <Link href={urlBookingCancel}>
                      <SimpleSubmitButton
                        text="Cancelar Reserva"
                        onClick={() => { }}
                        color="red"
                      />
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <TextButton
                      text="Confirmar Reserva"
                      onClick={handleConfirmReservation}
                    />
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

export default AdminReservationsPage;