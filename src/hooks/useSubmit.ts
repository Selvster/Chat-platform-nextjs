import { useCallback, useState } from "react";

type SubmitFunction = (formData: FormData) => Promise<{ message?: string }>;

export function useSubmit(onSubmit: SubmitFunction, onSuccess?: () => void) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(null);
      setIsLoading(true);

      const formData = new FormData(event.currentTarget);

      try {
        const result = await onSubmit(formData);

        if (result?.message) {
          setError(result.message);
        } else {
          setError(null);
          onSuccess?.();
        }
      } catch (err) {
        if (err instanceof Error && err.message === "NEXT_REDIRECT") {
          return;
        }
        setError("An unknown error occurred. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [onSubmit, onSuccess]
  );

  return { handleSubmit, isLoading, error };
}
