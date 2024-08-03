interface Props {
    id: number,
    name: string,
}

export const TeamMemberNameInputItem = (props: Props) => {
    return (
        <>
            <div className="input-group mb-3">
                    <input required={(props.id < 2)} placeholder={`Team Member #${props.id+1}.`} className="form-control" data-bs-theme="dark" />
            </div>
        </>
    );
}