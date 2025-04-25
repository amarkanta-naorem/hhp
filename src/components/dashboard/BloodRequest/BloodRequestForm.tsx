import React, { useEffect, useRef, useState } from "react";
import PersonalInformationForm from "@/components/dashboard/BloodRequest/WizardForm/PersonalInformationForm";
import BloodRequirementForm from "@/components/dashboard/BloodRequest/WizardForm/BloodRequirementForm";
import EmergencyDetailForm from "@/components/dashboard/BloodRequest/WizardForm/EmergencyDetailForm";
import ReviewForm from "@/components/dashboard/BloodRequest/WizardForm/ReviewForm";

interface FormData {
    patient_name: string;
    age: string;
    gender: string;
    patient_blood_group: string;
    guardian_name: string;
    address: string;
    patient_phone_no: string;
    attendants: { name: string; relation: string; phone: string }[];
    haemoglobin: string;
    platelet_count: string;
    hospital: string;
    hospital_address: string;
    ward: string;
    bed_no: string;
    clinical_diagnosis: string;
    blood_request_type: string;
    number_of_units: string;
    transfusion_till_date: {
        PRBC: number;
        SDP: number;
        "PC/RDP/PRP": number;
        FFP: number;
        LD: number;
        total: number;
    };
    replacement_till_date: {
        Family: number;
        Relatives: number;
        Friends: number;
        Organisations: number;
        total: number;
    };
    concern_doctor: string;
    referred_by: string;
}

export default function BloodRequestForm({ isModalOpen, setIsModalOpen }: any): React.ReactElement {
    const modalRef = useRef<HTMLDivElement>(null);
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState<FormData>({
        patient_name: "",
        age: "",
        gender: "",
        patient_blood_group: "",
        guardian_name: "",
        address: "",
        patient_phone_no: "",
        attendants: [{ name: "", relation: "", phone: "" }],
        haemoglobin: "",
        platelet_count: "",
        hospital: "",
        hospital_address: "",
        ward: "",
        bed_no: "",
        clinical_diagnosis: "",
        blood_request_type: "",
        number_of_units: "1",
        transfusion_till_date: {
            PRBC: 0,
            SDP: 0,
            "PC/RDP/PRP": 0,
            FFP: 0,
            LD: 0,
            total: 0,
        },
        replacement_till_date: {
            Family: 0,
            Relatives: 0,
            Friends: 0,
            Organisations: 0,
            total: 0,
        },
        concern_doctor: "",
        referred_by: "",
    });

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };

        isModalOpen && document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen, setIsModalOpen]);

    const handleAttendantChange = (index: number, field: string, value: string) => {
        setFormData((prev) => {
            const newAttendants = [...prev.attendants];
            newAttendants[index] = {
                ...newAttendants[index],
                [field]: value,
            };
            return {
                ...prev,
                attendants: newAttendants,
            };
        });
    };

    const addAttendant = () => {
        setFormData((prev) => ({
            ...prev,
            attendants: [...prev.attendants, { name: "", relation: "", phone: "" }],
        }));
    };

    const removeAttendant = (index: number) => {
        setFormData((prev) => {
            const newAttendants = prev.attendants.filter((_, i) => i !== index);
            return {
                ...prev,
                attendants: newAttendants.length > 0 ? newAttendants : [{ name: "", relation: "", phone: "" }],
            };
        });
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-xs flex justify-center items-center z-50 animate-fadeIn">
            <div ref={modalRef} className="relative bg-white/95 rounded-md backdrop-blur-lg shadow-2xl w-[95vw] sm:w-full sm:max-w-[75vw] max-h-[95vh] transform transition-all duration-300 ease-out animate-slideUp [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                <div className="relative p-4 sm:p-8 pb-0">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl"></div>
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col items-center sm:items-start">
                            <div className="flex items-center mb-2 space-x-3">
                                <div className="p-1.5 rounded-xl bg-rose-100/80 group-hover:bg-rose-50/60 transition-colors shadow-inner">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-rose-700/90" viewBox="0 0 14 14">
                                        <path fill="currentColor" fillRule="evenodd" d="M6.92.592L6.624.2h-.002l-.004.004l-.012.01a6 6 0 0 0-.21.167a17.4 17.4 0 0 0-2.315 2.338C2.826 4.262 1.514 6.462 1.514 8.956c0 1.655.692 2.91 1.733 3.738c1.028.819 2.37 1.206 3.673 1.206c1.304 0 2.646-.387 3.674-1.206c1.04-.829 1.733-2.083 1.733-3.738c0-2.494-1.312-4.694-2.567-6.237A17.4 17.4 0 0 0 7.445.38l-.21-.168l-.012-.01L7.219.2h-.002a.49.49 0 0 0-.593 0l.037.049zM5.906 5.449c0-.214.173-.387.387-.387h1.256c.214 0 .387.173.387.387v1.537h1.537c.214 0 .387.174.387.387V8.63a.387.387 0 0 1-.387.386H7.936v1.538a.387.387 0 0 1-.387.387H6.292a.387.387 0 0 1-.386-.387V9.016H4.368a.387.387 0 0 1-.386-.386V7.373c0-.213.173-.387.386-.387h1.538V5.45Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-900">Blood Request Form</h2>
                            </div>
                            <p className="text-sm sm:text-base text-gray-700 ml-8 sm:ml-14">Please fill all required fields</p>
                        </div>
                        <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100/50">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="relative py-3 px-2 sm:px-4 pb-5 w-full mx-auto">
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-100 transform -translate-y-1/2">
                        <div className="absolute h-full bg-gradient-to-r from-rose-500 to-rose-400 transition-all duration-500 ease-out" style={{ width: currentStep >= 2 ? '25%' : '0%', left: '15%'}}></div>
                        <div className="absolute h-full bg-gradient-to-r from-rose-500 to-rose-400 transition-all duration-500 ease-out" style={{ width: currentStep >= 3 ? '25%' : '0%', left: '37.5%' }}></div>
                        <div className="absolute h-full bg-gradient-to-r from-rose-500 to-rose-400 transition-all duration-500 ease-out" style={{ width: currentStep >= 4 ? '25%' : '0%', left: '60%' }}></div>
                    </div>

                    <div className="relative flex justify-between px-4 sm:px-8">
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="relative flex flex-col items-center z-10" style={{ width: '25%' }} >
                                <button onClick={() => setCurrentStep(step)} className={`relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 cursor-pointer ${ currentStep >= step ? 'bg-gradient-to-br from-rose-500 to-rose-600 shadow-lg shadow-rose-100 hover:shadow-rose-200 scale-110' : 'bg-white border-2 border-gray-300 hover:border-rose-200 hover:bg-rose-50' } ${currentStep === step ? 'ring-4 ring-rose-100' : ''}`}>
                                    {currentStep > step ? (
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                                        </svg>
                                    ) : (
                                        <span className={`font-semibold text-xs ${currentStep >= step ? 'text-white' : 'text-gray-400'}`}>{step}</span>
                                    )}
                                </button>

                                <span className={`absolute top-8 text-[0.65rem] sm:text-xs text-center font-medium transition-colors ${currentStep >= step ? 'text-rose-600' : 'text-gray-400'}`}>
                                    {step === 1 && "Personal Info"}
                                    {step === 2 && "Blood Reqs"}
                                    {step === 3 && "Emergency"}
                                    {step === 4 && "Review"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {currentStep === 1 ? (<PersonalInformationForm formData={formData} handleAttendantChange={handleAttendantChange} addAttendant={addAttendant} removeAttendant={removeAttendant} />) : currentStep === 2 ? (<BloodRequirementForm />) : currentStep === 3 ? (<EmergencyDetailForm />) : currentStep === 4 ? (<ReviewForm />) : null}

            </div>
        </div>
    );
}