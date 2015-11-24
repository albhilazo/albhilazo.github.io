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
};

Array.prototype.forEach.call(tabs, function(tab) {
    // Click event for every tab
    tab.addEventListener('click', showRandomLogo);
});




/* Email construction */
var showEmailCopy = function(e) {
    var em1 = 'alb';
    var em2 = 'hilazo';
    var domain = 'gmail';
    var topdomain = 'com';

    e.preventDefault();

    // this = element with attached event
    var emailCopy = this.relatedCopy;
    if( emailCopy.classList.contains('hidden') ) {
        // Show
        emailCopy.classList.remove('hidden');
        emailCopy.value = em1 + em2 + '@' + domain + '.' + topdomain;
    } else {
        // Hide
        emailCopy.classList.add('hidden');
        emailCopy.value = '';
    }
};

// Footer email link
var footerEmailShow = document.getElementById('footer-email-show');
footerEmailShow.relatedCopy = document.getElementById('footer-email-copy');
footerEmailShow.addEventListener('click', showEmailCopy);