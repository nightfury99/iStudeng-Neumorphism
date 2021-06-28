import SidebarRow from './SidebarRow'

import {
    
} from '@heroicons/react/outline'
import {
    TemplateIcon,
    UserCircleIcon,
    DocumentTextIcon,
    LibraryIcon,
    AcademicCapIcon,
    BellIcon,
    ShieldCheckIcon,
    SunIcon,
    CogIcon
} from '@heroicons/react/solid'

function SideBar() {
    return (
        <div className="p-2 mt-5 max-w-[70px] sm:min-w-[200px] xl:min-w-[315px]">
            {/* Profile */}
            <div className="w-9 h-9 sm:w-20 sm:h-20 sm:text-lg md:w-32 md:h-32 rounded-full flex justify-center items-center md:text-6xl bg-blue-900 text-indigo-50 mx-auto">A</div>
            
            {/*  */}
            <SidebarRow Icon={TemplateIcon} title="Dashboard" />
            <SidebarRow Icon={UserCircleIcon} title="Profile" act={true}/>
            <SidebarRow Icon={DocumentTextIcon} title="Examination" />
            <SidebarRow Icon={LibraryIcon} title="Finance" />
            <SidebarRow Icon={AcademicCapIcon} title="Graduation" />
            <SidebarRow Icon={BellIcon} title="Announcements" noti={true} />
            <SidebarRow Icon={ShieldCheckIcon} title="Health" />

            <div className="space-y-4 sm:flex sm:space-y-0 sm:h-6 sm:justify-between sm:px-6 sm:pt-9">
                <div className="flex py-4 justify-center items-center first-letter sm:py-5 sm:px-3 rounded-xl nm-flat-gray-100">
                    <CogIcon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-400" />
                </div>
                <div className="flex py-4 justify-center items-center first-letter sm:py-5 sm:px-3 rounded-xl nm-flat-gray-100">
                    <SunIcon className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-500" />
                </div>
            </div>
        </div>
    )
}

export default SideBar
