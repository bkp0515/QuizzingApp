import { TeamMemberNameInputs } from "./TeamMemberNameInputs";

interface Props {
    color: string;
}

let teamMemberNames = [
    {"id": 1, "name": "Teammate 1"},
    {"id": 2, "name": "Teammate 2"},
]

export const TeamBlock = (props: Props) => {
    return (
        <div className="team-block">
            <h2>{props.color} team</h2>
            <TeamMemberNameInputs teamMembers={teamMemberNames} />
        </div>
    );
};