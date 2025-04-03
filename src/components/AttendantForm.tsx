interface AttendantFormProps {
  attendants: { name: string; relation: string; phone: string }[];
  handleAttendantChange: (index: number, field: string, value: string) => void;
  addAttendant: () => void;
  removeAttendant: (index: number) => void;
}

export default function AttendantForm({
  attendants,
  handleAttendantChange,
  addAttendant,
  removeAttendant,
}: AttendantFormProps) {
  return (
    <div className="mt-4">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        Attendants
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Relation
          </label>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
        </div>
      </div>
      {attendants.map((attendant, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-center"
        >
          <div className="space-y-2">
            <input
              type="text"
              id={`attendant_name_${index}`}
              value={attendant.name}
              onChange={(e) =>
                handleAttendantChange(index, "name", e.target.value)
              }
              className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
              placeholder="Attendant's name"
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              id={`attendant_relation_${index}`}
              value={attendant.relation}
              onChange={(e) =>
                handleAttendantChange(index, "relation", e.target.value)
              }
              className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
              placeholder="Relation to patient"
            />
          </div>
          <div className="space-y-2 flex items-center gap-2">
            <input
              type="tel"
              id={`attendant_phone_${index}`}
              value={attendant.phone}
              onChange={(e) =>
                handleAttendantChange(index, "phone", e.target.value)
              }
              className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
              placeholder="Phone number"
            />
            <button
              type="button"
              onClick={() => removeAttendant(index)}
              className="text-red-600 hover:text-red-700 p-2"
            >
              <svg
                width="16"
                height="20"
                viewBox="0 0 17 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4516 5.44293L14.8144 18.6597C14.7837 19.3016 14.5104 19.8748 14.0899 20.2868C13.6685 20.6991 13.0988 20.9519 12.4757 20.9519H4.53396C3.91065 20.9519 3.34116 20.6996 2.91976 20.2871C2.49909 19.8753 2.22625 19.3018 2.1955 18.6597L1.55805 5.44752C1.36409 5.34828 1.18848 5.21792 1.03693 5.06204L1.01387 5.03627C0.669844 4.67017 0.457031 4.17269 0.457031 3.62801V2.72055C0.457031 2.48201 0.645289 2.28837 0.8772 2.28837H16.1238C16.3557 2.28837 16.544 2.48201 16.544 2.72055V3.62801C16.544 4.18519 16.3213 4.69288 15.9633 5.06127C15.8145 5.21485 15.6419 5.3442 15.4516 5.44293ZM12.856 8.0944L12.4638 8.07322L12.0184 16.8185L12.4105 16.8397L12.856 8.0944ZM12.0888 7.18999L13.3176 7.25633C13.5485 7.26832 13.7263 7.47114 13.7147 7.70865L13.2253 17.3144C13.2136 17.552 13.0165 17.7349 12.7855 17.7229L11.5568 17.6566C11.3259 17.6446 11.148 17.4417 11.1597 17.2042L11.649 7.59844C11.6607 7.36093 11.8579 7.178 12.0888 7.18999ZM4.15372 7.25633L5.38248 7.18999C5.6134 7.178 5.81059 7.36093 5.82224 7.59844L6.31161 17.2042C6.32327 17.4417 6.14543 17.6446 5.91451 17.6566L4.68575 17.7229C4.45483 17.7349 4.25765 17.552 4.24599 17.3144L3.75662 7.70865C3.74496 7.47114 3.9228 7.26832 4.15372 7.25633ZM5.00745 8.07322L4.61531 8.0944L5.06078 16.8397L5.45292 16.8185L5.00745 8.07322ZM8.12052 7.21474H9.35101C9.58293 7.21474 9.77118 7.40838 9.77118 7.64692V17.266C9.77118 17.5045 9.58293 17.6981 9.35101 17.6981H8.12052C7.88861 17.6981 7.70035 17.5045 7.70035 17.266V7.64692C7.70035 7.40838 7.88861 7.21474 8.12052 7.21474ZM8.93085 8.07909H8.54069V16.8338H8.93085V8.07909ZM6.98031 1.5123C6.7484 1.5123 6.56014 1.31866 6.56014 1.08012C6.56014 0.841585 6.7484 0.647949 6.98031 0.647949H10.0207C10.2526 0.647949 10.4409 0.841585 10.4409 1.08012C10.4409 1.31866 10.2526 1.5123 10.0207 1.5123H6.98031ZM2.40707 5.658L3.03236 18.6194C3.05196 19.0306 3.22732 19.3983 3.49718 19.6626C3.76654 19.9264 4.13239 20.0876 4.53396 20.0876H12.4757C12.8773 20.0876 13.2432 19.9258 13.5125 19.6623C13.7824 19.3977 13.958 19.0304 13.9776 18.6194L14.6024 5.65774L14.5696 5.65825H2.43138L2.40707 5.658ZM15.7036 3.15272H1.29737V3.62801C1.29737 3.94053 1.41791 4.22473 1.61237 4.43342L1.63073 4.45128C1.8361 4.66252 2.11985 4.79391 2.43138 4.79391H14.5696C14.8812 4.79391 15.1649 4.66252 15.3703 4.45128C15.5762 4.24106 15.7036 3.94946 15.7036 3.62801V3.15272Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addAttendant}
        className="text-red-600 hover:text-red-700 font-medium"
      >
        + Add Another Attendant
      </button>
    </div>
  );
}
