import React from "react";
import Image from "next/image";

interface Props {
    src: string;
    width: number;
    height: number;
}

export const CenterImage = ({ src, width, height }: Props) => {
    return (
        <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
            <Image
                src={src}
                width={width}
                height={height}
                alt = "Image"
                priority
            />
        </div>
    );
}
