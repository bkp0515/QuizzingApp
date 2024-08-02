import { useState } from 'react'
import { TeamSection } from "./TeamSection"
import { SubmitBar } from "./SubmitBar"
import { DivisionBar } from "./DivisionBar";

enum DivisionType {
    beginners = "Beginners",
    intermediate = "Intermediate",
    experienced = "Experienced",
}

interface TeamInfo {
    teamMemberNames: string[],
    points: number,
}

interface ConfigForm {
    division: DivisionType,
    redTeam: TeamInfo,
    yellowTeam: TeamInfo,
    verseFile: string,
    endingVerse: number,
}

function ConfigPage() {

    const [formData, setFormData] = useState<ConfigForm>({
        division: DivisionType.beginners,
        redTeam: {
            teamMemberNames: [],
            points: 0,
        },
        yellowTeam: {
            teamMemberNames: [],
            points: 0,
        },
        verseFile: '',
        endingVerse: 0,
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Form Data: ', formData)
    }

    return (
        <form onClick={handleSubmit}>
            <div className="container">
                <DivisionBar />
                <TeamSection />
                <SubmitBar />
            </div>
        </form>
    );
}

export default ConfigPage