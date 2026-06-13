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
  },
  tower: {
    name: "天球観測塔",
    lead: "惑星の運動と発見を読む中央観測塔。",
    detailImage: "./assets/planet-observatory-map-bg.png",
    detailAlt: "天球観測塔と惑星台座の詳細MAP",
    detailTitle: "惑星観測図",
    detailText: "中央塔から惑星の台座を巡り、満ち欠け、逆行、衛星、軌道法則、計算による発見を読む。",
    steps: ["金星", "火星", "木星", "土星", "海王星"],
    points: [
      {
        id: "venus",
        x: 18,
        y: 48,
        label: "金星",
        storyId: "venusPhases",
        kind: "planet",
        asset: "./assets/planet-orb-venus.png"
      },
      {
        id: "mars",
        x: 50,
        y: 20,
        label: "火星",
        storyId: "marsRetrograde",
        kind: "planet",
        asset: "./assets/planet-orb-mars.png"
      },
      {
        id: "jupiter",
        x: 27,
        y: 73,
        label: "木星",
        storyId: "jupiterMoons",
        kind: "planet",
        asset: "./assets/planet-orb-jupiter.png"
      },
      {
        id: "saturn",
        x: 82,
        y: 48,
        label: "土星",
        storyId: "saturnKepler3",
        kind: "planet",
        asset: "./assets/planet-orb-saturn.png"
      },
      {
        id: "neptune",
        x: 73,
        y: 72,
        label: "海王星",
        storyId: "neptuneCalculation",
        kind: "planet",
        asset: "./assets/planet-orb-neptune.png"
      }
    ]
  }
};

const PLANET_STORIES = {
  venusPhases: {
    kingdomId: "tower",
    battleBg: "planetarium",
    type: "STORY 5",
    name: "金星狐ヴィーナ",
    subtitle: "",
    lead: "太陽に近い内惑星。望遠鏡で見ると、月のように満ち欠けする。",
    mechanic: "planetPhase",
    clearAt: 4,
    portrait: "./assets/planet-enemy-venus-normal.png",
    enemy: {
      normal: "./assets/planet-enemy-venus-normal.png",
      phase: "./assets/planet-enemy-venus-phenomenon.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "内惑星" },
        { icon: "☉", label: "位置", value: "地球の内側" },
        { icon: "◐", label: "現象", value: "満ち欠け" }
      ],
      meter: {
        normal: 66,
        phase: 86
      }
    },
    rule: "能力：形を変えながら輝き、太陽との位置関係を隠す。",
    clearRule: "攻略法：金星が太陽の内側を回るため、満ち欠けして見えると読む。",
    reward: {
      id: "venus-phases-scroll",
      title: "金星の満ち欠け",
      message: "金星を観測してゲットしました。",
      image: "./assets/reward-scroll-minor-venus-phases.png",
      tier: "minor",
      knowledgeTitle: "",
      knowledge: [
        "内惑星は満ち欠け"
      ]
    },
    lines: [
      {
        speaker: "金星狐ヴィーナ",
        text: "私は夕空と明け方に現れる金の狐。太陽から大きく離れては見えない。",
        pattern: "normal"
      },
      {
        speaker: "金星狐ヴィーナ",
        text: "望遠鏡でよく見よ。丸くなり、半分になり、細い爪のようにも欠ける。",
        pattern: "phase"
      },
      {
        speaker: "金星狐ヴィーナ",
        text: "これは呪いではない。地球より内側を回る私の昼面が、角度で変わって見えるのだ。",
        pattern: "phase"
      },
      {
        speaker: "金星狐ヴィーナ",
        text: "満ち欠けを読めば、惑星が太陽のまわりを回る姿が見えてくる。",
        pattern: "normal"
      }
    ]
  },
  jupiterMoons: {
    kingdomId: "tower",
    battleBg: "planetarium",
    type: "STORY 6",
    name: "木星獅子ジュピター",
    subtitle: "",
    lead: "巨大な惑星のそばに、小さな衛星が並ぶ観測の試練。",
    mechanic: "galileanMoons",
    clearAt: 4,
    portrait: "./assets/planet-enemy-jupiter-normal.png",
    enemy: {
      normal: "./assets/planet-enemy-jupiter-normal.png",
      moons: "./assets/planet-enemy-jupiter-phenomenon.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "巨大ガス惑星" },
        { icon: "◎", label: "衛星", value: "ガリレオ衛星" },
        { icon: "☉", label: "現象", value: "衛星発見" }
      ],
      meter: {
        normal: 72,
        moons: 90
      }
    },
    rule: "能力：強い光のそばに小さな衛星を隠す。",
    clearRule: "攻略法：木星のそばで位置を変える小点を追い、衛星が惑星を回ると見破る。",
    reward: {
      id: "jupiter-moons-scroll",
      title: "木星の衛星発見",
      message: "木星を観測してゲットしました。",
      image: "./assets/reward-scroll-minor-jupiter-moons.png",
      tier: "minor",
      knowledgeTitle: "",
      knowledge: [
        "衛星は惑星を回る"
      ]
    },
    lines: [
      {
        speaker: "木星獅子ジュピター",
        text: "私は巨大な木星の獅子。明るい本体だけを見ていては、まわりの小さな点を見逃す。",
        pattern: "normal"
      },
      {
        speaker: "木星獅子ジュピター",
        text: "日を変えて見よ。小さな星たちは私の左右で並び替わる。",
        pattern: "moons"
      },
      {
        speaker: "木星獅子ジュピター",
        text: "その正体は衛星だ。イオ、エウロパ、ガニメデ、カリストが木星を回っている。",
        pattern: "moons"
      },
      {
        speaker: "木星獅子ジュピター",
        text: "空のすべてが地球を回るわけではない。小さな点の動きが、宇宙観を変えた。",
        pattern: "normal"
      }
    ]
  },
  marsRetrograde: {
    kingdomId: "tower",
    battleBg: "planetarium",
    type: "STORY 7",
    name: "火星狼マルス",
    subtitle: "",
    lead: "赤い惑星が星座の中で逆向きに進む、見かけの運動を読む。",
    mechanic: "retrograde",
    clearAt: 4,
    portrait: "./assets/planet-enemy-mars-normal.png",
    enemy: {
      normal: "./assets/planet-enemy-mars-normal.png",
      retrograde: "./assets/planet-enemy-mars-phenomenon.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "外惑星" },
        { icon: "⌁", label: "色", value: "赤い惑星" },
        { icon: "↺", label: "現象", value: "逆行" }
      ],
      meter: {
        normal: 68,
        retrograde: 88
      }
    },
    rule: "能力：星座の中で進む向きを変え、軌道を迷わせる。",
    clearRule: "攻略法：地球が外惑星を追い越すとき、見かけ上逆行すると読む。",
    reward: {
      id: "mars-retrograde-scroll",
      title: "火星の逆行",
      message: "火星を観測してゲットしました。",
      image: "./assets/reward-scroll-minor-mars-retrograde.png",
      tier: "minor",
      knowledgeTitle: "",
      knowledge: [
        "逆行は見かけ"
      ]
    },
    lines: [
      {
        speaker: "火星狼マルス",
        text: "私は赤く光る火星の狼。星座の道を進んでいたはずが、突然うしろへ戻るように見える。",
        pattern: "normal"
      },
      {
        speaker: "火星狼マルス",
        text: "この足跡を追え。空の背景に対して、進行方向が一時的に逆になる。",
        pattern: "retrograde"
      },
      {
        speaker: "火星狼マルス",
        text: "本当に逆走しているのではない。速い地球が内側から追い越すため、見かけの向きが変わる。",
        pattern: "retrograde"
      },
      {
        speaker: "火星狼マルス",
        text: "逆行は惑星の軌道を立体的に読む合図だ。赤い足跡を恐れるな。",
        pattern: "normal"
      }
    ]
  },
  saturnKepler3: {
    kingdomId: "tower",
    battleBg: "planetarium",
    type: "STORY 8",
    name: "土星鹿サターン",
    subtitle: "",
    lead: "遠い惑星ほど公転に時間がかかる。軌道の大きさと周期の法則を読む。",
    mechanic: "keplerThird",
    clearAt: 4,
    portrait: "./assets/planet-enemy-saturn-normal.png",
    enemy: {
      normal: "./assets/planet-enemy-saturn-normal.png",
      orbit: "./assets/planet-enemy-saturn-phenomenon.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "環の惑星" },
        { icon: "⌁", label: "軌道", value: "外惑星" },
        { icon: "◇", label: "法則", value: "第3法則" }
      ],
      meter: {
        normal: 74,
        orbit: 92
      }
    },
    rule: "能力：環の円盤で軌道の周期を隠す。",
    clearRule: "攻略法：公転周期の2乗が軌道長半径の3乗に比例すると読む。",
    reward: {
      id: "saturn-kepler3-scroll",
      title: "ケプラー第3法則",
      message: "土星を観測してゲットしました。",
      image: "./assets/reward-scroll-minor-saturn-kepler3.png",
      tier: "minor",
      knowledgeTitle: "",
      knowledge: [
        "P2はa3に比例"
      ]
    },
    lines: [
      {
        speaker: "土星鹿サターン",
        text: "私は環をまとう土星の鹿。遠い軌道ほど、ひと回りする時間は長い。",
        pattern: "normal"
      },
      {
        speaker: "土星鹿サターン",
        text: "軌道の大きさと周期を比べよ。ばらばらに見える惑星の巡りには、同じ規則がある。",
        pattern: "orbit"
      },
      {
        speaker: "土星鹿サターン",
        text: "ケプラー第3法則。公転周期 P の2乗は、軌道長半径 a の3乗に比例する。",
        pattern: "orbit"
      },
      {
        speaker: "土星鹿サターン",
        text: "環の美しさに惑わされるな。数で読むと、惑星たちは同じ法則の上を進んでいる。",
        pattern: "normal"
      }
    ]
  },
  neptuneCalculation: {
    kingdomId: "tower",
    battleBg: "planetarium",
    type: "STORY 9",
    name: "海王海竜ネプトゥーン",
    subtitle: "",
    lead: "見えない惑星を、軌道のずれと計算から探し出す。",
    mechanic: "calculatedPlanet",
    clearAt: 4,
    portrait: "./assets/planet-enemy-neptune-normal.png",
    enemy: {
      normal: "./assets/planet-enemy-neptune-normal.png",
      calculated: "./assets/planet-enemy-neptune-phenomenon.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "氷巨大惑星" },
        { icon: "⌁", label: "発見", value: "計算で予測" },
        { icon: "◎", label: "手がかり", value: "軌道のずれ" }
      ],
      meter: {
        normal: 70,
        calculated: 94
      }
    },
    rule: "能力：見えない重力でほかの惑星の道をゆがめる。",
    clearRule: "攻略法：軌道のずれを重力の手がかりにして、海王星の位置を計算する。",
    reward: {
      id: "neptune-calculation-scroll",
      title: "計算で見つかった惑星",
      message: "海王星を観測してゲットしました。",
      image: "./assets/reward-scroll-minor-neptune-calculation.png",
      tier: "minor",
      knowledgeTitle: "",
      knowledge: [
        "計算で惑星発見"
      ]
    },
    lines: [
      {
        speaker: "海王海竜ネプトゥーン",
        text: "私は深い青の海王星。望遠鏡を向ける前に、まず計算で呼び出された惑星だ。",
        pattern: "normal"
      },
      {
        speaker: "海王海竜ネプトゥーン",
        text: "天王星の動きに小さなずれがあった。そのずれは、見えない重力の足跡だった。",
        pattern: "calculated"
      },
      {
        speaker: "海王海竜ネプトゥーン",
        text: "軌道の乱れを計算すると、未知の惑星がいる方角が示された。",
        pattern: "calculated"
      },
      {
        speaker: "海王海竜ネプトゥーン",
        text: "観測は目だけではない。数式もまた、暗い海の底にある惑星を照らす灯だ。",
        pattern: "normal"
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

Object.assign(STORIES, PLANET_STORIES);

const state = {
  mode: "home",
  kingdomId: null,
  storyId: null,
  lineIndex: 0,
  battleBg: "autumn",
  homeTab: "home",
  homeKingdomId: "autumn",
  selectedObserveId: null,
  selectedScrollId: null,
  selectedQuestId: null,
  selectedQuestEvidence: {}
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
    description: "中央塔の台座に惑星を映し、満ち欠け、逆行、衛星、軌道法則を読む。",
    action: "天球観測塔へ進む",
    enterId: "tower"
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
  { id: "quests", label: "クエスト" },
  { id: "library", label: "図書館" },
  { id: "settings", label: "設定" }
];

const APP_SCREEN_MODES = new Set(["observe", "quests", "library", "settings"]);

const OBSERVE_COPY = {
  mizar: {
    lesson: "肉眼と望遠鏡で二重星を見分ける",
    description: "北斗七星の柄に並ぶ二重星を観測。"
  },
  "arcturus-preview": {
    lesson: "橙色巨星の色と温度を読む",
    description: "春の大曲線で見つかる明るい巨星。"
  },
  "spica-preview": {
    lesson: "青白い星は高温のしるし",
    description: "おとめ座で輝く春の一等星。"
  },
  cygnus: {
    lesson: "背景星とのずれで距離を測る",
    description: "天の川に浮かぶ白鳥座の年周視差。"
  },
  "deneb-preview": {
    lesson: "遠い星でも大光度なら明るい",
    description: "白鳥の尾に輝く遠方の一等星。"
  },
  "albireo-preview": {
    lesson: "星の色は温度の手がかり",
    description: "青と橙の対比で表面温度を読む。"
  },
  "cygni61-preview": {
    lesson: "近い恒星は視差が測りやすい",
    description: "年周視差測定で重要な近い恒星。"
  },
  algol: {
    lesson: "周期的な暗化は食で起こる",
    description: "伴星が主星を隠す食変光星。"
  },
  "mira-preview": {
    lesson: "脈動で明るさが変わる",
    description: "くじら座で長周期に明滅する変光星。"
  },
  "m31-preview": {
    lesson: "星座の奥に銀河がある",
    description: "アンドロメダ座方向の隣の大銀河。"
  },
  rigel: {
    lesson: "青白い星ほど高温",
    description: "オリオン座の足で輝く青白い巨星。"
  },
  "betelgeuse-preview": {
    lesson: "赤い星は表面温度が低い",
    description: "赤色超巨星として進化を読む。"
  },
  "sirius-preview": {
    lesson: "見かけの明るさは距離も効く",
    description: "近いため非常に明るい白い一等星。"
  },
  venus: {
    lesson: "内惑星は満ち欠けする",
    description: "太陽との位置で照らされた面が変わる。"
  },
  mars: {
    lesson: "逆行は追い越しで起こる見かけ",
    description: "地球が内側から追い越すと戻って見える。"
  },
  jupiter: {
    lesson: "衛星は惑星のまわりを回る",
    description: "小さな点の並び替わりが衛星を示す。"
  },
  saturn: {
    lesson: "Pの2乗はaの3乗に比例",
    description: "遠い惑星ほど公転周期が長い。"
  },
  neptune: {
    lesson: "軌道のずれから惑星を予測",
    description: "計算で位置を求め観測で確認された。"
  }
};

const LIBRARY_SCROLLS = [
  {
    id: "rigel-color-luminosity-scroll",
    title: "星色と大光度の巻物",
    period: "冬の王国",
    image: "./assets/reward-scroll-rigel-luminosity.png",
    tier: "major",
    lesson: "青白い星ほど高温",
    description: "リゲルは青白く高温で、遠くにあっても強く輝く大光度星。星の色は表面温度を読む手がかりになる。"
  },
  {
    id: "cygnus-parallax-scroll",
    title: "年周視差の巻物",
    period: "夏の王国",
    image: "./assets/reward-scroll-cygnus-parallax.png",
    tier: "major",
    lesson: "距離は視差の逆数",
    description: "半年後の見かけのずれを年周視差という。視差 p を秒角で測れば、距離 d はパーセクで 1 / p になる。"
  },
  {
    id: "venus-phases-scroll",
    title: "金星の満ち欠け",
    period: "天球観測塔",
    image: "./assets/reward-scroll-minor-venus-phases.png",
    tier: "minor",
    lesson: "内惑星は満ち欠け",
    description: "金星は地球より太陽に近い内惑星。太陽、金星、地球の位置関係によって、月のように満ち欠けして見える。"
  },
  {
    id: "jupiter-moons-scroll",
    title: "木星の衛星発見",
    period: "天球観測塔",
    image: "./assets/reward-scroll-minor-jupiter-moons.png",
    tier: "minor",
    lesson: "衛星は惑星を回る",
    description: "木星のそばで位置を変える小さな点は、木星を回る衛星。ガリレオ衛星の発見は、地球中心だけではない天体運動を示した。"
  },
  {
    id: "mars-retrograde-scroll",
    title: "火星の逆行",
    period: "天球観測塔",
    image: "./assets/reward-scroll-minor-mars-retrograde.png",
    tier: "minor",
    lesson: "逆行は見かけ",
    description: "外惑星の逆行は、地球が内側の軌道から追い越すために起こる見かけの運動。実際に惑星が逆走するわけではない。"
  },
  {
    id: "saturn-kepler3-scroll",
    title: "ケプラー第3法則",
    period: "天球観測塔",
    image: "./assets/reward-scroll-minor-saturn-kepler3.png",
    tier: "minor",
    lesson: "P2はa3に比例",
    description: "惑星の公転周期 P の2乗は、軌道長半径 a の3乗に比例する。遠い惑星ほど公転に長い時間がかかる。"
  },
  {
    id: "neptune-calculation-scroll",
    title: "計算で見つかった惑星",
    period: "天球観測塔",
    image: "./assets/reward-scroll-minor-neptune-calculation.png",
    tier: "minor",
    lesson: "計算で惑星発見",
    description: "海王星は天王星の軌道のずれを手がかりに、未知の惑星の位置を計算して発見された。観測と理論が結びついた例。"
  },
  {
    id: "spectrum-redshift-scroll",
    title: "スペクトルデータ",
    period: "銀河の奥",
    image: "./assets/reward-scroll-minor-base.png",
    tier: "minor",
    lesson: "赤方偏移を読む",
    description: "遠ざかる天体の光は赤い側へずれる。スペクトルは、天体の運動を読む重要な観測記録になる。",
    locked: true
  },
  {
    id: "galaxy-distance-scroll",
    title: "遠方銀河の記録",
    period: "銀河の奥",
    image: "./assets/reward-scroll-minor-base.png",
    tier: "minor",
    lesson: "銀河までの距離",
    description: "銀河までの距離を測ると、宇宙の広がりや膨張を調べる入口になる。",
    locked: true
  },
  {
    id: "algol-eclipse-scroll",
    title: "食変光星の巻物",
    period: "秋の王国",
    image: "./assets/equation-scroll-binary.png",
    tier: "major",
    lesson: "食で光度が下がる",
    description: "アルゴルの暗くなる周期は、伴星が前を通って主星の光を隠す食で説明できる。",
    locked: true
  },
  {
    id: "mizar-double-star-scroll",
    title: "二重星の巻物",
    period: "春の王国",
    image: "./assets/equation-scroll-parallax.png",
    tier: "major",
    lesson: "近くに見えても別距離",
    description: "星座の星は見かけの並び。二重星や連星を観測すると、点に見える星の奥行きがほどける。",
    locked: true
  }
];

const QUESTS = [
  {
    id: "heliocentric-theory",
    number: 1,
    title: "地動説の提唱",
    requester: "コペルニクス",
    requesterImage: "./assets/quest-requester-copernicus.png",
    mainImage: "./assets/quest-main-heliocentric.png",
    objective: "地球中心説では説明しにくい現象を見つける",
    conversation: "集めた巻物と観測技術を選び、太陽中心の宇宙を示す証拠を組み合わせよう。",
    requesterStats: {
      birthYear: "1473年",
      fullName: "Nicolaus Copernicus",
      achievement: "太陽を中心に惑星が回る体系を示し、地動説の基礎を築いた。"
    },
    summary: "太陽中心の宇宙を示す証拠を集めてほしい。",
    detail: "金星の満ち欠けと木星の衛星は、地球中心だけでは説明しにくい観測事実。太陽中心の見方へ進むための依頼。",
    reward: "地動説の星章",
    requiredScrolls: [
      { id: "venus-phases-scroll", label: "金星の満ち欠け" },
      { id: "jupiter-moons-scroll", label: "木星の衛星発見" }
    ]
  },
  {
    id: "kepler-third-law",
    number: 2,
    title: "ケプラー第3法則",
    requester: "ケプラー",
    requesterImage: "./assets/quest-requester-kepler.png",
    mainImage: "./assets/battle-bg-planetarium.png",
    objective: "惑星の周期と軌道半径の関係を見つける",
    conversation: "惑星の見かけの迷いをほどき、周期と軌道の規則を示す証拠を選ぼう。",
    requesterStats: {
      birthYear: "1571年",
      fullName: "Johannes Kepler",
      achievement: "惑星運動の法則をまとめ、軌道と公転周期の関係を明らかにした。"
    },
    summary: "惑星の運動について、さらに確かな法則を見出したい。",
    detail: "火星の逆行を見かけの運動としてほどき、土星の公転周期から軌道と周期の規則を読む依頼。",
    reward: "軌道調和の星章",
    requiredScrolls: [
      { id: "mars-retrograde-scroll", label: "火星の逆行" },
      { id: "saturn-kepler3-scroll", label: "第3法則の観測" }
    ]
  },
  {
    id: "universal-gravity",
    number: 3,
    title: "万有引力の発見",
    requester: "ニュートン",
    requesterImage: "./assets/quest-requester-newton.png",
    mainImage: "./assets/battle-bg-planetarium.png",
    objective: "天体を引き合う力で説明する",
    conversation: "衛星、惑星軌道、計算で見つかった惑星をつなぎ、重力の考えへ進もう。",
    requesterStats: {
      birthYear: "1643年",
      fullName: "Isaac Newton",
      achievement: "地上の落下運動と天体の運動を、万有引力として一つの法則で説明した。"
    },
    summary: "物体を引き合う力の正体を解き明かしてほしい。",
    detail: "惑星の軌道法則、衛星の周回、計算で予測される惑星をつなぎ、重力で天体運動を説明する依頼。",
    reward: "重力法則の星章",
    requiredScrolls: [
      { id: "jupiter-moons-scroll", label: "木星の衛星発見" },
      { id: "saturn-kepler3-scroll", label: "ケプラー第3法則" },
      { id: "neptune-calculation-scroll", label: "計算で惑星発見" }
    ]
  },
  {
    id: "hubble-law",
    number: 4,
    title: "ハッブルの法則",
    requester: "ハッブル",
    requesterImage: "./assets/quest-requester-hubble.png",
    mainImage: "./assets/battle-bg-planetarium.png",
    objective: "銀河の距離と後退速度の関係を調べる",
    conversation: "距離測定とスペクトルの証拠を組み合わせ、遠方銀河が語る宇宙の広がりを読もう。",
    requesterStats: {
      birthYear: "1889年",
      fullName: "Edwin Hubble",
      achievement: "銀河が遠いほど速く遠ざかる関係を示し、宇宙膨張の観測的根拠を与えた。"
    },
    summary: "遠方銀河の速度と距離の関係を調べてほしい。",
    detail: "距離測定、スペクトル、遠方銀河の観測記録をそろえると、宇宙膨張へ進む依頼が開く。",
    reward: "宇宙膨張の星章",
    requiredScrolls: [
      { id: "cygnus-parallax-scroll", label: "距離測定の記録" },
      { id: "spectrum-redshift-scroll", label: "スペクトルデータ" },
      { id: "galaxy-distance-scroll", label: "遠方銀河の記録" }
    ]
  }
];

function getQuestProgress(quest) {
  const collected = quest.requiredScrolls.filter((item) => claimedRewards.has(item.id)).length;
  return {
    collected,
    total: quest.requiredScrolls.length,
    open: collected === quest.requiredScrolls.length
  };
}

function getSelectedQuest() {
  return QUESTS.find((quest) => quest.id === state.selectedQuestId) ?? QUESTS[0];
}

function getScrollById(scrollId) {
  return LIBRARY_SCROLLS.find((scroll) => scroll.id === scrollId);
}

function getQuestEvidenceOptions(quest) {
  const seen = new Set();
  const required = quest.requiredScrolls.map((requirement) => {
    seen.add(requirement.id);
    const scroll = getScrollById(requirement.id);

    return {
      id: requirement.id,
      title: requirement.label,
      image: scroll?.image ?? "./assets/reward-scroll-minor-base.png",
      tier: scroll?.tier ?? "minor",
      required: true
    };
  });

  const extras = LIBRARY_SCROLLS.filter((scroll) => !seen.has(scroll.id)).map((scroll) => ({
    id: scroll.id,
    title: scroll.title,
    image: scroll.image,
    tier: scroll.tier,
    required: false
  }));

  return [...required, ...extras];
}

function getQuestSelectedEvidenceIds(quest) {
  if (!state.selectedQuestEvidence[quest.id]) {
    state.selectedQuestEvidence[quest.id] = quest.requiredScrolls
      .filter((requirement) => claimedRewards.has(requirement.id))
      .map((requirement) => requirement.id)
      .slice(0, 4);
  }

  return state.selectedQuestEvidence[quest.id];
}

function getEvidenceRating(evidence) {
  if (evidence.required) return 3;
  return evidence.tier === "major" ? 4 : 2;
}

function renderEvidenceStars(count) {
  return `<span class="quest-evidence-stars" aria-label="${count}星">${"★".repeat(count)}${"☆".repeat(5 - count)}</span>`;
}

function toggleQuestEvidence(questId, evidenceId) {
  const quest = QUESTS.find((item) => item.id === questId);
  if (!quest || !claimedRewards.has(evidenceId)) return;

  const selected = getQuestSelectedEvidenceIds(quest);
  const currentIndex = selected.indexOf(evidenceId);

  if (currentIndex >= 0) {
    selected.splice(currentIndex, 1);
  } else if (selected.length < 4) {
    selected.push(evidenceId);
  }

  renderMap();
}

function removeQuestEvidence(questId, evidenceId) {
  const quest = QUESTS.find((item) => item.id === questId);
  if (!quest) return;

  state.selectedQuestEvidence[quest.id] = getQuestSelectedEvidenceIds(quest)
    .filter((id) => id !== evidenceId);
  renderMap();
}

function renderQuestEvidenceRow(quest, evidence) {
  const selected = getQuestSelectedEvidenceIds(quest).includes(evidence.id);
  const available = claimedRewards.has(evidence.id);
  const stateLabel = selected ? "選択済み" : available ? "選択" : "未取得";

  return `
    <button class="quest-evidence-row${selected ? " selected" : ""}${available ? " available" : " locked"}" type="button" data-evidence-id="${evidence.id}" ${available ? "" : "disabled"} aria-pressed="${selected ? "true" : "false"}">
      <img src="${withAssetVersion(evidence.image)}" alt="" aria-hidden="true" />
      <span class="quest-evidence-copy">
        <strong>${evidence.title}</strong>
        ${renderEvidenceStars(getEvidenceRating(evidence))}
      </span>
      <b>${stateLabel}</b>
    </button>
  `;
}

function renderSelectedEvidenceSlot(quest, evidenceId, index) {
  if (!evidenceId) {
    return `
      <div class="quest-selected-slot empty">
        <span>${index + 1}</span>
        <strong>ここにセットできます</strong>
      </div>
    `;
  }

  const evidence = getQuestEvidenceOptions(quest).find((item) => item.id === evidenceId)
    ?? getScrollById(evidenceId)
    ?? { id: evidenceId, title: "観測事実", image: "./assets/reward-scroll-minor-base.png" };

  return `
    <div class="quest-selected-slot">
      <img src="${withAssetVersion(evidence.image)}" alt="" aria-hidden="true" />
      <strong>${evidence.title}</strong>
      <button type="button" data-evidence-remove="${evidence.id}" aria-label="${evidence.title}を外す">×</button>
    </div>
  `;
}

function getObservableItems() {
  return Object.entries(KINGDOMS).flatMap(([kingdomId, kingdom]) =>
    kingdom.points.map((point) => {
      const story = point.storyId ? STORIES[point.storyId] : null;
      const status = story?.status?.rows?.map((row) => `${row.label}: ${row.value}`).join(" / ");
      const observeCopy = OBSERVE_COPY[point.id] ?? {};

      return {
        ...point,
        kingdomId,
        kingdomName: kingdom.name,
        kind: point.kind ?? "star",
        asset: point.asset ?? "",
        title: story?.name ?? (point.id === "rigel" ? "青白き巨星リゲル" : point.label),
        enemyImage: story?.enemy?.normal ?? story?.portrait ?? "",
        enemyAlt: story?.name ?? point.label,
        lesson: observeCopy.lesson ?? story?.clearRule ?? point.note ?? kingdom.detailText,
        description: observeCopy.description ?? (story
          ? `${story.lead}${status ? ` ${status}` : ""}`
          : point.note ?? kingdom.detailText)
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
  state.selectedQuestId = null;
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
  state.selectedQuestId = null;
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
  state.selectedQuestId = null;
  render();
}

function goHome() {
  hideReward();
  state.mode = "home";
  state.kingdomId = null;
  state.storyId = null;
  state.lineIndex = 0;
  state.homeTab = "home";
  state.selectedQuestId = null;
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
  state.selectedQuestId = screenId === "quests" ? null : state.selectedQuestId;
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
    quests: renderQuestTab,
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
    button.className = [
      "story-point",
      point.kind === "planet" ? "planet-story-point" : "",
      point.locked ? "locked" : ""
    ].filter(Boolean).join(" ");
    button.dataset.pointId = point.id;
    button.dataset.label = point.label;
    button.style.left = `${point.x}%`;
    button.style.top = `${point.y}%`;
    button.setAttribute("aria-label", `${point.label}の物語`);
    if (point.asset) {
      const image = document.createElement("img");
      image.src = withAssetVersion(point.asset);
      image.alt = "";
      image.setAttribute("aria-hidden", "true");
      button.appendChild(image);
    }
    button.addEventListener("click", () => {
      if (point.locked) {
        renderGuideNote(point.label, point.note);
        return;
      }
      if (point.storyId) {
        openStory(point.storyId);
        return;
      }
      renderGuideNote(point.label, point.note);
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
      </div>
      <div class="app-scroll-area">
        <div class="observe-orb-grid app-observe-grid" aria-label="天体一覧">
          ${items
            .map((item, index) => {
              const orbClass = ORB_CLASSES[index % ORB_CLASSES.length];
              const lockedClass = item.locked ? " locked" : "";
              const selectedClass = selected.id === item.id ? " selected" : "";
              const planetClass = item.kind === "planet" ? " planet-item" : "";
              const orbContent = item.kind === "planet" && item.asset
                ? `<img src="${withAssetVersion(item.asset)}" alt="" aria-hidden="true" />`
                : "";

              return `
                <button class="winter-star-orb-button ${orbClass}${lockedClass}${selectedClass}${planetClass}" type="button" data-observe-id="${item.id}">
                  <span class="winter-star-orb" aria-hidden="true">${orbContent}</span>
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
          <h3>${selected.title}</h3>
          <strong>${selected.lesson}</strong>
          <p>${selected.description}</p>
        </div>
      </section>
    </section>
  `;
}

function getRequirementImage(requirement) {
  return LIBRARY_SCROLLS.find((scroll) => scroll.id === requirement.id)?.image
    ?? "./assets/reward-scroll-minor-base.png";
}

function renderQuestRequirement(requirement) {
  const acquired = claimedRewards.has(requirement.id);

  return `
    <span class="quest-requirement${acquired ? " acquired" : " missing"}">
      <img src="${withAssetVersion(getRequirementImage(requirement))}" alt="" aria-hidden="true" />
      <span>${requirement.label}</span>
      <b>${acquired ? "✓" : "−"}</b>
    </span>
  `;
}

function renderQuestCard(quest) {
  const progress = getQuestProgress(quest);
  const status = progress.open ? "OPEN" : "";

  return `
    <button class="quest-card${progress.open ? " open" : " locked"}" type="button" data-quest-id="${quest.id}">
      <span class="quest-requester">
        <img src="${withAssetVersion(quest.requesterImage)}" alt="${quest.requester}" />
        <span>依頼主<br><strong>${quest.requester}</strong></span>
      </span>
      <span class="quest-card-copy">
        <span class="quest-title-row">
          <span class="quest-number">${quest.number}</span>
          <strong>${quest.title}</strong>
          ${status ? `<em>${status}</em>` : ""}
        </span>
        <span class="quest-summary">${quest.summary}</span>
        <span class="quest-required-title">必要な証拠</span>
        <span class="quest-requirements">
          ${quest.requiredScrolls.map(renderQuestRequirement).join("")}
        </span>
      </span>
    </button>
  `;
}

function renderQuestDetail(quest) {
  const progress = getQuestProgress(quest);
  const evidenceOptions = getQuestEvidenceOptions(quest);
  const selectedEvidenceIds = getQuestSelectedEvidenceIds(quest);
  const selectedSlots = Array.from({ length: 4 }, (_, index) => selectedEvidenceIds[index] ?? null);
  const canCombine = quest.requiredScrolls.every((requirement) => selectedEvidenceIds.includes(requirement.id));
  const requesterStats = quest.requesterStats ?? {
    birthYear: "不明",
    fullName: quest.requester,
    achievement: quest.summary
  };

  return `
    <section class="app-screen-panel quest-tab quest-detail-view">
      <div class="quest-detail-title">
        <button class="quest-back-button" type="button" data-quest-back aria-label="クエスト一覧へ戻る">←</button>
        <span>QUEST ${quest.number}</span>
        <h2>${quest.title}</h2>
        <p>巻物と観測技術を組み合わせよう</p>
      </div>
      <div class="quest-detail-scroll app-scroll-area">
        <section class="quest-main-layout" aria-label="${quest.title}のメイン画面">
          <figure class="quest-main-image-card">
            <img src="${withAssetVersion(quest.mainImage)}" alt="${quest.title}の観測場面" />
            <figcaption class="quest-requester-status" aria-label="依頼主ステータス">
              <dl>
                <div>
                  <dt>出生年</dt>
                  <dd>${requesterStats.birthYear}</dd>
                </div>
                <div>
                  <dt>本名</dt>
                  <dd>${requesterStats.fullName}</dd>
                </div>
                <div>
                  <dt>功績</dt>
                  <dd>${requesterStats.achievement}</dd>
                </div>
              </dl>
            </figcaption>
          </figure>
        </section>

        <section class="quest-dialogue-panel screen-detail-panel" aria-label="${quest.requester}との会話">
          <img src="${withAssetVersion(quest.requesterImage)}" alt="" aria-hidden="true" />
          <div>
            <h3>${quest.title}</h3>
            <strong>${quest.objective}</strong>
            <p>${quest.conversation}</p>
          </div>
        </section>

        <section class="quest-evidence-board" aria-label="巻物と観測技術の選択">
          <div class="quest-evidence-column">
            <header>
              <h3>手持ちの巻物・観測技術</h3>
              <span>タップで選択</span>
            </header>
            <div class="quest-evidence-list">
              ${evidenceOptions.map((evidence) => renderQuestEvidenceRow(quest, evidence)).join("")}
            </div>
          </div>

          <div class="quest-selected-column">
            <header>
              <h3>選んだ証拠</h3>
              <span>最大4つまで</span>
            </header>
            <div class="quest-selected-list">
              ${selectedSlots.map((evidenceId, index) => renderSelectedEvidenceSlot(quest, evidenceId, index)).join("")}
            </div>
            <p>${progress.open ? "必要な証拠はそろっています。" : `必要な証拠 ${progress.collected} / ${progress.total}`}</p>
            <button class="quest-combine-button" type="button" ${canCombine ? "" : "disabled"}>
              組み合わせる
              <small>${canCombine ? "必要な証拠がそろっています" : "必要な証拠が不足しています"}</small>
            </button>
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderQuestTab() {
  const selectedQuest = state.selectedQuestId ? getSelectedQuest() : null;

  if (selectedQuest) {
    return renderQuestDetail(selectedQuest);
  }

  return `
    <section class="app-screen-panel quest-tab">
      <div class="quest-board-title">
        <span>QUEST</span>
        <h2>クエスト一覧</h2>
      </div>
      <div class="app-scroll-area quest-list-scroll">
        <div class="quest-list" aria-label="依頼掲示板">
          ${QUESTS.map(renderQuestCard).join("")}
        </div>
      </div>
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
      </div>
      <div class="app-scroll-area">
        <div class="library-scroll-grid" aria-label="巻物一覧">
          ${LIBRARY_SCROLLS.map((scroll) => {
            const unlocked = claimedRewards.has(scroll.id);
            return `
              <button class="library-scroll-card ${scroll.tier ?? "major"}-tier${unlocked ? " unlocked" : " locked"}${selected.id === scroll.id ? " selected" : ""}" type="button" ${unlocked ? `data-scroll-id="${scroll.id}"` : 'aria-disabled="true"'}>
                <img src="${withAssetVersion(scroll.image)}" alt="${scroll.title}" />
                <span>${scroll.title}</span>
              </button>
            `;
          }).join("")}
        </div>
      </div>
      <section class="library-detail screen-detail-panel" aria-label="巻物の詳細">
        <img src="${withAssetVersion(selected.image)}" alt="${selected.title}" />
        <div>
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
              const planetClass = point.kind === "planet" ? " planet-item" : "";
              const storyAttr = point.storyId
                ? `data-story-id="${point.storyId}"`
                : `data-guide-title="${point.label}" data-guide-note="${point.note}"`;
              const label = point.kind === "planet"
                ? point.label
                : STORIES[point.storyId]?.name ?? (point.id === "rigel" ? "青白き巨星リゲル" : point.label);
              const orbContent = point.kind === "planet" && point.asset
                ? `<img src="${withAssetVersion(point.asset)}" alt="" aria-hidden="true" />`
                : "";

              return `
                <button class="winter-star-orb-button ${orbClass}${lockedClass}${planetClass}" type="button" ${storyAttr}>
                  <span class="winter-star-orb" aria-hidden="true">${orbContent}</span>
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
  const questBackButton = target?.closest("[data-quest-back]");
  if (questBackButton) {
    state.selectedQuestId = null;
    renderMap();
    return;
  }

  const removeEvidenceButton = target?.closest("[data-evidence-remove]");
  if (removeEvidenceButton && state.selectedQuestId) {
    removeQuestEvidence(state.selectedQuestId, removeEvidenceButton.dataset.evidenceRemove);
    return;
  }

  const evidenceButton = target?.closest("[data-evidence-id]");
  if (evidenceButton && state.selectedQuestId) {
    toggleQuestEvidence(state.selectedQuestId, evidenceButton.dataset.evidenceId);
    return;
  }

  const questButton = target?.closest("[data-quest-id]");
  if (questButton) {
    state.selectedQuestId = questButton.dataset.questId;
    renderMap();
    return;
  }

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
