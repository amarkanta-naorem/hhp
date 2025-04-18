"use client";

import Link from "next/link";
import { Tooltip } from "react-tooltip";

export default function SidebarRequestBloodMenu() {
    const tooltipId = "tooltip-blood-request";

    return (
        <div>
            <Link href="/dashboard/request/blood" aria-label="Request Blood">
                <section data-tooltip-id={tooltipId} data-tooltip-content="Request Blood" >
                    <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M30 10.56V25.44C30 27.72 29.79 29.34 29.25 30.495C29.25 30.51 29.235 30.54 29.22 30.555C28.89 30.975 28.455 31.185 27.945 31.185C27.15 31.185 26.19 30.66 25.155 29.55C23.925 28.23 22.035 28.335 20.955 29.775L19.44 31.785C18.84 32.595 18.045 33 17.25 33C16.455 33 15.66 32.595 15.06 31.785L13.53 29.76C12.465 28.335 10.59 28.23 9.35999 29.535L9.34497 29.55C7.64997 31.365 6.15003 31.635 5.28003 30.555C5.26503 30.54 5.25 30.51 5.25 30.495C4.71 29.34 4.5 27.72 4.5 25.44V10.56C4.5 8.28 4.71 6.66 5.25 5.505C5.25 5.49 5.25003 5.475 5.28003 5.46C6.13503 4.365 7.64997 4.635 9.34497 6.45L9.35999 6.465C10.59 7.77 12.465 7.665 13.53 6.24L15.06 4.215C15.66 3.405 16.455 3 17.25 3C18.045 3 18.84 3.405 19.44 4.215L20.955 6.225C22.035 7.665 23.925 7.77 25.155 6.45C26.19 5.34 27.15 4.815 27.945 4.815C28.455 4.815 28.89 5.04 29.22 5.46C29.25 5.475 29.25 5.49 29.25 5.505C29.79 6.66 30 8.28 30 10.56Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15.375H24" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 20.625H21" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </section>
            </Link>
            <Tooltip id={tooltipId} className="z-50 shadow" />
        </div>
    );
}
