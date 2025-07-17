
import LoadingSpinner from "../icons/LoadingSpinner";

interface SubmitButtonProps {
    isLoading: boolean;
    buttonText: string;
    loadingText: string;
}

export default function SubmitButton({
    isLoading,
    buttonText,
    loadingText,
}: SubmitButtonProps) {
    return (
        <button
            type="submit"
            disabled={isLoading} 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center"
        >
            {isLoading ? (
                <>
                    <LoadingSpinner /> 
                    {loadingText} 
                </>
            ) : (
                buttonText
            )}
        </button>
    );
}