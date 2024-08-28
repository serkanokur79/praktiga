

import { useTranslation } from 'next-i18next';
import '../../../i18n'


import Image from 'next/image';
import PartnerCard from '@/components/PartnerCard';
const PartnersPage = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    const careerContent = [
        {
            id: 1,
            title: t('career.topTeam.title'),
            description: t('career.topTeam.description'),
            src: '/Images/Image1.jpg'
        },
        {
            id: 2,
            title: t('career.career.title'),
            description: t('career.career.description'),
            src: '/Images/Image2.jpg'
        },
        {
            id: 3,
            title: t('career.wellBeing.title'),
            description: t('career.wellBeing.description'),
            src: '/Images/Image3.jpg'
        },
        {
            id: 4,
            title: t('career.companyCulture.title'),
            description: t('career.companyCulture.description'),
            src: '/Images/Image4.jpg'
        },
    ]

    return (

        <div className="bg-transparent text-black container">

            <div className="mt-12 mx-auto">
                <div className="w-full ">
                    <h2 className="text-3xl font-bold text-center text-primary">{t('partners.title')}</h2>
                    <p className="my-4 max-w-[85%] leading-normal text-muted-foreground sm:text-base sm:leading-7 mx-auto">
                        {t('partners.description')}
                    </p>
                </div>

                <PartnerCard partner={{ title: "Omada", description: `${t('partners.Omada.description')}`, content1: `${t('partners.Omada.content1')}`, content2: `${t('partners.Omada.content2')}`, image: "/images/Omada.png", link: "https://omadaidentity.com/" }} />
                <PartnerCard partner={{ title: "Partner 1", description: `${t('partners.EmpowerID.description')}`, content1: `${t('partners.EmpowerID.content1')}`, content2: `${t('partners.EmpowerID.content2')}`, image: "/images/empower2.png", link: "https://www.empowerid.com/" }} />
            </div>

            {/* <div className="py-4 ">
                <div className=" mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        {careerContent.map((item) => (
                            <p key={item.id}>{item.title} </p>
                        )
                        )}

                    </div>
                </div>
            </div> */}
        </div>




    )

}








export default PartnersPage;