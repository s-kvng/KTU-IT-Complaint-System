import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //   fetch post function
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      Alert.alert("Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, refetch, isLoading };
};

export default useAppwrite;
