    /* ========================= 
   CONFIG — unique school password
   Change this to your real password.
   ========================= */
const ACCESS_PASSWORD = "SCHOOL-2025";

/* =========================
   QUIZ BANK — per class
   Replace or extend as needed.
   ========================= */
const QUIZZES = {
  "Grade 1": {
    topic: "Colors & Simple Shapes (Nursery 1)",
    durationSeconds: 2 * 60,
    questions: [
      { id:1, text:"What color are strawberries?", options:["Blue","Red","Black","Grey"], answerIndex:1 },
      { id:2, text:"Which of these is round?", options:["Triangle","Circle","Square","Line"], answerIndex:1 },
      { id:3, text:"What color is grass?", options:["Yellow","Green","Pink","Purple"], answerIndex:1 }
    ]
  },
  "Grade 2": {
    topic: "Animals & Colors (Nursery 2)",
    durationSeconds: 3 * 60,
    questions: [
      { id:1, text:"Which animal says 'Moo'?", options:["Dog","Cat","Cow","Bird"], answerIndex:2 },
      { id:2, text:"What color is the sky on a sunny day?", options:["Blue","Brown","Black","Green"], answerIndex:0 },
      { id:3, text:"Which of these is a baby cat?", options:["Puppy","Calf","Kitten","Foal"], answerIndex:2 },
	  { id:4, text:"What color is the sky on a sunny day?", options:["Blue","Brown","Black","Green"], answerIndex:0 },
      { id:5, text:"Which of these is a baby cat?", options:["Puppy","Calf","Kitten","Foal"], answerIndex:2 },
	  { id:6, text:"What color is the sky on a sunny day?", options:["Blue","Brown","Black","Green"], answerIndex:0 },
      { id:7, text:"Which of these is a baby cat?", options:["Puppy","Calf","Kitten","Foal"], answerIndex:2 },
	  { id:8, text:"What color is the sky on a sunny day?", options:["Blue","Brown","Black","Green"], answerIndex:0 },
      { id:9, text:"Which of these is a baby cat?", options:["Puppy","Calf","Kitten","Foal"], answerIndex:2 },
	  { id:10, text:"What color is the sky on a sunny day?", options:["Blue","Brown","Black","Green"], answerIndex:0 },
      { id:11, text:"Which of these is a baby cat?", options:["Puppy","Calf","Kitten","Foal"], answerIndex:2 },
	  { id:12, text:"What color is the sky on a sunny day?", options:["Blue","Brown","Black","Green"], answerIndex:0 },
      { id:13, text:"Which of these is a baby cat?", options:["Puppy","Calf","Kitten","Foal"], answerIndex:2 },
	  { id:14, text:"What color is the sky on a sunny day?", options:["Blue","Brown","Black","Green"], answerIndex:0 },
      { id:15, text:"Which of these is a baby cat?", options:["Puppy","Calf","Kitten","Foal"], answerIndex:2 },
	  { id:16, text:"What color is the sky on a sunny day?", options:["Blue","Brown","Black","Green"], answerIndex:0 },
      { id:17, text:"Which of these is a baby cat?", options:["Puppy","Calf","Kitten","Foal"], answerIndex:2 },
	  { id:18, text:"What color is the sky on a sunny day?", options:["Blue","Brown","Black","Green"], answerIndex:0 },
      { id:19, text:"Which of these is a baby cat?", options:["Puppy","Calf","Kitten","Foal"], answerIndex:2 },
      { id:20, text:"What color are most bananas when ripe?", options:["Blue","Yellow","Red","Pink"], answerIndex:1 }
    ]
  },
  "Grade 3": {
    topic: "Shapes, Counting & Colors (Kindergarten)",
    durationSeconds: 4 * 60,
    questions: [
      { id:1, text:"How many sides does a square have?", options:["3","4","5","6"], answerIndex:1 },
      { id:2, text:"What shape has three corners?", options:["Circle","Triangle","Rectangle","Oval"], answerIndex:1 },
	  { id:3, text:"How many sides does a square have?", options:["3","4","5","6"], answerIndex:1 },
      { id:4, text:"2 + 2 = ?", options:["3","4","5","6"], answerIndex:1 },
      { id:5, text:"What color do you get when you mix red and white?", options:["Pink","Green","Blue","Brown"], answerIndex:0 }
    ]
  },
  "Grade 4": {
    topic: "Basic Math & Shapes (Primary 1)",
    durationSeconds: 5 * 60,
    questions: [
      { id:1, text:"5 - 2 = ?", options:["1","2","3","4"], answerIndex:2 },
      { id:2, text:"Which has 4 equal sides?", options:["Triangle","Square","Circle","Line"], answerIndex:1 },
      { id:3, text:"What is 3 + 4?", options:["6","7","8","9"], answerIndex:1 },
      { id:4, text:"Which is not a shape?", options:["Circle","Apple","Rectangle","Triangle"], answerIndex:1 }
   ]
 },
"Grade 5": {
  topic: "GST",
  durationSeconds: 15 * 60,
  questions: [
    { 
      id:1, 
      text:"Which is incorrect?", 
      options:[
        "A healthy environment is attractive",
        "A healthy environment is safe for living",
        "A healthy environment prevents diseases",
        "A healthy environment causes pollution"
      ], 
      answerIndex:3 
    },
    { id:2, text:"What shape has three corners?", options:["Circle","Triangle","Rectangle","Oval"], answerIndex:1 },
    { id:3, text:"11-1 (6+4) = ?", options:["20","11","6","10"], answerIndex:0 },
    { id:4, text:"What color do you get when you mix red and white?", options:["Pink","Green","Blue","Brown"], answerIndex:0 },
    { id:5, text:"The keyboard as __ and __ keys?", options:["White and black","yellow and white","black and green","brown and purple"], answerIndex:0 },
    { id:6, text:"Who used his rod to divide the red sea?", options:["Aeron","Cain","Moses","Job"], answerIndex:2 },
    { id:7, text:"__is an example of primary color", options:["pink","brown","grey","Red"], answerIndex:3 },
    { id:8, text:"What is the capital city of Nigeria?", options:["Lagos","Ekiti","Abuja","London"], answerIndex:2 },
    { id:9, text:"What is the opposite of BIG?", options:["Small","long","large","thin"], answerIndex:0 },
    { id:10, text:"If Sally has 15 pencils and she gives 2 to her friend, how many pencils does Sally have left?", options:["13","14","15","16"], answerIndex:0 }
  ]
}
};

/* =========================
   STATE & ELEMENTS
   ========================= */
const pages = {
  login: document.getElementById('loginPage'),
  prep: document.getElementById('prepPage'),
  quiz: document.getElementById('quizPage'),
  result: document.getElementById('resultPage')
};
const el = {
  // login
  loginForm: document.getElementById('loginForm'),
  pName: document.getElementById('pName'),
  pClass: document.getElementById('pClass'),
  pExam: document.getElementById('pExam'),
  pPass: document.getElementById('pPass'),
  demoBtn: document.getElementById('demoBtn'),
  // prep
  uName: document.getElementById('uName'),
  uClass: document.getElementById('uClass'),
  uExam: document.getElementById('uExam'),
  startQuizBtn: document.getElementById('startQuizBtn'),
  backToLoginBtn: document.getElementById('backToLoginBtn'),
  // quiz
  topicTitle: document.getElementById('topicTitle'),
  countBadge: document.getElementById('countBadge'),
  timeLeft: document.getElementById('timeLeft'),
  progressBar: document.getElementById('progressBar'),
  qnums: document.getElementById('qnums'),
  questionContainer: document.getElementById('questionContainer'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  submitBtn: document.getElementById('submitBtn'),
  // result
  rName: document.getElementById('rName'),
  rClass: document.getElementById('rClass'),
  rExam: document.getElementById('rExam'),
  rTopic: document.getElementById('rTopic'),
  rDate: document.getElementById('rDate'),
  rScore: document.getElementById('rScore'),
  printBtn: document.getElementById('printBtn'),
  restartBtn: document.getElementById('restartBtn')
};

const state = {
  user: { name:"", class:"", examNo:"" },
  quiz: null,
  currentIndex: 0,
  answers: [],
  timeLeft: 0,
  timerId: null
};

/* =========================
   HELPERS
   ========================= */
function show(page){
  pages.login.style.display  = page==='login'  ? 'block':'none';
  pages.prep.style.display   = page==='prep'   ? 'block':'none';
  pages.quiz.style.display   = page==='quiz'   ? 'block':'none';
  pages.result.style.display = page==='result' ? 'block':'none';
}
function pad(n){ return String(n).padStart(2,'0'); }
function formatTime(sec){ const m=Math.floor(sec/60), s=sec%60; return `${pad(m)}:${pad(s)}`; }

/* =========================
   LOGIN FLOW
   ========================= */
el.demoBtn.addEventListener('click', ()=>{
  el.pName.value = "Test Pupil";
  el.pClass.value = "Nursery 2";
  el.pExam.value = "NUR-2025-001";
  el.pPass.value = ACCESS_PASSWORD;
});

el.loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = el.pName.value.trim();
  const cls  = el.pClass.value.trim();
  const exam = el.pExam.value.trim();
  const pass = el.pPass.value;

  if(!name || !cls || !exam || !pass){ alert("Please fill all fields."); return; }
  if(pass !== ACCESS_PASSWORD){ alert("Incorrect password. Please check with your school."); return; }
  if(!QUIZZES[cls]){ alert("No quiz found for the selected class."); return; }

  state.user = { name, class:cls, examNo:exam };
  state.quiz = JSON.parse(JSON.stringify(QUIZZES[cls])); // copy
  state.currentIndex = 0;
  state.answers = Array(state.quiz.questions.length).fill(null);
  state.timeLeft = state.quiz.durationSeconds;

  // prep page text
  el.uName.textContent = name;
  el.uClass.textContent = cls;
  el.uExam.textContent = exam;

  show('prep');
});

/* =========================
   PREP → QUIZ
   ========================= */
el.backToLoginBtn.addEventListener('click', ()=> show('login'));
el.startQuizBtn.addEventListener('click', ()=>{
  // init quiz header
  el.topicTitle.textContent = `Topic: ${state.quiz.topic}`;
  el.countBadge.textContent = `0/${state.quiz.questions.length}`;
  el.progressBar.style.width = '0%';
  renderQnums();
  renderQuestion();
  updateProgress();
  startTimer();
  show('quiz');
});

/* =========================
   QUIZ RENDERING
   ========================= */
function renderQnums(){
  el.qnums.innerHTML = '';
  state.quiz.questions.forEach((q, idx)=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'qnum';
    b.textContent = idx + 1;
    b.addEventListener('click', ()=> { state.currentIndex = idx; renderQuestion(); updateProgress(); });
    el.qnums.appendChild(b);
  });
}
function renderQuestion(){
  const q = state.quiz.questions[state.currentIndex];
  const saved = state.answers[state.currentIndex];

  const wrapper = document.createElement('div');
  wrapper.className = 'question';
  const title = document.createElement('h3');
  title.className = 'q-title';
  title.textContent = `Q${state.currentIndex+1}. ${q.text}`;
  wrapper.appendChild(title);

  const choices = document.createElement('div');
  choices.className = 'choices';
  q.options.forEach((opt, idx)=>{
    const label = document.createElement('label');
    label.className = 'choice';
    const input = document.createElement('input');
    input.type = 'radio'; input.name = `q${q.id}`; input.value = idx;
    input.checked = saved === idx;
    input.addEventListener('change', ()=>{
      state.answers[state.currentIndex] = idx;
      updateProgress();
    });
    const span = document.createElement('span'); span.textContent = opt;
    label.appendChild(input); label.appendChild(span);
    choices.appendChild(label);
  });

  wrapper.appendChild(choices);
  el.questionContainer.innerHTML = '';
  el.questionContainer.appendChild(wrapper);

  el.prevBtn.disabled = state.currentIndex === 0;
  el.nextBtn.disabled = state.currentIndex === state.quiz.questions.length - 1;

  [...el.qnums.children].forEach((btn,i)=>btn.classList.toggle('active', i===state.currentIndex));
}
function updateProgress(){
  const answered = state.answers.filter(v => v !== null).length;
  const total = state.quiz.questions.length;
  el.countBadge.textContent = `${answered}/${total}`;
  el.progressBar.style.width = `${Math.round((answered/total)*100)}%`;
  [...el.qnums.children].forEach((btn,i)=>{
    btn.classList.toggle('answered', state.answers[i] !== null);
    btn.classList.toggle('active', i === state.currentIndex);
  });
}
el.prevBtn.addEventListener('click', ()=>{ if(state.currentIndex>0){ state.currentIndex--; renderQuestion(); updateProgress(); }});
el.nextBtn.addEventListener('click', ()=>{ if(state.currentIndex<state.quiz.questions.length-1){ state.currentIndex++; renderQuestion(); updateProgress(); }});

/* TIMER */
function startTimer(){
  clearInterval(state.timerId);
  el.timeLeft.textContent = formatTime(state.timeLeft);
  state.timerId = setInterval(()=>{
    state.timeLeft--;
    el.timeLeft.textContent = formatTime(Math.max(0,state.timeLeft));
    if(state.timeLeft <= 0){ clearInterval(state.timerId); submitQuiz(true); }
  }, 1000);
}

/* SUBMIT */
function computeScore(){
  let s = 0;
  state.quiz.questions.forEach((q,i)=>{ if(state.answers[i] === q.answerIndex) s++; });
  return s;
}
function submitQuiz(auto=false){
  clearInterval(state.timerId);
  const left = state.answers.filter(x=>x===null).length;
  if(!auto && left>0){
    const ok = confirm(`You have ${left} unanswered question(s). Submit anyway?`);
    if(!ok) return;
  }
  const score = computeScore();
  const total = state.quiz.questions.length;
  const pct = Math.round((score/total)*100);

  // populate results
  el.rName.textContent = state.user.name;
  el.rClass.textContent = state.user.class;
  el.rExam.textContent = state.user.examNo;
  el.rTopic.textContent = state.quiz.topic;
  el.rDate.textContent = new Date().toLocaleString();
  el.rScore.textContent = `${score} / ${total} (${pct}%)`;

  // 🔽 ADD THIS BLOCK (logo/brand at top of result)
  const resultPage = document.getElementById('resultPage');
  let brand = document.getElementById('resultBrand');
  if(!brand){
    brand = document.createElement('div');
    brand.id = 'resultBrand';
    brand.innerHTML = `<img src="mercy.jpg" alt="School Logo" style="max-height:80px; margin-bottom:15px;margin-left:470px;">`;
    resultPage.insertBefore(brand, resultPage.firstChild);
  }

  // 🔽 ADD THIS BLOCK (answers review)
  let detailsContainer = document.getElementById('answerDetails');
  if(!detailsContainer){
    detailsContainer = document.createElement('div');
    detailsContainer.id = 'answerDetails';
    resultPage.appendChild(detailsContainer);
  }
  detailsContainer.innerHTML = '<h3>Answer Review</h3>';

  state.quiz.questions.forEach((q, i) => {
    const chosenIndex = state.answers[i];
    const chosenText = chosenIndex !== null ? q.options[chosenIndex] : "Not answered";
    const correctText = q.options[q.answerIndex];

    const item = document.createElement('div');
    item.style.marginBottom = "12px";
    item.innerHTML = `
      <p><strong>Q${i+1}:</strong> ${q.text}</p>
  <p><span style="color:blue;">👉</span> Your answer: <span style="color:${chosenIndex === q.answerIndex ? 'green':'red'}">${chosenText}</span></p>
  <p><span style="color:green;">✅</span> Correct answer: ${correctText}</p>
    `;
    detailsContainer.appendChild(item);
  });

  show('result');
}


el.submitBtn.addEventListener('click', ()=> submitQuiz(false));

/* RESULT ACTIONS */
el.printBtn.addEventListener('click', ()=> window.print());
el.restartBtn.addEventListener('click', ()=>{
  // back to login so another pupil can take it
  // (you could also send back to prep if you prefer)
  show('login');
  // optional: clear fields
   el.loginForm.reset();
});



