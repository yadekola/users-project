document.addEventListener('DOMContentLoaded', () => {
    const userProfilesContainer = document.getElementById('user-profiles');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userProfile = document.createElement('div');
                userProfile.classList.add('user-profile');

                const userAvatar = document.createElement('img');
                userAvatar.src = `https://i.pravatar.cc/150?img=${user.id}`;
                userAvatar.alt = `${user.name}'s avatar`;

                const userName = document.createElement('h2');
                userName.textContent = user.name;

                const userEmail = document.createElement('p');
                userEmail.textContent = `Email: ${user.email}`;

                const userPhone = document.createElement('p');
                userPhone.textContent = `Phone: ${user.phone}`;

                const userAddress = document.createElement('p');
                userAddress.textContent = `Address: ${user.address.street}, ${user.address.city}`;

                const userWebsite = document.createElement('p');
                userWebsite.textContent = `Website: ${user.website}`;

                const userCompany = document.createElement('p');
                userCompany.textContent = `Company: ${user.company.name}`;

                userProfile.appendChild(userAvatar);
                userProfile.appendChild(userName);
                userProfile.appendChild(userEmail);
                userProfile.appendChild(userPhone);
                userProfile.appendChild(userAddress);
                userProfile.appendChild(userWebsite);
                userProfile.appendChild(userCompany);

                userProfilesContainer.appendChild(userProfile);
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
});
