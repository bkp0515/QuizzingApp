import { TeamMemberRow } from "./TeamMemberRow";
import { TeamBlockBottomRow } from "./TeamBlockBottomRow";
import { TeamInfo } from "../../components";
import { RowInfo } from "./ScoreKeeping_components";

interface Props {
    teamInfo: TeamInfo,
}

export const TeamBlock = (props: Props) => {
    return (
        <div className="team-block" data-bs-theme="dark">
            <table className="table">
                {props.teamInfo.teamMembers.map((member, idx) => {
                    const currRowConfig: RowInfo = {
                        currMember: member,
                        correct: false,
                        buzzed: false,
                        foul: false,
                        error: false,
                        interrupt: false,
                    }
                    if (idx >= 3) return null;

                    // return <TeamMemberRow key={member.id} answerBtnName={`${props.teamInfo.teamColor[0].toUpperCase()}${idx}`} currTeamMemberId={member.id} teamMembers={props.teamInfo.teamMembers} />
                    return <TeamMemberRow key={member.id} currRowConfig={currRowConfig} answerBtnName={`${props.teamInfo.teamColor[0].toUpperCase()}${idx}`} teamMembers={props.teamInfo.teamMembers} />
                })}
            </table>

            <TeamBlockBottomRow />
        </div>
    );
}