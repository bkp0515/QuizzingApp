import { useState } from "react";
import uniqid from 'uniqid';
import { TeamMember } from "../../components";

interface Props {
    addTeamMemberFunc: any
    teamId: string,
    numOfMembers: number,
}

export const AddTeamMember = (props: Props) => {
    const [newTeamMember, setNewTeamMember] = useState<TeamMember>({
        id: uniqid(),
        name: `TeamMember_${uniqid()}`,
        correct: 0,
        errors: 0,
        fouls: 0,
        interupts: 0,
    })

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;

        setNewTeamMember( (currName) => {
            return {
                ...currName,
                [name]: value
            };
        } )
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        if (newTeamMember.name.length < 1){
            return 0
        }

        props.addTeamMemberFunc(props.teamId, newTeamMember)
        setNewTeamMember( (currName) => {
            return {
                ...currName,
                id: uniqid(),
                name: `TeamMember_${uniqid()}`,
            };
        })
    }

    return (
        <div className="input-group mb-3">
            <input name="name" placeholder="Team Member Name" className="form-control" data-bs-theme="dark" onChange={handleChange} value={newTeamMember.name} />
            <button onClick={handleSubmit} className="btn btn-outline-primary">Add</button>
        </div>
    );
}