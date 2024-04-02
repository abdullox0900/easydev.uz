import { FcSurvey } from "react-icons/fc"
import Main from '../../components/main/main'
import { TitleH1 } from '../../components/textComponents/textComponents'

import { LoadingOutlined } from '@ant-design/icons'
import { Spin, Tag } from 'antd'

import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion'

import axios from 'axios'
import { useEffect, useState } from 'react'
import 'react-accessible-accordion/dist/fancy-example.css'
import { Helmet } from 'react-helmet-async'

// type QuestionArrType = {
//     id: number
//     q_name: string
//     q_answer: string
//     q_type: string
//     q_language: string
// }

function TsPage() {

    // const [data, setData] = useState([])
    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     setIsLoading(true)
    //     axios.get('https://6537a88fbb226bb85dd39095.mockapi.io/easydev/list').then((res) => setData(res.data))
    //         .finally(() => {
    //             setIsLoading(false)
    //         })
    // }, [])

    return (
        <Main>
            <Helmet>
                <title>TypeScript bo‘yicha intervyu savollari</title>
                <meta name="description"
                    content="TypeScript intervyu savollari" />
                <link rel="canonical" href="https://www.easydev.uz/typescript" />
            </Helmet>
            <TitleH1>TypeScript bo‘yicha intervyu savollari</TitleH1>
            <div className='flex max-[650px]:flex-col max-[650px]:gap-[25px]'>
                {/* <div className='w-[30%]'>
                    <span className='flex items-center max-[650px]:w-[200px]'>
                        <FcSurvey />
                        Jami savollar: {data.length}.</span>
                </div>
                <div className='w-[70%] max-[650px]:w-full'>
                    {
                        isLoading ? (
                            <Spin
                                className='flex justify-center'
                                indicator={
                                    <LoadingOutlined
                                        style={{
                                            fontSize: 24,
                                        }}
                                        spin
                                    />
                                }
                            />
                        ) : (
                            <Accordion allowZeroExpanded style={{ borderRadius: '10px', overflow: 'hidden' }} className='bg-white border border-1 rounded-[10px]'>
                                {
                                    data.map((item: QuestionArrType) => {
                                        return (
                                            <AccordionItem className='bg-slate-100' key={item.id}>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton style={{ borderBottom: '1px solid #e5e7eb' }} className='p-[13px] bg-white'>
                                                        {item.q_name}   {item.q_type == 'beginner' ? <Tag color="green">oson</Tag> : item.q_type == 'medium' ? <Tag color="orange">Medium</Tag> : item.q_type == 'advance' ? <Tag color="red">Advance</Tag> : ''}
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        {item.q_answer}
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        )
                                    })
                                }
                            </Accordion>
                        )
                    }
                </div> */}
            </div>
        </Main>
    )
}

export default TsPage