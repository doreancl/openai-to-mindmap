'use client';

const navigation = [
    {name: 'Dashboard', href: '#', current: true},
    {name: 'Team', href: '#', current: false},
    {name: 'Projects', href: '#', current: false},
    {name: 'Calendar', href: '#', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SubMenu() {
    return (
        <>
            <nav className="flex gap-x-5 items-center px-5 py-3">
                <>
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'px-3 py-2 bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md  text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                    ))}
                </>
            </nav>
        </>
    )
}
