export default function RoomsLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 sm:p-6 lg:p-8 font-sans">
            {children}
        </div>
    )
}