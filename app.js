document.addEventListener("DOMContentLoaded", () => {
    const profilesContainer = document.getElementById("user-profiles");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const profile = document.createElement("div");
                profile.className = "profile";

                // Generate a random avatar for each user
                const avatarUrl = https://i.pravatar.cc/200?u=${user.id};

                profile.innerHTML = `
                    <img src="${avatarUrl}" alt="${user.name}'s avatar" class="avatar">
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;

                profilesContainer.appendChild(profile);
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
});