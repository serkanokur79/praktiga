
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import '../../i18n';
import { DarkModeSelector } from './DarkModeSelector';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { MenuIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function Header() {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');
    const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');
    const [open, setOpen] = useState(false);

    const headerItems = useMemo(() => [
        { name: `${t('headers.home')}`, link: '/' },
        { name: `${t('headers.services')}`, link: '/services' },
        { name: `${t('headers.contact')}`, link: '/contact' },
        { name: `${t('headers.partners')}`, link: '/partners' },
        { name: `${t('headers.about')}`, link: '/about' },
        { name: `${t('headers.careers')}`, link: 'https://praktiga.talentics.app/' },
        // { name: `${t('headers.privacy')}`, link: '/privacy-policy' },
        // { name: `${t('headers.imprint')}`, link: '/legal' },
    ], [t]);


    useEffect(() => {
        setLanguage(router.locale ?? 'en');
    }, [router.locale]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };
    const handleLanguageChange = (newLocale: string) => {
        setLanguage(newLocale);
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale })
        i18n.changeLanguage(newLocale);
    };

    return (
        <header className=" my-auto w-full flex bg-primary min-h-[4rem]">
            <div className='container flex justify-between items-center gap-4'>
                <div className="text-xl font-bold m-3">
                    <Link href="/"><span className='text-white'>Prakt</span><span className='text-gray-100/50'>iga</span></Link>
                </div>
                <div className='hidden lg:flex md:flex-1 '>
                    <nav className='flex flex-row justify-end  flex-1 px-8'>

                        {headerItems.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <Button variant="link">
                                    <span className='text-gray-100 hover:text-secondary'> {item.name}</span>
                                </Button>
                            </Link>
                        ))}
                    </nav>

                    <div className='flex flex-row gap-2 px-2'>

                        <Select onValueChange={handleLanguageChange} value={language} >
                            <SelectTrigger className='justify-end text-center  w-[6rem] border-none bg-transparent text-white'>
                                {language === 'en' ? 'English  ' : language === 'de' ? 'Deutsch  ' : 'Türkçe  '}
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="de">Deutsch</SelectItem>
                                <SelectItem value="tr">Türkçe</SelectItem>
                            </SelectContent>
                        </Select>
                        {/* <DarkModeSelector /> */}
                    </div>
                </div>
                <div className='lg:hidden flex flex-row gap-1 '>
                    {/* <select
                        onChange={(e) => handleLanguageChange(e.target.value)}
                        value={language}
                        className="p-2 rounded bg-transparent"
                    >
                        <option value="en" className='bg-white text-black'>English</option>
                        <option value="de" className='bg-white text-black' >Deutsch</option>
                        <option value="tr" className='bg-white text-black'>Türkçe</option>
                    </select> */}

                    <Select onValueChange={handleLanguageChange} value={language}>
                        <SelectTrigger className='justify-end text-center  w-[6rem] border-none bg-transparent text-white'>
                            {language === 'en' ? 'English  ' : language === 'de' ? 'Deutsch  ' : 'Türkçe  '}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="de">Deutsch</SelectItem>
                            <SelectItem value="tr">Türkçe</SelectItem>
                        </SelectContent>
                    </Select>
                    {/* <DarkModeSelector /> */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        {/* This button will trigger open the mobile sheet menu */}
                        <SheetTrigger asChild>
                            <Button size='icon' variant="default" className="lg:hidden mx-2 bg-transparent">
                                <MenuIcon className='h-6 w-6' />
                            </Button>
                        </SheetTrigger>


                        <SheetContent side="right" className='w-4/4'>
                            <div className="flex flex-col items-end">
                                {headerItems.map((item, index) => (
                                    <Link key={index} href={item.link}>
                                        <Button
                                            key={index}
                                            variant="link"
                                            onClick={() => {
                                                setOpen(false);
                                            }}

                                        >
                                            {item.name}
                                        </Button></Link>
                                ))}

                                {/* <DarkModeSelector /> */}
                            </div>

                        </SheetContent>
                    </Sheet>
                </div></div>
        </header>
    );
};
