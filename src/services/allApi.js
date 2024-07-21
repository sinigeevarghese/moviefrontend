import { commonApi } from "./commonUrl";
import { serverUrl } from "./serverUrl";

//api to get all Movies
export const getMovieApi = async () => {
  return await commonApi("GET", `${serverUrl}/Movies`, "");
};

//api to add new a Movie
export const addMovieApi = async (requestBody) => {
  return await commonApi("POST", `${serverUrl}/Movies`, requestBody);
};

//api to delete a Movie
export const deleteMovieApi = async (id) => {
  return await commonApi("DELETE", `${serverUrl}/Movies/${id}`, {});
};

//api to add new a Thetre
export const addTheatreApi = async (requestBody) => {
  return await commonApi("POST", `${serverUrl}/Theatre`, requestBody);
};

//api to get all Theatre
export const getTheatreApi = async () => {
  return await commonApi("GET", `${serverUrl}/Theatre`, "");
};

//api to delete a Theatre
export const deleteTheatreApi = async (id) => {
  return await commonApi("DELETE", `${serverUrl}/Theatre/${id}`, {});
};

//api to add new a schedule
export const addScheduleApi = async (requestBody) => {
  return await commonApi("POST", `${serverUrl}/Schedule`, requestBody);
};

//api to get all Schedule
export const getScheduleApi = async () => {
  return await commonApi("GET", `${serverUrl}/Schedule`, "");
};

//api to delete a Schedule
export const deleteScheduleApi = async (id) => {
  return await commonApi("DELETE", `${serverUrl}/Schedule/${id}`, {});
};

//api to get all users
export const getuserApi = async () => {
  return await commonApi("GET", `${serverUrl}/user`, "");
};

// api to book movie
export const bookMovieApi = async (id, body) => {
  return await commonApi("PUT", `${serverUrl}/Schedule/${id}`, body);
};
