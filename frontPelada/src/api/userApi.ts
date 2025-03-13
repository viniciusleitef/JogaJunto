import axiosInstance from './axiosInstance';
import { GoogleLogin } from '../types';

export const loginGoogleUser = async (credential: GoogleLogin) => {
  try {
    console.log(credential);
    const response = await axiosInstance.post('/auth/googleLogin', credential);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};