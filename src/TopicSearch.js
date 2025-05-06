import React, { useState } from 'react';
import "./TopicSearch.css"
const topicsData = [
    { id: 1, name: "Thermodynamics", category: "Physics" },
    { id: 2, name: "Photosynthesis", category: "Biology" },
    { id: 3, name: "Algebra", category: "Mathematics" },
    { id: 4, name: "Optics", category: "Physics" },
    { id: 5, name: "Evolution", category: "Biology" },
    {id: 6, name: "Areas and Volumes", category: "Mathematics"},
];

function TopicSearch() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTopics = topicsData.filter(topic =>
        topic.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="topic-search-container">
            <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {filteredTopics.length > 0 ? (
                filteredTopics.map((topic) => (
                    <div key={topic.id} className="topic-card">
                        <h3>{topic.name}</h3>
                        <p>{topic.category}</p>
                    </div>
                ))
            ) : (
                <p className="no-topics">No topics found</p>
            )}
        </div>

    );
}

export default TopicSearch;
