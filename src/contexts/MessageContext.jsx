import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export function MessageContextProvider({ children }) {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <MessageContext.Provider
      value={{ success, setSuccess, error, setError, loading, setLoading }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export const useMessage = () => {
  const ctx = useContext(MessageContext);
  return ctx;
};

export default MessageContext;
