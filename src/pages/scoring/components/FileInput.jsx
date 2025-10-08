import postTextFileForScoringAsync from "../services/postTextFileForScoringAsync";

export default function FileInput() {
  const fileData = new FileReader();
  fileData.onloadend = async (e) => {
    const data = await postTextFileForScoringAsync({
      algorithm: "ORIGINAL_PURITAN",
      text: e.target.result,
    });
    console.log("data", data);
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
