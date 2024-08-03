interface Props {
    teamMemberNames: string[]
}

export const ListTeamMembers = (props: Props) => {
    return (
        <ul className="list-group" data-bs-theme="light">
            {props.teamMemberNames.map( (name, idx) => {
                return <li key={idx} className="list-group-item quiz-list">{name} <button className="btn btn-outline-danger">Delete</button></li>
            } )}
        </ul>
    );
}