"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Menu from "@/components/Menu"
import Reveal from "@/components/Reveal"

export default function MenuButton() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };   

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button onClick={handleClick}>
                <GiHamburgerMenu size={15} />
            </button>

            {isModalOpen && (
                <div onClick={handleClose} className="fixed inset-0 bg-black/30 z-[60] flex items-center justify-center">
                    <Menu/>
                </div>
            )}
        </>
    );
}