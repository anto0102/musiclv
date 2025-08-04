const API_BASE_URL = 'https://TUA-API.onrender.com'; // <<--- cambia qui

async function search() {
  const query = document.getElementById("searchInput").value;
  if (!query) return alert("Inserisci una query!");

  const res = await fetch(`${API_BASE_URL}/api/search?q=${encodeURIComponent(query)}`);
  const data = await res.json();

  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";

  if (!data.tracks.length) {
    resultsList.innerHTML = "<li>Nessun risultato trovato.</li>";
    return;
  }

  data.tracks.forEach(track => {
    const li = document.createElement("li");
    li.innerHTML = `${track.info.title} — <a href="${track.info.uri}" target="_blank">Ascolta</a>`;
    resultsList.appendChild(li);
  });
}
