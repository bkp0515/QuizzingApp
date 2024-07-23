import Team from "./Team.tsx"

interface Scoresheet {
    divisionType: DivisionType,
    redTeam: Team,
    yellowTeam: Team,
    verseFile: string,
    endVerse: string,
}

export enum DivisionType {
    beginners = "Beginners",
    intermediate = "Intermediate",
    experienced = "Experienced",
}

export default Scoresheet