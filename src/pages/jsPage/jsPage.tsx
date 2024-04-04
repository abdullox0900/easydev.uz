import { FcSurvey } from "react-icons/fc"
import Main from '../../components/main/main'
import { TitleH1 } from '../../components/text_components/text_components'

import { LoadingOutlined } from '@ant-design/icons'
import { Button, Spin, Tag } from 'antd'

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

import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

import { DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { NavLink } from 'react-router-dom'
import UserForm from '../../components/user_form/user_form'
import { AllData } from '../../lib/controller'
import { NewAllDataType } from '../../types/all'

type QuestionArrType = {
    id: number
    q_name: string
    q_answer: string
    q_type: string
    q_language: string
}


function JsPage() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const [allData, setAllData] = useState<NewAllDataType[]>([])

    useEffect(() => {
        setIsLoading(true)
        axios.get('https://6537a88fbb226bb85dd39095.mockapi.io/easydev/list').then((res) => setData(res.data))
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        onSnapshot(AllData, (snapshot: QuerySnapshot<DocumentData>) => {
            setAllData(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
            )
        })
    }, [])

    console.log(allData)


    const [open, setOpen] = useState(false)

    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    return (
        <Main>
            <Helmet>
                <title>JavaScript bo‘yicha intervyu savollari</title>
                <meta name="description"
                    content="JavaScript intervyu savollari" />
                <link rel="canonical" href="https://www.easydev.uz/javascript" />
            </Helmet>

            <Modal
                open={open}
                onClose={onCloseModal}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}>
                <UserForm />
            </Modal>

            <div className='flex items-center justify-between mb-[30px]'>
                <TitleH1 style={{ margin: 0 }}>JavaScript bo‘yicha intervyu savollari</TitleH1>
                <Button onClick={onOpenModal}>Savol yuborish</Button>
            </div>

            <div className='flex max-[650px]:flex-col max-[650px]:gap-[25px]'>
                <div className='w-[25%]'>
                    <span className='flex items-center max-[650px]:w-[200px]'>
                        <FcSurvey />
                        Jami savollar: {data.length}.</span>
                </div>
                <div className='w-[75%] max-[650px]:w-full'>
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
                                                    <NavLink to={`/question_inner/${item.id}`}>More</NavLink>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        )
                                    })
                                }
                            </Accordion>
                        )
                    }
                </div>
            </div>
        </Main >
    )
}

export default JsPage