const HeroPanel = ({title, text}: {title:string, text:string}) => {
    return (
        <div className="py-4 text-center w-50 m-auto">
            <h2>{title}</h2>
            <br/>
            <p>{text}</p>
        </div>);
}

export default HeroPanel;