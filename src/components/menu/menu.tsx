import { SiJavascript, SiTypescript } from "react-icons/si"
import { NavLink } from 'react-router-dom'


function Menu() {

    const menu_list = [
        {
            id: 1,
            name: 'JavaScript',
            path: '/js',
            length: 23,
            icon: <SiJavascript className='absolute bottom-0 right-0 text-[45px] group-hover:text-[#f0db4f] rotate-12 text-slate-400' />,
        },
        {
            id: 2,
            name: 'TypeScript',
            path: '/ts',
            length: 15,
            icon: <SiTypescript className='absolute bottom-0 right-0 text-[45px] group-hover:text-[#3178c6] rotate-12 text-slate-400' />,
        },
    ]

    return (
        <section>
            <ul className='flex flex-wrap gap-[20px]'>
                {
                    menu_list.map(item => {
                        return (
                            <li key={item.id} className='flex flex-col relative group overflow-hidden p-[15px] w-[250px] h-[75px] border border-slate-200 rounded-[10px] transition shadow-md bg-white hover:bg-[#f3f3f3] max-[450px]:w-full'>
                                <NavLink to={item.path} className="text-[18px] text-blue-500 hover:underline">{item.name}</NavLink>
                                <span className='text-[11px] text-slate-400'>Q: {item.length}</span>
                                {item.icon}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Menu