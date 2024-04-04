import { Section } from "../components/Section"
import { HTwoText } from "../components/Text"
import { Description } from "../components/Description"

export const Whoarewe = (children) => {
  return (
    <>
      <Section>
        <div className="grid grid-cols-2 justify-between gap-20">
          <div className="">
            <HTwoText>WHO ARE WE</HTwoText>
            <h2 className="max-w-[35rem] w-[500px] text-[2.5rem] fontWeight-600 leading-65 text-left py-3">
              Assisting individuals in locating the appropriate real estate
            </h2>
            <p className="mb-5">We're here to turn your dream home into reality. With our expertise and dedication, we'll
              guide you through every step of the journey to find the perfect sanctuary that speaks to your heart.</p>
            <div>
              <Description
                icon={<img src="../../public/SmartHome.png" alt="Description" />}
                blueText="Check out luxury houses"
                paragraph="Its luxury because your comfort is a priority."
              />
              <Description
                icon={<img src="../../public/useroctagon.png" alt="Description" />}
                blueText="Contact us for more information"
                paragraph="We respond swiftly and are eagerly waiting to hear from you"
              />
            </div>
          </div>

          <div className="relative mt-20">
            <div className="absolute z-10 -top-20 right-[9rem]">
              <img src="../../public/Group.png" alt="Real Estate since 2022" className="" />
            </div>

            <div className="flex absolute">

              <div className="rounded">
                <img src="../../public/waterr.png" alt="" />
              </div>

              <div className="flex flex-col -mt-10">
                <div className="rounded">
                  <img src="../../public/roomm.png" alt="" />
                </div>
                <div className="rounded">
                  <img src="../../public/couchh.png" alt="" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </Section>
    </>
  )
}