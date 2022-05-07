/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import CloseSquare from '../assets/icon/CloseSquare.svg'
import HervestLogo from "../assets/images/Hervestlogo.svg";
import bankcard from "../assets/images/bankcard.svg";
import Category from "../assets/icon/Category.svg";
import Graph from "../assets/icon/Graph.svg";
import Bag from "../assets/icon/Bag.svg";
import TwoUsers from "../assets/icon/TwoUsers.svg";
import User from "../assets/icon/User.svg";
import Chat from "../assets/icon/Chat.svg";
import InfoSquare from "../assets/icon/InfoSquare.svg";
import Paper from "../assets/icon/Paper.svg";
import Document from "../assets/icon/Document.svg";
import Logout from "../assets/icon/Logout.svg";

export default function MobileMenu({ show, close, initialFocus }) {

    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={initialFocus} onClose={close}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="rounded-md text-gray-300 "
                                                onClick={() => close(false)}
                                            >
                                                {/* <span className="sr-only">Close panel</span> */}
                                                <img alt='close' src={CloseSquare} className='h-10 w-10' aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">

                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            {/* Replace with your content */}
                                            <ul className="ml-4">
                                                <li>
                                                    <img
                                                        alt="Hervest Logo"
                                                        src={HervestLogo}
                                                        className="ml-5 items-center w-40 h-20 "
                                                    />
                                                </li>
                                                <p className="text-gray-500">Menu</p>
                                                <div>

                                                    <Link to="/">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white bg-pink-50">
                                                            <img src={Category} alt="icon" className="hover:red-500 mx-4" />
                                                            Dashboard
                                                        </li>
                                                    </Link>

                                                    <Link to="/">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white hover:bg-white hover:bg-pink-50">
                                                            <img src={Document} alt="icon" className="mx-4" />
                                                            Plans
                                                        </li>
                                                    </Link>

                                                    <Link to="/">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white hover:bg-white hover:bg-pink-50">
                                                            <img src={Bag} alt="icon" className="mx-4" />
                                                            Purse
                                                        </li>
                                                    </Link>

                                                    <Link to="/">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white hover:bg-white hover:bg-pink-50">
                                                            <img src={Paper} alt="icon" className="mx-4" />
                                                            Transactions
                                                        </li>
                                                    </Link>

                                                    <Link to="/">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white hover:bg-white hover:bg-pink-50">
                                                            <img src={bankcard} alt='icon' className="mx-4" />
                                                            Banks & Cards
                                                        </li>
                                                    </Link>

                                                    <Link to="/">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white hover:bg-white hover:bg-pink-50">
                                                            <img src={TwoUsers} alt="icon" className="mx-4" />
                                                            Girl Code
                                                        </li>
                                                    </Link>

                                                    <Link to="/">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white hover:bg-white hover:bg-pink-50">
                                                            <img src={User} alt="icon" className="mx-4" />
                                                            Profile
                                                        </li>
                                                    </Link>

                                                    <Link to="/">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white hover:bg-white hover:bg-pink-50">
                                                            <img src={Graph} alt="icon" className="mx-4" />
                                                            Portfolio
                                                        </li>
                                                    </Link>

                                                    <Link to="/">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white hover:bg-white hover:bg-pink-50">
                                                            <img src={InfoSquare} alt="icon" className="mx-4" />
                                                            About Hervest
                                                        </li>
                                                    </Link>

                                                    <Link to="/">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white hover:bg-white hover:bg-pink-50">
                                                            <img src={Chat} alt="icon" className="mx-4" />
                                                            Support
                                                        </li>
                                                    </Link>

                                                    <Link to="/" className="cursor-pointer">
                                                        <li className="flex flex-row AMenu rounded-lg items-center h-10 my-4 pr-3 text-white hover:bg-white hover:bg-pink-50">
                                                            <img src={Logout} alt="icon" className="mx-4" />
                                                            Logout
                                                        </li>
                                                    </Link>

                                                </div>
                                            </ul>
                                            <div className="absolute inset-0 px-4 sm:px-6">
                                                <div className="h-full" aria-hidden="true" />
                                            </div>
                                            {/* /End replace */}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
