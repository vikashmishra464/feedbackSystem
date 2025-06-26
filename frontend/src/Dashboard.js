import { useEffect, useState } from "react";

function Dashboard() {
  const [feedbackData, setFeedbackData] = useState([]); // Should be an array
  const [showError, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/feedback")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch feedback");
        }
        return res.json(); 
      })
      .then((data) => {
        setFeedbackData(data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      });
      // console.log(feedbackData);
  }, []);

  return (
    <div>
      <h1>Feedback Dashboard</h1>

      {showError && <p style={{ color: "red" }}>Error: {showError}</p>}

      {feedbackData.length === 0 ? (
        <p>No feedback available.</p>
      ) : (
        <ul>
          {feedbackData.map((feedback, index) => (
            <li key={index}>
              <strong>{feedback.name}</strong> ({feedback.email}) - {feedback.feedbackType}
              <br />
              <em>{feedback.message}</em>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
