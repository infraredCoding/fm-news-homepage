type Props = {
    number: string,
    image: string,
    title: string,
    text: string
}

export const Popular = (props: Props) => {
    return (
        <div className="flex w-full lg:w-1/3 mb-10">
            <div className="flex gap-5">
                <img src={props.image}/>
                <div className="flex flex-col justify-between">
                    <h3 className="text-5xl text-grayBlue font-bold">{props.number}</h3>
                    <h4 className="font-extrabold text-darkerBlue text-2xl hover:text-primnaryRed cursor-pointer">{props.title}</h4>
                    <p className="text-customSm text-darkBlue mb-1">{props.text}</p>
                </div>
            </div>
        </div>
    )
}