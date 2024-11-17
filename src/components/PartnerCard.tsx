import Image from 'next/image'
import React from 'react'
import { Partner } from '../../types/definitions'
import { useTranslation } from 'react-i18next';



const PartnerCard = ({ partner }: { partner: Partner }) => {
    const { t } = useTranslation('common');
    return (

        <div className="px-2 xl:px-5 py-2 xl:py-8 mx-auto flex flex-col border border-gray-200 my-4">
            <div className="w-full mx-auto">
                {/* <div className="rounded-lg h-30 w-auto overflow-hidden">
                        <Image loading='lazy' className="object-cover object-center h-full w-full" src={partner.image} width='1200' height={500} alt={partner.title} />
                    </div> */}
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="lg:w-1/4 text-center sm:pr-8 sm:py-8">
                        <div className="w-auto h-18 md:h-10 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                            <Image loading='lazy' className="object-cover object-center h-16 w-auto bg-transparent" src={partner.image} width={1200} height={500} alt={partner.title} />
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            {/* <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{partner.title}</h2> */}
                            <div className="w-full md:w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <p className="leading-snug text-sm xl:text-base">{partner.description}</p>
                        </div>
                    </div>
                    <div className="lg:w-3/4 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-sm md:text-base mb-4">{partner.content1}</p>
                        {partner.content2 && <p className="leading-relaxed text-sm md:text-base mb-4">{partner.content2}</p>}
                        <a className="text-indigo-500 inline-flex items-center" href={partner.link}>{t('partners.learn-more')}
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PartnerCard