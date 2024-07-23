export const TeamMemberNameInputs = ({teamMembers}) => {
    return (
        <>
            {teamMembers.map((i) => (
                <input key={i.key} value={i.name}/>
            ))}
        </>
    );
}