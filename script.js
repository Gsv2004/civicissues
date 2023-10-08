document
  .getElementById("issueForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const issueType = document.getElementById("issueType").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    const data = {
      issueType,
      location,
      description
    };

    try {
      const response = await fetch("http://localhost:1337/hackathons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Issue reported successfully!");
      } else {
        alert("Error reporting issue.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error reporting issue.");
    }
  });
