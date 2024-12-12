async function fetchData() {
    try {
      const Dog = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!Dog.ok) {
        throw new Error(`HTTP error! status: ${Dog.status}`);
      }
      const data = await Dog.json();
      // Handle your data
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle any errors
    }
    fetchData();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-dog');
    const RandomDog = document.getElementById('RandomDog');
  
    fetchButton.addEventListener('click', async () => {
      const data = await fetchData();
      if (data && data.message) {
        // Clear any previous image
        RandomDog.innerHTML = '';
  
        // Create a new image element
        const img = document.createElement('img');
        img.src = data.message; // Use the URL from the API response
        img.alt = 'Random Dog';
  
        // Add the image to the container
        RandomDog.appendChild(img);
        RandomDog2.appendChild(img);
      }
    });
  });