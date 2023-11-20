

const Btn = ({ btnTitle }) => {
    return (
        <div className="bg-gray-700 flex items-center justify-center px-6 py-1 rounded-md capitalize cursor-pointer text-gray-300 hover:bg-gray-500 hover:text-secondary transition-all text-[12px] 
        w-[130px] sm:w-[180px] sm:text-lg">{btnTitle}</div>
    )
}

export default Btn