
import { useTranslation } from 'next-i18next';
import '../../i18n'

const Legal: React.FC = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    return (
        <div className="my-2 mx-auto">
            <h1 className="text-3xl font-bold mb-4">{t('legal.legal_notice')}</h1>

            <h2 className="font-bold mt-4">{t('legal.company_info')}</h2>
            <p>{t('legal.company_name')}</p>
            <p>{t('legal.address')}</p>

            <h2 className="font-bold mt-4">{t('legal.represented_by')}</h2>
            <p>{t('legal.managing_directors')}</p>

            <h2 className="font-bold mt-4">{t('legal.contact')}</h2>
            <p>{t('legal.phone')}</p>
            <p>{t('legal.email')}</p>

            <h2 className="font-bold mt-4">{t('legal.commercial_register')}</h2>
            <p>{t('legal.registration')}</p>
            <p>{t('legal.court')}</p>
            <p>{t('legal.register_number')}</p>

            <h2 className="font-bold mt-4">{t('legal.vat_id')}</h2>
            <p>{t('legal.vat_id_number')}</p>

            <h2 className="font-bold mt-4">{t('legal.content_responsibility')}</h2>
            <p>{t('legal.content_responsible_person')}</p>
        </div>
    );
};



export default Legal;