import { UserCredentials, AuthApiResponse, UserRegisterCredentials } from '@/types';

import { AUTH_API_BASE_URL } from '@/libs/config';



export const authService = {

  async login(credentials: UserCredentials): Promise<AuthApiResponse> {
    try {
      const response = await fetch(`${AUTH_API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        cache: 'no-store',
      });

      if (!response.ok) {
        // Attempt to parse error message from API response, fallback to status text
        const errorData = await response.json().catch(() => ({ message: response.statusText }));
        throw new Error(errorData.message || `Login failed with status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('authService.login error:', error);
      throw error;
    }
  },

  async signup(credentials: UserRegisterCredentials): Promise<AuthApiResponse> {
    try {
      const response = await fetch(`${AUTH_API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
        cache: 'no-store',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: response.statusText }));
        throw new Error(errorData.message || `Signup failed with status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('authService.signup error:', error);
      throw error;
    }
  },
};
