import HeroPanel from "./heroPanel";
import tick from "./assets/tick.png"
import { StaticImageData } from "next/image";
import Image from "next/image"

const Features = () => {

    return (
        <>
            <HeroPanel title="Check our features" text="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes." />
            <div className="d-flex flex-row justify-content-evenly">
                <Feature title="Quick Setup Process" image={tick} description="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes." />
                <Feature title="Quick Setup Process" image={tick} description="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes." />
                <Feature title="Quick Setup Process" image={tick} description="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes." />
            </div>
            <div className="d-flex flex-row justify-content-evenly">
                <Feature title="Quick Setup Process" image={tick} description="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes." />
                <Feature title="Quick Setup Process" image={tick} description="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes." />
                <Feature title="Quick Setup Process" image={tick} description="With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes." />
            </div>
        </>
    );
}

const Feature = ({ title, description, image }: { title: string, description: string, image: StaticImageData }) => {
    return (
        <div className="m-4 p-4 d-flex flex-row" >
            <Image src={image} width={30} height={30} alt="icon" className="me-2" />
            <div>
                <h6><b>{title}</b></h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Features;