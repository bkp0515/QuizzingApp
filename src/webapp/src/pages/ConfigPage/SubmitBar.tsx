import { SubmitBtn } from "./SubmitBtn";
import { VerseConfig } from "./VerseConfig";

export const SubmitBar = ({updateVerseInfoFunc}) => {
    return (
        <div className="row-component submitBar">
            <VerseConfig updateVerseInfoFunc={updateVerseInfoFunc} />
            <SubmitBtn />
        </div>
    );
}