// export enum DivisionType {
//     beginners = "Beginners",
//     intermediate = "Intermediate",
//     experienced = "Experienced",
// }

export const DivisionBar = () => {
    return (
        <div>
            <select className="form-select form-select-lg mb-3" data-bs-theme="dark">
                <option value="beginners" selected>Beginners</option>
                <option value="intermediate">Intermediate</option>
                <option value="experienced">Experienced</option>
            </select>
        </div>
    );
}