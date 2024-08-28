
import { useTranslation } from 'react-i18next';
import '../../i18n'
import Image from 'next/image';

const Partners = () => {
    const { t } = useTranslation('common');
    return (

        <div className="bg-transparent text-gray-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 my-8">
                <div className="w-full ">
                    <h2 className="text-3xl font-bold text-center text-primary">{t('partners.title')}</h2>
                    <p className="my-4 max-w-[85%] leading-normal text-muted-foreground sm:text-base sm:leading-7 mx-auto">
                        {t('partners.description')}
                    </p>
                </div>

                <div
                    className="mt-4 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-300 sm:grid-cols-2 lg:divide-y-0 
                        ">
                    <div className="group relative bg-white text-black transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10" onClick={() => window.open("https://omadaidentity.com/", '_blank')}>
                        <div className="relative space-y-2 py-4 p-6">
                            <Image src="/images/Omada.png" alt="Omada logo" loading="lazy" width="200" height="200" className="w-auto h-12 my-2 mb-4" />
                            <div className="space-y-2">
                                {/* <h5 className="text-xl font-semibold  transition group-hover:text-secondary">Omada</h5> */}
                                <p className="">{t('partners.Omada.description')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-[#307fc0] text-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10" onClick={() => window.open("https://www.empowerid.com/", '_blank')}>
                        <div className="relative space-y-2 py-4 p-6">
                            <Image src="/images/empower2.png" alt="enpower logo" width="200" height="200" className="w-auto h-16 " />
                            <div className="space-y-2">
                                {/* <h5 className="text-xl font-semibold  transition group-hover:text-secondary">empowerID</h5> */}
                                <p className="text-gray-200">{t('partners.EmpowerID.description')}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div className="relative space-y-8 py-12 p-8">
                                <Image src="https://www.svgrepo.com/show/120852/logo.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full" />
                                <div className="space-y-2">
                                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">ASD.com</h5>
                                    <p className="text-gray-300">API SaaS Platform that provides API Suit to help you ship fast.</p>
                                </div>
                            </div>
                        </div>
                        <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                            <div className="relative space-y-8 py-12 p-8">
                                <Image src="https://www.svgrepo.com/show/120850/logo.svg" loading="lazy" width="200" height="200" className="w-12 h-12 rounded-full" />
                                <div className="space-y-2">
                                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">TMK.co</h5>
                                    <p className="text-gray-300">Chrome Extension that lets you add ChatGPT on any website</p>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>

        </div>



    )
}

export default Partners