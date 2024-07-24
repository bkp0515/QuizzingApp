import { TeamMemberRow } from "./TeamMemberRow";
import { TeamBlockBottomRow } from "./TeamBlockBottomRow";

export const TeamBlock = () => {
    return (
        <div className="team-block">
            <table className="table">
                <TeamMemberRow />
                <TeamMemberRow />
                <TeamMemberRow />
            </table>

            <TeamBlockBottomRow />
        </div>
    );
}