import Image from "next/image";

import '../../i18n';

import { useTranslation, Trans } from 'next-i18next'
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { useEffect } from "react";

import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/HomeServices";
import WhyChoosePraktiga from "@/components/Why";
import GetInTouch from "@/components/GetInTouch";
import Partners from "@/components/Partners";


export default function Home() {
  const { i18n } = useTranslation();
  const { t } = useTranslation('common');

  useEffect(() => {
    console.log('Current language:', i18n.language);
    console.log('Available resources:', i18n.options.resources);
  }, [i18n]);

  const { t: t2 } = useTranslation('footer');
  const router = useRouter();

  const { locale } = router;
  return (
    <main
      className={`flex flex-col w-full bg-transparent `}
    >
      <HeroSection />
      <ServicesSection />
      <WhyChoosePraktiga />
      <Partners />
      <GetInTouch type='primary' />
    </main>


  );
}
