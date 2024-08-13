
import { FC, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
// import { headerItems } from './Header';
import { Button } from './ui/button';
import Image from 'next/image';

const Footer: FC = () => {
    const { t } = useTranslation('common');
    const headerItems = useMemo(() => [
        { name: `${t('headers.home')}`, link: '/' },
        { name: `${t('headers.services')}`, link: '/services' },
        { name: `${t('headers.contact')}`, link: '/contact' },
        { name: `${t('headers.careers')}`, link: '/careers' }]
        , [t]);

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Address and Contact */}
                    <div className="text-center md:text-left mb-4">
                        <h2 className="text-xl font-bold">Praktiga Consulting GmbH</h2>
                        <h4 className="font-bold">{t('footer.addressTitle')}</h4>
                        <p>Südliche Münchner Str. 62, </p>
                        <p>82031, Grünwald, Germany</p>
                        <h4 className="font-bold mt-2">{t('footer.contactTitle')}</h4>
                        <p>{t('footer.email')}: <a href="mailto:info@praktiga.com">info@praktiga.com</a></p>
                        <p>{t('footer.phone')}: <a href="tel:+4915255801021">+49 (0) 152 5580 1021</a></p>
                        <p>{t('footer.phone')}: <a href="tel:+491747054824">+49 (0) 174 705 4824</a></p>
                    </div>

                    {/* Copyright and Social Media */}
                    <div className="mb-4 md:mb-0 text-center">
                        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
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

                    {/* Links */}
                    <div className="text-center md:text-right">
                        <h4 className="font-bold">{t('footer.linksTitle')}</h4>
                        <nav className=' grid grid-cols-2 '>

                            {headerItems.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <Button variant="link">
                                        {item.name}
                                    </Button>
                                </Link>
                            ))}
                        </nav>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;