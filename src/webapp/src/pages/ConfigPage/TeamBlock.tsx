interface Props {
    color: string;
}

export const TeamBlock = (props: Props) => {
    return (
        <div className="team-block">
            <h2>{props.color} team</h2>
            <input placeholder="Team Member Name"/>
        </div>
    );
};