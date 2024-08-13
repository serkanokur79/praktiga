
import { useTranslation } from 'next-i18next';
import '../../../i18n'
// import HeroCareerSection from "@/components/HeroCar";
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), { ssr: false, loading: () => <p>Loading...</p> });

const HeroContactSection = dynamic(() => import('@/components/HeroContact'), { ssr: false, loading: () => <p>Loading...</p> });

const CareerPage = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    return (
        <div className="px-4 bg-transparent  w-full max-7-xl mx-auto min-h-[calc(100vh-21rem)]">
            <div className=" mx-auto text-center">

                <HeroContactSection />
                <div className='flex flex-col xl:flex-row w-full gap-1'>
                    <section className="py-8 bg-gray-100 dark:bg-gray-900 w-full">
                        <div className="container w-full mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
                                {t('germanyHQ.title')}
                            </h2>
                            <div className="flex flex-col justify-center items-center">
                                <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 text-center">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                        {t('germanyHQ.company')}
                                    </h3>
                                </div>


                                <p className="text-gray-600 dark:text-gray-300">
                                    {t('germanyHQ.addressLine1')}
                                    <br />
                                    {t('germanyHQ.addressLine2')}
                                </p>

                            </div>
                            <Map lat="48.0482" lng="11.5236" />
                        </div>
                    </section>
                    <section className="py-8 bg-gray-100 dark:bg-gray-900 w-full">
                        <div className="container w-full mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
                                {t('turkeyHQ.title')}
                            </h2>
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                {t('turkeyHQ.company')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {t('turkeyHQ.addressLine1')}
                                <br />
                                {t('turkeyHQ.addressLine2')}
                            </p>
                            <Map lat="41.015137" lng="28.979530" />
                        </div>
                    </section>
                </div>
            </div>
        </div>


    );
};

export default CareerPage;