import { createContext, Dispatch, useState } from "react";
import { Rental } from "../api/dataTypes"

export type PendingRentalsContextType = {
  pendingRentals: Rental[],
  handleSetPendingRentals: (rentals: Rental[]) => void,
}

export const PendingRentalsContext = createContext<PendingRentalsContextType | null>(null);

const PendingRentalsProvider = (props: { children: React.ReactNode }) => {
  const [pendingRentals, setPendingRentals] = useState<Rental[]>([]);

  const handleSetPendingRentals = (rentals: Rental[]) => {
    setPendingRentals(rentals);
  }

  const value = {
    pendingRentals,
    handleSetPendingRentals,
  }

  return (
    <PendingRentalsContext.Provider value={value}>
      {props.children}
    </PendingRentalsContext.Provider>
  )
}

export default PendingRentalsProvider;