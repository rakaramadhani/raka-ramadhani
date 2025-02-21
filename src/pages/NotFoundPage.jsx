export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900">
            <h1 className="text-7xl font-bold text-blue-600 animate-bounce">404</h1>
            <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
            <p className="mt-2 text-gray-600 text-center px-4 md:px-0">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <a href="/" className="mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition duration-300">
                Back to Home
            </a>
        </div>
    );
}
