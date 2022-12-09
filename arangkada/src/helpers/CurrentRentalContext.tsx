import { createContext, Dispatch, useState } from "react";
import { Rental } from "../api/dataTypes"

export type CurrentRentalContextType = {
  currentRental: Rental,
  setCurrentRental: Dispatch<React.SetStateAction<Rental>>,
}

export const CurrentRentalContext = createContext<CurrentRentalContextType | null>(null);

const CurrentRentalProvider = (props: { children: React.ReactNode }) => {
  const [currentRental, setCurrentRental] = useState<Rental>({} as Rental);

  const value = {
    currentRental,
    setCurrentRental,
  }

  return (
    <CurrentRentalContext.Provider value={value}>
      {props.children}
    </CurrentRentalContext.Provider>
  )
}

export default CurrentRentalProvider;