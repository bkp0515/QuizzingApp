import {TeamBlock} from "./TeamBlock"
import {TeamInfo} from "../../components"

interface Props {
    updateFunc: any,
    addTeamMemberFunc: any,
    removeTeamMemberFunc: any,
    modifyTeamAttributes: any,
    teams: TeamInfo[],
}

export const TeamSection = (props: Props) => {
    return (
        <div className="row-component">
            {props.teams.map( (team:TeamInfo, idx:number) => {
                return <TeamBlock key={idx} team={team} modifyTeamAttributes={props.modifyTeamAttributes} removeTeamMemberFunc={props.removeTeamMemberFunc} updateFunc={props.updateFunc} addTeamMemberFunc={props.addTeamMemberFunc} />
            } )}
        </div>
    );
}