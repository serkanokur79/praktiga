// components/ServicesSection.js
import { useTranslation } from 'react-i18next';
import { FaCog, FaChartLine, FaUsers, FaClipboardCheck, FaPlug, FaHeadset } from 'react-icons/fa'; // Import icons from react-icons
import { GrTestDesktop, GrUserExpert } from "react-icons/gr";
import { SiTripadvisor } from "react-icons/si";
import { TbPlugConnected } from "react-icons/tb";
import { VscVmConnect } from "react-icons/vsc";
import '../../i18n'

const services = [
    {
        title: 'Advisory',
        description: 'We guide you through your IAM journey, helping you develop a robust strategy and make informed decisions.',
        icon: <SiTripadvisor className="w-8 h-8 text-blue-800 dark:text-blue-200" />,
    },
    {
        title: 'Consulting',
        description: 'Our consultants translate your business needs into functional requirements and help you select the right IAM technology.',
        icon: <GrUserExpert className="w-8 h-8  text-blue-800 dark:text-blue-200" />,
    },
    {
        title: 'Implementation',
        description: 'Our certified professionals deliver seamless implementation of your chosen IAM solutions, ensuring minimal disruption to your operations.',
        icon: <VscVmConnect className="w-8 h-8  text-blue-800 dark:text-blue-200" />,
    },
    {
        title: 'Testing',
        description: 'We employ a structured approach to testing, ensuring the quality and reliability of your IAM systems before deployment.',
        icon: <GrTestDesktop className="w-8 h-8  text-blue-800 dark:text-blue-200" />,
    },
    {
        title: 'Integration',
        description: 'We connect your IAM solution with various applications, enabling a coordinated and unified approach to identity management.',
        icon: <TbPlugConnected className="w-8 h-8  text-blue-800 dark:text-blue-200" />,
    },
    {
        title: 'Operation & Support',
        description: 'Empower your team with our support services, or let us handle your IAM operations entirely, ensuring continuous protection and efficiency',
        icon: < FaHeadset className="w-8 h-8  text-blue-800 dark:text-blue-200" />,
    },
];

const ServicesSection = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    const servicesT = [
        {
            title: (t('services.service1')),
            description: t('services.description1'),
            icon: <SiTripadvisor className="w-6 h-6 md:w-8 md:h-8 text-blue-800 dark:text-blue-200" />,
        },
        {
            title: (t('services.service2')),
            description: t('services.description2'),
            icon: <GrUserExpert className="w-6 h-6 md:w-8 md:h-8  text-blue-800 dark:text-blue-200" />,
        },
        {
            title: (t('services.service3')),
            description: t('services.description3'),
            icon: <VscVmConnect className="w-6 h-6 md:w-8 md:h-8  text-blue-800 dark:text-blue-200" />,
        },
        {
            title: (t('services.service4')),
            description: t('services.description4'),
            icon: <GrTestDesktop className="w-6 h-6 md:w-8 md:h-8  text-blue-800 dark:text-blue-200" />,
        },
        {
            title: (t('services.service5')),
            description: t('services.description5'),
            icon: <TbPlugConnected className="w-6 h-6 md:w-8 md:h-8  text-blue-800 dark:text-blue-200" />,
        },
        {
            title: (t('services.service6')),
            description: t('services.description6'),
            icon: < FaHeadset className="w-6 h-6 md:w-8 md:h-8  text-blue-800 dark:text-blue-200" />,
        },
    ]

    return (

        <section className="py-8 bg-gray-200 dark:bg-gray-900">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">{t('services.title')}</h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                    {servicesT.map((service, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-950 p-2 md:p-6 rounded-lg shadow-sm hover:shadow-2xl  hover:border-2 transition-shadow duration-300 border-2 border-white hover:border-gray-300 dark:border-gray-950 hover:dark:border-gray-600 hover:dark:shadow-md hover:dark:shadow-gray-600">
                            <div className="flex items-center justify-center mb-4">
                                {service.icon}
                                <h3 className="text-md md:text-lg font-semibold my-auto mx-2 text-gray-800 dark:text-white">{service.title}</h3>   </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-md">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default ServicesSection;