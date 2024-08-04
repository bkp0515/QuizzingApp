import { TeamMemberNameInputs } from "./TeamMemberNameInputs";
import { AddTeamMember } from "./AddTeamMember";
import {TeamInfo} from "../../components"
import { ListTeamMembers } from "./ListTeamMembers";

interface Props {
    team: TeamInfo,
    updateFunc: any,
    addTeamMemberFunc: any,
    removeTeamMemberFunc: any,
}

export const TeamBlock = (props: Props) => {
    return (
        <div className="team-block">
            <div className="form-check form-switch">
                <input name="bonusPts" className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">10 Point Bonus</label>
            </div>

            <div className="input-group input-group-lg" data-bs-theme="dark">
                <span className="input-group-text">{props.team.teamColor} Team Name</span>
                <input value={props.team.teamName} onChange={props.updateFunc} name="teamName" type="text" className="form-control" aria-label="Team Name" />
            </div>
            
            {/* <TeamMemberNameInputs teamMemberNames={props.team.teamMemberNames}/> */}
            <ListTeamMembers teamId={props.team.id} removeTeamMemberFunc={props.removeTeamMemberFunc} teamMemberNames={props.team.teamMemberNames} />
            {props.team.teamMemberNames.length < 5 && <AddTeamMember numOfMembers={props.team.teamMemberNames.length} teamId={props.team.id} addTeamMemberFunc={props.addTeamMemberFunc} />}
        </div>
    );
};