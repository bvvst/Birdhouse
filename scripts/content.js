const urls = ["https://twitter.com/home", "https://x.com/home"];

function run() {
  const xLogo =
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";
  const birdLogo =
    "M21.479 6.96351C21.4935 7.17351 21.4935 7.38351 21.4935 7.59544C21.4935 14.0532 16.5774 21.5009 7.58806 21.5009V21.4971C4.93258 21.5009 2.33226 20.7403 0.0967712 19.3061C0.4829 19.3525 0.870965 19.3758 1.26 19.3767C3.46064 19.3787 5.59838 18.6403 7.32967 17.2806C5.23838 17.2409 3.40451 15.8774 2.76387 13.8867C3.49645 14.028 4.25129 13.999 4.97032 13.8025C2.69032 13.3419 1.05 11.3387 1.05 9.01222V8.95028C1.72935 9.32867 2.49 9.53867 3.26806 9.56189C1.12064 8.12673 0.458707 5.26996 1.75548 3.03641C4.23677 6.08964 7.89774 7.94577 11.8277 8.14222C11.4339 6.4448 11.9719 4.66609 13.2416 3.47286C15.21 1.62254 18.3058 1.71738 20.1561 3.6848C21.2506 3.46899 22.2997 3.06738 23.2597 2.49835C22.8948 3.62964 22.1313 4.5906 21.1113 5.20125C22.08 5.08706 23.0264 4.8277 23.9177 4.4319C23.2616 5.41512 22.4352 6.27157 21.479 6.96351Z";

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

    if (d === xLogo) {
      path.setAttribute("d", birdLogo);
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
