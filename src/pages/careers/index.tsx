

import { useTranslation } from 'next-i18next';
import '../../../i18n'

import Image from "next/image";

import HeroCareerSection from "@/components/HeroCar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const CareerPage = () => {
    const { i18n } = useTranslation();
    const { t } = useTranslation('common');

    const careerContent = [
        {
            id: 1,
            title: t('career.topTeam.title'),
            description: t('career.topTeam.description'),
            src: '/images/image1.jpg'
        },
        {
            id: 2,
            title: t('career.career.title'),
            description: t('career.career.description'),
            src: '/images/image2.jpg'
        },
        {
            id: 3,
            title: t('career.wellBeing.title'),
            description: t('career.wellBeing.description'),
            src: '/images/image3.jpg'
        },
        {
            id: 4,
            title: t('career.companyCulture.title'),
            description: t('career.companyCulture.description'),
            src: '/images/image4.jpg'
        },
    ]

    return (
        <div className="py-2 bg-transparent  w-full mx-auto ">
            <div className=" mx-auto text-center">
                {/* <Video /> */}
                <HeroCareerSection />
                <div className="py-4 ">
                    <div className=" mx-auto text-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                            {careerContent.map((item) => (

                                <Card key={item.id} className="bg-transparent p-4 rounded-lg shadow-lg hover:bg-primary hover:text-white">
                                    <CardHeader>
                                        <CardDescription>
                                            <Image src={item.src} alt="Top Team" className="w-full h-48 object-cover rounded-t-lg mb-4" width={600} height={600} />
                                        </CardDescription>
                                        <CardTitle>{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{item.description}</p>
                                    </CardContent>
                                    {/* <CardFooter>
                                            <p>Card Footer</p>
                                        </CardFooter> */}
                                </Card>

                            )

                            )}
                            {/* <div className="bg-transparent p-4 rounded-lg shadow-lg">
                                <Image src="/images/image1.jpg" alt="Top Team" className="w-full h-48 object-cover rounded-t-lg mb-4" width={600} height={600} />
                                <h1 className="text-lg 2xl:text-xl font-bold mb-4 text-gray-800 dark:text-white">{t('career.topTeam.title')}</h1>
                                <p className="text-sm xl:text-lg mb-2 xl:mb-8 text-gray-600 dark:text-gray-300">{t('career.topTeam.description')}</p>
                            </div>
                            <div className="bg-transparent p-4 rounded-lg shadow-lg">
                                <Image src="/images/image2.jpg" alt="Career" className="w-full h-48 object-cover rounded-t-lg mb-4" width={600} height={600} />
                                <h1 className="text-lg 2xl:text-xl font-bold mb-4 text-gray-800 dark:text-white">{t('career.career.title')}</h1>
                                <p className="text-sm xl:text-lg mb-2 xl:mb-8 text-gray-600 dark:text-gray-300">{t('career.career.description')}</p>
                            </div>
                            <div className="bg-transparent p-4 rounded-lg shadow-lg">
                                <Image src="/images/image3.jpg" alt="Well Being" className="w-full h-48 object-cover rounded-t-lg mb-4" width={600} height={600} />
                                <h1 className="text-lg 2xl:text-xl font-bold mb-4 text-gray-800 dark:text-white">{t('career.wellBeing.title')}</h1>
                                <p className="text-sm xl:text-lg mb-2 xl:mb-8 text-gray-600 dark:text-gray-300">{t('career.wellBeing.description')}</p>
                            </div>
                            <div className="bg-transparent p-4 rounded-lg shadow-lg">
                                <Image src="/images/image4.jpg" alt="Company Culture" className="w-full h-48 object-cover rounded-t-lg mb-4" width={600} height={600} />
                                <h1 className="text-lg 2xl:text-xl font-bold mb-4 text-gray-800 dark:text-white">{t('career.companyCulture.title')}</h1>
                                <p className="text-sm xl:text-lg mb-2 xl:mb-8 text-gray-600 dark:text-gray-300">{t('career.companyCulture.description')}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CareerPage;