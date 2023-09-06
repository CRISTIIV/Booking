'use client';
import { ShowProfile } from '@/components';
import { backUrlProfile } from '@/constants';
import { Booking, IUser } from '@/interfaces';
import axios from 'axios'
import { useEffect, useState } from 'react';




const ProfilePage = () => {

  const [user, setUser] = useState<IUser>();
  const [reservations, setReservations] = useState<Booking[]>([]);
  useEffect(() => {
    const getProfile = async () => {
      const options = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };
      const response = await axios.get(backUrlProfile!, options);
      console.log(response.data)
      setUser(response.data);
      setReservations(response.data.reservation);
    }
    getProfile();
  }, []);

  //logout function
  return (
    <div>
      <ShowProfile profile={user!}
        reservation={reservations!}
      />
    </div>
  );
};

export default ProfilePage;
