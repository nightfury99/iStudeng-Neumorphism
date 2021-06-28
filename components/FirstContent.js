import FirstContentRow from "./FirstContentRow"
// import SimpleBar from 'simplebar'
// import 'simplebar/dist/simplebar.min.css';

const profiles = [
    {
        title: "Name",
        value: "Ahmad Shauqi Bin Gushadi",
        color: false
    },
    {
        title: "Matric No",
        value: "334001",
        color: false
    },
    {
        title: "Programme",
        value: "QC13 - BACHELOR OF COMPUTER SCIENCE WITH HONOURS (INFORMATION SECURITY AND ASSURANCE)",
        color: false
    },
    {
        title: "Current term",
        value: "A201",
        color: false
    },
    {
        title: "Status",
        value: "Registered",
        color: true
    },
    {
        title: "Current Semester",
        value: "8",
        color: false
    }
]

function FirstContent() {
    return (
        <div className="flex-grow nm-flat-indigo-50 rounded-xl mx-4 text-xs md:text-base py-2 my-5 md:my-10 md:mx-10 px-4 md:py-6">
            <div className="flex font-extrathin md:font-medium justify-center items-center text-center w-44 px-1 md:px-3 py-2 rounded-full bg-blue-900 text-indigo-50">
                <h1>Student Information</h1>
            </div>
                <div className="mt-4 md:mt-10 text-gray-500 font-medium">
                    {/* <FirstContentRow title="Name" value="Ahmad Shauqi Bin Gushadi" />
                    <FirstContentRow title="Matric No" value="3452728" />
                    <FirstContentRow title="Programme" value="QC13 - BACHELOR OF COMPUTER SCIENCE WITH HONOURS (INFORMATION SECURITY AND ASSURANCE)" />
                    <FirstContentRow title="Current Term" value="A201" />
                    <FirstContentRow title="Status" value="Registered" color="red" />
                    <FirstContentRow title="Current Semester" value="7" /> */}
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {profiles.map((profile) => (
                                <tr>
                                    <td className="w-20 md:w-48 p-2">{profile.title}</td>
                                    <td className="w-4">:</td>
                                    <td>{profile.value}</td>
                                </tr>
                            ))}
                            {/* <tr>
                                <td className="w-32">Name</td>
                                <td className="w-4">:</td>
                                <td>Ahmad Shauqi</td>
                            </tr>
                            <tr>
                                <td>Matric No</td>
                                <td>:</td>
                                <td>2343254</td>
                            </tr>
                            <tr>
                                <td>Programme</td>
                                <td>:</td>
                                <td>QC13 - BACHELOR OF COMPUTER SCIENCE WITH HONOURS (INFORMATION SECURITY AND ASSURANCE)</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default FirstContent
