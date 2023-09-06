"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DisplayMenu, SimpleSubmitButton, TextButton } from "@/components";
import { frontProfile } from "@/constants";
import Link from "next/link";
import { FiArrowLeftCircle } from "react-icons/fi";

const CreateReservation = ({ selectedDate, handleBack, handleConfirmReservation }: any) => {
  const router = useRouter();

  const servicios = [
    { value: "", label: "Todos los servicios" },
    { value: "tours", label: "Tours" },
    { value: "cine", label: "Cine privado" },
    { value: "eventos", label: "Centros de eventos" },
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

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">Reservatix</h1>
        <nav className="flex items-center space-x-4">
          <TextButton 
            text="Volver al perfil"
            onClick={handleBack}
          />
          <FiArrowLeftCircle className="w-6 h-6 mr-2" />
        </nav>
      </header>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex space-x-4">
              <div className="flex justify-center">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Administrar Reservas
                </h1>
                <div className="flex justify-center">
                  <form className="space-y-4 md:space-y-6" action="#">
                    <DisplayMenu
                      options={servicios}
                      onChange={handleServiceChange}
                      version="v1"
                    />
                    <SimpleSubmitButton
                      text="Confirmar reserva"
                      onClick={handleConfirmReservation}
                    />
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

export default CreateReservation;

/**
"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DisplayMenu, SimpleSubmitButton, TextButton } from "@/components";
import { frontProfile } from "@/constants";
import Link from "next/link";
import { FiArrowLeftCircle } from "react-icons/fi";

const CreateReservation = ({ selectedDate }: any) => {
  const router = useRouter();

  const urlBookingModifier = process.env.NEXT_PUBLIC_URL_BOOKING_MODIFIER || "/modifier";
  const urlBookingCancel = process.env.NEXT_PUBLIC_URL_BOOKING_CANCEL || "/cancel";

  const servicios = [
    { value: "", label: "Todos los servicios" },
    { value: "tours", label: "Tours" },
    { value: "cine", label: "Cine privado" },
    { value: "eventos", label: "Centros de eventos" },
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
    if (selectedService && selectedTime) {
      const reservationData = {
        service: selectedService,
        time: selectedTime,
        date: selectedDate,
      };

      fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Reserva confirmada:", data);
          router.push(frontProfile);
        })
        .catch((error) => {
          console.error("Error al confirmar la reserva:", error);
        });
    }
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
              <div className="flex justify-center">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Administrar Reservas
                </h1>
                <div className="flex justify-center">
                  <form className="space-y-4 md:space-y-6" action="#">
                    <DisplayMenu
                      options={servicios}
                      onChange={handleServiceChange}
                      version="v1"
                    />
                    <SimpleSubmitButton
                      text="Confirmar reserva"
                      onClick={handleConfirmReservation}
                      disabled={!selectedService || !selectedTime}
                    />
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

export default CreateReservation;
*/