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
        y: 26,
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
    { id: "cmb", x: 50, y: 26, label: "CMB", storyId: "cmbEcho", asset: "./assets/deep-point-cmb.png" },
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
  selectedDetailPointId: null,
  selectedScrollId: null,
  selectedQuestId: null,
  focusedQuestId: null,
  selectedQuestEvidence: {},
  questLineIndex: 0
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
const lessonOverlay = document.querySelector("#lessonOverlay");
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

// 巻物ごとの「詳細を学ぶ」ページ。天文宇宙検定2級レベルの1枚解説。
const LESSON_PAGES = {
  "vega-absolute-magnitude-scroll": {
    badge: "天文宇宙検定2級",
    title: "絶対等級",
    subtitle: "星本来の明るさを同じ距離でそろえて比べる",
    hook: "夜空でいちばん明るく見える星は、本当に“いちばんすごい”星なのだろうか――？",
    lead:
      "じつは、見かけの明るさは“近さ”のごまかしかもしれない。すぐ隣のろうそくが、遠くの灯台より明るく見えるように。" +
      "そこで天文学者は、すべての星を同じ距離（10 パーセク）に並べ直すという大胆な発想をした。" +
      "こうして見えてくる星の“本当の実力”が、絶対等級だ。",
    blocks: [
      {
        type: "compare",
        items: [
          {
            symbol: "m",
            label: "見かけの等級",
            text: "地球から実際に見える明るさの等級。近い星ほど明るく見えるので、星本来の明るさとは限らない。"
          },
          {
            symbol: "M",
            label: "絶対等級",
            text: "その星を 10 パーセクの距離に置いたと仮定したときの等級。距離の影響を除いた、星本来の明るさを表す。"
          }
        ]
      },
      {
        type: "note",
        heading: "基準は「10 パーセク」",
        text:
          "10 パーセク ＝ 約 32.6 光年。すべての星をこの同じ距離に置きそろえることで、" +
          "見かけの差を取りのぞき、光度そのものだけを比較できる。"
      },
      {
        type: "formula",
        expression: "m − M = 5 log₁₀ d − 5",
        sub: "（別の形）　m − M = 5 log₁₀ ( d / 10 )",
        where: "d ＝ 星までの距離〔パーセク〕",
        caption:
          "この m − M を「距離指数」と呼ぶ。距離 d が分かれば絶対等級 M が求まり、" +
          "逆に M が分かれば距離 d を逆算できる。d ＝ 10 のとき m − M ＝ 0 となり、定義どおり m ＝ M になる。"
      },
      {
        type: "scale",
        heading: "等級と明るさの関係（ポグソンの式）",
        rows: [
          { diff: "1 等級の差", ratio: "明るさ 約 2.5 倍", note: "正確には 100 の 5 乗根＝2.512 倍" },
          { diff: "5 等級の差", ratio: "明るさ ちょうど 100 倍", note: "これが等級の定義の出発点" }
        ],
        foot: "等級は数値が小さい（マイナスが大きい）ほど明るい。"
      },
      {
        type: "examples",
        heading: "具体例で確かめる",
        columns: ["天体", "見かけ m", "距離", "絶対 M"],
        rows: [
          ["太陽", "−26.8", "約 0.0000049 pc", "+4.8"],
          ["ベガ", "0.0", "約 7.7 pc", "+0.6"],
          ["デネブ", "+1.3", "約 440 pc", "約 −7"]
        ],
        foot:
          "太陽は近いので見かけは桁違いに明るいが、絶対等級ではごく平均的な星。" +
          "デネブは遠いのに明るく見える＝本当に桁違いの光度を持つ。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "絶対等級の基準距離は「10 パーセク」。光年ではない点に注意。",
          "5 等級の差＝明るさ 100 倍。1 等級あたり約 2.512 倍。",
          "距離指数 m − M ＝ 5 log d − 5 から、距離も光度も逆算できる。",
          "絶対等級が小さいほど高光度。太陽は M ＝ +4.8 でごく平均的。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "ある星の見かけの等級が +6.0、距離が 100 パーセクのとき、絶対等級 M はいくらか。",
            choices: ["ア　+1.0", "イ　+6.0", "ウ　+11.0", "エ　−4.0"],
            answer: "正解：ア　+1.0",
            explain:
              "距離指数の式 m − M ＝ 5 log d − 5 に d ＝ 100 を代入する。" +
              "log₁₀ 100 ＝ 2 なので、m − M ＝ 5 × 2 − 5 ＝ 5。よって M ＝ m − 5 ＝ 6.0 − 5 ＝ +1.0。"
          },
          {
            q: "絶対等級が等しい星 A（距離 10 パーセク）と星 B（距離 100 パーセク）がある。見かけの明るさはどちらが何倍明るく見えるか。",
            choices: ["ア　A が 100 倍", "イ　B が 100 倍", "ウ　A が 10 倍", "エ　どちらも同じ"],
            answer: "正解：ア　A が 100 倍",
            explain:
              "絶対等級が等しい＝光度（本来の明るさ）が同じ。見かけの明るさは距離の 2 乗に反比例するので、" +
              "距離が 10 倍遠い B は A の 1/100 の明るさ。したがって A が B の 100 倍明るく見える（等級差はちょうど 5 等級）。"
          },
          {
            q: "星の等級が 1 等級小さくなると、明るさは約何倍になるか。",
            choices: ["ア　約 2.5 倍", "イ　約 5 倍", "ウ　約 10 倍", "エ　約 100 倍"],
            answer: "正解：ア　約 2.5 倍",
            explain:
              "5 等級の差で明るさはちょうど 100 倍。よって 1 等級あたりは 100 の 5 乗根＝約 2.512 倍。" +
              "等級は数値が小さいほど明るいので、1 等級小さくなると約 2.5 倍明るくなる。"
          }
        ]
      }
    ]
  },

  "rigel-color-luminosity-scroll": {
    title: "星の色と表面温度",
    subtitle: "星の色は表面温度の通信簿",
    hook: "赤く燃える星と、青白く輝く星――熱いのは、どちらだろう？",
    lead:
      "たき火を思い出してほしい。ぬるい炎は赤く、いちばん熱い芯は青白い。じつは星もまったく同じだ。" +
      "リゲルのような青白い星は表面 1 万度を超える灼熱、赤いベテルギウスは 3000 度台の“ぬるい”星。" +
      "色をひと目見るだけで、星の表面温度がわかってしまう。",
    blocks: [
      {
        type: "note",
        heading: "色を決めるのは温度（ウィーンの変位則）",
        text:
          "高温の物体ほど、強く出す光の波長が短く（青く）なる。これを表すのがウィーンの変位則。" +
          "ピークの色が青い星は高温、赤い星は低温だと読める。"
      },
      {
        type: "formula",
        expression: "λmax × T = 2.9 × 10⁻³",
        where: "λmax ＝ 最も強い光の波長〔m〕　T ＝ 表面温度〔K〕",
        caption:
          "温度 T が高いほどピーク波長 λmax は短く（青く）なる。逆に色（波長）が分かれば温度が求められる。"
      },
      {
        type: "examples",
        heading: "色と温度の対応",
        columns: ["星", "色", "表面温度の目安"],
        rows: [
          ["リゲル", "青白", "約 11000 K"],
          ["太陽", "黄", "約 5800 K"],
          ["ベテルギウス", "赤", "約 3500 K"]
        ],
        foot: "スペクトル型 O・B・A（青白）→ F・G（黄）→ K・M（赤）の順に温度が下がる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "星の色は表面温度を表す。青白いほど高温、赤いほど低温。",
          "ウィーンの変位則：温度が高いほどピーク波長は短く（青く）なる。",
          "スペクトル型 O→M の順に高温→低温。太陽は G 型で約 5800 K。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "次の 3 つの星のうち、表面温度が最も高いものはどれか。",
            choices: ["ア　青白い星", "イ　黄色い星", "ウ　赤い星", "エ　色では決まらない"],
            answer: "正解：ア　青白い星",
            explain:
              "ウィーンの変位則より、温度が高い星ほど短い波長（青）の光を強く出す。よって青白い星が最も高温。"
          },
          {
            q: "ある星の表面温度が 2 倍になると、最も強く出す光の波長はどうなるか。",
            choices: ["ア　約 1/2 になる", "イ　約 2 倍になる", "ウ　変わらない", "エ　約 4 倍になる"],
            answer: "正解：ア　約 1/2 になる",
            explain:
              "λmax × T が一定なので、T が 2 倍になれば λmax は 1/2 になる（波長が短く＝青くなる）。"
          },
          {
            q: "スペクトル型 O・B・A・F・G・K・M のうち、最も低温なのはどれか。",
            choices: ["ア　M 型", "イ　O 型", "ウ　G 型", "エ　A 型"],
            answer: "正解：ア　M 型",
            explain:
              "O→M の順に表面温度は下がる。O 型が最高温（数万 K）、M 型が最低温（約 3000 K 台）。"
          }
        ]
      }
    ]
  },

  "cygnus-parallax-scroll": {
    title: "年周視差",
    subtitle: "地球の公転を使って星までの距離を測る",
    hook: "指を立てて片目ずつ見ると、指がずれて見える。星も同じ“ずれ”で距離がわかる？",
    lead:
      "近くの指は、左右の目で見ると大きくずれる。遠い指はあまりずれない。" +
      "地球は半年で太陽の反対側まで動くので、これを“巨大な両目”として使える。" +
      "近い星ほど大きくずれ、その角度（年周視差）から距離が直接わかる。",
    blocks: [
      {
        type: "formula",
        expression: "d = 1 / p",
        where: "d ＝ 距離〔パーセク〕　p ＝ 年周視差〔秒角〕",
        caption:
          "視差 p が 1 秒角の星までの距離を 1 パーセクと定める。視差が小さい（ずれが少ない）ほど遠い。"
      },
      {
        type: "note",
        heading: "1 パーセクとは",
        text:
          "年周視差がちょうど 1 秒角になる距離＝1 パーセク＝約 3.26 光年。" +
          "視差はとても小さな角度なので、近い星でも 1 秒角以下しかない。"
      },
      {
        type: "examples",
        heading: "視差と距離",
        columns: ["星", "年周視差 p", "距離 d"],
        rows: [
          ["ベガ", "約 0.13″", "約 7.7 pc"],
          ["（基準）", "1.00″", "1 pc（約 3.26 光年）"]
        ],
        foot: "p が小さいほど d は大きい。1/p の関係で、視差が半分なら距離は 2 倍。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "年周視差は地球の公転による星の見かけのずれ。近い星ほど大きい。",
          "距離〔pc〕＝ 1 ÷ 視差〔秒角〕。視差が小さいほど遠い。",
          "1 パーセク＝視差 1 秒角の距離＝約 3.26 光年。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "年周視差が 0.05 秒角の星までの距離は何パーセクか。",
            choices: ["ア　20 pc", "イ　5 pc", "ウ　0.05 pc", "エ　50 pc"],
            answer: "正解：ア　20 pc",
            explain: "d ＝ 1 / p ＝ 1 / 0.05 ＝ 20 パーセク。"
          },
          {
            q: "星 A の視差は星 B の 2 倍だった。距離の関係として正しいものはどれか。",
            choices: ["ア　A は B の半分の距離", "イ　A は B の 2 倍の距離", "ウ　同じ距離", "エ　A は B の 4 倍の距離"],
            answer: "正解：ア　A は B の半分の距離",
            explain: "d ＝ 1/p なので、視差が 2 倍なら距離は 1/2。視差が大きい＝近い。"
          },
          {
            q: "1 パーセクは約何光年か。",
            choices: ["ア　約 3.26 光年", "イ　約 1 光年", "ウ　約 10 光年", "エ　約 100 光年"],
            answer: "正解：ア　約 3.26 光年",
            explain: "1 パーセクは年周視差が 1 秒角になる距離で、約 3.26 光年に相当する。"
          }
        ]
      }
    ]
  },

  "arcturus-giant-scroll": {
    title: "巨星の明るさ",
    subtitle: "低温でも、大きければ明るい",
    hook: "太陽よりぬるいのに、太陽よりずっと明るい星がある。なぜだろう？",
    lead:
      "アークトゥルスは橙色、つまり太陽より低温の星だ。それなのに肉眼でひときわ明るい。" +
      "秘密は“大きさ”。星は表面積が広いほど多くの光を放てるので、低温でも巨大なら高光度になる。" +
      "色（温度）だけでなく、半径も明るさを左右する。",
    blocks: [
      {
        type: "formula",
        expression: "L = 4πR² σ T⁴",
        where: "L ＝ 光度　R ＝ 半径　T ＝ 表面温度　σ ＝ 定数",
        caption:
          "シュテファン・ボルツマンの法則。光度は半径の 2 乗と温度の 4 乗に比例する。" +
          "温度が低くても、半径 R が大きければ光度 L は大きくなる。"
      },
      {
        type: "note",
        heading: "巨星とは",
        text:
          "進化が進んで外層が大きくふくらんだ星。半径が太陽の数十倍にもなる。" +
          "表面温度は下がって赤〜橙色だが、広い表面から大量の光を出すため明るい。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "光度は半径の 2 乗・温度の 4 乗に比例（L＝4πR²σT⁴）。",
          "低温（赤・橙）でも、半径が大きい巨星は高光度になれる。",
          "同じ温度なら、半径が大きい星ほど明るい。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "表面温度が同じ 2 つの星で、半径が 3 倍の星は明るさが何倍になるか。",
            choices: ["ア　9 倍", "イ　3 倍", "ウ　6 倍", "エ　27 倍"],
            answer: "正解：ア　9 倍",
            explain: "光度は半径の 2 乗に比例するので、3² ＝ 9 倍になる。"
          },
          {
            q: "橙色巨星アークトゥルスが太陽より低温なのに明るい主な理由はどれか。",
            choices: ["ア　半径が非常に大きいから", "イ　距離が非常に近いから", "ウ　温度が非常に高いから", "エ　青い光を出すから"],
            answer: "正解：ア　半径が非常に大きいから",
            explain: "巨星は半径が大きく表面積が広いため、低温でも多くの光を放ち高光度になる。"
          },
          {
            q: "L＝4πR²σT⁴ で、温度が 2 倍になると光度は何倍になるか（半径は同じ）。",
            choices: ["ア　16 倍", "イ　2 倍", "ウ　4 倍", "エ　8 倍"],
            answer: "正解：ア　16 倍",
            explain: "光度は温度の 4 乗に比例するので、2⁴ ＝ 16 倍になる。"
          }
        ]
      }
    ]
  },

  "spica-spectrum-scroll": {
    title: "分光連星",
    subtitle: "分けて見えなくても、スペクトルが連星を暴く",
    hook: "望遠鏡でも 1 つの点にしか見えない星が、じつは 2 つ――どうして分かる？",
    lead:
      "スピカは近すぎて、どんな望遠鏡でも 2 つに分離できない。それでも連星だと分かるのは“光の指紋”のおかげ。" +
      "連星は互いの周りを回るため、こちらに近づくときと遠ざかるときでスペクトル線が周期的にずれる。" +
      "このずれを読み取ると、見えない相棒の存在が浮かび上がる。",
    blocks: [
      {
        type: "note",
        heading: "ドップラー効果でずれる",
        text:
          "星が近づくときは光の波長が短く（青く）、遠ざかるときは長く（赤く）なる。" +
          "連星では公転にあわせてスペクトル線がこの青↔赤を周期的にくり返すので、連星だと判定できる。"
      },
      {
        type: "compare",
        items: [
          {
            symbol: "眼",
            label: "見かけは 1 つ",
            text: "望遠鏡でも分離できないほど近い。位置だけ見ても連星か単独星か分からない。"
          },
          {
            symbol: "分",
            label: "スペクトルで 2 つ",
            text: "スペクトル線の周期的なドップラーずれから、互いを回る 2 つの星だと分かる。"
          }
        ]
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "分光連星は、スペクトル線の周期的なずれで見つかる連星。",
          "原因はドップラー効果。近づくと青、遠ざかると赤にずれる。",
          "望遠鏡で分離できない近い連星でも検出できる。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "分光連星が連星だと分かる手がかりはどれか。",
            choices: ["ア　スペクトル線の周期的なずれ", "イ　星の色の変化", "ウ　星の位置の大きな移動", "エ　明るさが一定なこと"],
            answer: "正解：ア　スペクトル線の周期的なずれ",
            explain: "公転によるドップラー効果でスペクトル線が周期的に青↔赤へずれることから連星と判定する。"
          },
          {
            q: "星がこちらに近づいているとき、スペクトル線はどちらにずれるか。",
            choices: ["ア　青い側（短波長）", "イ　赤い側（長波長）", "ウ　ずれない", "エ　消える"],
            answer: "正解：ア　青い側（短波長）",
            explain: "近づく光源は波長が短くなる（青方偏移）。遠ざかると赤方偏移。"
          },
          {
            q: "分光連星の検出に役立つ現象はどれか。",
            choices: ["ア　ドップラー効果", "イ　万有引力の発見", "ウ　光行差", "エ　歳差運動"],
            answer: "正解：ア　ドップラー効果",
            explain: "運動による波長変化（ドップラー効果）でスペクトル線のずれが生じ、連星が分かる。"
          }
        ]
      }
    ]
  },

  "deneb-luminosity-scroll": {
    title: "大光度星",
    subtitle: "遠いのに明るい星は、本物の怪物",
    hook: "とても遠いのに明るく見える星がある。その正体は？",
    lead:
      "デネブは地球から数百パーセクも離れているのに、夜空でくっきり明るい。" +
      "近いから明るく見えるシリウスとは正反対だ。これだけ遠くて明るいということは、" +
      "本当の明るさ（光度）が桁違いに大きい超高光度星だということ。",
    blocks: [
      {
        type: "note",
        heading: "見かけと本物を分けて読む",
        text:
          "見かけの明るさは「光度」と「距離」で決まる。デネブは遠い（暗く見えるはず）のに明るい。" +
          "→ それを覆すほど光度が大きい、という結論になる。"
      },
      {
        type: "examples",
        heading: "デネブの素顔",
        columns: ["項目", "値"],
        rows: [
          ["見かけの等級 m", "約 +1.3"],
          ["距離", "約 440 pc"],
          ["絶対等級 M", "約 −7（超高光度）"]
        ],
        foot: "絶対等級 M が大きくマイナス＝本来の明るさが桁違い。太陽（M＝+4.8）とは段違い。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "見かけの明るさ＝光度と距離の組み合わせ。距離を考えて読む。",
          "遠いのに明るい星は、本当の光度が非常に大きい。",
          "本来の明るさは絶対等級で比べる（[[絶対等級]] と対で理解）。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "デネブが「とても遠いのに明るく見える」ことから言えるのはどれか。",
            choices: ["ア　本当の光度が非常に大きい", "イ　地球にとても近い", "ウ　表面温度がとても低い", "エ　小さな星である"],
            answer: "正解：ア　本当の光度が非常に大きい",
            explain: "遠い星は暗く見えるはず。それでも明るいのは、本来の光度が桁違いに大きいから。"
          },
          {
            q: "見かけの明るさを決める 2 つの要素の組み合わせはどれか。",
            choices: ["ア　光度と距離", "イ　色と質量", "ウ　自転と公転", "エ　年齢と位置"],
            answer: "正解：ア　光度と距離",
            explain: "見かけの明るさは星本来の明るさ（光度）と、地球からの距離の両方で決まる。"
          },
          {
            q: "星本来の明るさを公平に比べるための指標はどれか。",
            choices: ["ア　絶対等級", "イ　見かけの等級", "ウ　色指数", "エ　年周視差"],
            answer: "正解：ア　絶対等級",
            explain: "絶対等級はすべての星を 10 パーセクに置いた等級で、本来の明るさを比べられる。"
          }
        ]
      }
    ]
  },

  "albireo-color-scroll": {
    title: "色指数",
    subtitle: "色を数値にして温度を測る",
    hook: "「青っぽい」「赤っぽい」を、数字ひとつで言い表せたら便利だと思わないか？",
    lead:
      "アルビレオは青とオレンジの星が並ぶ美しい二重星。見た目の“色の差”こそ温度の差だ。" +
      "天文学ではこの色を、青フィルターの等級 B と可視光の等級 V の差＝色指数として数値化する。" +
      "値が小さい（マイナス）ほど青く高温、大きいほど赤く低温だと一目で分かる。",
    blocks: [
      {
        type: "formula",
        expression: "色指数 ＝ B − V",
        where: "B ＝ 青フィルターでの等級　V ＝ 可視光での等級",
        caption:
          "青で明るい（B が小さい）星は B−V が小さく、青く高温。赤い星は B−V が大きく、低温。"
      },
      {
        type: "scale",
        heading: "色指数と温度",
        rows: [
          { diff: "B − V < 0", ratio: "青白く高温", note: "O・B 型などの高温星" },
          { diff: "B − V ≒ 0.6", ratio: "黄色（太陽くらい）", note: "G 型・約 5800 K" },
          { diff: "B − V > 1.4", ratio: "赤く低温", note: "M 型などの低温星" }
        ],
        foot: "色指数が小さいほど青く高温、大きいほど赤く低温。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "色指数 B − V は星の色＝表面温度を数値化したもの。",
          "値が小さい（マイナス）ほど青く高温、大きいほど赤く低温。",
          "フィルターを通した等級の差で、星の温度を客観的に測れる。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "色指数 B − V が小さい（マイナス）星はどんな星か。",
            choices: ["ア　青白く高温の星", "イ　赤く低温の星", "ウ　太陽と同じ星", "エ　距離が近い星"],
            answer: "正解：ア　青白く高温の星",
            explain: "B − V が小さいほど青で明るい＝青白く高温の星を表す。"
          },
          {
            q: "色指数はどの 2 つの等級の差で表されるか。",
            choices: ["ア　B（青）と V（可視）", "イ　見かけと絶対", "ウ　最大と最小", "エ　近日点と遠日点"],
            answer: "正解：ア　B（青）と V（可視）",
            explain: "色指数＝B − V。青フィルターと可視光フィルターの等級の差で求める。"
          },
          {
            q: "太陽の色指数 B − V に最も近い値はどれか。",
            choices: ["ア　約 0.6", "イ　約 −0.3", "ウ　約 1.8", "エ　約 5.0"],
            answer: "正解：ア　約 0.6",
            explain: "太陽は G 型（約 5800 K）で、色指数はおよそ 0.6。黄色っぽく見える。"
          }
        ]
      }
    ]
  },

  "mira-pulsation-scroll": {
    title: "脈動変光星",
    subtitle: "星そのものが息をして明るさが変わる",
    hook: "暗くなったり明るくなったり――星が“呼吸”しているとしたら？",
    lead:
      "くじら座のミラは、肉眼で見えるほど明るくなったかと思うと、やがて見えなくなるほど暗くなる。" +
      "原因は、星自体がふくらんだり縮んだりをくり返す“脈動”。半径と表面温度が周期的に変わり、" +
      "それにつれて明るさが大きく上下する。ミラは約 332 日の長い周期をもつ。",
    blocks: [
      {
        type: "note",
        heading: "脈動が変光を生む",
        text:
          "星が膨張・収縮をくり返すと、半径と温度が変化し、光度（L＝4πR²σT⁴）が周期的に変わる。" +
          "星の外側だけが隠れる“食”ではなく、星そのものの変化による変光である。"
      },
      {
        type: "compare",
        items: [
          {
            symbol: "脈",
            label: "脈動変光星",
            text: "星そのものが膨張収縮し、半径・温度が変わって明るさが変化する。例：ミラ。"
          },
          {
            symbol: "食",
            label: "食変光星",
            text: "連星が互いを隠す“食”で見かけの明るさが下がる。星自体は変わらない。例：アルゴル。"
          }
        ]
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "脈動変光星は星自体の膨張・収縮で明るさが変わる。",
          "半径と温度が周期的に変化し、光度が上下する。",
          "ミラは約 332 日の長周期脈動変光星の代表。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "脈動変光星の明るさが変わる原因はどれか。",
            choices: ["ア　星自体の膨張・収縮", "イ　連星が互いを隠す食", "ウ　地球からの距離変化", "エ　黒点の増減だけ"],
            answer: "正解：ア　星自体の膨張・収縮",
            explain: "脈動変光星は星そのものが膨らんだり縮んだりして半径・温度が変わり、明るさが変化する。"
          },
          {
            q: "脈動変光星と食変光星の違いとして正しいものはどれか。",
            choices: ["ア　脈動は星自体、食は連星の隠し合い", "イ　どちらも連星が原因", "ウ　どちらも星自体の変化", "エ　違いはない"],
            answer: "正解：ア　脈動は星自体、食は連星の隠し合い",
            explain: "脈動変光星は星自体の変化、食変光星は連星が互いを隠すことによる見かけの変光。"
          },
          {
            q: "長周期脈動変光星の代表として挙げられる星はどれか。",
            choices: ["ア　ミラ", "イ　アルゴル", "ウ　シリウス", "エ　ベガ"],
            answer: "正解：ア　ミラ",
            explain: "くじら座のミラは約 332 日周期の長周期脈動変光星の代表例。"
          }
        ]
      }
    ]
  },

  "betelgeuse-redgiant-scroll": {
    title: "赤色超巨星",
    subtitle: "赤くて低温、でも桁外れに大きい",
    hook: "もし太陽の場所に置いたら、火星をのみ込むほど大きい星がある。何色だと思う？",
    lead:
      "オリオン座のベテルギウスは赤い。赤は低温の色だが、この星は太陽の数百倍もの半径をもつ超巨星だ。" +
      "低温でも、表面積がとてつもなく広いので明るく輝く。進化の最終段階にあり、" +
      "いつか超新星爆発を起こすと考えられている。",
    blocks: [
      {
        type: "note",
        heading: "低温でも巨大なら明るい",
        text:
          "光度 L＝4πR²σT⁴。赤色超巨星は温度 T が低い分を、巨大な半径 R で補って高光度を保つ。" +
          "色は低温（赤）でも、見かけ・本来ともに明るい。"
      },
      {
        type: "examples",
        heading: "ベテルギウスの素顔",
        columns: ["項目", "値の目安"],
        rows: [
          ["色 / 表面温度", "赤 / 約 3500 K"],
          ["半径", "太陽の数百倍"],
          ["進化段階", "末期（超新星予備軍）"]
        ],
        foot: "低温＝赤だが、巨大な半径のおかげで非常に明るい。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "赤色超巨星は低温（赤）だが半径が極端に大きく高光度。",
          "光度は半径の 2 乗に効くため、巨大さが明るさを生む。",
          "進化末期の重い星で、超新星爆発の候補。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "赤色超巨星が赤く低温なのに明るい理由はどれか。",
            choices: ["ア　半径が非常に大きいから", "イ　地球に近いから", "ウ　温度が高いから", "エ　青い光を出すから"],
            answer: "正解：ア　半径が非常に大きいから",
            explain: "L＝4πR²σT⁴。低温でも巨大な半径によって表面積が広く、明るく輝く。"
          },
          {
            q: "ベテルギウスのような重い赤色超巨星が最後に起こすと考えられる現象はどれか。",
            choices: ["ア　超新星爆発", "イ　惑星状星雲", "ウ　何も起きない", "エ　恒星の合体"],
            answer: "正解：ア　超新星爆発",
            explain: "重い星は進化の最終段階で超新星爆発を起こす。ベテルギウスはその候補。"
          },
          {
            q: "赤色超巨星の表面温度の目安はどれか。",
            choices: ["ア　約 3500 K", "イ　約 5800 K", "ウ　約 11000 K", "エ　約 30000 K"],
            answer: "正解：ア　約 3500 K",
            explain: "赤い色は低温を示し、赤色超巨星の表面温度は 3000 K 台が目安。"
          }
        ]
      }
    ]
  },

  "sirius-brightness-scroll": {
    title: "見かけの明るさと距離",
    subtitle: "明るさは距離の 2 乗で薄まる",
    hook: "夜空でいちばん明るい星シリウス。とびきり巨大な星なのだろうか？",
    lead:
      "じつはシリウスは、桁外れの怪物星というわけではない。最大の理由は“近さ”だ。" +
      "光は距離の 2 乗に反比例して薄まるので、近い星はそれだけで明るく見える。" +
      "見かけの明るさは、星本来の明るさ（光度）と距離の合わせ技で決まる。",
    blocks: [
      {
        type: "formula",
        expression: "見かけの明るさ ∝ L / d²",
        where: "L ＝ 光度（本来の明るさ）　d ＝ 距離",
        caption:
          "距離の 2 乗に反比例（逆 2 乗の法則）。距離が 2 倍になると明るさは 1/4 に薄まる。"
      },
      {
        type: "note",
        heading: "シリウスが明るい理由",
        text:
          "シリウスは約 2.6 パーセク（8.6 光年）と非常に近い。光度もそこそこ大きいが、" +
          "“いちばん明るく見える”最大の理由は距離が近いこと。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "見かけの明るさは光度と距離の両方で決まる。",
          "明るさは距離の 2 乗に反比例（逆 2 乗の法則）。",
          "シリウスが最も明るく見えるのは、近いことが大きな理由。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "同じ光度の星で、距離が 2 倍になると見かけの明るさはどうなるか。",
            choices: ["ア　1/4 になる", "イ　1/2 になる", "ウ　2 倍になる", "エ　変わらない"],
            answer: "正解：ア　1/4 になる",
            explain: "明るさは距離の 2 乗に反比例。距離 2 倍なら 1/2² ＝ 1/4 に薄まる。"
          },
          {
            q: "シリウスが夜空で最も明るく見える主な理由はどれか。",
            choices: ["ア　地球にとても近いから", "イ　宇宙最大の星だから", "ウ　とても低温だから", "エ　自分で何度も爆発するから"],
            answer: "正解：ア　地球にとても近いから",
            explain: "シリウスは約 8.6 光年と近い。近さが見かけの明るさを大きくしている。"
          },
          {
            q: "見かけの明るさを決める要素の組み合わせとして正しいものはどれか。",
            choices: ["ア　光度と距離", "イ　色と自転", "ウ　質量と年齢", "エ　位置と名前"],
            answer: "正解：ア　光度と距離",
            explain: "見かけの明るさは本来の明るさ（光度）と地球からの距離の組み合わせで決まる。"
          }
        ]
      }
    ]
  },

  "galaxy-distance-scroll": {
    title: "銀河までの距離",
    subtitle: "星座の奥には“別の銀河”が広がる",
    hook: "肉眼でぼんやり見えるあの雲は、星 1 個ではなく“1 兆個の星の島”だとしたら？",
    lead:
      "アンドロメダ座の方向に、ぼんやりした光のしみ（M31）が見える。これは星ではなく、" +
      "数千億〜1 兆個の星が集まった別の銀河だ。距離は約 250 万光年。" +
      "星座を作る星々は天の川の中の“ご近所”で、その奥には銀河という巨大な構造が広がっている。",
    blocks: [
      {
        type: "note",
        heading: "星座は入口、奥に銀河",
        text:
          "星座を形づくる星はすべて天の川銀河の中にある。M31 はその外にある別の銀河で、" +
          "肉眼で見える天体としては最も遠いものの一つ。"
      },
      {
        type: "examples",
        heading: "距離のスケール感",
        columns: ["天体", "距離の目安"],
        rows: [
          ["星座の星", "数光年〜数千光年（天の川の中）"],
          ["M31（アンドロメダ銀河）", "約 250 万光年"]
        ],
        foot: "星座の星と銀河とでは、距離の桁がまったく違う。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "M31 はアンドロメダ座の方向にある別の銀河（約 250 万光年）。",
          "星座の星は天の川銀河内、銀河はその外側の巨大構造。",
          "肉眼で見える最遠クラスの天体の一つ。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "M31（アンドロメダ銀河）までの距離の目安はどれか。",
            choices: ["ア　約 250 万光年", "イ　約 250 光年", "ウ　約 8.6 光年", "エ　約 1 億光年"],
            answer: "正解：ア　約 250 万光年",
            explain: "M31 は約 250 万光年。肉眼で見える最も遠い天体の一つ。"
          },
          {
            q: "星座を形づくる星々はどこにあるか。",
            choices: ["ア　天の川銀河の中", "イ　M31 の中", "ウ　太陽系の中だけ", "エ　銀河の外側"],
            answer: "正解：ア　天の川銀河の中",
            explain: "星座の星はすべて私たちの天の川銀河の内側にある近距離の星々。"
          },
          {
            q: "M31 はどんな天体か。",
            choices: ["ア　無数の星が集まった別の銀河", "イ　1 つの巨大な恒星", "ウ　太陽系の惑星", "エ　彗星"],
            answer: "正解：ア　無数の星が集まった別の銀河",
            explain: "M31 は数千億〜1 兆個の星からなる、天の川とは別の渦巻銀河。"
          }
        ]
      }
    ]
  },

  "algol-eclipse-scroll": {
    title: "食変光星",
    subtitle: "連星が互いを隠して暗くなる",
    hook: "規則正しく暗くなる星“悪魔の首”アルゴル。星が瞬きしているのか？",
    lead:
      "ペルセウス座のアルゴルは、約 2.87 日ごとに決まって暗くなる。星が脈打っているのではない。" +
      "じつは 2 つの星が回り合う連星で、暗い相棒が明るい主星の前を横切る“食”が起きるたびに、" +
      "全体の光が一時的に隠されて暗く見えるのだ。",
    blocks: [
      {
        type: "note",
        heading: "“食”で見かけの明るさが下がる",
        text:
          "連星の軌道を真横から見る向きだと、片方がもう片方を隠す食が起こる。" +
          "主星が隠れると大きく減光し、規則正しい周期で明るさが変化する。"
      },
      {
        type: "compare",
        items: [
          {
            symbol: "食",
            label: "食変光星",
            text: "連星が互いを隠す食で“見かけ”が暗くなる。星自体の明るさは変わらない。例：アルゴル。"
          },
          {
            symbol: "脈",
            label: "脈動変光星",
            text: "星そのものが膨張・収縮して明るさが変わる。連星でなくても起こる。例：ミラ。"
          }
        ]
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "食変光星は連星の“食”で明るさが規則的に下がる。",
          "減光は見かけのもので、星自体の明るさは変わらない。",
          "アルゴルは約 2.87 日周期の代表的な食変光星。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "食変光星が暗くなる原因はどれか。",
            choices: ["ア　連星が互いを隠すから", "イ　星自体が縮むから", "ウ　距離が遠くなるから", "エ　温度が急に下がるから"],
            answer: "正解：ア　連星が互いを隠すから",
            explain: "食変光星は連星の一方が他方の前を横切る“食”で、見かけの明るさが下がる。"
          },
          {
            q: "アルゴルの変光周期の目安はどれか。",
            choices: ["ア　約 2.87 日", "イ　約 332 日", "ウ　約 1 年", "エ　約 11 年"],
            answer: "正解：ア　約 2.87 日",
            explain: "アルゴルは約 2.87 日ごとに規則正しく減光する食変光星。"
          },
          {
            q: "食変光星と脈動変光星の違いはどれか。",
            choices: ["ア　食は連星の隠し合い、脈動は星自体の変化", "イ　どちらも星自体の変化", "ウ　どちらも連星", "エ　違いはない"],
            answer: "正解：ア　食は連星の隠し合い、脈動は星自体の変化",
            explain: "食変光星は連星の食による見かけの変光、脈動変光星は星自体の膨張収縮による変光。"
          }
        ]
      }
    ]
  },

  "mizar-double-star-scroll": {
    title: "二重星と連星",
    subtitle: "並んで見える星に、本当の絆はあるか",
    hook: "ぴったり寄り添う 2 つの星。本当のカップル？　それともたまたま並んでいるだけ？",
    lead:
      "北斗七星のミザールは、すぐそばのアルコルと寄り添って見える。だが“近くに見える”ことと" +
      "“本当に近い”ことは別物だ。見かけだけ近い二重星もあれば、重力で結ばれて回り合う連星もある。" +
      "点に見える星にも、奥行きと関係性が隠れている。",
    blocks: [
      {
        type: "compare",
        items: [
          {
            symbol: "見",
            label: "見かけの二重星",
            text: "方向がたまたま近いだけで、実際の距離は大きく離れている。重力的な結びつきはない。"
          },
          {
            symbol: "連",
            label: "連星",
            text: "重力で結ばれ、共通の重心の周りを回り合う。質量を調べる手がかりにもなる。"
          }
        ]
      },
      {
        type: "note",
        heading: "見かけの並びにだまされない",
        text:
          "星座は天球上の見かけの並び。二重星を詳しく観測すると、" +
          "ただ並ぶだけか、重力で回り合う連星かを区別でき、星の奥行きがほどける。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "二重星には「見かけだけ近いもの」と「連星」がある。",
          "連星は重力で結ばれ、共通重心の周りを公転する。",
          "連星の運動からは星の質量を求められる。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "重力で結ばれて互いを回り合う 2 つの星を何と呼ぶか。",
            choices: ["ア　連星", "イ　見かけの二重星", "ウ　変光星", "エ　超新星"],
            answer: "正解：ア　連星",
            explain: "連星は重力で結ばれ、共通の重心の周りを公転する 2 つ（以上）の星。"
          },
          {
            q: "「見かけの二重星」の説明として正しいものはどれか。",
            choices: ["ア　方向がたまたま近いだけ", "イ　重力で回り合う", "ウ　1 つの星が分裂した", "エ　必ず同じ距離にある"],
            answer: "正解：ア　方向がたまたま近いだけ",
            explain: "見かけの二重星は方向が近いだけで、実際の距離は大きく異なり重力的な結合はない。"
          },
          {
            q: "連星の観測から求められる星の重要な量はどれか。",
            choices: ["ア　質量", "イ　名前", "ウ　星座の形", "エ　地球の公転周期"],
            answer: "正解：ア　質量",
            explain: "連星の公転運動（ケプラーの法則）から、星の質量を求めることができる。"
          }
        ]
      }
    ]
  },

  "venus-phases-scroll": {
    title: "金星の満ち欠け",
    subtitle: "金星も月のように満ち欠けする",
    hook: "金星が月のように満ち欠けする――この発見が、宇宙の中心を入れ替えた？",
    lead:
      "金星は地球より内側を回る内惑星。太陽・金星・地球の位置関係が変わるにつれて、" +
      "月と同じように満ち欠けして見える。ガリレオが望遠鏡でこれを確認したことは、" +
      "金星が太陽の周りを回っている＝地動説の強力な証拠になった。",
    blocks: [
      {
        type: "note",
        heading: "内惑星だから満ち欠けする",
        text:
          "金星は太陽に照らされた半球を、地球からいろいろな角度で見ることになる。" +
          "そのため三日月形〜丸い形まで満ち欠けし、近いときほど大きく細く見える。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "金星は地球より内側を回る内惑星。",
          "太陽・金星・地球の位置関係で満ち欠けが起こる。",
          "満ち欠けの観測は地動説を支持する証拠になった。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "金星が満ち欠けして見える理由はどれか。",
            choices: ["ア　内惑星で太陽との位置関係が変わるから", "イ　金星が自分で光るから", "ウ　地球の影に入るから", "エ　大気がないから"],
            answer: "正解：ア　内惑星で太陽との位置関係が変わるから",
            explain: "金星は内惑星で、太陽に照らされた面を地球から見る角度が変わるため満ち欠けする。"
          },
          {
            q: "金星の満ち欠けの観測が支持した考えはどれか。",
            choices: ["ア　地動説", "イ　天動説", "ウ　平らな地球", "エ　宇宙は不変"],
            answer: "正解：ア　地動説",
            explain: "金星が太陽の周りを回ることを示し、太陽中心の地動説を裏づけた。"
          },
          {
            q: "金星が地球に近いときの見え方として正しいものはどれか。",
            choices: ["ア　大きく細い形に見える", "イ　小さく丸い形に見える", "ウ　いつも同じ大きさ", "エ　まったく見えない"],
            answer: "正解：ア　大きく細い形に見える",
            explain: "近いときは見かけが大きく、太陽との角度の関係で細い三日月形に見える。"
          }
        ]
      }
    ]
  },

  "jupiter-moons-scroll": {
    title: "木星の衛星",
    subtitle: "地球以外を回る天体の発見",
    hook: "木星のそばで毎晩位置を変える 4 つの点。それは何を意味していた？",
    lead:
      "ガリレオは望遠鏡で、木星のすぐそばに並ぶ 4 つの小さな点を見つけた。" +
      "夜ごとに位置を変えるそれらは、木星を回る衛星だった。" +
      "「すべては地球を中心に回る」という当時の常識を、この発見が大きく揺さぶった。",
    blocks: [
      {
        type: "note",
        heading: "ガリレオ衛星",
        text:
          "イオ・エウロパ・ガニメデ・カリストの 4 つ。木星の周りを公転しており、" +
          "地球以外の天体を中心に回る天体がある＝天動説への反証になった。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "木星には望遠鏡で見える 4 つの大きな衛星（ガリレオ衛星）がある。",
          "衛星は木星を中心に公転している。",
          "地球が唯一の中心ではないことを示し、地動説を後押しした。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "ガリレオが発見した木星の 4 つの衛星をまとめて何と呼ぶか。",
            choices: ["ア　ガリレオ衛星", "イ　ケプラー衛星", "ウ　メシエ衛星", "エ　ハッブル衛星"],
            answer: "正解：ア　ガリレオ衛星",
            explain: "イオ・エウロパ・ガニメデ・カリストの 4 衛星をガリレオ衛星と呼ぶ。"
          },
          {
            q: "木星の衛星の発見が示した重要な点はどれか。",
            choices: ["ア　地球以外を中心に回る天体がある", "イ　地球が宇宙の中心である", "ウ　星は動かない", "エ　太陽が地球を回る"],
            answer: "正解：ア　地球以外を中心に回る天体がある",
            explain: "衛星が木星を回ることは、すべてが地球中心という天動説への反証となった。"
          },
          {
            q: "ガリレオ衛星に含まれないものはどれか。",
            choices: ["ア　タイタン", "イ　イオ", "ウ　エウロパ", "エ　ガニメデ"],
            answer: "正解：ア　タイタン",
            explain: "タイタンは土星の衛星。ガリレオ衛星はイオ・エウロパ・ガニメデ・カリスト。"
          }
        ]
      }
    ]
  },

  "mars-retrograde-scroll": {
    title: "火星の逆行",
    subtitle: "惑星が逆走して見えるのはなぜか",
    hook: "いつもは西から東へ進む火星が、ときどき逆走する。星が気を変えた？",
    lead:
      "惑星は星座の間をふだん西から東へ動くが、火星はときおり立ち止まり、逆に東から西へ動いて見える。" +
      "これが逆行だ。実際に火星が後ろ向きに走るわけではない。" +
      "内側を速く回る地球が外側の火星を追い越すときに起こる、見かけの動きである。",
    blocks: [
      {
        type: "note",
        heading: "逆行は“追い越し”の見かけ",
        text:
          "内側の地球は外側の火星より速く公転する。地球が火星を内側から追い越す期間、" +
          "火星が背景の星に対して逆向きに動いて見える。地動説ならすっきり説明できる。"
      },
      {
        type: "compare",
        items: [
          {
            symbol: "地",
            label: "地動説の説明",
            text: "地球が外惑星を追い越すための見かけの動き。特別な仕掛けはいらない。"
          },
          {
            symbol: "天",
            label: "天動説の説明",
            text: "周転円という複雑な補助円を持ち出して、無理に説明する必要があった。"
          }
        ]
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "外惑星の逆行は、地球が追い越すことで生じる見かけの運動。",
          "実際に惑星が逆走しているわけではない。",
          "地動説では自然に、天動説では周転円で説明された。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "火星の逆行の主な原因はどれか。",
            choices: ["ア　地球が火星を内側から追い越すから", "イ　火星が実際に逆走するから", "ウ　火星が止まるから", "エ　太陽が動くから"],
            answer: "正解：ア　地球が火星を内側から追い越すから",
            explain: "内側を速く回る地球が外側の火星を追い越すとき、火星が逆向きに動いて見える。"
          },
          {
            q: "逆行を説明するために天動説が用いた仕組みはどれか。",
            choices: ["ア　周転円", "イ　万有引力", "ウ　年周視差", "エ　ドップラー効果"],
            answer: "正解：ア　周転円",
            explain: "天動説では惑星の逆行を、周転円という補助的な円運動で説明していた。"
          },
          {
            q: "火星の逆行についての正しい説明はどれか。",
            choices: ["ア　見かけの運動である", "イ　火星が実際に止まる", "ウ　火星が爆発する", "エ　地球が逆回転する"],
            answer: "正解：ア　見かけの運動である",
            explain: "逆行は地球と火星の位置関係による見かけの運動で、火星が本当に逆走するのではない。"
          }
        ]
      }
    ]
  },

  "saturn-kepler3-scroll": {
    title: "ケプラーの第 3 法則",
    subtitle: "遠い惑星ほど、ゆっくり回る",
    hook: "太陽から遠い惑星ほど 1 年が長い。その“長さ”には、きれいな法則がある？",
    lead:
      "水星の 1 年はわずか 88 日、土星は約 29 年。遠い惑星ほど公転に時間がかかる。" +
      "ケプラーは、この関係が偶然ではなく「公転周期の 2 乗が軌道の大きさの 3 乗に比例する」" +
      "という美しい法則になっていることを見抜いた。",
    blocks: [
      {
        type: "formula",
        expression: "P² = a³",
        where: "P ＝ 公転周期〔年〕　a ＝ 軌道長半径〔天文単位 AU〕",
        caption:
          "周期の 2 乗と軌道長半径の 3 乗が比例する。太陽からの距離が分かれば公転周期が計算できる。"
      },
      {
        type: "examples",
        heading: "法則を確かめる",
        columns: ["惑星", "a〔AU〕", "P〔年〕"],
        rows: [
          ["地球", "1.0", "1.0"],
          ["火星", "1.52", "約 1.88"],
          ["木星", "5.20", "約 11.9"]
        ],
        foot: "a³ の平方根が P になる。例：木星 5.2³≒141、√141≒11.9 年。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "ケプラーの第 3 法則：P² = a³（P は年、a は AU）。",
          "遠い（a が大きい）惑星ほど公転周期 P は長い。",
          "軌道の大きさから公転周期を、周期から距離を求められる。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "軌道長半径が 4 AU の天体の公転周期は何年か（P²＝a³）。",
            choices: ["ア　8 年", "イ　4 年", "ウ　16 年", "エ　64 年"],
            answer: "正解：ア　8 年",
            explain: "a³ ＝ 4³ ＝ 64、P ＝ √64 ＝ 8 年。"
          },
          {
            q: "ケプラーの第 3 法則が表す関係はどれか。",
            choices: ["ア　周期の 2 乗 ∝ 軌道長半径の 3 乗", "イ　周期 ∝ 距離", "ウ　周期の 3 乗 ∝ 距離の 2 乗", "エ　周期は距離によらない"],
            answer: "正解：ア　周期の 2 乗 ∝ 軌道長半径の 3 乗",
            explain: "P² = a³。公転周期の 2 乗が軌道長半径の 3 乗に比例する。"
          },
          {
            q: "太陽から遠い惑星ほど公転周期はどうなるか。",
            choices: ["ア　長くなる", "イ　短くなる", "ウ　変わらない", "エ　ゼロになる"],
            answer: "正解：ア　長くなる",
            explain: "a が大きいほど P も大きい。遠い惑星ほど 1 年（公転周期）が長くなる。"
          }
        ]
      }
    ]
  },

  "mercury-elongation-scroll": {
    title: "水星の最大離角",
    subtitle: "太陽のそばを離れない、つかまえにくい星",
    hook: "水星はなぜ、真夜中の空では決して見られないのだろう？",
    lead:
      "水星は太陽にいちばん近い内惑星。地球から見ると、いつも太陽のすぐ近くにあり、" +
      "太陽から大きく離れることがない。最も離れて見える“最大離角”のころ、" +
      "夕方の西空か明け方の東空で、ようやく観測のチャンスが訪れる。",
    blocks: [
      {
        type: "note",
        heading: "内惑星は太陽から離れられない",
        text:
          "内惑星は地球より内側を回るため、太陽から一定角度以上は離れて見えない。" +
          "水星の最大離角は約 28 度。真夜中の空には現れず、観測は薄明のころに限られる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "内惑星（水星・金星）は太陽から大きく離れて見えない。",
          "最も離れて見えるときが最大離角で、観測の好機。",
          "水星の最大離角は約 28 度。夕方の西空か明け方の東空で見える。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "水星が真夜中の空に見えないのはなぜか。",
            choices: ["ア　内惑星で太陽の近くにしか見えないから", "イ　暗すぎるから", "ウ　自転が速いから", "エ　地球の影に入るから"],
            answer: "正解：ア　内惑星で太陽の近くにしか見えないから",
            explain: "内惑星は太陽から一定以上離れて見えないため、太陽が沈んだ真夜中には見えない。"
          },
          {
            q: "内惑星が太陽から最も離れて見える位置を何と呼ぶか。",
            choices: ["ア　最大離角", "イ　近日点", "ウ　衝（しょう）", "エ　合（ごう）"],
            answer: "正解：ア　最大離角",
            explain: "内惑星が太陽から最も離れて見えるときを最大離角といい、観測しやすい。"
          },
          {
            q: "水星を観測しやすい時間帯はどれか。",
            choices: ["ア　夕方の西空か明け方の東空", "イ　真夜中の南の空", "ウ　一日中いつでも", "エ　正午の空"],
            answer: "正解：ア　夕方の西空か明け方の東空",
            explain: "太陽の近くにあるため、薄明の夕方西空・明け方東空が観測の好機となる。"
          }
        ]
      }
    ]
  },

  "sun-luminosity-scroll": {
    title: "太陽は恒星の基準",
    subtitle: "太陽をものさしに、星を測る",
    hook: "宇宙にあふれる星の明るさや重さ。何を“1”として比べればいい？",
    lead:
      "太陽は私たちにとって最も身近な恒星であり、性質を詳しく測れる唯一の星でもある。" +
      "そこで天文学では、太陽の光度を 1 L☉、質量を 1 M☉ という単位にして、" +
      "ほかの星が太陽の何倍明るいか・重いかで表す。太陽は宇宙のものさしなのだ。",
    blocks: [
      {
        type: "note",
        heading: "太陽単位で比べる",
        text:
          "L☉（太陽光度）や M☉（太陽質量）を基準にすると、星の性質が直感的に分かる。" +
          "例：『この星は太陽の 1000 倍の光度』のように表せる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "太陽は最も身近で、詳しく測れる基準の恒星。",
          "光度は 1 L☉、質量は 1 M☉ を単位に他の星を比べる。",
          "『太陽の何倍』という表し方が恒星研究の共通言語になる。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "恒星の明るさや質量を比べる基準に使われる星はどれか。",
            choices: ["ア　太陽", "イ　シリウス", "ウ　ベガ", "エ　北極星"],
            answer: "正解：ア　太陽",
            explain: "最も身近で詳しく測れる太陽を基準（1 L☉、1 M☉）にして他の星を比べる。"
          },
          {
            q: "「L☉」が表すものはどれか。",
            choices: ["ア　太陽の光度", "イ　太陽の半径", "ウ　太陽の温度", "エ　太陽の距離"],
            answer: "正解：ア　太陽の光度",
            explain: "L☉ は太陽の光度を表す単位。星の明るさを太陽の何倍かで表現する。"
          },
          {
            q: "ある星が「2 M☉」のとき意味するものはどれか。",
            choices: ["ア　太陽の 2 倍の質量", "イ　太陽の 2 倍の明るさ", "ウ　太陽の 2 倍の距離", "エ　太陽の半分の質量"],
            answer: "正解：ア　太陽の 2 倍の質量",
            explain: "M☉ は太陽質量の単位。2 M☉ は太陽の 2 倍の質量を意味する。"
          }
        ]
      }
    ]
  },

  "uranus-tilt-scroll": {
    title: "天王星の横倒し",
    subtitle: "自転軸が倒れた氷の惑星",
    hook: "ほかの惑星が“こま”のように回る中、ひとつだけ“転がる”惑星がある。どれ？",
    lead:
      "天王星は自転軸が約 98 度も傾き、ほぼ横倒しのまま太陽を回る氷巨大惑星だ。" +
      "そのため極が交互に長く太陽へ向き、数十年ごとに極端な昼と夜が訪れる。" +
      "巨大天体の衝突など、誕生時の激しい出来事の名残と考えられている。",
    blocks: [
      {
        type: "note",
        heading: "横倒しの自転",
        text:
          "ほとんどの惑星の自転軸は公転面に対してほぼ立っているが、天王星は約 98 度傾く。" +
          "横倒しのまま公転するため、極地方が交互に長期間、昼と夜になる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "天王星の自転軸は約 98 度傾き、ほぼ横倒し。",
          "横倒しのまま公転するため、極端な季節変化が生じる。",
          "天王星・海王星は氷を多く含む氷巨大惑星。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "天王星の自転軸の傾きの目安はどれか。",
            choices: ["ア　約 98 度", "イ　約 23 度", "ウ　約 0 度", "エ　約 45 度"],
            answer: "正解：ア　約 98 度",
            explain: "天王星は自転軸が約 98 度傾き、ほぼ横倒しの状態で太陽を回る。"
          },
          {
            q: "天王星が「横倒し」と言われる理由はどれか。",
            choices: ["ア　自転軸が大きく傾いているから", "イ　公転していないから", "ウ　自転していないから", "エ　太陽に近いから"],
            answer: "正解：ア　自転軸が大きく傾いているから",
            explain: "自転軸が約 98 度傾き、横倒しのまま公転するためそう呼ばれる。"
          },
          {
            q: "天王星・海王星をまとめて何と呼ぶか。",
            choices: ["ア　氷巨大惑星", "イ　地球型惑星", "ウ　巨大ガス惑星", "エ　準惑星"],
            answer: "正解：ア　氷巨大惑星",
            explain: "天王星・海王星は氷成分を多く含むため、氷巨大惑星に分類される。"
          }
        ]
      }
    ]
  },

  "neptune-calculation-scroll": {
    title: "計算で見つかった惑星",
    subtitle: "ペン先で発見された海王星",
    hook: "望遠鏡で探す前に、紙の上の計算で“ここにいる”と当てられた惑星がある。",
    lead:
      "天王星の動きには、説明のつかない小さなずれがあった。研究者は「未知の惑星の引力では？」と考え、" +
      "その位置を計算で予言した。望遠鏡をその方向へ向けると――本当に海王星があった。" +
      "重力の理論と観測がぴたりと噛み合った、科学史に残る発見だ。",
    blocks: [
      {
        type: "note",
        heading: "理論が観測を導いた",
        text:
          "天王星の軌道のずれを、未知の惑星の万有引力で説明できると考え、位置を逆算。" +
          "予言された場所で海王星が見つかった。重力理論の正しさを示す出来事になった。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "海王星は天王星の軌道のずれから位置を計算して発見された。",
          "万有引力の理論にもとづく予言が観測で確かめられた。",
          "理論と観測が結びついた天文学の代表的な成功例。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "海王星発見の手がかりになったものはどれか。",
            choices: ["ア　天王星の軌道のずれ", "イ　火星の逆行", "ウ　金星の満ち欠け", "エ　太陽の黒点"],
            answer: "正解：ア　天王星の軌道のずれ",
            explain: "天王星の軌道のずれを未知の惑星の引力で説明し、その位置を計算して海王星を発見した。"
          },
          {
            q: "海王星の位置の予言に使われた理論はどれか。",
            choices: ["ア　万有引力", "イ　ドップラー効果", "ウ　ウィーンの変位則", "エ　ハッブルの法則"],
            answer: "正解：ア　万有引力",
            explain: "万有引力の理論で天王星に及ぶ未知の惑星の影響を計算し、位置を予言した。"
          },
          {
            q: "海王星発見が示した重要な点はどれか。",
            choices: ["ア　理論の計算が観測を導けること", "イ　望遠鏡が不要なこと", "ウ　地球が中心であること", "エ　惑星は動かないこと"],
            answer: "正解：ア　理論の計算が観測を導けること",
            explain: "計算による予言が実際の発見につながり、理論と観測の一致を鮮やかに示した。"
          }
        ]
      }
    ]
  },

  "geocentric-model-scroll": {
    title: "天動説",
    subtitle: "地球を中心に宇宙を描いた時代",
    hook: "足もとの大地は動かない――そう感じる素直さから、宇宙像は始まった。",
    lead:
      "古代の人々は、動かない地球を中心に、太陽も月も星もその周りを回ると考えた。これが天動説。" +
      "日々の空の動きはうまく説明できたが、惑星がときどき逆行することだけは難物で、" +
      "周転円という複雑な仕組みを足してしのいでいた。",
    blocks: [
      {
        type: "note",
        heading: "地球中心と周転円",
        text:
          "プトレマイオスらが体系化。すべての天体が地球を中心に回るとし、" +
          "惑星の逆行は周転円（小さな円運動）を重ねて説明した。仕組みは複雑だった。"
      },
      {
        type: "compare",
        items: [
          {
            symbol: "天",
            label: "天動説",
            text: "地球が中心。逆行を説明するのに周転円が必要で、体系が複雑になった。"
          },
          {
            symbol: "地",
            label: "地動説",
            text: "太陽が中心。逆行は地球の追い越しで自然に説明でき、すっきりする。"
          }
        ]
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "天動説は地球を中心に天体が回るとする宇宙像。",
          "惑星の逆行の説明に周転円という複雑な仕組みを要した。",
          "のちに地動説へと置きかえられていった。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "天動説の中心に置かれた天体はどれか。",
            choices: ["ア　地球", "イ　太陽", "ウ　月", "エ　木星"],
            answer: "正解：ア　地球",
            explain: "天動説は地球を宇宙の中心とし、他の天体がその周りを回ると考えた。"
          },
          {
            q: "天動説が惑星の逆行を説明するのに使った仕組みはどれか。",
            choices: ["ア　周転円", "イ　万有引力", "ウ　年周視差", "エ　核融合"],
            answer: "正解：ア　周転円",
            explain: "逆行を説明するため、惑星に周転円という補助的な円運動を重ねた。"
          },
          {
            q: "天動説の弱点として最も大きかったのはどれか。",
            choices: ["ア　惑星の逆行の説明が複雑", "イ　星が見えないこと", "ウ　太陽が暗いこと", "エ　月の満ち欠け"],
            answer: "正解：ア　惑星の逆行の説明が複雑",
            explain: "逆行を周転円で無理に説明する必要があり、体系が複雑になった点が弱点だった。"
          }
        ]
      }
    ]
  },

  "heliocentric-theory-scroll": {
    title: "地動説",
    subtitle: "宇宙の中心を太陽に置きかえる",
    hook: "「動いていないのは地球ではなく、太陽のほうだ」――発想の大逆転。",
    lead:
      "コペルニクスは、太陽を中心に地球を含む惑星が回ると考えた。これが地動説。" +
      "悩みの種だった惑星の逆行は、内側の地球が外惑星を追い越す見かけの動きとして、" +
      "複雑な仕掛けなしにすっきり説明できた。のちの天文学の土台となる転換だった。",
    blocks: [
      {
        type: "note",
        heading: "太陽中心ですっきり",
        text:
          "地動説では太陽が中心。惑星の逆行は地球の公転による見かけの運動として自然に説明できる。" +
          "金星の満ち欠けや木星の衛星の発見が、この考えを後押しした。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "地動説は太陽を中心に惑星が回るとする宇宙像（コペルニクス）。",
          "惑星の逆行を地球の追い越しとして自然に説明できる。",
          "ガリレオらの観測が地動説を支えた。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "地動説の中心に置かれた天体はどれか。",
            choices: ["ア　太陽", "イ　地球", "ウ　月", "エ　北極星"],
            answer: "正解：ア　太陽",
            explain: "地動説は太陽を中心とし、地球を含む惑星がその周りを回ると考える。"
          },
          {
            q: "地動説を最初に体系的に唱えたとされる人物はどれか。",
            choices: ["ア　コペルニクス", "イ　プトレマイオス", "ウ　アリストテレス", "エ　ニュートン"],
            answer: "正解：ア　コペルニクス",
            explain: "コペルニクスが太陽中心の地動説を体系的に提唱した。"
          },
          {
            q: "地動説で惑星の逆行はどう説明されるか。",
            choices: ["ア　地球が外惑星を追い越す見かけの動き", "イ　惑星が実際に逆走する", "ウ　周転円による", "エ　太陽が動くため"],
            answer: "正解：ア　地球が外惑星を追い越す見かけの動き",
            explain: "地球の公転で外惑星を追い越すときに生じる見かけの運動として説明される。"
          }
        ]
      }
    ]
  },

  "telescope-observation-scroll": {
    title: "望遠鏡による観測",
    subtitle: "肉眼を超えて宇宙が開けた",
    hook: "ただのレンズ 2 枚が、人類の宇宙観をひっくり返した。何が見えたのか？",
    lead:
      "ガリレオは自作の望遠鏡を夜空に向け、肉眼では見えなかった世界を次々と発見した。" +
      "月のクレーター、木星の衛星、金星の満ち欠け、天の川を作る無数の星々。" +
      "これらの新事実は、地動説を強く後押しし、観測天文学の幕を開けた。",
    blocks: [
      {
        type: "note",
        heading: "望遠鏡が見せた新事実",
        text:
          "月の凹凸、木星の 4 衛星、金星の満ち欠け、天の川が星の集まりであること――。" +
          "肉眼の限界を超えた観測が、宇宙の理解を一気に進めた。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "ガリレオは望遠鏡で月・木星の衛星・金星の満ち欠けなどを観測した。",
          "これらの発見は地動説を支持する証拠になった。",
          "肉眼天文学から観測天文学への転換点となった。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "ガリレオが望遠鏡で観測したものに含まれないのはどれか。",
            choices: ["ア　ブラックホール", "イ　月のクレーター", "ウ　木星の衛星", "エ　金星の満ち欠け"],
            answer: "正解：ア　ブラックホール",
            explain: "ブラックホールは現代の観測対象。ガリレオは月・木星の衛星・金星の満ち欠けなどを見た。"
          },
          {
            q: "望遠鏡観測がもたらした天文学の変化はどれか。",
            choices: ["ア　肉眼天文学から観測天文学へ", "イ　天文学の終わり", "ウ　星座の消滅", "エ　暦の廃止"],
            answer: "正解：ア　肉眼天文学から観測天文学へ",
            explain: "望遠鏡により肉眼では見えない事実が分かり、観測天文学が始まった。"
          },
          {
            q: "ガリレオの観測が支持した説はどれか。",
            choices: ["ア　地動説", "イ　天動説", "ウ　平らな地球", "エ　宇宙不変説"],
            answer: "正解：ア　地動説",
            explain: "金星の満ち欠けや木星の衛星の発見が、太陽中心の地動説を裏づけた。"
          }
        ]
      }
    ]
  },

  "universal-gravity-scroll": {
    title: "万有引力",
    subtitle: "天と地を一つの法則で結ぶ",
    hook: "落ちるリンゴと、空を回る月。じつは同じ力に従っているとしたら？",
    lead:
      "ニュートンは、地上で物が落ちる力と、月や惑星を軌道に保つ力が同じものだと見抜いた。" +
      "すべての物体は質量に応じて引き合い、その力は距離の 2 乗に反比例する。" +
      "この万有引力の法則で、惑星も月も彗星の運動も、一つの式で説明できるようになった。",
    blocks: [
      {
        type: "formula",
        expression: "F = G × m₁m₂ / r²",
        where: "F ＝ 引力　m₁,m₂ ＝ 2 物体の質量　r ＝ 距離　G ＝ 万有引力定数",
        caption:
          "引力は質量の積に比例し、距離の 2 乗に反比例する。離れるほど急速に弱くなる。"
      },
      {
        type: "note",
        heading: "天体運動を統一",
        text:
          "万有引力により、ケプラーの法則も説明でき、惑星・月・彗星・連星の運動を" +
          "同じ原理で扱えるようになった。天文学が“力学”として理解された。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "万有引力：すべての物体は質量に応じて引き合う。",
          "力は質量の積に比例し、距離の 2 乗に反比例（F＝Gm₁m₂/r²）。",
          "地上の落下と天体の運動を一つの法則で説明する。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "万有引力の大きさは 2 物体の距離が 2 倍になるとどうなるか。",
            choices: ["ア　1/4 になる", "イ　1/2 になる", "ウ　2 倍になる", "エ　変わらない"],
            answer: "正解：ア　1/4 になる",
            explain: "引力は距離の 2 乗に反比例。距離 2 倍なら 1/2² ＝ 1/4 になる。"
          },
          {
            q: "万有引力の法則を確立した人物はどれか。",
            choices: ["ア　ニュートン", "イ　コペルニクス", "ウ　ケプラー", "エ　ハッブル"],
            answer: "正解：ア　ニュートン",
            explain: "ニュートンが万有引力の法則を確立し、天体と地上の運動を統一的に説明した。"
          },
          {
            q: "万有引力の大きさが比例するものはどれか。",
            choices: ["ア　2 物体の質量の積", "イ　2 物体の温度の和", "ウ　2 物体の色", "エ　2 物体の年齢"],
            answer: "正解：ア　2 物体の質量の積",
            explain: "引力は 2 物体の質量の積に比例し、距離の 2 乗に反比例する。"
          }
        ]
      }
    ]
  },

  "proper-motion-scroll": {
    title: "固有運動",
    subtitle: "星座の形は永遠ではない",
    hook: "“動かない星”たち。じつは長い年月をかけて、こっそり位置を変えている？",
    lead:
      "夜空の星は固定された背景に見える。だが恒星も宇宙空間を運動しており、" +
      "天球上での見かけの位置が少しずつずれていく。これが固有運動だ。" +
      "変化はごくわずかだが、何万年もたてば星座の形そのものが崩れてしまう。",
    blocks: [
      {
        type: "note",
        heading: "天球をよぎる動き",
        text:
          "固有運動は、星が天球上を 1 年あたりに動く角度（秒角／年）で表す。" +
          "近い星ほど大きく見えやすい。バーナード星は最大級で、年に約 10 秒角も動く。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "固有運動は恒星が天球上を移動する見かけの角度（秒角／年）。",
          "恒星は固定背景ではなく、宇宙空間を運動している。",
          "長い年月で星座の形が変わる。バーナード星は固有運動が最大級。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "固有運動とは何を表すか。",
            choices: ["ア　恒星が天球上を動く見かけの角度", "イ　地球の自転", "ウ　星の明るさの変化", "エ　星の色の変化"],
            answer: "正解：ア　恒星が天球上を動く見かけの角度",
            explain: "固有運動は恒星が天球上を 1 年あたりに移動する見かけの角度のこと。"
          },
          {
            q: "固有運動が大きいことで知られる星はどれか。",
            choices: ["ア　バーナード星", "イ　北極星", "ウ　太陽", "エ　シリウス"],
            answer: "正解：ア　バーナード星",
            explain: "バーナード星は年に約 10 秒角も動き、固有運動が最大級として知られる。"
          },
          {
            q: "固有運動から分かることはどれか。",
            choices: ["ア　星座の形は長い年月で変わること", "イ　星は永遠に動かないこと", "ウ　地球が中心であること", "エ　星が爆発すること"],
            answer: "正解：ア　星座の形は長い年月で変わること",
            explain: "恒星が動くため、何万年もたつと星座の形が崩れて変わっていく。"
          }
        ]
      }
    ]
  },

  "aberration-scroll": {
    title: "光行差",
    subtitle: "地球が動いている、何よりの証拠",
    hook: "走って雨の中を進むと、傘を前に傾けたくなる。星の光でも同じことが起きる？",
    lead:
      "雨の中を走ると、雨が前から降ってくるように感じて傘を前へ傾ける。" +
      "地球が公転で高速移動しているため、星の光も少し前方からやってくるように見え、" +
      "見かけの位置がわずかにずれる。これが光行差。地球が動いている動かぬ証拠になった。",
    blocks: [
      {
        type: "note",
        heading: "公転がもたらす見かけのずれ",
        text:
          "光行差は地球の公転速度によって生じ、星の見かけの位置が進行方向へ最大約 20.5 秒角ずれる。" +
          "ブラッドリーが発見し、地球が公転している証拠とされた。"
      },
      {
        type: "compare",
        items: [
          {
            symbol: "差",
            label: "光行差",
            text: "地球の運動（速度）による見かけのずれ。星の距離には関係しない。"
          },
          {
            symbol: "視",
            label: "年周視差",
            text: "地球の位置の違いによるずれ。近い星ほど大きく、距離測定に使える。"
          }
        ]
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "光行差は地球の公転による星の見かけのずれ（最大約 20.5 秒角）。",
          "地球が動いている証拠としてブラッドリーが発見した。",
          "速度が原因の光行差と、位置が原因の年周視差は別物。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "光行差が生じる原因はどれか。",
            choices: ["ア　地球の公転（運動）", "イ　星の温度", "ウ　星の自転", "エ　月の引力"],
            answer: "正解：ア　地球の公転（運動）",
            explain: "光行差は地球が公転で高速移動するために、星の光が前方からくるように見える現象。"
          },
          {
            q: "光行差の発見が示したことはどれか。",
            choices: ["ア　地球が動いていること", "イ　地球が中心であること", "ウ　星が動かないこと", "エ　太陽が地球を回ること"],
            answer: "正解：ア　地球が動いていること",
            explain: "光行差は地球の運動によって生じるため、地球が公転している証拠になった。"
          },
          {
            q: "光行差と年周視差の違いとして正しいものはどれか。",
            choices: ["ア　光行差は速度、年周視差は位置が原因", "イ　どちらも星の温度が原因", "ウ　どちらも距離測定に使う", "エ　違いはない"],
            answer: "正解：ア　光行差は速度、年周視差は位置が原因",
            explain: "光行差は地球の速度、年周視差は地球の位置の違いによる。後者は距離測定に使える。"
          }
        ]
      }
    ]
  },

  "helium-solar-spectrum-scroll": {
    title: "太陽スペクトルとヘリウム",
    subtitle: "地上より先に、太陽で見つかった元素",
    hook: "地球で一度も見たことのない元素を、太陽の光だけで発見できる？",
    lead:
      "太陽の光をプリズムで分けると、たくさんの線（スペクトル線）が現れる。" +
      "その中に、当時知られたどの元素にも当てはまらない未知の線があった。" +
      "それは新元素ヘリウムだった。太陽（helios）にちなんで名づけられ、地上での発見より先だった。",
    blocks: [
      {
        type: "note",
        heading: "スペクトルは元素の指紋",
        text:
          "元素はそれぞれ固有の波長に線を出す。太陽スペクトルの未知の線から、" +
          "地上でまだ見つかっていなかったヘリウムの存在が分かった。分光は元素を見分ける道具。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "スペクトル線は元素ごとに固有で、元素の“指紋”になる。",
          "ヘリウムは太陽スペクトルから、地上での発見より先に見つかった。",
          "名前は太陽（helios）に由来する。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "ヘリウムが最初に発見された場所はどれか。",
            choices: ["ア　太陽のスペクトル", "イ　地中の鉱石", "ウ　海水", "エ　月の石"],
            answer: "正解：ア　太陽のスペクトル",
            explain: "ヘリウムは太陽スペクトルの未知の線として、地上での発見より先に見つかった。"
          },
          {
            q: "スペクトル線が役立つのはなぜか。",
            choices: ["ア　元素ごとに固有だから", "イ　すべての元素で同じだから", "ウ　温度に無関係だから", "エ　色がないから"],
            answer: "正解：ア　元素ごとに固有だから",
            explain: "元素は固有の波長に線を出すため、スペクトルから含まれる元素を特定できる。"
          },
          {
            q: "「ヘリウム」の名の由来はどれか。",
            choices: ["ア　太陽（helios）", "イ　月", "ウ　地球", "エ　発見者の名前"],
            answer: "正解：ア　太陽（helios）",
            explain: "太陽のスペクトルで見つかったことから、ギリシャ語の太陽 helios にちなんで名づけられた。"
          }
        ]
      }
    ]
  },

  "cepheid-pl-scroll": {
    title: "セファイドの周期光度関係",
    subtitle: "点滅の速さが、本当の明るさを教える",
    hook: "星の明るさは距離でごまかされる。でも“点滅の速さ”は嘘をつかないとしたら？",
    lead:
      "セファイド変光星は規則正しく明るさが変わる星で、変光の周期が長いものほど本来明るい。" +
      "この周期光度関係を使えば、点滅の周期を測るだけで星の本当の明るさ（絶対等級）が分かり、" +
      "見かけの明るさと比べて距離を求められる。銀河までの距離を測る“標準光源”になった。",
    blocks: [
      {
        type: "note",
        heading: "周期 → 本当の明るさ → 距離",
        text:
          "周期が長いほど高光度、という関係があるので、周期から絶対等級が決まる。" +
          "それと見かけの等級を比べれば、距離指数から距離がわかる（[[絶対等級]] と連携）。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "セファイドは変光周期が長いほど本来明るい（周期光度関係）。",
          "周期を測れば絶対等級が分かり、見かけと比べて距離を求められる。",
          "銀河までの距離を測る標準光源として重要。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "セファイドの周期光度関係で、変光周期が長い星はどうか。",
            choices: ["ア　本来明るい", "イ　本来暗い", "ウ　明るさは無関係", "エ　必ず赤い"],
            answer: "正解：ア　本来明るい",
            explain: "周期が長いセファイドほど絶対等級が大きい（明るい）という関係がある。"
          },
          {
            q: "セファイドが距離測定に使えるのはなぜか。",
            choices: ["ア　周期から本当の明るさが分かるから", "イ　すべて同じ距離にあるから", "ウ　動かないから", "エ　色が同じだから"],
            answer: "正解：ア　周期から本当の明るさが分かるから",
            explain: "周期→絶対等級が分かり、見かけの明るさと比べて距離を求められる。"
          },
          {
            q: "セファイドのように距離測定の基準になる天体を何と呼ぶか。",
            choices: ["ア　標準光源", "イ　暗黒星", "ウ　恒星間物質", "エ　超新星残骸"],
            answer: "正解：ア　標準光源",
            explain: "本来の明るさが分かり距離測定に使える天体を標準光源という。"
          }
        ]
      }
    ]
  },

  "hr-diagram-scroll": {
    title: "HR 図",
    subtitle: "星の一生を 1 枚の地図にする",
    hook: "何千もの星を、たった 2 つのものさしで並べると――不思議な“地図”が現れる。",
    lead:
      "HR 図は、横軸に表面温度（左ほど高温）、縦軸に光度（上ほど明るい）をとって星を並べた図。" +
      "すると星は散らばらず、左上から右下へ伸びる帯（主系列）や、右上の巨星、左下の白色矮星など、" +
      "決まった場所に集まる。星の種類や進化の段階が一目で読み取れる。",
    blocks: [
      {
        type: "note",
        heading: "温度と光度で整理する",
        text:
          "横軸＝表面温度（スペクトル型）、縦軸＝光度（絶対等級）。" +
          "多くの星は主系列という帯に並び、進化が進むと巨星や白色矮星の領域へ移る。"
      },
      {
        type: "examples",
        heading: "HR 図のおもな住人",
        columns: ["位置", "種類", "特徴"],
        rows: [
          ["左上→右下の帯", "主系列星", "水素核融合中。太陽もここ"],
          ["右上", "巨星・超巨星", "低温だが大きく明るい"],
          ["左下", "白色矮星", "高温だが小さく暗い"]
        ],
        foot: "同じ温度でも光度が違えば、星の大きさ（半径）が違う。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "HR 図は横軸＝表面温度、縦軸＝光度で星を並べた図。",
          "多くの星は主系列という帯に分布する。",
          "巨星は右上、白色矮星は左下。星の進化段階が読める。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "HR 図の 2 つの軸の組み合わせはどれか。",
            choices: ["ア　表面温度と光度", "イ　距離と質量", "ウ　自転と公転", "エ　年齢と名前"],
            answer: "正解：ア　表面温度と光度",
            explain: "HR 図は横軸に表面温度（スペクトル型）、縦軸に光度（絶対等級）をとる。"
          },
          {
            q: "HR 図で多くの星が並ぶ帯を何と呼ぶか。",
            choices: ["ア　主系列", "イ　白色矮星列", "ウ　超新星列", "エ　暗黒帯"],
            answer: "正解：ア　主系列",
            explain: "水素核融合をしている多くの星は、主系列という帯に分布する。"
          },
          {
            q: "HR 図で白色矮星があるのはどのあたりか。",
            choices: ["ア　左下（高温・低光度）", "イ　右上（低温・高光度）", "ウ　中央", "エ　右下"],
            answer: "正解：ア　左下（高温・低光度）",
            explain: "白色矮星は高温だが小さく暗いため、HR 図の左下に位置する。"
          }
        ]
      }
    ]
  },

  "white-dwarf-scroll": {
    title: "白色矮星",
    subtitle: "星の燃えかすが残す小さな高密度天体",
    hook: "角砂糖ひとつ分で 1 トン――そんな星の“なれの果て”がある。",
    lead:
      "太陽くらいの星は一生の終わりに外層を放出し、中心部だけが残る。これが白色矮星。" +
      "大きさは地球ほどなのに、質量は太陽級。物質がぎゅっと詰まった超高密度天体だ。" +
      "新たに核融合はせず、余熱でゆっくり冷えながら長い時間をかけて暗くなっていく。",
    blocks: [
      {
        type: "note",
        heading: "小さく重い、冷えゆく星",
        text:
          "白色矮星は核融合を終えた星の中心核。電子の縮退圧で自らを支える。" +
          "支えられる質量には上限（チャンドラセカール限界、約 1.4 太陽質量）がある。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "白色矮星は太陽程度の星の最終形で、地球サイズの高密度天体。",
          "新たな核融合はせず、余熱で冷えながら暗くなる。",
          "支えられる質量の上限はチャンドラセカール限界（約 1.4 太陽質量）。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "白色矮星の大きさと質量の組み合わせとして正しいものはどれか。",
            choices: ["ア　地球ほどの大きさで太陽級の質量", "イ　太陽ほどの大きさで地球級の質量", "ウ　銀河ほど大きい", "エ　質量はほぼゼロ"],
            answer: "正解：ア　地球ほどの大きさで太陽級の質量",
            explain: "白色矮星は地球サイズに太陽級の質量が詰まった超高密度天体。"
          },
          {
            q: "白色矮星はどんな星の最終形か。",
            choices: ["ア　太陽程度の質量の星", "イ　最も重い星だけ", "ウ　惑星", "エ　銀河"],
            answer: "正解：ア　太陽程度の質量の星",
            explain: "太陽くらいの星が外層を放出し、中心核が残って白色矮星になる。"
          },
          {
            q: "白色矮星が支えられる質量の上限を何と呼ぶか。",
            choices: ["ア　チャンドラセカール限界", "イ　ハッブル限界", "ウ　ロッシュ限界", "エ　シュワルツシルト半径"],
            answer: "正解：ア　チャンドラセカール限界",
            explain: "白色矮星の質量上限は約 1.4 太陽質量で、チャンドラセカール限界と呼ばれる。"
          }
        ]
      }
    ]
  },

  "stellar-fusion-scroll": {
    title: "恒星の核融合",
    subtitle: "星が輝き続けるエネルギーの源",
    hook: "太陽は何十億年も燃え続けている。その“燃料”の正体は何だろう？",
    lead:
      "星の中心は超高温・高圧。そこでは水素の原子核が融合してヘリウムになる核融合が起きている。" +
      "このときわずかに減った質量が、莫大なエネルギーに変わって星を輝かせる。" +
      "水素を燃やして主系列星として安定している間が、星の一生で最も長い時期だ。",
    blocks: [
      {
        type: "formula",
        expression: "E = m c²",
        where: "E ＝ エネルギー　m ＝ 質量　c ＝ 光速",
        caption:
          "核融合でわずかに減った質量 m が、莫大なエネルギー E に変わる。これが星の輝きの源。"
      },
      {
        type: "note",
        heading: "水素を燃やす主系列星",
        text:
          "中心で水素→ヘリウムの核融合をしている星が主系列星。" +
          "燃料の水素がある間は安定して輝き、これが恒星の一生で最も長い段階になる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "恒星のエネルギー源は中心部の水素核融合（水素→ヘリウム）。",
          "減った質量がエネルギーに変わる（E＝mc²）。",
          "水素を燃やす主系列星の段階が一生で最も長い。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "主系列星の中心で起きている反応はどれか。",
            choices: ["ア　水素がヘリウムになる核融合", "イ　鉄が燃える化学反応", "ウ　核分裂", "エ　反応は起きていない"],
            answer: "正解：ア　水素がヘリウムになる核融合",
            explain: "主系列星は中心で水素をヘリウムに変える核融合を行い、輝いている。"
          },
          {
            q: "核融合で星が輝くしくみを表す式はどれか。",
            choices: ["ア　E＝mc²", "イ　P²＝a³", "ウ　F＝ma", "エ　d＝1/p"],
            answer: "正解：ア　E＝mc²",
            explain: "融合で減った質量がエネルギーに変わる関係 E＝mc² が星の輝きを支える。"
          },
          {
            q: "恒星の一生で最も長い段階はどれか。",
            choices: ["ア　主系列星の段階", "イ　白色矮星の段階", "ウ　超新星爆発", "エ　星間雲の段階"],
            answer: "正解：ア　主系列星の段階",
            explain: "中心の水素を燃やす主系列星の時期が、恒星の一生で最も長く続く。"
          }
        ]
      }
    ]
  },

  "nucleosynthesis-scroll": {
    title: "元素の合成",
    subtitle: "私たちは星の中で作られた",
    hook: "あなたの体の炭素も、骨のカルシウムも――どこで生まれたか知っているだろうか？",
    lead:
      "宇宙の初めにあったのは、ほとんど水素とヘリウムだけ。炭素や酸素、鉄などの重い元素は、" +
      "星の中心の核融合や、超新星爆発の中で作られた。星が一生をかけて元素を合成し、" +
      "ばらまいたものから次の星や惑星、そして私たちの体ができている。",
    blocks: [
      {
        type: "note",
        heading: "軽い元素から重い元素へ",
        text:
          "恒星内部では核融合で炭素・酸素などが、最終的に鉄付近まで作られる。" +
          "鉄より重い元素は、超新星爆発など激しい現象の中で合成される。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "宇宙初期は水素とヘリウムが大部分だった。",
          "重い元素は恒星内部の核融合や超新星爆発で作られる。",
          "鉄あたりまでは恒星内、それより重い元素は超新星などで合成。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "宇宙の初めに大部分を占めていた元素はどれか。",
            choices: ["ア　水素とヘリウム", "イ　鉄と金", "ウ　炭素と酸素", "エ　ウラン"],
            answer: "正解：ア　水素とヘリウム",
            explain: "宇宙初期はほとんど水素とヘリウムで、重い元素はのちに星の中で作られた。"
          },
          {
            q: "鉄より重い元素が主に作られる現象はどれか。",
            choices: ["ア　超新星爆発など", "イ　惑星の自転", "ウ　彗星の接近", "エ　月の満ち欠け"],
            answer: "正解：ア　超新星爆発など",
            explain: "恒星内の核融合は鉄付近まで。鉄より重い元素は超新星爆発などで合成される。"
          },
          {
            q: "「私たちは星の灰」と言われる理由はどれか。",
            choices: ["ア　体の重い元素が星で作られたから", "イ　体が燃えているから", "ウ　星に住んでいるから", "エ　星が地球を作ったから"],
            answer: "正解：ア　体の重い元素が星で作られたから",
            explain: "炭素や鉄など体を作る重い元素は、過去の星の中で合成されたものに由来する。"
          }
        ]
      }
    ]
  },

  "pulsar-scroll": {
    title: "パルサー",
    subtitle: "宇宙の灯台、高速で回る中性子星",
    hook: "宇宙から、時計よりも正確な“点滅信号”が届いた。送り主は誰？",
    lead:
      "規則正しい電波のパルスが宇宙から届くのが見つかったとき、人々は一瞬、宇宙人の信号かと考えた。" +
      "正体は高速で自転する中性子星＝パルサーだった。強い磁場から出るビームが、" +
      "灯台のように地球をかすめるたびにパルスとして観測される。",
    blocks: [
      {
        type: "note",
        heading: "回転する中性子星",
        text:
          "中性子星は超新星爆発の後に残る超高密度の天体。高速で自転し、磁極から電波ビームを出す。" +
          "ビームが地球を向く瞬間ごとにパルスが届くので、周期は非常に正確。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "パルサーは高速自転する中性子星。",
          "磁極からのビームが灯台のように回り、規則的なパルスとして観測される。",
          "中性子星は超新星爆発の後に残る超高密度天体。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "パルサーの正体はどれか。",
            choices: ["ア　高速自転する中性子星", "イ　太陽くらいの普通の星", "ウ　大きな惑星", "エ　彗星"],
            answer: "正解：ア　高速自転する中性子星",
            explain: "パルサーは高速で自転する中性子星で、規則的な電波パルスを出す。"
          },
          {
            q: "パルサーが規則的なパルスを出すしくみはどれか。",
            choices: ["ア　ビームが灯台のように回るから", "イ　爆発を繰り返すから", "ウ　膨張収縮するから", "エ　距離が変わるから"],
            answer: "正解：ア　ビームが灯台のように回るから",
            explain: "磁極から出るビームが自転で回り、地球を向くたびにパルスが届く。"
          },
          {
            q: "中性子星ができるきっかけはどれか。",
            choices: ["ア　超新星爆発", "イ　惑星の衝突", "ウ　星の誕生", "エ　日食"],
            answer: "正解：ア　超新星爆発",
            explain: "重い星の超新星爆発の後に、中心部が押し固められて中性子星が残る。"
          }
        ]
      }
    ]
  },

  "sn1987a-scroll": {
    title: "超新星 1987A",
    subtitle: "ニュートリノで“見た”爆発",
    hook: "光が届くより前に、地下の装置がその爆発を感じ取っていた――どうやって？",
    lead:
      "1987 年、隣の銀河（大マゼラン雲）で超新星 1987A が観測された。近年では珍しい近距離の超新星だ。" +
      "このとき爆発から放たれたニュートリノが地球で検出され、" +
      "重い星が最後に中心核を崩壊させて爆発するという理論を、実際の観測で裏づけた。",
    blocks: [
      {
        type: "note",
        heading: "光だけでなく素粒子で観測",
        text:
          "超新星爆発では大量のニュートリノが放たれる。SN1987A ではこれが検出され、" +
          "爆発のしくみ（中心核の崩壊）を直接的に確かめる手がかりになった。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "SN1987A は大マゼラン雲で起きた近距離の超新星（1987 年）。",
          "爆発で放たれたニュートリノが地球で検出された。",
          "重い星の中心核崩壊による爆発という理論を観測で裏づけた。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "SN1987A の観測で検出され、注目された素粒子はどれか。",
            choices: ["ア　ニュートリノ", "イ　電子だけ", "ウ　陽子だけ", "エ　検出されていない"],
            answer: "正解：ア　ニュートリノ",
            explain: "SN1987A では爆発で放たれたニュートリノが地球で検出された。"
          },
          {
            q: "SN1987A が起きた場所はどれか。",
            choices: ["ア　大マゼラン雲", "イ　太陽系内", "ウ　地球の大気", "エ　M87 銀河"],
            answer: "正解：ア　大マゼラン雲",
            explain: "SN1987A は天の川のすぐ隣にある大マゼラン雲で観測された超新星。"
          },
          {
            q: "SN1987A の観測が裏づけたことはどれか。",
            choices: ["ア　重い星の中心核崩壊による爆発", "イ　星は爆発しないこと", "ウ　地球が中心であること", "エ　太陽が爆発したこと"],
            answer: "正解：ア　重い星の中心核崩壊による爆発",
            explain: "ニュートリノ検出により、重い星が中心核を崩壊させて爆発する理論が確かめられた。"
          }
        ]
      }
    ]
  },

  "xray-blackhole-scroll": {
    title: "X 線連星とブラックホール",
    subtitle: "見えない天体を、落ちるガスの輝きで暴く",
    hook: "光さえ出られないブラックホール。それでも“居場所”が分かるのはなぜ？",
    lead:
      "ブラックホール自体は光を出さないが、相手の星から吸い込んだガスが周りに渦巻く円盤を作る。" +
      "そのガスは猛烈な高温になり、強い X 線を放つ。この X 線をたどることで、" +
      "見えないブラックホールの存在を間接的にとらえられる。はくちょう座 X-1 が有名な例だ。",
    blocks: [
      {
        type: "note",
        heading: "降着円盤が X 線で光る",
        text:
          "相手の星のガスがブラックホールへ落ち込むと、降着円盤を作って高温になり X 線を出す。" +
          "ブラックホール本体は見えなくても、この X 線で存在を推定できる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "ブラックホール自体は光を出さない。",
          "吸い込まれるガスの降着円盤が高温になり強い X 線を出す。",
          "X 線連星（例：はくちょう座 X-1）でブラックホールを間接的に検出できる。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "ブラックホールの存在を間接的に示す手がかりはどれか。",
            choices: ["ア　落ち込むガスが出す強い X 線", "イ　ブラックホール自身の光", "ウ　ブラックホールの色", "エ　満ち欠け"],
            answer: "正解：ア　落ち込むガスが出す強い X 線",
            explain: "降着円盤の高温ガスが放つ X 線から、見えないブラックホールの存在を推定する。"
          },
          {
            q: "ガスがブラックホールの周りに作る高温の構造を何と呼ぶか。",
            choices: ["ア　降着円盤", "イ　主系列", "ウ　星間雲", "エ　オールトの雲"],
            answer: "正解：ア　降着円盤",
            explain: "落ち込むガスが渦巻いて降着円盤を作り、高温になって X 線を放つ。"
          },
          {
            q: "ブラックホール候補として有名な X 線連星はどれか。",
            choices: ["ア　はくちょう座 X-1", "イ　オリオン大星雲", "ウ　北極星", "エ　すばる"],
            answer: "正解：ア　はくちょう座 X-1",
            explain: "はくちょう座 X-1 は最初期に知られたブラックホール候補の X 線連星。"
          }
        ]
      }
    ]
  },

  "spectrum-redshift-scroll": {
    title: "赤方偏移",
    subtitle: "光の色のずれが、天体の動きを語る",
    hook: "近づく救急車は高い音、遠ざかると低い音。星の光でも、同じことが起きる？",
    lead:
      "音と同じく、光も光源が遠ざかると波長が長く（赤く）ずれる。これが赤方偏移。" +
      "天体のスペクトル線がどれだけ赤側へずれたかを測れば、その天体がどれくらいの速さで" +
      "遠ざかっているかが分かる。遠方銀河の運動や宇宙膨張を読み解く鍵になる。",
    blocks: [
      {
        type: "note",
        heading: "遠ざかると赤、近づくと青",
        text:
          "光源が遠ざかると波長が伸びて赤側へ（赤方偏移）、近づくと縮んで青側へ（青方偏移）ずれる。" +
          "スペクトル線のずれの量から視線方向の速度が分かる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "赤方偏移は遠ざかる天体の光の波長が長く（赤く）なる現象。",
          "ずれの量から視線方向の速度が求められる。",
          "遠方銀河の赤方偏移は宇宙膨張の証拠になる（[[ハッブルの法則]]）。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "赤方偏移が示す天体の動きはどれか。",
            choices: ["ア　遠ざかっている", "イ　近づいている", "ウ　止まっている", "エ　自転している"],
            answer: "正解：ア　遠ざかっている",
            explain: "光の波長が長く（赤く）ずれる赤方偏移は、天体が遠ざかっていることを示す。"
          },
          {
            q: "光源が近づくとき、スペクトル線はどちらへずれるか。",
            choices: ["ア　青い側", "イ　赤い側", "ウ　ずれない", "エ　消える"],
            answer: "正解：ア　青い側",
            explain: "近づく光源は波長が短くなり、スペクトル線が青い側へずれる（青方偏移）。"
          },
          {
            q: "遠方の銀河の赤方偏移が支持することはどれか。",
            choices: ["ア　宇宙の膨張", "イ　宇宙の収縮", "ウ　地球が中心", "エ　星が動かない"],
            answer: "正解：ア　宇宙の膨張",
            explain: "遠い銀河ほど大きく赤方偏移しており、宇宙が膨張していることを示す。"
          }
        ]
      }
    ]
  },

  "general-relativity-scroll": {
    title: "一般相対性理論",
    subtitle: "重力の正体は、時空の曲がり",
    hook: "もし重力が“力”ではなく、宇宙そのものの形のゆがみだったら？",
    lead:
      "アインシュタインは、重力を物体どうしが引き合う力ではなく、" +
      "質量が周りの時空を曲げ、その曲がりに沿って物が動く現象だと考えた。" +
      "重いボウリング球がトランポリンをへこませるように、星や銀河は時空をゆがめる。" +
      "ブラックホールや宇宙の進化を考える土台になっている。",
    blocks: [
      {
        type: "note",
        heading: "質量が時空を曲げる",
        text:
          "一般相対性理論では、重力＝時空の曲がり。質量の大きな天体ほど周囲の時空を強く曲げ、" +
          "そばを通る物体や光の進路を変える。ブラックホールや宇宙論の基礎理論。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "一般相対性理論は重力を「時空の曲がり」として説明する。",
          "質量が大きいほど周囲の時空を強く曲げる。",
          "ブラックホール・重力レンズ・宇宙論の土台となる理論。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "一般相対性理論では重力をどう説明するか。",
            choices: ["ア　時空の曲がり", "イ　磁石の力", "ウ　電気の力", "エ　風の力"],
            answer: "正解：ア　時空の曲がり",
            explain: "一般相対性理論は、重力を質量による時空の曲がりとして説明する。"
          },
          {
            q: "一般相対性理論を確立した人物はどれか。",
            choices: ["ア　アインシュタイン", "イ　ニュートン", "ウ　ケプラー", "エ　ガリレオ"],
            answer: "正解：ア　アインシュタイン",
            explain: "アインシュタインが一般相対性理論を確立した。"
          },
          {
            q: "一般相対性理論が土台となる天体・現象はどれか。",
            choices: ["ア　ブラックホール", "イ　星座の名前", "ウ　潮の満ち引きだけ", "エ　星の色"],
            answer: "正解：ア　ブラックホール",
            explain: "ブラックホールや重力レンズ、宇宙論は一般相対性理論を基礎に理解される。"
          }
        ]
      }
    ]
  },

  "light-bending-scroll": {
    title: "光の曲がり",
    subtitle: "太陽の重力が、星の光を曲げる",
    hook: "星の光が、太陽のそばを通るときにカーブする――それを日食が証明した？",
    lead:
      "一般相対性理論は「重い天体のそばでは時空が曲がり、光の進路も曲がる」と予言した。" +
      "1919 年の皆既日食で、太陽の近くに見える星の位置がわずかにずれていることが確かめられ、" +
      "理論は劇的に裏づけられた。これは重力レンズ現象の出発点でもある。",
    blocks: [
      {
        type: "note",
        heading: "日食が検証の舞台",
        text:
          "ふだんは太陽がまぶしくて近くの星は見えないが、皆既日食なら観測できる。" +
          "太陽の重力で星の光が曲がり、見かけの位置がずれることが確認された。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "重い天体のそばでは時空が曲がり、光の進路も曲がる。",
          "1919 年の皆既日食で星の位置のずれが観測され、一般相対論を裏づけた。",
          "この効果は重力レンズ現象につながる。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "太陽のそばで星の光が曲がる原因はどれか。",
            choices: ["ア　太陽の重力による時空の曲がり", "イ　太陽の自転", "ウ　星の温度", "エ　地球の大気だけ"],
            answer: "正解：ア　太陽の重力による時空の曲がり",
            explain: "一般相対論の予言どおり、太陽の重力で時空が曲がり光の進路が曲がる。"
          },
          {
            q: "光の曲がりが観測しやすいのはどんなときか。",
            choices: ["ア　皆既日食のとき", "イ　満月のとき", "ウ　正午のとき", "エ　雨の日"],
            answer: "正解：ア　皆既日食のとき",
            explain: "皆既日食で太陽が隠れると、すぐ近くの星が見え、位置のずれを観測できる。"
          },
          {
            q: "光の曲がりの確認が裏づけた理論はどれか。",
            choices: ["ア　一般相対性理論", "イ　天動説", "ウ　ケプラーの第 3 法則", "エ　ウィーンの変位則"],
            answer: "正解：ア　一般相対性理論",
            explain: "1919 年の観測は、重力で光が曲がるという一般相対性理論の予言を確かめた。"
          }
        ]
      }
    ]
  },

  "galaxy-nature-scroll": {
    title: "銀河の正体",
    subtitle: "宇宙は天の川だけではなかった",
    hook: "空に浮かぶ無数の“渦巻く雲”。それは天の川の中？　それとも、はるか外の別世界？",
    lead:
      "かつては、空にぼんやり見える渦巻く天体が天の川の中の雲なのか、" +
      "天の川の外にある別の銀河なのかが大論争になっていた。" +
      "やがて距離が測られ、それらが天の川をはるかに超えた距離にある独立した銀河だと分かった。" +
      "宇宙は天の川だけではなかったのだ。",
    blocks: [
      {
        type: "note",
        heading: "宇宙の階層が広がった",
        text:
          "渦巻く天体（渦巻星雲）が天の川の外にある別の銀河だと判明し、" +
          "宇宙には無数の銀河があることが分かった。宇宙の大きさの理解が一気に広がった。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "渦巻く天体は天の川の外にある別の銀河だと分かった。",
          "宇宙には天の川以外にも無数の銀河がある。",
          "宇宙の階層・スケールの理解が大きく広がった。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "「銀河の正体」の解明で分かったことはどれか。",
            choices: ["ア　天の川の外にも別の銀河がある", "イ　宇宙には天の川しかない", "ウ　星はすべて同じ距離", "エ　地球が宇宙の中心"],
            answer: "正解：ア　天の川の外にも別の銀河がある",
            explain: "渦巻く天体が天の川の外の別の銀河だと判明し、宇宙に無数の銀河があると分かった。"
          },
          {
            q: "この発見が宇宙観に与えた影響はどれか。",
            choices: ["ア　宇宙のスケールの理解が大きく広がった", "イ　宇宙が小さくなった", "ウ　星座が消えた", "エ　太陽が中心になった"],
            answer: "正解：ア　宇宙のスケールの理解が大きく広がった",
            explain: "天の川の外に無数の銀河があると分かり、宇宙の大きさの理解が一気に広がった。"
          },
          {
            q: "天の川の外にある銀河の例はどれか。",
            choices: ["ア　アンドロメダ銀河（M31）", "イ　オリオン座", "ウ　太陽系", "エ　北斗七星"],
            answer: "正解：ア　アンドロメダ銀河（M31）",
            explain: "M31 は天の川の外にある代表的な別の銀河。"
          }
        ]
      }
    ]
  },

  "m31-cepheid-scroll": {
    title: "M31 のセファイド",
    subtitle: "1 つの変光星が大論争に決着をつけた",
    hook: "アンドロメダは天の川の“中”か“外”か。決め手は、たった 1 種類の星だった。",
    lead:
      "アンドロメダ（M31）が天の川の中か外かをめぐる大論争のさなか、" +
      "ハッブルは M31 の中にセファイド変光星を見つけた。" +
      "周期光度関係から距離を測ると、それは天の川の大きさをはるかに超えていた。" +
      "M31 は天の川の外の独立した銀河だと確定し、論争に決着がついた。",
    blocks: [
      {
        type: "note",
        heading: "標準光源で距離を測る",
        text:
          "M31 内のセファイドの周期から本当の明るさ（絶対等級）が分かり、" +
          "見かけの明るさと比べて距離を算出。天の川の外と確定した（[[セファイドの周期光度関係]]）。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "M31 内のセファイドの周期光度関係から距離が測られた。",
          "距離は天の川の大きさをはるかに超えていた。",
          "M31 は天の川の外の別の銀河だと確定した。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "M31 までの距離測定に使われた星はどれか。",
            choices: ["ア　セファイド変光星", "イ　白色矮星", "ウ　パルサー", "エ　彗星"],
            answer: "正解：ア　セファイド変光星",
            explain: "周期光度関係をもつセファイド変光星を標準光源として距離を測った。"
          },
          {
            q: "M31 のセファイド観測で確定したことはどれか。",
            choices: ["ア　M31 は天の川の外の銀河", "イ　M31 は天の川の中の雲", "ウ　M31 は太陽系内", "エ　M31 は存在しない"],
            answer: "正解：ア　M31 は天の川の外の銀河",
            explain: "測られた距離が天の川の大きさを超えており、M31 は別の銀河と確定した。"
          },
          {
            q: "セファイドの周期から分かるものはどれか。",
            choices: ["ア　本当の明るさ（絶対等級）", "イ　星の色だけ", "ウ　星の名前", "エ　地球の自転"],
            answer: "正解：ア　本当の明るさ（絶対等級）",
            explain: "周期光度関係により、周期からセファイドの絶対等級が分かり、距離が求まる。"
          }
        ]
      }
    ]
  },

  "hubble-law-scroll": {
    title: "ハッブルの法則",
    subtitle: "遠い銀河ほど、速く遠ざかる",
    hook: "どの方向を見ても、遠い銀河ほど速く逃げていく。宇宙に何が起きている？",
    lead:
      "ハッブルは多くの銀河の距離と後退速度を調べ、" +
      "遠い銀河ほど速く遠ざかっているという関係を見つけた。" +
      "これは宇宙そのものが膨張していることを意味する。" +
      "風船をふくらませると表面の点どうしが遠ざかるのと同じイメージだ。",
    blocks: [
      {
        type: "formula",
        expression: "v = H₀ × d",
        where: "v ＝ 後退速度　d ＝ 距離　H₀ ＝ ハッブル定数",
        caption:
          "後退速度は距離に比例する。遠い銀河ほど速く遠ざかる＝宇宙が一様に膨張している証拠。"
      },
      {
        type: "note",
        heading: "膨張する宇宙",
        text:
          "後退速度は赤方偏移から、距離はセファイドなどから測る。両者が比例することは、" +
          "宇宙全体が膨張していることを示す。逆算すると宇宙の年齢の見積もりにもつながる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "遠い銀河ほど速く遠ざかる（v＝H₀d）。",
          "後退速度は赤方偏移、距離はセファイドなどで測る。",
          "この関係は宇宙が膨張していることを示す。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "ハッブルの法則が表す関係はどれか。",
            choices: ["ア　後退速度は距離に比例", "イ　速度は距離に反比例", "ウ　速度は一定", "エ　距離は速度の 2 乗"],
            answer: "正解：ア　後退速度は距離に比例",
            explain: "v＝H₀d。遠い銀河ほど後退速度が大きい（距離に比例）。"
          },
          {
            q: "ハッブルの法則が示すことはどれか。",
            choices: ["ア　宇宙が膨張している", "イ　宇宙が縮んでいる", "ウ　宇宙は不変", "エ　地球が中心"],
            answer: "正解：ア　宇宙が膨張している",
            explain: "遠い銀河ほど速く遠ざかることは、宇宙全体が膨張していることを意味する。"
          },
          {
            q: "銀河の後退速度を測る手がかりはどれか。",
            choices: ["ア　赤方偏移", "イ　星の色だけ", "ウ　星座の形", "エ　自転速度"],
            answer: "正解：ア　赤方偏移",
            explain: "銀河のスペクトルの赤方偏移から、遠ざかる速度（後退速度）を求める。"
          }
        ]
      }
    ]
  },

  "dark-matter-scroll": {
    title: "暗黒物質",
    subtitle: "見えないのに、重力で存在が分かる",
    hook: "銀河は、見えている星だけでは説明できない速さで回っている。足りない“重さ”の正体は？",
    lead:
      "銀河の外側の星は、見えている物質の重力だけでは説明できないほど速く回っている。" +
      "つまり、光を出さないのに重力を及ぼす“見えない物質”がたくさんあるはずだ。" +
      "これが暗黒物質（ダークマター）。宇宙の物質の大半を占めると考えられている。",
    blocks: [
      {
        type: "note",
        heading: "回転速度が手がかり",
        text:
          "銀河の回転速度は、外側でも落ちずに高いまま。見える星だけでは説明できず、" +
          "見えない質量（暗黒物質）が広がって存在すると考えると説明できる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "暗黒物質は光を出さないが重力を及ぼす物質。",
          "銀河の回転速度や銀河団の運動から存在が推定される。",
          "宇宙の物質の大半を占めると考えられている。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "暗黒物質の存在が推定される手がかりはどれか。",
            choices: ["ア　銀河の回転速度", "イ　星の色", "ウ　月の満ち欠け", "エ　太陽の黒点"],
            answer: "正解：ア　銀河の回転速度",
            explain: "見える物質だけでは説明できない速い回転から、見えない質量の存在が示される。"
          },
          {
            q: "暗黒物質の性質として正しいものはどれか。",
            choices: ["ア　光を出さないが重力を及ぼす", "イ　強く光る", "ウ　重力がない", "エ　熱を出す"],
            answer: "正解：ア　光を出さないが重力を及ぼす",
            explain: "暗黒物質は光（電磁波）を出さないが、重力を通じてその存在が分かる。"
          },
          {
            q: "暗黒物質は宇宙の物質の中でどれくらいを占めると考えられているか。",
            choices: ["ア　大半", "イ　ほんのわずか", "ウ　ちょうど半分の星の分", "エ　ゼロ"],
            answer: "正解：ア　大半",
            explain: "暗黒物質は宇宙の物質の大半を占めると考えられている。"
          }
        ]
      }
    ]
  },

  "quasar-scroll": {
    title: "クエーサー",
    subtitle: "宇宙の果てで輝く、超巨大ブラックホールの灯",
    hook: "1 つの天体が、銀河まるごとより明るい。そんな“化け物”が宇宙の果てにいる？",
    lead:
      "クエーサーは、非常に遠くにあるのに桁外れに明るく輝く天体だ。" +
      "正体は、銀河の中心にある超巨大ブラックホールに大量のガスが落ち込み、" +
      "そのエネルギーで激しく輝く活動銀河核。遠い＝昔の宇宙の姿を見せてくれる。",
    blocks: [
      {
        type: "note",
        heading: "巨大ブラックホールが動力源",
        text:
          "中心の超巨大ブラックホールへガスが落ち込むとき、莫大なエネルギーが解放されて輝く。" +
          "非常に遠方にあり、若い宇宙の活動的な銀河の姿を伝える。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "クエーサーは非常に遠方で極めて明るい活動銀河核。",
          "中心の超巨大ブラックホールへの降着がエネルギー源。",
          "遠い＝昔の宇宙を見ることになり、宇宙の歴史を探る手がかり。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "クエーサーのエネルギー源と考えられているものはどれか。",
            choices: ["ア　中心の超巨大ブラックホールへの降着", "イ　星の核融合だけ", "ウ　惑星の衝突", "エ　彗星の蒸発"],
            answer: "正解：ア　中心の超巨大ブラックホールへの降着",
            explain: "銀河中心の超巨大ブラックホールにガスが落ち込み、莫大なエネルギーで輝く。"
          },
          {
            q: "クエーサーの特徴として正しいものはどれか。",
            choices: ["ア　非常に遠方で極めて明るい", "イ　太陽系内にある", "ウ　暗くて見えない", "エ　地球のすぐそば"],
            answer: "正解：ア　非常に遠方で極めて明るい",
            explain: "クエーサーは遠方にありながら銀河全体に匹敵するほど明るい活動銀河核。"
          },
          {
            q: "遠方のクエーサーを観測することは何を見ることになるか。",
            choices: ["ア　昔の宇宙の姿", "イ　未来の宇宙", "ウ　地球の過去", "エ　太陽の内部"],
            answer: "正解：ア　昔の宇宙の姿",
            explain: "光が届くのに時間がかかるため、遠方の天体ほど昔の宇宙の姿を見ることになる。"
          }
        ]
      }
    ]
  },

  "cmb-scroll": {
    title: "宇宙背景放射",
    subtitle: "ビッグバンの残り火",
    hook: "宇宙のあらゆる方向から、かすかな電波が届いている。それは“宇宙の産声”の名残？",
    lead:
      "空のどの方向を観測しても、ほぼ一様にやってくるかすかな電波がある。これが宇宙背景放射。" +
      "高温・高密度で始まった宇宙が膨張して冷えた、その“残り火”だと考えられている。" +
      "温度はおよそ 2.7 K（絶対零度より少し高いだけ）。ビッグバンの強力な証拠だ。",
    blocks: [
      {
        type: "note",
        heading: "全天から届く残光",
        text:
          "宇宙背景放射は全天からほぼ一様に届く電波で、温度は約 2.7 K。" +
          "宇宙が高温・高密度の状態から始まり、膨張で冷えてきたことを示す。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "宇宙背景放射は全天からほぼ一様に届くかすかな電波。",
          "温度は約 2.7 K で、ビッグバンの“残り火”とされる。",
          "宇宙が高温・高密度から始まり膨張・冷却した証拠。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "宇宙背景放射はどの方向から届くか。",
            choices: ["ア　全天からほぼ一様に", "イ　太陽の方向だけ", "ウ　銀河中心だけ", "エ　地平線だけ"],
            answer: "正解：ア　全天からほぼ一様に",
            explain: "宇宙背景放射は空のどの方向からもほぼ一様に届くかすかな電波。"
          },
          {
            q: "宇宙背景放射の温度の目安はどれか。",
            choices: ["ア　約 2.7 K", "イ　約 5800 K", "ウ　約 100 K", "エ　約 0 K"],
            answer: "正解：ア　約 2.7 K",
            explain: "宇宙背景放射の温度はおよそ 2.7 K で、絶対零度よりわずかに高い。"
          },
          {
            q: "宇宙背景放射が示す宇宙の歴史はどれか。",
            choices: ["ア　高温・高密度から始まり膨張・冷却した", "イ　ずっと同じ状態", "ウ　収縮している", "エ　地球から始まった"],
            answer: "正解：ア　高温・高密度から始まり膨張・冷却した",
            explain: "宇宙背景放射は、宇宙が熱い状態から始まり膨張して冷えたことを示す残光。"
          }
        ]
      }
    ]
  },

  "accelerating-expansion-scroll": {
    title: "宇宙の加速膨張",
    subtitle: "膨張は、なぜか速くなっている",
    hook: "宇宙の膨張は重力でゆるむはず――ところが、逆に加速していた。なぜ？",
    lead:
      "宇宙は膨張しているが、物質どうしの重力でいずれ減速すると思われていた。" +
      "ところが遠方の超新星を“標準光源”として精密に距離を測ると、" +
      "膨張はむしろ加速していることが分かった。" +
      "その原動力は正体不明のダークエネルギーだと考えられている。",
    blocks: [
      {
        type: "note",
        heading: "標準光源で加速を発見",
        text:
          "明るさのそろった Ia 型超新星を標準光源として遠方の距離を測り、" +
          "膨張が加速していることが分かった。加速を担う未知のエネルギーをダークエネルギーと呼ぶ。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "宇宙の膨張は減速ではなく加速していることが分かった。",
          "遠方の Ia 型超新星を標準光源として距離を測って発見された。",
          "加速の原動力は正体不明のダークエネルギーとされる。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "宇宙の加速膨張の発見に使われた天体はどれか。",
            choices: ["ア　Ia 型超新星", "イ　惑星", "ウ　彗星", "エ　月"],
            answer: "正解：ア　Ia 型超新星",
            explain: "明るさのそろった Ia 型超新星を標準光源として遠方の距離を測り、加速膨張を発見した。"
          },
          {
            q: "加速膨張の原動力と考えられているものはどれか。",
            choices: ["ア　ダークエネルギー", "イ　暗黒物質", "ウ　太陽風", "エ　重力波"],
            answer: "正解：ア　ダークエネルギー",
            explain: "宇宙の膨張を加速させる正体不明のエネルギーをダークエネルギーと呼ぶ。"
          },
          {
            q: "発見以前に予想されていた宇宙膨張のふるまいはどれか。",
            choices: ["ア　重力で減速する", "イ　加速する", "ウ　止まっている", "エ　収縮する"],
            answer: "正解：ア　重力で減速する",
            explain: "物質の重力により膨張は減速すると思われていたが、実際は加速していた。"
          }
        ]
      }
    ]
  },

  "gravitational-waves-scroll": {
    title: "重力波",
    subtitle: "時空を伝わる、宇宙のさざ波",
    hook: "ブラックホールどうしの衝突が、時空そのものを“揺らす”波を生むとしたら？",
    lead:
      "質量がはげしく運動すると、その影響が時空のさざ波として光速で広がる。これが重力波。" +
      "アインシュタインが一般相対論で予言し、約 100 年後の 2015 年、" +
      "2 つのブラックホールの合体が生んだ重力波が初めて直接とらえられた。" +
      "光以外で宇宙を“聴く”新しい天文学が始まった。",
    blocks: [
      {
        type: "note",
        heading: "時空のゆがみが波になる",
        text:
          "ブラックホールや中性子星の合体など、質量の激しい運動は時空をゆがめ、" +
          "そのゆがみが波として伝わる。極めて微小なので検出には超高精度の装置が必要。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "重力波は質量の激しい運動で生じる時空のさざ波。",
          "アインシュタインが一般相対論で予言した。",
          "2015 年にブラックホール合体の重力波が初めて直接検出された。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "重力波とは何が伝わる波か。",
            choices: ["ア　時空のゆがみ", "イ　空気の振動", "ウ　水の波", "エ　光だけ"],
            answer: "正解：ア　時空のゆがみ",
            explain: "重力波は質量の運動によって生じる時空のゆがみが、波として伝わるもの。"
          },
          {
            q: "重力波を予言した理論はどれか。",
            choices: ["ア　一般相対性理論", "イ　天動説", "ウ　ケプラーの法則", "エ　ウィーンの変位則"],
            answer: "正解：ア　一般相対性理論",
            explain: "アインシュタインの一般相対性理論が重力波の存在を予言した。"
          },
          {
            q: "2015 年に初めて直接検出された重力波の発生源はどれか。",
            choices: ["ア　2 つのブラックホールの合体", "イ　太陽の自転", "ウ　月の公転", "エ　彗星の接近"],
            answer: "正解：ア　2 つのブラックホールの合体",
            explain: "2015 年、2 つのブラックホールが合体した際の重力波が初めて直接とらえられた。"
          }
        ]
      }
    ]
  },

  "m87-blackhole-scroll": {
    title: "M87 のブラックホール",
    subtitle: "ブラックホールの“影”を撮った",
    hook: "光をのみ込むブラックホールを、写真に撮ることはできるのだろうか？",
    lead:
      "ブラックホール本体は光を出さないが、周りの明るいガスを背景にすると、" +
      "光が抜け出せない領域が黒い“影（シャドウ）”として浮かび上がる。" +
      "世界中の電波望遠鏡をつないで地球サイズの仮想望遠鏡を作り、" +
      "M87 銀河中心の巨大ブラックホールのシャドウが直接撮像された。",
    blocks: [
      {
        type: "note",
        heading: "地球大の仮想望遠鏡で撮影",
        text:
          "各地の電波望遠鏡を連携させ、地球サイズに匹敵する解像度を実現（イベント・ホライズン・テレスコープ）。" +
          "M87 中心のブラックホールの影を直接画像化し、その存在を視覚的に確かめた。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "ブラックホールの影（シャドウ）は明るいガスを背景に黒く浮かぶ領域。",
          "世界中の電波望遠鏡を連携させて地球規模の解像度を実現した。",
          "M87 中心の巨大ブラックホールのシャドウが直接撮像された。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "撮像されたブラックホールの“影”とは何か。",
            choices: ["ア　光が抜け出せない黒い領域", "イ　ブラックホールが出す光", "ウ　星の影", "エ　雲の影"],
            answer: "正解：ア　光が抜け出せない黒い領域",
            explain: "明るいガスを背景に、光が抜け出せない領域が黒い影として浮かび上がる。"
          },
          {
            q: "ブラックホールの撮像はどのように行われたか。",
            choices: ["ア　世界中の電波望遠鏡を連携させた", "イ　1 台の小型望遠鏡で", "ウ　肉眼で", "エ　計算だけで"],
            answer: "正解：ア　世界中の電波望遠鏡を連携させた",
            explain: "各地の電波望遠鏡をつなぎ、地球サイズに匹敵する解像度で撮像した。"
          },
          {
            q: "シャドウが撮像されたブラックホールがある銀河はどれか。",
            choices: ["ア　M87", "イ　M31", "ウ　天の川だけ", "エ　大マゼラン雲"],
            answer: "正解：ア　M87",
            explain: "M87 銀河の中心にある巨大ブラックホールのシャドウが最初に撮像された。"
          }
        ]
      }
    ]
  },

  "exoplanet-pulsar-scroll": {
    title: "最初の系外惑星",
    subtitle: "意外にも、パルサーのそばで見つかった",
    hook: "太陽系の外で最初に見つかった惑星は、なんと“死んだ星”を回っていた？",
    lead:
      "太陽以外の星を回る惑星（系外惑星）が初めて確認されたのは、意外にもパルサーの周りだった。" +
      "高速自転するパルサーのパルスの到達時刻が、惑星の引力でわずかに揺らぐことから検出された。" +
      "とても正確なパルサーの“時計”だからこそ、小さな影響を読み取れたのだ。",
    blocks: [
      {
        type: "note",
        heading: "パルスの揺らぎが手がかり",
        text:
          "パルサーは規則正しいパルスを出す。惑星があると、その引力でパルサーがわずかに動き、" +
          "パルスの到達時刻が周期的にずれる。この微小なずれから惑星の存在が分かった。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "最初に確認された系外惑星はパルサーの周りで見つかった。",
          "パルスの到達時刻のわずかな揺らぎが検出の手がかり。",
          "パルサーの正確な“時計”が微小な影響の検出を可能にした。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "最初に確認された系外惑星はどんな天体を回っていたか。",
            choices: ["ア　パルサー", "イ　太陽そっくりの星", "ウ　ブラックホール", "エ　銀河"],
            answer: "正解：ア　パルサー",
            explain: "最初の系外惑星は、高速自転するパルサーの周りで確認された。"
          },
          {
            q: "パルサー周りの惑星を検出した手がかりはどれか。",
            choices: ["ア　パルスの到達時刻のずれ", "イ　星の色の変化", "ウ　惑星が光ること", "エ　日食"],
            answer: "正解：ア　パルスの到達時刻のずれ",
            explain: "惑星の引力でパルサーが動き、パルスの到達時刻が周期的にずれることから検出した。"
          },
          {
            q: "パルサーが微小な影響の検出に向く理由はどれか。",
            choices: ["ア　パルスの周期が非常に正確だから", "イ　とても明るいから", "ウ　近いから", "エ　大きいから"],
            answer: "正解：ア　パルスの周期が非常に正確だから",
            explain: "パルサーの周期は極めて正確なので、わずかな時刻のずれも読み取れる。"
          }
        ]
      }
    ]
  },

  "exoplanet-main-sequence-scroll": {
    title: "主系列星の系外惑星",
    subtitle: "太陽に似た星にも、惑星が見つかった",
    hook: "太陽のような星のそばに惑星を見つける――その手がかりは、星の“ふらつき”だった。",
    lead:
      "太陽に似た主系列星を回る系外惑星が初めて見つかったとき、大きな驚きがあった。" +
      "それは恒星のすぐ近くを高速で回る巨大なガス惑星（ホットジュピター）だったからだ。" +
      "惑星の引力で恒星がわずかにふらつき、その動きをドップラー効果で読み取って検出された。",
    blocks: [
      {
        type: "note",
        heading: "ドップラー法（視線速度法）",
        text:
          "惑星の引力で恒星がわずかに前後に動くと、スペクトル線が周期的に青↔赤へずれる。" +
          "このずれから惑星の存在と公転周期が分かる。最初の発見はホットジュピターだった。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "太陽に似た主系列星の系外惑星が初めて発見された。",
          "恒星のふらつきをドップラー効果（視線速度法）で読み取って検出した。",
          "最初の例は恒星に近接した巨大ガス惑星（ホットジュピター）。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "主系列星の系外惑星の検出に使われた方法はどれか。",
            choices: ["ア　ドップラー法（視線速度法）", "イ　年周視差", "ウ　光行差", "エ　固有運動"],
            answer: "正解：ア　ドップラー法（視線速度法）",
            explain: "惑星の引力による恒星のふらつきを、スペクトル線のドップラーずれで検出した。"
          },
          {
            q: "最初に見つかった主系列星の系外惑星のタイプはどれか。",
            choices: ["ア　ホットジュピター", "イ　地球そっくりの惑星", "ウ　氷の小惑星", "エ　彗星"],
            answer: "正解：ア　ホットジュピター",
            explain: "恒星のすぐ近くを回る巨大ガス惑星（ホットジュピター）が最初に発見された。"
          },
          {
            q: "ドップラー法で読み取る恒星の変化はどれか。",
            choices: ["ア　スペクトル線の周期的なずれ", "イ　星の大きさ", "ウ　星の年齢", "エ　星座の形"],
            answer: "正解：ア　スペクトル線の周期的なずれ",
            explain: "惑星の引力で恒星が前後に動き、スペクトル線が周期的に青↔赤へずれる。"
          }
        ]
      }
    ]
  },

  "asteroid-exploration-scroll": {
    title: "小惑星探査",
    subtitle: "太陽系の化石をたずねて",
    hook: "46 億年前の太陽系のかけらが、今も小惑星として残っているとしたら？",
    lead:
      "小惑星は、惑星になりきれずに残った太陽系誕生のころの小天体。" +
      "大きく姿を変えた惑星と違い、当時の物質を比較的よく保っている“化石”だ。" +
      "探査機を送って近くで調べたり試料を持ち帰ったりすることで、" +
      "太陽系がどう生まれたかを探る手がかりが得られる。",
    blocks: [
      {
        type: "note",
        heading: "太陽系初期の情報を保つ",
        text:
          "小惑星は誕生当時の物質をとどめており、太陽系の起源を探る貴重な対象。" +
          "探査機による接近観測や着陸・試料採取で、間近の情報が得られる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "小惑星は太陽系誕生のころの物質をよく残す小天体。",
          "惑星ほど変化しておらず、太陽系の“化石”といえる。",
          "探査機で接近・着陸・試料採取し、起源を調べる。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "小惑星が「太陽系の化石」と呼ばれる理由はどれか。",
            choices: ["ア　誕生当時の物質をよく残すから", "イ　生き物がいるから", "ウ　最近できたから", "エ　太陽の一部だから"],
            answer: "正解：ア　誕生当時の物質をよく残すから",
            explain: "小惑星は大きく変化せず、太陽系初期の物質を比較的よく保っている。"
          },
          {
            q: "小惑星を間近で調べる主な方法はどれか。",
            choices: ["ア　探査機を送る", "イ　肉眼で見る", "ウ　待っていれば落ちてくる", "エ　調べられない"],
            answer: "正解：ア　探査機を送る",
            explain: "探査機による接近観測・着陸・試料採取で、小惑星の間近の情報を得る。"
          },
          {
            q: "小惑星探査で分かることはどれか。",
            choices: ["ア　太陽系の起源の手がかり", "イ　地球の天気", "ウ　星座の由来", "エ　銀河の距離"],
            answer: "正解：ア　太陽系の起源の手がかり",
            explain: "誕生当時の物質を保つ小惑星を調べることで、太陽系の成り立ちが分かる。"
          }
        ]
      }
    ]
  },

  "ryugu-sample-scroll": {
    title: "リュウグウの試料",
    subtitle: "持ち帰った砂が語る、水と命の材料",
    hook: "遠い小惑星から持ち帰ったひとつまみの砂に、生命の材料が眠っていた？",
    lead:
      "探査機が小惑星リュウグウから採取して地球に持ち帰った試料からは、" +
      "水を含む鉱物や、アミノ酸などの有機物が見つかった。" +
      "これは、地球の水や生命のもとになる材料が、こうした小天体によって" +
      "運ばれてきた可能性を示す、太陽系・生命の起源にせまる成果だ。",
    blocks: [
      {
        type: "note",
        heading: "水と有機物の手がかり",
        text:
          "リュウグウの試料には含水鉱物や有機物（アミノ酸など）が含まれていた。" +
          "地球の水や生命の材料の起源を探るうえで重要な情報になる。"
      },
      {
        type: "points",
        heading: "ポイント",
        items: [
          "小惑星リュウグウから試料が採取され、地球に持ち帰られた。",
          "試料には水を含む鉱物や有機物（アミノ酸など）が見つかった。",
          "地球の水や生命の材料の起源を探る手がかりになる。"
        ]
      },
      {
        type: "quiz",
        heading: "練習問題",
        items: [
          {
            q: "リュウグウの試料から見つかったものはどれか。",
            choices: ["ア　水を含む鉱物や有機物", "イ　金属の塊だけ", "ウ　氷の巨大な塊", "エ　生きた微生物"],
            answer: "正解：ア　水を含む鉱物や有機物",
            explain: "リュウグウの試料からは含水鉱物やアミノ酸などの有機物が見つかった。"
          },
          {
            q: "リュウグウの試料研究が手がかりを与えるテーマはどれか。",
            choices: ["ア　地球の水や生命の材料の起源", "イ　天気予報", "ウ　星座の起源", "エ　銀河の膨張"],
            answer: "正解：ア　地球の水や生命の材料の起源",
            explain: "水や有機物が小天体に含まれることは、地球の水や生命の材料の起源を考える鍵になる。"
          },
          {
            q: "リュウグウの試料はどのように調べられたか。",
            choices: ["ア　探査機が持ち帰り地上で分析", "イ　望遠鏡で見ただけ", "ウ　計算のみ", "エ　調べていない"],
            answer: "正解：ア　探査機が持ち帰り地上で分析",
            explain: "探査機が採取・帰還し、持ち帰った試料を地上の装置で詳しく分析した。"
          }
        ]
      }
    ]
  }
};

function getLessonForScroll(scrollId) {
  return LESSON_PAGES[scrollId] ?? null;
}

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
    ],
    // 必要な観測事実（最大4つ）。揃えばクリア、欠ければ lines のセリフを1行ずつ読み進める。
    facts: [
      {
        id: "venus-phases-scroll",
        label: "金星の満ち欠け",
        lines: [
          "まだ金星の満ち欠けを確かめられていない。",
          "もし金星が月のように満ち欠けするなら、金星が太陽の周りを回っている何よりの証拠になる。",
          "その観測がないかぎり――金星は地球と太陽のあいだを行き来するだけ、という古い見方を退けられない。"
        ]
      },
      {
        id: "jupiter-moons-scroll",
        label: "木星の衛星",
        lines: [
          "まだ木星をめぐる衛星を見つけられていない。",
          "地球以外を中心に回る天体が一つでも見つかれば、「すべては地球を中心に回る」という前提は揺らぐ。",
          "その実例を欠いたままでは――天動説に決定的な一撃を与えられない。"
        ]
      }
    ],
    clearLines: [
      "金星の満ち欠け、そして木星をめぐる衛星。ふたつの観測事実が、いま私の手の中にそろった。",
      "どちらも、地球を宇宙の中心に置いたままでは説明しきれない。",
      "太陽中心の体系は、もはや空想ではない――観測に裏打ちされた事実だ。",
      "よくやった。星章を受け取るがいい。"
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

  const canCombine = quest.facts
    ? quest.facts.every((fact) => claimedRewards.has(fact.id))
    : quest.requiredScrolls.every((requirement) => getQuestSelectedEvidenceIds(quest).includes(requirement.id));
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

function getSelectedDetailItem() {
  const items = getObservableItems().filter((item) => item.kingdomId === state.kingdomId);
  if (!items.length) return null;
  const selected = items.find((item) => item.id === state.selectedDetailPointId) ?? items[0];
  state.selectedDetailPointId = selected.id;
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
  state.selectedDetailPointId = null;
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
  state.questLineIndex = 0;
  render();
}

// 観測事実クエストの現在のセリフ群（不足なら最初に欠けた事実の説明、揃えばクリア演出）
function getQuestDialogue(quest) {
  const missing = quest.facts.filter((fact) => !claimedRewards.has(fact.id));
  if (missing.length === 0) return { lines: quest.clearLines, cleared: true };
  return { lines: missing[0].lines, cleared: false };
}

function advanceQuestLine(questId) {
  const quest = QUESTS.find((item) => item.id === questId);
  if (!quest?.facts) return;
  const { lines, cleared } = getQuestDialogue(quest);

  if (state.questLineIndex < lines.length - 1) {
    state.questLineIndex += 1;
    render();
    return;
  }

  // 最後の行：揃っていれば報酬を授与、不足なら頭から読み直せるようにループ
  if (cleared) {
    claimQuestReward(questId);
  } else {
    state.questLineIndex = 0;
    render();
  }
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
      // 星アイコンを押すと、下の説明欄にその天体の解説（観測スタイル）を表示する。
      // 実際のバトルは説明欄の「観測する」ボタンから始める。
      state.selectedDetailPointId = point.id;
      render();
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

function renderObserveDetailPanel(item) {
  const canObserve = Boolean(item.storyId) && !item.locked;

  return `
    <section class="home-selection-panel app-detail-panel observe-detail-panel ${item.kingdomId}" aria-label="${item.title}の説明">
      <figure class="home-selection-card app-detail-card">
        ${item.enemyImage
          ? `<img src="${withAssetVersion(item.enemyImage)}" alt="${item.enemyAlt}" />`
          : `<img src="${withAssetVersion(HOME_KINGDOM_DETAILS[item.kingdomId]?.card ?? HOME_KINGDOM_DETAILS.autumn.card)}" alt="${item.title}" />`}
      </figure>
      <div class="home-selection-copy app-detail-copy">
        <h2>${item.title}</h2>
        <p><strong>${item.lesson}</strong>${item.description}</p>
        ${canObserve ? `
        <div class="home-selection-actions">
          <button class="home-enter-button" type="button" data-observe-start="${item.storyId}">
            観測する
          </button>
        </div>` : ""}
      </div>
    </section>
  `;
}

function renderObserveSelectionPanel() {
  return renderObserveDetailPanel(getSelectedObservableItem());
}

function renderLibrarySelectionPanel() {
  const selected = getSelectedLibraryScroll();
  const selectedUnlocked = claimedRewards.has(selected.id);
  const hasLesson = Boolean(getLessonForScroll(selected.id));

  return `
    <section class="home-selection-panel app-detail-panel library-detail-panel ${selected.tier ?? "major"}-tier" aria-label="${selected.title}の説明">
      <figure class="home-selection-card app-detail-card">
        <img src="${withAssetVersion(selected.image)}" alt="${selected.title}" />
      </figure>
      <div class="home-selection-copy app-detail-copy">
        <h2>${selected.title}</h2>
        <p>${selectedUnlocked ? selected.description : `${selected.period}の物語を観測すると、この巻物の解説が読める。`}</p>
        ${hasLesson ? `
        <div class="home-selection-actions">
          <button class="home-enter-button" type="button" data-lesson-open="${selected.id}">
            詳細を学ぶ
          </button>
        </div>` : ""}
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
    if (!state.selectedQuestId) return renderQuestSelectionPanel();
    const quest = getSelectedQuest();
    return quest.facts ? renderQuestFactPanel(quest) : renderQuestDetailPanel();
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

// 観測事実方式のクエスト：必要な事実（最大4つ）を横並びで表示する。
function renderQuestFactDetail(quest) {
  return `
    <section class="app-screen-panel quest-tab quest-detail-view quest-fact-view">
      <div class="quest-detail-title">
        <button class="quest-back-button" type="button" data-quest-back aria-label="クエスト一覧へ戻る">←</button>
        <span>QUEST ${quest.number}</span>
        <h2>${quest.title}</h2>
      </div>
      <figure class="quest-main-image-card quest-fact-image">
        <img src="${withAssetVersion(quest.mainImage)}" alt="${quest.title}の観測場面" />
      </figure>
      <div class="quest-fact-row" aria-label="必要な観測事実">
        ${quest.facts
          .map((fact) => {
            const owned = claimedRewards.has(fact.id);
            const scroll = getScrollById(fact.id);
            const image = scroll?.image ?? "./assets/reward-scroll-minor-base.png";
            return `
              <div class="quest-fact-card ${owned ? "owned" : "missing"}">
                <span class="quest-fact-thumb">
                  <img src="${withAssetVersion(image)}" alt="${fact.label}" />
                  <b class="quest-fact-mark" aria-hidden="true">${owned ? "✓" : "?"}</b>
                </span>
                <span class="quest-fact-label">${fact.label}</span>
              </div>`;
          })
          .join("")}
      </div>
    </section>
  `;
}

// 下の説明欄：依頼主のセリフを1行ずつ読み進める（バトルのテキスト送りと同じ操作感）
function renderQuestFactPanel(quest) {
  const { lines, cleared } = getQuestDialogue(quest);
  const index = Math.min(state.questLineIndex, lines.length - 1);
  const isLast = index >= lines.length - 1;
  const cue = cleared ? (isLast ? "★" : "▼") : (isLast ? "↻" : "▼");

  return `
    <button class="quest-fact-dialogue ${cleared ? "is-clear" : "is-missing"}" type="button" data-quest-advance="${quest.id}" aria-label="${quest.requester}のセリフを進める">
      <span class="quest-fact-speaker">${quest.requester}</span>
      <span class="quest-fact-line">${lines[index]}</span>
      <span class="quest-fact-cue" aria-hidden="true">${cue}</span>
    </button>
  `;
}

function renderQuestTab() {
  const selectedQuest = state.selectedQuestId ? getSelectedQuest() : null;

  if (selectedQuest) {
    return selectedQuest.facts ? renderQuestFactDetail(selectedQuest) : renderQuestDetail(selectedQuest);
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
    guidePanel.classList.remove("is-hidden");
    storyPanel.classList.add("is-hidden");
    storyTextPanel.classList.add("is-hidden");
    scrollPanel.classList.add("is-hidden");

    const item = getSelectedDetailItem();
    guidePanel.innerHTML = `
      <div class="home-panel-shell">
        ${item ? renderObserveDetailPanel(item) : ""}
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

const QUIZ_LABELS = ["ア", "イ", "ウ", "エ"];

// 選択肢の先頭ラベル（ア／イ…＋全角空白）を外して中身だけ取り出す
function stripQuizLabel(text) {
  return text.replace(/^(?:正解：)?[アイウエ]　/, "");
}

// 正解が常に「ア」固定にならないよう、表示時に選択肢をシャッフルしてラベルを振り直す。
// 中身の対応が崩れる場合は元のまま返す（安全側）。正解の位置 correctIndex も返す。
function shuffleQuizItem(item) {
  const fallbackIndex = () => {
    const m = (item.answer ?? "").match(/正解：([アイウエ])/);
    return m ? QUIZ_LABELS.indexOf(m[1]) : -1;
  };
  if (!Array.isArray(item.choices) || !item.answer) {
    return { choices: item.choices, answer: item.answer, correctIndex: fallbackIndex() };
  }
  const correctContent = stripQuizLabel(item.answer);
  const contents = item.choices.map(stripQuizLabel);
  if (!contents.includes(correctContent)) {
    return { choices: item.choices, answer: item.answer, correctIndex: fallbackIndex() };
  }
  const order = contents.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const shuffled = order.map((idx) => contents[idx]);
  const correctIndex = shuffled.indexOf(correctContent);
  const choices = shuffled.map((c, i) => `${QUIZ_LABELS[i]}　${c}`);
  const answer = `正解：${QUIZ_LABELS[correctIndex]}　${correctContent}`;
  return { choices, answer, correctIndex };
}

function renderLessonBlock(block) {
  switch (block.type) {
    case "compare":
      return `
        <div class="lesson-compare">
          ${block.items
            .map(
              (item) => `
            <div class="lesson-compare-card">
              <span class="lesson-compare-symbol">${item.symbol}</span>
              <strong class="lesson-compare-label">${item.label}</strong>
              <p>${item.text}</p>
            </div>`
            )
            .join("")}
        </div>`;
    case "note":
      return `
        <div class="lesson-note">
          <h3>${block.heading}</h3>
          <p>${block.text}</p>
        </div>`;
    case "formula":
      return `
        <div class="lesson-formula">
          <p class="lesson-formula-main">${block.expression}</p>
          ${block.sub ? `<p class="lesson-formula-sub">${block.sub}</p>` : ""}
          <p class="lesson-formula-where">${block.where}</p>
          <p class="lesson-formula-caption">${block.caption}</p>
        </div>`;
    case "scale":
      return `
        <div class="lesson-section">
          <h3>${block.heading}</h3>
          <div class="lesson-scale">
            ${block.rows
              .map(
                (row) => `
              <div class="lesson-scale-row">
                <span class="lesson-scale-diff">${row.diff}</span>
                <span class="lesson-scale-arrow" aria-hidden="true">→</span>
                <span class="lesson-scale-ratio">${row.ratio}</span>
                <span class="lesson-scale-note">${row.note}</span>
              </div>`
              )
              .join("")}
          </div>
          ${block.foot ? `<p class="lesson-foot">${block.foot}</p>` : ""}
        </div>`;
    case "examples":
      return `
        <div class="lesson-section">
          <h3>${block.heading}</h3>
          <table class="lesson-table">
            <thead>
              <tr>${block.columns.map((c) => `<th>${c}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${block.rows
                .map(
                  (row) => `<tr>${row.map((cell, i) => `<td${i === 0 ? ' class="lesson-table-name"' : ""}>${cell}</td>`).join("")}</tr>`
                )
                .join("")}
            </tbody>
          </table>
          ${block.foot ? `<p class="lesson-foot">${block.foot}</p>` : ""}
        </div>`;
    case "points":
      return `
        <div class="lesson-section">
          <h3>${block.heading}</h3>
          <ul class="lesson-points">
            ${block.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>`;
    case "quiz":
      return `
        <div class="lesson-section lesson-quiz">
          <h3>${block.heading}</h3>
          <ol class="lesson-quiz-list">
            ${block.items
              .map(
                (item, i) => {
                  const { choices, answer, correctIndex } = shuffleQuizItem(item);
                  return `
              <li class="lesson-quiz-item">
                <p class="lesson-quiz-q"><span class="lesson-quiz-num">Q${i + 1}</span>${item.q}</p>
                ${choices ? `
                <ul class="lesson-quiz-choices">
                  ${choices.map((c, idx) => `<li><button type="button" class="lesson-quiz-choice" data-choice="${idx}"${idx === correctIndex ? ' data-correct="1"' : ""}>${c}</button></li>`).join("")}
                </ul>
                <p class="lesson-quiz-verdict" aria-live="polite"></p>` : ""}
                <details class="lesson-quiz-detail">
                  <summary><span class="lesson-quiz-summary-label">解説</span><span class="lesson-quiz-summary-icon" aria-hidden="true">＋</span></summary>
                  <div class="lesson-quiz-answer">
                    <p class="lesson-quiz-correct">${answer}</p>
                    <p class="lesson-quiz-explain">${item.explain}</p>
                  </div>
                </details>
              </li>`;
                }
              )
              .join("")}
          </ol>
        </div>`;
    default:
      return "";
  }
}

function openLesson(scrollId) {
  const lesson = getLessonForScroll(scrollId);
  if (!lesson) return;

  lessonOverlay.innerHTML = `
    <button class="lesson-backdrop" type="button" aria-label="解説を閉じる" data-lesson-close></button>
    <section class="lesson-card" role="dialog" aria-modal="true" aria-label="${lesson.title}の解説">
      <header class="lesson-head">
        <h2>${lesson.title}</h2>
        <p class="lesson-subtitle">${lesson.subtitle}</p>
        <button class="lesson-close" type="button" aria-label="閉じる" data-lesson-close>×</button>
      </header>
      <div class="lesson-body">
        ${lesson.hook ? `<p class="lesson-hook">${lesson.hook}</p>` : ""}
        <p class="lesson-lead">${lesson.lead}</p>
        ${lesson.blocks.map(renderLessonBlock).join("")}
      </div>
    </section>
  `;
  lessonOverlay.classList.remove("is-hidden");
  const closeButton = lessonOverlay.querySelector(".lesson-close");
  if (closeButton) closeButton.focus();
}

function closeLesson() {
  lessonOverlay.classList.add("is-hidden");
  lessonOverlay.innerHTML = "";
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
      return;
    }

    const lessonOpenButton = target?.closest("[data-lesson-open]");
    if (lessonOpenButton) {
      event.preventDefault();
      event.stopPropagation();
      openLesson(lessonOpenButton.dataset.lessonOpen);
      return;
    }

    const observeStartButton = target?.closest("[data-observe-start]");
    if (observeStartButton) {
      event.preventDefault();
      event.stopPropagation();
      openStory(observeStartButton.dataset.observeStart);
      return;
    }

    const questAdvanceFactButton = target?.closest("[data-quest-advance]");
    if (questAdvanceFactButton) {
      event.preventDefault();
      event.stopPropagation();
      advanceQuestLine(questAdvanceFactButton.dataset.questAdvance);
    }
  },
  true
);

guidePanel.addEventListener("click", (event) => {
  const target = getEventElement(event);
  // #guidePanel 自身にも data-home-tab（状態保持用）が付くため、ナビのボタンだけに限定する
  const homeTabButton = target?.closest("button[data-home-tab]");
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

  const lessonOpenButton = target?.closest("[data-lesson-open]");
  if (lessonOpenButton) {
    openLesson(lessonOpenButton.dataset.lessonOpen);
    return;
  }

  const observeStartButton = target?.closest("[data-observe-start]");
  if (observeStartButton) {
    openStory(observeStartButton.dataset.observeStart);
    return;
  }

  const questAdvanceFactButton = target?.closest("[data-quest-advance]");
  if (questAdvanceFactButton) {
    advanceQuestLine(questAdvanceFactButton.dataset.questAdvance);
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

lessonOverlay.addEventListener("click", (event) => {
  const target = getEventElement(event);
  if (target?.closest("[data-lesson-close]")) {
    closeLesson();
    return;
  }

  const choiceButton = target?.closest(".lesson-quiz-choice");
  if (choiceButton) {
    const itemEl = choiceButton.closest(".lesson-quiz-item");
    if (!itemEl) return;
    const isCorrect = choiceButton.dataset.correct === "1";
    itemEl.querySelectorAll(".lesson-quiz-choice").forEach((btn) => {
      btn.classList.remove("is-correct", "is-incorrect");
      if (btn.dataset.correct === "1") {
        btn.classList.add("is-correct");
      } else if (btn === choiceButton) {
        btn.classList.add("is-incorrect");
      }
    });
    const verdict = itemEl.querySelector(".lesson-quiz-verdict");
    if (verdict) {
      verdict.textContent = isCorrect ? "正解！" : "不正解…";
      verdict.classList.toggle("is-correct", isCorrect);
      verdict.classList.toggle("is-incorrect", !isCorrect);
    }
    const details = itemEl.querySelector(".lesson-quiz-detail");
    if (details) details.open = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lessonOverlay.classList.contains("is-hidden")) {
    closeLesson();
    return;
  }
  if (event.key === "Escape" && !rewardPopup.classList.contains("is-hidden")) {
    hideReward();
  }
});

render();
