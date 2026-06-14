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
        id: "arcturus",
        x: 28,
        y: 71,
        label: "アルクトゥルス",
        storyId: "arcturus"
      },
      {
        id: "spica",
        x: 73,
        y: 76,
        label: "スピカ",
        storyId: "spica"
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
    steps: ["ベガ", "デネブ", "アルビレオ", "61 Cygni"],
    points: [
      {
        id: "vega",
        x: 74,
        y: 31,
        label: "ベガ",
        storyId: "vega"
      },
      {
        id: "deneb",
        x: 49,
        y: 78,
        label: "デネブ",
        storyId: "deneb"
      },
      {
        id: "albireo",
        x: 25,
        y: 42,
        label: "アルビレオ",
        storyId: "albireo"
      },
      {
        id: "cygni61",
        x: 18,
        y: 82,
        label: "61 Cygni",
        storyId: "cygni61"
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
        id: "mira",
        x: 36,
        y: 70,
        label: "ミラ",
        storyId: "mira"
      },
      {
        id: "m31",
        x: 84,
        y: 76,
        label: "M31",
        storyId: "m31"
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
        id: "betelgeuse",
        x: 39,
        y: 32,
        label: "ベテルギウス",
        storyId: "betelgeuse"
      },
      {
        id: "sirius",
        x: 78,
        y: 83,
        label: "シリウス",
        storyId: "sirius"
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
    steps: ["太陽", "水星", "金星", "火星", "木星", "土星", "天王星", "海王星"],
    points: [
      {
        id: "sun",
        x: 50,
        y: 18,
        label: "太陽",
        storyId: "sunReference",
        kind: "planet",
        asset: "./assets/planet-orb-sun.png"
      },
      {
        id: "mercury",
        x: 72.6,
        y: 27.4,
        label: "水星",
        storyId: "mercuryElongation",
        kind: "planet",
        asset: "./assets/planet-orb-mercury.png"
      },
      {
        id: "venus",
        x: 82,
        y: 50,
        label: "金星",
        storyId: "venusPhases",
        kind: "planet",
        asset: "./assets/planet-orb-venus.png"
      },
      {
        id: "mars",
        x: 72.6,
        y: 72.6,
        label: "火星",
        storyId: "marsRetrograde",
        kind: "planet",
        asset: "./assets/planet-orb-mars.png"
      },
      {
        id: "jupiter",
        x: 50,
        y: 82,
        label: "木星",
        storyId: "jupiterMoons",
        kind: "planet",
        asset: "./assets/planet-orb-jupiter.png"
      },
      {
        id: "saturn",
        x: 27.4,
        y: 72.6,
        label: "土星",
        storyId: "saturnKepler3",
        kind: "planet",
        asset: "./assets/planet-orb-saturn.png"
      },
      {
        id: "uranus",
        x: 18,
        y: 50,
        label: "天王星",
        storyId: "uranusTilt",
        kind: "planet",
        asset: "./assets/planet-orb-uranus.png"
      },
      {
        id: "neptune",
        x: 27.4,
        y: 27.4,
        label: "海王星",
        storyId: "neptuneCalculation",
        kind: "planet",
        asset: "./assets/planet-orb-neptune.png"
      }
    ]
  },

};

KINGDOMS.deep = {
  name: "銀河深淵域",
  lead: "天の川の外へ続く、紫の外宇宙ゲート。",
  detailImage: "./assets/deep-cosmos-gate-map.png",
  detailAlt: "銀河深淵域と遠方宇宙の詳細星図",
  detailTitle: "外宇宙星図",
  detailText: "天の川の向こうで、銀河、銀河団、クエーサー、宇宙背景放射が宇宙の階層を語る。",
  steps: ["M31セファイド", "銀河団", "クエーサー", "宇宙背景放射", "M87ブラックホール"],
  points: [
    { id: "m31Cepheid", x: 31, y: 31, label: "M31変光星", storyId: "m31Cepheid", asset: "./assets/deep-point-m31-cepheid.png" },
    { id: "virgoCluster", x: 70, y: 29, label: "銀河団", storyId: "virgoDarkMatter", asset: "./assets/deep-point-virgo-darkmatter.png" },
    { id: "quasar", x: 82, y: 48, label: "クエーサー", storyId: "quasarBeacon", asset: "./assets/deep-point-quasar.png" },
    { id: "cmb", x: 50, y: 16, label: "CMB", storyId: "cmbEcho", asset: "./assets/deep-point-cmb.png" },
    { id: "pulsar", x: 24, y: 55, label: "パルサー", storyId: "pulsarBeacon", asset: "./assets/deep-point-pulsar.png" },
    { id: "cygnusX1", x: 42, y: 68, label: "X線連星", storyId: "cygnusX1", asset: "./assets/deep-point-xray-blackhole.png" },
    { id: "sn1987a", x: 18, y: 78, label: "SN1987A", storyId: "sn1987a", asset: "./assets/deep-point-sn1987a.png" },
    { id: "m87Shadow", x: 69, y: 73, label: "M87", storyId: "m87Shadow", asset: "./assets/deep-point-m87-blackhole.png" },
    { id: "gravityWaves", x: 52, y: 86, label: "重力波", storyId: "gravityWaveGate", asset: "./assets/deep-point-gravity-waves.png" },
    { id: "darkEnergy", x: 84, y: 84, label: "加速膨張", storyId: "darkEnergySupernova", asset: "./assets/deep-point-dark-energy.png" }
  ]
};

const PLANET_STORIES = {
  mercuryElongation: {
    kingdomId: "tower",
    battleBg: "planetarium",
    type: "STORY 20",
    name: "水星兎メルクリウス",
    subtitle: "",
    lead: "太陽の近くを素早く巡る内惑星。見える高さは最大離角で決まる。",
    mechanic: "innerPlanetElongation",
    clearAt: 4,
    portrait: "./assets/planet-enemy-mercury-normal.png",
    enemy: {
      normal: "./assets/planet-enemy-mercury-normal.png",
      elongation: "./assets/planet-enemy-mercury-phenomenon.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "内惑星" },
        { icon: "☉", label: "軌道", value: "太陽に最も近い" },
        { icon: "◇", label: "観測", value: "最大離角" }
      ],
      meter: {
        normal: 62,
        elongation: 86
      }
    },
    rule: "能力：太陽の光の近くに隠れ、夕方か明け方にだけ姿を出す。",
    clearRule: "攻略法：内惑星は太陽から大きく離れず、最大離角のころ観測しやすいと読む。",
    reward: {
      id: "mercury-elongation-scroll",
      title: "水星の最大離角",
      message: "水星を観測してゲットしました。",
      image: "./assets/obs-mercury-elongation.png",
      tier: "minor",
      knowledgeTitle: "",
      knowledge: [
        "内惑星は離角で探す"
      ]
    },
    lines: [
      {
        speaker: "水星兎メルクリウス",
        text: "私は太陽のすぐそばを走る水星の兎。夜中の高い空では待っても会えない。",
        pattern: "normal"
      },
      {
        speaker: "水星兎メルクリウス",
        text: "太陽から見かけ上もっとも離れるころを狙え。それが最大離角だ。",
        pattern: "elongation"
      },
      {
        speaker: "水星兎メルクリウス",
        text: "夕方の西空、または明け方の東空。短い時間にだけ、私の小さな影を観測できる。",
        pattern: "elongation"
      },
      {
        speaker: "水星兎メルクリウス",
        text: "内惑星は太陽との角度で探す。速さではなく、見える位置関係を読め。",
        pattern: "normal"
      }
    ]
  },
  sunReference: {
    kingdomId: "tower",
    battleBg: "planetarium",
    type: "STORY 21",
    name: "太陽獅子ソル",
    subtitle: "",
    lead: "惑星の中心に輝く恒星。太陽の光度と質量を、星を比べる基準として読む。",
    mechanic: "solarReference",
    clearAt: 4,
    portrait: "./assets/planet-enemy-sun-normal.png",
    enemy: {
      normal: "./assets/planet-enemy-sun-normal.png",
      reference: "./assets/planet-enemy-sun-phenomenon.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "恒星" },
        { icon: "☉", label: "光度", value: "1 L☉" },
        { icon: "▲", label: "質量", value: "1 M☉" }
      ],
      meter: {
        normal: 70,
        reference: 94
      }
    },
    rule: "能力：強い光で惑星の軌道と恒星の基準単位を隠す。",
    clearRule: "攻略法：太陽を1 L☉、1 M☉の基準として、恒星の光度や質量を比べる。",
    reward: {
      id: "sun-luminosity-scroll",
      title: "太陽光度",
      message: "太陽を観測してゲットしました。",
      image: "./assets/obs-sun-reference.png",
      tier: "minor",
      knowledgeTitle: "",
      knowledge: ["太陽は恒星の基準"]
    },
    lines: [
      {
        speaker: "太陽獅子ソル",
        text: "私は惑星台座の中心に輝く太陽。惑星を照らすだけでなく、恒星を比べる物差しにもなる。",
        pattern: "normal"
      },
      {
        speaker: "太陽獅子ソル",
        text: "光度は 1 L☉、質量は 1 M☉。遠い恒星の強さを語るとき、私の単位が基準になる。",
        pattern: "reference"
      },
      {
        speaker: "太陽獅子ソル",
        text: "惑星たちは私のまわりを巡る。円の配置を見れば、太陽中心の見方が星図に浮かぶ。",
        pattern: "reference"
      },
      {
        speaker: "太陽獅子ソル",
        text: "太陽はただの背景ではない。恒星を学ぶための最初の基準星だ。",
        pattern: "normal"
      }
    ]
  },
  uranusTilt: {
    kingdomId: "tower",
    battleBg: "planetarium",
    type: "STORY 22",
    name: "天王梟ウラノス",
    subtitle: "",
    lead: "望遠鏡で惑星として見出された氷の惑星。大きく傾いた自転軸を持つ。",
    mechanic: "tiltedAxis",
    clearAt: 4,
    portrait: "./assets/planet-enemy-uranus-normal.png",
    enemy: {
      normal: "./assets/planet-enemy-uranus-normal.png",
      tilt: "./assets/planet-enemy-uranus-phenomenon.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "氷巨大惑星" },
        { icon: "◎", label: "発見", value: "望遠鏡で惑星確認" },
        { icon: "◇", label: "自転軸", value: "約98度傾く" }
      ],
      meter: {
        normal: 68,
        tilt: 91
      }
    },
    rule: "能力：横倒しの輪で向きを惑わせ、恒星のふりをする。",
    clearRule: "攻略法：望遠鏡で恒星と違う動きを追い、自転軸が大きく傾く惑星だと読む。",
    reward: {
      id: "uranus-tilt-scroll",
      title: "天王星の傾き",
      message: "天王星を観測してゲットしました。",
      image: "./assets/obs-uranus-tilt.png",
      tier: "minor",
      knowledgeTitle: "",
      knowledge: [
        "天王星は横倒し"
      ]
    },
    lines: [
      {
        speaker: "天王梟ウラノス",
        text: "私は淡い青緑の天王星。肉眼の星の列に紛れ、望遠鏡で惑星として見出された。",
        pattern: "normal"
      },
      {
        speaker: "天王梟ウラノス",
        text: "私の自転軸は大きく傾く。まるで横倒しで太陽のまわりを巡るように見える。",
        pattern: "tilt"
      },
      {
        speaker: "天王梟ウラノス",
        text: "惑星は明るさだけではない。位置の変化、円盤の見え方、軸の向きまで観測するのだ。",
        pattern: "tilt"
      },
      {
        speaker: "天王梟ウラノス",
        text: "望遠鏡は、星に見えた点を新しい惑星へ変える。",
        pattern: "normal"
      }
    ]
  },
  venusPhases: {
    kingdomId: "tower",
    battleBg: "planetarium",
    type: "STORY 23",
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
    type: "STORY 24",
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
    type: "STORY 25",
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
    type: "STORY 26",
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
    type: "STORY 27",
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
      image: "./assets/obs-neptune-prediction.png",
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
    reward: {
      id: "mizar-double-star-scroll",
      title: "二重星",
      message: "ミザールを観測してゲットしました。",
      image: "./assets/scroll-optical-double.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: [
        "点に見える星を分ける"
      ]
    },
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
    reward: {
      id: "algol-eclipse-scroll",
      title: "食変光星",
      message: "アルゴルを観測してゲットしました。",
      image: "./assets/scroll-eclipsing-binary.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: [
        "食で光度が下がる"
      ]
    },
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
      title: "年周視差",
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
      title: "星色と大光度",
      message: "リゲルを観測してゲットしました。",
      image: "./assets/scroll-blue-star-temp.png",
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
  },
  arcturus: {
    kingdomId: "spring",
    battleBg: "spring",
    type: "STORY 10",
    name: "橙の巨星アルクトゥルス",
    subtitle: "春の大曲線に灯る巨星",
    lead: "うしかい座で輝く橙色巨星。色から温度と進化を読む春の試練。",
    mechanic: "giantColor",
    clearAt: 4,
    portrait: "./assets/arcturus-enemy-normal.png",
    enemy: {
      normal: "./assets/arcturus-enemy-normal.png",
      giant: "./assets/arcturus-enemy-giant.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "橙色巨星" },
        { icon: "⌁", label: "星座", value: "うしかい座" },
        { icon: "☉", label: "温度", value: "約4300K" }
      ],
      meter: { normal: 70, giant: 90 }
    },
    rule: "能力：春の大曲線を黄金の弧で隠し、色と温度の関係を試す。",
    clearRule: "攻略法：橙色は青白い星より低温で、巨星へ進化した姿だと読む。",
    reward: {
      id: "arcturus-giant-scroll",
      title: "橙色巨星",
      message: "アルクトゥルスを観測してゲットしました。",
      image: "./assets/scroll-giant-star-expansion.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: ["橙色巨星は低温"]
    },
    lines: [
      { speaker: "橙の巨星アルクトゥルス", text: "春の大曲線をたどれば、私は橙色に輝いて待っている。", pattern: "normal" },
      { speaker: "橙の巨星アルクトゥルス", text: "青白い星より私は冷たい。だが大きくふくらんだ巨星だから、春の空で強く目立つ。", pattern: "giant" },
      { speaker: "橙の巨星アルクトゥルス", text: "色は温度の合図。橙色の光は、星が進化して外層を広げた姿を語る。", pattern: "giant" },
      { speaker: "橙の巨星アルクトゥルス", text: "星の色を読めば、星座の点は温度と進化を持つ天体へ変わる。", pattern: "normal" }
    ]
  },
  spica: {
    kingdomId: "spring",
    battleBg: "spring",
    type: "STORY 11",
    name: "青麦の双星スピカ",
    subtitle: "分光で見破る熱い連星",
    lead: "おとめ座の青白い一等星。高温の光と、分光で分かる連星性を読む。",
    mechanic: "spectroscopicBinary",
    clearAt: 4,
    portrait: "./assets/spica-enemy-normal.png",
    enemy: {
      normal: "./assets/spica-enemy-normal.png",
      spectrum: "./assets/spica-enemy-spectrum.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "青白い連星" },
        { icon: "⌁", label: "星座", value: "おとめ座" },
        { icon: "◎", label: "観測", value: "スペクトル" }
      ],
      meter: { normal: 72, spectrum: 92 }
    },
    rule: "能力：一つの青い麦穂に見せかけ、スペクトル線だけを揺らす。",
    clearRule: "攻略法：青白い色は高温、スペクトル線の変化は近接連星の手がかりだと読む。",
    reward: {
      id: "spica-spectrum-scroll",
      title: "分光連星",
      message: "スピカを観測してゲットしました。",
      image: "./assets/scroll-spectral-binary.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: ["スペクトルで連星"]
    },
    lines: [
      { speaker: "青麦の双星スピカ", text: "私は春の大曲線の先、おとめ座の麦穂に青白く光る。", pattern: "normal" },
      { speaker: "青麦の双星スピカ", text: "青白い星は高温。だが私の秘密は色だけではない。", pattern: "normal" },
      { speaker: "青麦の双星スピカ", text: "スペクトル線が周期的に揺れる。近い相棒と回るため、光の線がわずかにずれるのだ。", pattern: "spectrum" },
      { speaker: "青麦の双星スピカ", text: "望遠鏡で分けられない連星も、分光で見破れる。光を細かく分けて読め。", pattern: "spectrum" }
    ]
  },
  vega: {
    kingdomId: "summer",
    battleBg: "summer",
    type: "STORY 12",
    name: "基準星ベガ",
    subtitle: "",
    lead: "こと座で青白く輝く基準星。見かけの明るさを基準に、距離を入れて絶対等級へ進む。",
    mechanic: "magnitudeStandard",
    clearAt: 4,
    portrait: "./assets/vega-enemy-normal.png",
    enemy: {
      normal: "./assets/vega-enemy-normal.png",
      standard: "./assets/vega-enemy-standard.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "A0V標準星" },
        { icon: "⌁", label: "星座", value: "こと座" },
        { icon: "◎", label: "等級", value: "約0等" }
      ],
      meter: { normal: 74, standard: 96 }
    },
    rule: "能力：見かけの明るさの基準を掲げ、距離を考えない観測者を惑わせる。",
    clearRule: "攻略法：見かけの等級に距離補正を入れると、星本来の明るさである絶対等級が分かる。",
    reward: {
      id: "vega-absolute-magnitude-scroll",
      title: "絶対等級",
      message: "ベガを観測してゲットしました。",
      image: "./assets/scroll-absolute-magnitude.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: ["距離で明るさ補正"]
    },
    lines: [
      { speaker: "基準星ベガ", text: "私は夏の夜、こと座で青白く輝くベガ。明るさを測る物差しとして呼ばれてきた。", pattern: "normal" },
      { speaker: "基準星ベガ", text: "見かけの等級だけでは、星本来の強さは分からない。近い星は強く、遠い星は弱く見える。", pattern: "standard" },
      { speaker: "基準星ベガ", text: "距離を入れて補正せよ。10パーセクに置いた明るさ、それが絶対等級だ。", pattern: "standard" },
      { speaker: "基準星ベガ", text: "基準を持てば、星座の明るさはただの印象ではなく、比べられる数になる。", pattern: "normal" }
    ]
  },
  deneb: {
    kingdomId: "summer",
    battleBg: "summer",
    type: "STORY 13",
    name: "遠光の尾デネブ",
    subtitle: "遠くても輝く大光度星",
    lead: "白鳥の尾で輝く青白い超巨星。見かけの明るさと本当の明るさを分ける。",
    mechanic: "absoluteMagnitude",
    clearAt: 4,
    portrait: "./assets/deneb-enemy-normal.png",
    enemy: {
      normal: "./assets/deneb-enemy-normal.png",
      luminosity: "./assets/deneb-enemy-luminosity.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "青白い超巨星" },
        { icon: "⌁", label: "距離", value: "約2600 ly" },
        { icon: "☉", label: "特徴", value: "大光度" }
      ],
      meter: { normal: 76, luminosity: 96 }
    },
    rule: "能力：遠さを光の強さで隠し、近い星のように見せる。",
    clearRule: "攻略法：見かけの明るさだけでなく距離を考え、デネブが本当に明るい星だと読む。",
    reward: {
      id: "deneb-luminosity-scroll",
      title: "大光度星",
      message: "デネブを観測してゲットしました。",
      image: "./assets/scroll-absolute-magnitude-distance.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: ["距離込みで明るさ"]
    },
    lines: [
      { speaker: "遠光の尾デネブ", text: "天の川の白鳥の尾に、私は青白く輝く。", pattern: "normal" },
      { speaker: "遠光の尾デネブ", text: "近いから明るいのではない。遠く離れてなお見えるほど、私は本当に強く輝く。", pattern: "luminosity" },
      { speaker: "遠光の尾デネブ", text: "見かけの等級と絶対等級を分けよ。距離を入れて初めて星の力が分かる。", pattern: "luminosity" },
      { speaker: "遠光の尾デネブ", text: "星座の点の奥には、近い星と遠い超巨星が同じ地図に重なっている。", pattern: "normal" }
    ]
  },
  albireo: {
    kingdomId: "summer",
    battleBg: "summer",
    type: "STORY 14",
    name: "双彩のくちばしアルビレオ",
    subtitle: "色の対比で温度を読む",
    lead: "白鳥のくちばしで青と橙が並ぶ美しい二重星。星の色と温度を読む。",
    mechanic: "colorContrast",
    clearAt: 4,
    portrait: "./assets/albireo-enemy-normal.png",
    enemy: {
      normal: "./assets/albireo-enemy-normal.png",
      color: "./assets/albireo-enemy-color.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "二重星" },
        { icon: "◎", label: "色", value: "青と橙" },
        { icon: "☉", label: "観測", value: "色温度" }
      ],
      meter: { normal: 66, color: 90 }
    },
    rule: "能力：青と橙の光を混ぜ、温度の違いをぼかす。",
    clearRule: "攻略法：青い星は高温、橙の星は低温という色の対比を読む。",
    reward: {
      id: "albireo-color-scroll",
      title: "色指数",
      message: "アルビレオを観測してゲットしました。",
      image: "./assets/scroll-color-index.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: ["色は温度の手がかり"]
    },
    lines: [
      { speaker: "双彩のくちばしアルビレオ", text: "白鳥のくちばしを見よ。私は一つではなく、色の違う二つの輝きだ。", pattern: "normal" },
      { speaker: "双彩のくちばしアルビレオ", text: "青は熱く、橙は冷たい。並べて見ると、星の温度差が目で分かる。", pattern: "color" },
      { speaker: "双彩のくちばしアルビレオ", text: "色指数は星の色を数で表す道具。温度を読むための観測事実になる。", pattern: "color" },
      { speaker: "双彩のくちばしアルビレオ", text: "美しさに見とれるだけでは終わらない。色は物理を語る。", pattern: "normal" }
    ]
  },
  cygni61: {
    kingdomId: "summer",
    battleBg: "summer",
    type: "STORY 15",
    name: "近星の測り手61 Cygni",
    subtitle: "最初期の年周視差測定",
    lead: "白鳥座の近い恒星。背景星に対する小さなずれから距離を測る。",
    mechanic: "parallaxHistory",
    clearAt: 4,
    portrait: "./assets/cygni61-enemy-normal.png",
    enemy: {
      normal: "./assets/cygni61-enemy-normal.png",
      parallax: "./assets/cygni61-enemy-parallax.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "近傍恒星" },
        { icon: "⌁", label: "距離", value: "約11.4 ly" },
        { icon: "◎", label: "観測", value: "年周視差" }
      ],
      meter: { normal: 68, parallax: 92 }
    },
    rule: "能力：小さなずれを星空のざわめきに隠す。",
    clearRule: "攻略法：半年ごとの位置差を測り、近い星ほど視差が大きいと読む。",
    reward: {
      id: "cygnus-parallax-scroll",
      title: "年周視差",
      message: "61 Cygniを観測してゲットしました。",
      image: "./assets/reward-scroll-cygnus-parallax.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: ["距離は視差の逆数"]
    },
    lines: [
      { speaker: "近星の測り手61 Cygni", text: "私は白鳥座に潜む近い恒星。派手ではないが、距離測定の歴史に名を残した。", pattern: "normal" },
      { speaker: "近星の測り手61 Cygni", text: "地球が公転すると、近い星は遠い背景星に対してわずかにずれる。", pattern: "parallax" },
      { speaker: "近星の測り手61 Cygni", text: "その角度が年周視差。小さな角度を測れば、星までの距離がほどける。", pattern: "parallax" },
      { speaker: "近星の測り手61 Cygni", text: "星座の絵の奥に、本当の距離の層を重ねて見よ。", pattern: "normal" }
    ]
  },
  mira: {
    kingdomId: "autumn",
    battleBg: "autumn",
    type: "STORY 16",
    name: "脈打つ心臓ミラ",
    subtitle: "星そのものが膨らみ縮む",
    lead: "くじら座の長周期変光星。星の脈動で明るさが大きく変わる。",
    mechanic: "pulsatingVariable",
    clearAt: 4,
    portrait: "./assets/mira-enemy-normal.png",
    enemy: {
      normal: "./assets/mira-enemy-normal.png",
      pulse: "./assets/mira-enemy-pulse.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "脈動変光星" },
        { icon: "⌁", label: "周期", value: "約332日" },
        { icon: "☉", label: "星座", value: "くじら座" }
      ],
      meter: { normal: 48, pulse: 93 }
    },
    rule: "能力：海獣の心臓のように膨張収縮し、明るさを大きく変える。",
    clearRule: "攻略法：星そのものの脈動で光度が周期的に変わると読む。",
    reward: {
      id: "mira-pulsation-scroll",
      title: "脈動変光星",
      message: "ミラを観測してゲットしました。",
      image: "./assets/scroll-pulsating-star.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: ["星が脈動して変光"]
    },
    lines: [
      { speaker: "脈打つ心臓ミラ", text: "私はくじら座の心臓。夜空で消えたように暗くなり、また戻ってくる。", pattern: "normal" },
      { speaker: "脈打つ心臓ミラ", text: "伴星が隠すのではない。私自身が膨らみ縮み、表面の明るさを変える。", pattern: "pulse" },
      { speaker: "脈打つ心臓ミラ", text: "約332日の長い周期で脈打つ光。変光星には、食だけでなく脈動もある。", pattern: "pulse" },
      { speaker: "脈打つ心臓ミラ", text: "光度曲線を追えば、海獣の心臓が刻む時間が見えてくる。", pattern: "normal" }
    ]
  },
  m31: {
    kingdomId: "autumn",
    battleBg: "autumn",
    type: "STORY 17",
    name: "渦巻く隣国M31",
    subtitle: "星座の奥にある銀河",
    lead: "アンドロメダ座方向に見える大銀河。星座の入口の奥に宇宙の階層を見る。",
    mechanic: "galaxyDepth",
    clearAt: 4,
    portrait: "./assets/m31-enemy-normal.png",
    enemy: {
      normal: "./assets/m31-enemy-normal.png",
      depth: "./assets/m31-enemy-depth.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "渦巻銀河" },
        { icon: "⌁", label: "距離", value: "約254万 ly" },
        { icon: "◎", label: "方向", value: "アンドロメダ座" }
      ],
      meter: { normal: 82, depth: 98 }
    },
    rule: "能力：星座の絵の奥に巨大な銀河を隠す。",
    clearRule: "攻略法：アンドロメダ座は入口で、その方向の奥にM31銀河があると読む。",
    reward: {
      id: "galaxy-distance-scroll",
      title: "M31銀河距離",
      message: "M31を観測してゲットしました。",
      image: "./assets/scroll-m31-galaxy.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: ["星座の奥に銀河"]
    },
    lines: [
      { speaker: "渦巻く隣国M31", text: "アンドロメダ座の線をたどった先に、私は淡い雲のように浮かぶ。", pattern: "normal" },
      { speaker: "渦巻く隣国M31", text: "だが私は星雲ではない。無数の恒星を抱く、天の川の隣の大銀河だ。", pattern: "depth" },
      { speaker: "渦巻く隣国M31", text: "星座は見かけの地図。方向の奥には、恒星よりはるか遠い銀河の階層がある。", pattern: "depth" },
      { speaker: "渦巻く隣国M31", text: "入口の星座から、宇宙の奥行きへ進め。", pattern: "normal" }
    ]
  },
  betelgeuse: {
    kingdomId: "winter",
    battleBg: "winter",
    type: "STORY 18",
    name: "赤肩の超巨星ベテルギウス",
    subtitle: "赤色超巨星と恒星進化",
    lead: "オリオンの肩で赤く輝く超巨星。低温で巨大な進化した星を読む。",
    mechanic: "redSupergiant",
    clearAt: 4,
    portrait: "./assets/betelgeuse-enemy-normal.png",
    enemy: {
      normal: "./assets/betelgeuse-enemy-normal.png",
      evolution: "./assets/betelgeuse-enemy-evolution.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "赤色超巨星" },
        { icon: "☉", label: "温度", value: "約3500K" },
        { icon: "⌁", label: "進化", value: "晩期段階" }
      ],
      meter: { normal: 74, evolution: 96 }
    },
    rule: "能力：赤い外層を広げ、温度と大きさの直感を逆転させる。",
    clearRule: "攻略法：赤い色は低温、しかし半径が大きい赤色超巨星だと読む。",
    reward: {
      id: "betelgeuse-redgiant-scroll",
      title: "赤色超巨星",
      message: "ベテルギウスを観測してゲットしました。",
      image: "./assets/scroll-red-supergiant.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: ["赤い超巨星は低温巨大"]
    },
    lines: [
      { speaker: "赤肩の超巨星ベテルギウス", text: "オリオンの肩を見よ。私は赤く、ゆっくりと光を変える巨大な星だ。", pattern: "normal" },
      { speaker: "赤肩の超巨星ベテルギウス", text: "赤は高温ではない。青白いリゲルより表面は低温だ。", pattern: "evolution" },
      { speaker: "赤肩の超巨星ベテルギウス", text: "それでも明るいのは、外層が大きく広がった超巨星だからだ。", pattern: "evolution" },
      { speaker: "赤肩の超巨星ベテルギウス", text: "色、温度、半径、進化段階。冬のオリオンは恒星進化の教室になる。", pattern: "normal" }
    ]
  },
  sirius: {
    kingdomId: "winter",
    battleBg: "winter",
    type: "STORY 19",
    name: "白犬王シリウス",
    subtitle: "近いから明るい一等星",
    lead: "おおいぬ座で最も明るく見える恒星。距離と見かけの明るさを読む。",
    mechanic: "apparentBrightness",
    clearAt: 4,
    portrait: "./assets/sirius-enemy-normal.png",
    enemy: {
      normal: "./assets/sirius-enemy-normal.png",
      near: "./assets/sirius-enemy-near.png"
    },
    status: {
      rows: [
        { icon: "✦", label: "種類", value: "白い主系列星" },
        { icon: "⌁", label: "距離", value: "約8.6 ly" },
        { icon: "◎", label: "伴星", value: "白色矮星" }
      ],
      meter: { normal: 84, near: 97 }
    },
    rule: "能力：圧倒的な見かけの明るさで、本当の光度と距離を混同させる。",
    clearRule: "攻略法：シリウスは近いため非常に明るく見えると読み、見かけと絶対光度を分ける。",
    reward: {
      id: "sirius-brightness-scroll",
      title: "見かけの明るさ",
      message: "シリウスを観測してゲットしました。",
      image: "./assets/scroll-apparent-brightness.png",
      tier: "major",
      knowledgeTitle: "",
      knowledge: ["明るさは距離も効く"]
    },
    lines: [
      { speaker: "白犬王シリウス", text: "私は冬の空で最もまばゆく見える白犬王。だが強さの理由を見誤るな。", pattern: "normal" },
      { speaker: "白犬王シリウス", text: "私はとても近い。距離が近いほど、同じ光でも強く届く。", pattern: "near" },
      { speaker: "白犬王シリウス", text: "そばには白色矮星の伴星もいる。明るい点の奥にも、進化した小さな星が隠れる。", pattern: "near" },
      { speaker: "白犬王シリウス", text: "見かけの明るさだけで判断するな。距離と本当の明るさを分けて読め。", pattern: "normal" }
    ]
  }
};

function makeCosmicStory({
  kingdomId = "deep",
  battleBg = "planetarium",
  type,
  name,
  lead,
  normal,
  phenomenon,
  pattern,
  statusRows,
  reward,
  lines
}) {
  return {
    kingdomId,
    battleBg,
    type,
    name,
    subtitle: "",
    lead,
    mechanic: pattern,
    clearAt: lines.length,
    portrait: normal,
    enemy: {
      normal,
      [pattern]: phenomenon
    },
    status: {
      rows: statusRows,
      meter: {
        normal: 72,
        [pattern]: 94
      }
    },
    rule: `能力：${lead}`,
    clearRule: reward.lesson,
    reward: {
      id: reward.id,
      title: reward.title,
      message: `${name}を観測してゲットしました。`,
      image: reward.image,
      tier: reward.tier ?? "major",
      knowledgeTitle: "",
      knowledge: [reward.lesson]
    },
    lines: lines.map((text, index) => ({
      speaker: name,
      text,
      pattern: index % 2 === 0 ? "normal" : pattern
    }))
  };
}

const ADDITIONAL_STORIES = {
  m31Cepheid: makeCosmicStory({
    type: "STORY 29",
    name: "M31セファイドの灯",
    lead: "変光周期から距離を読み、アンドロメダが天の川の外にあることを示す。",
    normal: "./assets/cosmic-enemy-m31-cepheid-normal.png",
    phenomenon: "./assets/cosmic-enemy-m31-cepheid-phenomenon.png",
    pattern: "cepheid",
    statusRows: [
      { icon: "✦", label: "対象", value: "M31内の変光星" },
      { icon: "⌁", label: "距離", value: "銀河の外" },
      { icon: "◎", label: "鍵", value: "周期光度関係" }
    ],
    reward: {
      id: "m31-cepheid-scroll",
      title: "M31セファイド",
      image: "./assets/scroll-m31-cepheid.png",
      lesson: "周期で銀河距離"
    },
    lines: [
      "私はアンドロメダ銀河の中で脈打つ小さな灯。",
      "変光の周期を読めば、本当の明るさが分かる。",
      "見かけの暗さと比べることで、M31が天の川の外にあると分かった。"
    ]
  }),
  virgoDarkMatter: makeCosmicStory({
    type: "STORY 30",
    name: "銀河団の見えない重り",
    lead: "銀河団の運動から、見える物質だけでは足りない重力を読む。",
    normal: "./assets/cosmic-enemy-virgo-darkmatter-normal.png",
    phenomenon: "./assets/cosmic-enemy-virgo-darkmatter-phenomenon.png",
    pattern: "cluster",
    statusRows: [
      { icon: "✦", label: "対象", value: "銀河団" },
      { icon: "▲", label: "質量", value: "見えない成分" },
      { icon: "◎", label: "意味", value: "暗黒物質" }
    ],
    reward: {
      id: "dark-matter-scroll",
      title: "暗黒物質",
      image: "./assets/scroll-dark-matter.png",
      lesson: "見えない質量がある"
    },
    lines: [
      "銀河団では、銀河たちが重力に束ねられている。",
      "見える星や銀河だけでは、その速さを説明できない。",
      "不足する重力の手がかりが、暗黒物質の存在を示した。"
    ]
  }),
  quasarBeacon: makeCosmicStory({
    type: "STORY 31",
    name: "遠方灯台クエーサー",
    lead: "遠方活動銀河核の強烈な光から、巨大ブラックホール活動を読む。",
    normal: "./assets/cosmic-enemy-quasar-normal.png",
    phenomenon: "./assets/cosmic-enemy-quasar-phenomenon.png",
    pattern: "jet",
    statusRows: [
      { icon: "✦", label: "対象", value: "活動銀河核" },
      { icon: "⌁", label: "距離", value: "非常に遠方" },
      { icon: "◎", label: "源", value: "巨大BH" }
    ],
    reward: {
      id: "quasar-scroll",
      title: "クエーサー",
      image: "./assets/scroll-quasar.png",
      lesson: "遠方AGNは明るい"
    },
    lines: [
      "私は星のように見えて、正体は遠方銀河の中心。",
      "巨大ブラックホールへ落ち込む物質が、強烈な光を放つ。",
      "クエーサーは遠い宇宙を照らす灯台だ。"
    ]
  }),
  cmbEcho: makeCosmicStory({
    type: "STORY 32",
    name: "宇宙背景の残響",
    lead: "宇宙全体に残る冷たい放射から、ビッグバン宇宙論を読む。",
    normal: "./assets/cosmic-enemy-cmb-normal.png",
    phenomenon: "./assets/cosmic-enemy-cmb-phenomenon.png",
    pattern: "echo",
    statusRows: [
      { icon: "✦", label: "対象", value: "宇宙全体" },
      { icon: "⌁", label: "温度", value: "約2.7K" },
      { icon: "◎", label: "意味", value: "ビッグバン証拠" }
    ],
    reward: {
      id: "cmb-scroll",
      title: "宇宙背景放射",
      image: "./assets/scroll-cmb.png",
      lesson: "宇宙に熱の残響"
    },
    lines: [
      "どの方向を見ても、宇宙には微かな冷たい光が残る。",
      "それは初期宇宙が熱かった時代の残響だ。",
      "宇宙マイクロ波背景放射は、ビッグバン宇宙論の強い証拠になった。"
    ]
  }),
  pulsarBeacon: makeCosmicStory({
    type: "STORY 33",
    name: "脈打つ中性子星",
    lead: "規則正しい電波パルスから、超新星後に残る中性子星を読む。",
    normal: "./assets/cosmic-enemy-pulsar-normal.png",
    phenomenon: "./assets/cosmic-enemy-pulsar-phenomenon.png",
    pattern: "pulse",
    statusRows: [
      { icon: "✦", label: "対象", value: "中性子星" },
      { icon: "◎", label: "発見", value: "1967年" },
      { icon: "⌁", label: "信号", value: "パルス" }
    ],
    reward: {
      id: "pulsar-scroll",
      title: "パルサー",
      image: "./assets/scroll-pulsar.png",
      lesson: "中性子星が脈打つ"
    },
    lines: [
      "私は超新星のあとに残る、極端に密な星。",
      "回転するビームが地球をかすめるたび、規則正しいパルスが届く。",
      "パルサーの発見は、恒星進化の極限を開いた。"
    ]
  }),
  cygnusX1: makeCosmicStory({
    type: "STORY 34",
    name: "白鳥座X-1の影",
    lead: "X線連星の見えない伴星から、ブラックホール候補を読む。",
    normal: "./assets/cosmic-enemy-xray-blackhole-normal.png",
    phenomenon: "./assets/cosmic-enemy-xray-blackhole-phenomenon.png",
    pattern: "xray",
    statusRows: [
      { icon: "✦", label: "対象", value: "X線連星" },
      { icon: "▲", label: "伴星", value: "見えない重力源" },
      { icon: "◎", label: "意味", value: "BH候補" }
    ],
    reward: {
      id: "xray-blackhole-scroll",
      title: "X線連星BH",
      image: "./assets/scroll-xray-binary.png",
      lesson: "見えないBHを推定"
    },
    lines: [
      "白鳥座の方向から強いX線が届く。",
      "見える星のそばには、重く見えない伴星がいる。",
      "X線連星は、ブラックホールを間接的に見つける道を開いた。"
    ]
  }),
  sn1987a: makeCosmicStory({
    type: "STORY 35",
    name: "大マゼラン雲の超新星",
    lead: "近傍銀河の超新星から、恒星進化とニュートリノを読む。",
    normal: "./assets/cosmic-enemy-sn1987a-normal.png",
    phenomenon: "./assets/cosmic-enemy-sn1987a-phenomenon.png",
    pattern: "burst",
    statusRows: [
      { icon: "✦", label: "対象", value: "超新星1987A" },
      { icon: "⌁", label: "場所", value: "大マゼラン雲" },
      { icon: "◎", label: "意味", value: "ニュートリノ" }
    ],
    reward: {
      id: "sn1987a-scroll",
      title: "SN1987A",
      image: "./assets/scroll-sn1987a.png",
      lesson: "超新星で元素が散る"
    },
    lines: [
      "近くの銀河で、大質量星が最期の爆発を起こした。",
      "光だけでなくニュートリノも届き、星の内部崩壊を直接示した。",
      "超新星は恒星進化と元素合成を結ぶ巨大な合図だ。"
    ]
  }),
  m87Shadow: makeCosmicStory({
    type: "STORY 36",
    name: "M87黒影の門",
    lead: "遠方銀河中心のブラックホールシャドウを画像として読む。",
    normal: "./assets/cosmic-enemy-m87-blackhole-normal.png",
    phenomenon: "./assets/cosmic-enemy-m87-blackhole-phenomenon.png",
    pattern: "shadow",
    statusRows: [
      { icon: "✦", label: "対象", value: "M87中心" },
      { icon: "◎", label: "観測", value: "EHT画像" },
      { icon: "▲", label: "意味", value: "BH影" }
    ],
    reward: {
      id: "m87-blackhole-scroll",
      title: "M87ブラックホール",
      image: "./assets/scroll-m87-blackhole.png",
      lesson: "BH影を直接画像化"
    },
    lines: [
      "M87銀河の中心には、巨大な重力の影がある。",
      "世界中の望遠鏡をつなぎ、地球サイズの目でその輪郭を描いた。",
      "ブラックホールシャドウは、見えない天体を画像で確かめる時代を開いた。"
    ]
  }),
  gravityWaveGate: makeCosmicStory({
    type: "STORY 37",
    name: "重力波の双黒門",
    lead: "ブラックホール連星の合体から、光以外で宇宙を見る方法を読む。",
    normal: "./assets/cosmic-enemy-gravity-waves-normal.png",
    phenomenon: "./assets/cosmic-enemy-gravity-waves-phenomenon.png",
    pattern: "wave",
    statusRows: [
      { icon: "✦", label: "対象", value: "BH連星" },
      { icon: "◎", label: "発見", value: "2015年" },
      { icon: "⌁", label: "意味", value: "重力波天文学" }
    ],
    reward: {
      id: "gravitational-waves-scroll",
      title: "重力波",
      image: "./assets/scroll-gravitational-waves.png",
      lesson: "時空の波を観測"
    },
    lines: [
      "二つのブラックホールが合体すると、時空そのものが波打つ。",
      "その波は光ではない。重力波として地球の検出器に届いた。",
      "重力波は、宇宙を見る新しい感覚を開いた。"
    ]
  }),
  darkEnergySupernova: makeCosmicStory({
    type: "STORY 38",
    name: "遠方超新星の暗き力",
    lead: "Ia型超新星の距離と暗さから、宇宙の加速膨張を読む。",
    normal: "./assets/cosmic-enemy-dark-energy-normal.png",
    phenomenon: "./assets/cosmic-enemy-dark-energy-phenomenon.png",
    pattern: "accelerate",
    statusRows: [
      { icon: "✦", label: "対象", value: "遠方Ia型超新星" },
      { icon: "⌁", label: "現象", value: "加速膨張" },
      { icon: "◎", label: "意味", value: "暗黒エネルギー" }
    ],
    reward: {
      id: "accelerating-expansion-scroll",
      title: "宇宙加速膨張",
      image: "./assets/scroll-dark-energy.png",
      lesson: "遠方SNで加速膨張"
    },
    lines: [
      "Ia型超新星は、遠方宇宙の距離を測る標準光源になる。",
      "遠方の超新星は、予想より暗く見えた。",
      "そこから宇宙の膨張が加速していることが示された。"
    ]
  })
};

Object.assign(STORIES, PLANET_STORIES, ADDITIONAL_STORIES);

Object.assign(STORIES.cygni61, {
  extraRewardIds: ["proper-motion-scroll", "aberration-scroll"]
});
Object.assign(STORIES.spica, {
  extraRewardIds: ["telescope-observation-scroll"]
});
Object.assign(STORIES.rigel, {
  extraRewardIds: ["hr-diagram-scroll"]
});
Object.assign(STORIES.sirius, {
  extraRewardIds: ["white-dwarf-scroll"]
});
Object.assign(STORIES.betelgeuse, {
  extraRewardIds: ["nucleosynthesis-scroll"]
});
Object.assign(STORIES.sunReference, {
  extraRewardIds: ["helium-solar-spectrum-scroll", "stellar-fusion-scroll"]
});

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
  focusedQuestId: null,
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

HOME_KINGDOM_DETAILS.deep = {
  icon: "✧",
  card: "./assets/deep-cosmos-gate-map.png",
  title: "銀河深淵域",
  description: "天の川の外へ進み、銀河団、クエーサー、宇宙背景放射を読む。",
  action: "外宇宙ゲートへ進む",
  enterId: "deep"
};

const ORB_CLASSES = ["sirius", "rigel", "betelgeuse"];
const OBJECT_ORB_CLASSES = {
  mizar: "sirius",
  arcturus: "arcturus",
  spica: "spica",
  vega: "vega",
  deneb: "deneb",
  albireo: "albireo",
  cygni61: "arcturus",
  algol: "sirius",
  mira: "mira",
  m31: "galaxy",
  rigel: "rigel",
  betelgeuse: "betelgeuse",
  sirius: "sirius"
};

Object.assign(OBJECT_ORB_CLASSES, {
  m31Cepheid: "galaxy",
  virgoCluster: "galaxy",
  quasar: "galaxy",
  cmb: "galaxy",
  pulsar: "galaxy",
  cygnusX1: "galaxy",
  sn1987a: "betelgeuse",
  m87Shadow: "galaxy",
  gravityWaves: "galaxy",
  darkEnergy: "galaxy"
});

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
  arcturus: {
    lesson: "橙色巨星の色と温度を読む",
    description: "春の大曲線で見つかる明るい巨星。"
  },
  spica: {
    lesson: "青白い星は高温のしるし",
    description: "おとめ座で輝く春の一等星。"
  },
  cygnus: {
    lesson: "背景星とのずれで距離を測る",
    description: "天の川に浮かぶ白鳥座の年周視差。"
  },
  deneb: {
    lesson: "遠い星でも大光度なら明るい",
    description: "白鳥の尾に輝く遠方の一等星。"
  },
  vega: {
    lesson: "基準星から絶対等級へ進む",
    description: "見かけの明るさに距離補正を入れる。"
  },
  albireo: {
    lesson: "星の色は温度の手がかり",
    description: "青と橙の対比で表面温度を読む。"
  },
  cygni61: {
    lesson: "近い恒星は視差が測りやすい",
    description: "年周視差測定で重要な近い恒星。"
  },
  algol: {
    lesson: "周期的な暗化は食で起こる",
    description: "伴星が主星を隠す食変光星。"
  },
  mira: {
    lesson: "脈動で明るさが変わる",
    description: "くじら座で長周期に明滅する変光星。"
  },
  m31: {
    lesson: "星座の奥に銀河がある",
    description: "アンドロメダ座方向の隣の大銀河。"
  },
  rigel: {
    lesson: "青白い星ほど高温",
    description: "オリオン座の足で輝く青白い巨星。"
  },
  betelgeuse: {
    lesson: "赤い星は表面温度が低い",
    description: "赤色超巨星として進化を読む。"
  },
  sirius: {
    lesson: "見かけの明るさは距離も効く",
    description: "近いため非常に明るい白い一等星。"
  },
  mercury: {
    lesson: "内惑星は太陽から離れにくい",
    description: "最大離角のころ夕方や明け方に探す。"
  },
  venus: {
    lesson: "内惑星は満ち欠けする",
    description: "太陽との位置で照らされた面が変わる。"
  },
  sun: {
    lesson: "太陽は恒星比較の基準",
    description: "光度と質量を太陽単位で比べる。"
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
  },
  uranus: {
    lesson: "天王星は大きく傾いて回る",
    description: "望遠鏡で惑星と分かり横倒し自転を読む。"
  }
};

Object.assign(OBSERVE_COPY, {
  m31Cepheid: {
    lesson: "周期で銀河距離を測る",
    description: "M31内の変光星が外銀河距離を示す。"
  },
  virgoCluster: {
    lesson: "見えない質量を運動から読む",
    description: "銀河団の速さが暗黒物質を示す。"
  },
  quasar: {
    lesson: "遠方活動銀河核は非常に明るい",
    description: "巨大ブラックホール活動を光で読む。"
  },
  cmb: {
    lesson: "宇宙に熱い始まりの残響",
    description: "CMBはビッグバン宇宙論の証拠。"
  },
  pulsar: {
    lesson: "中性子星はパルスを出す",
    description: "回転するビームが周期信号になる。"
  },
  cygnusX1: {
    lesson: "X線連星で見えないBHを推定",
    description: "重い不可視伴星を間接観測する。"
  },
  sn1987a: {
    lesson: "超新星で恒星最期を読む",
    description: "近傍銀河の爆発が進化を示す。"
  },
  m87Shadow: {
    lesson: "ブラックホール影を画像化",
    description: "M87中心の影をEHTで直接観測。"
  },
  gravityWaves: {
    lesson: "時空の波で宇宙を見る",
    description: "BH連星合体の重力波を検出。"
  },
  darkEnergy: {
    lesson: "遠方超新星で加速膨張を読む",
    description: "Ia型超新星が暗黒エネルギーを示す。"
  }
});

const LIBRARY_SCROLLS = [
  {
    id: "rigel-color-luminosity-scroll",
    title: "星色と大光度",
    period: "冬の王国",
    image: "./assets/scroll-blue-star-temp.png",
    tier: "major",
    lesson: "青白い星ほど高温",
    description: "リゲルは青白く高温で、遠くにあっても強く輝く大光度星。星の色は表面温度を読む手がかりになる。"
  },
  {
    id: "cygnus-parallax-scroll",
    title: "年周視差",
    period: "夏の王国",
    image: "./assets/reward-scroll-cygnus-parallax.png",
    tier: "major",
    lesson: "距離は視差の逆数",
    description: "半年後の見かけのずれを年周視差という。視差 p を秒角で測れば、距離 d はパーセクで 1 / p になる。"
  },
  {
    id: "arcturus-giant-scroll",
    title: "橙色巨星",
    period: "春の王国",
    image: "./assets/scroll-giant-star-expansion.png",
    tier: "major",
    lesson: "橙色巨星は低温",
    description: "アルクトゥルスは橙色に見える巨星。青白い星より表面温度は低いが、大きくふくらんだため明るく見える。"
  },
  {
    id: "spica-spectrum-scroll",
    title: "分光連星",
    period: "春の王国",
    image: "./assets/scroll-spectral-binary.png",
    tier: "major",
    lesson: "スペクトルで連星",
    description: "近すぎて分けて見えない連星も、スペクトル線の周期的なずれから連星だと分かる。"
  },
  {
    id: "deneb-luminosity-scroll",
    title: "大光度星",
    period: "夏の王国",
    image: "./assets/scroll-absolute-magnitude-distance.png",
    tier: "major",
    lesson: "距離込みで明るさ",
    description: "デネブは非常に遠いが、本当の光度が大きいため明るく見える。見かけの明るさと絶対等級を分けて読む。"
  },
  {
    id: "vega-absolute-magnitude-scroll",
    title: "絶対等級",
    period: "夏の王国",
    image: "./assets/scroll-absolute-magnitude.png",
    tier: "major",
    lesson: "距離で明るさ補正",
    description: "ベガは等級の基準星として扱われてきた。見かけの等級に距離を入れて補正すると、星本来の明るさである絶対等級が分かる。"
  },
  {
    id: "albireo-color-scroll",
    title: "色指数",
    period: "夏の王国",
    image: "./assets/scroll-color-index.png",
    tier: "major",
    lesson: "色は温度の手がかり",
    description: "アルビレオの青と橙の対比は、星の色が表面温度を反映することを直感的に示す。"
  },
  {
    id: "mira-pulsation-scroll",
    title: "脈動変光星",
    period: "秋の王国",
    image: "./assets/scroll-pulsating-star.png",
    tier: "major",
    lesson: "星が脈動して変光",
    description: "ミラは星そのものが膨張収縮することで明るさを大きく変える長周期の脈動変光星。"
  },
  {
    id: "betelgeuse-redgiant-scroll",
    title: "赤色超巨星",
    period: "冬の王国",
    image: "./assets/scroll-red-supergiant.png",
    tier: "major",
    lesson: "赤い超巨星は低温巨大",
    description: "ベテルギウスは赤色超巨星。赤い色は低温を示すが、半径が非常に大きいため明るく輝く。"
  },
  {
    id: "sirius-brightness-scroll",
    title: "見かけの明るさ",
    period: "冬の王国",
    image: "./assets/scroll-apparent-brightness.png",
    tier: "major",
    lesson: "明るさは距離も効く",
    description: "シリウスは非常に近いため強く明るく見える。見かけの明るさは本当の光度と距離の両方で決まる。"
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
    id: "mercury-elongation-scroll",
    title: "水星の最大離角",
    period: "天球観測塔",
    image: "./assets/obs-mercury-elongation.png",
    tier: "minor",
    lesson: "内惑星は離角で探す",
    description: "水星は太陽に近い内惑星なので、太陽からの見かけの角度が最大になる最大離角のころ観測しやすい。"
  },
  {
    id: "sun-luminosity-scroll",
    title: "太陽光度",
    period: "天球観測塔",
    image: "./assets/obs-sun-reference.png",
    tier: "minor",
    lesson: "太陽は恒星の基準",
    description: "太陽の光度を 1 L☉、質量を 1 M☉ として、他の恒星の明るさや質量を比べる基準にする。"
  },
  {
    id: "uranus-tilt-scroll",
    title: "天王星の傾き",
    period: "天球観測塔",
    image: "./assets/obs-uranus-tilt.png",
    tier: "minor",
    lesson: "天王星は横倒し",
    description: "天王星は自転軸が約98度傾くため、横倒しに近い姿で太陽を巡る氷巨大惑星。"
  },
  {
    id: "neptune-calculation-scroll",
    title: "計算で見つかった惑星",
    period: "天球観測塔",
    image: "./assets/obs-neptune-prediction.png",
    tier: "minor",
    lesson: "計算で惑星発見",
    description: "海王星は天王星の軌道のずれを手がかりに、未知の惑星の位置を計算して発見された。観測と理論が結びついた例。"
  },
  {
    id: "spectrum-redshift-scroll",
    title: "スペクトル赤方偏移",
    period: "銀河の奥",
    image: "./assets/obs-redshift-spectrum.png",
    tier: "minor",
    lesson: "赤方偏移を読む",
    description: "遠ざかる天体の光は赤い側へずれる。スペクトルは、天体の運動を読む重要な観測記録になる。",
    locked: true
  },
  {
    id: "galaxy-distance-scroll",
    title: "M31銀河距離",
    period: "秋の王国",
    image: "./assets/scroll-m31-galaxy.png",
    tier: "major",
    lesson: "星座の奥に銀河",
    description: "M31はアンドロメダ座の方向にある渦巻銀河。星座は入口で、その奥には銀河という大きな構造がある。"
  },
  {
    id: "algol-eclipse-scroll",
    title: "食変光星",
    period: "秋の王国",
    image: "./assets/scroll-eclipsing-binary.png",
    tier: "major",
    lesson: "食で光度が下がる",
    description: "アルゴルの暗くなる周期は、伴星が前を通って主星の光を隠す食で説明できる。"
  },
  {
    id: "mizar-double-star-scroll",
    title: "二重星",
    period: "春の王国",
    image: "./assets/scroll-optical-double.png",
    tier: "major",
    lesson: "近くに見えても別距離",
    description: "星座の星は見かけの並び。二重星や連星を観測すると、点に見える星の奥行きがほどける。"
  }
];

LIBRARY_SCROLLS.push(
  {
    id: "geocentric-model-scroll",
    title: "天動説",
    period: "クエスト",
    image: "./assets/obs-geocentrism.png",
    tier: "minor",
    lesson: "古代宇宙観の出発点",
    description: "地球を中心に天体が回ると考えた古い宇宙像。惑星の逆行が大きな問題になった。"
  },
  {
    id: "heliocentric-theory-scroll",
    title: "地動説",
    period: "クエスト",
    image: "./assets/scroll-heliocentrism.png",
    tier: "major",
    lesson: "太陽中心へ転換",
    description: "惑星と太陽を中心に宇宙観を組み替えた発見。以後の天文学の基盤になる。"
  },
  {
    id: "telescope-observation-scroll",
    title: "望遠鏡観測",
    period: "クエスト",
    image: "./assets/scroll-telescope-revolution.png",
    tier: "major",
    lesson: "肉眼から望遠鏡へ",
    description: "月、木星、金星、恒星を望遠鏡で観測し、肉眼天文学から観測天文学へ進んだ。"
  },
  {
    id: "universal-gravity-scroll",
    title: "万有引力",
    period: "クエスト",
    image: "./assets/scroll-universal-gravitation.png",
    tier: "major",
    lesson: "天体運動を力で説明",
    description: "惑星、月、彗星の運動を一つの重力法則で説明する。連星質量の理解にもつながる。"
  },
  {
    id: "proper-motion-scroll",
    title: "固有運動",
    period: "恒星バトル",
    image: "./assets/scroll-proper-motion.png",
    tier: "major",
    lesson: "恒星も動いている",
    description: "恒星は固定背景ではなく、長い時間で固有運動を示す。天の川内の恒星運動を読む入口。"
  },
  {
    id: "aberration-scroll",
    title: "光行差",
    period: "恒星バトル",
    image: "./assets/scroll-stellar-aberration.png",
    tier: "major",
    lesson: "公転で位置がずれる",
    description: "地球公転により恒星の見かけ位置がわずかに変わる。精密位置天文学の重要発見。"
  },
  {
    id: "helium-solar-spectrum-scroll",
    title: "太陽ヘリウム",
    period: "太陽ステージ",
    image: "./assets/obs-helium-spectrum.png",
    tier: "minor",
    lesson: "太陽スペクトルで元素発見",
    description: "地上で見つかる前に、太陽スペクトルからヘリウムが発見された。"
  },
  {
    id: "cepheid-pl-scroll",
    title: "セファイド周期光度",
    period: "変光星バトル",
    image: "./assets/scroll-cepheid-distance.png",
    tier: "major",
    lesson: "周期で距離を測る",
    description: "セファイド変光星は周期から本当の明るさを推定でき、銀河距離測定の鍵になる。"
  },
  {
    id: "hr-diagram-scroll",
    title: "HR図",
    period: "恒星図鑑バトル",
    image: "./assets/scroll-hr-diagram.png",
    tier: "major",
    lesson: "色と光度で星を整理",
    description: "恒星の色、明るさ、進化段階を整理する基本図。主系列、巨星、白色矮星を見分ける。"
  },
  {
    id: "general-relativity-scroll",
    title: "一般相対論",
    period: "クエスト",
    image: "./assets/scroll-spacetime-curvature.png",
    tier: "major",
    lesson: "重力は時空の曲がり",
    description: "重力理解を更新し、ブラックホールや宇宙論へつながる理論の土台。"
  },
  {
    id: "light-bending-scroll",
    title: "光の曲がり",
    period: "日食クエスト",
    image: "./assets/scroll-light-bending.png",
    tier: "major",
    lesson: "太陽重力で光が曲がる",
    description: "太陽近くを通る恒星光が曲がる観測は、一般相対論の重要な検証になった。"
  },
  {
    id: "galaxy-nature-scroll",
    title: "銀河の正体",
    period: "外宇宙ゲート",
    image: "./assets/scroll-extragalactic.png",
    tier: "major",
    lesson: "宇宙は天の川だけでない",
    description: "天の川以外にも巨大な銀河があると分かり、宇宙の階層が広がった。"
  },
  {
    id: "m31-cepheid-scroll",
    title: "M31セファイド",
    period: "銀河深淵域",
    image: "./assets/scroll-m31-cepheid.png",
    tier: "major",
    lesson: "M31は天の川の外",
    description: "M31内のセファイド変光星により、アンドロメダ銀河が天の川の外にあると示された。"
  },
  {
    id: "hubble-law-scroll",
    title: "ハッブルの法則",
    period: "クエスト",
    image: "./assets/scroll-hubble-expansion.png",
    tier: "major",
    lesson: "遠い銀河ほど速く遠ざかる",
    description: "銀河の距離と後退速度の関係から、宇宙膨張が観測的に示された。"
  },
  {
    id: "dark-matter-scroll",
    title: "暗黒物質",
    period: "銀河深淵域",
    image: "./assets/scroll-dark-matter.png",
    tier: "major",
    lesson: "見えない質量がある",
    description: "銀河団の運動は、見える物質だけでは説明できない重力源を示す。"
  },
  {
    id: "white-dwarf-scroll",
    title: "白色矮星",
    period: "シリウスBバトル",
    image: "./assets/scroll-white-dwarf.png",
    tier: "major",
    lesson: "恒星進化の終末",
    description: "白色矮星は恒星進化の終末段階。シリウスBは代表的な白色矮星として重要。"
  },
  {
    id: "stellar-fusion-scroll",
    title: "恒星核融合",
    period: "主系列星バトル",
    image: "./assets/scroll-nuclear-fusion.png",
    tier: "major",
    lesson: "星は核融合で輝く",
    description: "恒星内部の核融合が、星が長く輝くエネルギー源を説明する。"
  },
  {
    id: "nucleosynthesis-scroll",
    title: "元素合成",
    period: "巨星・超新星バトル",
    image: "./assets/scroll-nucleosynthesis.png",
    tier: "major",
    lesson: "元素は星で作られる",
    description: "恒星と超新星で重い元素が作られ、宇宙の物質進化を説明する。"
  },
  {
    id: "quasar-scroll",
    title: "クエーサー",
    period: "銀河深淵域",
    image: "./assets/scroll-quasar.png",
    tier: "major",
    lesson: "遠方AGNは非常に明るい",
    description: "クエーサーは遠方の活動銀河核。巨大ブラックホール研究につながる。"
  },
  {
    id: "cmb-scroll",
    title: "宇宙背景放射",
    period: "銀河深淵域",
    image: "./assets/scroll-cmb.png",
    tier: "major",
    lesson: "ビッグバンの残光",
    description: "宇宙マイクロ波背景放射は、熱い初期宇宙の残光としてビッグバン宇宙論を支える。"
  },
  {
    id: "pulsar-scroll",
    title: "パルサー",
    period: "銀河深淵域",
    image: "./assets/scroll-pulsar.png",
    tier: "major",
    lesson: "中性子星が脈打つ",
    description: "規則正しいパルスは、回転する中性子星から届く信号。恒星進化の極限を示す。"
  },
  {
    id: "xray-blackhole-scroll",
    title: "X線連星BH",
    period: "銀河深淵域",
    image: "./assets/scroll-xray-binary.png",
    tier: "major",
    lesson: "見えないBHを推定",
    description: "X線連星では、見えない重い伴星を間接的に観測しブラックホール候補を調べる。"
  },
  {
    id: "sn1987a-scroll",
    title: "SN1987A",
    period: "銀河深淵域",
    image: "./assets/scroll-sn1987a.png",
    tier: "major",
    lesson: "近傍銀河の超新星",
    description: "大マゼラン雲の超新星1987Aは、恒星進化とニュートリノ観測で重要。"
  },
  {
    id: "exoplanet-pulsar-scroll",
    title: "系外惑星発見",
    period: "惑星探索",
    image: "./assets/obs-pulsar-exoplanet.png",
    tier: "minor",
    lesson: "太陽系外にも惑星",
    description: "パルサー周辺の惑星発見により、太陽系外にも惑星があることが確認された。"
  },
  {
    id: "exoplanet-main-sequence-scroll",
    title: "主系列星系外惑星",
    period: "恒星＋惑星バトル",
    image: "./assets/scroll-exoplanet-transit.png",
    tier: "major",
    lesson: "太陽型恒星にも惑星",
    description: "主系列星まわりの系外惑星発見は、惑星系が宇宙に広くあることを示した。"
  },
  {
    id: "accelerating-expansion-scroll",
    title: "宇宙加速膨張",
    period: "銀河深淵域",
    image: "./assets/scroll-dark-energy.png",
    tier: "major",
    lesson: "遠方SNで加速膨張",
    description: "遠方Ia型超新星の観測から、宇宙膨張が加速していることが示された。"
  },
  {
    id: "asteroid-exploration-scroll",
    title: "小惑星探査",
    period: "小惑星探索",
    image: "./assets/obs-asteroid-age.png",
    tier: "minor",
    lesson: "小惑星は初期物質",
    description: "小惑星探査は、太陽系形成や生命材料の手がかりを直接調べる道を開く。"
  },
  {
    id: "ryugu-sample-scroll",
    title: "リュウグウ試料",
    period: "小惑星研究所",
    image: "./assets/obs-asteroid-age.png",
    tier: "minor",
    lesson: "試料で有機物を調べる",
    description: "リュウグウ試料分析は、有機物、水、太陽系初期物質を直接調べる重要な成果。"
  },
  {
    id: "gravitational-waves-scroll",
    title: "重力波",
    period: "銀河深淵域",
    image: "./assets/scroll-gravitational-waves.png",
    tier: "major",
    lesson: "光以外で宇宙を見る",
    description: "ブラックホール連星からの重力波検出は、重力波天文学の始まりを示した。"
  },
  {
    id: "m87-blackhole-scroll",
    title: "M87ブラックホール",
    period: "銀河深淵域",
    image: "./assets/scroll-m87-blackhole.png",
    tier: "major",
    lesson: "BH影を直接画像化",
    description: "M87中心ブラックホールのシャドウ画像は、ブラックホールを直接的に検証する重要成果。"
  }
);

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
    rewardScrollId: "heliocentric-theory-scroll",
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
    rewardScrollId: "saturn-kepler3-scroll",
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
    rewardScrollId: "universal-gravity-scroll",
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
    rewardScrollId: "hubble-law-scroll",
    requiredScrolls: [
      { id: "cygnus-parallax-scroll", label: "距離測定の記録" },
      { id: "spectrum-redshift-scroll", label: "スペクトルデータ" },
      { id: "galaxy-distance-scroll", label: "遠方銀河の記録" }
    ]
  }
];

QUESTS.push(
  {
    id: "geocentric-model",
    number: 5,
    title: "天動説の星図",
    requester: "古代天球師",
    requesterImage: "./assets/quest-requester-copernicus.png",
    mainImage: "./assets/quest-main-heliocentric.png",
    objective: "古代の星図と惑星の迷いを整理する",
    conversation: "星座体系と惑星の逆行を組み合わせ、古代の宇宙観がどこで迷ったかを見つけよう。",
    requesterStats: {
      birthYear: "古代",
      fullName: "Ancient Celestial Scribes",
      achievement: "星座体系と惑星運動の記録を積み重ね、後の天文学の土台を作った。"
    },
    summary: "古代の星図と惑星の迷いを整理してほしい。",
    detail: "星座体系と惑星の逆行を組み合わせ、地球中心説がなぜ必要とされたかを読む依頼。",
    reward: "天動説の星章",
    rewardScrollId: "geocentric-model-scroll",
    requiredScrolls: [
      { id: "mars-retrograde-scroll", label: "惑星の逆行" }
    ]
  },
  {
    id: "telescope-observation",
    number: 6,
    title: "望遠鏡観測",
    requester: "ガリレオ",
    requesterImage: "./assets/quest-requester-copernicus.png",
    mainImage: "./assets/battle-bg-planetarium.png",
    objective: "肉眼では見えない証拠を集める",
    conversation: "金星の形と木星の小さな点を選び、望遠鏡が宇宙観を変えた理由を示そう。",
    requesterStats: {
      birthYear: "1564年",
      fullName: "Galileo Galilei",
      achievement: "望遠鏡を用いた観測で、地動説の根拠となる多くの証拠を発見した。"
    },
    summary: "望遠鏡で宇宙観を変える証拠を集めたい。",
    detail: "金星の満ち欠けと木星の衛星は、望遠鏡観測が肉眼の宇宙像を超えた代表例。",
    reward: "望遠鏡観測の星章",
    rewardScrollId: "telescope-observation-scroll",
    requiredScrolls: [
      { id: "venus-phases-scroll", label: "金星の満ち欠け" },
      { id: "jupiter-moons-scroll", label: "木星の衛星" }
    ]
  },
  {
    id: "general-relativity",
    number: 7,
    title: "一般相対論",
    requester: "アインシュタイン",
    requesterImage: "./assets/quest-requester-newton.png",
    mainImage: "./assets/battle-bg-planetarium.png",
    objective: "重力を時空の曲がりとして読み直す",
    conversation: "万有引力、太陽、惑星軌道の証拠を重ね、重力理解の更新へ進もう。",
    requesterStats: {
      birthYear: "1879年",
      fullName: "Albert Einstein",
      achievement: "一般相対論により、重力を時空の曲がりとして説明した。"
    },
    summary: "重力をさらに深く説明する証拠を集めたい。",
    detail: "ニュートン重力の先に、太陽近傍や水星の運動をより正確に説明する理論へ進む依頼。",
    reward: "相対論の星章",
    rewardScrollId: "general-relativity-scroll",
    requiredScrolls: [
      { id: "universal-gravity-scroll", label: "万有引力" },
      { id: "sun-luminosity-scroll", label: "太陽基準" },
      { id: "mercury-elongation-scroll", label: "水星観測" }
    ]
  },
  {
    id: "light-bending",
    number: 8,
    title: "光の曲がり",
    requester: "日食観測隊",
    requesterImage: "./assets/quest-requester-newton.png",
    mainImage: "./assets/battle-bg-planetarium.png",
    objective: "太陽近傍の恒星光のずれを読む",
    conversation: "相対論と太陽の証拠を選び、重力が光の道を曲げることを示そう。",
    requesterStats: {
      birthYear: "1919年",
      fullName: "Eclipse Expedition",
      achievement: "日食時の恒星位置測定により、太陽重力で光が曲がることを検証した。"
    },
    summary: "日食で光の曲がりを確かめたい。",
    detail: "太陽近くの恒星光が曲がる観測は、一般相対論の代表的な検証。",
    reward: "光曲がりの星章",
    rewardScrollId: "light-bending-scroll",
    requiredScrolls: [
      { id: "general-relativity-scroll", label: "一般相対論" },
      { id: "sun-luminosity-scroll", label: "太陽観測" }
    ]
  },
  {
    id: "galaxy-nature",
    number: 9,
    title: "銀河の正体",
    requester: "ハッブル",
    requesterImage: "./assets/quest-requester-hubble.png",
    mainImage: "./assets/deep-cosmos-gate-map.png",
    objective: "星雲が銀河である証拠を組み合わせる",
    conversation: "M31の奥行きとセファイド変光星を選び、天の川の外に銀河があると示そう。",
    requesterStats: {
      birthYear: "1889年",
      fullName: "Edwin Hubble",
      achievement: "M31内のセファイド変光星から、銀河が天の川の外にあることを示した。"
    },
    summary: "宇宙が天の川だけではない証拠を集めたい。",
    detail: "M31の距離とセファイド変光星を組み合わせ、銀河の正体へ進む依頼。",
    reward: "外銀河の星章",
    rewardScrollId: "galaxy-nature-scroll",
    requiredScrolls: [
      { id: "galaxy-distance-scroll", label: "M31銀河距離" },
      { id: "m31-cepheid-scroll", label: "M31セファイド" }
    ]
  },
  {
    id: "cosmology-temple",
    number: 10,
    title: "宇宙論の神殿",
    requester: "宇宙論者",
    requesterImage: "./assets/quest-requester-hubble.png",
    mainImage: "./assets/deep-cosmos-gate-map.png",
    objective: "膨張宇宙の証拠をそろえる",
    conversation: "ハッブルの法則、CMB、遠方超新星を組み合わせ、現代宇宙論の柱を作ろう。",
    requesterStats: {
      birthYear: "20世紀",
      fullName: "Modern Cosmologists",
      achievement: "銀河後退、背景放射、遠方超新星から、膨張する宇宙像を確立した。"
    },
    summary: "宇宙全体の進化を示す証拠を集めたい。",
    detail: "膨張、背景放射、加速膨張をつなぎ、現代宇宙論へ進む依頼。",
    reward: "宇宙論の星章",
    rewardScrollId: "cmb-scroll",
    requiredScrolls: [
      { id: "hubble-law-scroll", label: "ハッブルの法則" },
      { id: "cmb-scroll", label: "宇宙背景放射" },
      { id: "accelerating-expansion-scroll", label: "加速膨張" }
    ]
  },
  {
    id: "stellar-evolution",
    number: 11,
    title: "恒星進化の系譜",
    requester: "恒星図鑑師",
    requesterImage: "./assets/quest-requester-kepler.png",
    mainImage: "./assets/battle-bg-winter.png",
    objective: "星の色、進化、最期を一本につなぐ",
    conversation: "色温度、赤色超巨星、白色矮星、元素合成を組み合わせ、恒星進化を整理しよう。",
    requesterStats: {
      birthYear: "20世紀",
      fullName: "Stellar Cartographers",
      achievement: "HR図と恒星内部物理を用いて、恒星の一生を整理した。"
    },
    summary: "恒星の一生を示す証拠を集めたい。",
    detail: "色温度、HR図、核融合、白色矮星、超新星を組み合わせる依頼。",
    reward: "恒星進化の星章",
    rewardScrollId: "hr-diagram-scroll",
    requiredScrolls: [
      { id: "rigel-color-luminosity-scroll", label: "星色と温度" },
      { id: "betelgeuse-redgiant-scroll", label: "赤色超巨星" },
      { id: "white-dwarf-scroll", label: "白色矮星" },
      { id: "stellar-fusion-scroll", label: "核融合" }
    ]
  },
  {
    id: "new-messenger-astronomy",
    number: 12,
    title: "新しい宇宙の見方",
    requester: "重力波観測隊",
    requesterImage: "./assets/quest-requester-newton.png",
    mainImage: "./assets/deep-cosmos-gate-map.png",
    objective: "光以外の観測手段を読む",
    conversation: "パルサー、X線連星、重力波を組み合わせ、光だけではない天文学へ進もう。",
    requesterStats: {
      birthYear: "21世紀",
      fullName: "Multi-messenger Observers",
      achievement: "電波、X線、重力波などを組み合わせ、極限天体を観測する時代を開いた。"
    },
    summary: "光以外の観測で宇宙を読みたい。",
    detail: "パルサー、X線、重力波をつなぎ、マルチメッセンジャー天文学へ進む依頼。",
    reward: "重力波の星章",
    rewardScrollId: "gravitational-waves-scroll",
    requiredScrolls: [
      { id: "pulsar-scroll", label: "パルサー" },
      { id: "xray-blackhole-scroll", label: "X線連星BH" },
      { id: "gravitational-waves-scroll", label: "重力波" }
    ]
  }
);

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

function getFocusedQuest() {
  const focused = QUESTS.find((quest) => quest.id === state.focusedQuestId) ?? QUESTS[0];
  state.focusedQuestId = focused.id;
  return focused;
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

function claimQuestReward(questId) {
  const quest = QUESTS.find((item) => item.id === questId);
  if (!quest?.rewardScrollId) return;

  const selectedEvidenceIds = getQuestSelectedEvidenceIds(quest);
  const canCombine = quest.requiredScrolls.every((requirement) => selectedEvidenceIds.includes(requirement.id));
  if (!canCombine) return;

  const rewardScroll = getScrollById(quest.rewardScrollId);
  if (!rewardScroll) return;

  if (!claimedRewards.has(rewardScroll.id)) {
    claimedRewards.add(rewardScroll.id);
    saveClaimedRewards();
  }

  state.selectedScrollId = rewardScroll.id;
  showReward({
    id: rewardScroll.id,
    title: rewardScroll.title,
    message: `${quest.title}を解決してゲットしました。`,
    image: rewardScroll.image,
    knowledgeTitle: "",
    knowledge: [rewardScroll.lesson]
  });
  render();
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

function openQuest(questId) {
  state.focusedQuestId = questId;
  state.selectedQuestId = questId;
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
  if (screenId === "quests") {
    getFocusedQuest();
  }
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

function renderObserveSelectionPanel() {
  const selected = getSelectedObservableItem();

  return `
    <section class="home-selection-panel app-detail-panel observe-detail-panel ${selected.kingdomId}" aria-label="${selected.title}の説明">
      <figure class="home-selection-card app-detail-card">
        ${selected.enemyImage
          ? `<img src="${withAssetVersion(selected.enemyImage)}" alt="${selected.enemyAlt}" />`
          : `<img src="${withAssetVersion(HOME_KINGDOM_DETAILS[selected.kingdomId]?.card ?? HOME_KINGDOM_DETAILS.autumn.card)}" alt="${selected.title}" />`}
      </figure>
      <div class="home-selection-copy app-detail-copy">
        <h2>${selected.title}</h2>
        <p><strong>${selected.lesson}</strong>${selected.description}</p>
      </div>
    </section>
  `;
}

function renderLibrarySelectionPanel() {
  const selected = getSelectedLibraryScroll();
  const selectedUnlocked = claimedRewards.has(selected.id);

  return `
    <section class="home-selection-panel app-detail-panel library-detail-panel ${selected.tier ?? "major"}-tier" aria-label="${selected.title}の説明">
      <figure class="home-selection-card app-detail-card">
        <img src="${withAssetVersion(selected.image)}" alt="${selected.title}" />
      </figure>
      <div class="home-selection-copy app-detail-copy">
        <h2>${selected.title}</h2>
        <p>${selectedUnlocked ? selected.description : `${selected.period}の物語を観測すると、この巻物の解説が読める。`}</p>
      </div>
    </section>
  `;
}

function renderQuestSelectionPanel() {
  const quest = getFocusedQuest();

  return `
    <section class="home-selection-panel app-detail-panel quest-detail-panel" aria-label="${quest.title}の説明">
      <figure class="home-selection-card app-detail-card">
        <img src="${withAssetVersion(quest.requesterImage)}" alt="${quest.requester}" />
      </figure>
      <div class="home-selection-copy app-detail-copy">
        <h2>${quest.title}</h2>
        <p>${quest.summary}</p>
        <div class="home-selection-actions">
          <button class="home-enter-button" type="button" data-quest-open="${quest.id}">
            クエストを受ける
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderQuestDetailPanel() {
  const quest = getSelectedQuest();

  return `
    <section class="home-selection-panel app-detail-panel quest-dialogue-detail-panel" aria-label="${quest.requester}との会話">
      <figure class="home-selection-card app-detail-card">
        <img src="${withAssetVersion(quest.requesterImage)}" alt="${quest.requester}" />
      </figure>
      <div class="home-selection-copy app-detail-copy">
        <h2>${quest.title}</h2>
        <p><strong>${quest.objective}</strong>${quest.conversation}</p>
      </div>
    </section>
  `;
}

function renderGuideDetailPanel() {
  if (state.mode === "home") return renderHomeSelectionPanel();
  if (state.mode === "observe") return renderObserveSelectionPanel();
  if (state.mode === "library") return renderLibrarySelectionPanel();
  if (state.mode === "quests") {
    return state.selectedQuestId ? renderQuestDetailPanel() : renderQuestSelectionPanel();
  }

  return "";
}

function shouldRenderHomeNav() {
  return !(state.mode === "quests" && state.selectedQuestId);
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
              const orbClass = OBJECT_ORB_CLASSES[item.id] ?? ORB_CLASSES[index % ORB_CLASSES.length];
              const lockedClass = item.locked ? " locked" : "";
              const selectedClass = selected.id === item.id ? " selected" : "";
              const planetClass = item.kind === "planet" ? " planet-item" : "";
              const assetClass = item.asset ? " asset-item" : "";
              const orbContent = item.asset
                ? `<img src="${withAssetVersion(item.asset)}" alt="" aria-hidden="true" />`
                : "";

              return `
                <button class="winter-star-orb-button ${orbClass}${lockedClass}${selectedClass}${planetClass}${assetClass}" type="button" data-observe-id="${item.id}">
                  <span class="winter-star-orb" aria-hidden="true">${orbContent}</span>
                  <span class="winter-star-label">${item.label}</span>
                  <span class="observe-kingdom-name">${item.kingdomName}</span>
                </button>
              `;
          })
            .join("")}
        </div>
      </div>
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
      <img src="${withAssetVersion(getRequirementImage(requirement))}" alt="${requirement.label}" />
      <b>${acquired ? "✓" : "−"}</b>
    </span>
  `;
}

function renderQuestCard(quest) {
  const progress = getQuestProgress(quest);
  const selected = (state.focusedQuestId ?? QUESTS[0].id) === quest.id;

  return `
    <button class="quest-card${progress.open ? " open" : " locked"}${selected ? " selected" : ""}" type="button" data-quest-id="${quest.id}" aria-pressed="${selected ? "true" : "false"}">
      <span class="quest-requester">
        <img src="${withAssetVersion(quest.requesterImage)}" alt="${quest.requester}" />
        <span>依頼主<br><strong>${quest.requester}</strong></span>
      </span>
      <span class="quest-card-copy">
        <span class="quest-title-row">
          <strong>${quest.title}</strong>
        </span>
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

        <section class="quest-evidence-board" aria-label="巻物と観測技術の選択">
          <div class="quest-evidence-column">
            <div class="quest-evidence-list">
              ${evidenceOptions.map((evidence) => renderQuestEvidenceRow(quest, evidence)).join("")}
            </div>
          </div>

          <div class="quest-selected-column">
            <div class="quest-selected-list">
              ${selectedSlots.map((evidenceId, index) => renderSelectedEvidenceSlot(quest, evidenceId, index)).join("")}
            </div>
            <p>${progress.open ? "必要な証拠はそろっています。" : `必要な証拠 ${progress.collected} / ${progress.total}`}</p>
            <button class="quest-combine-button" type="button" data-quest-combine="${quest.id}" ${canCombine ? "" : "disabled"}>
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

  getFocusedQuest();

  return `
    <section class="app-screen-panel quest-tab">
      <div class="app-screen-header quest-list-header">
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
          ${[...LIBRARY_SCROLLS]
            .sort((a, b) => (a.tier === "minor" ? 1 : 0) - (b.tier === "minor" ? 1 : 0))
            .map((scroll) => {
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
  const detailPanel = renderGuideDetailPanel();
  const navPanel = shouldRenderHomeNav() ? renderHomeNav() : "";
  guidePanel.dataset.questDetail = state.mode === "quests" && state.selectedQuestId ? "true" : "false";
  guidePanel.innerHTML = `
    <div class="home-panel-shell">
      ${detailPanel}
      ${navPanel}
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
              const orbClass = OBJECT_ORB_CLASSES[point.id] ?? ORB_CLASSES[index % ORB_CLASSES.length];
              const lockedClass = point.locked ? " locked" : "";
              const planetClass = point.kind === "planet" ? " planet-item" : "";
              const assetClass = point.asset ? " asset-item" : "";
              const storyAttr = point.storyId
                ? `data-story-id="${point.storyId}"`
                : `data-guide-title="${point.label}" data-guide-note="${point.note}"`;
              const label = point.kind === "planet"
                ? point.label
                : STORIES[point.storyId]?.name ?? (point.id === "rigel" ? "青白き巨星リゲル" : point.label);
              const orbContent = point.asset
                ? `<img src="${withAssetVersion(point.asset)}" alt="" aria-hidden="true" />`
                : "";

              return `
                <button class="winter-star-orb-button ${orbClass}${lockedClass}${planetClass}${assetClass}" type="button" ${storyAttr}>
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
  const pointLabel = Object.values(KINGDOMS).flatMap(k => k.points ?? []).find(p => p.storyId === state.storyId)?.label ?? story.name;
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
  targetStatusName.textContent = pointLabel;
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
  storySceneNameEl.textContent = pointLabel;
  storyTypeEl.textContent = story.type;
  storyNameEl.textContent = pointLabel;
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

function getRewardFromScrollId(scrollId, message = "ゲットしました。") {
  const scroll = getScrollById(scrollId);
  if (!scroll) return null;

  return {
    id: scroll.id,
    title: scroll.title,
    message,
    image: scroll.image,
    tier: scroll.tier,
    knowledgeTitle: "",
    knowledge: [scroll.lesson]
  };
}

function finishStory(story) {
  const rewards = [
    story.reward,
    ...(story.extraRewardIds ?? []).map((id) => getRewardFromScrollId(id, `${story.name}から追加でゲットしました。`))
  ].filter(Boolean);

  state.mode = "detail";
  state.storyId = null;
  state.lineIndex = 0;
  render();

  const newRewards = rewards.filter((reward) => !claimedRewards.has(reward.id));
  newRewards.forEach((reward) => {
    claimedRewards.add(reward.id);
  });

  if (newRewards.length > 0) {
    saveClaimedRewards();
    state.selectedScrollId = newRewards[0].id;
    showReward(newRewards[0]);
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
    const questOpenButton = target?.closest("[data-quest-open]");

    if (homeEnterButton) {
      event.preventDefault();
      event.stopPropagation();
      selectKingdom(homeEnterButton.dataset.homeEnter);
      return;
    }

    if (questOpenButton) {
      event.preventDefault();
      event.stopPropagation();
      openQuest(questOpenButton.dataset.questOpen);
    }
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

  const questOpenButton = target?.closest("[data-quest-open]");
  if (questOpenButton) {
    openQuest(questOpenButton.dataset.questOpen);
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
    render();
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

  const questCombineButton = target?.closest("[data-quest-combine]");
  if (questCombineButton) {
    claimQuestReward(questCombineButton.dataset.questCombine);
    return;
  }

  const questButton = target?.closest("[data-quest-id]");
  if (questButton) {
    state.focusedQuestId = questButton.dataset.questId;
    state.selectedQuestId = null;
    render();
    return;
  }

  const observeButton = target?.closest("[data-observe-id]");
  if (observeButton) {
    state.selectedObserveId = observeButton.dataset.observeId;
    render();
    return;
  }

  const scrollButton = target?.closest("[data-scroll-id]");
  if (scrollButton) {
    state.selectedScrollId = scrollButton.dataset.scrollId;
    render();
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
