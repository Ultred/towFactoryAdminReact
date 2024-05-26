import axios from "axios";
import useAuthStore from "../context/useAuthStore";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const getUserId = () => {
  const token = useAuthStore.getState().token;
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;
  return userId;
};

const redirectToLogin = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
const axiosConfig = () => {
  const token = useAuthStore.getState().token || localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const makeRequest = async (url, method, data) => {
  console.log("test", data);

  try {
    const config = axiosConfig();
    if (data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    const response = await axios({
      url: `${BASE_URL}${url}`,
      method,
      data,
      ...config,
    });
    if (!response) {
      throw new Error(`${method} Error`);
    }

    return response.data;
  } catch (error) {
    if (
      error.response?.data?.message === "jwt expired" ||
      error.response?.data?.message === "jwt malformed"
    ) {
      toast.error("Session expired. Redirecting to login...");
      redirectToLogin();
    }
    const customError = error;
    throw new Error(customError.response?.data?.message || "An error occurred");
  }
};

export const postLogin = async (data) =>
  makeRequest("api/v1/admin-accounts/login", "post", data);

export const putChangePassword = async (data) =>
  makeRequest(`api/v1/accounts/${getUserId()}/change-password`, "put", data);

export const getAllBookingsPagination = async ({ queryKey }) => {
  const page = queryKey[1];
  const status = queryKey[2];
  const statusQuery = status && status !== "ALL" ? `&status=${status}` : "";

  return makeRequest(`api/v1/bookings/all?page=${page}${statusQuery}`, "get");
};

export const getOnlyTransitBookingsPagination = async ({ queryKey }) => {
  const page = queryKey[1];
  return makeRequest("api/v1/bookings/all?status=In Transit", "get");
};

export const getSoloBookingById = async ({ queryKey }) => {
  return makeRequest(`api/v1/bookings/${queryKey[1]}/list`, "get");
};

export const getPendingBookings = async () =>
  makeRequest("api/v1/bookings/filter-by-pending", "get");

export const putAssignDriverNotif = async ({ formData, mutationKey }) => {
  return makeRequest(
    `api/v1/bookings/${mutationKey[1]}/assign-driver`,
    "put",
    formData
  );
};

export const getPendingBookingSolo = async ({ queryKey }) =>
  makeRequest(`api/v1/bookings/${queryKey[1]}/list`);

//Insurance Crud
export const getAllInsurances = async () =>
  makeRequest("api/v1/insurance/all", "get");

export const postCreateInsurance = async (data) =>
  makeRequest("api/v1/insurance/create", "post", data);

export const putEditInsurance = async ({ formData, mutationKey }) =>
  makeRequest(`api/v1/insurance/${mutationKey[1]}/edit`, "put", formData);

export const deleteInsurance = async ({ mutationKey }) =>
  makeRequest(`api/v1/insurance/${mutationKey[1]}/delete`, "delete");

export const getSoloInsurancebyID = async ({ queryKey }) =>
  makeRequest(`api/v1/insurance/${queryKey[1]}/list`, "get");

//Driver

export const getAllDrivers = async () =>
  makeRequest("api/v1/drivers/all", "get");

export const getSoloDriverbyID = async ({ queryKey }) =>
  makeRequest(`api/v1/drivers/${queryKey[1]}/list`, "get");
