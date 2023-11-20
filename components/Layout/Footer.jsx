import { PiCopyrightThin } from "react-icons/pi"
const Footer = () => {
    return (
        <div className="absolute left-0 bottom-0 w-full">
            <div className="bg-primary py-6 text-gray-600">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <span>created by Ibrahim Kurut</span> <PiCopyrightThin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer