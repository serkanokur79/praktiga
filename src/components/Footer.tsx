
import { FC, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
// import { headerItems } from './Header';
import { Button } from './ui/button';
import Image from 'next/image';
import CookieConsent from './CookiePerm';

const Footer: FC = () => {
    const { t } = useTranslation('common');
    const headerItems = useMemo(() => [
        { name: `${t('headers.home')}`, link: '/' },
        { name: `${t('headers.services')}`, link: '/services' },
        { name: `${t('headers.contact')}`, link: '/contact' },
        { name: `${t('headers.partners')}`, link: '/partners' },
        { name: `${t('headers.careers')}`, link: '/careers' },
        // { name: `${t('headers.privacy')}`, link: '/privacy-policy' },
        // { name: `${t('headers.imprint')}`, link: '/legal' },
    ]
        , [t]);

    const legalItems = useMemo(() => [

        { name: `${t('headers.privacy')}`, link: '/privacy-policy' },
        { name: `${t('headers.imprint')}`, link: '/legal' },
    ]
        , [t]);

    return (
        <footer className=" py-0 border-t md:border-t-0 bg-quaternary text-white" >
            <div className=" container flex flex-wrap px-5 py-1 mx-auto  md:h-full">

                {/* Address and Contact */}
                <div className="md:w-5/12  md:py-2  md:border-b-0 mb-2 md:mb-0 pb-4 border-b border-gray-200 w-full">
                    <div className='flex flex-col text-center md:text-left my-auto text-sm xl:text-base'>
                        <h2 className="text-xl font-bold">Praktiga Consulting GmbH</h2>
                        {/* <h4 className="font-bold">{t('footer.addressTitle')}</h4> */}
                        <div className="mt-2 flex md:hidden xl:flex flex-col ">
                            Südliche Münchner Str. 62, 82031, Grünwald, Germany</div>
                        <div className="mt-2 hidden md:flex md:flex-col xl:hidden">
                            <span>Südliche Münchner Str. 62, </span>
                            <span>82031, Grünwald, Germany</span></div>
                        <h4 className="font-bold mt-2">{t('footer.contactTitle')}</h4>
                        <div className='mt-2 flex flex-col'>
                            <p>{t('footer.email')}: <a href="mailto:info@praktiga.com">info@praktiga.com</a></p>
                            <p>{t('footer.phone')}: <a href="tel:+4915255801021">+49 (0) 152 5580 1021</a></p>
                            <p>{t('footer.phone')}: <a href="tel:+491747054824">+49 (0) 174 705 4824</a></p>
                        </div>
                    </div>
                </div>

                {/* Copyright and Social Media */}
                <div className="md:w-4/12  md:py-2 md:border-b-0 mb-2 md:mb-0 pb-4 border-b border-gray-200  md:h-full md:justify-center md:items-center w-full ">
                    <div className='flex flex-col text-center  md:h-full w-full my-auto '>
                        <div className='flex flex-col w-full my-auto gap-4'>
                            <div className=' flex flex-col  w-full'>
                                <div className="flex justify-center space-x-4 mt-2">
                                    <a href="https://x.com/praktiga" target="_blank" rel="noopener noreferrer">
                                        <Image src="/images/xlogo.svg" className="my-auto w-5 h-6" alt="X-tec Logo" width={16} height={16} />
                                    </a>
                                    <a href="https://instagram.com/praktiga" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="w-6 h-6" />
                                    </a>
                                    <a href="https://linkedin.com/company/praktiga" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="w-6 h-6" />
                                    </a>
                                    <a href="tel:+4915255801021" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
                            <p className='text-sm'>Designed by <a href="https://www.serkanokur.com" target="_blank" rel="noopener noreferrer">Serkan Okur</a></p>
                            {/* <h4 className="font-bold mt-2">{t('footer.contactTitle')}</h4>
                            <div className='flex flex-col  text-left'>
                                <p>{t('footer.email')}: <a href="mailto:info@praktiga.com">info@praktiga.com</a></p>
                                <p>{t('footer.phone')}: <a href="tel:+4915255801021">+49 (0) 152 5580 1021</a></p>
                                <p>{t('footer.phone')}: <a href="tel:+491747054824">+49 (0) 174 705 4824</a></p>
                            </div> */}
                        </div></div>
                </div>

                {/* Links */}
                <div className="hidden md:flex md:w-3/12 md:py-2 md:border-b-0 mb-10 md:mb-0 pb-4 border-b border-gray-200  md:items-center w-full">
                    <div className='flex flex-col text-center my-auto'>
                        <h2 className="title-font font-semibold text-gray-100 tracking-wider text-sm mb-3 uppercase">{t('footer.links')}</h2>

                        <nav className=' grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 '>
                            {headerItems.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <Button variant="link">
                                        <span className='text-gray-100 hover:text-secondary'>{item.name}</span>
                                    </Button>
                                </Link>
                            ))}
                        </nav>
                        <h2 className="title-font font-semibold text-gray-100 tracking-wider text-sm mt-3 uppercase">{t('footer.legal')}</h2>
                        <nav className=' grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 '>
                            {legalItems.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <Button variant="link">
                                        <span className='text-gray-100 hover:text-secondary'>{item.name}</span>
                                    </Button>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 hidden">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Praktiga</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">     <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
                    </p>
                    <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <div className="flex justify-center space-x-4 mt-2 text-primary">
                            <a href="https://x.com/praktiga" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/xlogo.svg" className="my-auto w-5 h-6 text-primary" alt="X-tec Logo" width={16} height={16} />
                            </a>
                            <a href="https://instagram.com/praktiga" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/company/praktiga" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href="tel:+4915255801021" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex border-gray-200 max-w-xs m-auto items-center justify-between w-full h-[3rem]">
                <div className="flex justify-center space-x-4 m-auto text-primary">
                    <a href="https://x.com/praktiga" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/xlogo.svg" className="my-auto w-5 h-6 text-primary" alt="X-tec Logo" width={16} height={16} />
                    </a>
                    <a href="https://instagram.com/praktiga" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/company/praktiga" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="tel:+4915255801021" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="w-6 h-6" />
                    </a>
                </div>
            </div> */}
            <CookieConsent />
        </footer>
    );
};

export default Footer;