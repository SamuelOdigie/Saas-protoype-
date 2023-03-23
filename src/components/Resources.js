import React from "react";

function Resources() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Skill</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Javascript</td>
          <td>
            <a
              href="https://www.codecademy.com/learn/introduction-to-javascript"
              target="_blank"
              rel="noreferrer"
            >
              full course on JavaScript
            </a>
          </td>
        </tr>
        <tr>
          <td>HTML and CSS</td>
          <td>
            <a
              href="https://www.youtube.com/watch?v=G3e-cpL7ofc"
              target="_blank"
              rel="noreferrer"
            >
              Html and css full course
            </a>
          </td>
        </tr>
        <tr>
          <td>Python</td>
          <td>
            <a
              href="https://www.youtube.com/watch?v=rfscVS0vtbw&t=2924s"
              target="_blank"
              rel="noreferrer"
            >
              Full Python tutorial, beginner to pro
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Resources;
