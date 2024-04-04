// Import React
import { useEffect, useState } from 'react'

// Import ReactRouterDom
import { useParams } from "react-router-dom"

// Import ReactIcons
import { TbWorldWww } from "react-icons/tb"
import { ImYoutube2 } from "react-icons/im"

// Import Library
import axios from 'axios'
import { Tooltip } from 'antd'

// Import SrcComponents
import Main from '../../components/main/main'
import { TitleH1, TitleH4 } from '../../components/text_components/text_components'


function QuestionInner() {

    const [data, setData] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios(`https://6537a88fbb226bb85dd39095.mockapi.io/easydev/list/${id}`)
            .then(res => {
                setData(res?.data)
            })
    }, [])

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    return (
        <>
            <Main>
                <div className='flex justify-between items-start'>
                    <div className='w-[80%]'>
                        <TitleH1 style={{ fontSize: '22px' }}>{data?.q_name} </TitleH1>
                    </div>

                    <div className='w-[18%]'>
                        <TitleH4 style={{ fontSize: '18px' }}>Javoblarga misollar:</TitleH4>

                        <ul className='flex flex-col gap-[6px] mb-[25px]'>
                            {
                                arr.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Tooltip title="Ulugbek Samigjonov">
                                                <a className='flex items-center gap-[5px] hover:underline group' href="https://www.youtube.com/watch?v=4aDeGEntGFw&list=PLpDyZ4xZcDg8fRiY6xgsQcDiMjNYJhNjE&index=3&t=28s" target='_blank'>
                                                    <ImYoutube2 className='text-[22px] text-slate-500' />
                                                    <span className='text-[14px] text-slate-500'>
                                                        JavaScript nima?
                                                    </span>
                                                </a>
                                            </Tooltip>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <TitleH4 style={{ fontSize: '18px' }}>Saytlar:</TitleH4>

                        <ul className='flex flex-col gap-[6px] mb-[25px]'>
                            {
                                arr.map((item, index) => {
                                    return (
                                        <li className='flex items-center gap-[5px]' key={index}>
                                            <TbWorldWww className='text-[18px] text-slate-500' />
                                            <a href="https://javascript.info/intro" target='_blank' className='text-[14px] text-slate-500 hover:underline'>JavaScript Info</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                </div>
            </Main>
        </>
    )
}

export default QuestionInner