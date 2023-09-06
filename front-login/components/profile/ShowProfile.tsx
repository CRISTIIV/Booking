"use client";
import axios from "axios";
import Link from "next/link";
import { FiBookmark, FiLogOut } from "react-icons/fi";
import { useUserInfo } from "@/hooks";
import { useRouter } from "next/navigation";
import { ExampleItem, InputBar, TextButton } from "@/components";
import { useAuthContext } from "@/context/AuthContext";
import { backUrlEditInfo, frontChangePassword, frontProfileHome } from "@/constants";
import { Booking, IUser } from "@/interfaces";


interface Props {
  profile: IUser;
  reservation: Booking[];
}

const ShowProfile: React.FC<Props> = ({ profile, reservation }) => {
  const router = useRouter();
  const { logout } = useAuthContext();
  const { name, last_name, email, city, setNameInfo, setEmailInfo, setCityInfo, setLastNameInfo } = useUserInfo();


  const UpdateProfile = async () => {
    console.log(profile);
    const response = await axios.patch(backUrlEditInfo!, {
      data: {
        profile: {
          name: name,
          last_name: last_name,
          email: email,
          City: city,
        }
      }

    });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <header className="flex items-center justify-between w-full py-6 px-20">
        <h1 className="text-6xl font-bold">
          <Link
            href={frontProfileHome}>
            Reservatix
          </Link>
        </h1>
        <nav className="flex items-center space-x-4">
          <button
            onClick={logout}
            className="text-2xl font-bold hover:text-blue-600">
            Cerrar sesión y volver al inicio
          </button>
          <FiLogOut className="w-6 h-6 mr-2" />
          <h1 className="text-2xl font-bold"> | </h1>
          <Link href="/reservations" className="text-2xl font-bold hover:text-blue-600">
            Administrar reservas
          </Link>
          <FiBookmark className="w-6 h-6 mr-2" />
        </nav>
      </header>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex space-x-4">
              <div>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Profile editing
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <InputBar
                    onChange={(e) => setNameInfo(e.target.value)}
                    text="First Name"
                    name="First Name"
                    example={profile?.name}
                  />
                  <InputBar
                    onChange={(e) => setLastNameInfo(e.target.value)}
                    text="Last Name"
                    name="Last Name"
                    example={profile?.last_name}
                  />
                  <InputBar
                    onChange={(e) => setEmailInfo(e.target.value)}
                    text="Email"
                    name="Email"
                    example={profile?.email}
                  />
                  <InputBar
                    onChange={(e) => setCityInfo(e.target.value)}
                    text="City"
                    name="City"
                    example={profile?.City}
                  />
                  <TextButton
                    onClick={UpdateProfile}
                    text={"Update Profile"}
                  />
                  <Link href={frontChangePassword} className="w-full text-white bg-primary-600 hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Change Password
                  </Link>
                </form>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Recent reservations</h2>
                {
                  reservation?.length !== 0 && (
                    <>
                      {
                        reservation?.map((reservation, index) => (
                          <ul className="mt-2 space-y-2">
                            <ExampleItem
                              text={reservation.space.name}
                              example="Details of Reservation 1"
                            />
                          </ul>
                        ))
                      }
                    </>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowProfile;
