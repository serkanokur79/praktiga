import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from '@/components/ui/carrousel';
import { Service } from '../../types/definitions';


const HomeServicesSectionCarrousel = ({ content }: any) => {


    return (
        <div className='flex flex-col h-full w-11/12 mx-auto '>
            <Carousel>
                <CarouselContent className='-ml-4 mb-12'>
                    {content.map((service: Service, index: number) => (
                        <CarouselItem className='basis-1/2 md:basis-1/3 pl-4' key={index}>
                            <div className='flex flex-col aspect-square items-center justify-center border border-zinc-200  bg-secondary '>
                                <div className="flex flex-col items-center justify-center mb-2 rounded-lg p-2 text-gray-200">
                                    <span className='text-white'>{service.icon}</span>
                                    <p className=" text-md md:text-xl font-semibold my-auto mx-2 ">{service.title}</p>   </div>
                                <p className="w-3/4 text-sm md:text-md text-white">{service.description}</p>
                            </div>
                        </CarouselItem>))}
                </CarouselContent>
                <CarouselNavigation
                    className='absolute -bottom-2 right-0 left-auto top-auto w-full justify-end gap-2'
                    classNameButton='bg-zinc-800 *:stroke-zinc-50 '
                    alwaysShow
                />
            </Carousel></div>
    );
};

export default HomeServicesSectionCarrousel;