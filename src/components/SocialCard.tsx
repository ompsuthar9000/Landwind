type Prop = {
    imgSrc:string,
    title:string,
    paragraph:string
}
const SocialCard = ({imgSrc,title,paragraph}:Prop) => {
  return (
    <section className="flex flex-col  max-md:items-center items-start gap-2 max-h-[9.375rem] m-2 ">
        <img src={imgSrc} alt="icon" className="object-contain" loading="eager" />
        <h1 className="font-bold leading-tight text-2xl max-sm:text-center max-sm:text-xl">{title}</h1>
        <p className="font-light max-w-[16rem] md:text-start text-center">{paragraph}</p>
    </section>
  )
}

export default SocialCard