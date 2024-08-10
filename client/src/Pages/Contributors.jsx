import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contributors.css';
import Preloader from '../Components/Preloader';

function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    async function fetchContributors() {
      let allContributors = [];
      let page = 1;

      try {
        while (true) {
          const response = await axios.get(
            `https://api.github.com/repos/Trisha-tech/OnlineBookSales/contributors`,
            {
              params: {
                per_page: 100,
                page,
              },
            }
          );
          const data = response.data;
          if (data.length === 0) {
            break;
          }
          allContributors = [...allContributors, ...data];
          page++;
        }
        setContributors(allContributors);
      } catch (error) {
        console.error('Error fetching contributors:', error.message);
        setError('Failed to load contributors. Please try again later.'); // Set error message
      } finally {
        setLoading(false);
      }
    }
    fetchContributors();
  }, []);

  if (loading) {
    return <Preloader />; // Show preloader while loading
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    ); // Show error message if there's an error
  }

  return (
    <div className="contributors-container">
      <h1 className="contributors-title">Our Contributors</h1>
      <div className="contributors-grid">
        {contributors.length > 0 ? (
          contributors.map((contributor) => (
            <div key={contributor.id} className="contributor-card">
              <a
                href={contributor.html_url}
                className="contributor-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="contributor-avatar"
                />
              </a>
              <h2 className="contributor-name">{contributor.login}</h2>
              <p className="contributor-contributions">
                Contributions: {contributor.contributions}
              </p>
            </div>
          ))
        ) : (
          <p>No contributors found.</p>
        )}
      </div>
    </div>
  );
}

export default Contributors;
