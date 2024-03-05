import React from 'react'

const notFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 Error</h1>
            <p className="text-xl text-gray-600 mb-8">Oops! Page not found.</p>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg&ga=GA1.2.1270185812.1705738111&semt=sph" alt="404 Error" className="max-w-sm" />
            <a href="/" className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out">Go back to Home</a>
        </div>
    )
}

export default notFound                         