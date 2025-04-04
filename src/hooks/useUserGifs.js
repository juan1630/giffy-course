import { useContext, useCallback, useState } from "react";
import { UserContext } from "../context/UserContext";
import loginService from "../helpers/login";
import { favsService } from "../helpers/favsService"

export const useUserGifs = () => {
  const [state, setState] = useState({
    error: false,
    isLoading: false,
  });
  const { jwt, setJwt, favs, setFavs } = useContext(UserContext);

  const login = useCallback(
    ({ email, password }) => {
      setState((prev) => ({
        ...prev,
        isLoading: !state.isLoading,
      }));
      loginService(email, password)
        .then((jwt) => {
          sessionStorage.setItem("jwt", jwt);
          setJwt(jwt);
          setState((prev) => ({
            ...prev,
            isLoading: !state.isLoading,
          }));
        })
        .catch((error) => {
          setState((prev) => ({
            ...prev,
            error: true,
          }));
          sessionStorage.removeItem("jwt");
          console.log(error);
        });
    },
    [setJwt]
  );

  const addFavs = useCallback(({ id }) => {
    favsService(id, jwt)
    .then((favs) => setFavs(favs))
    .catch( error => console.log(error))
  }, [jwt, setFavs]);

  const logout = useCallback(() => {
    setJwt(null);
    sessionStorage.removeItem("jwt");
  });

  return {
    isLogged: Boolean(jwt),
    login,
    addFavs,
    favs,
    logout,
    isLoading: state.isLoading,
    hasError: state.error,
  };
};
