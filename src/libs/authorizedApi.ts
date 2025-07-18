"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_API_BASE_URL } from "@/libs/config";

interface ServerApiResponse<T> {
  status: string;
  message: string;
  data?: T;
  error?: any;
  results?: number;
}

export async function serverFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ServerApiResponse<T>> {
  const token = (await cookies()).get("auth_token")?.value;

  const headers = new Headers(options?.headers);
  headers.set("Content-Type", "application/json");

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  try {
    const response = await fetch(`${AUTH_API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
      cache: "no-store",
    });

    if (response.status === 401 || response.status === 403) {
      (await cookies()).delete("auth_token");
      redirect("/auth");
    }

    const responseData: ServerApiResponse<T> = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData.message || `API call failed with status ${response.status}`
      );
    }

    return responseData;
  } catch (error: any) {
    throw new Error(
      error.message || "Network error or unexpected API response."
    );
  }
}
