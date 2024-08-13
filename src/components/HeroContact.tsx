import { Button } from "./ui/button";
import '../../i18n'
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const HeroContactSection = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    return (
        <div className="relative h-[30rem] overflow-hidden w-full">
            <video
                autoPlay
                loop
                muted
                className="absolute z-0 object-cover w-full h-full min-w-full  max-w-none"
            >
                <source src="/video/praktiga.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>


            <div className="relative z-20 flex flex-col  h-1/2 px-4 text-center text-white dark:text-gray-400 mt-[calc(18rem)] xl:mt-[calc(20rem)]">
                <h1 className="text-4xl font-bold mx-auto my-2 xl:mb-4">Contact us!</h1>
                <p className="text-lg mb-4 mr-8">
                    Our experts are ready to help! Contact us via any of the following channels:
                </p>

                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://x.com/praktiga" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/xlogo.svg" className="my-auto w-5 h-6" alt="X-tec Logo" width={16} height={16} />
                    </a>
                    <a href="https://instagram.com/praktiga" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/company/praktiga" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="tel:+4915255801021" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="w-6 h-6" />
                    </a>
                    <a href="mailto:info@praktiga.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div >
    );
};

export default HeroContactSection;