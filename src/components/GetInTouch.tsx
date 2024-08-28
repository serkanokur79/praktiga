// components/GetInTouch.tsx
import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Button } from './ui/button';
import '../../i18n';
const GetInTouch = ({ type }: { type: "primary" | "white" }) => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    if (type === "white") {
        return (
            <section className="py-4 bg-white text-black my-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-xl md:text-3xl font-bold mb-4 text-primary">{t('getInTouch.title')}</h2>
                    <p className="text-sm md:text-lg mb-8 w-11/12 mx-auto">{t('getInTouch.description')}</p>
                    <Link
                        href="/contact"

                    >
                        <Button variant='default'>{t('getInTouch.contactButton')}</Button>

                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section className="py-4 bg-primary text-white my-4">
            <div className="container mx-auto text-center">
                <h2 className="text-xl md:text-3xl font-bold mb-4">{t('getInTouch.title')}</h2>
                <p className="text-sm md:text-lg mb-8 w-11/12 mx-auto">{t('getInTouch.description')}</p>
                <Link
                    href="/contact"

                >
                    <Button variant='blueBack'>{t('getInTouch.contactButton')}</Button>

                </Link>
            </div>
        </section>
    )
}


export default GetInTouch;