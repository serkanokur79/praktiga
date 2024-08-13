

import { useTranslation } from 'next-i18next';
import '../../../i18n'


import ServicesSection from "@/components/HomeServices";

const ServicePage = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');
    return (
        <div className="px-4 bg-transparent  w-full max-7-xl mx-auto min-h-[calc(100vh-21rem)]">
            <div className=" mx-auto text-center">
                <ServicesSection />
            </div>
        </div>

    );
};

export default ServicePage;