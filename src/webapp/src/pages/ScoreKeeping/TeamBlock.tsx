import { TeamMemberRow } from "./TeamMemberRow";
import { TeamBlockBottomRow } from "./TeamBlockBottomRow";
import { TeamInfo } from "../../components";

interface Props {
    teamInfo: TeamInfo,
}

export const TeamBlock = (props: Props) => {
    return (
        <div className="team-block" data-bs-theme="dark">
            <table className="table">
                {props.teamInfo.teamMembers.map((member, idx) => {
                    return <TeamMemberRow key={member.id} answerBtnName={`${props.teamInfo.teamColor[0].toUpperCase()}${idx}`} currTeamMemberId={member.id} teamMembers={props.teamInfo.teamMembers} />
                })}
            </table>

            <TeamBlockBottomRow />
        </div>
    );
}