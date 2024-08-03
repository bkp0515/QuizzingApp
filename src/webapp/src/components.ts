export enum DivisionType {
    beginners = "Beginners",
    intermediate = "Intermediate",
    experienced = "Experienced",
}

export interface TeamInfo {
    id: string,
    bonusPts: boolean,
    teamName: string,
    teamMemberNames: string[],
    teamColor: string,
    points: number,
}

export interface ConfigForm {
    division: DivisionType,
    teams: TeamInfo[],
    verseFile: string,
    endingVerse: number,
}