"use client";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import Image from "next/image";

export default function InfoMenu({ includeLink = true }: { includeLink?: boolean }) {
    const tooltipId = "tooltip-manual";
    const icon = (
        <section data-tooltip-id={tooltipId} data-tooltip-content="Manual Docs" className="bg-green-100">

        <svg width="24" height="24" viewBox="0 0 496 496" fill="none">
            <rect width="496" height="496" fill="url(#pattern0_1_3)"/>
            <defs>
                <pattern id="pattern0_1_3" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1_3" transform="translate(-0.0155654 -0.0165208) scale(0.00201613)"/>
                </pattern>
                <image id="image0_1_3" width="512" height="512" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw..."/>
            </defs>
        </svg>
        </section>
    );

    return (
        <div>
            {includeLink ? (
                <Link href="https://docs.google.com/document/d/1Pn35Wq6r9Uxh_uervQvrZM3yfBoLRBkFshJJ_qbi4jo/edit?usp=sharing" aria-label="Manual Docs">
                    {icon}
                </Link>
            ) : (icon)}
            <Tooltip id={tooltipId} className="!hidden md:!block shadow z-50" />
        </div>
    );
}