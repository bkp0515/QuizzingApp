import { TeamMemberNameInputItem } from "./TeamMemberNameInputItem";

export const TeamMemberNameInputs = ({teamMemberNames}) => {
    return (
        <>
            {teamMemberNames.map( (name: string, idx: any) => {
                return <TeamMemberNameInputItem key={idx} id={idx} name={name} />
            })}
        </>
    );
}