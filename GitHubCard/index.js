/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/CalebAllard')
      .then(response =>{
        console.log(response);
        document.querySelector('.cards').appendChild(createUserCard(response.data));


      })
      .catch(error =>{
        console.log(`error: ${error}`);
      });
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

  followersArray.forEach( users => {
    axios.get(`https://api.github.com/users/${users}`)
      .then(response =>{
        console.log(response);
        document.querySelector('.cards').appendChild(createUserCard(response.data));


      })
      .catch(error =>{
        console.log(`error: ${error}`);
      });
  })

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
function createUserCard(userInfo){
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  const cardImg = document.createElement('img');
  cardImg.setAttribute('src', userInfo['avatar_url']);
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  const Name = document.createElement('h3');
  Name.classList.add('name');
  Name.innerText = `${userInfo['name']}`;
  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.innerText = `${userInfo['login']}`;
  const location = document.createElement('p');
  location.innerText =`Location: ${userInfo['location']}`;
  const profile = document.createElement('p');
  profile.innerText = `Profile: `;
  const profileLink = document.createElement('a');
  profileLink.setAttribute('href',userInfo['html_url']);
  profileLink.innerText = `${userInfo['html_url']}`;
  const followers = document.createElement('p');
  followers.innerText = `Followers: ${userInfo['followers']}`;
  const following = document.createElement('p');
  following.innerText = `Following: ${userInfo['folloing']}`;
  const bio = document.createElement('p');
  bio.innerText = `Bio: ${userInfo['bio']}`;

  // nest elements
  newCard.appendChild(cardImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(Name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  console.log(newCard);
  return newCard;

}




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
