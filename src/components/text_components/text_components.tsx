// Import Type
import { ChildrenType } from '../../types/children'

function TitleH1(props: ChildrenType) {
    return (
        <h1 style={props.style} className={`text-[32px] mb-[25px] font-medium max-[450px]:text-[22px] ${props.className}`}>{props.children}</h1>
    )
}

function TitleH4(props: ChildrenType) {
    return (
        <h4 style={props.style} className={`text-[18px] mb-[25px] font-medium max-[450px]:text-[16px] ${props.className}`}>{props.children}</h4>
    )
}

export { TitleH1, TitleH4 }
