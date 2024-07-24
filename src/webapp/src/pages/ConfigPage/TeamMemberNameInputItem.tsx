interface Props {
    id: number,
    name: string,
}

export const TeamMemberNameInputItem = (props: Props) => {
    return (
        <>
            <div className="input-group mb-3">
                    <input placeholder={`Team Member #${props.id}.`} className="form-control" data-bs-theme="dark" />
            </div>
        </>
    );
}