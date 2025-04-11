import { useState, useEffect, useRef } from "react";
import AttendantForm from "./AttendantForm";

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

interface BloodHelpModalProps {
  showBloodHelpModal: boolean;
  setShowBloodHelpModal: (show: boolean) => void;
}

export default function BloodHelpModal({
  showBloodHelpModal,
  setShowBloodHelpModal,
}: BloodHelpModalProps) {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowBloodHelpModal(false);
      }
    };

    if (showBloodHelpModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showBloodHelpModal, setShowBloodHelpModal]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("transfusion_till_date.")) {
      const field = name.split(".")[1] as keyof typeof formData.transfusion_till_date;
      const numValue = parseInt(value) || 0;
      setFormData((prev) => ({
        ...prev,
        transfusion_till_date: {
          ...prev.transfusion_till_date,
          [field]: numValue,
          total:
            numValue +
            (parseInt(prev.transfusion_till_date.PRBC.toString()) || 0) +
            (parseInt(prev.transfusion_till_date.SDP.toString()) || 0) +
            (parseInt(prev.transfusion_till_date["PC/RDP/PRP"].toString()) || 0) +
            (parseInt(prev.transfusion_till_date.FFP.toString()) || 0) +
            (parseInt(prev.transfusion_till_date.LD.toString()) || 0) -
            (parseInt((prev.transfusion_till_date[field] as number).toString()) || 0),
        },
      }));
    } else if (name.startsWith("replacement_till_date.")) {
      const field = name.split(".")[1] as keyof typeof formData.replacement_till_date;
      const numValue = parseInt(value) || 0;
      setFormData((prev) => ({
        ...prev,
        replacement_till_date: {
          ...prev.replacement_till_date,
          [field]: numValue,
          total:
            numValue +
            (parseInt(prev.replacement_till_date.Family.toString()) || 0) +
            (parseInt(prev.replacement_till_date.Relatives.toString()) || 0) +
            (parseInt(prev.replacement_till_date.Friends.toString()) || 0) +
            (parseInt(prev.replacement_till_date.Organisations.toString()) || 0) -
            (parseInt((prev.replacement_till_date[field] as number).toString()) || 0),
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/blood/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          setShowBloodHelpModal(false);
          setFormData({
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
        }, 5000);
      } else {
        throw new Error("Failed to submit blood request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showBloodHelpModal) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div ref={modalRef} className="bg-white/95 backdrop-blur-lg rounded-2xl mt-5 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/20 transform transition-all duration-300 ease-out animate-slideUp [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {!submitSuccess && (
          <div className="relative p-8 pb-0">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl"></div>
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-2 space-x-3">
                  {/*<div className="bg-red-100/80 p-2 rounded-lg mr-3">*/}
                  {/*  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                  {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>*/}
                  {/*  </svg>*/}
                  {/*</div>*/}
                  <div className="p-1.5 rounded-xl bg-rose-100/80 group-hover:bg-rose-50/60 transition-colors shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-rose-700/90" viewBox="0 0 14 14">
                      <path fill="currentColor" fillRule="evenodd" d="M6.92.592L6.624.2h-.002l-.004.004l-.012.01a6 6 0 0 0-.21.167a17.4 17.4 0 0 0-2.315 2.338C2.826 4.262 1.514 6.462 1.514 8.956c0 1.655.692 2.91 1.733 3.738c1.028.819 2.37 1.206 3.673 1.206c1.304 0 2.646-.387 3.674-1.206c1.04-.829 1.733-2.083 1.733-3.738c0-2.494-1.312-4.694-2.567-6.237A17.4 17.4 0 0 0 7.445.38l-.21-.168l-.012-.01L7.219.2h-.002a.49.49 0 0 0-.593 0l.037.049zM5.906 5.449c0-.214.173-.387.387-.387h1.256c.214 0 .387.173.387.387v1.537h1.537c.214 0 .387.174.387.387V8.63a.387.387 0 0 1-.387.386H7.936v1.538a.387.387 0 0 1-.387.387H6.292a.387.387 0 0 1-.386-.387V9.016H4.368a.387.387 0 0 1-.386-.386V7.373c0-.213.173-.387.386-.387h1.538V5.45Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Blood Request Form</h2>
                </div>
                <p className="text-gray-700 ml-14">Please fill all required fields</p>
              </div>
              <button onClick={() => setShowBloodHelpModal(false)} className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {submitSuccess ? (
          <div className="text-center p-12">
            <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-blue-50 mb-6">
              <div className="relative">
                <svg width="96" height="96" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.375C16 8.93437 15.8656 9.45312 15.5969 9.92813C15.3281 10.4031 14.9688 10.775 14.5156 11.0344C14.5281 11.1188 14.5344 11.25 14.5344 11.4281C14.5344 12.275 14.25 12.9937 13.6875 13.5875C13.1219 14.1844 12.4406 14.4812 11.6438 14.4812C11.2875 14.4812 10.9469 14.4156 10.625 14.2844C10.375 14.7969 10.0156 15.2094 9.54375 15.525C9.075 15.8438 8.55937 16 8 16C7.42812 16 6.90938 15.8469 6.44688 15.5344C5.98125 15.225 5.625 14.8094 5.375 14.2844C5.05312 14.4156 4.71562 14.4812 4.35625 14.4812C3.55937 14.4812 2.875 14.1844 2.30312 13.5875C1.73125 12.9937 1.44687 12.2719 1.44687 11.4281C1.44687 11.3344 1.45938 11.2031 1.48125 11.0344C1.02813 10.7719 0.66875 10.4031 0.4 9.92813C0.134375 9.45312 0 8.93437 0 8.375C0 7.78125 0.15 7.23438 0.446875 6.74062C0.74375 6.24687 1.14375 5.88125 1.64375 5.64375C1.5125 5.2875 1.44687 4.92812 1.44687 4.57188C1.44687 3.72813 1.73125 3.00625 2.30312 2.4125C2.875 1.81875 3.55937 1.51875 4.35625 1.51875C4.7125 1.51875 5.05312 1.58438 5.375 1.71563C5.625 1.20312 5.98438 0.790625 6.45625 0.475C6.925 0.159375 7.44063 0 8 0C8.55937 0 9.075 0.159375 9.54375 0.471875C10.0125 0.7875 10.375 1.2 10.625 1.7125C10.9469 1.58125 11.2844 1.51562 11.6438 1.51562C12.4406 1.51562 13.1219 1.8125 13.6875 2.40937C14.2531 3.00625 14.5344 3.725 14.5344 4.56875C14.5344 4.9625 14.475 5.31875 14.3562 5.64062C14.8562 5.87813 15.2563 6.24375 15.5531 6.7375C15.85 7.23438 16 7.78125 16 8.375ZM7.65938 10.7844L10.9625 5.8375C11.0469 5.70625 11.0719 5.5625 11.0437 5.40938C11.0125 5.25625 10.9344 5.13438 10.8031 5.05312C10.6719 4.96875 10.5281 4.94063 10.375 4.9625C10.2188 4.9875 10.0938 5.0625 10 5.19375L7.09062 9.56875L5.75 8.23125C5.63125 8.1125 5.49375 8.05625 5.34062 8.0625C5.18437 8.06875 5.05 8.125 4.93125 8.23125C4.825 8.3375 4.77187 8.47187 4.77187 8.63437C4.77187 8.79375 4.825 8.92813 4.93125 9.0375L6.77187 10.8781L6.8625 10.95C6.96875 11.0219 7.07812 11.0562 7.18437 11.0562C7.39375 11.0531 7.55313 10.9656 7.65938 10.7844Z" fill="#3897F0"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Request Submitted!</h3>
            <p className="text-gray-700 max-w-md mx-auto mb-8">Our team will contact you shortly to coordinate the blood donation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8 pt-6">
            <div className="space-y-4">
              <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-300 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">1</span>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="patient_name" className="block text-sm font-medium text-gray-700">Patient Name <span className="text-red-500">*</span></label>
                    <input type="text" id="patient_name" name="patient_name" value={formData.patient_name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient's full name"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="patient_phone_no" className="block text-sm font-medium text-gray-700" >Phone Number</label>
                    <input type="tel" id="patient_phone_no" name="patient_phone_no" value={formData.patient_phone_no} onChange={handleInputChange} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Active contact number"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age <span className="text-red-500">*</span></label>
                    <input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient's age"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender <span className="text-red-500">*</span></label>
                    <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="guardian_name" className="block text-sm font-medium text-gray-700">Guardian Name <span className="text-red-500">*</span></label>
                    <input type="text" id="guardian_name" name="guardian_name" value={formData.guardian_name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Guardian's full name"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address <span className="text-red-500">*</span></label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient's address"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="patient_blood_group" className="block text-sm font-medium text-gray-700">Patient Blood Group <span className="text-red-500">*</span></label>
                    <select id="patient_blood_group" name="patient_blood_group" value={formData.patient_blood_group} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
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
                <AttendantForm attendants={formData.attendants} handleAttendantChange={handleAttendantChange} addAttendant={addAttendant} removeAttendant={removeAttendant}/>
              </div>

              <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-300 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">2</span>
                  Blood Requirements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="blood_request_type" className="block text-sm font-medium text-gray-700">Requested Blood Type <span className="text-red-500">*</span></label>
                    <select id="blood_request_type" name="blood_request_type" value={formData.blood_request_type} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
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
                    <select id="number_of_units" name="number_of_units" value={formData.number_of_units} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num.toString()} className="text-gray-900">{num} unit{num !== 1 ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="haemoglobin" className="block text-sm font-medium text-gray-700">Haemoglobin <span className="text-red-500">*</span></label>
                    <input type="text" id="haemoglobin" name="haemoglobin" value={formData.haemoglobin} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Haemoglobin level"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="platelet_count" className="block text-sm font-medium text-gray-700">Platelet Count <span className="text-red-500">*</span></label>
                    <input type="text" id="platelet_count" name="platelet_count" value={formData.platelet_count} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Platelet count"/>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-lg font-semibold text-gray-800 mb-2">Transfusion Till Date</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="transfusion_till_date.PRBC" className="block text-sm font-medium text-gray-700">PRBC</label>
                      <input type="number" id="transfusion_till_date.PRBC" name="transfusion_till_date.PRBC" value={formData.transfusion_till_date.PRBC} onChange={handleInputChange} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="transfusion_till_date.SDP" className="block text-sm font-medium text-gray-700">SDP</label>
                      <input type="number" id="transfusion_till_date.SDP" name="transfusion_till_date.SDP" value={formData.transfusion_till_date.SDP} onChange={handleInputChange} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="transfusion_till_date.PC/RDP/PRP" className="block text-sm font-medium text-gray-700">PC/RDP/PRP</label>
                      <input type="number" id="transfusion_till_date.PC/RDP/PRP" name="transfusion_till_date.PC/RDP/PRP" value={formData.transfusion_till_date["PC/RDP/PRP"]} onChange={handleInputChange} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="transfusion_till_date.FFP" className="block text-sm font-medium text-gray-700">FFP</label>
                      <input type="number" id="transfusion_till_date.FFP" name="transfusion_till_date.FFP" value={formData.transfusion_till_date.FFP} onChange={handleInputChange} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="transfusion_till_date.LD" className="block text-sm font-medium text-gray-700">LD</label>
                      <input type="number" id="transfusion_till_date.LD" name="transfusion_till_date.LD" value={formData.transfusion_till_date.LD} onChange={handleInputChange} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="transfusion_till_date.total" className="block text-sm font-medium text-gray-700">Total</label>
                      <input type="number" id="transfusion_till_date.total" value={formData.transfusion_till_date.total} readOnly className="w-full px-4 py-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg outline-none transition-all"/>
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
                      <input type="number" id="replacement_till_date.Family" name="replacement_till_date.Family" value={formData.replacement_till_date.Family} onChange={handleInputChange} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="replacement_till_date.Relatives" className="block text-sm font-medium text-gray-700">Relatives</label>
                      <input type="number" id="replacement_till_date.Relatives" name="replacement_till_date.Relatives" value={formData.replacement_till_date.Relatives} onChange={handleInputChange} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="replacement_till_date.Friends" className="block text-sm font-medium text-gray-700">Friends</label>
                      <input type="number" id="replacement_till_date.Friends" name="replacement_till_date.Friends" value={formData.replacement_till_date.Friends} onChange={handleInputChange} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="replacement_till_date.Organisations" className="block text-sm font-medium text-gray-700">Organisations</label>
                      <input type="number" id="replacement_till_date.Organisations" name="replacement_till_date.Organisations" value={formData.replacement_till_date.Organisations} onChange={handleInputChange} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Units"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="replacement_till_date.total" className="block text-sm font-medium text-gray-700">Total</label>
                      <input type="number" id="replacement_till_date.total" value={formData.replacement_till_date.total} readOnly className="w-full px-4 py-3 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg outline-none transition-all"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-300 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">3</span>
                  Emergency Details
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">Hospital Name <span className="text-red-500">*</span></label>
                    <input type="text" id="hospital" name="hospital" value={formData.hospital} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Where is the patient?"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="hospital_address" className="block text-sm font-medium text-gray-700">Hospital Address <span className="text-red-500">*</span></label>
                    <input type="text" id="hospital_address" name="hospital_address" value={formData.hospital_address} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Hospital address"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="ward" className="block text-sm font-medium text-gray-700">Ward <span className="text-red-500">*</span></label>
                    <input type="text" id="ward" name="ward" value={formData.ward} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Ward number"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bed_no" className="block text-sm font-medium text-gray-700">Bed Number<span className="text-red-500">*</span></label>
                    <input type="text" id="bed_no" name="bed_no" value={formData.bed_no} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Bed number"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="concern_doctor" className="block text-sm font-medium text-gray-700">Concern Doctor <span className="text-red-500">*</span></label>
                    <input type="text" id="concern_doctor" name="concern_doctor" value={formData.concern_doctor} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Doctor's name"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="referred_by" className="block text-sm font-medium text-gray-700">Referred By <span className="text-red-500">*</span></label>
                    <input type="text" id="referred_by" name="referred_by" value={formData.referred_by} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Referred by"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="clinical_diagnosis" className="block text-sm font-medium text-gray-700">Clinical Diagnosis <span className="text-red-500">*</span></label>
                    <textarea id="clinical_diagnosis" name="clinical_diagnosis" value={formData.clinical_diagnosis} onChange={handleInputChange} required rows={4} className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patient condition, special requirements..."></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
              <button type="button" onClick={() => setShowBloodHelpModal(false)} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium">Cancel</button>
              <button type="submit" disabled={isSubmitting} className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700/90" viewBox="0 0 14 14">
                        <path fill="currentColor" fillRule="evenodd" d="M6.92.592L6.624.2h-.002l-.004.004l-.012.01a6 6 0 0 0-.21.167a17.4 17.4 0 0 0-2.315 2.338C2.826 4.262 1.514 6.462 1.514 8.956c0 1.655.692 2.91 1.733 3.738c1.028.819 2.37 1.206 3.673 1.206c1.304 0 2.646-.387 3.674-1.206c1.04-.829 1.733-2.083 1.733-3.738c0-2.494-1.312-4.694-2.567-6.237A17.4 17.4 0 0 0 7.445.38l-.21-.168l-.012-.01L7.219.2h-.002a.49.49 0 0 0-.593 0l.037.049zM5.906 5.449c0-.214.173-.387.387-.387h1.256c.214 0 .387.173.387.387v1.537h1.537c.214 0 .387.174.387.387V8.63a.387.387 0 0 1-.387.386H7.936v1.538a.387.387 0 0 1-.387.387H6.292a.387.387 0 0 1-.386-.387V9.016H4.368a.387.387 0 0 1-.386-.386V7.373c0-.213.173-.387.386-.387h1.538V5.45Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Submit request</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}