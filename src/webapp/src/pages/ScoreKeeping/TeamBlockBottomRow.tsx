import { FoulButton } from "./FoulButton";

export const TeamBlockBottomRow = () => {
    return (
        <div className="row-component">
            <button className="btn">Timeout</button>
            <button className="btn">Contest</button>
            <button className="btn">W</button>
            <button className="btn">D</button>
            <button className="btn">G</button>
            <FoulButton />
        </div>
    );
}