import {TeamBlock} from "./TeamBlock"

export const TeamSection = ({listOfTeams}) => {
    return (
        <div className="row-component">
            {listOfTeams.map( (teamMembers: string[], idx:number) => {
                return <TeamBlock key={idx} teamMemberNames={teamMembers} color="Red" />
            } )}
        </div>
    );
}