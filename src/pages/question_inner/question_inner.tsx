// Import React
import { useEffect, useState } from 'react'

// Import ReactRouterDom
import { useParams } from "react-router-dom"

// Import ReactIcons
import { TbWorldWww } from "react-icons/tb"
import { ImYoutube2 } from "react-icons/im"

// Import Library
import { Tooltip } from 'antd'

// Import SrcComponents
import Main from '../../components/main/main'
import { TitleH1, TitleH4 } from '../../components/text_components/text_components'

// Import FireBase
import { doc, getDoc } from 'firebase/firestore'
import { JavaScriptData, firestore } from '../../lib/controller'

function QuestionInner() {

    const { id } = useParams()

    const [elementData, setElementData] = useState<any>(null)
    const [isInnerLoading, setIsInnerLoading] = useState(true)

    useEffect(() => {
        const fetchElement = async () => {
            try {
                const docRef = doc(firestore, 'javascript', id)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setElementData(docSnap.data())
                    setIsInnerLoading(false)
                } else {
                    console.log("Ma'lumot topilmadi!")
                }
            } catch (error) {
                console.error("Ma'lumotni olishda xatolik:", error)
            }
        }

        fetchElement()

        // Unsubscribe from Firestore when component unmounts
        return () => {
            // Cleanup function
        }
    }, [JavaScriptData, id])

    return (
        <>
            <Main>
                <div className='flex justify-between items-start'>
                    <div className='w-[80%]'>
                        <TitleH1 style={{ fontSize: '22px' }}>{elementData?.title} </TitleH1>
                    </div>

                    <div className='w-[18%]'>
                        <TitleH4 style={{ fontSize: '18px' }}>Javoblarga misollar:</TitleH4>

                        {
                            isInnerLoading ? (
                                <div className='flex flex-col gap-[10px] animate-pulse mb-[25px]'>
                                    <div class="h-3 bg-slate-300 rounded"></div>
                                    <div class="h-3 bg-slate-300 rounded"></div>
                                </div>
                            ) : (
                                <ul className='flex flex-col gap-[6px] mb-[25px]'>
                                    {
                                        elementData?.youtube.map((item, index: number) => {
                                            return (
                                                <li key={index}>
                                                    <Tooltip title={item.user_name}>
                                                        <a className='flex items-center gap-[5px] hover:underline group' href={item.link} target='_blank'>
                                                            <ImYoutube2 className='text-[22px] text-slate-500' />
                                                            <span className='text-[14px] text-slate-500'>
                                                                {item.name}
                                                            </span>
                                                        </a>
                                                    </Tooltip>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        }

                        <TitleH4 style={{ fontSize: '18px' }}>Saytlar:</TitleH4>

                        {
                            isInnerLoading ? (
                                <div className=' flex flex-col gap-[10px] animate-pulse mb-[25px]'>
                                    <div className="h-3 bg-slate-300 rounded"></div>
                                    <div className="h-3 bg-slate-300 rounded"></div>
                                </div>
                            ) : (
                                <ul className='flex flex-col gap-[6px] mb-[25px]'>
                                    {
                                        elementData?.web.map((item, index: number) => {
                                            return (
                                                <li className='flex items-center gap-[5px]' key={index}>
                                                    <TbWorldWww className='text-[18px] text-slate-500' />
                                                    <a href={item.link} target='_blank' className='text-[14px] text-slate-500 hover:underline'>{item.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        }
                    </div>
                </div>
            </Main>
        </>
    )
}

export default QuestionInner