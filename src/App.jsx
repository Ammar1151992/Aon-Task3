import { Nav } from "../components/Nav/Nav"
import { Header } from "../components/Header/Header"
import { BodySlider } from "../components/Body-slider/BodySlider"
import { Slider2 } from "../components/BodySlider-2/BodySlider2"
import { Footer } from "../components/Footer/Footer"
export const App = () => {
    return(
        <div>
            <Nav />
            <Header />
            <BodySlider />
            <Slider2 />
            <Footer />
        </div>
    )
}