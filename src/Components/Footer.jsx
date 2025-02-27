import { SocialIcon } from "react-social-icons";


const Footer = () => {
    return (
        <div className="max-w-[1600px] mx-auto py-5 text-center">
            <span className=" w-full inline-block h-[1px] dark:bg-gray-500"></span>
            <h5 className="text-xl py-5">Social Links</h5>
            <div className="socials flex justify-center gap-5 py-5">
                <SocialIcon className="" url="https://www.facebook.com/mshantorozario"  />
                <SocialIcon className="" url="https://www.youtube.com/watch?v=918e3QVXN0k&ab_channel=SonicShelter" />
                <SocialIcon className="" network="whatsapp" url="whatsapp://send?phone=+880 1750-800246" />
                <SocialIcon className="" url="https://www.youtube.com/watch?v=918e3QVXN0k&ab_channel=SonicShelter" />

            </div>
            <div className="contact">
                © 2025 Emon Rozario. All rights reserved 
            </div>
        </div>
    );
};

export default Footer;