import { TranslateIcon } from "@heroicons/react/solid"
import { CalendarIcon } from "@heroicons/react/outline"

function TopContent() {
    return (
        <div className="flex justify-between text-center items-center px-4">
            <div className="text-xl md:text-5xl text-gray-600 px-4 font-medium ml-4">
                <h1>Profile</h1>
            </div>
            <div className="flex space-x-5 text-base">
                {/* language */}
                <div className="">
                    <button className="text-blue-900 px-4 rounded-lg nm-flat-gray-100-xs md:nm-flat-gray-100-sm inline-flex items-center p-3 active:nm-flat-indigo-50 group">
                        <TranslateIcon className="h-4 w-4 md:h-5 md:w-5 md:mr-2 group-hover:text-indigo-500" />
                        <p className="hidden md:inline-flex">English</p>
                    </button>
                </div>
                {/* Calendar */}
                <div>
                    <button className="text-blue-900 px-4 rounded-lg nm-flat-gray-100-xs md:nm-flat-gray-100-sm inline-flex items-center p-3 active:nm-flat-indigo-50 group">
                        <CalendarIcon className="h-4 w-4 md:h-5 md:w-5 md:mr-2 group-hover:text-indigo-500" />
                        <p className="hidden md:inline-flex">17 Dicember, 1998</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopContent
