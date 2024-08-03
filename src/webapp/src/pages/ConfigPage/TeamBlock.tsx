import { TeamMemberNameInputs } from "./TeamMemberNameInputs";
import { AddTeamMember } from "./AddTeamMember";
import {TeamInfo} from "../../components"
import { ListTeamMembers } from "./ListTeamMembers";

interface Props {
    team: TeamInfo,
    updateFunc: any,
    addTeamMemberFunc: any,
}

export const TeamBlock = (props: Props) => {
    return (
        <div className="team-block">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">10 Point Bonus</label>
            </div>

            <div className="input-group input-group-lg" data-bs-theme="dark">
                <span className="input-group-text">{props.team.teamColor} Team Name</span>
                <input value={props.team.teamName} onChange={props.updateFunc} name="teamName" type="text" className="form-control" aria-label="Team Name" />
            </div>
            
            {/* <TeamMemberNameInputs teamMemberNames={props.team.teamMemberNames}/> */}
            <ListTeamMembers teamMemberNames={props.team.teamMemberNames} />
            <AddTeamMember addTeamMemberFunc={props.addTeamMemberFunc} />
        </div>
    );
};