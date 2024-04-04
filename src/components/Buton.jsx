import { IoMdContact } from "react-icons/io";

export const Buton = ({ children, className }) => {
  return ( 
    <div>
    <button className={`bg-sky-400 flex gap-2 items-center rounded-xl px-2 py-1 ${className}`}>
        {children}
      </button>
    </div>
  )
}

