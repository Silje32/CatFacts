import { useState, useEffect } from "react";

export default function CatFacts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fetchFacts, setFetchFacts] = useState([]);

  useEffect(() => {
    const CatFact = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
        if (!response.ok) {
          throw new Error("Fetching failed");
        }
        const result = await response.json();
        setFetchFacts(result);
      } catch (error) {
        console.error("Could not find CatFacts:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    CatFact();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {fetchFacts && (
        <div>
          <p>{fetchFacts}</p>
        </div>
      )}
    </div>
  );
}
