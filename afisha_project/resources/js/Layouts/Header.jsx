import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, usePage } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';

import { useState } from 'react';
const navigation = [
    { name: 'Санкт-Петербург', city: 'spb', current: true },
    { name: 'Москва', city: 'msk', current: false },
    { name: 'Краснодар', city: 'krd', current: false },
    { name: 'Сочи', city: 'sochi', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function Header() {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const page = usePage();
    console.log(page)
    return (
        <Disclosure as="nav" className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Меню</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:justify-start">
                        <Link href="/">
                            <div className="flex shrink-0 items-center stroke-2">
                                <svg className="h-8 w-auto fill-orange-400  " id="Capa_1" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m345.631 115.263v-33.509l-99.594 12.245v33.509z" /><path d="m95.602 418.266h320.797v61.867c0 17.6 14.268 31.867 31.867 31.867 17.6 0 31.867-14.267 31.867-31.867v-480.133h-384.531zm304.863-35.731h-145.527v-30h145.527zm-217.229-173.402h32.801v-141.671l159.594-19.622v175.359h-62.801v-30h32.801v-47.711l-99.594 12.245v81.399h-62.801zm-7.966 79.668h225.195v30h-225.195zm0 63.734h47.801v30h-47.801z" /><path d="m386.398 448.266h-354.531v31.867c0 17.6 14.267 31.867 31.867 31.867h331.52c-5.619-9.313-8.856-20.219-8.856-31.867z" /></g></svg>
                            </div>
                        </Link>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link href={route(item.city)}
                                        key={item.name}
                                        className={(page.url === `/${item.city}`) ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium flex items-center' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium align-bottom flex items-center'}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                        {/* Profile dropdown */}
                        <nav className="-mx-3 flex flex-1 justify-end">
                            {page.props.auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    onClick={() => changeLocation()}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 ring-1 ring-transparent transition hover:text-white focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white hover:bg-gray-700"
                                >
                                    Избранное
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        onClick={() => changeLocation()}
                                        className="rounded-md pr-2 pl-3 py-2 text-white/50 ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Войти
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        onClick={() => changeLocation()}
                                        className="rounded-md pr-3 pl-2 py-2 text-white/50 ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Зарегистрироваться
                                    </Link>
                                </>
                            )}
                        </nav>
                        {page.props.auth.user &&
                            <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                <div className="relative ms-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md border border-transparent  px-3 py-2 text-sm font-medium leading-4 text-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 focus:outline-none hover:text-white"
                                                >

                                                    {page.props.auth.user.name}

                                                    <svg
                                                        className="-me-0.5 ms-2 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route('profile.edit')}
                                            >
                                                Профиль
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                            >
                                                Выйти
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>}

                        <div className="-me-2 flex items-center sm:hidden">

                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        // onClick={() =>
                                        //     setShowingNavigationDropdown(
                                        //         (previousState) => !previousState,
                                        //     )
                                        // }
                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none ml-2"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                className={
                                                    !showingNavigationDropdown
                                                        ? 'inline-flex'
                                                        : 'hidden'
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            <path
                                                className={
                                                    showingNavigationDropdown
                                                        ? 'inline-flex'
                                                        : 'hidden'
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>

                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route('profile.edit')}
                                    >
                                        Профиль
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                    >
                                        Выйти
                                    </Dropdown.Link>
                                </Dropdown.Content>

                            </Dropdown>



                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure >
    )
}
