import { useState } from "react"
import{ Search, Bell, LayoutDashboard, UserRound, ClipboardList, CalendarDays, Pill, FileText, Sparkles, Settings2  } from "lucide-react"
 function Patientdashboard() {
    const [Notifications, setNotifications] = useState(false);

    function showNotificatons(){
        setNotifications(!Notifications);
    }
        return(
            <>
            <div>
                <div className="flex h-[68px] items-center justify-between border-b border-slate-200 bg-white px-6">
                    <div className="text-3xl"><span className="text-indigo-700 font-extrabold">EMR</span> Medical</div>
                    <div className="flex h-11 w-[70%] rounded-2xl border border-slate-200">
                        <div className="mt-auto mb-auto p-3">
                                <Search size={13}/>
                        </div>
                        <input type="text" placeholder="Search doctors, appointments, records..." className="text-slate-700 w-full outline-none bg-transparent placeholder:text-slate-400" />
                    </div>
                    <div className="flex gap-2">
                        <div className="relative mt-auto mb-auto p-3">
                            <button onClick={showNotificatons}>
                                <Bell />
                            </button>
                
                            <div style={{ display: Notifications ? "block" : "none" }} className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-slate-200 bg-white p-3">
                                Notifications <span className="text-indigo-700">New</span>
                            </div>
                        </div>

                        <div className="border-slate-200 border-l pl-7">
                            <div>user login</div>
                            <div className="text-[10px]">patient/doctor</div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                <div className="p-5 border-r border-slate-200">
                    <button className="nav-item flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-700 transition-colors">
                        <LayoutDashboard className="h-[19px] w-[19px]" />
                        <span>Dashboard</span>
                    </button>
                    <button className="nav-item flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-700 transition-colors ">
                        <UserRound className="h-[19px] w-[19px]" />
                        <span>My Profile</span>
                    </button>
                    <button className="nav-item flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-700 transition-colors ">
                        <ClipboardList className="h-[19px] w-[19px]" />
                        <span>Medical History</span>
                    </button>
                    <button className="nav-item flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-700 transition-colors ">
                        <CalendarDays className="h-[19px] w-[19px]" />
                        <span>Appointsments</span>
                    </button>
                    <button className="nav-item flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-700 transition-colors ">
                        <Pill className="h-[19px] w-[19px]" />
                        <span>Prescriptions</span>
                    </button>
                    <button className="nav-item flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-700 transition-colors ">
                        <FileText className="h-[19px] w-[19px]" />
                        <span>Medical Reports</span>
                    </button>
                    <button className="nav-item flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-700 transition-colors ">
                        <Sparkles className="h-[19px] w-[19px]" />
                        <span>AI Assistant</span>
                    </button>
                    <div className=" mb-2 mt-5 px-3 text-[10px] font-bold uppercase text-slate-400">Preferences</div>
                    <button className="nav-item flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold hover:bg-indigo-100 hover:text-indigo-700 transition-colors ">
                        <Settings2 className="h-[19px] w-[19px]" />
                        <span>Settings</span>
                    </button>
                </div>
                <div>
                    <div></div>
                </div>
                </div>
            </div>
            </>
        );
    }
    export default Patientdashboard;