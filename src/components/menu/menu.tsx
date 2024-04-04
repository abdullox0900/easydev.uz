// Import React
import { useEffect, useState } from 'react'

// Import ReactRouterDom
import { NavLink } from 'react-router-dom'

// Import ReactIcons
import { SiJavascript, SiTypescript } from "react-icons/si"

// Import Library
import axios from 'axios'



function Menu() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://6537a88fbb226bb85dd39095.mockapi.io/easydev/list').then((res) => setData(res.data))
    }, [])

    const menu_list = [
        {
            id: 1,
            name: 'JavaScript',
            path: '/javascript',
            length: data.length,
            icon: <SiJavascript className='absolute bottom-0 right-0 text-[45px] group-hover:text-[#f0db4f] rotate-12 text-slate-400' />,
        },
        {
            id: 2,
            name: 'TypeScript',
            path: '/typescript',
            length: 0,
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