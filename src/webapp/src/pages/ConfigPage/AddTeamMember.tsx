interface Props {
    addTeamMemberFunc: any
}

export const AddTeamMember = (props: Props) => {
    return (
        <div className="input-group mb-3">
            <input placeholder="Team Member Name" className="form-control" data-bs-theme="dark" />
            <button className="btn btn-outline-primary">Add</button>
        </div>
    );
}