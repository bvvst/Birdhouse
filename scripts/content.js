const urls = ["https://twitter.com/home", "https://x.com/home"];

function run() {
  let newD =
    "M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z";

  let oldD =
    "M11.54 2.345c.276-.194.644-.194.92 0l8 5.623c.213.15.34.394.34.655V21c0 .442-.358.8-.8.8h-5.855c-.442 0-.8-.358-.8-.8v-6.7h-2.69V21c0 .442-.359.8-.8.8H4c-.442 0-.8-.358-.8-.8V8.623c0-.26.127-.505.34-.655zM12 3.978l-7.2 5.06V20.2h4.255v-6.7c0-.442.358-.8.8-.8h4.29c.442 0 .8.358.8.8v6.7H19.2V9.038z";

  // check if user is on home page
  if (urls.includes(document.location.href)) {
    newD =
      "M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z";
    oldD =
      "M11.54 2.345c.276-.194.644-.194.92 0l8 5.623c.213.15.34.394.34.655V21c0 .442-.358.8-.8.8h-5.855c-.442 0-.8-.358-.8-.8v-6.7h-2.69V21c0 .442-.359.8-.8.8H4c-.442 0-.8-.358-.8-.8V8.623c0-.26.127-.505.34-.655z";
  }

  const paths = document.querySelectorAll("svg path");

  // Iterate over all path elements
  paths.forEach((path) => {
    // Get the d attribute value
    const d = path.getAttribute("d");

    // Check if d attribute matches the target value
    if (d === oldD) {
      // Replace with a new d attribute value
      path.setAttribute("d", newD);
    }
  });
}

run();

// to detect if the page changes (if the user navigates to another page)
const observer = new MutationObserver(() => {
  run();
});

// Start observing the entire document body, or a specific part of it that contains the navigation menu
observer.observe(document.body, {
  childList: true, // Report added/removed nodes
  subtree: true, // Also observe all descendants of the specified node
});
