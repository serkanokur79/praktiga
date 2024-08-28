import { useTranslation } from 'next-i18next';
import '../../i18n'
const TrustSection = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    return (
        <section className="py-4 bg-transparent">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold  text-primary">{t('trust.title')}</h2>

                <div className='flex flex-col gap-4 my-4 max-w-[85%] leading-normal text-muted-foreground sm:text-base sm:leading-7 mx-auto'>
                    <p>{t('trust.content')}</p>
                    <p>{t('trust.content2')}</p>
                    <p>{t('trust.content3')}</p>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;