export const Section = ({children, bgColor}) => {
  return (
    <div className={`p-8 md:p-20 lg:p-30 xl:px-40 w-full font-sans ${bgColor}`}>
        <div className="w-full mx-auto max-w-[1440px ">{children}</div>
    </div>
  )
}