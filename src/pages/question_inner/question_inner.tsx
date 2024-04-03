import axios from 'axios'
import { useEffect, useState } from 'react'
import { ImYoutube2 } from "react-icons/im"
import { useParams } from "react-router-dom"
import Main from '../../components/main/main'
import { TitleH1 } from '../../components/textComponents/textComponents'
import { Tooltip } from 'antd'




type InnerType = {
    q_name: string
}

function QuestionInner() {

    const [data, setData] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios(`https://6537a88fbb226bb85dd39095.mockapi.io/easydev/list/${id}`)
            .then(res => {
                setData(res?.data)
            })
    }, [])


    return (
        <>
            <Main>
                <div className='flex justify-between items-start'>
                    <TitleH1 className='text-[22px]'>{data?.q_name} </TitleH1>
                    <div>
                        <TitleH1 style={{ fontSize: '18px' }}>Javoblarga misollar:</TitleH1>

                        <ul className='flex flex-col gap-[6px]'>
                            <li>
                                <Tooltip title="Ulugbek Samigjonov">
                                    <a className='flex items-center gap-[5px] hover:underline group' href="https://www.youtube.com/watch?v=4aDeGEntGFw&list=PLpDyZ4xZcDg8fRiY6xgsQcDiMjNYJhNjE&index=3&t=28s" target='_blank'>
                                        <ImYoutube2 className='text-[22px] text-slate-500' />
                                        <span className='text-[14px] text-slate-500'>
                                            JavaScript nima?
                                        </span>
                                    </a>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Farkhod Dadajonov">
                                    <a className='flex items-center gap-[5px] hover:underline group' href="https://www.youtube.com/watch?v=DFyzRUsLwYE&list=PL_WK6W0Gn1I7bL0pRUxYSbTj6g8tHU6Yq&t=35" target='_blank'>
                                        <ImYoutube2 className='text-[22px] text-slate-500' />
                                        <span className='text-[14px] text-slate-500'>
                                            JavaScript asoslari. Kirish.?
                                        </span>
                                    </a>
                                </Tooltip>
                            </li>
                            <li>
                                <Tooltip title="Zokir Rakhomov">
                                    <a className='flex items-center gap-[5px] hover:underline group' href="https://www.youtube.com/watch?v=2k8Y4ARwuKI&list=PLBhH52c34vUR4ELOS3lTB7b3N7NJLrXuc&t=180s" target='_blank'>
                                        <ImYoutube2 className='text-[22px] text-slate-500' />
                                        <span className='text-[14px] text-slate-500'>
                                            JavaScript ozi nima?
                                        </span>
                                    </a>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </Main>
        </>
    )
}

export default QuestionInner