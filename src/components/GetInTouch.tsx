// components/GetInTouch.tsx
import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Button } from './ui/button';
import '../../i18n';
const GetInTouch: FC = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    return (
        <section className="py-4 bg-transparent text-gray-800 dark:text-white my-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">{t('getInTouch.title')}</h2>
                <p className="text-lg mb-8 w-1/2 mx-auto">{t('getInTouch.description')}</p>
                <Link
                    href="/contact"

                >
                    <Button variant='outline'>{t('getInTouch.contactButton')}</Button>

                </Link>
            </div>
        </section>
    );
};

export default GetInTouch;