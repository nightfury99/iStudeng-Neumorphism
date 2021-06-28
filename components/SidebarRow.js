import {
    ChevronRightIcon
} from '@heroicons/react/solid'

function SidebarRow({ Icon, title, act, noti }) {
    return (
        <div className={`flex justify-between text-sm rounded-xl my-2 cursor-pointer p-4 ${act ? "nm-inset-indigo-50-sm" : "hover:bg-gray-200"} text-gray-500 group md:text-base`}>
            <div className="flex">
                {Icon && <Icon className={`h-6 w-6 ${act ? "text-blue-600" : "group-hover:text-blue-600"}`} />}
                <p className="hidden sm:inline-flex font-base pl-3 my-auto">{title}</p>
            </div>
            <div className="flex">
                {act && <ChevronRightIcon className="hidden flex-grow max-w-90px sm:inline-flex w-6 h-6" />}
                { noti && <div className="flex ml-0 sm:ml-2 text-xs w-6 h-4 justify-center items-center md:w-8 md:h-6 rounded-xl bg-blue-200 text-center text-blue-700 md:text-sm"><small>23</small></div> }
            </div>
        </div>
    )
}

export default SidebarRow
