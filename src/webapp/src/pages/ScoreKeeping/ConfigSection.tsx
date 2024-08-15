import { DivisionType } from "../../components";

interface Props {
    division: DivisionType,
}

export const ConfigSection = (props: Props) => {
    return (
        <div className="row-component" data-bs-theme="dark">
            <h2>{props.division}</h2>
            <button className="btn">Settings</button>
            <button className="btn">Reset Question</button>
        </div>
    );
}