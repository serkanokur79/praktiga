

import { useTranslation } from 'next-i18next';
import '../../../i18n'
import ServicesSection from "@/components/Services";
import HeroSection from '@/components/Hero';
import HomeServicesSectionCarrousel from '@/components/HomeServicesCarrousel';
import { SiTripadvisor } from 'react-icons/si';
import { GrTestDesktop, GrUserExpert } from 'react-icons/gr';
import { VscVmConnect } from 'react-icons/vsc';
import { TbPlugConnected } from 'react-icons/tb';
import { FaHeadset } from 'react-icons/fa';
import GetInTouch from '@/components/GetInTouch';

const ServicePage = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');
    const servicesT = [
        {
            title: (t('services.service1')),
            description: t('services.description1'),
            icon: <SiTripadvisor className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16 text-primary " />,
        },
        {
            title: (t('services.service2')),
            description: t('services.description2'),
            icon: <GrUserExpert className="w-8 h-8 md:w-12 md:h-12 xl:w-12 xl:h-12  text-primary" />,
        },
        {
            title: (t('services.service3')),
            description: t('services.description3'),
            icon: <VscVmConnect className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16  text-primary" />,
        },
        {
            title: (t('services.service4')),
            description: t('services.description4'),
            icon: <GrTestDesktop className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16  text-primary" />,
        },
        {
            title: (t('services.service5')),
            description: t('services.description5'),
            icon: <TbPlugConnected className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16  text-primary" />,
        },
        {
            title: (t('services.service6')),
            description: t('services.description6'),
            icon: < FaHeadset className="w-8 h-8 md:w-12 md:h-12  text-primary" />,
        },
    ]
    return (
        <div className="w-full max-7-xl mx-auto ">
            < HeroSection />
            <section className="py-4 bg-primary text-white ">
                <div className=" mx-auto text-center">
                    <h2 className="text-3xl font-bold ">{t('services.title')}</h2>
                    <ServicesSection servicesT={servicesT} />
                </div>
            </section>
            <GetInTouch type='white' />
        </div >

    );
};

export default ServicePage;