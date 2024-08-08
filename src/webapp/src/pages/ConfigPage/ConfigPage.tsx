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

        for (let team of formData.teams) {
            if (team.teamMemberNames.length < 2){
                return 0
            }
        }

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

    const modifyTeamAttributes = (teamId: string, name: string, value: any) => {
        setFormData((currData) => {
            const updatedTeams = currData.teams.map((team: TeamInfo) => {
                if (team.id === teamId){
                    return {
                        ...team,
                        [name]: value
                    };
                }
                return {...team};
            })

            return {
                ...currData,
                teams: updatedTeams,
            };
        } )
    }

    const addTeamMembers = (teamId: string, newTeamMemberName: string) => {
        setFormData((currData) => {
            const updatedTeams = currData.teams.map((team: TeamInfo) => {
                if (team.id === teamId){
                    return {
                        ...team,
                        teamMemberNames: [...team.teamMemberNames, newTeamMemberName]
                    };
                }
                return {...team};
            })

            return {
                ...currData,
                teams: updatedTeams,
            };
        } )
    }

    const removeTeamMembers = (teamId: string, nameToRemove: string) => {
        setFormData((currData) => {
            const updatedTeams = currData.teams.map((team: TeamInfo) => {
                if (team.id === teamId){
                    const newTeamMemberList = team.teamMemberNames.filter( name => name !== nameToRemove )
                    return {
                        ...team,
                        teamMemberNames: newTeamMemberList
                    };
                }
                return {...team};
            })

            return {
                ...currData,
                teams: updatedTeams,
            };
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">
                <DivisionBar changeDivisionFunc={handleChange} />
                <TeamSection modifyTeamAttributes={modifyTeamAttributes} removeTeamMemberFunc={removeTeamMembers} updateFunc={handleChange} addTeamMemberFunc={addTeamMembers} teams={formData.teams}/>
                <SubmitBar updateVerseInfoFunc={handleChange} />
            </div>
        </form>
    );
}

export default ConfigPage