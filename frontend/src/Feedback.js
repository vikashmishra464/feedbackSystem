import { useState } from 'react';

function FeedBack() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Feedback:', formData);
    try {
      const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      const result = await response.json();
      alert("Server response: " + result.message);

      // Reset form
      setFormData({
        name: '',
        email: '',
        feedbackType: '',
        message: ''
      });
    } catch (error) {
      alert("Error submitting feedback: " + error.message);
    }
  };

  return (
    <>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        /><br /><br />

        <label htmlFor="feedbackType">Feedback Type:</label><br />
        <select
          id="feedbackType"
          name="feedbackType"
          value={formData.feedbackType}
          onChange={handleChange}
          required
        >
          <option value="">--Select Type--</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Bug Report">Bug Report</option>
          <option value="Feature Request">Feature Request</option>
          <option value="Other">Other</option>
        </select><br /><br />

        <label htmlFor="message">Message:</label><br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows={4}
          required
        ></textarea><br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FeedBack;
