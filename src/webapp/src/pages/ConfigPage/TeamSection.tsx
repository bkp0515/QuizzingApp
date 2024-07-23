import {TeamBlock} from "./TeamBlock"

export const TeamSection = () => {
    return (
        <div className="row-component">
            <TeamBlock color="red" />
            <TeamBlock color="yellow" />
        </div>
    );
}