import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    // Effect ne moze da bude async sam po sebi
    fetch(url) // zato dodajemo then, a ne async/await
      .then((x) => x.text()) // mozemo da napravimo async funkciju unutar useEffect
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url, setState]);

  return state;
};
