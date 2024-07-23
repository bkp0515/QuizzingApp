// export enum DivisionType {
//     beginners = "Beginners",
//     intermediate = "Intermediate",
//     experienced = "Experienced",
// }

export const DivisionBar = () => {
    return (
        <div>
            <select>
                <option value="beginners">Beginners</option>
                <option value="intermediate">Intermediate</option>
                <option value="experienced">Experienced</option>
            </select>
        </div>
    );
}