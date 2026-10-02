const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const languageButtons = document.querySelectorAll(".language-button");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const translations = {
  zh: {
    lang: "zh-CN",
    title: "接棒者基督教会",
    description: "接棒者基督教会——一个在吉隆坡的基督徒团契群体。",
    nav: ["首页", "关于我们", "活动", "地点", "照片集", "联系我们"],
    heroEyebrow: "接棒者基督教会",
    heroTitle: "在信心、盼望与爱中一同成长。",
    heroText: "一个敬拜上帝、建立真挚关系，并在基督徒群体中一同成长的地方。",
    heroButtons: ["近期活动", "了解更多"],
    scroll: "滚动至关于我们",
    aboutEyebrow: "关于我们",
    aboutTitle: "Be a history maker and a world changer!",
    aboutIntro: "认识一个委身于敬拜上帝、在祂的话语中成长、建立真挚团契，并以基督的爱关怀他人的群体。",
    aboutText: [
      "接棒者基督教会是一个让我们一同敬拜上帝、在信心中成长，并彼此鼓励的基督徒群体。",
      "我们盼望建立一个温暖而友善的团契，让大家建立真挚的关系、更加认识圣经，并在日常生活中活出信仰。"
    ],
    cards: [
      ["敬拜", "一同敬拜上帝，并在生活中尊荣祂。"],
      ["团契", "建立真挚的关系，彼此鼓励，一同成长。"],
      ["圣经与属灵成长", "借着上帝的话语、祷告以及与祂更深的关系，在信心中成长。"],
      ["传福音与关怀", "分享基督的爱，关怀我们的社区，并将爱延伸到更远的地方。"]
    ],
    eventsEyebrow: "最新活动",
    eventsTitle: "常规聚会",
    eventsIntro: "通过我们的常规聚会、敬拜、课程和团契活动，与 KLCF 保持联系。",
    events: [
      ["主日崇拜", "每逢星期日 · 上午 10:00 – 12:00", "主日崇拜后一起享用午餐。", "一同敬拜、聆听上帝的话语，并享受团契时光。"],
      ["主日学", "每逢星期六 · 下午 3:00 – 5:00", "", "主日学"],
      ["乐器培训班", "星期六 · 每两周一次 · 下午 5:30 – 7:00", "", "乐器培训班 · 少年团契开始前。"],
      ["少年团契", "星期六 · 每两周一次 · 晚上 7:30 – 9:00", "", "让青少年一同成长、交流与团契的时间。"],
      ["Setapak 小组", "星期六 · 每两周一次 · 晚上 7:30 – 9:00", "", "彼此联系、分享，并一同在信仰中成长。"]
    ],
    weekly: "每周",
    everyTwoWeeks: "每两周",
    galleryEyebrow: "KLCF 的生活",
    galleryTitle: "团契点滴",
    galleryIntro: "一同敬拜、团契、学习，以及组成 KLCF 这个大家庭的每一个人。",
    galleryLabels: ["敬拜", "团契", "少年", "活动", "社区"],
    addPhoto: "添加照片",
    locationEyebrow: "联系我们",
    locationTitle: "地点",
    locationIntro: "欢迎来到我们位于吉隆坡文良港的团契地点。",
    maps: "在 Google 地图中打开 →",
    contactEyebrow: "与我们联系",
    contactTitle: "我们期待与您联系。",
    contactIntro: "如果您有任何问题，欢迎联系我们；也可以关注 KLCF，获取最新的团契消息与公告。",
    call: "联系我们",
    callAction: "致电 KLCF →",
    facebook: "脸书 Facebook",
    facebookAction: "访问我们的 Facebook 专页 →",
    footer: "版权所有。"
  },
  en: {
    lang: "en",
    title: "Kuala Lumpur Christian Fellowship",
    brand: "接棒者基督教会",
    description: "Kuala Lumpur Christian Fellowship — a Christian fellowship community in Kuala Lumpur.",
    brand: "Kuala Lumpur Christian Fellowship",
    nav: ["Home", "About", "Events", "Location", "Gallery", "Contact"],
    heroEyebrow: "Kuala Lumpur Christian Fellowship",
    heroTitle: "Growing together in faith, hope and love.",
    heroText: "A place to worship God, build meaningful relationships and grow together as a Christian community.",
    heroButtons: ["Upcoming Events", "Learn More"],
    scroll: "Scroll to About",
    aboutEyebrow: "About Us",
    aboutTitle: "Be a history maker and a world changer!",
    aboutIntro: "Discover a community committed to worshipping God, growing in His Word, building meaningful fellowship and reaching out to others with the love of Christ.",
    aboutText: [
      "Kuala Lumpur Christian Fellowship is a Christian community where we come together to worship God, grow in faith and encourage one another.",
      "We seek to build a welcoming fellowship where people can develop genuine relationships, deepen their understanding of the Bible and live out their faith in everyday life."
    ],
    cards: [
      ["Worship", "Gathering together to worship God and honour Him through our lives."],
      ["Fellowship", "Building genuine relationships, encouraging one another and growing together."],
      ["Bible & Spiritual Growth", "Growing in faith through God's Word, prayer and a deeper relationship with Him."],
      ["Evangelism & Outreach", "Sharing the love of Christ and reaching out to our community and beyond."]
    ],
    eventsEyebrow: "What's Happening",
    eventsTitle: "Regular Gatherings",
    eventsIntro: "Stay connected with KLCF through our regular gatherings, worship, classes and fellowship activities.",
    events: [
      ["Sunday Service", "Every Sunday · 10:00 AM – 12:00 PM", "Lunch together after the Sunday service.", "Join us for worship, God's Word and fellowship."],
      ["Sunday School", "Every Saturday · 3:00 PM – 5:00 PM", "", "Sunday School"],
      ["Instrument Training Class", "Saturday · Every two weeks · 5:30 PM – 7:00 PM", "", "Instrument Training Class · Before the youth gathering."],
      ["Youth Fellowship", "Saturday · Every two weeks · 7:30 PM – 9:00 PM", "", "A time for young people to grow and fellowship together."],
      ["Setapak Cell Group", "Saturday · Every two weeks · 7:30 PM – 9:00 PM", "", "A time to connect, share and grow together in faith."]
    ],
    weekly: "WEEKLY",
    everyTwoWeeks: "EVERY 2 WEEKS",
    galleryEyebrow: "Life At KLCF",
    galleryTitle: "Moments Together",
    galleryIntro: "A glimpse of worship, fellowship, learning and the people who make KLCF a community.",
    galleryLabels: ["Worship", "Fellowship", "Youth", "Activities", "Community"],
    addPhoto: "Add a photo",
    locationEyebrow: "Find Us",
    locationTitle: "Location",
    locationIntro: "Visit us at our fellowship location in Setapak, Kuala Lumpur.",
    maps: "Open in Google Maps →",
    contactEyebrow: "Connect With Us",
    contactTitle: "We would love to hear from you.",
    contactIntro: "Have a question or want to stay connected? Reach out to us or follow KLCF for the latest fellowship updates and announcements.",
    call: "Call Us",
    callAction: "Call KLCF →",
    facebook: "Facebook",
    facebookAction: "Visit our Facebook page →",
    footer: "All rights reserved."
  }
};

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = t.lang;
  document.title = t.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", t.description);

  document.querySelectorAll(".nav a").forEach((link, i) => link.textContent = t.nav[i]);
  setText(".brand-name", lang === "zh" ? "接棒者基督教会" : "Kuala Lumpur Christian Fellowship");
  document.querySelector(".brand")?.setAttribute("aria-label", lang === "zh" ? "接棒者基督教会首页" : "Kuala Lumpur Christian Fellowship home");
  setText(".hero .eyebrow", t.heroEyebrow);
  setText(".hero h1", t.heroTitle);
  setText(".hero-text", t.heroText);
  document.querySelectorAll(".hero-actions .button").forEach((button, i) => button.textContent = t.heroButtons[i]);

  document.querySelector(".scroll-hint")?.setAttribute("aria-label", t.scroll);
  setText(".scroll-hint", "↓");

  const aboutHeading = document.querySelector("#about .section-heading");
  if (aboutHeading) {
    aboutHeading.querySelector(".eyebrow").textContent = t.aboutEyebrow;
    aboutHeading.querySelector("h2").textContent = t.aboutTitle;
    aboutHeading.querySelector("p:last-child").textContent = t.aboutIntro;
  }
  document.querySelectorAll("#about .about-grid > div:first-child p").forEach((p, i) => p.textContent = t.aboutText[i]);
  document.querySelectorAll("#about .info-card").forEach((card, i) => {
    card.querySelector("h3").textContent = t.cards[i][0];
    card.querySelector("p").textContent = t.cards[i][1];
  });

  const eventHeading = document.querySelector("#events .section-heading");
  eventHeading.querySelector(".eyebrow").textContent = t.eventsEyebrow;
  eventHeading.querySelector("h2").textContent = t.eventsTitle;
  eventHeading.querySelector("p:last-child").textContent = t.eventsIntro;
  document.querySelectorAll("#events .event-card").forEach((card, i) => {
    const event = t.events[i];
    card.querySelector("h3").textContent = event[0];
    card.querySelectorAll("p")[0].textContent = event[1];
    const note = card.querySelector(".event-note");
    if (note) note.textContent = event[2];
    const paragraphs = card.querySelectorAll("p");
    paragraphs[paragraphs.length - 1].textContent = event[3];
    card.querySelector(".event-date span").textContent = i < 2 ? t.weekly : t.everyTwoWeeks;
  });

  const galleryHeading = document.querySelector("#gallery .section-heading");
  galleryHeading.querySelector(".eyebrow").textContent = t.galleryEyebrow;
  galleryHeading.querySelector("h2").textContent = t.galleryTitle;
  galleryHeading.querySelector("p:last-child").textContent = t.galleryIntro;
  document.querySelector(".gallery-featured img").alt = lang === "zh" ? "接棒者基督教会聚会" : "Kuala Lumpur Christian Fellowship gathering";
  document.querySelector(".gallery-featured figcaption").textContent = t.title;
  document.querySelectorAll(".gallery-placeholder").forEach((item, i) => {
    item.querySelector("strong").textContent = t.galleryLabels[i];
    item.querySelector("small").textContent = t.addPhoto;
  });

  const locationHeading = document.querySelector("#location .section-heading");
  locationHeading.querySelector(".eyebrow").textContent = t.locationEyebrow;
  locationHeading.querySelector("h2").textContent = t.locationTitle;
  locationHeading.querySelector("p:last-child").textContent = t.locationIntro;
  document.querySelector("#location .location-card h3").textContent = t.title;
  document.querySelector("#location .text-link").textContent = t.maps;
  document.querySelector("#location .text-link")?.setAttribute("aria-label", t.maps);
  document.querySelector("#location .map-placeholder")?.setAttribute("aria-label", lang === "zh" ? "接棒者基督教会地点地图" : "Kuala Lumpur Christian Fellowship location map");
  document.querySelector("#location iframe")?.setAttribute("title", lang === "zh" ? "接棒者基督教会地点地图" : "Kuala Lumpur Christian Fellowship location map");

  const contactHeading = document.querySelector("#contact .section-heading");
  contactHeading.querySelector(".eyebrow").textContent = t.contactEyebrow;
  contactHeading.querySelector("h2").textContent = t.contactTitle;
  contactHeading.querySelector("p:last-child").textContent = t.contactIntro;
  const contactCards = document.querySelectorAll(".contact-card");
  contactCards[0].querySelector("h3").textContent = t.call;
  contactCards[0].querySelector(".contact-action").textContent = t.callAction;
  contactCards[1].querySelector("h3").textContent = t.facebook;
  contactCards[1].querySelector(".contact-action").textContent = t.facebookAction;

  setText(".footer p", `© ${new Date().getFullYear()} ${t.title}. ${t.footer}`);
  languageButtons.forEach(button => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active);
  });
  localStorage.setItem("klcf-language", lang);
}

languageButtons.forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("klcf-language");
applyLanguage(savedLanguage === "en" ? "en" : "zh");
