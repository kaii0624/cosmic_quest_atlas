const KINGDOMS = {
  spring: {
    name: "春の王国",
    lead: "銀河の霧をまとった春の星域。",
    detailImage: "./assets/spring-kingdom-mizar-detail.png",
    detailAlt: "春の王国と北斗七星の詳細星図",
    detailTitle: "春の星図",
    detailText: "北の空に大きなひしゃくが浮かぶ。柄の途中にあるミザールとアルコルは、目と観測で分けて読む春の試練。",
    steps: ["ミザールとアルコル", "アルクトゥルス", "スピカ"],
    points: [
      {
        id: "mizar",
        x: 49,
        y: 42,
        label: "ミザール",
        storyId: "mizar"
      },
      {
        id: "arcturus-preview",
        x: 28,
        y: 71,
        label: "アルクトゥルス",
        locked: true,
        note: "うしかい座の橙色巨星。春の大曲線で見つけ、色と温度を読む。"
      },
      {
        id: "spica-preview",
        x: 73,
        y: 76,
        label: "スピカ",
        locked: true,
        note: "おとめ座の青白い一等星。春の大曲線の先で、熱い星の色を覚える。"
      }
    ]
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
    lead: "青白い巨星が凍てつく冬の星域。",
    detailImage: "./assets/winter-kingdom-rigel-detail.png",
    detailAlt: "冬の王国とオリオン座の詳細星図",
    detailTitle: "冬の星図",
    detailText: "オリオン座の足もとでリゲルが青白く輝く。星の色、温度、明るさの違いを冬の空で読む。",
    steps: ["青白き巨星リゲル", "ベテルギウス", "シリウス"],
    points: [
      {
        id: "rigel",
        x: 57,
        y: 70,
        label: "リゲル",
        storyId: "rigel"
      },
      {
        id: "betelgeuse-preview",
        x: 39,
        y: 32,
        label: "ベテルギウス",
        locked: true,
        note: "赤色超巨星。リゲルとの色の違いで、温度と進化段階を比べる。"
      },
      {
        id: "sirius-preview",
        x: 78,
        y: 83,
        label: "シリウス",
        locked: true,
        note: "近いから明るい白犬王。見かけの明るさと距離の関係を読む。"
      }
    ]
  }
};

const STORIES = {
  mizar: {
    kingdomId: "spring",
    battleBg: "spring",
    type: "STORY 3",
    name: "双星の門ミザール",
    subtitle: "目で分ける二重星",
    lead: "北斗七星の柄に並ぶ、ミザールとアルコルの観測試練。",
    mechanic: "doubleStar",
    clearAt: 4,
    portrait: "./assets/mizar-enemy-normal.png",
    enemy: {
      normal: "./assets/mizar-enemy-normal.png",
      split: "./assets/mizar-enemy-split.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "二重星" },
        { icon: "⌁", label: "距離", value: "約83 ly" },
        { icon: "◎", label: "相棒", value: "アルコル" }
      ],
      meter: {
        normal: 62,
        split: 88
      }
    },
    rule: "能力：ひとつの星に見せかけ、観測精度が上がると相棒が分かれる。",
    clearRule: "攻略法：北斗七星の柄をたどり、ミザールとアルコルを二重星として見分ける。",
    lines: [
      {
        speaker: "双星の門ミザール",
        text: "春の北の空、北斗七星の柄をたどれ。私は一つに見えて、隣に小さな相棒を隠している。",
        pattern: "normal"
      },
      {
        speaker: "双星の門ミザール",
        text: "その名はアルコル。目がよく、空が暗ければ、肉眼でも私たちは分かれて見える。",
        pattern: "split"
      },
      {
        speaker: "双星の門ミザール",
        text: "望遠鏡を向けると、ミザール自身もさらに連星だと分かる。星は点に見えても、奥に仲間を持つ。",
        pattern: "split"
      },
      {
        speaker: "双星の門ミザール",
        text: "星座は見かけの地図。近くに並んで見える星を、観測で一つずつほどいていけ。",
        pattern: "normal"
      }
    ]
  },
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
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "食変光星" },
        { icon: "⌁", label: "距離", value: "約93 ly" },
        { icon: "▲", label: "質量", value: "主星 約3.2 M☉" }
      ],
      meter: {
        normal: 72,
        eclipse: 43
      }
    },
    rule: "能力：数ターンごとに暗くなり、隠れている伴星が現れる。",
    clearRule: "攻略法：光度曲線を読んで「食」のタイミングを見破る。",
    lines: [
      {
        speaker: "悪魔の首アルゴル",
        text: "ペルセウスの手に掲げられたこの首は、まだ空で明滅している。",
        pattern: "normal"
      },
      {
        speaker: "悪魔の首アルゴル",
        text: "我が名はアルゴル。悪魔の頭と呼ばれ、メデューサの目の位置にある星。",
        pattern: "eclipse"
      },
      {
        speaker: "悪魔の首アルゴル",
        text: "呪いと思うか。数日ごとに、私はすっと暗くなる。",
        pattern: "normal"
      },
      {
        speaker: "悪魔の首アルゴル",
        text: "伴星が前を横切る。そのとき光が隠れ、光度曲線には深い谷が刻まれる。",
        pattern: "eclipse"
      },
      {
        speaker: "悪魔の首アルゴル",
        text: "正体は食変光星。2つの星が互いに回り、隠し合っているのだ。",
        pattern: "eclipse"
      },
      {
        speaker: "悪魔の首アルゴル",
        text: "恐れるな。暗くなる時刻を読めば、悪魔の目は観測で見破れる。",
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
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "星座" },
        { icon: "◎", label: "代表星", value: "デネブ" },
        { icon: "⌁", label: "奥行き", value: "年周視差" }
      ],
      meter: {
        normal: 68,
        parallax: 84
      }
    },
    rule: "能力：半年ごとに翼の位置がわずかにずれて見える。",
    clearRule: "攻略法：年周視差 p を測り、d = 1 / p で距離を読む。",
    lines: [
      {
        speaker: "白鳥座キュグヌス",
        text: "夏の王国、天の川の上に大きな十字が浮かぶ。星座絵では翼を広げた白鳥だ。",
        pattern: "normal"
      },
      {
        speaker: "白鳥座キュグヌス",
        text: "尾のデネブは遠く強く輝き、くちばしのアルビレオは色の違いを見せる。だが今夜の試練は距離だ。",
        pattern: "normal"
      },
      {
        speaker: "白鳥座キュグヌス",
        text: "半年おいて同じ星を見る。地球が公転軌道の反対側へ移ると、近い星だけ背景に対して少しずれる。",
        pattern: "parallax"
      },
      {
        speaker: "白鳥座キュグヌス",
        text: "この小さな角度が年周視差。視差 p が大きいほど、その星は近い。",
        pattern: "parallax"
      },
      {
        speaker: "白鳥座キュグヌス",
        text: "p を秒角で測れば、距離 d はパーセクで d = 1 / p。61 Cygni はこの測定で有名な白鳥座の近い星だ。",
        pattern: "parallax"
      },
      {
        speaker: "白鳥座キュグヌス",
        text: "年周視差の羽根を得た。星座の絵の奥に、近い星と遠い星の立体的な距離が見える。",
        pattern: "normal"
      }
    ]
  },
  rigel: {
    kingdomId: "winter",
    battleBg: "winter",
    type: "STORY 4",
    name: "青白き巨星リゲル",
    subtitle: "色で読む温度と大光度",
    lead: "オリオン座の足もとで輝く、青白い高温の大光度星。",
    mechanic: "stellarColor",
    clearAt: 4,
    portrait: "./assets/rigel-enemy-normal.png",
    enemy: {
      normal: "./assets/rigel-enemy-normal.png",
      hot: "./assets/rigel-enemy-hot.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "青色超巨星" },
        { icon: "⌁", label: "距離", value: "約860 ly" },
        { icon: "☉", label: "温度", value: "約1.2万K" }
      ],
      meter: {
        normal: 78,
        hot: 95
      }
    },
    rule: "能力：青白い光で観測者を惑わせ、近さだけでは説明できない明るさを示す。",
    clearRule: "攻略法：星の色から表面温度を読み、リゲルが高温で大光度の星だと見破る。",
    lines: [
      {
        speaker: "青白き巨星リゲル",
        text: "オリオンの足もとを見よ。私は青白く輝くリゲル、冬の空の大光度星だ。",
        pattern: "normal"
      },
      {
        speaker: "青白き巨星リゲル",
        text: "赤いベテルギウスと比べれば分かる。青白い星ほど表面温度は高い。",
        pattern: "hot"
      },
      {
        speaker: "青白き巨星リゲル",
        text: "私は近いからだけ明るいのではない。遠くにいても強く輝く、巨大で高温の星なのだ。",
        pattern: "hot"
      },
      {
        speaker: "青白き巨星リゲル",
        text: "色、温度、光度を合わせて読め。冬の星座は、恒星進化を学ぶ入口になる。",
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

const gameShell = document.querySelector(".game-shell");
const mapStage = document.querySelector("#mapStage");
const detailCanvas = document.querySelector("#detailCanvas");
const detailArt = document.querySelector("#detailArt");
const detailTitleName = document.querySelector("#detailTitleName");
const storyScene = document.querySelector("#storyScene");
const detailRoutePath = document.querySelector("#detailRoutePath");
const storyPointsEl = document.querySelector("#storyPoints");
const homeButton = document.querySelector("#homeButton");
const storyTextPanel = document.querySelector("#storyTextPanel");
const storyAdvanceButton = document.querySelector("#storyAdvanceButton");
const storyTextSpeaker = document.querySelector("#storyTextSpeaker");
const storyTextLine = document.querySelector("#storyTextLine");
const guidePanel = document.querySelector("#guidePanel");
const storyPanel = document.querySelector("#storyPanel");
const scrollPanel = document.querySelector(".scroll-panel");
const enemySprite = document.querySelector("#enemySprite");
const targetStatusThumb = document.querySelector("#targetStatusThumb");
const targetStatusName = document.querySelector("#targetStatusName");
const targetStatusStats = document.querySelector("#targetStatusStats");
const targetStatusMeter = document.querySelector("#targetStatusMeter");
const storySceneTypeEl = document.querySelector("#storySceneType");
const storySceneNameEl = document.querySelector("#storySceneName");
const storyTypeEl = document.querySelector("#storyType");
const storyNameEl = document.querySelector("#storyName");
const storySubtitleEl = document.querySelector("#storySubtitle");
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
  gameShell.dataset.mode = state.mode;
  mapStage.className = `map-stage mode-${state.mode}`;
  storyScene.dataset.bg = state.battleBg;
  homeButton.hidden = state.mode !== "detail";
  homeButton.classList.toggle("is-visible", state.mode === "detail");

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
    guidePanel.classList.remove("is-hidden");
    storyPanel.classList.add("is-hidden");
    storyTextPanel.classList.add("is-hidden");
    scrollPanel.classList.remove("is-hidden");
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
    guidePanel.classList.remove("is-hidden");
    storyPanel.classList.add("is-hidden");
    storyTextPanel.classList.add("is-hidden");
    scrollPanel.classList.remove("is-hidden");
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
  guidePanel.classList.remove("is-hidden");
  storyPanel.classList.add("is-hidden");
  storyTextPanel.classList.add("is-hidden");
  scrollPanel.classList.remove("is-hidden");
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
  const pattern = line.pattern ?? "normal";
  const sprite = story.enemy[pattern] ?? story.enemy.normal;

  storyTextPanel.classList.remove("is-hidden");
  scrollPanel.classList.add("is-hidden");
  storyScene.dataset.bg = story.battleBg;
  storyScene.dataset.story = state.storyId;
  storyScene.setAttribute("aria-label", `${story.name}のストーリー画面`);
  enemySprite.src = sprite;
  enemySprite.alt = story.name;
  enemySprite.className = `enemy-sprite story-${state.storyId} pattern-${pattern}`;
  targetStatusThumb.src = sprite;
  targetStatusThumb.alt = story.name;
  targetStatusName.textContent = story.name;
  targetStatusStats.innerHTML = "";
  story.status.rows.forEach((row) => {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    const icon = document.createElement("span");
    const value = document.createElement("dd");

    icon.setAttribute("aria-hidden", "true");
    icon.textContent = row.icon;
    term.append(icon, row.label);
    value.textContent = row.value;
    item.append(term, value);
    targetStatusStats.appendChild(item);
  });
  targetStatusMeter.style.setProperty("--meter", `${story.status.meter[pattern] ?? 70}%`);
  storySceneTypeEl.textContent = story.type;
  storySceneNameEl.textContent = story.name;
  storyTypeEl.textContent = story.type;
  storyNameEl.textContent = story.name;
  storySubtitleEl.textContent = story.subtitle;
  storyTextSpeaker.textContent = line.speaker;
  storyTextLine.textContent = line.text;
  storyAdvanceButton.setAttribute(
    "aria-label",
    state.lineIndex >= story.lines.length - 1 ? "星図へ戻る" : "次のセリフへ"
  );
  renderBattleBgButtons();
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
storyAdvanceButton.addEventListener("click", nextStoryLine);

render();
