import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { fetchAfisha } from '../../store/afishaReducer';
import { useEffect, useState } from 'react';



export default function Pagination({ city }) {
    const { afisha } = useSelector((state) => state.afisha);
    const [page, setPage] = useState(1);
    const [show_result_from, setShow_result_from] = useState(1);
    const [show_result_to, setShow_result_to] = useState(21);
    const count_results = afisha.count;
    const count_pages = Math.ceil(afisha.count / 21);
    useEffect(() => {
        setPage(1);
        setShow_result_from(1);
        if (count_results < 21) {
            setShow_result_to(count_results)
        }
        setShow_result_to(21);

    }, [city, count_results])
    const dispatch = useDispatch();
    const handleChangePage = (page) => {
        window.scrollTo(0, 0);
        setPage(page);
        dispatch(fetchAfisha({ page: page, city: city }));
        setShow_result_from(page * 21 - 20);
        setShow_result_to(page * 21);
    }
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <button

                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </button>
                <button

                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{show_result_from}</span> to <span className="font-medium">{page === count_pages ? count_results : show_result_to}</span> of{' '}
                        <span className="font-medium">{count_results}</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <button
                            onClick={() => handleChangePage(page - 1)}
                            className={page !== 1 ? "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" : "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 pointer-events-none"}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="size-5" />
                        </button>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        <button
                            onClick={() => handleChangePage(1)}
                            className={page === 1 ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"}
                        >
                            1
                        </button>
                        {page >= 3 &&
                            <button
                                onClick={() => handleChangePage(page - 1)}
                                className="relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >
                                {page - 1}
                            </button>
                        }
                        {page !== 1 && page !== count_pages &&
                            <span className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                {page}
                            </span>
                        }
                        {page <= count_pages - 2 &&
                            <button
                                onClick={() => handleChangePage(page + 1)}
                                className="relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            >
                                {page + 1}
                            </button>
                        }
                        {count_pages !== 1 &&
                            <button
                                onClick={() => handleChangePage(count_pages)}
                                className={page === count_pages ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"}
                            >
                                {count_pages}
                            </button>
                        }
                        <button
                            onClick={() => handleChangePage(page + 1)}
                            className={page !== count_pages ? "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" : "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 pointer-events-none"}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="size-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
