import useApi from "../../../shared/stores/api/ApiContext";
import postTextFileForScoringAsync from "../services/postTextFileForScoringAsync.js";
import MorScoreResultStore from "../stores/MorScoreResultStore.jsx";
export default function ScoringPage() {
  const { response, loading, scoreTextFileAsync } = MorScoreResultStore();
  const isInvalid = !!response?.error;
  console.log("scoreTextFileAsync in this thing is", scoreTextFileAsync);
  console.log("data: ", response?.data);
  return (
    <>
      <OutputMessage
        morScoreResult={response?.data}
        error={response?.error}
        loading={loading}
      />
      <FileInput scoreTextFileAsync={scoreTextFileAsync} />
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

function FileInput({ scoreTextFileAsync }) {
  const fileData = new FileReader();
  fileData.onloadend = async (e) => {
    await scoreTextFileAsync(e);
  };
  console.log("score text file here is", scoreTextFileAsync);

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
    </>
  );
}
