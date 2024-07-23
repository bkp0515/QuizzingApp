import {TeamSection} from "./TeamSection"
import {SubmitBar} from "./SubmitBar"
import { DivisionBar } from "./DivisionBar";

function ConfigPage() {
    return (
        <div className="container">
            <DivisionBar />
            <TeamSection />
            <SubmitBar />
        </div>
    );
}

export default ConfigPage