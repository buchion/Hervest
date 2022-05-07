import { Link } from "react-router-dom";
import React from "react";
import HervestLogo from "../assets/images/Hervestlogo.svg";

// Icons
import bankcard from "../assets/images/bankcard.svg";
import Category from "../assets/icons/Category.svg";
import Graph from "../assets/icons/Graph.svg";
import Bag from "../assets/icons/Bag.svg";
import TwoUsers from "../assets/icons/TwoUsers.svg";
import User from "../assets/icons/User.svg";
import Chat from "../assets/icons/Chat.svg";
import InfoSquare from "../assets/icons/InfoSquare.svg";
import Paper from "../assets/icons/Paper.svg";
import Document from "../assets/icons/Document.svg";
import Logout from "../assets/icons/Logout.svg";

function DashNav({ children }) {
  return (
    <>
      <div className="flex flex-row ">
        <div className="NavBarMobile leftBar fixed menuheight bg-white shadow-md z-10 flex flex-column ">
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
        </div>

        <div className="w-full PNav">{children}</div>
      </div>
    </>
  );
}

export default DashNav;
