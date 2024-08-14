export enum DivisionType {
    beginners = "Beginners",
    juniors = "Juniors",
    intermediate = "Intermediate",
    experienced = "Experienced",
}

export interface TeamMember {
    id: string,
    name: string,
    interupts: number,
    correct: number,
    errors: number,
    fouls: number,
}

export interface TeamInfo {
    id: string,
    bonusPts: boolean,
    teamName: string,
    teamMembers: TeamMember[],
    teamColor: string,
    points: number,
    teamFouls: number,
}

export interface ConfigForm {
    division: DivisionType,
    teams: TeamInfo[],
    verseFile: string,
    endingVerse: number,
}

export enum QuizPages {
    ConfigForm = "configForm",
    Scoresheet = "scoresheet",
  }