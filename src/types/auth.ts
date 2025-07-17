
export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
    username: string;
    password: string;
}

export interface UserRegisterInput extends UserRegisterCredentials {
  confirmPassword: string;
}


export interface AuthApiResponse {
    token: string; 
}


export interface AuthActionResult {
  success: boolean;
  message?: string; 

}
