import { SubmitBtn } from "./SubmitBtn";
import { VerseConfig } from "./VerseConfig";

export const SubmitBar = () => {
    return (
        <div className="row-component">
            <VerseConfig />
            <SubmitBtn />
        </div>
    );
}