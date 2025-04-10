import {useState} from "react";

export default function RequestReceivedTable ({patients}: any) {
    const [inputValue, setInputValue] = useState("");

    const isInputEmpty = inputValue.trim() === "";

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter" && !isInputEmpty) {
            alert(inputValue);
        }
    };

    return (
        <div className="bg-white border border-gray-200 shadow-xs rounded-md p-5 h-[72vh]">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-bold text-gray-800">Request Received</h1>

                <div className="relative">
                    <input
                        id="search-blood-request"
                        className="peer w-full bg-transparent text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-1 pr-10 transition duration-300 ease-in-out
                            focus:outline-none focus:border-blue-500 hover:border-slate-400 shadow-xs focus:shadow"
                        placeholder=" "
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                        onKeyDown={handleKeyDown}
                    />
                    <label
                        htmlFor="search-blood-request"
                        className={`absolute pointer-events-none bg-white px-1 left-3 text-slate-400 text-sm transition-all duration-300 
                            ${inputValue
                            ? "-top-2 text-xs text-blue-600"
                            : "top-[3px] peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400"
                        } peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600`}
                    >
                        Search
                    </label>
                </div>
            </div>

            <div className="flex items-center justify-between my-5">
                <button className="flex items-center space-x-2 bg-[#c90606] p-1 px-2 w-auto rounded-md text-white text-xs cursor-pointer">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d="M10 14h2m0 0h2m-2 0v2m0-2v-2m10-.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"></path></svg>
                    </span>
                    <span>New Request</span>
                </button>

                <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 border-none p-1 rounded-md text-sm cursor-pointer">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><path fill="currentColor" d="M5.03 1.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M6 3.75A.75.75 0 0 1 6.75 3h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 3.75M6 8a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6 8m-.97 2.97a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M6 12.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75"></path></svg>
                        </span>
                        <span>Select Rows</span>
                    </button>
                    <span className="text-[#bdbdbd] cursor-default">/</span>
                    <button className="flex items-center space-x-2 border-none p-1 rounded-md text-sm cursor-pointer">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16"><path fill="currentColor" d="M6 1a3 3 0 0 0-2.83 2H0v2h3.17a3.001 3.001 0 0 0 5.66 0H16V3H8.83A3 3 0 0 0 6 1M5 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5 5a3 3 0 0 0-2.83 2H0v2h7.17a3.001 3.001 0 0 0 5.66 0H16v-2h-3.17A3 3 0 0 0 10 9m-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></path></svg>
                        </span>
                        <span>View</span>
                    </button>
                    <span className="text-[#bdbdbd] cursor-default">/</span>
                    <button className="flex items-center space-x-2 border-none p-1 rounded-md text-sm cursor-pointer">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"></path></svg>
                        </span>
                        <span>Export</span>
                    </button>
                </div>
            </div>

            <div className="relative">
                <div className="h-[55vh] overflow-y-auto no-scrollbar">
                    <table className="w-full divide-y divide-gray-200/70">
                        <thead className="sticky top-0 bg-white z-10">
                        <tr>
                            <th className="p-4 text-left text-xs tracking-wide font-light">Patient Name</th>
                            <th className="p-4 text-left text-xs tracking-wide font-light">Phone No.</th>
                            <th className="p-4 text-left text-xs tracking-wide font-light">Blood Gp.</th>
                            <th className="p-4 text-left text-xs tracking-wide font-light">Age</th>
                            <th className="p-4 text-left text-xs tracking-wide font-light">Gender</th>
                            <th className="p-4 text-left text-xs tracking-wide font-light">Hospital</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200/40 bg-white/50">
                        {patients.map((patient:any, index:any) => (
                            <tr key={index} className="group hover:bg-white/90 transition-all duration-200 ease-out">
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{patient.patient_name}</div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 font-mono">{patient.patient_phone_no}</div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap text-center">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100/80 text-red-700 text-sm font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 48 48"><path fill="currentColor" fillRule="evenodd" d="m24 4l-.69.66l-.004.004l-.009.008l-.032.032l-.122.119q-.16.157-.456.455a72 72 0 0 0-6.492 7.621C12.681 17.68 9 24.082 9 30.08C9 37.845 15.796 44 24 44s15-6.155 15-13.92c0-6-3.681-12.401-7.195-17.18a72 72 0 0 0-6.492-7.622a42 42 0 0 0-.578-.574l-.032-.032l-.01-.008l-.003-.004zm-8.535 27.399a1 1 0 1 0-1.902.62a11.53 11.53 0 0 0 4.177 5.766a11.48 11.48 0 0 0 6.76 2.203c.552 0 1-.449 1-1.003s-.448-1.003-1-1.003a9.5 9.5 0 0 1-5.584-1.82a9.53 9.53 0 0 1-3.451-4.764" clipRule="evenodd"></path></svg>
                                {patient.patient_blood_group}
                            </span>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap text-center">
                                    <div className="flex items-baseline space-x-1">
                                        <span className="text-sm text-gray-900 font-medium">{patient.age}</span>
                                        <span className="text-xs text-gray-500">years</span>
                                    </div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap text-center">
                            <span className={`flex items-center justify-center w-[4rem] py-0.5 rounded-md text-xs font-medium ${patient.gender === "Male" ? "bg-blue-100 text-blue-800" : "bg-pink-100 text-[#f50057]"}`}>
                                {patient.gender}
                            </span>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 font-medium">{patient.hospital}</div>
                                    <div className="text-xs text-gray-500">{patient.hospital_address}</div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/80 pointer-events-none"></div>
            </div>

        </div>
    );
}