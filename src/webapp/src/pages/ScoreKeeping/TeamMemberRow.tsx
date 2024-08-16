import { FoulButton } from "./FoulButton";
import { TeamMember } from "../../components";
import { TeamMemberRow_UserDropdown } from "./TeamMemberRow_UserDropdown";
import { useState } from "react";
import { RowInfo } from "./ScoreKeeping_components"

interface Props {
    currRowConfig: RowInfo,
    teamMembers: TeamMember[],
    answerBtnName: string,
}

export const TeamMemberRow = (props: Props) => {
    const [rowState, setRowState] = useState<RowInfo>(props.currRowConfig)

    return (
        <div className="row-component spread-out">
            <h5>{rowState.currMember.name}</h5>

            <div className="input-group">
                <button className="btn btn-outline-primary btn-buzzer" type="button">{props.answerBtnName}</button>
                <button className="btn btn-outline-info btn-buzzer" type="button">I</button>
            </div>

            <div className="input-group">
                <button className="btn btn-outline-success btn-buzzer" type="button" disabled>C</button>
                <button className="btn btn-outline-warning btn-buzzer" type="button" disabled>E</button>
            </div>

            <FoulButton />
        </div>
    );
}