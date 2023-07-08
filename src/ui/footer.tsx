'use client';

const navigation = [
    {name: 'Dashboard', href: '#', current: true},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer() {
    return (
        <>
            <nav className="bg-gray-800">
                <div className="grid max-w-7xl mx-auto">
                    <div className="justify-center mx-auto">
                        <img
                            className="w-20"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                        />
                    </div>
                    <div className="justify-center">
                        <div className="h-20 mx-auto grid grid-flow-col auto-cols-max justify-center">
                            <img
                                className="w-20"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                            <img
                                className="w-20"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                            <img
                                className="w-20"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                        </div>
                    </div>
                    <div className="justify-center">
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
                        <div className="h-20 mx-auto grid grid-flow-col auto-cols-max justify-center gap-4">
                            <p>Copyright © 2023 Visual Capitalist</p>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
