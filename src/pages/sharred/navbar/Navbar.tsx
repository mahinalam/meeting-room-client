import { useState, useEffect, useRef } from "react";
import Container from "../../../components/sharred/Container";
import { IoBedOutline } from "react-icons/io5";
import { HiOutlineCalendar } from "react-icons/hi2";
import { LuUserRound } from "react-icons/lu";
import Input from "antd/es/input/Input";
import { Link } from "react-router-dom";
import BookingStyleDatePicker from "../../../components/sharred/CustomDateRangePicker";
import DestinantionCard from "./DestinantionCard";
import PopularDestinationList from "./PopularDestinationList";
import GuestSelection from "./GuestSelection";
import DestinationModal from "./components/DestinationModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);
  const [isGuestSectionActive, setIsGuestSectionActive] = useState(false);
  const [isDestinationModalOpen, setDestinationModalOpen] = useState(false);

  const [popularLocationValue, setPopularLocationValue] = useState("");
  const handleSelectPopularLocation = (location: string) => {
    setPopularLocationValue(location);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDestinationModal = () => {
    setDestinationModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleDestinationCancel = () => {
    setDestinationModalOpen(false);
  };

  return (
    <>
      <div>
        <nav className=" md:bg-primary  relative ">
          <Container>
            <div>
              {/* frst section */}
              <section className="flex bg-primary items-center text-white justify-between">
                <Link to="/" className="md:text-2xl font-bold">
                  Bookify.com
                </Link>
                <div className="flex items-center gap-6">
                  <span className="font-semib'">List your property</span>
                  <button className="text-[#006CE4] bg-white p-2 font-medium  text-sm rounded-md">
                    Register
                  </button>
                  <button className="text-[#006CE4] bg-white p-2 font-medium rounded-md  text-sm">
                    Sign in
                  </button>
                </div>
              </section>

              {/* second section */}
              <section className="md:text-white md:pt-16 mt-[24px] pb-4">
                <h1 className="md:text-5xl text-[24px] font-bold mb-0 ">
                  Find your next stay
                </h1>
                <h1 className="md:text-2xl text-sm font-normal pt-1 md:pt-3">
                  Search deals on hotels, homes, and much more...
                </h1>
              </section>

              {/* search section for large screen*/}
              <div className="hidden md:block">
                {" "}
                <div className=" flex items-center  bg-[#FFB700] gap-1 p-1  mt-10 rounded-lg">
                  {/* search icon */}
                  <div className="flex bg-white text-subTitle p-3 w-full">
                    <IoBedOutline className="text-subTitle" size={30} />
                    <Input
                      onFocus={() => setShowDestinations(true)} // Show on focus
                      onBlur={() => setShowDestinations(false)} // Show on focus
                      className="bg-transparent outline-none border-none focus:ring-0 placeholder-subTitle "
                      placeholder="Where are you going?"
                      allowClear
                      style={{
                        boxShadow: "none",
                        border: "none",
                        outline: "none",
                      }}
                      defaultValue={popularLocationValue}
                    />
                  </div>

                  {/* TODO: fixed select date range */}
                  {/* calendar icon */}
                  <div className="flex bg-white text-subTitle p-3 w-full items-center">
                    <HiOutlineCalendar className="text-subTitle" size={30} />
                    <BookingStyleDatePicker />
                  </div>

                  {/* user icon */}
                  <div className="flex bg-white p-3 text-subTitle justify-between relative  w-full cursor-pointer">
                    <div
                      tabIndex={0}
                      onFocus={() => setIsGuestSectionActive(true)}
                      onBlur={() => setIsGuestSectionActive(false)}
                      className="flex cursor-pointer w-full"
                    >
                      {" "}
                      <LuUserRound className="text-subTitle" size={30} />
                      <Input
                        className="bg-transparent outline-none border-none focus:ring-0 placeholder-subTitle cursor-pointer"
                        placeholder="Where are you going?"
                        style={{
                          boxShadow: "none",
                          border: "none",
                          outline: "none",
                        }}
                        defaultValue="2 adults  1 children"
                      />
                      {
                        <div className="absolute w-full z-30 top-14 right-[2px]">
                          <GuestSelection />
                        </div>
                      }
                    </div>
                    <svg
                      onFocus={() => setIsGuestSectionActive(true)}
                      onBlur={() => setIsGuestSectionActive(false)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 "
                      tabIndex={0}
                      role="button"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  {/* search btn */}
                  <button className=" font-bold text-xl bg-blue p-3 text-white">
                    Search
                  </button>
                </div>
              </div>

              {/* search section for small screen*/}
              <div className="md:hidden block">
                {" "}
                <div className=" flex flex-col  items-center  bg-[#FFB700] gap-[6px] p-[6px]  rounded-lg">
                  {/* search icon */}
                  <div
                    onClick={showDestinationModal}
                    className="flex bg-white text-subTitle p-3 w-full"
                  >
                    <IoBedOutline className="text-subTitle" size={30} />
                    <Input
                      onFocus={() => setShowDestinations(true)} // Show on focus
                      onBlur={() => setShowDestinations(false)} // Show on focus
                      className="bg-transparent outline-none border-none focus:ring-0 placeholder-subTitle "
                      placeholder="Where are you going?"
                      allowClear
                      style={{
                        boxShadow: "none",
                        border: "none",
                        outline: "none",
                      }}
                      defaultValue={popularLocationValue}
                    />
                  </div>

                  {/* calendar icon */}
                  <div className="">
                    <div className="flex bg-white text-subTitle p-3 gap-[11px] w-full items-center">
                      <HiOutlineCalendar className="text-subTitle " size={30} />
                      <BookingStyleDatePicker />
                    </div>
                  </div>

                  {/* user icon */}
                  <div className="flex bg-white p-3 text-subTitle justify-between relative  w-full cursor-pointer">
                    <div
                      tabIndex={0}
                      onFocus={() => setIsGuestSectionActive(true)}
                      onBlur={() => setIsGuestSectionActive(false)}
                      className="flex cursor-pointer w-full"
                    >
                      {" "}
                      <LuUserRound className="text-subTitle" size={30} />
                      <Input
                        className="bg-transparent outline-none border-none focus:ring-0 placeholder-subTitle cursor-pointer"
                        placeholder="Where are you going?"
                        style={{
                          boxShadow: "none",
                          border: "none",
                          outline: "none",
                        }}
                        defaultValue="2 adults  1 children"
                      />
                      {isGuestSectionActive && (
                        <div className="md:block hidden absolute z-30 top-14 right-[2px]">
                          <GuestSelection />
                        </div>
                      )}
                    </div>
                    <svg
                      onFocus={() => setIsGuestSectionActive(true)}
                      onBlur={() => setIsGuestSectionActive(false)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 "
                      tabIndex={0}
                      role="button"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  {/* search btn */}
                  <button className="w-full font-bold text-xl bg-blue p-3 text-white">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/*popular destinations section */}
            {showDestinations && (
              <div className="md:block hidden absolute z-30 mt-1">
                <PopularDestinationList />
              </div>
            )}
          </Container>

          {isDestinationModalOpen && (
            <DestinationModal
              isDestinationModalOpen={isDestinationModalOpen}
              handleCancel={handleDestinationCancel}
            />
          )}
        </nav>
      </div>
    </>
  );
}
