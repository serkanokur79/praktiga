import { Button } from "./ui/button";
import '../../i18n'
import { useTranslation } from "react-i18next";
import Link from "next/link";

const HeroSection = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    return (
        <div className="relative h-[100dvh-4rem] md:h-[20rem] overflow-hidden w-full">
            <video
                autoPlay
                loop
                muted
                className="absolute z-0 w-auto min-w-full min-h-[100dvh-4rem] md:min-h-[20rem] max-w-none"
            >
                <source src="/video/praktiga.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white dark:text-gray-400 ">
                <h1 className="text-4xl font-bold mb-4 md:text-6xl dark:shadow-black box-shadow-red-400"> {t('welcome')}</h1>
                <p className="text-lg mb-8 md:text-xl">Identity & Access Management Consulting</p>
                <p className="text-lg mb-8 md:text-xl">Expertise. Efficiency. Excellence.</p>
                <Link href="/contact">
                    <Button variant='default' >
                        Contact Us
                    </Button>
                </Link>
            </div>
        </div >
    );
};

export default HeroSection;