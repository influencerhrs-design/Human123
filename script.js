// Tailwind custom config
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#4a69bd',
                secondary: '#f9ca24',
                accent: '#1e3799',
                'bg-light': '#f5f6fa',
            },
        },
    },
};

// Open full screen menu
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

// Close full screen menu
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// Initialize icons
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});
