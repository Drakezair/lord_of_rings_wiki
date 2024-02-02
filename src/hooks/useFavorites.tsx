/* eslint-disable react-hooks/exhaustive-deps */
import { ICharacter } from "@/types/api";
import { useEffect, useState } from "react";
type UseFavoritesProps = {
  character?: ICharacter;
};
export default function useFavorites({ character }: UseFavoritesProps) {
  const [isFav, setIsFav] = useState(false);
  const [state, setState] = useState<ICharacter[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("data");
    const rawData = data ? JSON.parse(data) : [];
    setState(rawData);
    if (
      character &&
      rawData.some(
        (item: ICharacter) => character && item._id === character._id
      )
    ) {
      setIsFav(true);
    }
  }, []);

  const addToFavorites = () => {
    const currentData = localStorage.getItem("data");
    const rawData = currentData ? JSON.parse(currentData) : [];
    rawData.push(character);
    localStorage.setItem("data", JSON.stringify(rawData));
    setIsFav(true);
  };

  const removeFromFavorites = () => {
    const currentData = localStorage.getItem("data");
    const rawData = currentData ? JSON.parse(currentData) : [];

    localStorage.setItem(
      "data",
      JSON.stringify(
        rawData.filter(
          (item: ICharacter) => character && item._id !== character._id
        )
      )
    );

    setIsFav(false);
  };

  return { isFav, addToFavorites, removeFromFavorites, state };
}

/* 
BloC Pattern / Hook Pattern

This is a custom hook that uses the BloC pattern.
The BloC pattern is a design pattern that separates the business logic from the UI.
In this example, the useFavorites hook is used to manage the state of the favorite characters.
The useFavorites hook has a state variable that stores the favorite characters.
In thiw way the component that uses the useFavorites hook can focus on rendering the UI, 
While the useFavorites hook handles the business logic of adding and removing characters from the favorites list.

================================================================================================

Factory Pattern

The useFavorites hook is an example of the Factory pattern.
The Factory pattern is a creational pattern that provides an interface for creating objects in a superclass,
but allows subclasses to alter the type of objects that will be created.
In this example, the useFavorites hook provides an interface for creating a favorites list, 
but allows the subclasses to alter the type of objects that will be created.
*/
