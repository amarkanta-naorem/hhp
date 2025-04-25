import React from "react";

export default function BloodRequirementForm (): React.ReactElement {
    return (
        <div className="block bg-gray-50/50 h-[70vh] sm:h-[62vh] border border-gray-300 shadow-sm rounded-xl m-4 overflow-y-scroll no-scrollbar">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">2</span>
                    Blood Requirements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="blood_request_type" className="block text-sm font-medium text-gray-700">Requested Blood Type <span className="text-red-500">*</span></label>
                        <select id="blood_request_type" name="blood_request_type" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
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
                        <select id="number_of_units" name="number_of_units" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num: number): React.ReactElement => (
                                <option key={num} value={num.toString()} className="text-gray-900">{num} unit{num !== 1 ? "s" : ""}</option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="haemoglobin" className="block text-sm font-medium text-gray-700">Haemoglobin <span className="text-red-500">*</span></label>
                        <input type="text" id="haemoglobin" name="haemoglobin" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Haemoglobin level"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="platelet_count" className="block text-sm font-medium text-gray-700">Platelet Count <span className="text-red-500">*</span></label>
                        <input type="text" id="platelet_count" name="platelet_count" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Platelet count"/>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="block text-lg font-semibold text-gray-800 mb-2">Transfusion Till Date</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="transfusion_till_date.PRBC" className="block text-sm font-medium text-gray-700">PRBC</label>
                            <input type="number" id="transfusion_till_date.PRBC" name="transfusion_till_date.PRBC" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="transfusion_till_date.SDP" className="block text-sm font-medium text-gray-700">SDP</label>
                            <input type="number" id="transfusion_till_date.SDP" name="transfusion_till_date.SDP" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="transfusion_till_date.PC/RDP/PRP" className="block text-sm font-medium text-gray-700">PC/RDP/PRP</label>
                            <input type="number" id="transfusion_till_date.PC/RDP/PRP" name="transfusion_till_date.PC/RDP/PRP" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="transfusion_till_date.FFP" className="block text-sm font-medium text-gray-700">FFP</label>
                            <input type="number" id="transfusion_till_date.FFP" name="transfusion_till_date.FFP" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="transfusion_till_date.LD" className="block text-sm font-medium text-gray-700">LD</label>
                            <input type="number" id="transfusion_till_date.LD" name="transfusion_till_date.LD" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="transfusion_till_date.total" className="block text-sm font-medium text-gray-700">Total</label>
                            <input type="number" id="transfusion_till_date.total" readOnly className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg outline-none transition-all"/>
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
                            <input type="number" id="replacement_till_date.Family" name="replacement_till_date.Family" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="replacement_till_date.Relatives" className="block text-sm font-medium text-gray-700">Relatives</label>
                            <input type="number" id="replacement_till_date.Relatives" name="replacement_till_date.Relatives" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="replacement_till_date.Friends" className="block text-sm font-medium text-gray-700">Friends</label>
                            <input type="number" id="replacement_till_date.Friends" name="replacement_till_date.Friends" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="replacement_till_date.Organisations" className="block text-sm font-medium text-gray-700">Organisations</label>
                            <input type="number" id="replacement_till_date.Organisations" name="replacement_till_date.Organisations" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="replacement_till_date.total" className="block text-sm font-medium text-gray-700">Total</label>
                            <input type="number" id="replacement_till_date.total" readOnly className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg outline-none transition-all"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}