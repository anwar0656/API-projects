// const apiKey = "b3e9a72387ef47eaa6f8ac68f5537987"; // Your provided API key

// async function getNews() {
//     const query = document.getElementById("search-query").value;
//     const newsContainer = document.getElementById("news-container");

//     // Clear the previous results
//     newsContainer.innerHTML = "";

//     if (!query) {
//         alert("Please enter a keyword or location.");
//         return;
//     }

//     try {
//         const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.status !== "ok" || data.totalResults === 0) {
//             newsContainer.innerHTML = "<p>No news articles found for this query.</p>";
//             return;
//         }

//         // Display news articles
//         data.articles.forEach(article => {
//             const articleCard = document.createElement("div");
//             articleCard.classList.add("news-card");

//             articleCard.innerHTML = `
//                 <img src="${article.urlToImage || 'https://via.placeholder.com/300x200'}" alt="News Image">
//                 <div class="content">
//                     <h2>${article.title}</h2>
//                     <p>${article.description || 'No description available.'}</p>
//                     <a href="${article.url}" target="_blank">Read more</a>
//                 </div>
//             `;

//             newsContainer.appendChild(articleCard);
//         });
//     } catch (error) {
//         console.error("Error fetching news:", error);
//         newsContainer.innerHTML = "<p>There was an error fetching the news. Please try again later.</p>";
//     }
// }const apiKey = "b3e9a72387ef47eaa6f8ac68f5537987"; // Your provided API key

// async function getNews() {
//     const query = document.getElementById("search-query").value;
//     const newsContainer = document.getElementById("news-container");

//     // Clear the previous results
//     newsContainer.innerHTML = "";

//     if (!query) {
//         alert("Please enter a keyword or location.");
//         return;
//     }

//     try {
//         const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.status !== "ok" || data.totalResults === 0) {
//             newsContainer.innerHTML = "<p>No news articles found for this query.</p>";
//             return;
//         }

//         // Display news articles
//         data.articles.forEach(article => {
//             const articleCard = document.createElement("div");
//             articleCard.classList.add("news-card");

//             articleCard.innerHTML = `
//                 <img src="${article.urlToImage || 'https://via.placeholder.com/300x200'}" alt="News Image">
//                 <div class="content">
//                     <h2>${article.title}</h2>
//                     <p>${article.description || 'No description available.'}</p>
//                     <a href="${article.url}" target="_blank">Read more</a>
//                 </div>
//             `;

//             newsContainer.appendChild(articleCard);
//         });
//     } catch (error) {
//         console.error("Error fetching news:", error);
//         newsContainer.innerHTML = "<p>There was an error fetching the news. Please try again later.</p>";
//     }
// }
// Wait for the document to be fully loaded
// Ensure the DOM is loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Target the search button
    const searchButton = document.getElementById("search-button");

    // Event listener for button click
    searchButton.addEventListener("click", function() {
        const searchQuery = document.getElementById("search-query").value;
        getNews(searchQuery);
    });
});

// Function to get news based on the search query
function getNews(query) {
    if (!query) {
        alert("Please enter a keyword or location.");
        return;
    }

    // Assuming you have an API to fetch news
    const apiKey = 'your-api-key-here'; // Use a real API key
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById("news-container");
            newsContainer.innerHTML = ''; // Clear previous results

            if (data.articles.length > 0) {
                data.articles.forEach(article => {
                    const articleElement = document.createElement("div");
                    articleElement.classList.add("news-article");
                    articleElement.innerHTML = `
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    `;
                    newsContainer.appendChild(articleElement);
                });
            } else {
                newsContainer.innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            alert("Failed to fetch news. Please try again later.");
        });
}
