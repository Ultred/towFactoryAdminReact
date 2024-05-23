import axios from "axios";
import useAuthStore from "../context/useAuthStore";
import { jwtDecode } from "jwt-decode";
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
  console.log(data);

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
    if (error.response?.data?.message === "jwt expired") {
      // Redirect to login page if JWT token expires
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

export const getAllDrivers = async () =>
  makeRequest("api/v1/drivers/all", "get");

export const getAllInsurances = async () =>
  makeRequest("api/v1/insurance/all", "get");

export const getPendingBookings = async () =>
  makeRequest("api/v1/bookings/filter-by-pending", "get");

export const putAssignDriverNotif = async ({ queryKey, formData }) => {
  makeRequest(`api/v1/bookings/${queryKey[1]}/assign-driver`, "put", formData);
};

export const getPendingBookingSolo = async ({ queryKey }) => {
  makeRequest(`api/v1/bookings/${queryKey[1]}/list`);
};
