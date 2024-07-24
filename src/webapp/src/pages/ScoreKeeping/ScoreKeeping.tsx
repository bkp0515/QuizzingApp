import { TeamSection } from "./TeamSection";
import { VerseSection } from "./VerseSection";
import { ConfigSection } from "./ConfigSection";

function ScoreKeeping() {
    return (
        <div className="container">
            <ConfigSection />
            <TeamSection />
            <VerseSection />
        </div>
    );
}

export default ScoreKeeping