import { useState } from 'react'
import { TeamSection } from "./TeamSection"
import { SubmitBar } from "./SubmitBar"
import { DivisionBar } from "./DivisionBar";
import uniqid from 'uniqid';

import {DivisionType, TeamInfo, ConfigForm} from "../../components"

function ConfigPage() {

    const [formData, setFormData] = useState<ConfigForm>({
        division: DivisionType.beginners,
        teams: [
            {
                id: uniqid(),
                teamName: "Red Team",
                teamMemberNames: [],
                teamColor: "red",
                points: 0,
                bonusPts: true,
            },
            {
                id: uniqid(),
                teamName: "Yellow Team",
                teamMemberNames: [],
                teamColor: "yellow",
                points: 0,
                bonusPts: true,
            },
        ],
        verseFile: 'default',
        endingVerse: 0,
    })

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        console.log('Form Data: ', formData)
    }

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((currData) => {
            return {
                ...currData,
                [name]: value
            };
        })
    }

    const addTeamMembers = (teamId: string, newTeamMemberName: string) => {
        setFormData((currData) => {
            const updatedTeams = currData.teams.map((team: TeamInfo) => {
                if (team.id === teamId){
                    return {
                        ...team,
                        teamMemberNames: [...teamMemberNames, newTeamMemberName]
                    };
                }
            })
            return {
                ...currData,
                teams: updatedTeams,
            };
        } )
    }

    return (
        <form onClick={handleSubmit}>
            <div className="container">
                <DivisionBar changeDivisionFunc={handleChange} />
                <TeamSection updateFunc={handleChange} addTeamMemberFunc={addTeamMembers} teams={formData.teams}/>
                <SubmitBar updateVerseInfoFunc={handleChange} />
            </div>
        </form>
    );
}

export default ConfigPage