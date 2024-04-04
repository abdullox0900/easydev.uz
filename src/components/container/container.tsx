// Import Type
import { ChildrenType } from '../../types/children'

function Container(props: ChildrenType) {
    return (
        <div style={{ maxWidth: '100%' }} className='w-[1150px] mx-auto px-[20px] max-[450px]:px-[15px]'>{props.children}</div>
    )
}

export default Container