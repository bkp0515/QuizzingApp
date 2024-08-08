interface Props {
    updateVerseInfoFunc: any,
}

export const VerseConfig = (props: Props) => {
    return (
        <div className="container verseConfig" data-bs-theme="dark">
            <select name="verseFile" onChange={props.updateVerseInfoFunc} className="form-select">
                <option value="default">2023-2024 Verses</option>
            </select>
            <input name="endingVerse" placeholder="Ending Verse" type="number" min={1} onChange={props.updateVerseInfoFunc} className="form-control" />
        </div>
    );
}