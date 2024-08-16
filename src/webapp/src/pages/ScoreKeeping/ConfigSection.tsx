import { DivisionType } from "../../components";

interface Props {
    division: DivisionType,
}

export const ConfigSection = (props: Props) => {
    return (
        <div className="row-component spread-out" data-bs-theme="dark">
            <h2>{props.division}</h2>
            <h3>00:00</h3>
            <div>
                <button className="btn">Settings</button>
                <button className="btn">Reset Question</button>
            </div>
        </div>
    );
}