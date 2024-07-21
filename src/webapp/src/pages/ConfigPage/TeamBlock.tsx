interface Props {
    color: string;
}

export const TeamBlock = (props: Props) => {
    return (
        <>
            <h1>{props.color} team</h1>
        </>
    );
};