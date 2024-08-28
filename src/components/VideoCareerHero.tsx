import React from 'react'
import { Button } from './ui/button'


const CareerVideoHero = () => {
    return (
        <div className="flex flex-col-reverse items-center justify-center xl:flex-row">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold mx-auto my-2 xl:mb-4">Be praktigal!</h1>
                <p className="text-lg mb-4 mr-8">
                    Join praktiga: shape the future of IAM with a collaborative &amp; dynamic team of experts!
                </p>

                <Button variant="outline" className="mt-4 w-1/2 mx-auto" onClick={() => window.open('https://praktiga.talentics.app/#openings', '_blank')}>
                    Job Openings
                </Button>
            </div>
            <div className="m-4 xl:mt-10 w-3/4 xl:w-auto">
                <video
                    src="/video/praktiga.mp4"
                    muted
                    loop
                    preload="auto"
                    playsInline
                    autoPlay
                    // width={640}
                    // height={360}
                    controls={false}
                />
            </div>
        </div>
    )
}

export default CareerVideoHero
