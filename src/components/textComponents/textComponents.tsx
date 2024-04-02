type ChildrenType = {
    children: React.ReactNode
    style?: React.CSSProperties
    className?: string
}

function TitleH1(props: ChildrenType) {
    return (
        <h1 style={props.style} className='text-[32px] mb-[25px] font-medium max-[450px]:text-[22px]'>{props.children}</h1>
    )
}

export { TitleH1 }
