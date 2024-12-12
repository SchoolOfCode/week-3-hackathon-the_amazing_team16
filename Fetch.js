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
  const RandomDog2 = document.getElementById('RandomDog2');
  
  fetchButton.addEventListener('click', async () => {
    // Fetch two random dog images
    const data1 = await fetchData();
    const data2 = await fetchData();
  
    if (data1 && data1.message && data2 && data2.message) {
      // Clear any previous images
      RandomDog.innerHTML = '';
      RandomDog2.innerHTML = '';
  
      // Create the first image element
      const img1 = document.createElement('img');
      img1.src = data1.message;
      img1.alt = 'Random Dog 1';
  
      // Create the second image element
      const img2 = document.createElement('img');
      img2.src = data2.message;
      img2.alt = 'Random Dog 2';
  
      // Add the images to their respective containers
      RandomDog.appendChild(img1);
      RandomDog2.appendChild(img2);
    }
  });
  });