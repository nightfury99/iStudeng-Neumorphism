import { SearchIcon } from "@heroicons/react/solid"
import { LogoutIcon } from "@heroicons/react/outline"

function Header() {
    return (
        <div className="sticky top-0 z-50 flex items-center pt-5 px-2 pb-2 lg:px-5 justify-between">
            {/* Left */}
            <div className="flex items-center">
                <div className="flex ml-2 items-center rounded-full nm-inset-indigo-50-sm p-1 md:p-2 md:ml-0 text-center">
                    <SearchIcon className="ml-1 h-6 p-1 w-6 text-gray-400 md:ml-2 md:p-0" />
                    <input type="text" className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-400" placeholder="Search menu..." />
                </div>
            </div>
            {/* Right */}
            <div className="flex text-xs space-x-4 items-center text-gray-500 md:text-base">
                <p>Shauqi</p>
                <button className="text-gray-500 px-4 rounded-full nm-flat-gray-100 inline-flex items-center p-2 active:nm-flat-indigo-50 group">
                    <LogoutIcon className="h-5 w-5 mr-2 group-hover:text-indigo-500" />
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Header
