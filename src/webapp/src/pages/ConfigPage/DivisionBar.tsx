// export enum DivisionType {
//     beginners = "Beginners",
//     intermediate = "Intermediate",
//     experienced = "Experienced",
// }

export const DivisionBar = ({changeDivisionFunc}) => {
    return (
        <div>
            <select name="division" onChange={changeDivisionFunc} className="form-select form-select-lg mb-3" data-bs-theme="dark">
                <option value="beginners">Beginners</option>
                <option value="intermediate">Intermediate</option>
                <option value="experienced">Experienced</option>
            </select>
        </div>
    );
}