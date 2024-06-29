import { Tooltip } from 'antd'
import { doc, getDoc } from 'firebase/firestore'
import 'prismjs/themes/prism-tomorrow.css'
import React, { useEffect, useState } from 'react'
import { ImYoutube2 } from 'react-icons/im'
import { TbWorldWww } from 'react-icons/tb'
import { useParams } from 'react-router-dom'
import Main from '../../components/main/main'
import MarkdownViewer from '../../components/MarkdownViewer/MarkdownViewer'
import { TitleH1, TitleH4 } from '../../components/text_components/text_components'
import { JavaScriptData, firestore } from '../../lib/controller'

interface ElementData {
    title?: string
    file?: string
    youtube?: { user_name: string; link: string; name: string }[]
    web?: { link: string; name: string }[]
}

const QuestionInner: React.FC = () => {
    const { id } = useParams<{ id: string }>()

    const [elementData, setElementData] = useState<ElementData | null>(null)
    const [isInnerLoading, setIsInnerLoading] = useState(true)

    useEffect(() => {
        const fetchElement = async () => {
            if (id) {
                try {
                    const docRef = doc(firestore, 'javascript', id)
                    const docSnap = await getDoc(docRef)
                    if (docSnap.exists()) {
                        setElementData(docSnap.data() as ElementData)
                        setIsInnerLoading(false)
                    } else {
                        console.log("Ma'lumot topilmadi!")
                    }
                } catch (error) {
                    console.error("Ma'lumotni olishda xatolik:", error)
                }
            }
        }

        fetchElement()

        return () => {
            // Cleanup function
        }
    }, [JavaScriptData, id])

    console.log(elementData)

    return (
        <Main>
            <div className='flex justify-between items-start'>
                <div className='w-[70%]'>
                    <TitleH1 style={{ fontSize: '22px' }}>{elementData?.title}</TitleH1>
                    <MarkdownViewer apiUrl={elementData?.file} />
                </div>

                <div className='w-[18%]'>
                    <TitleH4 style={{ fontSize: '18px' }}>Javoblarga misollar:</TitleH4>

                    {isInnerLoading ? (
                        <div className='flex flex-col gap-[10px] animate-pulse mb-[25px]'>
                            <div className="h-3 bg-slate-300 rounded"></div>
                            <div className="h-3 bg-slate-300 rounded"></div>
                        </div>
                    ) : (
                        <ul className='flex flex-col gap-[6px] mb-[25px]'>
                            {elementData?.youtube?.map((item, index) => (
                                <li key={index}>
                                    <Tooltip title={item.user_name}>
                                        <a className='flex items-center gap-[5px] hover:underline group' href={item.link} target='_blank' rel='noopener noreferrer'>
                                            <ImYoutube2 className='text-[22px] text-slate-500' />
                                            <span className='text-[14px] text-slate-500'>{item.name}</span>
                                        </a>
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    )}

                    <TitleH4 style={{ fontSize: '18px' }}>Saytlar:</TitleH4>

                    {isInnerLoading ? (
                        <div className='flex flex-col gap-[10px] animate-pulse mb-[25px]'>
                            <div className="h-3 bg-slate-300 rounded"></div>
                            <div className="h-3 bg-slate-300 rounded"></div>
                        </div>
                    ) : (
                        <ul className='flex flex-col gap-[6px] mb-[25px]'>
                            {elementData?.web?.map((item, index) => (
                                <li className='flex items-center gap-[5px]' key={index}>
                                    <TbWorldWww className='text-[18px] text-slate-500' />
                                    <a href={item.link} target='_blank' rel='noopener noreferrer' className='text-[14px] text-slate-500 hover:underline'>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </Main>
    )
}

export default QuestionInner
