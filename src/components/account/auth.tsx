import callApi from "@/lib/apis";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState, type FC, type PropsWithChildren } from "react";

const checkToken = async () => {
  const refreshToken = Cookies.get("refreshToken");
  if (!refreshToken) {
    return false;
  }
  const response = await callApi("/refresh", {
    method: "POST",
    body: refreshToken,
  });

  /**
   * Do something after receive result
   *
   * if (!response.isValidToken) {
   *  router.push("/Login");
   *  return false;
   * }
   *
   * return true;
   *
   */

  return false;
};

const Guard: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const token = Cookies.get("Token");
  const router = useRouter();
  const [isValid, setValid] = useState<boolean>(false);

  useEffect(() => {
    if (token) {
      checkToken().then((isTokenValid) => {
        setValid(isTokenValid);
      });
    }
  }, [token]);

  if (!isValid) {
    router.push("/Login");
  }

  return children;
};

export default Guard;
