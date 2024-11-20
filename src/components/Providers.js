import React, { useState, useEffect } from "react";
import { fetchProviders } from "./services/providersService";

const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProviders = async () => {
      try {
        const data = await fetchProviders();
        setProviders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching providers:", error);
        setLoading(false);
      }
    };

    getProviders();
  }, []);

  if (loading) return <p>Loading providers...</p>;

  return (
    <div>
      <h2>Providers</h2>
      <ul>
        {providers.map((provider) => (
          <li key={provider.id}>{provider.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Providers;
