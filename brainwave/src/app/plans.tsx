import Image from "next/image";
import tick from "./assets/tick.png"
import styles from "./page.module.css";

const Plans = () => {

    return (
        <div className="d-flex flex-row justify-content-evenly">
            <Plan name="STARTER" price={10} />
            <Plan name="STANDARD" price={49} />
            <Plan name="PREMIUM" price={99} />
        </div>
    );
}

const Plan = ({ name, price }: { name: string, price: number }) => {
    return (
        <div className="d-flex flex-column border p-4">
            <h6 className="text-primary">{name}</h6>
            <p><span className={styles.font_large}>{price}</span>/Month</p>
            billed monthly
            <div className="m-4 p-4">
                <ListItem name="Unlimited Domains" isIncluded={true} />
                <ListItem name="Unlimited Domains" isIncluded={true} />
                <ListItem name="Unlimited Domains" isIncluded={true} />
                <ListItem name="Unlimited Domains" isIncluded={true} />
                <ListItem name="Unlimited Domains" isIncluded={true} />
                <ListItem name="Unlimited Domains" isIncluded={true} />
            </div>
            <button className="p-2">Start Free Trial</button>

        </div>)
}

const ListItem = ({ name, isIncluded }: { name: string, isIncluded: boolean }) => {

    return (
        <div className="flex-row">
            <Image src={isIncluded ? tick : tick} width={10} height={10} alt="icon" />
            {name}
        </div>
    );
}

export default Plans;