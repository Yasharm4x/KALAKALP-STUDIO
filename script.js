const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Language toggle logic
let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  document.getElementById('langToggleBtn').textContent = currentLang === 'en' ? 'हिंदी' : 'English';
  setLanguage(currentLang);
}

function setLanguage(lang) {
  const translations = {
    en: {
      heading: "Tradition in Motion",
      subheading: "Welcome to the classical tradition of Kathak",
      explore: "EXPLORE CLASSES",
      aboutTitle: "About Us",
      aboutText: `KalaKalp, The Art studio, is a musical mission to promote, preserve, nurture and bloom the art and culture of our nation, that is, the conclusively rich-in-heritage Bharat.

Prayaas, literally meaning ‘effort’, is one such event diligently curated by its Director Manjiri Wathare.

Staying true to its ten-year long tradition, Prayaas, which has been instrumental in promoting and nurturing and reveling the affluence of Bhartiya culture by presenting the giants from the field of music and dance; juxtaposing with the budding artistes, is an exceptional combination of ‘old to not-so-old to the new, traditional to modern to contemporary’ and so on, in alignment with our Indian art and culture showcases the best of arts and music from all over the world.

In today’s times of transition when our nation is transforming drastically in all walks of life and heading towards being a developed nation, it becomes all the more significant to emphasize and highlight our roots. “Where we come from” forms a compact foundation for any big leap and flight giving a rock-solid base to rejoice the rich and colorful reservoir of wisdom through art and culture. Nonetheless we can never have a myopic perspective and restrict our growth as artistes; obviously then one cannot overlook the wide range of music and dance happening across the globe thus imbibing a beautiful blend of sanskar in the current generation and generations to follow.`
    },
    hi: {
      heading: "परंपरा में गति",
      subheading: "कथक की शास्त्रीय परंपरा में आपकी स्वागत है",
      explore: "कक्षाएँ देखें",
      aboutTitle: "हमारे बारे में",
      aboutText: `कला कल्प – एक कला संकल्प

कला कल्प, द आर्ट स्टूडियो, एक संगीतमय अभियान है जिसका उद्देश्य है हमारे राष्ट्र — अर्थात् समृद्ध सांस्कृतिक विरासत से भरपूर भारत — की कला और संस्कृति का संरक्षण, संवर्धन, पोषण और प्रसार करना।

'प्रयास', जिसका शाब्दिक अर्थ है "प्रयत्न", इसी लक्ष्य की ओर एक समर्पित आयोजन है, जिसे इसकी निदेशक मंजिरी वाठारे द्वारा संजीदगी से संकल्पित किया गया है।

अपने दस वर्षों की परंपरा के प्रति सच्ची निष्ठा रखते हुए, 'प्रयास' ने भारतीय संगीत और नृत्य की महान विभूतियों को मंच पर प्रस्तुत कर, साथ ही उभरते कलाकारों को भी अवसर प्रदान कर, भारतीय संस्कृति की समृद्धि को संरक्षित और उत्सव रूप में मनाने का कार्य किया है। यह कार्यक्रम एक अनूठा संगम है — "पुराने से नए, पारंपरिक से आधुनिक और समकालीन", जिसमें भारतीय कला और संस्कृति के साथ-साथ विश्वभर की संगीत एवं कला परंपराओं को भी समान रूप से मंच प्रदान किया जाता है।

आज के इस परिवर्तनशील युग में, जब हमारा राष्ट्र जीवन के प्रत्येक क्षेत्र में तीव्र रूप से विकास की ओर अग्रसर है और एक विकसित राष्ट्र बनने की दिशा में कदम बढ़ा रहा है, तब हमारी जड़ों की ओर लौटना और उन्हें उजागर करना और भी आवश्यक हो जाता है। "हम कहाँ से आते हैं" — यह भाव किसी भी ऊँची उड़ान और सफलता की मजबूत नींव होता है, जो हमें हमारी कला और संस्कृति के माध्यम से ज्ञान, रंग और समृद्ध परंपरा का उत्सव मनाने का अवसर देता है।

साथ ही, हम केवल सीमित दृष्टिकोण रखकर स्वयं को एक कलाकार के रूप में सीमित नहीं कर सकते; इसलिए विश्वभर में हो रही संगीत और नृत्य की विविधता को समझना और आत्मसात करना भी उतना ही आवश्यक है। यह संतुलन ही आने वाली पीढ़ियों में संस्कार और सृजनात्मकता का सुंदर मेल उत्पन्न करता है।`
    }
  };

  const t = translations[lang];
  document.getElementById('main-heading').textContent = t.heading;
  document.getElementById('hero-text').textContent = t.subheading;
  document.getElementById('explore-btn').textContent = t.explore;
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-text').textContent = t.aboutText;
}

// Hamburger Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
const backdrop = document.getElementById('backdrop');

hamburgerBtn?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.contains('show');
  mobileNav.classList.toggle('show');
  backdrop.classList.toggle('show');
  document.body.style.overflow = isOpen ? '' : 'hidden';
  hamburgerBtn.innerHTML = isOpen ? '&#9776;' : '&times;';
});

backdrop?.addEventListener('click', () => {
  mobileNav.classList.remove('show');
  backdrop.classList.remove('show');
  hamburgerBtn.innerHTML = '&#9776;';
  document.body.style.overflow = '';
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('show');
    backdrop.classList.remove('show');
    hamburgerBtn.innerHTML = '&#9776;';
    document.body.style.overflow = '';
  });
});

