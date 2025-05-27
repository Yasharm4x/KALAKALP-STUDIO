const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Language toggle logic
let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  setLanguage(currentLang);
  document.getElementById('langToggleBtn').textContent = currentLang === 'en' ? 'हिंदी' : 'English';
}

function setLanguage(lang) {
  const translations = {
    en: {
      heading: "Tradition in Motion",
      subheading: "Welcome to the classical tradition of Kathak",
      explore: "EXPLORE CLASSES",
      aboutTitle: "About Us",
      aboutText: `Rooted in a rich legacy of classical dancers, MudraTaal Studio was founded with a deep commitment to preserving and promoting the timeless elegance of Kathak. We believe in nurturing not only technique but also the spirit of this classical art form through disciplined training and soulful performances. Our carefully crafted curriculum encompasses the foundational elements of Kathak — Tatkaar (footwork), Hastak (hand gestures), Abhinaya (expression), and the art of narrative storytelling through rhythm and movement. Whether you're a beginner or an advanced practitioner, MudraTaal Studio provides a space where tradition meets passion, allowing each dancer to explore the depth and grace of Kathak in its purest form.`
    },
    hi: {
      heading: "परंपरा में गति",
      subheading: "कथक की शास्त्रीय परंपरा में आपकी स्वागत है",
      explore: "कक्षाएँ देखें",
      aboutTitle: "हमारे बारे में",
      aboutText: `शास्त्रीय नृत्य के समृद्ध विरासत में जड़ें जमाए हुए, मुद्रा-ताल स्टूडियो को कथक की कालातीत सुंदरता को संरक्षित करने और बढ़ावा देने की गहरी प्रतिबद्धता के साथ स्थापित किया गया था। हम न केवल तकनीक को बल्कि इस शास्त्रीय कला रूप की आत्मा को भी पोषित करने में विश्वास रखते हैं, जो अनुशासित प्रशिक्षण और भावपूर्ण प्रस्तुतियों के माध्यम से होती है। हमारा सावधानीपूर्वक तैयार किया गया पाठ्यक्रम कथक के मूल तत्वों को शामिल करता है — तत्कार (पैरों की थाप), हस्तक (हाथों की मुद्राएँ), अभिनय (भाव) और लय एवं गति के माध्यम से कहानी कहने की कला। चाहे आप एक प्रारंभिक सीखने वाले हों या उन्नत साधक, मुद्रा-ताल स्टूडियो एक ऐसा स्थान प्रदान करता है जहाँ परंपरा जुनून से मिलती है, जिससे प्रत्येक नर्तक को कथक की गहराई और सुंदरता को उसकी शुद्धतम रूप में खोजने का अवसर मिलता है।`
    }
  };

  const t = translations[lang];
  document.getElementById('main-heading').textContent = t.heading;
  document.getElementById('hero-text').textContent = t.subheading;
  document.getElementById('explore-btn').textContent = t.explore;
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-text').textContent = t.aboutText;
}
