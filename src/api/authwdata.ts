import Cookies from 'js-cookie';

export async function fetchWithToken(url:string, options: RequestInit) {
    const token = Cookies.get("Token"); // Replace with your actual function to retrieve the token from cookies or wherever it's stored
  
    // If the token is missing or invalid, redirect to the login page
    if (!token || token === 'invalid') {
      return { token: 'invalid' };
    }
  
    // Add the token to the request headers
    options.headers = {
      ...options.headers,
      Authorization: token,
    };

    try {
      // console.log("options:",options)
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
        
      }
      
      return response.json();
    } catch (error) {
      console.error('Request failed:', error);
      throw error
    }
  }