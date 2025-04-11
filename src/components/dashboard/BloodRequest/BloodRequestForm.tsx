import {useEffect, useRef} from "react";
import AttendantForm from "@/components/AttendantForm";

export default function BloodRequestForm({isModalOpen, setIsModalOpen}:any) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen, setIsModalOpen]);


    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex justify-end z-50 animate-fadeIn">
            <div ref={modalRef} className="bg-white/95 backdrop-blur-lg shadow-2xl w-full max-w-full sm:max-w-[75vw] max-h-[100vh] overflow-y-auto transform transition-all duration-300 ease-out animate-slideUp [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">

                <div className="relative p-8 pb-0">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center mb-2 space-x-3">
                                <div className="p-1.5 rounded-xl bg-rose-100/80 group-hover:bg-rose-50/60 transition-colors shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-rose-700/90" viewBox="0 0 14 14">
                                        <path fill="currentColor" fillRule="evenodd" d="M6.92.592L6.624.2h-.002l-.004.004l-.012.01a6 6 0 0 0-.21.167a17.4 17.4 0 0 0-2.315 2.338C2.826 4.262 1.514 6.462 1.514 8.956c0 1.655.692 2.91 1.733 3.738c1.028.819 2.37 1.206 3.673 1.206c1.304 0 2.646-.387 3.674-1.206c1.04-.829 1.733-2.083 1.733-3.738c0-2.494-1.312-4.694-2.567-6.237A17.4 17.4 0 0 0 7.445.38l-.21-.168l-.012-.01L7.219.2h-.002a.49.49 0 0 0-.593 0l.037.049zM5.906 5.449c0-.214.173-.387.387-.387h1.256c.214 0 .387.173.387.387v1.537h1.537c.214 0 .387.174.387.387V8.63a.387.387 0 0 1-.387.386H7.936v1.538a.387.387 0 0 1-.387.387H6.292a.387.387 0 0 1-.386-.387V9.016H4.368a.387.387 0 0 1-.386-.386V7.373c0-.213.173-.387.386-.387h1.538V5.45Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-xl sm:text-3xl font-bold text-gray-900">Blood Request Form</h2>
                            </div>
                            <p className="text-gray-700 ml-14">Please fill all required fields</p>
                        </div>
                        <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100/50">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="space-y-4 p-4">
                    <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-300 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">1</span>
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="patient_name" className="block text-sm font-medium text-gray-700">Patient Name <span className="text-red-500">*</span></label>
                                <input type="text" id="patient_name" name="patient_name" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient's full name"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="patient_phone_no" className="block text-sm font-medium text-gray-700" >Phone Number</label>
                                <input type="tel" id="patient_phone_no" name="patient_phone_no" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Active contact number"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age <span className="text-red-500">*</span></label>
                                <input type="number" id="age" name="age" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient's age"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender <span className="text-red-500">*</span></label>
                                <select id="gender" name="gender" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
                                    <option value="">Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="guardian_name" className="block text-sm font-medium text-gray-700">Guardian Name <span className="text-red-500">*</span></label>
                                <input type="text" id="guardian_name" name="guardian_name" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Guardian's full name"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address <span className="text-red-500">*</span></label>
                                <input type="text" id="address" name="address" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient's address"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="patient_blood_group" className="block text-sm font-medium text-gray-700">Patient Blood Group <span className="text-red-500">*</span></label>
                                <select id="patient_blood_group" name="patient_blood_group" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
                                    <option value="" className="text-gray-500">Select blood group</option>
                                    <option value="A+" className="text-gray-900">A+ve</option>
                                    <option value="A-" className="text-gray-900">A-ve</option>
                                    <option value="B+" className="text-gray-900">B+ve</option>
                                    <option value="B-" className="text-gray-900">B-ve</option>
                                    <option value="AB+" className="text-gray-900">AB+ve</option>
                                    <option value="AB-" className="text-gray-900">AB-ve</option>
                                    <option value="O+" className="text-gray-900">O+ve</option>
                                    <option value="O-" className="text-gray-900">O-ve</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-300 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">2</span>
                            Blood Requirements
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="blood_request_type" className="block text-sm font-medium text-gray-700">Requested Blood Type <span className="text-red-500">*</span></label>
                                <select id="blood_request_type" name="blood_request_type" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
                                    <option value="" className="text-gray-500">Select blood type</option>
                                    <option value="PRBC" className="text-gray-900">PRBC</option>
                                    <option value="SDP" className="text-gray-900">SDP</option>
                                    <option value="PC/RDP/PRP" className="text-gray-900">PC/RDP/PRP</option>
                                    <option value="FFP" className="text-gray-900">FFP</option>
                                    <option value="LD" className="text-gray-900">LD</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="number_of_units" className="block text-sm font-medium text-gray-700">Units Required <span className="text-red-500">*</span></label>
                                <select id="number_of_units" name="number_of_units" required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                        <option key={num} value={num.toString()} className="text-gray-900">{num} unit{num !== 1 ? "s" : ""}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="haemoglobin" className="block text-sm font-medium text-gray-700">Haemoglobin <span className="text-red-500">*</span></label>
                                <input type="text" id="haemoglobin" name="haemoglobin" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Haemoglobin level"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="platelet_count" className="block text-sm font-medium text-gray-700">Platelet Count <span className="text-red-500">*</span></label>
                                <input type="text" id="platelet_count" name="platelet_count" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Platelet count"/>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-lg font-semibold text-gray-800 mb-2">Transfusion Till Date</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="transfusion_till_date.PRBC" className="block text-sm font-medium text-gray-700">PRBC</label>
                                    <input type="number" id="transfusion_till_date.PRBC" name="transfusion_till_date.PRBC" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="transfusion_till_date.SDP" className="block text-sm font-medium text-gray-700">SDP</label>
                                    <input type="number" id="transfusion_till_date.SDP" name="transfusion_till_date.SDP" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="transfusion_till_date.PC/RDP/PRP" className="block text-sm font-medium text-gray-700">PC/RDP/PRP</label>
                                    <input type="number" id="transfusion_till_date.PC/RDP/PRP" name="transfusion_till_date.PC/RDP/PRP" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="transfusion_till_date.FFP" className="block text-sm font-medium text-gray-700">FFP</label>
                                    <input type="number" id="transfusion_till_date.FFP" name="transfusion_till_date.FFP" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="transfusion_till_date.LD" className="block text-sm font-medium text-gray-700">LD</label>
                                    <input type="number" id="transfusion_till_date.LD" name="transfusion_till_date.LD" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="transfusion_till_date.total" className="block text-sm font-medium text-gray-700">Total</label>
                                    <input type="number" id="transfusion_till_date.total" className="w-full px-4 py-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg outline-none transition-all"/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-lg font-semibold text-gray-800 mb-2">
                                Replacement Till Date
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="replacement_till_date.Family" className="block text-sm font-medium text-gray-700">Family</label>
                                    <input type="number" id="replacement_till_date.Family" name="replacement_till_date.Family" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="replacement_till_date.Relatives" className="block text-sm font-medium text-gray-700">Relatives</label>
                                    <input type="number" id="replacement_till_date.Relatives" name="replacement_till_date.Relatives" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="replacement_till_date.Friends" className="block text-sm font-medium text-gray-700">Friends</label>
                                    <input type="number" id="replacement_till_date.Friends" name="replacement_till_date.Friends" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="replacement_till_date.Organisations" className="block text-sm font-medium text-gray-700">Organisations</label>
                                    <input type="number" id="replacement_till_date.Organisations" name="replacement_till_date.Organisations" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="replacement_till_date.total" className="block text-sm font-medium text-gray-700">Total</label>
                                    <input type="number" id="replacement_till_date.total" className="w-full px-4 py-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg outline-none transition-all"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
