import "../../../base.css";
import "../design/scoring-page.css";
import { useState } from "react";
import MorScoreResultStore from "../stores/MorScoreResultStore.jsx";

export default function ScoringPage() {
  const { response, loading, scoreTextFileAsync, publishTextFileAsync } =
    MorScoreResultStore();
  return (
    <>
      <OutputMessage
        morScoreResult={response?.data}
        error={response?.error}
        loading={loading}
      />
      <FileInput
        scoreTextFileAsync={scoreTextFileAsync}
        publishTextFileAsync={publishTextFileAsync}
      />
    </>
  );
}

function OutputMessage({ morScoreResult, error, loading }) {
  if (!morScoreResult && !error) {
    return null;
  }
  if (loading) {
    return <div>LOADING...</div>;
  }
  if (!morScoreResult || !!error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <h2>{morScoreResult.category}</h2>
      <h3>Your score is:</h3>
      <h3>{morScoreResult.score}</h3>
      <div>Your offenses:</div>
      <ul>
        {morScoreResult.offenses.map((offense) => (
          <li key={offense}>{offense}</li>
        ))}
      </ul>
    </>
  );
}

function FileInput({ scoreTextFileAsync, publishTextFileAsync }) {
  const [shouldSave, setShouldSave] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const fileData = new FileReader();
  fileData.onloadend = shouldSave
    ? async (e) => await publishTextFileAsync(e, isPublic)
    : async (e) => await scoreTextFileAsync(e);
  return (
    <>
      <div className="input-here">INPUT YOUR TEXT FILE HERE</div>
      <input
        type="file"
        accept=".txt"
        onChange={(e) => {
          fileData.readAsText(e.target.files[0]);
        }}
      />
      <input
        type="checkbox"
        className="should-save"
        checked={shouldSave}
        onChange={(e) => {
          if (!e.target.checked) {
            // this allows "is public" box to uncheck itself when you uncheck "should save" checkbox
            setIsPublic(false);
          }
          setShouldSave(e.target.checked);
        }}
      />
      <input
        type="checkbox"
        className="is-public"
        checked={isPublic}
        onChange={(e) => setIsPublic(e.target.checked)}
      />
    </>
  );
}
