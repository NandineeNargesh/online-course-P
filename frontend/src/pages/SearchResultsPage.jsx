import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import PageHeader from '../components/PageHeader';
import CourseCard from '../components/CourseCard';

const SearchResultsPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    if (!query) return;

    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/search?q=${query}`);
        setSearchResults(res.data.data);
      } catch (err) {
        console.error('Failed to fetch search results', err);
      }
      setLoading(false);
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <PageHeader 
        title={`Search Results for "${query}"`} 
        subtitle={`${searchResults.length} courses found.`}
      />
      <div className="container" style={{ padding: '40px 20px' }}>
        {loading ? (
          <p>Searching...</p>
        ) : (
          <div className="courses-container">
            {searchResults.length > 0 ? (
              searchResults.map(course => <CourseCard key={course._id} course={course} />)
            ) : (
              <p>No courses found matching your search.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;