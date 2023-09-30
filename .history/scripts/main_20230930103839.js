
document.addEventListener('DOMContentLoaded', function () {
    // Get the fragment identifier from the URL

    const fragmentId = window.location.hash.substring(1);

    // Scroll to the element with the fragment identifier as its id
    if (fragmentId) {
        const element = document.getElementById(fragmentId);
        if (element) {
            element.scrollIntoView();
        }
    }
});

tailwind.config = {
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
            body: ["Roboto", "sans-serif"],
            mono: ["ui-monospace", "monospace"],
        },
        colors: {
            primary: '#F2070F',
            white: '#fff'
        }
    },
    corePlugins: {
        preflight: false,
    },
};
