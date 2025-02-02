import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen gap-5">
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-2xl md:text-4xl font-bold md:font-extrabold text-red-500">
                        {error.statusText}
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold md:font-extrabold text-gray-700">
                        {error.status}
                    </h2>
                    <p className="text-base md:text-lg font-semibold md:font-bold text-gray-500">{error.data}</p>
                </div>
                <Link to="/" className="btn md:bg-transparent border-green-400 hover:border-none hover:bg-sky-500 hover:text-white text-sm md:text-base font-semibold md:font-bold text-green-500">Go to Home</Link>
            </div>
        );
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Error</h1>
                <p>{error.message}</p>
                <p>The stack trace is:</p>
                <pre>{error.stack}</pre>
            </div>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}
