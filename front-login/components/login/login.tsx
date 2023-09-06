'use client';
import React from 'react'
import { FillButton, InputBar, TextButton, TextLink } from "@/components";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useUserInfo } from '@/hooks';
import {urlMain,backUrlAuthLogin,backUrlAuthGoogleLogin,urlRegister,urlResetPassword,frontRegister} from '@/constants';
import { useAuthContext } from '@/context/AuthContext';

const Login: React.FC = () => {
    const router = useRouter();
    const {email, password, setEmailInfo, setPasswordInfo} = useUserInfo();
    const {login} = useAuthContext();    

    const handleLogin = async () => {
        console.log(email, password)
        const response = await axios.post(backUrlAuthLogin, {
            email: email,
            password: password
        }); 
        login(response.data.token);
        console.log(localStorage.getItem('token'));
        router.push('/profile/home');
    }

    const handleGoogleLogin = () => {
        console.log('google login')
        const url = backUrlAuthGoogleLogin;
        
      }
      return (
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <Link href={urlMain} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Reservatix
            </Link>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <InputBar
                      onChange={(e) => setEmailInfo(e.target.value)}
                      text="Email address"
                      name="email"
                      example="name@company.com"
                    />
                  </div>
                  <div>
                    <InputBar
                        onChange={(e) => setPasswordInfo(e.target.value)}
                        text="Password"
                        name="password"
                        example="**********"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <TextButton 
                      text="Forgot password?"
                      onClick={() => router.push(urlResetPassword)}
                    />
                  </div>
                  <FillButton 
                      text="Sign in"
                      onClick={handleLogin}
                  />
                  {/* <div className="mt-4">
                  <FillButton 
                      text="Sign in with Google"
                      onClick={handleGoogleLogin}
                  />
                  </div> */}
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <TextLink 
                      text="Sign up"
                      onClick={() => router.push(urlRegister)}
                    />
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Login;