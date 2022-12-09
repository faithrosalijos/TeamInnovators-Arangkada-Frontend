import { createContext, Dispatch, useState } from "react";
import { Rental } from "../api/dataTypes"

export type PendingRentalsContextType = {
  pendingRentals: Rental[],
  setPendingRentals: Dispatch<React.SetStateAction<Rental[]>>,
}

export const PendingRentalsContext = createContext<PendingRentalsContextType | null>(null);

const PendingRentalsProvider = (props: { children: React.ReactNode }) => {
  const [pendingRentals, setPendingRentals] = useState<Rental[]>([]);

  const value = {
    pendingRentals,
    setPendingRentals,
  }

  return (
    <PendingRentalsContext.Provider value={value}>
      {props.children}
    </PendingRentalsContext.Provider>
  )
}

export default PendingRentalsProvider;