(function() {
    const readingTimeElements = document.querySelectorAll('.reading-time');
    const wordsPerMinute = 200; // Default reading speed
    
    readingTimeElements.forEach(function(element) {
        const words = parseInt(element.getAttribute('data-words'), 10);
        if (words && words > 0) {
            const minutes = Math.ceil(words / wordsPerMinute);
            const timeText = minutes === 1 ? '1 min read' : minutes + ' min read';
            element.textContent = timeText;
        }
    });
})();

