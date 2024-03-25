// Select the elements
const touristPlacesList = document.querySelector('.tourist-places ul');
const hotelsList = document.querySelector('.hotels ul');
const restaurantsList = document.querySelector('.restaurants ul');

// Function to create a list item with link and optional star rating
function createListItem(text, url, rating) {
  const listItem = document.createElement('li');
  const content = document.createElement(url ? 'a' : 'span');
  content.textContent = text;
  if (url) {
    content.href = url;
  }
  listItem.appendChild(content);
  if (rating) {
    const ratingSpan = document.createElement('span');
    ratingSpan.textContent = ` (${rating} stars on Google Maps)`;
    listItem.appendChild(ratingSpan);
  }
  return listItem;
}

// Add hotels with dummy data for some entries without links
hotelsList.appendChild(createListItem('Nexstay Treats Inn (₹1,679 per night)', null));
hotelsList.appendChild(createListItem('WHITE SUITE HOTEL (₹1,980 per night)', null));
hotelsList.appendChild(createListItem('Atmos inn (₹1,282 per night)', null));

// You can add similar logic to dynamically add restaurants with dummy data if needed
