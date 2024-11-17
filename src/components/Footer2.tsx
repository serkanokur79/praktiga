'use client'

import { FC, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import CookieConsent from './CookiePerm'

const Footer: FC = () => {
    const { t } = useTranslation('common')
    const headerItems = useMemo(() => [
        { name: t('headers.home'), link: '/' },
        { name: t('headers.services'), link: '/services' },
        { name: t('headers.contact'), link: '/contact' },
        { name: t('headers.partners'), link: '/partners' },
        { name: t('headers.about'), link: '/about' },
        { name: t('headers.careers'), link: '/careers' },
    ], [t])

    const legalItems = useMemo(() => [
        { name: t('headers.privacy'), link: '/privacy-policy' },
        { name: t('headers.imprint'), link: '/legal' },
        { name: t('headers.security'), link: '/security-policy' },
    ], [t])

    return (
        <footer className="bg-quaternary text-white py-8 border-t md:border-t-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Address and Contact */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold mb-4">Praktiga Consulting GmbH</h2>
                        <p className="mb-2">Südliche Münchner Str. 62, 82031, Grünwald, Germany</p>
                        <h4 className="font-bold mt-4 mb-2">{t('footer.contactTitle')}</h4>
                        <p>{t('footer.email')}: <a href="mailto:info@praktiga.com" className="hover:text-secondary">info@praktiga.com</a></p>
                        <p>{t('footer.phone')}: <a href="tel:+4915255801021" className="hover:text-secondary">+49 (0) 152 5580 1021</a></p>
                        <p>{t('footer.phone')}: <a href="tel:+491747054824" className="hover:text-secondary">+49 (0) 174 705 4824</a></p>
                    </div>

                    {/* Links */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold mb-4">{t('footer.links')}</h2>
                        <nav className="grid grid-cols-2 gap-2">
                            {headerItems.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <Button variant="link" className="text-white hover:text-secondary p-0">
                                        {item.name}
                                    </Button>
                                </Link>
                            ))}
                        </nav>
                        <h2 className="text-xl font-bold mt-4 mb-2">{t('footer.legal')}</h2>
                        <nav className="grid grid-cols-2 gap-2">
                            {legalItems.map((item, index) => (
                                <Link key={index} href={item.link}>
                                    <Button variant="link" className="text-white hover:text-secondary p-0">
                                        {item.name}
                                    </Button>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Copyright and Social Media */}
                    <div className="text-center md:text-left">
                        <div className="flex justify-center md:justify-start space-x-4 mb-4">
                            <a href="https://x.com/praktiga" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/xlogo.svg" className="w-6 h-6" alt="X-tec Logo" width={24} height={24} />
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
                        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
                        <p className="text-sm mt-2">Designed by <a href="https://www.serkanokur.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">Serkan Okur</a></p>
                    </div>
                </div>
            </div>
            <CookieConsent />
        </footer>
    )
}

export default Footer