/* On tab click show a random logo */
var tabs = document.getElementsByClassName('tab');
var brandLogo = document.getElementById('brand-logo');
var codeLogos = brandLogo.getElementsByClassName('code-logo');

var showRandomLogo = function() {
    // Hide all
    Array.prototype.forEach.call(brandLogo.children, function(logo) {
        logo.classList.add('hidden');
    });
    // Show random
    codeLogos[Math.floor(Math.random()*(codeLogos.length))]
        .classList.remove('hidden');
}

Array.prototype.forEach.call(tabs, function(tab) {
    // Click event for every tab
    tab.addEventListener('click', showRandomLogo);
});
