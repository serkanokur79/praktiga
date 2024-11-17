
import PDFViewer from '@/components/PDFViewer';
import i18next from 'i18next';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

const SecurityPolicyPage: NextPage = () => {
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
        <div className="w-full container mx-auto py-4">
            <h1 className="text-4xl font-bold text-primary mb-8 text-center">
                {t('security.title')}
            </h1>

            <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        {t('security.overview.title')}
                    </h2>
                    <p className="mb-6">
                        {t('security.overview.content')}
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        {t('security.commitment.title')}
                    </h2>
                    <p className="mb-6">
                        {t('security.commitment.content')}
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        {t('about.certified')}
                    </h2>
                    <p className="mb-6">
                        {t('security.certification.content')}
                    </p>
                    <div className="flex flex-col items-center justify-center">
                        <PDFViewer src={src} />
                    </div>
                </section>

                {/* <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        {t('security.measures.title')}
                    </h2>
                    <ul className="list-disc pl-6 space-y-4">
                        <li>{t('security.measures.item1')}</li>
                        <li>{t('security.measures.item2')}</li>
                        <li>{t('security.measures.item3')}</li>
                        <li>{t('security.measures.item4')}</li>
                        <li>{t('security.measures.item5')}</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">
                        {t('security.contact.title')}
                    </h2>
                    <p>
                        {t('security.contact.content')}
                    </p>
                </section> */}
            </div>
        </div>
    );
};

export default SecurityPolicyPage;
