import { NextPage } from 'next';
import Image from 'next/image';
import HeroSection from '@/components/Hero';
import TrustSection from '@/components/Trust';
import CertifiedSection from '@/components/Certified';


const AboutPage: NextPage = () => {

    return (
        <div className="w-full max-7-xl mx-auto ">
            <HeroSection />
            <TrustSection />
            <CertifiedSection />
        </div>
    );
};

export default AboutPage;