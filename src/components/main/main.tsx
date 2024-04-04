// Import Type
import { ChildrenType } from '../../types/children'

// Import SrcComponents
import Container from '../container/container'


function Main(props: ChildrenType) {
    return (
        <Container>
            <main style={{ minHeight: 'calc(85vh - 25px)' }} className='py-[50px]'>{props.children}</main>
        </Container>
    )
}

export default Main