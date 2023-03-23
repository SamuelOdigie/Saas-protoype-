import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [filterPrice, setFilterPrice] = useState("");
  const [filterSkill, setFilterSkill] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/mentors")
      .then((response) => response.json())
      .then((data) => {
        setMentors(data);
        setFilteredMentors(data);
      })
      .catch((error) => {
        console.error("Error fetching mentors:", error);
      });
  }, []);

  useEffect(() => {
    let filteredData = mentors;
    if (filterPrice) {
      filteredData = filteredData.filter(
        (mentor) => mentor.price_per_hour === parseInt(filterPrice)
      );
    }
    if (filterSkill) {
      filteredData = filteredData.filter(
        (mentor) =>
          mentor.skill1.toLowerCase() === filterSkill.toLowerCase() ||
          mentor.skill2.toLowerCase() === filterSkill.toLowerCase() ||
          mentor.skill3.toLowerCase() === filterSkill.toLowerCase()
      );
    }
    setFilteredMentors(filteredData);
  }, [mentors, filterPrice, filterSkill]);

  const handleFilterPrice = (event) => {
    setFilterPrice(event.target.value);
  };

  const handleFilterSkill = (event) => {
    setFilterSkill(event.target.value);
  };

  return (
    <div>
      <h1>Mentors</h1>
      <div className="filter-container">
        <label htmlFor="filterPrice">Filter by Price:</label>
        <input
          type="text"
          id="filterPrice"
          value={filterPrice}
          onChange={handleFilterPrice}
        />
        <label htmlFor="filterSkill">Filter by Skill:</label>
        <input
          type="text"
          id="filterSkill"
          value={filterSkill}
          onChange={handleFilterSkill}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skill 1</th>
            <th>Skill 2</th>
            <th>Skill 3</th>
            <th>Price per Hour(£)</th>
          </tr>
        </thead>
        <tbody>
          {filteredMentors.map((mentor) => (
            <tr key={mentor.id}>
              <td>{mentor.name}</td>
              <td>{mentor.skill1}</td>
              <td>{mentor.skill2}</td>
              <td>{mentor.skill3}</td>
              <td>{mentor.price_per_hour}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button type="button" class="btn btn-dark">
        Enquire now
      </button>
    </div>
  );
}

export default Mentors;
