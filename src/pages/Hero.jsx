import { Carousel } from "flowbite-react";
import { BiArrowToLeft } from "react-icons/bi";
import { BiArrowToRight } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { Buton } from "../components/Buton";
import { Section } from "../components/Section";
import { HTwoText } from "../components/Text";

export const Hero = () => {
  return (
    <Section bgColor='bg-gradient-to-b from-[#4CC9F000] to-[#4361EE70]'>
      <div className="w-full sm:flex sm:flex-col md:grid md:grid-cols-5 md:gap-4 items-center ">
        <div className="col-span-3 justify-start">
          <HTwoText>REAL ESTATE</HTwoText>
          <h1 className="max-w-[9.5em] text-[3rem] font-semibold leading-65 text-left py-3">Find a perfect home you love..!</h1>
          <p className="text-base font-normal leading-26 text-left w-[25rem] mr-3">Experience comfort when you buy, book or rent an apartment. Feel the richness, Enjoy your home</p>

          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-3 px-0 mx-0">
            <Carousel leftControl= {<BiArrowToLeft />} rightControl={<BiArrowToRight />} slideInterval={5000} className="w-[540px] h-[340px]">
              <img src="./hero.jpeg" alt="room1" />
              <img src="./niceroom.jpg" alt="room2" />
              <img src="./room.jpg" alt="room3" />
            </Carousel>
          </div>
        </div>
        
        <div className="col-span-2 bg-white rounded-lg p-3 h-[250px]">
        <div className="flex justify-around items-center"><span>For Sale</span><span>For Rent</span></div>
          <form action="" className="flex flex-col gap-3">
            <input type="text" placeholder="New York, San Francisco etc" className="rounded-xl mt-3"/>
            <select  placeholder="" className="rounded-xl">
              <option value="option1">Select Property Type</option>
            </select>
            <select id="dropdown" name="fruit" className="rounded-xl">
              <option value="apple">Select Rooms</option>
            </select>
            <div className="flex items-center gap-1">
            <input type="checkbox" id="aSearch"/>
            <label htmlFor="aSearch">Active Search</label>
            </div>
            <div className=""><Buton className={`flex justify-center w-full text-center`}> <IoIosSearch />Search </Buton></div>
          </form>
        </div>
      </div>
      <div className="flex gap-2 justify-center">
        <div className="h-10 w-10 bg-white"></div> <div className="h-10 w-10 bg-white"></div>
      </div>
    </Section>
  )
}
