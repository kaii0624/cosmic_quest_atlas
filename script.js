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
    reward: {
      id: "cygnus-parallax-scroll",
      title: "年周視差の巻物",
      message: "白鳥座を観測してゲットしました。",
      image: "./assets/reward-scroll-cygnus-parallax.png",
      knowledgeTitle: "",
      knowledge: [
        "距離は視差の逆数"
      ]
    },
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
    subtitle: "",
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
    reward: {
      id: "rigel-color-luminosity-scroll",
      title: "星色と大光度の巻物",
      message: "リゲルを観測してゲットしました。",
      image: "./assets/reward-scroll-rigel-luminosity.png",
      knowledgeTitle: "",
      knowledge: [
        "青白い星ほど高温"
      ]
    },
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
  battleBg: "autumn",
  homeTab: "home",
  homeKingdomId: "autumn",
  selectedObserveId: null,
  selectedScrollId: null
};

const gameShell = document.querySelector(".game-shell");
const mapStage = document.querySelector("#mapStage");
const detailCanvas = document.querySelector("#detailCanvas");
const detailArt = document.querySelector("#detailArt");
const detailTitleName = document.querySelector("#detailTitleName");
const storyScene = document.querySelector("#storyScene");
const appScreen = document.querySelector("#appScreen");
const detailRoutePath = document.querySelector("#detailRoutePath");
const storyPointsEl = document.querySelector("#storyPoints");
const homeButton = document.querySelector("#homeButton");
const towerButton = document.querySelector("#towerButton");
const storyTextPanel = document.querySelector("#storyTextPanel");
const storyAdvanceButton = document.querySelector("#storyAdvanceButton");
const storyTextSpeaker = document.querySelector("#storyTextSpeaker");
const storyTextLine = document.querySelector("#storyTextLine");
const guidePanel = document.querySelector("#guidePanel");
const storyPanel = document.querySelector("#storyPanel");
const scrollPanel = document.querySelector(".scroll-panel");
const rewardPopup = document.querySelector("#rewardPopup");
const rewardTitle = document.querySelector("#rewardTitle");
const rewardMessage = document.querySelector("#rewardMessage");
const rewardImage = document.querySelector("#rewardImage");
const rewardKnowledgeTitle = document.querySelector("#rewardKnowledgeTitle");
const rewardKnowledgeList = document.querySelector("#rewardKnowledgeList");
const rewardCloseButton = document.querySelector("#rewardCloseButton");
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
const REWARD_STORAGE_KEY = "cosmicQuest.claimedRewards";

function loadClaimedRewards() {
  try {
    return JSON.parse(localStorage.getItem(REWARD_STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

const claimedRewards = new Set(loadClaimedRewards());

function saveClaimedRewards() {
  localStorage.setItem(REWARD_STORAGE_KEY, JSON.stringify([...claimedRewards]));
}

const HOME_CHOICES = [
  { id: "spring", icon: "✤", label: "春の王国", className: "season-spring" },
  { id: "summer", icon: "☉", label: "夏の王国", className: "season-summer" },
  { id: "autumn", icon: "✦", label: "秋の王国", className: "season-autumn" },
  { id: "winter", icon: "✧", label: "冬の王国", className: "season-winter" }
];

const HOME_KINGDOM_DETAILS = {
  tower: {
    icon: "✦",
    card: "./assets/map-kingdom-card-tower.png",
    title: "天球観測塔",
    description: "四季の星図を結び、星座の奥にある恒星、星雲、銀河への入口を示す。",
    enterId: null
  },
  spring: {
    icon: "✤",
    card: "./assets/map-kingdom-card-spring.png",
    title: "春の王国",
    description: "花と星明かりの森に、二重星と春の銀河が眠る。",
    action: "春の王国へ進む",
    enterId: "spring"
  },
  summer: {
    icon: "☉",
    card: "./assets/map-kingdom-card-summer.png",
    title: "夏の王国",
    description: "天の川が流れ、白鳥座が距離の小さなずれを告げる。",
    action: "夏の王国へ進む",
    enterId: "summer"
  },
  autumn: {
    icon: "✦",
    card: "./assets/map-kingdom-card-autumn.png",
    title: "秋の王国",
    description: "神話と銀河が重なり、変光星と深い宇宙へ続く。",
    action: "秋の王国へ進む",
    enterId: "autumn"
  },
  winter: {
    icon: "✧",
    card: "./assets/map-kingdom-card-winter.png",
    title: "冬の王国",
    description: "青白い巨星と赤い星が、温度と光度の違いを見せる。",
    action: "冬の王国へ進む",
    enterId: "winter"
  }
};

const ORB_CLASSES = ["betelgeuse", "rigel", "sirius"];

const HOME_TABS = [
  { id: "home", label: "ホーム" },
  { id: "observe", label: "天体を見る" },
  { id: "library", label: "図書館" },
  { id: "settings", label: "設定" }
];

const APP_SCREEN_MODES = new Set(["observe", "library", "settings"]);

const LIBRARY_SCROLLS = [
  {
    id: "rigel-color-luminosity-scroll",
    title: "星色と大光度の巻物",
    period: "冬の王国",
    image: "./assets/reward-scroll-rigel-luminosity.png",
    lesson: "青白い星ほど高温",
    description: "リゲルは青白く高温で、遠くにあっても強く輝く大光度星。星の色は表面温度を読む手がかりになる。"
  },
  {
    id: "cygnus-parallax-scroll",
    title: "年周視差の巻物",
    period: "夏の王国",
    image: "./assets/reward-scroll-cygnus-parallax.png",
    lesson: "距離は視差の逆数",
    description: "半年後の見かけのずれを年周視差という。視差 p を秒角で測れば、距離 d はパーセクで 1 / p になる。"
  },
  {
    id: "algol-eclipse-scroll",
    title: "食変光星の巻物",
    period: "秋の王国",
    image: "./assets/equation-scroll-binary.png",
    lesson: "食で光度が下がる",
    description: "アルゴルの暗くなる周期は、伴星が前を通って主星の光を隠す食で説明できる。",
    locked: true
  },
  {
    id: "mizar-double-star-scroll",
    title: "二重星の巻物",
    period: "春の王国",
    image: "./assets/equation-scroll-parallax.png",
    lesson: "近くに見えても別距離",
    description: "星座の星は見かけの並び。二重星や連星を観測すると、点に見える星の奥行きがほどける。",
    locked: true
  }
];

function getObservableItems() {
  return Object.entries(KINGDOMS).flatMap(([kingdomId, kingdom]) =>
    kingdom.points.map((point) => {
      const story = point.storyId ? STORIES[point.storyId] : null;
      const status = story?.status?.rows?.map((row) => `${row.label}: ${row.value}`).join(" / ");

      return {
        ...point,
        kingdomId,
        kingdomName: kingdom.name,
        title: point.id === "rigel" ? "青白き巨星リゲル" : point.label,
        enemyImage: story?.enemy?.normal ?? story?.portrait ?? "",
        enemyAlt: story?.name ?? point.label,
        lesson: story?.clearRule ?? point.note ?? kingdom.detailText,
        description: story
          ? `${story.lead}${status ? ` ${status}` : ""}`
          : point.note ?? kingdom.detailText
      };
    })
  );
}

function getSelectedObservableItem() {
  const items = getObservableItems();
  const selected = items.find((item) => item.id === state.selectedObserveId) ?? items[0];
  state.selectedObserveId = selected.id;
  return selected;
}

function chooseHomeKingdom(kingdomId) {
  if (!HOME_KINGDOM_DETAILS[kingdomId]) return;
  hideReward();
  state.mode = "home";
  state.homeTab = "home";
  state.homeKingdomId = kingdomId;
  state.kingdomId = null;
  state.storyId = null;
  state.lineIndex = 0;
  state.battleBg = kingdomId;
  render();
}

function selectKingdom(kingdomId) {
  const kingdom = KINGDOMS[kingdomId];
  if (!kingdom) return;
  hideReward();

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
  hideReward();
  state.mode = "story";
  state.kingdomId = story.kingdomId;
  state.storyId = storyId;
  state.lineIndex = 0;
  state.battleBg = story.battleBg;
  render();
}

function goHome() {
  hideReward();
  state.mode = "home";
  state.kingdomId = null;
  state.storyId = null;
  state.lineIndex = 0;
  state.homeTab = "home";
  render();
}

function openAppScreen(screenId) {
  if (screenId === "home") {
    goHome();
    return;
  }

  hideReward();
  state.mode = screenId;
  state.homeTab = screenId;
  state.kingdomId = null;
  state.storyId = null;
  state.lineIndex = 0;
  render();
}

const assetVersion = new URLSearchParams(window.location.search).get("v");

function withAssetVersion(src) {
  if (!assetVersion || !src.startsWith("./assets/")) return src;
  return `${src}${src.includes("?") ? "&" : "?"}v=${encodeURIComponent(assetVersion)}`;
}

function renderAppScreen() {
  const renderers = {
    observe: renderObserveTab,
    library: renderLibraryTab,
    settings: renderSettingsTab
  };

  appScreen.innerHTML = renderers[state.mode]?.() ?? "";
}

function renderMap() {
  gameShell.dataset.mode = state.mode;
  gameShell.dataset.kingdom = state.kingdomId ?? "";
  gameShell.dataset.homeKingdom = state.homeKingdomId;
  mapStage.className = `map-stage mode-${state.mode}`;
  mapStage.dataset.kingdom = state.kingdomId ?? "";
  mapStage.dataset.homeKingdom = state.homeKingdomId;
  storyScene.dataset.bg = state.battleBg;
  const isDetailMode = state.mode === "detail";
  homeButton.hidden = !isDetailMode;
  homeButton.classList.toggle("is-visible", isDetailMode);

  kingdomButtons.forEach((button) => {
    const active =
      (state.mode === "home" && button.dataset.kingdom === state.homeKingdomId)
      || (button.dataset.kingdom === state.kingdomId && (state.mode === "detail" || state.mode === "story"));
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  towerButton.classList.toggle("active", state.mode === "home" && state.homeKingdomId === "tower");
  towerButton.setAttribute("aria-pressed", state.mode === "home" && state.homeKingdomId === "tower" ? "true" : "false");

  if (state.mode === "home") {
    appScreen.innerHTML = "";
    storyPointsEl.innerHTML = "";
    detailRoutePath.setAttribute("d", "");
    return;
  }

  if (APP_SCREEN_MODES.has(state.mode)) {
    storyPointsEl.innerHTML = "";
    detailRoutePath.setAttribute("d", "");
    renderAppScreen();
    return;
  }

  if (state.mode === "detail") {
    appScreen.innerHTML = "";
    const kingdom = KINGDOMS[state.kingdomId];
    detailCanvas.dataset.kingdom = state.kingdomId;
    detailArt.src = withAssetVersion(kingdom.detailImage);
    detailArt.alt = kingdom.detailAlt;
    detailTitleName.textContent = kingdom.name;
    renderStoryPoints(kingdom.points);
    return;
  }

  appScreen.innerHTML = "";
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
    button.dataset.pointId = point.id;
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

function renderHomeNav() {
  return `
    <nav class="home-nav-bar" aria-label="ホームメニュー">
      ${HOME_TABS.map(
        (tab) => `
          <button class="home-nav-button tab-${tab.id}${state.homeTab === tab.id ? " active" : ""}" type="button" data-home-tab="${tab.id}" aria-pressed="${state.homeTab === tab.id ? "true" : "false"}">
            <span>${tab.label}</span>
          </button>
        `
      ).join("")}
    </nav>
  `;
}

function renderHomeKingdoms() {
  return `
    <div class="home-tab-content home-tab-kingdoms">
      <div class="guide-steps home-choice-grid compact">
        ${HOME_CHOICES.map(
          (choice) => `
            <button class="choice-button ${choice.className}" type="button" data-menu-kingdom="${choice.id}">
              <span>${choice.label}</span>
            </button>
          `
        ).join("")}
      </div>
    </div>
  `;
}

function renderHomeSelectionPanel() {
  const detail = HOME_KINGDOM_DETAILS[state.homeKingdomId] ?? HOME_KINGDOM_DETAILS.autumn;

  return `
    <section class="home-selection-panel ${state.homeKingdomId}" aria-label="${detail.title}の説明">
      <figure class="home-selection-card">
        <img src="${withAssetVersion(detail.card)}" alt="${detail.title}の星域" />
      </figure>
      <div class="home-selection-copy">
        <h2><span aria-hidden="true">${detail.icon}</span>${detail.title}<span aria-hidden="true">${detail.icon}</span></h2>
        <p>${detail.description}</p>
        ${detail.enterId
          ? `
            <div class="home-selection-actions">
              <button class="home-enter-button" type="button" data-home-enter="${detail.enterId}">
                ${detail.action}
              </button>
            </div>
          `
          : ""}
      </div>
    </section>
  `;
}

function renderObserveTab() {
  const items = getObservableItems();
  const selected = getSelectedObservableItem();

  return `
    <section class="app-screen-panel observe-tab">
      <div class="app-screen-header">
        <span>OBSERVE</span>
        <h2>天体を見る</h2>
        <p>星座の入口から、観測できる天体を選ぶ。</p>
      </div>
      <div class="app-scroll-area">
        <div class="observe-orb-grid app-observe-grid" aria-label="天体一覧">
          ${items
            .map((item, index) => {
              const orbClass = ORB_CLASSES[index % ORB_CLASSES.length];
              const lockedClass = item.locked ? " locked" : "";
              const selectedClass = selected.id === item.id ? " selected" : "";

              return `
                <button class="winter-star-orb-button ${orbClass}${lockedClass}${selectedClass}" type="button" data-observe-id="${item.id}">
                  <span class="winter-star-orb" aria-hidden="true"></span>
                  <span class="winter-star-label">${item.label}</span>
                  <span class="observe-kingdom-name">${item.kingdomName}</span>
                </button>
              `;
            })
            .join("")}
        </div>
      </div>
      <section class="observe-detail screen-detail-panel${selected.enemyImage ? " has-enemy" : ""}" aria-label="天体の説明">
        ${selected.enemyImage
          ? `<img class="observe-detail-enemy" src="${withAssetVersion(selected.enemyImage)}" alt="${selected.enemyAlt}" />`
          : ""}
        <div class="observe-detail-copy">
          <span class="screen-detail-kicker">${selected.kingdomName}</span>
          <h3>${selected.title}</h3>
          <strong>${selected.lesson}</strong>
          <p>${selected.description}</p>
        </div>
      </section>
    </section>
  `;
}

function getSelectedLibraryScroll() {
  const unlocked = LIBRARY_SCROLLS.find((scroll) => claimedRewards.has(scroll.id));
  const requested = LIBRARY_SCROLLS.find((scroll) => scroll.id === state.selectedScrollId);
  const selected = requested ?? unlocked ?? LIBRARY_SCROLLS[0];
  state.selectedScrollId = selected.id;
  return selected;
}

function renderLibraryTab() {
  const selected = getSelectedLibraryScroll();
  const selectedUnlocked = claimedRewards.has(selected.id);

  return `
    <section class="app-screen-panel library-tab">
      <div class="app-screen-header">
        <span>ARCHIVE</span>
        <h2>図書館</h2>
        <p>集めた巻物を開き、観測知識を読み返す。</p>
      </div>
      <div class="app-scroll-area">
        <div class="library-scroll-grid" aria-label="巻物一覧">
          ${LIBRARY_SCROLLS.map((scroll) => {
            const unlocked = claimedRewards.has(scroll.id);
            return `
              <button class="library-scroll-card${unlocked ? " unlocked" : " locked"}${selected.id === scroll.id ? " selected" : ""}" type="button" ${unlocked ? `data-scroll-id="${scroll.id}"` : 'aria-disabled="true"'}>
                <img src="${withAssetVersion(scroll.image)}" alt="${scroll.title}" />
                <span>${scroll.title}</span>
                <small>${unlocked ? scroll.period : "未獲得"}</small>
              </button>
            `;
          }).join("")}
        </div>
      </div>
      <section class="library-detail screen-detail-panel" aria-label="巻物の詳細">
        <img src="${withAssetVersion(selected.image)}" alt="${selected.title}" />
        <div>
          <span class="screen-detail-kicker">${selectedUnlocked ? "獲得済み" : "未獲得"}</span>
          <h3>${selected.title}</h3>
          <strong>${selectedUnlocked ? selected.lesson : "物語を進めて解放"}</strong>
          <p>${selectedUnlocked ? selected.description : `${selected.period}の物語を観測すると、この巻物の解説が読める。`}</p>
        </div>
      </section>
    </section>
  `;
}

function renderSettingsTab() {
  return `
    <section class="app-screen-panel settings-tab">
      <div class="app-screen-header">
        <span>CONFIG</span>
        <h2>設定</h2>
        <p>表示と演出の状態を確認する。</p>
      </div>
      <div class="settings-menu">
        <button type="button"><span>音量</span><strong>ON</strong></button>
        <button type="button"><span>演出</span><strong>標準</strong></button>
        <button type="button"><span>データ</span><strong>保存中</strong></button>
      </div>
    </section>
  `;
}

function renderHomePanel() {
  guidePanel.innerHTML = `
    <div class="home-panel-shell">
      ${state.mode === "home" ? renderHomeSelectionPanel() : ""}
      ${renderHomeNav()}
    </div>
  `;
}

function renderPanel() {
  guidePanel.dataset.panelMode = state.mode;
  guidePanel.dataset.kingdom = state.kingdomId ?? "";
  guidePanel.dataset.homeTab = state.homeTab;

  if (state.mode === "home" || APP_SCREEN_MODES.has(state.mode)) {
    guidePanel.classList.remove("is-hidden");
    storyPanel.classList.add("is-hidden");
    storyTextPanel.classList.add("is-hidden");
    scrollPanel.classList.add("is-hidden");
    renderHomePanel();
    return;
  }

  if (state.mode === "detail") {
    const kingdom = KINGDOMS[state.kingdomId];
    guidePanel.classList.remove("is-hidden");
    storyPanel.classList.add("is-hidden");
    storyTextPanel.classList.add("is-hidden");
    scrollPanel.classList.add("is-hidden");

    guidePanel.innerHTML = `
      <div class="winter-detail-guide">
        <section class="winter-scroll-banner" aria-label="${kingdom.detailTitle}">
          <h2>${kingdom.detailTitle}</h2>
          <p>${kingdom.detailText}</p>
        </section>
        <div class="winter-star-orb-grid" aria-label="${kingdom.name}の星">
          ${kingdom.points
            .map((point, index) => {
              const orbClass = ORB_CLASSES[index % ORB_CLASSES.length];
              const lockedClass = point.locked ? " locked" : "";
              const storyAttr = point.storyId
                ? `data-story-id="${point.storyId}"`
                : `data-guide-title="${point.label}" data-guide-note="${point.note}"`;
              const label = point.id === "rigel" ? "青白き巨星リゲル" : point.label;

              return `
                <button class="winter-star-orb-button ${orbClass}${lockedClass}" type="button" ${storyAttr}>
                  <span class="winter-star-orb" aria-hidden="true"></span>
                  <span class="winter-star-label">${label}</span>
                </button>
              `;
            })
            .join("")}
        </div>
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
  scrollPanel.classList.add("is-hidden");
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
  storySubtitleEl.textContent = "";
  storySubtitleEl.hidden = true;
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

function showReward(reward) {
  if (!reward) return;

  rewardTitle.textContent = reward.title;
  rewardMessage.textContent = reward.message;
  rewardImage.src = withAssetVersion(reward.image);
  rewardImage.alt = `${reward.title}の画像`;
  rewardKnowledgeTitle.textContent = reward.knowledgeTitle ?? "";
  rewardKnowledgeTitle.hidden = !reward.knowledgeTitle;
  rewardKnowledgeList.classList.toggle("single-line", reward.knowledge.length === 1);
  rewardKnowledgeList.innerHTML = reward.knowledge
    .map((item) => `<li>${item}</li>`)
    .join("");
  rewardPopup.classList.remove("is-hidden");
  rewardCloseButton.focus();
}

function hideReward() {
  rewardPopup.classList.add("is-hidden");
}

function finishStory(story) {
  const reward = story.reward;

  state.mode = "detail";
  state.storyId = null;
  state.lineIndex = 0;
  render();

  if (reward && !claimedRewards.has(reward.id)) {
    claimedRewards.add(reward.id);
    saveClaimedRewards();
    state.selectedScrollId = reward.id;
    showReward(reward);
  }
}

function nextStoryLine() {
  if (state.mode !== "story") return;
  const story = STORIES[state.storyId];

  if (state.lineIndex < story.lines.length - 1) {
    state.lineIndex += 1;
    renderStory();
    return;
  }

  finishStory(story);
}

function render() {
  renderMap();
  renderPanel();
}

function getEventElement(event) {
  return event.target instanceof Element ? event.target : event.target?.parentElement;
}

kingdomButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (state.mode === "home") {
      chooseHomeKingdom(button.dataset.kingdom);
      return;
    }

    selectKingdom(button.dataset.kingdom);
  });
});

mapStage.addEventListener("click", (event) => {
  const target = getEventElement(event);
  const homeKingdomButton = target?.closest("[data-home-kingdom]");
  if (!homeKingdomButton || state.mode !== "home") return;
  chooseHomeKingdom(homeKingdomButton.dataset.homeKingdom);
});

towerButton.addEventListener("click", () => chooseHomeKingdom("tower"));

document.addEventListener(
  "pointerup",
  (event) => {
    const target = getEventElement(event);
    const homeEnterButton = target?.closest("[data-home-enter]");
    if (!homeEnterButton) return;

    event.preventDefault();
    event.stopPropagation();
    selectKingdom(homeEnterButton.dataset.homeEnter);
  },
  true
);

guidePanel.addEventListener("click", (event) => {
  const target = getEventElement(event);
  const homeTabButton = target?.closest("[data-home-tab]");
  if (homeTabButton) {
    openAppScreen(homeTabButton.dataset.homeTab);
    return;
  }

  const homeEnterButton = target?.closest("[data-home-enter]");
  if (homeEnterButton) {
    selectKingdom(homeEnterButton.dataset.homeEnter);
    return;
  }

  const menuButton = target?.closest("[data-menu-kingdom]");
  if (menuButton) {
    chooseHomeKingdom(menuButton.dataset.menuKingdom);
    return;
  }

  const storyButton = target?.closest("[data-story-id]");
  if (storyButton) {
    openStory(storyButton.dataset.storyId);
    return;
  }

  const guideButton = target?.closest("[data-guide-title]");
  if (guideButton) {
    renderGuideNote(guideButton.dataset.guideTitle, guideButton.dataset.guideNote);
  }
});

appScreen.addEventListener("click", (event) => {
  const target = getEventElement(event);
  const observeButton = target?.closest("[data-observe-id]");
  if (observeButton) {
    state.selectedObserveId = observeButton.dataset.observeId;
    renderMap();
    return;
  }

  const scrollButton = target?.closest("[data-scroll-id]");
  if (scrollButton) {
    state.selectedScrollId = scrollButton.dataset.scrollId;
    renderMap();
    return;
  }
});

battleBgButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.battleBg = button.dataset.battleBg;
    render();
  });
});

homeButton.addEventListener("click", goHome);
storyAdvanceButton.addEventListener("click", nextStoryLine);
rewardCloseButton.addEventListener("click", hideReward);
rewardPopup.addEventListener("click", (event) => {
  const target = getEventElement(event);
  if (target?.closest("[data-reward-close]")) {
    hideReward();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !rewardPopup.classList.contains("is-hidden")) {
    hideReward();
  }
});

render();
