'use client'

import { useRouter } from 'next/navigation';
import type { FC, FormEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast'
import Image from "next/image";

import Button from "@/components/Atom/Button/Button";
import Inputtext from "@/components/Atom/Inputs/InputText"
import Cookies from 'js-cookie';
import { Router } from 'lucide-react';


const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const r=useRouter()
  const [formData, setFormData] = useState({
    username: '', // Change 'username' to match your API's expected field name
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    e.stopPropagation();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const form = new FormData(e.target as HTMLFormElement);
    const payload = Object.fromEntries(form)
    console.log('payload: ', payload);
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json()
        console.log(data)
        Cookies.set("Token",data.Token)
        Cookies.set("refreshtoken",data.refreshtoken)
        r.push('/')
      } else {
        // Handle login failure (e.g., show an error message)
        throw new Error('Login failed');
        
      }
      
    } catch (error) {
      setError("wrong password")
      console.error("errorrrrrrrrrr: ", error);
      // Display an error message to the user
      toast.error('Something went wrong with your login.');
      return
    } finally {
      setIsLoading(false);
    }
    
    
  }

  return (
    <>
      <div className='flex h-screen min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full flex flex-col items-center max-w-md space-y-8'>
          <div className='flex flex-col items-center gap-8'>
            <Image src="/Image/logo.png" alt="Logo" width={70} height={70}></Image>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <form className="w-3/5 rounded-md font-medium lg:leading-8 sm:leading-3	" method='POST' onSubmit={handleSubmit}>
            <div className="mb-4">
             {error && <div className="text-red-600">{error}</div>}
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <Inputtext
              variant={"default"}
              placeholder="email"
              name='username'
              // onChange={handleChange}
              ></Inputtext>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <Inputtext
              variant={"default"}
              placeholder="password"
              type="password"
              name='password'
              // onChange={handleChange()}
              ></Inputtext>
            </div>
            <Button
              isLoading={isLoading}
              type='submit'
            >

              {isLoading ? (
                <h1>Loading</h1>
              ) : (
                <h1>Sign in</h1>
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Page;
