import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contributors.css';
import '../Animations.css'
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
    <div className="contributors-container w-full h-full pt-8 overflow-hidden">
      <h1 className="contributors-title mt-0 text-center text-[#0077b6] text-4xl font-bold mb-8 uppercase">Our Contributors</h1>
      <div className="contributors-grid flex flex-wrap justify-center gap-8 mb-16">
        {contributors.length > 0 ? (
          contributors.map((contributor) => (
            <div key={contributor.id} className="contributor-card relative w-full max-w-[97%] md:max-w-[50%] lg:max-w-[400px] flex flex-col items-center bg-[#000055] border border-[#6969ff] rounded-lg shadow-md p-4 overflow-hidden transition-all duration-[400ms] ease-in-out hover:scale-105 hover:shadow-custom ">
              <a
                href={contributor.html_url}
                className="contributor-link block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="contributor-avatar w-20 h-20 rounded-[50%] object-cover mb-4 border-2 border-[#00b4d8] transition delay-[400ms] ease-in-out"
                />
              </a>
              <h2 className="contributor-name transition ease-in-out duration-[400ms] text-base font-semibold text-[#f3f4f6] mb-2">{contributor.login}</h2>
              <p className="contributor-contributions transition-shadow delay-[400ms] ease-in-out text-[#d1d5db]">
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
