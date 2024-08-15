import { TeamSection } from "./TeamSection";
import { VerseSection } from "./VerseSection";
import { ConfigSection } from "./ConfigSection";
import { ConfigForm } from "../../components";

interface Props {
    gameConfig: ConfigForm,
}

function ScoreKeeping(props: Props) {
    return (
        <div className="container">
            <ConfigSection division={props.gameConfig.division} />
            <TeamSection teams={props.gameConfig.teams} />
            <VerseSection />
        </div>
    );
}

export default ScoreKeeping