// Import ReactRouter 
import { NavLink } from 'react-router-dom'

// Import ReactIcons
import { FcMoneyTransfer } from "react-icons/fc"

// Import LocComponents
import Container from '../container/container'

function Header() {
    return (
        <header className='border-b-[1px] py-[8px]'>
            <Container>
                <div className='flex justify-between items-center  my-[10px] rounded-[10px]'>
                    <NavLink to={'/'}>
                        <div className='flex items-center gap-[5px]'>
                            <span className='text-[25px] max-[375px]:text-[18px]'>👾</span>
                            <span className='text-[20px] text-slate-500 font-medium max-[375px]:text-[18px]'>EasyDev</span>
                        </div>
                    </NavLink>
                    <a className='flex items-center gap-[5px] border-slate-200 rounded-[10px] text-slate-500 border p-[8px] text-[14px] bg-white hover:bg-[#f3f3f3] max-[375px]:text-[11px]' href="https://tirikchilik.uz/" target='_blank'>
                        <FcMoneyTransfer size={20} />
                        Qo'llab-quvvatlash
                    </a>
                </div>
            </Container>
        </header>
    )
}

export default Header