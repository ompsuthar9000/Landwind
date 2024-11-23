type Props={
    imgSrc:string,
    title:string,
    firstParagraph:string,
    secondParagraph:string,
    listData: string[],
    isReverse:boolean

}
const Feature = ({imgSrc,title,firstParagraph,secondParagraph,listData,isReverse}:Props) => {
	return (
		<section className={`container flex justify-between items-center flex-col ${isReverse?"md:flex-row-reverse":"md:flex-row"} md:flex-row gap-5 py-6`}>
			<article className=" flex flex-col justify-center items-start gap-5 ">
				<h1 className="lg:text-4xl font-extrabold max-w-[38rem] text-3xl">
					{title}
				</h1>
				<p className=" lg:text-xl text-gray-500 max-w-[38rem] text-base ">
					{firstParagraph}
				</p>
				<ul className=" flex flex-col gap-3 *:flex *:items-center *:gap-2 max-w-[38rem]">
					
                   {
                    listData.map((items,i)=>{
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        return <li key={i} >
						<img src="/vectors/check-circle.png" alt="checkCircle" />
						{items}
					</li>
                    })
                   }
                    
					
				</ul>
				<p className="lg:text-xl text-gray-500 max-w-[38rem] text-base">
					{secondParagraph}
				</p>
			</article>
            <div className="max-w-[37.375rem]">
			<img src={imgSrc} alt="chart" className="object-contain" loading="eager"/>
            </div>
		</section>
	);
};

export default Feature;
