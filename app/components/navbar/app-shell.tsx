
import { useState, Fragment } from 'react';
import { Logo } from './logo';
import { Bars3CenterLeftIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { AdjustmentsVerticalIcon, BeakerIcon, Cog6ToothIcon, RectangleStackIcon } from '@heroicons/react/24/solid'
import { ThemeToggle } from './theme-toggle';
import { ScrollArea } from '../base/scroll-area';
import { Button } from '../base/button';
import { Menu, Transition } from '@headlessui/react'
import { navigationMenu } from '~/lib/config';
import { Link } from '@remix-run/react';
import { SidebarMenu } from './menu';



export default function AppShell() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleClick = (e: any) => {
        // 👇️ toggle shown state
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="antialiased bg-background">
                <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2 border-b border-gray-200 bg-background dark:border-gray-700">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button onClick={handleClick}
                                data-drawer-target="drawer-navigation"
                                data-drawer-toggle="drawer-navigation"
                                aria-controls="drawer-navigation"
                                className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <Bars3CenterLeftIcon className="w-7 h-7" />
                                <span className="sr-only">Toggle sidebar</span>
                            </button>
                            <Logo />

                        </div>
                        <div className="flex items-center w-fit lg:order-2">
                            <ThemeToggle />
                        </div>
                    </div>
                </nav>

                {/* <!-- Sidebar --> */}

                <aside
                    className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-50 transition-transform pt-14 md:pt-10 md:translate-x-0 dark:bg-gray-900/25 "
                        aria-label="Sidenav ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} id="drawer-navigation">
                    <div className="h-full px-2 py-5 overflow-y-auto">
                        <ScrollArea className="h-full">
                            <div className="px-4 py-2">

                                <SidebarMenu />

                                {/* {navigationMenu?.map((item, i) => {
                                    if (item.visible) {
                                        if (item.subItems) {
                                            return (
                                                <Menu>
                                                    {({ open }) => (
                                                        <>
                                                            <Menu.Button>
                                                                <Button
                                                                    key={i}
                                                                    variant="ghost"
                                                                    justify="start"
                                                                    size="sm"
                                                                    fullWidth={true}>
                                                                    <div className="flex items-center content-start self-start justify-start">
                                                                        <div className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">{item.icon}</div>
                                                                        <span className="ml-3 text-sm">{item.name}</span>
                                                                        <ChevronDownIcon
                                                                            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                                                            aria-hidden="true" />
                                                                    </div>
                                                                </Button>
                                                            </Menu.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-100"
                                                                enterFrom="transform opacity-0 scale-95"
                                                                enterTo="transform opacity-100 scale-100"
                                                                leave="transition ease-in duration-75"
                                                                leaveFrom="transform opacity-100 scale-100"
                                                                leaveTo="transform opacity-0 scale-95"
                                                            >
                                                                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                    <div className="px-1 py-1 ">
                                                                        {item.subItems.map((subItem) => (

                                                                            <Menu.Item key={subItem.name}>
                                                                                {({ active }) => (
                                                                                    <Link to={subItem.href}>
                                                                                        <button
                                                                                            className={`${active ? 'bg-brand-500 text-white' : 'text-gray-900'
                                                                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                                                        >
                                                                                            {subItem.name}
                                                                                        </button>
                                                                                    </Link>
                                                                                )}
                                                                            </Menu.Item>
                                                                        ))}
                                                                    </div>
                                                                </Menu.Items>

                                                            </Transition>
                                                        </>
                                                    )}
                                                </Menu>
                                            )
                                        } else {
                                            return (

                                                <Link to={item.href}>
                                                    <Button
                                                        key={`${item}-${i}`}
                                                        variant="ghost"
                                                        justify="start"
                                                        size="sm"
                                                        fullWidth={true}>
                                                        <div className="flex items-center content-start self-start justify-start">
                                                            <div className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">{item.icon}</div>
                                                            <span className="ml-3 text-sm">{item.name}</span>
                                                        </div>
                                                    </Button>
                                                </Link>
                                            )
                                        }
                                    }
                                }
                                )} */}
                            </div>
                        </ScrollArea>
                    </div>
                    <div
                        className="absolute bottom-0 left-0 z-20 justify-center hidden w-full p-4 space-x-4 lg:flex"
                    >
                        <a
                            href="#"
                            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                            <AdjustmentsVerticalIcon className="w-6 h-6 transition duration-75 text-neutral-500 dark:text-neutral-400" />
                        </a>
                        <a
                            href="#"
                            data-tooltip-target="tooltip-settings"
                            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                            <Cog6ToothIcon className="w-6 h-6 transition duration-75 text-neutral-500 dark:text-neutral-400" />
                        </a>
                        <div
                            id="tooltip-settings"
                            role="tooltip"
                            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                        >
                            Settings page
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        <button
                            type="button"
                            data-dropdown-toggle="language-dropdown"
                            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:hover:text-white dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                        </button>
                        {/* <!-- Dropdown --> */}
                        <div
                            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"
                            id="language-dropdown"
                        >
                            <ul className="py-1" role="none">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
                                        role="menuitem"
                                    >
                                        <div className="inline-flex items-center">
                                            Italiano1
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600"
                                        role="menuitem"
                                    >
                                        <div className="inline-flex items-center">
                                            Italiano2
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600"
                                        role="menuitem"
                                    >
                                        <div className="inline-flex items-center">

                                            Italiano3
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600"
                                        role="menuitem"
                                    >
                                        <div className="inline-flex items-center">
                                            Italiano4
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    )
}
