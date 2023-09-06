'use client'
import Link from "next/link";
import { useState } from "react";
import { CalendarSelector, CenterImage, DisplayMenu, SimpleSubmitButton } from "@/components";
import CreateReservation from "./reservations/create/page";

export default function Home() {
  const urlLogin = process.env.NEXT_PUBLIC_URL_LOGIN || "/login";
  const urlRegister = process.env.NEXT_PUBLIC_URL_REGISTER || "/register";

  const servicios = [
    { value: "", label: "Todos los servicios" },
    { value: "tours", label: "Tours" },
    { value: "cine", label: "Cine privado" },
    { value: "eventos", label: "Centros de eventos" },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [showCreateReservation, setShowCreateReservation] = useState(false);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSearch = () => {
    setShowCreateReservation(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <title>Reservatix</title>
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">Reservatix</h1>
        <nav className="flex items-center space-x-4">
          <Link href={urlLogin} className="text-2xl font-bold hover:text-blue-600">
            Iniciar sesión
          </Link>
          {/* <FiLogIn className="w-6 h-6 mr-2" /> */}
          <h1 className="text-2xl font-bold"> | </h1>
          <Link href={urlRegister} className="text-2xl font-bold hover:text-blue-600">
            Registrar
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <CenterImage src="/tour.svg" width={450} height={37} />
          <CenterImage src="/cine.svg" width={450} height={37} />
          <CenterImage src="/matri.svg" width={450} height={37} />
        </div>
      </main>

      <div className="flex items-center justify-center w-full py-4 px-20">
        {/*<DisplayMenu
          options={servicios}
          onChange={() => {}}
          version="v3"
          />*/}
        <CalendarSelector
          selectedDate={selectedDate}
          onChange={handleDateChange}
          formatVersion="v1"
        />
        <SimpleSubmitButton text="Buscar" onClick={handleSearch} />
      </div>

      {showCreateReservation && (
        <CreateReservation selectedDate={selectedDate} />
      )}

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}