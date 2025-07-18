export default function Success({message} : {message: string}) {
    return (
        <div className={`px-4 py-3 rounded-lg relative mb-4 bg-green-100 border-green-400 text-green-700`} role="alert">
            <span className="block sm:inline">
                {message}
            </span>
          </div>
    )
}