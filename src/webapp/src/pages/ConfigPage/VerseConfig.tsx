export const VerseConfig = () => {
    return (
        <div className="container verseConfig" data-bs-theme="dark">
            <select defaultValue={"default"} className="form-select">
                <option value="default">2023-2024 Verses</option>
            </select>
            <input placeholder="Ending Verse" type="number" min={1} className="form-control" />
        </div>
    );
}