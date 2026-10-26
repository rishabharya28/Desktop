document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('main input');

    if (!searchInput) return;

    // Rotate search suggestions
    const suggestions = [
        'Search for restaurants',
        'Search for pizza',
        'Search for biryani',
        'Search for burgers',
        'Search for desserts'
    ];

    let index = 0;

    searchInput.setAttribute(
        'aria-label',
        'Search for restaurants, cuisines or dishes'
    );

    searchInput.placeholder = suggestions[0];

    // Change placeholder text periodically
    setInterval(() => {
        if (document.activeElement === searchInput) return;
        if (searchInput.value.trim() !== '') return;

        index = (index + 1) % suggestions.length;
        searchInput.placeholder = suggestions[index];
    }, 2500);

    // Enter key interaction
    searchInput.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter') return;

        const query = searchInput.value.trim();

        if (!query) {
            searchInput.focus();
            return;
        }

        // Replace with your real search functionality
        console.log('Search query:', query);
    });
});