export default function StatusContent({title, count, subTitle}: any) {
    return (
        <section className="group relative bg-white px-4 py-1 rounded-md shadow-xs border border-gray-200">
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-rose-700 rounded-full shadow-[0_0_6px_2px] shadow-rose-100/80" />
                        <span className="text-xs sm:text-[0.7rem] font-medium text-gray-400 uppercase tracking-widest">
                            {title}
                        </span>
                    </div>
                    <p className="text-xl font-bold text-gray-800">
                        {count}
                        <span className="ml-2 text-xs font-normal text-gray-400">{subTitle}</span>
                    </p>
                </div>

                <div className="p-2 rounded-xl bg-rose-50/40 group-hover:bg-rose-50/60 transition-colors shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-rose-700/90" viewBox="0 0 14 14">
                        <path fill="currentColor" fillRule="evenodd" d="M6.92.592L6.624.2h-.002l-.004.004l-.012.01a6 6 0 0 0-.21.167a17.4 17.4 0 0 0-2.315 2.338C2.826 4.262 1.514 6.462 1.514 8.956c0 1.655.692 2.91 1.733 3.738c1.028.819 2.37 1.206 3.673 1.206c1.304 0 2.646-.387 3.674-1.206c1.04-.829 1.733-2.083 1.733-3.738c0-2.494-1.312-4.694-2.567-6.237A17.4 17.4 0 0 0 7.445.38l-.21-.168l-.012-.01L7.219.2h-.002a.49.49 0 0 0-.593 0l.037.049zM5.906 5.449c0-.214.173-.387.387-.387h1.256c.214 0 .387.173.387.387v1.537h1.537c.214 0 .387.174.387.387V8.63a.387.387 0 0 1-.387.386H7.936v1.538a.387.387 0 0 1-.387.387H6.292a.387.387 0 0 1-.386-.387V9.016H4.368a.387.387 0 0 1-.386-.386V7.373c0-.213.173-.387.386-.387h1.538V5.45Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </section>
    );
}