document.addEventListener('DOMContentLoaded', function() {
    var emailLink = document.getElementById('email-link');

    // Add click event listener to the email link
    emailLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Create a temporary textarea element
        var textarea = document.createElement('textarea');
        textarea.value = emailLink.textContent; // Set textarea value to the email address
        textarea.style.position = 'fixed'; // Ensure it's not visible
        document.body.appendChild(textarea); // Append textarea to document

        // Select and copy the email address
        textarea.select();
        document.execCommand('copy');

        // Remove the textarea from the document
        document.body.removeChild(textarea);

        // Optionally, provide feedback to the user
        alert('Email address copied to clipboard: ' + emailLink.textContent);
    });
});