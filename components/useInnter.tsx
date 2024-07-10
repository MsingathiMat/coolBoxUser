"use client";

import axios, { AxiosError, AxiosResponse } from "axios";

// Create a single Axios instance with a base URL
const InnterAxios = axios.create({
  baseURL: "https://api.codeddesign.org.za",
});

interface responseData {
  success: boolean;
  message: string;
}
export const useInnter = () => {
  // Function to handle POST requests (Create)
  type responseData<T> = T; // Define responseData as generic

  const create = async <T,>(
    endPoint: string,
    data: T,
    useFetch?: boolean
  ): Promise<responseData<T> | null> => {
    let results: responseData<T> | null = null;

    if (useFetch) {
      try {
        const response = await fetch(endPoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        results = (await response.json()) as responseData<T>;
      } catch (error) {
        results = null; // Handle error if necessary
      }
    } else {
      try {
        const response: AxiosResponse<responseData<T>> = await axios.post(
          endPoint,
          data
        );
        results = response.data;
      } catch (error: any) {
        results = error.response ? error.response.data : null;
      }
    }

    return results;
  };

  // Function to handle GET requests (Read)
  const read = async <T, P = Record<string, unknown>>(
    endPoint: string,
    params?: P,
    useFetch?: boolean
  ): Promise<T> => {
    let response: Response | { data: T };

    if (useFetch) {
      // Using fetch with optional parameters
      const queryString = new URLSearchParams(
        params as Record<string, string>
      ).toString(); // Convert params to query string
      response = await fetch(`${endPoint}?${queryString}`); // Await the fetch call
    } else {
      // Using InnterAxios to get the response
      const axiosResponse = await axios.get<{ data: T }>(endPoint, { params });
      response = { data: axiosResponse.data.data }; // Converting Axios response to a uniform structure
    }

    // Extract the final data from the response based on the chosen fetch method
    if (response instanceof Response) {
      const responseData = await response.json(); // Await and parse the JSON data
      return responseData.data as T; // Return the data expected from the response
    } else {
      return response.data as T; // Returning the data directly from Axios
    }
  };

  const upload = async <T,>(
    endPoint: string,
    formData: T,
    progressPercentage: React.Dispatch<React.SetStateAction<number>>
  ) => {
    return await InnterAxios.post(endPoint, formData, {
      onUploadProgress: (progressEvent) => {
        const total = progressEvent.total ?? 0; // Fallback to 0 if undefined
        const progress =
          total > 0 ? Math.round((progressEvent.loaded * 100) / total) : 0;
        progressPercentage(progress);
      },
    });
  };

  // Function to handle PUT requests (Update)
  const update = async <T,>(
    endPoint: string,
    data: T,
    useFetch?: boolean
  ): Promise<responseData<T> | null> => {
    let results: responseData<T> | null = null;

    if (useFetch) {
      try {
        const response = await fetch(endPoint, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        results = (await response.json()) as responseData<T>;
      } catch (error) {
        results = null; // Handle error if necessary
      }
    } else {
      try {
        const response: AxiosResponse<responseData<T>> = await axios.put(
          endPoint,
          data
        );
        results = response.data;
      } catch (error: any) {
        results = error.response ? error.response.data : null;
      }
    }

    return results;
  };

  const remove = async <T, P>(
    endPoint: string,
    data?: T,
    useFetch?: boolean
  ): Promise<responseData<P> | null> => {
    let results: responseData<P> | null = null;

    if (useFetch) {
      try {
        const response = await fetch(endPoint, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        results = (await response.json()) as responseData<P>;
      } catch (error) {
        results = null; // Handle error if necessary
      }
    } else {
      try {
        const response: AxiosResponse<responseData<P>> = await axios.delete(
          endPoint,
          { data }
        );
        results = response.data;
      } catch (error: any) {
        results = error.response ? error.response.data : null;
      }
    }

    return results;
  };

  // CRUD object for convenience
  const CRUD = {
    create,
    read,
    upload,
    update,
    remove,
  };

  // Return individual functions and the CRUD object for flexibility
  return {
    create,
    read,
    update,
    remove,
    CRUD,
  };
};
