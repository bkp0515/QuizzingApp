import { TeamBlock } from "./TeamBlock";
import { TeamInfo } from "../../components";

interface Props {
    teams: TeamInfo[],
}

export const TeamSection = (props: Props) => {
    return (
        <div className="row-component">
            {props.teams.map((team, idx) => {
                return <TeamBlock key={idx} teamInfo={team} />;
            })}
        </div>
    );
}