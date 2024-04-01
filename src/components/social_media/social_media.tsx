import { FaGithub, FaTelegram, FaYoutube, FaLinkedin } from "react-icons/fa"


function SocialMedia() {


    return (
        <ul className='flex items-center justify-center gap-[20px]'>
            <li>
                <a href="#">
                    <FaTelegram />
                </a>
            </li>
            <li>
                <a href="#">
                    <FaYoutube />
                </a>
            </li>
            <li>
                <a href="#">
                    <FaGithub />
                </a>
            </li>
            <li>
                <a href="#">
                    <FaLinkedin />
                </a>
            </li>
        </ul>
    )
}

export default SocialMedia