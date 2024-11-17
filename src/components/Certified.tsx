import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import i18next from 'i18next';

// Dynamically import PDF viewer component
const PDFViewer = dynamic(() => import('./PDFViewer'), {
    ssr: false,
    loading: () => <p className="text-white">Loading PDF...</p>
});

const CertifiedSection = () => {
    const { t } = useTranslation('common');
    const lng = i18next.resolvedLanguage || 'en';
    const [src, setSrc] = useState<string | undefined>(undefined);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`/pdfs/praktiga_zertifikate_27001_24-${lng.toUpperCase()}.pdf`);
                if (response.ok) {
                    setSrc(response.url);
                } else {
                    setSrc(undefined);
                }
            } catch (error) {
                console.error(error);
                setSrc(undefined);
            }
        })();
    }, [lng]);

    if (!src) {
        return (
            <p className="text-center text-white">
                {t('common.pdfNotAvailable')}
            </p>
        );
    }

    return (
        <section className="py-4 bg-transparent">
            <div className="container mx-auto text-center">
                <div className='flex flex-row gap-4 justify-start items-center'>
                    <Image
                        className="bg-primary"
                        src="/images/new/27001-iso-certified-logo.png"
                        alt="27001 iso certified logo"
                        width={50}
                        height={25}
                        loading="lazy"
                    />
                    <h2 className="text-2xl font-semibold justify-center items-center">{t('about.certified')}</h2>
                </div>
                <div className='flex flex-col gap-4 my-4 max-w-[85%] leading-normal text-muted-foreground sm:text-base sm:leading-7 mx-auto'>
                    <p>
                        {t('security.certification.content')}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <PDFViewer src={src} />
            </div>
        </section >
    );
};

export default CertifiedSection;
