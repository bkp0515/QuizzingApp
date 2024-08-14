import {TeamMember} from "../../components"

interface Props {
    teamMembers: TeamMember[],
    teamId: string,
    removeTeamMemberFunc: any,
}

export const ListTeamMembers = (props: Props) => {
    return (
        <ul className="list-group" data-bs-theme="light">
            {props.teamMembers.map( (teamMember, idx) => {
                return <li key={idx} className="list-group-item quiz-list">{teamMember.name} <button className="btn btn-outline-danger" onClick={ () => {props.removeTeamMemberFunc(props.teamId,teamMember.name)} } type="button">Delete</button></li>
            } )}
        </ul>
    );
}