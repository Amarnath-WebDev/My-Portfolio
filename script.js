// Select the About text paragraph and update its content dynamically  
document.getElementById("about-text").textContent = "Hello! I'm a web developer passionate about creating interactive websites.";  

// Add a new project to the portfolio list  
const portfolioList = document.getElementById("portfolio-list");  
const newProject = document.createElement("li");  
newProject.textContent = "Project 4";  
portfolioList.appendChild(newProject);  

// Add functionality to the contact form  
const contactForm = document.getElementById("contact-form");  
contactForm.addEventListener("submit", function (event) {  
    event.preventDefault(); // Prevent default form submission  

    // Capture form data  
    const name = document.getElementById("name").value;  
    const email = document.getElementById("email").value;  
    const message = document.getElementById("message").value;  

    // Display a confirmation message  
    alert(`Thank you, ${name}! Your message has been sent.`);  

    // Reset the form fields  
    contactForm.reset();  
});  
