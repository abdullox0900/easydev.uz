import Container from '../container/container'
import SocialMedia from '../social_media/social_media'

function Footer() {
    return (
        <Container>
            <footer className='absolute bottom-[3%] left-[50%] translate-x-[-50%]'>
                <span className='block text-center text-[14px] text-slate-500 mb-[10px] max-[450px]:text-[12px]'>👾 easydev by <a href="https://www.a-abdullox.uz" target='_blank'>a-abdullox.uz</a></span>
                <SocialMedia />
            </footer>
        </Container>
    )
}

export default Footer