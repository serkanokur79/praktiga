import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import CookieSvg from './svg/Cookie';
import { useTranslation } from 'react-i18next';
import '../../i18n'

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation('common');

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.removeItem('cookieConsent');
        // clean cookies
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (


        <div className="fixed w-11/12 left-6 md:left-auto bottom-2 md:bottom-10 md:right-10 z-[9999999]  bg-white flex justify-between items-center  md:w-1/2 xl:w-1/3  flex-col mx-auto px-8 pt-4 pb-4  rounded-3xl ring-1 ring-gray-200 ring-inset shadow-2xl shadow-primary text-center border-primary border-2">

            <div className="w-32 h-32 mx-auto rounded-full -mt-24 bg-white flex flex-col border-primary  border-y-0 border-x-4 border-spacing-4 ">
                <CookieSvg className="m-auto h-20 w-auto" /></div>
            <div className="w-full flex justify-between  flex-col text-black">
                <div className='flex gap-0 flex-row items-center'>
                    {/* <CookieSvg className="mx-auto h-[3rem] w-auto" /> */}
                    <p className="text-md md:text-lg font-semibold mx-auto" >{t('cookieConsent.title')}</p>
                </div>
                {/* <CookieSvg className="mx-auto h-16 w-auto" /> */}

                <p className="my-1 text-xs md:text-sm justify-start text-justify" >
                    {t('cookieConsent.paragraph1')}

                </p>
                <p className="my-1 text-xs md:text-sm justify-start text-justify" >
                    {t('cookieConsent.paragraph2')}

                </p>
            </div>
            <div className='flex gap-2 mt-4 mb-2'>
                <Button
                    variant='secondary'
                    onClick={handleAccept}
                    className="bg-primary text-white px-4 py-2 rounded"
                >
                    {t('cookieConsent.accept')}
                </Button>
                <Button
                    variant='secondary'
                    onClick={handleDecline}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    {t('cookieConsent.decline')}
                </Button></div>   </div>
        // </div >
    );
};

export default CookieConsent;
// Your Cookie Preferences
//  We use cookies only to improve your experience on our site.
//  By clicking “Accept”, you agree to the storing of cookies on your device for functional, analytics, and advertising purposes.
