// Section Observer
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

In today’s times of transition when our nation is transforming drastically in all walks of life and heading towards being a developed nation, it becomes all the more significant to emphasize and highlight our roots. “Where we come from” forms a compact foundation for any big leap and flight giving a rock-solid base to rejoice the rich and colorful reservoir of wisdom through art and culture. Nonetheless we can never have a myopic perspective and restrict our growth as artistes; obviously then one cannot overlook the wide range of music and dance happening across the globe thus imbibing a beautiful blend of sanskar in the current generation and generations to follow.`,

      eventsText: `Kalakalp Studio regularly hosts cultural evenings, student recitals, classical baithaks, and community showcases. “Prayaas” — our flagship event — presents a blend of performances by acclaimed maestros and passionate learners, celebrating both heritage and innovation.`,

      founderText: `Mrs. Manjiri Chinmay Wathare was initiated into dance by Guru Archana Anuradha. Under her able guidance, she started her training at the age of nine. There she was also fortunate to seek blessings from Guru Lt. Madhurita Sarang. Thereafter, she continued under the tutelage of Guru Pandit Rajendra Gangani ji, a renowned Kathak maestro of the Jaipur Gharana and the torchbearer of its purest form. It is here that Manjiri learned the subtle and technical intricacies of Kathak dance.

Manjiri has completed her “Nritya Visharad“ in Kathak from Akhil Bhartiya Gandharv Mahavidyalaya Mandal. She has also completed a Master's in Kathak from Nalanda Dance & Research Centre, Mumbai, and a Bachelor’s in Fashion–Apparel Design from SNDT University. She is a registered examiner at ABGMVM.

Mrs. Manjiri Chinmay Wathare, founder of Kalakalp – The Art Studio, has skillfully taken up this responsibility with the blessings of Guru Pandit Shri Rajendra Gangani.

Guruji, as Pandit Rajendra Gangani ji is fondly addressed, has not only been instrumental in blessing his disciples with vast practical knowledge but also in encouraging them to pass on this wisdom, thus creating a boundless hierarchy of Kathak.

Taking a cue from his teachings, Kalakalp – The Kathak Studio – was established in January 2014.

Manjiri has given many solo performances and has participated in numerous group compositions and choreographic pieces directed by leading Gurus like Pandit Rajendra Gangani ji himself, Smt. Rajshree Shirke, Shri Dhirendra Tiwari, and Archana Anuradha.`,

      pastPerformances: [
        "Pt. Ram Marathe Smriti Sangeet Samaroh – Thane, 2023",
        "Sanskrti Arts Festival, 2023",
        "Tarana Festival – Lehja Foundation, 2023",
        "Lecture Demonstration – Rotary Club Main Branch Thane, 2018",
        "Mulundkar Festival, Mumbai, 2017",
        "International Dance Festival, Mumbai, 2017",
        "Guru Purnima – Indore, 2016",
        "Rasaraj, Mumbai, 2016",
        "Aaveg – NCPA Mumbai, 2013",
        "Nrityark – Pune, 2012",
        "Akhil Bhartiya Sanskrutik Sangh – 2nd Prizes (2007–2009)",
        "Ravan Mandodari – Bhubaneswar, 2008",
        "Ravan Mandodari – Chennai, 2009",
        "Ase Pawasache Yene – Pune, 2006",
        "Chinchwad Festival – Ase Pawasache Yene, 2005"
      ]
    },
    hi: {
      heading: "परंपरा में गति",
      subheading: "कथक की शास्त्रीय परंपरा में आपकी स्वागत है",
      explore: "कक्षाएँ देखें",
      aboutTitle: "हमारे बारे में",
      aboutText: `कला कल्प – एक कला संकल्प...

(🔁 Add your full Hindi about section text here)`,

      eventsText: `कलाकल्प स्टूडियो नियमित रूप से सांस्कृतिक संध्याओं, छात्र रीसाइटल्स, शास्त्रीय बैठकों और सामुदायिक प्रस्तुतियों की मेज़बानी करता है। “प्रयास” — हमारी प्रमुख प्रस्तुति — प्रसिद्ध कलाकारों और समर्पित विद्यार्थियों की सम्मिलित प्रस्तुति है जो परंपरा और नवाचार का उत्सव है।`,

      founderText: `(🔁 Your full Hindi founder section)`,

      pastPerformances: [
        "पं. राम मराठे स्मृति संगीत समारोह – ठाणे, 2023",
        "संस्कृति आर्ट्स फेस्टिवल, 2023",
        "तराना फेस्टिवल – लहजा फाउंडेशन, 2023",
        "लेक्चर डेमोंस्ट्रेशन – रोटरी क्लब, ठाणे, 2018",
        "मुलुंडकर फेस्टिवल, मुंबई, 2017",
        "इंटरनेशनल डांस फेस्टिवल, मुंबई, 2017",
        "गुरु पूर्णिमा – इंदौर, 2016",
        "रसाराज, मुंबई, 2016",
        "आवेज – एनसीपीए मुंबई, 2013",
        "नृत्यार्क – पुणे, 2012",
        "अखिल भारतीय सांस्कृतिक संघ – द्वितीय पुरस्कार (2007–2009)",
        "रावण मंदोदरी – भुवनेश्वर, 2008",
        "रावण मंदोदरी – चेन्नई, 2009",
        "असे पावसाचे येणे – पुणे, 2006",
        "चिंचवड फेस्टिवल – असे पावसाचे येणे, 2005"
      ]
    }
  };

  const t = translations[lang];

  // Apply text
  document.getElementById('main-heading').textContent = t.heading;
  document.getElementById('hero-text').textContent = t.subheading;
  document.getElementById('explore-btn').textContent = t.explore;
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-text').textContent = t.aboutText;
  document.getElementById('events-text').textContent = t.eventsText;
  document.getElementById('founder-text').textContent = t.founderText;

  const perfList = document.getElementById('performances-list');
  perfList.innerHTML = "";
  t.pastPerformances.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    perfList.appendChild(li);
  });
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

// Set language on first load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});


