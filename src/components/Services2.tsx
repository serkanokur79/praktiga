// components/ServicesSection.js

import { Service } from "../../types/definitions";



const ServicesSection2 = ({ servicesT }: { servicesT: Service[] }) => {


    return (

        <div className="container mx-auto text-center my-8 bg-primary grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-6 xl:gap-3">


            {servicesT.map((service, index) => (<>

                <div className="col-1 bg-primary md:h-[18rem] xl:h-[20rem] p-2" key={index}>
                    <div className="xl:mb-4 rounded-xl py-1 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9 bg-white md:h-[18rem]">
                        <div className="mx-auto mb-7 inline-block">{service.icon}</div>
                        <div>
                            <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">{service.title}
                            </h3>
                            <p className="text-base font-medium text-body-color">{service.description}</p>
                        </div>
                    </div>
                </div></>
            ))}
        </div>




    );
};

export default ServicesSection2;