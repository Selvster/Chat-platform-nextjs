"use server";

import { authController } from "@/controllers/authController";
import { redirect } from "next/navigation";
import { AuthActionResult } from "@/types";

export async function authenticateUser(
  formData: FormData
): Promise<AuthActionResult> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  let valid = false;
  try {
    const result = await authController.processLogin({ email, password });

    if (!result.success) {
      return {
        success: false,
        message:
          result.message ||
          "Authentication failed. Please check your credentials.",
      };
    }
    valid = true;
  } catch (error: any) {
    return {
      success: false,
      message: "An unexpected error occurred during authentication.",
    };
  }
  if (valid) {
    redirect("/rooms");
  }
  return { success: false, message: "Authentication failed." };
}

export async function signupUser(
  formData: FormData
): Promise<AuthActionResult> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const username = formData.get("username") as string;
  let valid = false;
  try {
    const result = await authController.processSignup({
      email,
      password,
      confirmPassword,
      username,
    });

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Signup failed. Please try again.",
      };
    }
    valid = true;
  } catch (error: any) {
    return {
      success: false,
      message: "An unexpected error occurred during signup.",
    };
  }
  if (valid) {
    redirect("/rooms");
  }
  return { success: false, message: "Signup failed." };
}

export async function logoutUser(): Promise<void> {
  await authController.logout();
  redirect("/auth");
}
