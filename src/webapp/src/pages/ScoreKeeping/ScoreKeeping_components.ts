import { TeamMember } from "../../components";

export interface RowInfo {
    currMember: TeamMember,
    buzzed: boolean,
    interrupt: boolean,
    correct: boolean,
    error: boolean,
    foul: boolean,
}