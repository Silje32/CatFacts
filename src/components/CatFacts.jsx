import { useState, useEffect } from "react";

export default function CatFacts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchFacts, setFetchFacts] = useState([]);

  useEffect(() => {
    const CatFact = async () => {
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
        setLoading(true);
        setError(null);
        const result = await response.json();
        setFetchFacts(result);
      } catch (error) {
        console.error("Kan ikke finne CatFacts:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    CatFact();
  }, [fetchFacts]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {fetchFacts && (
        <div>
          <h2>Her kommer det noe...</h2>
          <p>Her kommer det noe mer.</p>
        </div>
      )}
    </div>
  );
}
