const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let codesnippet = document.getElementById("cta-img");
codesnippet.setAttribute('src', siteContent["cta"]["img-src"])

let midsnippet = document.getElementById("middle-img");
midsnippet.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Nav
const anchors = document.querySelectorAll('a');
anchors[0].textContent = siteContent.nav['nav-item-1'];
anchors[1].textContent = siteContent.nav['nav-item-2'];
anchors[2].textContent = siteContent.nav['nav-item-3'];
anchors[3].textContent = siteContent.nav['nav-item-4'];
anchors[4].textContent = siteContent.nav['nav-item-5'];
anchors[5].textContent = siteContent.nav['nav-item-6'];

// Added Nav Content
const nav = document.querySelector('nav');
let adding = document.createElement('a');
let addtext = document.createTextNode('Partnership')
nav.appendChild(adding);
adding.appendChild(addtext);

let adding2 = document.createElement('a');
let addtext2 = document.createTextNode('Blog')
nav.appendChild(adding2);
adding2.appendChild(addtext2);

adding.style.color = "green";
adding2.style.color = "green";

// CTA
let slogan = document.querySelector('h1');
slogan.textContent = siteContent.cta['h1'];

let button = document.querySelector('button');
button.textContent = siteContent.cta['button'];

// Content
let headers = document.querySelectorAll('h4');
headers[0].textContent = siteContent["main-content"]['features-h4'];
headers[1].textContent = siteContent["main-content"]['about-h4'];
headers[2].textContent = siteContent["main-content"]['services-h4'];
headers[3].textContent = siteContent["main-content"]['product-h4'];
headers[4].textContent = siteContent["main-content"]['vision-h4'];
headers[5].textContent = siteContent["contact"]['contact-h4'];

let content = document.querySelectorAll('p');
content[0].textContent = siteContent["main-content"]['product-content'];
content[1].textContent = siteContent["main-content"]['about-content'];
content[2].textContent = siteContent["main-content"]['services-content'];
content[3].textContent = siteContent["main-content"]['product-content'];
content[4].textContent = siteContent["main-content"]['vision-content'];
content[5].textContent = siteContent["contact"]['address'];
content[6].textContent = siteContent["contact"]['phone'];
content[7].textContent = siteContent["contact"]['email'];
content[8].textContent = siteContent.footer['copyright'];

// Stretch
anchors.forEach(i => i.style.color = "blue");
button.style.color = "blue";
headers.forEach(function(i) {
  i.style.textDecoration = "underline";
});
content.forEach(function(i) {
  i.style.color= "blue";
});