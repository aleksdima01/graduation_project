export default function AuthenticatedLayout({ header, children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            {header && (
                <header className="bg-white shadow bg-gray-200">
                    <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-gray-300">
                        {header}
                    </div>
                </header>
            )}
            <main>{children}</main>
        </div>
    );
}
