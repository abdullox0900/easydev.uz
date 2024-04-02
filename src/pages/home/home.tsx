import { Helmet } from 'react-helmet-async'
import Main from '../../components/main/main'
import Menu from '../../components/menu/menu'
import { TitleH1 } from '../../components/textComponents/textComponents'

function Home() {
    return (
        <Main>
            <Helmet>
                <title>Easydev.uz</title>
                <meta name="description"
                    content="Easydev intervyu savollari" />
                <link rel="canonical" href="https://www.easydev.uz/javascript" />
            </Helmet>
            <TitleH1>Intervyu savollari</TitleH1>
            <Menu />
        </Main>
    )
}

export default Home