import Cookies from "js-cookie";

const API_SERVER = "http://localhost:8080";

export default async function callApi(url: `/${string}`, options: RequestInit) {
  try {
    const token = Cookies.get("Token");

    if (token) {
      options = {
        ...options,
        headers: {
          ...options.headers,
          Authorization: token,
        },
      };
    }

    const response = await fetch(API_SERVER.concat(url), options);

    if (!response.ok) {
      throw Error("Network response was not ok");
    }

    return response.json();
  } catch (error) {
    console.error("Request failed:", error);
    throw Error((error as Error).message);
  }
}
