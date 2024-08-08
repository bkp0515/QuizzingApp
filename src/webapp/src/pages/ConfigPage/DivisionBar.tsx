// export enum DivisionType {
//     beginners = "Beginners",
//     intermediate = "Intermediate",
//     experienced = "Experienced",
// }

interface Props {
    changeDivisionFunc: any,
}

export const DivisionBar = (props: Props) => {
    return (
        <div>
            <select name="division" onChange={props.changeDivisionFunc} className="form-select form-select-lg mb-3" data-bs-theme="dark">
                <option value="beginners">Beginners</option>
                <option value="intermediate">Intermediate</option>
                <option value="experienced">Experienced</option>
            </select>
        </div>
    );
}