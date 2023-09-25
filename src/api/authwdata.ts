import { useRouter,usePathname  } from "next/navigation";
import Cookies from 'js-cookie';
import router from "next/router";

export async function fetchWithToken(url:string, options: RequestInit) {
    const token = Cookies.get("Token"); // Replace with your actual function to retrieve the token from cookies or wherever it's stored
    console.log(token)
  
    // If the token is missing or invalid, redirect to the login page
    if (!token || token === 'invalid') {
      const router = useRouter()
      router.push('/login');
      return {token:"invalid"};
    }
  
    // Add the token to the request headers
    options.headers = {
      ...options.headers,
      Authorization: token,
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
        
      }
      return response.json();
    } catch (error) {
      console.error('Request failed:', error);
      throw error;
    }
  }