// Import React
import { useEffect, useState } from 'react'

// Import ReactRouterDom
import { NavLink } from 'react-router-dom'

// Import Type

// Import == Helmet Seo ==
import { Helmet } from 'react-helmet-async'

// Import ReactIcons
import { FcSurvey } from "react-icons/fc"

// Import FireBase
import { DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { JavaScriptData } from '../../lib/controller'
import { NewAllDataType } from '../../types/all'

// Import SrcComponents
import Main from '../../components/main/main'
import { TitleH1 } from '../../components/text_components/text_components'
import UserForm from '../../components/user_form/user_form'

// Import Library
import { LoadingOutlined } from '@ant-design/icons'
import { Button, Spin, Tag } from 'antd'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

type QuestionArrType = {
    id: number
    title: string
    level: string
    description: string
}


function JsPage() {

    const [isLoading, setIsLoading] = useState(true)
    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    const [mainData, setMainData] = useState<NewAllDataType[]>([])

    useEffect(() => {
        onSnapshot(JavaScriptData, (snapshot: QuerySnapshot<DocumentData>) => {
            setMainData(
                snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
            )
            setIsLoading(false)
        })
    }, [])

    console.log(mainData)

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
                        Jami savollar: {mainData.length}.</span>
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
                                    mainData?.map((item: QuestionArrType) => {
                                        return (
                                            <AccordionItem className='bg-slate-100' key={item.id}>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton style={{ borderBottom: '1px solid #e5e7eb' }} className='p-[13px] bg-white'>
                                                        {item.title}
                                                        {item.level == 'beginner' ? <Tag color="green">oson</Tag> : item.level == 'medium' ? <Tag color="orange">orta</Tag> : item.level == 'advance' ? <Tag color="red">qiyin</Tag> : ''}
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        {item.description}
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