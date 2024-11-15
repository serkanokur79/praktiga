// components/WhyChoosePraktiga.tsx
import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
const WhyChoosePraktiga: FC = () => {
    const { t } = useTranslation('common');

    const whyChooseContent = [
        {
            title: (t('whyChoose.expertConsultants.title')),
            description: t('whyChoose.expertConsultants.description'),
            image: '/images/new/WhyChoosePraktiga_expertconsultants.png',
        },
        {
            title: (t('whyChoose.tailoredSolutions.title')),
            description: t('whyChoose.tailoredSolutions.description'),
            image: '/images/new/WhyChoosePraktiga_tailoredsolutions.png',
        },
        {
            title: (t('whyChoose.provenTrackRecord.title')),
            description: t('whyChoose.provenTrackRecord.description'),
            image: '/images/new/WhyChoosePraktiga_proventrackrecord.png',
        },
        {
            title: (t('whyChoose.comprehensiveSupport.title')),
            description: t('whyChoose.comprehensiveSupport.description'),
            image: '/images/new/WhyChoosePraktiga_support.png',
        },
    ]

    return (
        <section className="py-4 bg-primary text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 ">{t('whyChoose.header')}</h2>
                <div className=" grid lg:grid-cols-2 gap-2">
                    {whyChooseContent.map((content, index) => (
                        <div key={index} className={index % 2 == 0 ? "flex flex-row md:flex-row items-center border-1 bg-white text-quaternary" : "flex flex-row-reverse items-center border-1 bg-white text-quaternary"}>
                            <div className={index % 2 == 0 ? "md:w-1/3 w-full pl-5" : "md:w-1/3 w-full pr-5"}>
                                <Image src={content.image} alt={content.description} className="w-full h-auto rounded-lg object-cover" width={200} height={200} />
                            </div>
                            <div className="md:w-2/3 p-4 md:p-8 flex flex-col align-top justify-start">
                                <h3 className="text-xl font-semibold mb-4 ">{content.title}</h3>
                                <p className="">{content.description}</p>
                            </div>
                        </div>

                    ))
                    }</div>

            </div >
        </section >
    );
};

export default WhyChoosePraktiga;