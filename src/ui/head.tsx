'use client';

import Image from "next/image";
import Link from "next/link";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faLinkedin,
    faSearchengin,
    faTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {faChartSimple} from "@fortawesome/free-solid-svg-icons";

export default function Head() {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="flex justify-between relative p-5">
                    <div className="flex bg-green-400 items-center gap-x-5">

                        <Link href="#" className="bg-red-500">
                            <FontAwesomeIcon icon={faFacebookF}/>
                            <FontAwesomeIcon icon={faTwitter}/>
                            <FontAwesomeIcon icon={faLinkedin}/>
                            <FontAwesomeIcon icon={faYoutube}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </Link>
                    </div>
                    <div className="flex absolute inset-0 justify-center">
                        <div className="flex space-x-4 items-center">
                            <a href="#">
                                <FontAwesomeIcon icon={faChartSimple}/>
                            </a>
                        </div>
                    </div>
                    <div className="flex  bg-amber-950 items-center">
                        <FontAwesomeIcon icon={faSearchengin} />
                    </div>
                </div>
            </nav>
        </>
    )
}
