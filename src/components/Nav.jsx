import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePhone } from "react-icons/ai"
import { CiMail } from "react-icons/ci";
import { TbHomeCheck } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { Buton } from "./Buton";

export const Nav = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#03AEFD] hidden md:block">
        <div className="w-full mx-auto max-w-[1440px] place-content-around md:flex">
          <div className="flex items-center gap-2"><IoLocationOutline />Rezilla, 18 Grattan St, Brooklyn</div>
          <div className="flex items-center gap-2"><AiOutlinePhone />+1 206-214-2298</div>
          <div className="flex items-center gap-2"><CiMail />support@rezilla.com</div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-[1440px]">
        <Navbar>
          <div className="flex md:order-2">
            <NavbarToggle />
          </div>
          <NavbarCollapse className="w-full"> 
            <NavbarLink href="#" active className="md:bg-gray-300 md:rounded-xl md:px-4 md:py-2">
              Home
            </NavbarLink >
            <NavbarLink href="#" className="md:px-4 md:py-2">About</NavbarLink>
            <NavbarLink href="#" className="md:px-4 md:py-2">Listings</NavbarLink>
            <NavbarLink href="#" className="md:px-4 md:py-2">Services</NavbarLink>
            <NavbarLink href="#" className="md:px-4 md:py-2">Blogs</NavbarLink>
          </NavbarCollapse>
          <div className="flex items-center gap-2">
          <div className="rounded-full bg-sky-400 px-2 py-2"><TbHomeCheck /></div>
          Rezilla
          </div>
          <div className="flex gap-2 items-center"> 
          <IoMdContact />
          <a href="login" className="hover:text-blue-500">Login</a> /
          <a href="signup" className="hover:text-blue-500">Register</a>
          </div>
          <Buton> 
            {<IoMdContact />}
            Add Listing
          </Buton>
        </Navbar>
      </div>
    </div>
  );
}
