import Container from '../container/container'

type ChildrenProps = {
    children?: React.ReactNode
}

function Main(props: ChildrenProps) {
    return (
        <Container>
            <main className='py-[50px]'>{props.children}</main>
        </Container>
    )
}

export default Main