'use client';

import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faChartSimple} from "@fortawesome/free-solid-svg-icons";

const navigation = [
    {name: 'Dashboard', href: '#', current: true},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer() {
    return (
        <>
            <nav className="bg-gray-800 flex flex-col gap-y-4 justify-center items-center max-w-7xl mx-auto py-4">
                <div className="">
                    <a href="#">
                        <FontAwesomeIcon icon={faChartSimple}/>
                    </a>
                </div>
                <div className="">
                    <div className="flex bg-green-400 items-center gap-x-5">
                        <Link href="#" className="bg-red-500">
                            <FontAwesomeIcon icon={faFacebookF}/>
                        </Link>
                        <Link href="#" className="bg-red-500">
                            <FontAwesomeIcon icon={faTwitter}/>
                        </Link>
                        <Link href="#" className="bg-red-500">
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </Link>
                        <Link href="#" className="bg-red-500">
                            <FontAwesomeIcon icon={faYoutube}/>
                        </Link>
                        <Link href="#" className="bg-red-500">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="mx-auto grid grid-flow-col auto-cols-max justify-center gap-4">
                        <p>ABOUT</p>
                        <p>SUBSCRIBE</p>
                        <p>VC+</p>
                        <p>MASTHEAD</p>
                        <p>PRESS CENTER</p>
                        <p>CAREERS</p>
                    </div>
                    <div className="mx-auto grid grid-flow-col auto-cols-max justify-center gap-4">
                        <p>CONTACT US</p>
                        <p>FREQUENTLY ASKED QUESTIONS</p>
                        <p>STORE</p>
                        <p>USE OUR VISUALIZATIONS</p>
                        <p>LICENSING</p>
                        <p>ADVERTISE</p>
                    </div>
                    <div className="mx-auto grid grid-flow-col auto-cols-max justify-center gap-4">
                        <p>Copyright © 2023 Visual Capitalist</p>
                    </div>
                </div>
            </nav>
        </>
    )
}
