import FileInput from "./FileInput";

export default function ScoringPage() {
  const { status, data, error } = {}; /** Todo: populate w/ fetch call */
  return (
    <>
      {/**
       *   If response.status = "LOADING" return "Calculating..."
       *   If response.status = "ERROR" goto errorPage, maybe w/ error msg sent, & return null just in case
       *   If response.status = "SUCCESS" return formatted score data
       *   base case (should literally never run): throw error & return null - throw error instead of just logging it b/c this can only happen thru faulting coding - there should be NO EDGE CASE where this happens
       */}
      <FileInput />
    </>
  );
}
