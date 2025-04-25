import React from "react";
import AttendantForm from "@/components/AttendantForm";

export default function PersonalInformationForm({ formData, handleAttendantChange, addAttendant, removeAttendant }:any): React.ReactElement {
    return (
        <div className="block bg-gray-50/50 h-[70vh] sm:h-[62vh] border border-gray-300 shadow-sm rounded-xl m-4 overflow-y-scroll no-scrollbar">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">1</span>
                    Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="patient_name" className="block text-sm font-medium text-gray-700">Patient Name <span className="text-red-500">*</span></label>
                        <input type="text" id="patient_name" name="patient_name" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient's full name"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="patient_phone_no" className="block text-sm font-medium text-gray-700" >Phone Number</label>
                        <input type="tel" id="patient_phone_no" name="patient_phone_no" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Active contact number"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age <span className="text-red-500">*</span></label>
                        <input type="number" id="age" name="age" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient's age"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender <span className="text-red-500">*</span></label>
                        <select id="gender" name="gender" className="w-full px-4 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="guardian_name" className="block text-sm font-medium text-gray-700">Guardian Name <span className="text-red-500">*</span></label>
                        <input type="text" id="guardian_name" name="guardian_name" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Guardian's full name"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address <span className="text-red-500">*</span></label>
                        <input type="text" id="address" name="address" required className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient's address"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="patient_blood_group" className="block text-sm font-medium text-gray-700">Patient Blood Group <span className="text-red-500">*</span></label>
                        <select id="patient_blood_group" name="patient_blood_group" className="w-full px-4 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
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

                <AttendantForm attendants={formData.attendants} handleAttendantChange={handleAttendantChange} addAttendant={addAttendant} removeAttendant={removeAttendant} />

            </div>
        </div>
    );
}