import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Company = ( ) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return(
    <>
      <div className="">
        <div className="flex justify-center ">
          <p>Trusted by 100+ Companies across the globe!</p>
        </div>

        <div className="flex justify-center gap-8 items-center" data-aos = "zoom-in-left">
          <img src="../../public/Google.png" alt="" />
          <img src="../../public/Amazon.png" alt="" />
          <img src="../../public/Logitech.png" alt="Logitech" />
          <img src="../../public/Spotify.png" alt="" />
          <img src="../../public/Samsung.png" alt="" />
          <img src="../../public/Netflix.png" alt="" />
        </div>
      </div>
    </>
  )

}
