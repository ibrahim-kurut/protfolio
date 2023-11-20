

const SectionContetnt = ({ children, addStyle }) => {
    return (
        <div className={`${addStyle} absolute w-3/4 top-0 left-[15%] md:top-[50%] lg:top-[60%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[70%] text-sm`}>
            {children}
        </div>
    )
}

export default SectionContetnt