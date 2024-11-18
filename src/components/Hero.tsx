import { Button } from "./ui/button";
import '../../i18n'
import { useTranslation } from "react-i18next";
import Link from "next/link";

const HeroSection = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    return (
        <div className="relative h-[calc(18rem)] md:h-[calc(26rem)] overflow-hidden w-full">
            <video
                autoPlay
                loop
                muted
                playsInline
                webkit-playsinline
                className="absolute z-0 w-auto min-w-full min-h-[100dvh-4rem] md:min-h-[20rem] max-w-none"
            >
                <source src="/video/praktiga.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white ">
                <h1 className="text-4xl font-bold mb-4 md:text-6xl  box-shadow-red-400 text-primary"> {t('welcome')}</h1>
                <p className="text-lg mb-8 md:text-xl">{t('hero.title')}</p>
                <p className="text-lg mb-8 md:text-xl">{t('hero.description')}</p>
                <Link href="/contact">
                    <Button variant='hero' >
                        {t('hero.button_text')}
                    </Button>
                </Link>
            </div>
        </div >
    );
};

export default HeroSection;