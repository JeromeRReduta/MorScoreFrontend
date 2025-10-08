/** Taken from https://github.com/FullstackAcademy/fitness-trackr-pro/blob/main/src/api/ApiContext.jsx */

import { createContext, useContext, useEffect, useState } from "react";
import ApiResponse from "../../entities/ApiResponse";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [tags, setTags] = useState({});

  const useQuery = (apiResponseCreatorAsync, tagToAdd) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const query = async () => {
      setLoading(true);
      const response = await apiResponseCreatorAsync();
      setResponse(response);
      setLoading(false);
    };
    useEffect(() => {
      if (tagToAdd) {
        setTags({ ...tags, [tagToAdd]: query });
      }
      query();
    }, []); // TODo: see if debugging this still lets it work
    return { loading, response };
  };

  const useMutation = (apiResponseCreatorAsync, tagsToInvalidate) => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const mutate = async () => {
      setLoading(true);
      const response = await apiResponseCreatorAsync();
      setResponse(response);
      setLoading(false);
      if (response.success) {
        tagsToInvalidate.forEach((tag) => tags[tag]?.());
      }
    };
    return { mutate, loading, response };
  };

  const value = { useQuery, useMutation };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export default function useApi() {
  const context = useContext(ApiContext);
  if (!context) {
    throw Error("useApi needs TagProvider!");
  }
  return context;
}
