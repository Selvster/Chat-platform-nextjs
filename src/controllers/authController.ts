import { authService } from "@/services/authService";
import { UserCredentials, AuthActionResult, UserRegisterInput } from "@/types";
import { cookies } from "next/headers";

export const authController = {
  async processLogin(credentials: UserCredentials): Promise<AuthActionResult> {
    if (!credentials.email || !credentials.password) {
      return { success: false, message: "Email and password are required." };
    }

    try {
      const authData = await authService.login(credentials);
      (await cookies()).set("auth_token", authData.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
        sameSite: "lax",
      });
      (await cookies()).set("user_id", authData.user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
        sameSite: "lax",
      });

      return { success: true };
    } catch (error: any) {
      console.error("authController.processLogin error:", error);
      return {
        success: false,
        message: error.message || "An unexpected error occurred during login.",
      };
    }
  },

  async processSignup(
    credentials: UserRegisterInput
  ): Promise<AuthActionResult> {
    if (
      !credentials.email ||
      !credentials.password ||
      !credentials.username ||
      credentials.password !== credentials.confirmPassword
    ) {
      return {
        success: false,
        message:
          "Email, password, username, and matching passwords are required.",
      };
    }

    try {
      const authData = await authService.signup({
        email: credentials.email,
        password: credentials.password,
        username: credentials.username,
      });

      (await cookies()).set("auth_token", authData.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
        sameSite: "lax",
      });

      (await cookies()).set("user_id", authData.user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
        sameSite: "lax",
      });
      return { success: true };
    } catch (error: any) {
      console.error("authController.processSignup error:", error);
      return {
        success: false,
        message: error.message || "An unexpected error occurred during signup.",
      };
    }
  },

  async logout(): Promise<void> {
    (await cookies()).delete("auth_token");
  },

  async isAuthenticated(): Promise<string | null> {
    const authToken = (await cookies()).get("auth_token")?.value;
    if (!authToken) {
      return null;
    }
    return authToken;
  },
};
