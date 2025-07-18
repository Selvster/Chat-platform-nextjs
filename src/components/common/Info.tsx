import InfoIcon from "../icons/Info"
export default function Info({ message }: { message: string }) {
    return (
        <div className="flex items-center justify-center p-4 bg-blue-100 border border-blue-300 rounded-xl shadow-md mx-auto max-w-lg text-blue-800">
            <InfoIcon />
            <span className="text-base font-medium">
                {message}
            </span>
        </div>
    )
}