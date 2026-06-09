const KINGDOMS = {
  spring: {
    name: "春の王国",
    lead: "銀河の霧をまとった春の星域。"
  },
  summer: {
    name: "夏の王国",
    lead: "天の川が流れ、白鳥が星の道を渡る星域。",
    detailImage: "./assets/summer-kingdom-cygnus-detail.png",
    detailAlt: "夏の王国と白鳥座の詳細星図",
    detailTitle: "夏の星図",
    detailText: "天の川の上に白鳥座が羽を広げる。星の位置を何度も測ると、距離の手がかりが現れる。",
    steps: ["白鳥座キュグヌス", "デネブ", "アルビレオ", "61 Cygni"],
    points: [
      {
        id: "cygnus",
        x: 49,
        y: 46,
        label: "白鳥座",
        storyId: "cygnus"
      },
      {
        id: "deneb-preview",
        x: 49,
        y: 78,
        label: "デネブ",
        locked: true,
        note: "白鳥の尾に輝く遠方の一等星。明るさは近さだけでは決まらない。"
      },
      {
        id: "albireo-preview",
        x: 25,
        y: 42,
        label: "アルビレオ",
        locked: true,
        note: "くちばしに輝く色の対比。星の色は温度の手がかりになる。"
      },
      {
        id: "cygni61-preview",
        x: 18,
        y: 82,
        label: "61 Cygni",
        locked: true,
        note: "年周視差の歴史で重要な近い恒星。背景の星に対する小さなずれを読む。"
      }
    ]
  },
  autumn: {
    name: "秋の王国",
    lead: "神話と銀河の物語が重なる紫の星図。",
    detailImage: "./assets/autumn-kingdom-detail.png",
    detailAlt: "秋の王国の詳細星図",
    detailTitle: "秋の星図",
    detailText: "紫の森と古代神殿の下で、ペルセウス、アンドロメダ、ペガススの物語が星の道になる。",
    steps: ["悪魔の首アルゴル", "海獣の心臓ミラ", "アンドロメダ銀河 M31"],
    points: [
      {
        id: "algol",
        x: 13,
        y: 47,
        label: "アルゴル",
        storyId: "algol"
      },
      {
        id: "mira-preview",
        x: 36,
        y: 70,
        label: "ミラ",
        locked: true,
        note: "深い潮のように明滅する、くじら座の心臓。"
      },
      {
        id: "m31-preview",
        x: 84,
        y: 76,
        label: "M31",
        locked: true,
        note: "星座の奥に浮かぶ、隣の大銀河。"
      }
    ]
  },
  winter: {
    name: "冬の王国",
    lead: "青白い巨星が凍てつく冬の星域。"
  }
};

const STORIES = {
  algol: {
    kingdomId: "autumn",
    battleBg: "autumn",
    type: "STORY 1",
    name: "悪魔の首アルゴル",
    subtitle: "悪魔の星そのもの",
    lead: "ペルセウス座、メデューサの首に宿る変光星。",
    mechanic: "lightCurve",
    clearAt: 4,
    portrait: "./assets/algol-story-character.png",
    enemy: {
      normal: "./assets/algol-enemy-normal.png",
      eclipse: "./assets/algol-enemy-eclipse.png"
    },
    rule: "能力：数ターンごとに暗くなり、隠れている伴星が現れる。",
    clearRule: "攻略法：光度曲線を読んで「食」のタイミングを見破る。",
    lines: [
      {
        speaker: "星図",
        text: "秋の王国の奥、ペルセウス座の手元で、切り落とされた首がまだ光っている。",
        pattern: "normal"
      },
      {
        speaker: "ペルセウス",
        text: "メデューサは倒した。だが、その目だけは生きているように明滅を続ける。",
        pattern: "eclipse"
      },
      {
        speaker: "アルゴル",
        text: "我が名はアルゴル。アラビア語系で『悪魔の頭』と呼ばれた星。",
        pattern: "normal"
      },
      {
        speaker: "観測者",
        text: "呪いではない。明るさは周期的に落ち、また戻っている。光度曲線に谷がある。",
        pattern: "eclipse"
      },
      {
        speaker: "星図",
        text: "正体は食変光星。2つの星が互いに回り、片方がもう片方を隠すと暗くなる。",
        pattern: "eclipse"
      },
      {
        speaker: "獲得",
        text: "食変光星の砂時計を得た。暗くなる星を恐れず、食のタイミングとして読める。",
        pattern: "normal"
      }
    ]
  },
  cygnus: {
    kingdomId: "summer",
    battleBg: "summer",
    type: "STORY 2",
    name: "白鳥座キュグヌス",
    subtitle: "翼のずれを読む年周視差",
    lead: "夏の天の川を渡る白鳥座。距離は、空の小さなずれから見破る。",
    mechanic: "parallax",
    clearAt: 4,
    portrait: "./assets/cygnus-swan-normal.png",
    enemy: {
      normal: "./assets/cygnus-swan-normal.png",
      parallax: "./assets/cygnus-swan-parallax.png"
    },
    rule: "能力：半年ごとに翼の位置がわずかにずれて見える。",
    clearRule: "攻略法：年周視差 p を測り、d = 1 / p で距離を読む。",
    lines: [
      {
        speaker: "星図",
        text: "夏の王国、天の川の上に大きな十字が浮かぶ。星座絵では翼を広げた白鳥だ。",
        pattern: "normal"
      },
      {
        speaker: "白鳥座",
        text: "尾のデネブは遠く強く輝き、くちばしのアルビレオは色の違いを見せる。だが今夜の試練は距離だ。",
        pattern: "normal"
      },
      {
        speaker: "観測者",
        text: "半年おいて同じ星を見る。地球が公転軌道の反対側へ移ると、近い星だけ背景に対して少しずれる。",
        pattern: "parallax"
      },
      {
        speaker: "白鳥座",
        text: "この小さな角度が年周視差。視差 p が大きいほど、その星は近い。",
        pattern: "parallax"
      },
      {
        speaker: "星図",
        text: "p を秒角で測れば、距離 d はパーセクで d = 1 / p。61 Cygni はこの測定で有名な白鳥座の近い星だ。",
        pattern: "parallax"
      },
      {
        speaker: "獲得",
        text: "年周視差の羽根を得た。星座の絵の奥に、近い星と遠い星の立体的な距離が見える。",
        pattern: "normal"
      }
    ]
  }
};

const state = {
  mode: "home",
  kingdomId: null,
  storyId: null,
  lineIndex: 0,
  battleBg: "autumn"
};

const mapStage = document.querySelector("#mapStage");
const detailCanvas = document.querySelector("#detailCanvas");
const detailArt = document.querySelector("#detailArt");
const detailTitleName = document.querySelector("#detailTitleName");
const storyScene = document.querySelector("#storyScene");
const detailRoutePath = document.querySelector("#detailRoutePath");
const storyPointsEl = document.querySelector("#storyPoints");
const homeButton = document.querySelector("#homeButton");
const panelTitle = document.querySelector("#panelTitle");
const panelLead = document.querySelector("#panelLead");
const guidePanel = document.querySelector("#guidePanel");
const storyPanel = document.querySelector("#storyPanel");
const portraitEl = document.querySelector("#portrait");
const enemySprite = document.querySelector("#enemySprite");
const storySceneTypeEl = document.querySelector("#storySceneType");
const storySceneNameEl = document.querySelector("#storySceneName");
const storyTypeEl = document.querySelector("#storyType");
const storyNameEl = document.querySelector("#storyName");
const storySubtitleEl = document.querySelector("#storySubtitle");
const dialogEl = document.querySelector("#dialog");
const storyMechanicEl = document.querySelector("#storyMechanic");
const nextStoryButton = document.querySelector("#nextStoryButton");
const kingdomButtons = [...document.querySelectorAll("[data-kingdom]")];
const battleBgButtons = [...document.querySelectorAll("[data-battle-bg]")];

function selectKingdom(kingdomId) {
  const kingdom = KINGDOMS[kingdomId];

  if (!kingdom.points) {
    state.mode = "home";
    state.kingdomId = kingdomId;
    state.storyId = null;
    state.lineIndex = 0;
    render();
    renderGuideNote(kingdom.name, kingdom.lead);
    return;
  }

  state.mode = "detail";
  state.kingdomId = kingdomId;
  state.storyId = null;
  state.lineIndex = 0;
  state.battleBg = kingdomId;
  render();
}

function openStory(storyId) {
  const story = STORIES[storyId];
  state.mode = "story";
  state.kingdomId = story.kingdomId;
  state.storyId = storyId;
  state.lineIndex = 0;
  state.battleBg = story.battleBg;
  render();
}

function goHome() {
  state.mode = "home";
  state.kingdomId = null;
  state.storyId = null;
  state.lineIndex = 0;
  render();
}

function renderMap() {
  mapStage.className = `map-stage mode-${state.mode}`;
  storyScene.dataset.bg = state.battleBg;
  homeButton.classList.toggle("is-visible", state.mode !== "home");

  kingdomButtons.forEach((button) => {
    const active = button.dataset.kingdom === state.kingdomId && state.mode !== "home";
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  if (state.mode === "home") {
    storyPointsEl.innerHTML = "";
    detailRoutePath.setAttribute("d", "");
    return;
  }

  if (state.mode === "detail") {
    const kingdom = KINGDOMS[state.kingdomId];
    detailCanvas.dataset.kingdom = state.kingdomId;
    detailArt.src = kingdom.detailImage;
    detailArt.alt = kingdom.detailAlt;
    detailTitleName.textContent = kingdom.name;
    renderStoryPoints(kingdom.points);
    return;
  }

  storyPointsEl.innerHTML = "";
  detailRoutePath.setAttribute("d", "");
}

function renderStoryPoints(points) {
  storyPointsEl.innerHTML = "";
  detailRoutePath.setAttribute(
    "d",
    points.map((point) => `M 50 50 L ${point.x} ${point.y}`).join(" ")
  );

  points.forEach((point) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `story-point ${point.locked ? "locked" : ""}`;
    button.dataset.label = point.label;
    button.style.left = `${point.x}%`;
    button.style.top = `${point.y}%`;
    button.setAttribute("aria-label", `${point.label}の物語`);
    button.addEventListener("click", () => {
      if (point.locked) {
        renderGuideNote(point.label, point.note);
        return;
      }
      openStory(point.storyId);
    });
    storyPointsEl.appendChild(button);
  });
}

function renderPanel() {
  if (state.mode === "home") {
    panelTitle.textContent = "天空の大陸";
    panelLead.textContent = "星座と神話が重なる天空の星図。";
    guidePanel.classList.remove("is-hidden");
    storyPanel.classList.add("is-hidden");
    guidePanel.innerHTML = `
      <h2>中央観測塔</h2>
      <p>見かけの星座の向こうに、恒星、星雲、銀河の奥行きが眠っている。</p>
      <div class="guide-steps">
        <span>春の王国</span>
        <span>夏の王国</span>
        <span>秋の王国</span>
        <span>冬の王国</span>
      </div>
    `;
    return;
  }

  if (state.mode === "detail") {
    const kingdom = KINGDOMS[state.kingdomId];
    panelTitle.textContent = kingdom.name;
    panelLead.textContent = kingdom.lead;
    guidePanel.classList.remove("is-hidden");
    storyPanel.classList.add("is-hidden");
    guidePanel.innerHTML = `
      <h2>${kingdom.detailTitle}</h2>
      <p>${kingdom.detailText}</p>
      <div class="guide-steps">
        ${kingdom.steps.map((step) => `<span>${step}</span>`).join("")}
      </div>
    `;
    return;
  }

  guidePanel.classList.add("is-hidden");
  storyPanel.classList.remove("is-hidden");
  renderStory();
}

function renderGuideNote(title, note) {
  panelTitle.textContent = title;
  panelLead.textContent = note;
  guidePanel.classList.remove("is-hidden");
  storyPanel.classList.add("is-hidden");
  guidePanel.innerHTML = `
    <h2>${title}</h2>
    <p>${note}</p>
    <div class="guide-steps">
      <span>星標はまだ静かに眠っている</span>
    </div>
  `;
}

function renderStory() {
  const story = STORIES[state.storyId];
  const line = story.lines[state.lineIndex];
  const isSolved = state.lineIndex >= story.clearAt;
  const pattern = line.pattern ?? "normal";
  const sprite = story.enemy[pattern] ?? story.enemy.normal;

  panelTitle.textContent = story.name;
  panelLead.textContent = story.lead;
  storyScene.dataset.bg = story.battleBg;
  storyScene.dataset.story = state.storyId;
  storyScene.setAttribute("aria-label", `${story.name}のストーリー画面`);
  portraitEl.className = `portrait ${state.storyId} generated`;
  portraitEl.style.backgroundImage = `url("${story.portrait}")`;
  enemySprite.src = sprite;
  enemySprite.alt = story.name;
  enemySprite.className = `enemy-sprite story-${state.storyId} pattern-${pattern}`;
  storySceneTypeEl.textContent = story.type;
  storySceneNameEl.textContent = story.name;
  storyTypeEl.textContent = story.type;
  storyNameEl.textContent = story.name;
  storySubtitleEl.textContent = story.subtitle;
  storyMechanicEl.className = `story-mechanic mechanic-${story.mechanic}`;
  storyMechanicEl.innerHTML = `
    ${renderMechanic(story.mechanic)}
    <p>${isSolved ? story.clearRule : story.rule}</p>
  `;
  dialogEl.innerHTML = `
    <p><b>${line.speaker}</b></p>
    <p>${line.text}</p>
  `;
  nextStoryButton.textContent =
    state.lineIndex >= story.lines.length - 1 ? "星図へ戻る" : "次へ";
  renderBattleBgButtons();
}

function renderMechanic(mechanic) {
  if (mechanic === "parallax") {
    return `
      <div class="parallax-diagram" aria-label="年周視差の図">
        <span class="sun"></span>
        <span class="earth earth-left"></span>
        <span class="earth earth-right"></span>
        <i class="sight sight-left"></i>
        <i class="sight sight-right"></i>
        <b class="near-star"></b>
        <em class="far-star far-star-a"></em>
        <em class="far-star far-star-b"></em>
        <em class="far-star far-star-c"></em>
      </div>
    `;
  }

  return `
    <div class="light-curve" aria-label="アルゴルの光度曲線">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
}

function renderBattleBgButtons() {
  battleBgButtons.forEach((button) => {
    const active = button.dataset.battleBg === state.battleBg;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function nextStoryLine() {
  if (state.mode !== "story") return;
  const story = STORIES[state.storyId];

  if (state.lineIndex < story.lines.length - 1) {
    state.lineIndex += 1;
    renderStory();
    return;
  }

  state.mode = "detail";
  state.storyId = null;
  state.lineIndex = 0;
  render();
}

function render() {
  renderMap();
  renderPanel();
}

kingdomButtons.forEach((button) => {
  button.addEventListener("click", () => selectKingdom(button.dataset.kingdom));
});

battleBgButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.battleBg = button.dataset.battleBg;
    render();
  });
});

homeButton.addEventListener("click", goHome);
nextStoryButton.addEventListener("click", nextStoryLine);

render();
