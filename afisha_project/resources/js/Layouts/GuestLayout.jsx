import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <div className=" flex shrink-0 items-center stroke-2">
                        <svg className="h-20 w-auto fill-current text-gray-500" id="Capa_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m345.631 115.263v-33.509l-99.594 12.245v33.509z" /><path d="m95.602 418.266h320.797v61.867c0 17.6 14.268 31.867 31.867 31.867 17.6 0 31.867-14.267 31.867-31.867v-480.133h-384.531zm304.863-35.731h-145.527v-30h145.527zm-217.229-173.402h32.801v-141.671l159.594-19.622v175.359h-62.801v-30h32.801v-47.711l-99.594 12.245v81.399h-62.801zm-7.966 79.668h225.195v30h-225.195zm0 63.734h47.801v30h-47.801z" /><path d="m386.398 448.266h-354.531v31.867c0 17.6 14.267 31.867 31.867 31.867h331.52c-5.619-9.313-8.856-20.219-8.856-31.867z" /></g></svg>
                    </div>
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
