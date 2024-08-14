import { useTranslation } from 'next-i18next';
import '../../i18n'
const TrustSection = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    return (
        <section className="py-6 bg-transparent">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">{t('trust.title')}</h2>
            <div className='flex flex-col gap-4 md:w-2/3 mx-auto max-w-3xl'>
                <p className="text-md md:text-lg text-center">{t('trust.content')}</p>
                <p className="text-md md:text-lg text-center">{t('trust.content2')}</p>
                <p className="text-md md:text-lg text-center">{t('trust.content3')}</p></div>
        </section>
    );
};

export default TrustSection;