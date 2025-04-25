export default function EmergencyDetailForm () {
    return (
        <div className="block bg-gray-50/50 h-[70vh] sm:h-[62vh] border border-gray-300 shadow-sm rounded-xl m-4 overflow-y-scroll no-scrollbar">
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">3</span>
                    Emergency Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                        <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">Hospital Name <span className="text-red-500">*</span></label>
                        <input type="text" id="hospital" name="hospital" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Where is the patient?"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="hospital_address" className="block text-sm font-medium text-gray-700">Hospital Address <span className="text-red-500">*</span></label>
                        <input type="text" id="hospital_address" name="hospital_address" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Hospital address"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="ward" className="block text-sm font-medium text-gray-700">Ward <span className="text-red-500">*</span></label>
                        <input type="text" id="ward" name="ward" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Ward number"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="bed_no" className="block text-sm font-medium text-gray-700">Bed Number<span className="text-red-500">*</span></label>
                        <input type="text" id="bed_no" name="bed_no" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Bed number"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="concern_doctor" className="block text-sm font-medium text-gray-700">Concern Doctor <span className="text-red-500">*</span></label>
                        <input type="text" id="concern_doctor" name="concern_doctor" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Doctor's name"/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="referred_by" className="block text-sm font-medium text-gray-700">Referred By <span className="text-red-500">*</span></label>
                        <input type="text" id="referred_by" name="referred_by" className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Referred by"/>
                    </div>
                </div>
                <div className="mt-5">
                    <label htmlFor="clinical_diagnosis" className="block text-sm font-medium text-gray-700 mb-2">Clinical Diagnosis <span className="text-red-500">*</span></label>
                    <textarea id="clinical_diagnosis" name="clinical_diagnosis" rows={4} className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient condition, special requirements..."></textarea>
                </div>
            </div>
        </div>
    );
}