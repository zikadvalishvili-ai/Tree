// ხის სასიცოცხლო ციკლი — 4 წელიწადის დრო (საგანმანათლებლო თამაში ბავშვებისთვის)

const SEASONS_DATA = [
  {
    id: 'spring',
    bodyClass: 'season-spring',
    stepNum: 'ეტაპი 1 / 4',
    icon: '🌱',
    title: 'გაზაფხული',
    subtitle: 'გამოღვიძება',
    visualDesc: 'ტოტებზე პატარა კვირტები და ნორჩი მწვანე ფოთლები გამოდის — ბუნება იღვიძებს.',
    thought: '„რა სასიამოვნო ამინდია?!“',
    tickleThoughts: [
      '„ჰიჰი! ნაზი ნიავი და მზის სხივები მიყვარს!“',
      '„შეხედე ჩემს პატარა კვირტებსა და ნორჩ ფოთლებს, როგორ იღვიძებენ!“'
    ],
    question: 'რატომ ჩნდება კვირტები?',
    options: [
      {
        letter: 'ა',
        text: 'მზემ გაათბო მიძინებული ხე და იღვიძებს!',
        isCorrect: true
      },
      {
        letter: 'ბ',
        text: 'ცივა და ისევ ეძინება ხეს.',
        isCorrect: false
      }
    ],
    correctFeedback: 'ყოჩაღ! თბილმა მზემ გაათბო მიძინებული ხე, მან გაიღვიძა და ტოტებზე კვირტები და ნორჩი ფოთლები გამოიტანა!',
    wrongFeedback: 'კიდევ ერთხელ სცადე! გაზაფხულზე ხომ მზე ანათებს და თბება — რას შვრება ამ დროს მიძინებული ხე?',
    nextBtnLabel: 'გადავიდეთ ზაფხულში ☀️',
    particles: ['🌸', '🌿', '🌱', '🦋']
  },
  {
    id: 'summer',
    bodyClass: 'season-summer',
    stepNum: 'ეტაპი 2 / 4',
    icon: '🍎',
    title: 'ზაფხული',
    subtitle: 'მომწიფება და სიცოცხლე',
    visualDesc: 'ხე სავსეა ხშირი მწვანე ფოთლებითა და მწიფე ნაყოფით.',
    thought: '„ეს რა ხდება? ნელ-ნელა ტოტები მიმძიმდება.“',
    tickleThoughts: [
      '„უჰ, რამდენი ტკბილი ვაშლი და მწვანე ფოთოლი მაქვს!“',
      '„ჩემს გრილ ჩრდილში ჩიტები და ბავშვები ისვენებენ!“'
    ],
    question: 'რა ხდება ზაფხულზე?',
    options: [
      {
        letter: 'ა',
        text: 'ხეს ფოთლები სცვივა.',
        isCorrect: false
      },
      {
        letter: 'ბ',
        text: 'მზე ამწიფებს და ატკბობს ხილს.',
        isCorrect: true
      }
    ],
    correctFeedback: 'სწორია! ზაფხულის თბილი მზე ხილს ამწიფებს და ატკბობს, ამიტომაც დაუმძიმდა ხეს ტოტები!',
    wrongFeedback: 'კიდევ სცადე, ჩემო მეგობარო! დააკვირდი ხის ტოტებს — რა კიდია მასზე და რატომ დაუმძიმდა ტოტები?',
    nextBtnLabel: 'გადავიდეთ შემოდგომაზე 🍂',
    particles: ['🍃', '☀️', '🐞', '✨']
  },
  {
    id: 'autumn',
    bodyClass: 'season-autumn',
    stepNum: 'ეტაპი 3 / 4',
    icon: '🍂',
    title: 'შემოდგომა',
    subtitle: 'მომზადება და ფოთოლცვენა',
    visualDesc: 'ფოთლები ყვითლდება და ნელ-ნელა ძირს ცვივა.',
    thought: '„ფოთლები ყვითლდება და ცვივა...“',
    tickleThoughts: [
      '„შრიალ-შრიალით მიფრინავენ ჩემი ოქროსფერი ფოთლები!“',
      '„გაზაფხულზე ისევ შევხვდებით, ჩემო ფოთლებო!“'
    ],
    question: 'რატომ ცვივა ფოთლები?',
    options: [
      {
        letter: 'ა',
        text: 'ზამთრისთვის ძალების მოსაკრებად.',
        isCorrect: true
      },
      {
        letter: 'ბ',
        text: 'იმიტომ, რომ გაბრაზდა.',
        isCorrect: false
      }
    ],
    correctFeedback: 'ბრწყინვალეა! ხე სულაც არ გაბრაზებულა — ის ფოთლებს იცვენს, რომ ზამთრისთვის ძალები მოიკრიბოს და შეინახოს!',
    wrongFeedback: 'სცადე თავიდან! ჩვენი კეთილი ხე არ გაბრაზებულა — წინ ცივი ზამთარია და რისთვის ემზადება ის?',
    nextBtnLabel: 'გადავიდეთ ზამთარში ❄️',
    particles: ['🍂', '🍁', '🍃']
  },
  {
    id: 'winter',
    bodyClass: 'season-winter',
    stepNum: 'ეტაპი 4 / 4',
    icon: '❄️',
    title: 'ზამთარი',
    subtitle: 'დასვენება და ძილი',
    visualDesc: 'შიშველი ტოტები და თოვლი ირგვლივ.',
    thought: '„სიცივეა, მაგრამ მე ფესვები გამათბობს.“',
    tickleThoughts: [
      '„ჩუუ... ტკბილად მძინავს, მიწის ქვეშ კი ფესვები მათბობს...“',
      '„ზზზ... სიზმარში უკვე გაზაფხულის მზეს ვხედავ!“'
    ],
    question: 'რა მოსდის ხეს ზამთარში?',
    options: [
      {
        letter: 'ა',
        text: 'იძინებს და გაზაფხულზე ისევ ცოცხლდება!',
        isCorrect: true
      },
      {
        letter: 'ბ',
        text: 'ხე მწვანდება და ნაყოფს ისხამს.',
        isCorrect: false
      }
    ],
    correctFeedback: 'გასაოცარია! ზამთარში ხეს თბილი ფესვები ათბობს, მშვიდად იძინებს და გაზაფხულზე ისევ გაცოცხლდება!',
    wrongFeedback: 'კიდევ სცადე! შეხედე თოვლიან ტოტებსა და თვალდახუჭულ ხეს — რას აკეთებს ის ზამთრის სიცივეში?',
    nextBtnLabel: 'მოგზაურობის დასრულება 🌟',
    particles: ['❄️', '🌨️', '✨']
  }
];

// Application State
let currentSeasonIndex = 0;
let isCurrentQuestionSolved = false;
let soundEnabled = true;
let musicEnabled = false;
let audioCtx = null;
let melodyIntervalId = null;
let melodyStep = 0;

// DOM Elements
const bodyEl = document.body;
const particlesLayer = document.getElementById('particlesLayer');
const thoughtBubble = document.getElementById('thoughtBubble');
const thoughtText = document.getElementById('thoughtText');
const treeCharacter = document.getElementById('treeCharacter');
const treeFace = document.getElementById('treeFace');

const storyCard = document.getElementById('storyCard');
const finaleCard = document.getElementById('finaleCard');

const seasonHeroBanner = document.getElementById('seasonHeroBanner');
const seasonBadgeIcon = document.getElementById('seasonBadgeIcon');
const seasonBadgeNum = document.getElementById('seasonBadgeNum');
const seasonTitle = document.getElementById('seasonTitle');
const seasonSubtitle = document.getElementById('seasonSubtitle');
const seasonVisualDesc = document.getElementById('seasonVisualDesc');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackBanner = document.getElementById('feedbackBanner');
const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextSeasonBtn = document.getElementById('nextSeasonBtn');
const nextBtnText = document.getElementById('nextBtnText');
const restartBtn = document.getElementById('restartBtn');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const soundIcon = document.getElementById('soundIcon');
const musicToggleBtn = document.getElementById('musicToggleBtn');
const musicIcon = document.getElementById('musicIcon');
const musicLabel = document.getElementById('musicLabel');

const introVideoScreen = document.getElementById('introVideoScreen');
const introVideo = document.getElementById('introVideo');
const videoPlayOverlay = document.getElementById('videoPlayOverlay');
const introHint = document.getElementById('introHint');
const startGameBtn = document.getElementById('startGameBtn');
const topBar = document.getElementById('topBar');
const gameLayout = document.getElementById('gameLayout');

const endVideoScreen = document.getElementById('endVideoScreen');
const endVideo = document.getElementById('endVideo');
const restartFromEndVideoBtn = document.getElementById('restartFromEndVideoBtn');

const stepButtons = [
  document.getElementById('step-0'),
  document.getElementById('step-1'),
  document.getElementById('step-2'),
  document.getElementById('step-3')
];

// Web Audio API Synthesizer for Gentle Kid-Friendly Sound Effects & Nature Melody
function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTone(freq, type = 'sine', duration = 0.2, delay = 0, volume = 0.12) {
  if (!soundEnabled) return;
  initAudio();
  if (!audioCtx) return;

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const startTime = audioCtx.currentTime + delay;

  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);

  gain.gain.setValueAtTime(0.001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(startTime);
  osc.stop(startTime + duration + 0.02);
}

// Gentle Nature Melody (Harp/Kalimba Arpeggio + Soft Bird Chirps)
const NATURE_CHORDS = [
  // C major9 warm nature chord
  { bass: 261.63, notes: [523.25, 659.25, 783.99, 987.77, 783.99, 659.25] },
  // A minor7 gentle breeze
  { bass: 220.00, notes: [440.00, 523.25, 659.25, 783.99, 659.25, 523.25] },
  // F major7 warm sunlight
  { bass: 174.61, notes: [349.23, 440.00, 523.25, 659.25, 523.25, 440.00] },
  // G6 pastoral resolution
  { bass: 196.00, notes: [392.00, 493.88, 587.33, 659.25, 587.33, 493.88] }
];

function playMelodyNote(freq, duration = 0.9, volume = 0.045, type = 'sine') {
  if (!musicEnabled || !audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.0005, now);
  gain.gain.linearRampToValueAtTime(volume, now + 0.06);
  gain.gain.exponentialRampToValueAtTime(0.0005, now + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + duration + 0.05);
}

function playSoftBirdChirp() {
  if (!musicEnabled || !audioCtx || currentSeasonIndex === 3) return; // Quiet in winter sleep
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  const baseFreq = 1650 + Math.random() * 450;
  osc.type = 'sine';
  osc.frequency.setValueAtTime(baseFreq, now);
  osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.28, now + 0.09);
  osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.95, now + 0.16);
  osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.35, now + 0.26);

  gain.gain.setValueAtTime(0.0005, now);
  gain.gain.linearRampToValueAtTime(0.018, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0005, now + 0.30);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc.stop(now + 0.32);
}

function startNatureMelody() {
  initAudio();
  if (melodyIntervalId) clearInterval(melodyIntervalId);
  musicEnabled = true;
  musicToggleBtn.classList.add('playing');
  musicIcon.textContent = '🎶';
  musicLabel.textContent = 'მელოდია ჩართულია';

  const tickMelody = () => {
    if (!musicEnabled) return;
    const chordIndex = Math.floor(melodyStep / 6) % NATURE_CHORDS.length;
    const noteIndex = melodyStep % 6;
    const chord = NATURE_CHORDS[chordIndex];

    // Play warm bass pad on first beat of each bar
    if (noteIndex === 0) {
      playMelodyNote(chord.bass, 2.8, 0.035, 'triangle');
    }

    // Play delicate harp/kalimba arpeggio note
    const noteFreq = chord.notes[noteIndex];
    playMelodyNote(noteFreq, 1.15, 0.045, 'sine');

    // Occasional gentle bird chirp in spring/summer
    if (noteIndex === 3 && Math.random() < 0.45) {
      playSoftBirdChirp();
    }

    melodyStep++;
  };

  tickMelody();
  melodyIntervalId = setInterval(tickMelody, 520);
}

function stopNatureMelody() {
  musicEnabled = false;
  if (melodyIntervalId) {
    clearInterval(melodyIntervalId);
    melodyIntervalId = null;
  }
  musicToggleBtn.classList.remove('playing');
  musicIcon.textContent = '🎵';
  musicLabel.textContent = 'ბუნების მელოდია';
}

function ensureMelodyStartedOnInteraction() {
  if (!musicEnabled && melodyStep === 0) {
    startNatureMelody();
  }
}

function playSuccessMelody() {
  playTone(523.25, 'triangle', 0.18, 0, 0.15);    // C5
  playTone(659.25, 'triangle', 0.18, 0.12, 0.15); // E5
  playTone(783.99, 'triangle', 0.22, 0.24, 0.16); // G5
  playTone(1046.50, 'sine', 0.4, 0.36, 0.18);     // C6
}

function playRetrySound() {
  playTone(349.23, 'sine', 0.22, 0, 0.12);   // F4
  playTone(311.13, 'sine', 0.3, 0.16, 0.12); // D#4
}

function playPopSound() {
  playTone(620, 'sine', 0.12, 0, 0.1);
  playTone(880, 'sine', 0.15, 0.06, 0.1);
}

function playVictoryFanfare() {
  const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
  const delays = [0, 0.12, 0.24, 0.36, 0.52, 0.66];
  notes.forEach((n, i) => playTone(n, 'triangle', 0.28, delays[i], 0.16));
}

// Render Ambient Seasonal Particles
function renderParticles(symbols) {
  particlesLayer.innerHTML = '';
  const count = 18;
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'particle';
    span.textContent = symbols[i % symbols.length];
    span.style.left = `${Math.random() * 96}%`;
    span.style.animationDuration = `${6 + Math.random() * 7}s`;
    span.style.animationDelay = `${-Math.random() * 10}s`;
    span.style.fontSize = `${1.05 + Math.random() * 0.85}rem`;
    particlesLayer.appendChild(span);
  }
}

// Update Thought Bubble with Pop Animation
function updateThoughtBubble(text) {
  thoughtBubble.classList.remove('pop-anim');
  void thoughtBubble.offsetWidth; // trigger reflow
  thoughtText.textContent = text;
  thoughtBubble.classList.add('pop-anim');
}

// Load a Season Stage
function loadSeason(index) {
  currentSeasonIndex = index;
  isCurrentQuestionSolved = false;
  const season = SEASONS_DATA[index];

  // Set Body Theme Class
  bodyEl.className = season.bodyClass;

  // Reset Tree Expressions & Animations
  treeCharacter.classList.remove('celebrating', 'encouraging');
  treeFace.classList.remove('face-celebrating', 'face-curious');
  if (season.id === 'summer') {
    treeFace.classList.add('face-curious');
  }

  // Update Stepper Pills
  stepButtons.forEach((btn, idx) => {
    btn.classList.remove('active', 'completed');
    if (idx < index) {
      btn.classList.add('completed');
      btn.disabled = false;
    } else if (idx === index) {
      btn.classList.add('active');
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
  });

  // Update Thought Bubble
  updateThoughtBubble(season.thought);

  // Update Story Card Info & Trigger Animated Season Title Entrance
  storyCard.classList.remove('hidden');
  finaleCard.classList.add('hidden');

  seasonHeroBanner.classList.remove('season-entrance-anim');
  void seasonHeroBanner.offsetWidth; // trigger reflow for fresh animation every turn
  seasonHeroBanner.classList.add('season-entrance-anim');

  seasonBadgeIcon.textContent = season.icon;
  seasonBadgeNum.textContent = season.stepNum;
  seasonTitle.textContent = season.title;
  seasonSubtitle.textContent = season.subtitle;
  seasonVisualDesc.textContent = season.visualDesc;
  questionText.textContent = season.question;

  // Hide Feedback & Next Button
  feedbackBanner.classList.add('hidden');
  feedbackBanner.classList.remove('success', 'retry');
  nextSeasonBtn.classList.add('hidden');
  nextBtnText.textContent = season.nextBtnLabel;

  // Render Options
  optionsContainer.innerHTML = '';
  season.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'option-btn';
    btn.innerHTML = `
      <span class="option-letter">${opt.letter})</span>
      <span class="option-text">${opt.text}</span>
    `;
    btn.addEventListener('click', () => handleAnswerSelect(opt, btn, season));
    optionsContainer.appendChild(btn);
  });

  // Render Particles
  renderParticles(season.particles);
}

// Handle Child's Answer Selection
function handleAnswerSelect(selectedOption, buttonEl, season) {
  if (isCurrentQuestionSolved) return;

  if (selectedOption.isCorrect) {
    isCurrentQuestionSolved = true;
    playSuccessMelody();

    // Style Selected Button & Lock Options
    buttonEl.classList.add('correct');
    const allOptionBtns = optionsContainer.querySelectorAll('.option-btn');
    allOptionBtns.forEach((b) => {
      b.disabled = true;
    });

    // Make the Tree Smile Broadly and Move Playfully!
    treeCharacter.classList.remove('encouraging');
    treeCharacter.classList.add('celebrating');
    treeFace.classList.remove('face-curious');
    treeFace.classList.add('face-celebrating');

    // Update Tree's Thought with Joy
    updateThoughtBubble('„ურაა! სწორია! დიდი მადლობა, ჩემო ჭკვიანო მეგობარო! 😊🌿“');

    // Show Positive Feedback Banner
    feedbackBanner.classList.remove('hidden', 'retry');
    feedbackBanner.classList.add('success');
    feedbackIcon.textContent = '🌟';
    feedbackMessage.textContent = season.correctFeedback;

    // Show Next Season Button
    nextSeasonBtn.classList.remove('hidden');
  } else {
    playRetrySound();

    // Style Wrong Button Temporarily so Child Can Try Again
    buttonEl.classList.add('wrong');
    buttonEl.disabled = true;

    // Gentle Tree Head Shake & Encouraging Expression
    treeCharacter.classList.remove('celebrating', 'encouraging');
    void treeCharacter.offsetWidth;
    treeCharacter.classList.add('encouraging');

    // Tree Encourages the Child to Try Again
    updateThoughtBubble('„არა უშავს, ჩემო პატარავ! კიდევ ერთხელ სცადე, დარწმუნებული ვარ გამოიცნობ! 🌱“');

    // Show Encouraging Retry Banner
    feedbackBanner.classList.remove('hidden', 'success');
    feedbackBanner.classList.add('retry');
    feedbackIcon.textContent = '💡';
    feedbackMessage.textContent = season.wrongFeedback;
  }
}

// Show Final Video (end.mp4) & "თავიდან დაწყება" Button After Completing All 4 Seasons
function showFinaleScreen() {
  stopNatureMelody();
  playVictoryFanfare();
  bodyEl.className = 'season-finale';

  topBar.classList.add('hidden');
  gameLayout.classList.add('hidden');
  endVideoScreen.classList.remove('hidden');

  renderParticles(['🌸', '🍎', '🍂', '❄️', '🎉', '💚']);

  endVideo.currentTime = 0;
  const playPromise = endVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // User can press play on video controls if blocked
    });
  }
}

// Event Listeners
nextSeasonBtn.addEventListener('click', () => {
  playPopSound();
  if (currentSeasonIndex < SEASONS_DATA.length - 1) {
    loadSeason(currentSeasonIndex + 1);
  } else {
    showFinaleScreen();
  }
});

restartBtn.addEventListener('click', () => {
  playPopSound();
  loadSeason(0);
});

restartFromEndVideoBtn.addEventListener('click', () => {
  playPopSound();
  endVideo.pause();
  endVideo.currentTime = 0;
  endVideoScreen.classList.add('hidden');
  topBar.classList.remove('hidden');
  gameLayout.classList.remove('hidden');

  loadSeason(0);
  startNatureMelody();
});

// Allow clicking unlocked season pills in the top navigation
stepButtons.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    if (!btn.disabled) {
      playPopSound();
      loadSeason(idx);
    }
  });
});

//Interactive Tree Petting / Tickling
treeCharacter.addEventListener('click', () => {
  ensureMelodyStartedOnInteraction();
  playPopSound();
  treeCharacter.classList.remove('celebrating');
  void treeCharacter.offsetWidth;
  treeCharacter.classList.add('celebrating');

  const season = SEASONS_DATA[currentSeasonIndex];
  if (!finaleCard.classList.contains('hidden')) {
    updateThoughtBubble('„მიყვარხარ, ჩემო პატარა მეგობარო! მუდამ გაუფრთხილდი ბუნებას! 🌳💚“');
    return;
  }

  const randomTickle = season.tickleThoughts[Math.floor(Math.random() * season.tickleThoughts.length)];
  updateThoughtBubble(randomTickle);
});

// Music Toggle Button (Nature Melody)
musicToggleBtn.addEventListener('click', () => {
  if (musicEnabled) {
    stopNatureMelody();
  } else {
    startNatureMelody();
  }
});

// Sound Toggle Button
soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
  if (soundEnabled) {
    playPopSound();
  }
});

// Intro Video & Start Game Flow
function initIntroVideo() {
  renderParticles(['🌸', '🌿', '🌱', '🦋']);

  // Try to autoplay the intro video; if blocked by browser policy, show the big Play button overlay
  const playPromise = introVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      videoPlayOverlay.classList.remove('hidden');
    });
  }
}

videoPlayOverlay.addEventListener('click', () => {
  videoPlayOverlay.classList.add('hidden');
  introVideo.play();
});

introVideo.addEventListener('play', () => {
  videoPlayOverlay.classList.add('hidden');
});

// When the video finishes, reveal the "დაწყება" button
introVideo.addEventListener('ended', () => {
  playSuccessMelody();
  introHint.classList.add('hidden');
  startGameBtn.classList.remove('hidden');
});

// Clicking "დაწყება" transitions from the video screen into the interactive game
startGameBtn.addEventListener('click', () => {
  playPopSound();
  introVideo.pause();
  introVideoScreen.classList.add('hidden');
  topBar.classList.remove('hidden');
  gameLayout.classList.remove('hidden');

  loadSeason(0);
  startNatureMelody();
});

// Initialize Intro Video Screen on Load
document.addEventListener('DOMContentLoaded', () => {
  initIntroVideo();
});
