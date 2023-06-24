async function logJSONData() {
  try {
    fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=70b73008-d509-41fa-9ce4-1abe10fd23a6&offset=0"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status != "success") return;
        const matchDetails = data.data;

        if (!matchDetails) return [];
        const relevantData = matchDetails.map((match) => `${match.name}`);
        console.log({ relevantData });

        document.getElementById("matches").innerHTML = relevantData
          .map((match) => `<li>${match}</li>`)
          .join("");
        return relevantData;
      });
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

logJSONData();
