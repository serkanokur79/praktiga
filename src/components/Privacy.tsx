import { useTranslation } from "react-i18next";
import '../../i18n';

const PrivacyPolicy: React.FC = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');
    return (
        <div className="my-2 mx-auto">
            <h1 className="text-3xl font-bold mb-4">{t('privacy.privacy_policy')}</h1>

            <h2 className="font-bold mt-4">{t('privacy.data_protection_overview')}</h2>
            <h3 className="font-bold mt-4">{t('privacy.general_information')}</h3>
            <p>{t('privacy.general_information_text')}</p>

            <h2 className="font-bold mt-4">{t('privacy.data_collection')}</h2>
            <h3 className=" mt-1">{t('privacy.responsible_for_data_collection')}</h3>
            <p>{t('privacy.data_processing')}</p>

            <h3 className=" mt-1">{t('privacy.how_we_collect_data')}</h3>
            <p>{t('privacy.data_communication')}</p>
            <p>{t('privacy.technical_data')}</p>

            <h2 className="font-bold mt-4">{t('privacy.general_information_and_mandatory_information')}</h2>
            <h3 className="font-bold mt-2">{t('privacy.data_protection')}</h3>
            <p>{t('privacy.operators_take_protection')}</p>

            <h3 className="font-bold mt-2">{t('privacy.responsible_body')}</h3>
            <p>{t('privacy.responsible_body_info').split('\\n').map((line, index) => <p key={index}>{line}</p>)}</p>

            <h3 className="font-bold mt-2">{t('privacy.revocation_of_consent')}</h3>
            <p>{t('privacy.revocation_info')}</p>

            <h3 className="font-bold mt-2">{t('privacy.right_to_lodge_complaint')}</h3>
            <p>{t('privacy.complaint_info')}</p>

            <h3 className="font-bold mt-2">{t('privacy.right_to_data_portability')}</h3>
            <p>{t('privacy.portability_info')}</p>

            <h3 className="font-bold mt-2">{t('privacy.ssl_tls_encryption')}</h3>
            <p>{t('privacy.encryption_info')}</p>
        </div>
    );
};



export default PrivacyPolicy;