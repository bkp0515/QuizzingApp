import { useState } from "react";
import { AddTeamMember } from "./AddTeamMember";
import {TeamInfo} from "../../components"
import { ListTeamMembers } from "./ListTeamMembers";

interface Props {
    team: TeamInfo,
    updateFunc: any,
    addTeamMemberFunc: any,
    removeTeamMemberFunc: any,
    modifyTeamAttributes: any,
}

interface TeamAttributes {
    teamName: string,
    bonusPts: boolean,
}

export const TeamBlock = (props: Props) => {
    const [teamAttr, setTeamAttr] = useState<TeamAttributes>({teamName: props.team.teamName, bonusPts: props.team.bonusPts})

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "bonusPts") value = (value === "no" ? true : false)
            
        setTeamAttr( (currTeamAttr) => {
            return {
                ...currTeamAttr,
                [name]: value
            };
        } )

        props.modifyTeamAttributes(props.team.id, name, value)
    }

    return (
        <div className="team-block">
            <div className="form-check form-switch">
                <input value={teamAttr.bonusPts ? "yes" : "no"} checked={teamAttr.bonusPts} onChange={handleChange} name="bonusPts" className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">10 Point Bonus</label>
            </div>

            <div className="input-group input-group-lg" data-bs-theme="dark">
                <span className="input-group-text">Team Name</span>
                <input value={props.team.teamName} onChange={handleChange} name="teamName" type="text" className="form-control" aria-label="Team Name" />
            </div>

            <div>
                <h5 className="card-subtext">{props.team.teamMemberNames.length}/5 Teammates</h5>
                {props.team.teamMemberNames.length < 2 && <div className="alert alert-danger" role="alert" data-bs-theme="dark">At least 2 Teammates Required!</div>}
            </div>
            
            <ListTeamMembers teamId={props.team.id} removeTeamMemberFunc={props.removeTeamMemberFunc} teamMemberNames={props.team.teamMemberNames} />
            {props.team.teamMemberNames.length < 5 && <AddTeamMember numOfMembers={props.team.teamMemberNames.length} teamId={props.team.id} addTeamMemberFunc={props.addTeamMemberFunc} />}
        </div>
    );
};