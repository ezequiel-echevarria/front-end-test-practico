import { useEffect, useState } from "react";
import Service from "../services/ItemServices";

const useItems = (queryValue) => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  const [errorMessage, setErrorMessage] = useState({
    title: "",
    text: "",
    show: false,
  });

  useEffect(() => {
    if (queryValue && queryValue !== "")
      Service.GetByFilter(queryValue)
        .then((data) => {
          setItems(data.items);
          setCategories(data.categories);
        })
        .catch(() => {
          setErrorMessage({
            title: "Error",
            text: "Se ha producido un error inesperado",
            show: true,
          });
        });
  }, [queryValue]);

  return { categories, items, errorMessage };
};

export default useItems;
