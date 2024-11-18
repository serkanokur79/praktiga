


const Video = (props: any) => {
    return (
        <div {...props}>


            <video
                src="/video/praktiga.mp4"
                muted
                loop
                preload="auto"
                autoPlay
                playsInline
                webkit-playsinline
                // width={640}
                // height={360}
                controls={false}

            />
        </div>

    )
}

export default Video
