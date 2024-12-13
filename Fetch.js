
//Write asynchronous function that will fetch JSON package and implement error handling

async function fetchData() {
  try {
    const Dog = await fetch('https://dog.ceo/api/breeds/image/random');
     // First set in place error handler
    if (!Dog.ok) {
      throw new Error(`HTTP error! status: ${Dog.status}`);
    }
    // Set a variable that contains JSON package
    const data = await Dog.json();
    // Handle data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle any unaccounted errors
  }
}

document.addEventListener('DOMContentLoaded', () => {
  //Assign a variable to DOM element: button and divs to contain the images
  const fetchButton = document.getElementById('fetch-dog');
  const RandomDog = document.getElementById('RandomDog');
  const RandomDog2 = document.getElementById('RandomDog2');

  fetchButton.addEventListener('click', async () => {
    // Fetch two random dog images
    const data1 = await fetchData();
    const data2 = await fetchData();

    if (data1 && data1.message && data2 && data2.message) {
      // Clear any previous images by replacing the content of the div
      RandomDog.innerHTML = "";
      RandomDog2.innerHTML = "";

      // Create the first image element and limit 
      const img1 = document.createElement("img");
      img1.src = data1.message;
      img1.alt = "Random Dog 1";
      img1.style.width = "350px";
      img1.style.height = "250px";
      img1.style.objectFit = "contain";

      // Create the second image element
      const img2 = document.createElement("img");
      img2.src = data2.message;
      img2.alt = "Random Dog 2";
      img2.style.width = "350px";
      img2.style.height = "250px";
      img2.style.objectFit = "contain";

      // Add the images to the DOM
      RandomDog.appendChild(img1);
      RandomDog2.appendChild(img2);

      // Create reference to image of stick
      const stickImage = "https://www.shutterstock.com/shutterstock/videos/12974420/thumb/1.jpg?ip=x480";

      // Assign random numbers for each image click
      const randomNumber = Math.floor(Math.random() * 2); 
    

      img1.addEventListener('click', () => {
        if (randomNumber === 0) {
          img1.src = stickImage;
        }
      });

      img2.addEventListener('click', () => {
        if (randomNumber === 1) {
          img2.src = stickImage;
        }
      });
    }
  });
});
      
      
      
      
      
      
