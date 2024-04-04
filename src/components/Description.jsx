export const Description = ({icon, blueText, paragraph}) => {
  return (
    <div>
       <div className="max-w-[400px] max-h-[131px] w-full grid grid-cols-5 p-3 my-2 box shadow hover:shadow-lg rounded-lg items-center">
       <div className="col-span-1">
       {icon}
       </div>
       <div className="col-span-4">
        <p>{blueText}</p>
        <p>{paragraph}</p>
       </div>
       </div>

    </div>
  )
}

