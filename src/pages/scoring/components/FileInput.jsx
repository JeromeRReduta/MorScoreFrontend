import postTextFileForScoringAsync from "../services/postTextFileForScoringAsync";

export default function FileInput() {
  const fileData = new FileReader();
  fileData.onloadend = async (e) => {
    const text = e.target.result;
    postTextFileForScoringAsync({ algorithm: "ORIGINAL_PURITAN", text });
  };

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
