const routes = {
  "/": {
    title: "Home",
    description: "This is the home page",
    template: "templates/home.html",
  },
  "payments": {
    title: "Payments",
    description: "This is the about page",
    template: "templates/payments.html",
  },
  "calculator": {
    title: "Calculator",
    description: "This is the calc page",
    template: "templates/calculator.html",
  },
  "jobs": {
    title: "Jobs",
    description: "This is the job page",
    template: "templates/jobs.html",
  },
  "about": {
    title: "About",
    description: "This is the about page",
    template: "templates/about.html",
  }
}

const locationHandler = async () => {
  // get the url path, replace hash with empty string
  let location = window.location.hash.replace("#", "");
  // if the path length is 0, set it to primary page route
  if (location.length === 0) {
    location = "/";
  }
  // get the route object from the routes object
  const route = routes[location] || routes["404"];
  // get the html from the template
  // set the content of the content div to the html
  document.getElementById("content-div").innerHTML = await fetch(route.template)
    .then((response) => response.text());
  // set the title of the document to the title of the route
  document.title = route.title;
  // set the description of the document to the description of the route
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();
