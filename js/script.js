/* Materialize mobile collapse button */
$(".button-collapse").sideNav({closeOnClick: true});

$("#mobile-tabs").tabs();




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
    emailCopyInput = emailCopy.getElementsByTagName('input')[0];
    if( emailCopy.classList.contains('hidden') ) {
        // Show
        emailCopy.classList.remove('hidden');
        emailCopyInput.value = em1 + em2 + '@' + domain + '.' + topdomain;
    } else {
        // Hide
        emailCopy.classList.add('hidden');
        emailCopyInput.value = '';
    }
};

// Footer email link
var footerEmailShow = document.getElementById('footer-email-show');
footerEmailShow.relatedCopy = document.getElementById('footer-email-copy');
footerEmailShow.addEventListener('click', showEmailCopy);

// Contact email button
var contactEmailShow = document.getElementById('contact-email-show');
contactEmailShow.relatedCopy = document.getElementById('contact-email-copy');
contactEmailShow.addEventListener('click', showEmailCopy);




/* Analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-70683720-1', 'auto');
ga('send', 'pageview');