import { useState } from "react";
import uniqid from 'uniqid';

interface Props {
    addTeamMemberFunc: any
    teamId: string,
    numOfMembers: number,
}

interface NewTeamMember {
    name: string
}

export const AddTeamMember = (props: Props) => {
    const [newTeamMember, setNewTeamMember] = useState<NewTeamMember>({name: `TeamMember_${uniqid()}`})

    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewTeamMember( (currName) => {
            return {
                ...currName,
                [name]: value
            };
        } )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (newTeamMember.name.length < 1){
            return 0
        }

        props.addTeamMemberFunc(props.teamId, newTeamMember.name)
        setNewTeamMember( (currName) => {
            return {
                ...currName,
                name: `TeamMember_${uniqid()}`
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