import { Button } from "./ui/button";
import '../../i18n'
import { useTranslation } from "react-i18next";

const HeroCareerSection = () => {
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
                <h1 className="text-4xl font-bold mx-auto my-2 xl:mb-4"> {t('career.hero.title')}</h1>
                <p className="text-lg mb-4 mr-8">
                    {t('career.hero.description')}
                </p>

                <Button className=" mx-auto" onClick={() => window.open('https://praktiga.talentics.app/#openings', '_blank')}>
                    {t('career.hero.button_text')}
                </Button>
            </div>
        </div >
    );
};

export default HeroCareerSection;