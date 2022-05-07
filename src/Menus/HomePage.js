import profileImage from "../assets/images/profileImage.png";
import topbox from "../assets/images/topbox.svg";
import porkchop from "../assets/images/piggybank.svg";
import garden from "../assets/images/garden.svg";
import awards from "../assets/images/awards.svg";
import womenday from "../assets/images/womenday.svg";import CaretRight from "../assets/icon/CaretRight.svg";
import openMobileMenu from "../assets/icon/openMobileMenu.svg";
import { Line } from "rc-progress";
import MobileMenu from "../components/MobileMenu";
import { useState, useRef } from "react";
function HomePage() {

  const [MenuOpen, SetMenuOpen] = useState()
  const cancelButtonRef = useRef(null);
  return (
    <div className="mt-6 pr-6">
      <div className="text-gray-400 flex flex-row justify-between">
        <div className="flex flex-row">
        <img src={profileImage} alt="profile" className="w-14 h-14" />
        <div className="ml-4">
          <p>Hello,</p>
          <p className="boldText text-xl">Oluwatobi</p>
        </div>
        </div>
        <img onClick={()=> SetMenuOpen(true)} src={openMobileMenu} alt="icon" className="cursor-pointer MobileMenuHide h-10 w-10" />
      </div>

      <div className="w-full relative mt-3">
        <img
          src={topbox}
          alt="topbox"
          className="object-cover rounded-xl h-52"
        />

        {/* <div className="TopDivMobile absolute -ml-9 mt-10 flex flex-col w-full text-black top-40"> */}
        <div className="flex flex-row flex-wrap justify-evenly absolute w-full centered text-white ">
          <div className="text-left">
            <p className="text-sm mb-1">Available Balance</p>
            <p className="text-lg boldText mb-3">₦1,063,345.04</p>
          </div>
          <div className="text-left">
            <p className="text-sm mb-1">Impact Investments</p>
            <p className="text-lg boldText mb-3">₦1,007,345.04</p>
          </div>
          <div className="text-left">
            <p className="text-sm mb-1">Total Savings</p>
            <p className="text-lg boldText mb-3">₦2,007,345.04</p>
          </div>
          <div className="text-left">
            <p className="text-sm">Total Returns</p>
            <p className="text-lg boldText mb-3">₦56,000.00</p>
          </div>
        </div>

        <p className="boldText text-3xl text-gray-400 mt-8">Watch your plans</p>
        <p className="text-gray-400 ">A goal without a plan is just a wish</p>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-around mt-8">
      
        <div className=" drop-shadow w-full max-w-xs mb-10 pl-5 py-4 border space-y-8 text-left rounded-xl bg-white border-grey-500">
          <div className="flex flex-row items-center">
            <div className="rounded-full container w-12 h-12 secondary">
              <img alt="icon" src={porkchop} className="child w-6 h-6" />
            </div>
            <p className="ml-2">Saving for rainy days</p>
          </div>

          <p className="BlackFont text-xl">N400.000</p>
          <Line
            className="mr-4"
            percent="35"
            strokeWidth="2"
            strokeColor="#265859"
            trailColor="#F2F1F3"
            trailWidth="2"
          />
        </div>
        <div className="drop-shadow w-full max-w-xs mb-10 pl-5 py-4 border space-y-8 text-left rounded-xl bg-white border-grey-500">
          <div className="flex flex-row items-center">
            <div className="rounded-full container w-12 h-12 secondary">
              <img alt="icon" src={porkchop} className="child w-6 h-6" />
            </div>
            <p className="ml-2">Saving for rainy days</p>
          </div>

          <p className="BlackFont text-xl">N400.000</p>
          <Line
            className="mr-4"
            percent="35"
            strokeWidth="2"
            strokeColor="#265859"
            trailColor="#F2F1F3"
            trailWidth="2"
          />
        </div>
        <div className="drop-shadow w-full max-w-xs mb-10 pl-5 py-4 border space-y-8 text-left rounded-xl bg-white border-grey-500">
          <div className="flex flex-row items-center">
            <div className="rounded-full container w-12 h-12 secondary">
              <img alt="icon" src={porkchop} className="child w-6 h-6" />
            </div>
            <p className="ml-2">Saving for rainy days</p>
          </div>

          <p className="BlackFont text-xl">N400.000</p>
          <Line
            className="mr-4"
            percent="35"
            strokeWidth="2"
            strokeColor="#265859"
            trailColor="#F2F1F3"
            trailWidth="2"
          />
          
        </div>
        <div className="bg-white SmallIco mt-16 right-3 rounded-full shadow-lg w-12 h-12 absolute">
         <img className="w-5 relative mt-4 ml-4" src={CaretRight} alt='right' />
      </div>
      </div>

      <div className="w-full flex flex-row flex-wrap justify-around my-8">
        <div
          style={{ backgroundColor: "#E2698D" }}
          className="flex flex-row h-48 drop-shadow w-full max-w-xs  mb-10 pl-5 py-4 text-left rounded-xl text-white"
        >
          <div className="w-2/3">
            <p className="boldText ">Create a savings plan</p>
            <small>Earn up to 12%</small>
          </div>
          <img alt="icon" src={awards} className="w-36 -mb-12" />
        </div>

        <div
          style={{ backgroundColor: "#265859" }}
          className="flex flex-row h-48 drop-shadow w-full max-w-xs mb-10 pl-5 py-4 text-left rounded-xl text-white"
        >
          <div className="w-2/3">
            <p className="boldText ">Invest in a Female Farmer</p>
            <small>Get up to 25% returns per anum</small>
          </div>
          <img alt="icon" src={garden} className="w-36 -mb-12" />
        </div>

        <div
          style={{ backgroundColor: "#F2F1F3" }}
          className="flex flex-row h-48 drop-shadow w-full max-w-xs mb-10 pl-5 py-4 text-left rounded-xl text-pink-500"
        >
          <div className="w-2/3">
            <p className="boldText ">Invite your girls to HerVest</p>
            <small>Share your girl code.</small>

            <div className="flex flex-row mt-8 items-center justify-around">
              <p className="bg-pink-400 boldText text-white py-1 px-2 rounded-xl">
                HG7FIB
              </p>
              <p style={{ color: "#265859" }}>Share</p>
            </div>
          </div>
          <img alt="icon" src={womenday} className="w-36 -mb-12" />
        </div>
      </div>
      <MobileMenu show={MenuOpen} close={SetMenuOpen} initialFocus={cancelButtonRef} />
      
    </div>
  );
}

export default HomePage;
