document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');

                // Using a placeholder image service for avatar
                const avatarUrl = https://i.pravatar.cc/150?u=${user.id};

                userCard.innerHTML = `
                    <img src="${avatarUrl}" alt="${user.name}" width="150" height="150">
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;

                userContainer.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
});
