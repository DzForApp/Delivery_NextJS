import React from "react";
import Link from "next/link";
import { colorType } from "../../@types";
import { type } from "os";

type LogoProps = {
    variant: 'big' | 'normal' | 'notext'
    text_color: colorType
    className?: string 
}

const Logo = (props:LogoProps) => {
 
        const {variant, text_color, className} = props
        const logo_img = "/img/hamburger.png";
        switch (variant) {
            case "big":
                return (
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <img className="w-20 h-16 mr-4" src={logo_img}  />
                            <h1 className={`text-${text_color} text-4xl`}>Nibble</h1>
                        </div>
                    </Link>
                );
            case "normal":
                return (
                    <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <img className="w-1. h-8 mr-2" src={logo_img}  />
                        <h1 className={`text-${text_color} sm:block md:hidden text-lg font-bold`}>Nibble</h1>
                    </div>
                </Link>
                );
            case "notext":
                    return (
                        <Link href="/">
                            <div className={`${className} flex items-center cursor-pointer `}>
                                <img className=" w-20 h-16 " src={logo_img} />
                            </div>
                        </Link>
                    );
        
            default: return (
                    <>
                    </>
                )
            
        }
}
export default Logo