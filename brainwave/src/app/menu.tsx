const Menu = () => {

    return (
        <div className="d-flex flex-row justify-content-between">
            <div>Brainwave.io</div>
            <div className="d-flex flex-row">
                <MenuItem name={"Demos"} />
                <MenuItem name={"Pages"} />
                <MenuItem name={"Support"} />
                <MenuItem name={"Contact"} />
                <MenuItem name={"Sign In"} />
                <MenuItem name={"Sign Up"} />
            </div>
        </div>
    );
}

const MenuItem = ({ name }: { name: string }) => {
    return (<div className="py-2 px-4">{name}</div>)
}

export default Menu;