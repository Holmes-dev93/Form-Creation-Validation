// 1. Initialize the Async Function
async function fetchUserData() {
    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // 4. Fetch Data Using try-catch
    try {
        const response = await fetch(apiUrl);

        // Check for non-200 HTTP response codes (e.g., 404, 500)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();

        // 5. Clear the Loading Message
        dataContainer.innerHTML = '';

        // 6. Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(user => {
            const listItem = document.createElement('li');
            // Set the text content to the user’s name
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the final list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error Handling
        console.error('Fetching error:', error);
        // Clear previous content and display a failure message
        dataContainer.innerHTML = 'Failed to load user data.';
        dataContainer.style.color = '#dc3545'; // Error color
    }
}

// 8. Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
