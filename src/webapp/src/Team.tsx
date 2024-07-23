import Quizzers from "./Quizzers.tsx"

interface Team {
    teamName: string,
    teamMembers: Quizzers[],
    points: number,
}

export default Team