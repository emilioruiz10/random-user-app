const userImage = document.getElementById("user-image");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userStreet = document.getElementById("user-street");
const userCity = document.getElementById("user-city");
const userState = document.getElementById("user-state");
const userCountry = document.getElementById("user-country");
const userPostcode = document.getElementById("user-postcode");
const userLatitude = document.getElementById("user-latitude");
const userLongitude = document.getElementById("user-longitude");
const userTimezone = document.getElementById("user-timezone");
const userDob = document.getElementById("user-dob");
const userAge = document.getElementById("user-age");
const userPhone = document.getElementById("user-phone");
const userUsername = document.getElementById("user-username");

const generateBtn = document.getElementById("generate-btn");

async function fetchRandomUser() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];

    userImage.src = user.picture.large;

    userName.textContent = `${user.name.first} ${user.name.last}`;

    userEmail.textContent = user.email;

    userStreet.textContent = `${user.location.street.number} ${user.location.street.name}`;
    userCity.textContent = user.location.city;
    userState.textContent = user.location.state;
    userCountry.textContent = user.location.country;
    userPostcode.textContent = user.location.postcode;

    userLatitude.textContent = user.location.coordinates.latitude;
    userLongitude.textContent = user.location.coordinates.longitude;

    userTimezone.textContent = `${user.location.timezone.offset}, ${user.location.timezone.description}`;

    const dobDate = new Date(user.dob.date);
    userDob.textContent = dobDate.toLocaleDateString();
    userAge.textContent = user.dob.age;

    userPhone.textContent = user.phone;

    userUsername.textContent = user.login.username;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

// Load a random user on page load
fetchRandomUser();

// Load a random user on button click
generateBtn.addEventListener("click", fetchRandomUser);
