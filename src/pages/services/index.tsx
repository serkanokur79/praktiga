

import { useTranslation } from 'next-i18next';
import '../../../i18n'


import ServicesSection from "@/components/Services";
import HeroSection from '@/components/Hero';
import TrustSection from '@/components/Trust';

const ServicePage = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');
    return (
        <div className="w-full max-7-xl mx-auto min-h-[calc(100vh-21rem)]">
            <HeroSection />
            <div className=" mx-auto text-center">
                <TrustSection />
                <ServicesSection />
            </div>
        </div>

    );
};

export default ServicePage;