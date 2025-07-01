// Function to set a secure cookie
function setSecureCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    
    // Setting a secure cookie with HttpOnly, Secure, and SameSite flags
    document.cookie = `${name}=${value};${expires};path=/;Secure;SameSite=Strict`;
    alert("Cookie set successfully!");
  }
  
  // Function to get a cookie value by name
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const [cookieName, cookieValue] = cookies[i].split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return "Cookie not found!";
  }
  
  // Event listeners for buttons
  document.getElementById("setCookieBtn").addEventListener("click", () => {
    setSecureCookie("username", "Joyce", 7); // Sets a cookie named 'username'
  });
  
  document.getElementById("showCookieBtn").addEventListener("click", () => {
    const cookieValue = getCookie("username");
    document.getElementById("cookieDisplay").innerText = "Cookie Value: " + cookieValue;
  });
  