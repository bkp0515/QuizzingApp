import { FoulButton } from "./FoulButton";

export const TeamBlockBottomRow = () => {
    return (
        <div className="row-component spread-out">
            <button className="btn">Timeout</button>
            <div>
                <button className="btn">Contest</button>
                <button className="btn">W</button>
                <button className="btn">D</button>
                <button className="btn">G</button>
            </div>
            <FoulButton />
        </div>
    );
}