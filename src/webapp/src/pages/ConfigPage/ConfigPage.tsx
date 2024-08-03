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
    teamColor: string,
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
            teamMemberNames: ['','','','',''],
            teamColor: "red",
            points: 0,
        },
        yellowTeam: {
            teamMemberNames: ['','','','',''],
            teamColor: "yellow",
            points: 0,
        },
        verseFile: '',
        endingVerse: 0,
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Form Data: ', formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value})
    }

    return (
        <form onClick={handleSubmit}>
            <div className="container">
                <DivisionBar changeDivisionFunc={handleChange} />
                <TeamSection listOfTeams={[formData.redTeam.teamMemberNames, formData.yellowTeam.teamMemberNames]}/>
                <SubmitBar />
            </div>
        </form>
    );
}

export default ConfigPage