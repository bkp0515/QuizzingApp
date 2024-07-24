import { TeamMemberNameInputs } from "./TeamMemberNameInputs";

interface Props {
    color: string;
}

export const TeamBlock = (props: Props) => {
    return (
        <div className="team-block">
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">10 Point Bonus</label>
            </div>

            <div className="input-group input-group-lg" data-bs-theme="dark">
                <span className="input-group-text">{props.color} Team Name</span>
                <input type="text" className="form-control" aria-label="Team Name" />
            </div>
            
            <TeamMemberNameInputs />
        </div>
    );
};