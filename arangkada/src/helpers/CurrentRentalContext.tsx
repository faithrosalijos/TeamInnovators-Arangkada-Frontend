import { createContext, Dispatch, useState } from "react";
import { Rental } from "../api/dataTypes"

export type CurrentRentalContextType = {
  currentRental: Rental,
  handleSetCurrentRental: (rental: Rental) => void,
}

export const CurrentRentalContext = createContext<CurrentRentalContextType | null>(null);

const CurrentRentalProvider = (props: { children: React.ReactNode }) => {
  const [currentRental, setCurrentRental] = useState<Rental>({} as Rental);

  const handleSetCurrentRental = (rental: Rental) => {
    setCurrentRental(rental);
  }

  const value = {
    currentRental,
    handleSetCurrentRental,
  }

  return (
    <CurrentRentalContext.Provider value={value}>
      {props.children}
    </CurrentRentalContext.Provider>
  )
}

export default CurrentRentalProvider;