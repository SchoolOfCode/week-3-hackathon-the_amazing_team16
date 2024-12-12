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