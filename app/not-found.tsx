import Link from "next/link";

const NotFound = () => {
    return (
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-accent font-semibold">
                        404 Error
                    </h3>
                    <p className="text-gray-600 text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </p>
                    <p className="text-gray-400">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link href={''} className="block py-2 px-4 text-white font-medium bg-accent duration-150 hover:bg-indigo-400 active:bg-indigo-700 rounded-lg">
                            Go back
                        </Link>
                        <Link href={''} className="block py-2 px-4 text-neutral-content hover:bg-gray-50 hover:text-black font-medium duration-150 active:bg-gray-100 border rounded-lg">
                            Contact support
                        </Link>
                    </div>
                </div>
            </div>
    )
}

NotFound.displayName = "NotFound";

export default NotFound;