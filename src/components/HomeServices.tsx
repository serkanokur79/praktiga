// components/ServicesSection.js
import { useTranslation } from 'react-i18next';
import { FaCog, FaChartLine, FaUsers, FaClipboardCheck, FaPlug, FaHeadset } from 'react-icons/fa'; // Import icons from react-icons
import { GrTestDesktop, GrUserExpert } from "react-icons/gr";
import { SiTripadvisor } from "react-icons/si";
import { TbPlugConnected } from "react-icons/tb";
import { VscVmConnect } from "react-icons/vsc";
import '../../i18n'
import Link from 'next/link';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import HomeServicesSectionCarrousel from './HomeServicesCarrousel';


const HomeServicesSection = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    const servicesT = [
        {
            title: (t('services.service1')),
            description: t('services.description1'),
            icon: <SiTripadvisor className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16  group-hover:text-secondary " />,
        },
        {
            title: (t('services.service2')),
            description: t('services.description2'),
            icon: <GrUserExpert className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16    group-hover:text-secondary " />,
        },
        {
            title: (t('services.service3')),
            description: t('services.description3'),
            icon: <VscVmConnect className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16    group-hover:text-secondary " />,
        },
        {
            title: (t('services.service4')),
            description: t('services.description4'),
            icon: <GrTestDesktop className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16    group-hover:text-secondary " />,
        },
        {
            title: (t('services.service5')),
            description: t('services.description5'),
            icon: <TbPlugConnected className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16    group-hover:text-secondary " />,
        },
        {
            title: (t('services.service6')),
            description: t('services.description6'),
            icon: < FaHeadset className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16   group-hover:text-secondary " />,
        },
    ]

    return (<>


        <section className="py-4 bg-transparent">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold  text-primary">{t('services.title')}</h2>
                <p className="my-4 max-w-[85%] leading-normal text-muted-foreground sm:text-base sm:leading-7 mx-auto">
                    {t('trust.content')}
                </p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 my-4">

                    {servicesT.map((service, index) => (
                        <TooltipProvider key={index}>
                            <Tooltip>
                                <TooltipTrigger className='border-white border-4 group group-hover:border-tertiary '>
                                    <div className="flex flex-col items-center justify-center mb-2 text-tertiary rounded-lg p-2 group gap-3 ">
                                        {service.icon}
                                        <h3 className="text-md md:text-xl font-semibold my-auto mx-2 group-hover:text-secondary">{service.title}</h3>   </div>
                                </TooltipTrigger>
                                <TooltipContent className="w-64">
                                    <p>{service.description}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>

                <div className="text-center ">
                    <Link href="/services">
                        <Button variant='default'>
                            {t('services.learn-more')}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    </>
    );
};

export default HomeServicesSection;