'use client'
import { CalendarSelector, CenterImage, SimpleSubmitButton } from '@/components';
import { frontProfile } from '@/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CreateReservation from "../../reservations/create/page";

export default function Home() {
  const urlProfile = frontProfile;
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCreateReservation, setShowCreateReservation] = useState(false);
  const router = useRouter();

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSearch = () => {
    setShowCreateReservation(true);
  };

  const handleBack = () => {
    setShowCreateReservation(false);
    setSelectedDate(null);
  };

  const handleConfirmReservation = () => {
    router.push({
      pathname: '/reservations/create',
      query: { date: selectedDate },
    });
  };

  if (showCreateReservation) {
    return (
      <CreateReservation
        selectedDate={selectedDate}
        handleBack={handleBack}
        handleConfirmReservation={handleConfirmReservation}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <title>Reservatix</title>
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">Reservatix</h1>
        <nav className="flex items-center space-x-4">
          <Link legacyBehavior href={urlProfile}>
            <a className="text-2xl font-bold hover:text-blue-600">Perfil</a>
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
        <CalendarSelector
          selectedDate={selectedDate}
          onChange={handleDateChange}
          formatVersion='v1'
        />
        <SimpleSubmitButton text="Buscar" onClick={handleSearch} />
      </div>

      <footer className="flex items-center justify-center w-full h-24 border-t">
      </footer>
    </div>
  );
}

/**
'use client'
import { CalendarSelector, CenterImage, DisplayMenu, SimpleSubmitButton } from '@/components';
import { frontProfile, frontReservationCreate } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';
import CreateReservation from "../../reservations/create/page";
import { useRouter } from 'next/navigation';

export default function Home() {
  const urlProfile = frontProfile;
  const servicios = [
    { value: '', label: 'Todos los servicios' },
    { value: 'tours', label: 'Tours' },
    { value: 'cine', label: 'Cine privado' },
    { value: 'eventos', label: 'Centros de eventos' },
  ];

  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState(null);
  const [showCreateReservation, setShowCreateReservation] = useState(false);


  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSearch = () => {
    setShowCreateReservation(true);
    if (showCreateReservation) {
      router.push(frontReservationCreate);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <title>Reservatix</title>
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">Reservatix</h1>
        <nav className="flex items-center space-x-4">
          <Link legacyBehavior href={urlProfile}>
            <a className="text-2xl font-bold hover:text-blue-600">Perfil</a>
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
        <CalendarSelector
          selectedDate={selectedDate}
          onChange={handleDateChange}
          formatVersion='v1'
        />
        <SimpleSubmitButton text="Buscar" onClick={handleSearch} />
      </div>

      {showCreateReservation && (
        <CreateReservation selectedDate={selectedDate} />
      )}

      <footer className="flex items-center justify-center w-full h-24 border-t">
      </footer>
    </div>
  );
}
*/
