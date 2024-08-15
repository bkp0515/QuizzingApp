import { FoulButton } from "./FoulButton";
import { TeamMember } from "../../components";
import { TeamMemberRow_UserDropdown } from "./TeamMemberRow_UserDropdown";

interface Props {
    currTeamMemberId: string,
    teamMembers: TeamMember[],
    answerBtnName: string,
}

export const TeamMemberRow = (props: Props) => {
    return (
        <div className="row-component spread-out">
            <h4>{props.currTeamMemberId}</h4>

            <div className="input-group">
                <button className="btn btn-outline-primary" type="button">{props.answerBtnName}</button>
                <button className="btn btn-outline-info" type="button">Interrupt</button>
            </div>

            <div className="input-group">
                <button className="btn btn-outline-success" type="button">Correct</button>
                <button className="btn btn-outline-warning" type="button">Error</button>
            </div>

            <FoulButton />
        </div>
    );
}