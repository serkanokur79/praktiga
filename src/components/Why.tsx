// components/WhyChoosePraktiga.tsx
import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
const WhyChoosePraktiga: FC = () => {
    const { t } = useTranslation('common');

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">{t('whyChoose.header')}</h2>

                <div className=" grid lg:grid-cols-2 gap-2">
                    {/* Odd Row: Image on the left */}
                    <div className="flex flex-row md:flex-row items-center border-2 bg-white dark:bg-gray-800 dark:border-gray-800  ">
                        <div className="md:w-1/3 w-full pl-5">
                            <Image src="/images/experts.png" alt={t('whyChoose.expertConsultants.description')} className="w-full h-auto rounded-lg object-cover" width={200} height={200} />
                        </div>
                        <div className="md:w-2/3 p-4 md:p-8 flex flex-col align-top justify-start">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{t('whyChoose.expertConsultants.title')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{t('whyChoose.expertConsultants.description')}</p>
                        </div>
                    </div>

                    {/* Even Row: Text on the left */}
                    <div className="flex flex-row-reverse items-center border-2 bg-white dark:bg-gray-800 dark:border-gray-800  ">
                        <div className="md:w-1/3 w-full pr-4 ">
                            <Image src="/images/TailorTT.png" alt={t('whyChoose.tailoredSolutions.title')} className="w-full h-auto rounded-lg object-cover" width={200} height={200} />

                        </div>
                        <div className="md:w-2/3 p-4 md:p-8 ">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{t('whyChoose.tailoredSolutions.title')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{t('whyChoose.tailoredSolutions.description')}</p>
                        </div>
                    </div>

                    {/* Odd Row: Image on the left */}
                    <div className="flex flex-row md:flex-row items-center border-2  bg-white dark:bg-gray-800 dark:border-gray-800  ">
                        <div className="md:w-1/3 w-full">
                            <Image src="/images/proven.png" alt={t('whyChoose.provenTrackRecord.title')} className="w-full h-auto  object-cover" width={200} height={200} />

                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{t('whyChoose.provenTrackRecord.title')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{t('whyChoose.provenTrackRecord.description')}</p>
                        </div>
                    </div>

                    {/* Even Row: Text on the left */}
                    <div className="flex flex-row-reverse items-center border-2  bg-white dark:bg-gray-800 dark:border-gray-800  ">
                        <div className="md:w-1/3 w-full pr-4">
                            <Image src="/images/Ex.png" alt={t('whyChoose.comprehensiveSupport.title')} className="w-full h-auto  object-cover rounded-xl" width={200} height={200} />
                        </div>
                        <div className="md:w-2/3 p-4  ">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{t('whyChoose.comprehensiveSupport.title')}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{t('whyChoose.comprehensiveSupport.description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoosePraktiga;