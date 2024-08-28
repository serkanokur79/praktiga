// components/ServicesSection.js

import { Service } from "../../types/definitions";



const ServicesSection = ({ servicesT }: { servicesT: Service[] }) => {


    return (

        <div className="container mx-auto text-center my-8">

            <div className="grid grids-col-1 md:grid-cols-2 gap-2 md:gap-4 xl:grid-cols-3">
                {/* {servicesT.map((service, index) => (
                    <div key={index} className="bg-white p-3 md:p-6 rounded-lg shadow-sm hover:shadow-2xl  hover:border-2 transition-shadow duration-300 border-2 border-gray-200 hover:border-gray-300 dark:border-gray-950 hover:dark:border-gray-600 hover:dark:shadow-md hover:dark:shadow-gray-600 ">
                        <div className="flex items-center justify-center mb-4 text-primary">
                            {service.icon}
                            <h3 className="text-md md:text-lg font-semibold my-auto mx-2 text-secondary">{service.title}</h3>   </div>
                        <p className="text-secondary text-sm md:text-lg w-4/6 md:w-10/12 mx-auto py-4">{service.description}</p>
                    </div>
                ))} */}
                {servicesT.map((service, index) => (
                    <div key={index} className="bg-white p-3 md:p-6 rounded-lg shadow-sm hover:shadow-2xl  hover:border-2 transition-shadow duration-300 border-2 border-gray-200 hover:border-gray-300 dark:border-gray-950 hover:dark:border-gray-600 hover:dark:shadow-md hover:dark:shadow-gray-600 flex flex-row gap-6 text-primary hover:text-secondary hover:shadow-quaternary">
                        <div className="flex items-center justify-center w-[5rem] md:w-[10rem]">{service.icon}</div>
                        <div className="flex items-start justify-left mb-4 flex-col flex-grow">
                            <h3 className="text-md md:text-lg font-semibold my-auto text-left ">{service.title}</h3>
                            <p className=" text-sm md:text-md justify-start text-justify">{service.description}</p> </div>
                    </div>
                ))}
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 p-8 md:p-16 bg-tertiary">
                {servicesT.map((service, index) => (
                    <div key={index}
                        className=" relative px-16 md:px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-black bg-white">
                        <span className="absolute -top-7 md:-top-6 p-6 md:p-3  border-gray-300 rounded-full bg-white justify-center  ">
                            <span className="m-auto">{service.icon}</span>
                        </span>
                        <h2 className="mt-3  text-center gradient-red text-base uppercase tracking-wide">{service.title}</h2>
                        <p className="py-2 text-center text-sm">{service.description}</p>
                    </div>
                ))}

            </div> */}
        </div>


    );
};

export default ServicesSection;