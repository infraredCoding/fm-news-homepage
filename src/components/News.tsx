export const News = () => {
    return (
        <div className="h-full w-full bg-darkerBlue">

            <div className="flex flex-col pt-10 px-8">
                <h1 className="text-4xl text-primaryOrange font-bold">New</h1>

                <div className="flex flex-col py-10 gap-2">
                    <h5 className="text-xl font-bold text-offWhite hover:text-primaryOrange hover:cursor-pointer">Hydrogen VS Electric Cars</h5>
                    <p className="font-customSm text-grayBlue">Will hydrogen-fuelled cars ever catch up to EVs?</p>
                </div>

                <div className="w-full border-t border-darkBlue"></div>

                <div className="flex flex-col py-10 gap-2">
                    <h5 className="text-xl font-bold text-offWhite hover:text-primaryOrange hover:cursor-pointer">The Downsides of AI Artistry</h5>
                    <p className="font-customSm text-grayBlue">What are the possible adverse effects of on-demand AI image generation?</p>
                </div>

                <div className="w-full border-t border-darkBlue"></div>

                <div className="flex flex-col py-10 gap-2">
                    <h5 className="text-xl font-bold text-offWhite hover:text-primaryOrange hover:cursor-pointer">Is VC Funding Drying Up?</h5>
                    <p className="font-customSm text-grayBlue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </div>
    )
}