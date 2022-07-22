import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { getAllTrackerApi } from "../api/tracker";

const TrackerContext = createContext();

export function TrackerContextProvider({ children }) {
  const [tracker, setTracker] = useState([]);

  const getAllTracker = async () => {
    try {
      const res = await getAllTrackerApi();
      setTracker(res.data.allTracker);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TrackerContext.Provider value={{ tracker, getAllTracker }}>
      {children}
    </TrackerContext.Provider>
  );
}

export const useTracker = () => {
  const ctx = useContext(TrackerContext);
  return ctx;
};
