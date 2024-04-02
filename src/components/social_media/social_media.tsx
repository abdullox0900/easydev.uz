import { FaGithub, FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa"


function SocialMedia() {


    return (
        <ul className='flex items-center justify-center gap-[20px]'>
            <li>
                <a href="https://t.me/javascript_a" target='_blank'>
                    <FaTelegram />
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/@onecode31" target='_blank'>
                    <FaYoutube />
                </a>
            </li>
            <li>
                <a href="https://github.com/abdullox0900" target='_blank'>
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/abdullokh-abdusalomov-8bb59b225/" target='_blank'>
                    <FaLinkedin />
                </a>
            </li>
        </ul>
    )
}

export default SocialMedia