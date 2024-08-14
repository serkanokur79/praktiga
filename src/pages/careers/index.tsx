

import { useTranslation } from 'next-i18next';
import '../../../i18n'

import Image from "next/image";

import HeroCareerSection from "@/components/HeroCar";

const CareerPage = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');
    return (
        <div className="py-2 bg-transparent  w-full mx-auto ]">
            <div className=" mx-auto text-center">
                {/* <Video /> */}
                <HeroCareerSection />
                <div className="py-4 bg-transparent">
                    <div className=" mx-auto text-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-transparent p-4 rounded-lg shadow-lg">
                                <Image src="/images/image1.jpg" alt="Top Team" className="w-full h-48 object-cover rounded-t-lg mb-4" width={600} height={600} />
                                <h1 className="text-lg 2xl:text-xl font-bold mb-4 text-gray-800 dark:text-white">{t('career.topTeam.title')}</h1>
                                <p className="text-sm xl:text-lg mb-2 xl:mb-8 text-gray-600 dark:text-gray-300">{t('career.topTeam.description')}</p>
                            </div>
                            <div className="bg-transparent p-4 rounded-lg shadow-lg">
                                <Image src="/images/image2.jpg" alt="Career" className="w-full h-48 object-cover rounded-t-lg mb-4" width={600} height={600} />
                                <h1 className="text-lg 2xl:text-xl font-bold mb-4 text-gray-800 dark:text-white">{t('career.career.title')}</h1>
                                <p className="text-sm xl:text-lg mb-2 xl:mb-8 text-gray-600 dark:text-gray-300">{t('career.career.description')}</p>
                            </div>
                            <div className="bg-transparent p-4 rounded-lg shadow-lg">
                                <Image src="/images/image3.jpg" alt="Well Being" className="w-full h-48 object-cover rounded-t-lg mb-4" width={600} height={600} />
                                <h1 className="text-lg 2xl:text-xl font-bold mb-4 text-gray-800 dark:text-white">{t('career.wellBeing.title')}</h1>
                                <p className="text-sm xl:text-lg mb-2 xl:mb-8 text-gray-600 dark:text-gray-300">{t('career.wellBeing.description')}</p>
                            </div>
                            <div className="bg-transparent p-4 rounded-lg shadow-lg">
                                <Image src="/images/image4.jpg" alt="Company Culture" className="w-full h-48 object-cover rounded-t-lg mb-4" width={600} height={600} />
                                <h1 className="text-lg 2xl:text-xl font-bold mb-4 text-gray-800 dark:text-white">{t('career.companyCulture.title')}</h1>
                                <p className="text-sm xl:text-lg mb-2 xl:mb-8 text-gray-600 dark:text-gray-300">{t('career.companyCulture.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CareerPage;