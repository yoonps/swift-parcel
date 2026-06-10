import { API }
from '../api/auth.api';

export const signupService =
  async (payload: any) => {

    const response =
      await API.post(
        '/auth/signup',
        payload
      );

    return response.data;
};

export const loginService =
  async (payload: any) => {

    const response =
      await API.post(
        '/auth/login',
        payload
      );

    return response.data;
};

export const verifyOTPService =
  async (payload: any) => {

    const response =
      await API.post(
        '/auth/verify-otp',
        payload
      );

    return response.data;
};