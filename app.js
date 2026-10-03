(function () {
  "use strict";

  var NOTICE = "https://www.pref.tochigi.lg.jp/e06/jidousoudannjo/r8aisystem3.html";

  var answers = {
    procured: {
      title: "Design, build, and introduction — not a decision system",
      body: [
        "The notice seeks a contractor for “令和8（2026）年度生成AIを活用した児童相談所業務支援システム設計・開発・導入業務”: design, development, and introduction of a generative-AI system that supports child-consultation-centre work.",
        "The contract runs from signing through 31 March 2027. The ceiling on the notice and in the implementation guidelines is 21,949,400 yen, including consumption tax and local consumption tax.",
        "The specification says the system supports judgment in abuse response and similar work. It does not make the final decision. Staff and the child consultation centre director do that organisationally. Output is reference information.",
        "Detailed implementation is not fixed on the notice. The specification says it is settled after contract, in requirements definition and basic design, with the prefecture and related vendors."
      ],
      source: "Notice section 1, and specification sections 1 and 2. " + NOTICE
    },
    users: {
      title: "Policy division administers; three centres look things up",
      body: [
        "Child Policy Division, Health and Welfare Department (保健福祉部こども政策課): administer the system, and register or update child records already stored in the existing child-consultation system, plus related statutes.",
        "Central, Ken-nan, and Ken-hoku child consultation centres (中央・県南・県北児童相談所): look up similar cases in abuse matters and similar work, and consider a response direction.",
        "The existing child-consultation system (児相システム) is described as the system that already manages consultation information and prints notices and forms. This prototype is not that system and is not connected to it.",
        "The specification’s planning figures: policy division 1 dedicated terminal and about 5 people; central 20 terminals, about 40 people, about 3,000 outputs a year; Ken-nan 17, about 30 people, about 2,500; Ken-hoku 13, about 20 people, about 1,300. An output is assumed at about 100 characters of prompt and about 1,500 characters of result."
      ],
      source: "Specification sections 2(1) and 8(2). " + NOTICE
    },
    functions: {
      title: "Two functions are named. This page implements neither.",
      body: [
        "Similar-case lookup: from a natural-language prompt, search loaded child records, return several cases ordered by how closely they match, and summarise each one. The specification’s own prompt examples are general (“a child facing X, where care became difficult because of Y”; “a case coordinated with the municipal child-welfare section and with the school”). It also requires each summary to include a case number, family composition and the issues the family faces, and the course from intake to the latest response.",
        "Draft directions: for a case number from the child-consultation system, output several draft response directions, drawing on loaded records and on loaded statutes and guidance. Each draft is required to include basic identifiers (case number, name, date of birth, age, school or other affiliation, family, related agencies), a case outline, and for each option a summary, merits, drawbacks, coordination with other agencies, and the reason, including similar cases and the legal materials relied on.",
        "Legal material to be loaded is named: the Child Welfare Act and its order and rules, the Act on the Prevention of Child Abuse and its order and rules, the child consultation centre operating guidelines, and related notices and guidelines published by the Children and Families Agency. The specification estimates that corpus at about 530 pages or about 800,000 characters. The prefecture prepares it and loads it.",
        "A stated target is about one minute per similar-case response and about one minute per draft-direction response. This page does not run those functions and does not invent a case that would fill those fields."
      ],
      source: "Specification sections 2(2), 3(1), 3(2), and 5. " + NOTICE
    },
    limits: {
      title: "Reference only. Three things are explicitly out of scope.",
      body: [
        "The specification says the system does not decide the response direction, does not decide whether temporary protection is required, and does not make any other judgment that staff or the director must make.",
        "Manuals and training materials must state that output may be wrong or incomplete, and that the user has to check the underlying sources and make the final judgment.",
        "Nothing on this page is advice about a child."
      ],
      source: "Specification sections 1(3), 2(3), and 11(6). " + NOTICE
    },
    dates: {
      title: "Dates and ceiling as printed on the notice",
      body: [
        "Guidelines published 30 September 2026.",
        "Questions due Monday 5 October 2026, 17:00 (must arrive).",
        "Answers planned to be posted Friday 9 October 2026.",
        "Participation documents due Wednesday 14 October 2026, 17:00 (must arrive).",
        "Qualification notice planned Monday 19 October 2026.",
        "Proposals due Friday 30 October 2026, 17:00 (must arrive).",
        "Review meeting planned Thursday 5 November 2026. Result notice and publication planned Tuesday 10 November 2026.",
        "Ceiling: 21,949,400 yen including tax. Contract period: from signing through 31 March 2027.",
        "The specification’s own build outline, which is separate from those proposal dates: contract around mid-November 2026; requirements and basic design late November to early December 2026; build and network mid-December 2026 to mid-February 2027; trial and training late February to early March 2027; operation and maintenance from mid-March 2027."
      ],
      source: "Notice section 3, and specification sections 1(4) and 2(5). " + NOTICE
    },
    data: {
      title: "Closed network, CSV replace, no external training — as specified",
      body: [
        "Use is on dedicated terminals the contractor supplies. Traffic between those terminals and the system, including child records, is a closed connection to the cloud environment and must not cross the public internet. The line is at least 10 Mbps, subject to a performance proposal.",
        "The interface is a web application. Login uses multi-factor authentication. Records move in by CSV, a full replace about once a week, done by the prefecture. The specification’s working volume for that load is about 2.4 million records and about 2.3 GB, to be confirmed in design. It says masking of personal information in that load is not required.",
        "The system is to be built on Amazon Web Services in a Japan region, including inference. Stored information, output, feedback, and usage are to be kept in a data centre in Japan.",
        "Information loaded, prompts, and outputs must not be used, beyond what providing this system needs, for training a third-party service or an external AI model. The same bar applies to generative-AI coding tools used on the project: information learned in the work must not be available for model training.",
        "The child-consultation system changes needed for the CSV link are outside this contract. The specification also says a later automatic link, and a later move into the prefecture’s own AWS tenant, should remain possible. Those are requirements on a future contractor, not behaviour of this file."
      ],
      source: "Specification sections 4, 5, 6, 7, 9(14), 9(17), and 12. " + NOTICE
    },
    refuse: {
      title: "This page refuses private case questions",
      kind: "refused",
      body: [
        "The real functions in the specification read child-consultation records, including names and family circumstances. Demonstrating that with a made-up child would still be a simulated case. This sample does not do that.",
        "There is no login, no upload, no account, and no store. The text box is cleared when you submit. What you type is not shown back and is not sent anywhere.",
        "If a question is about a person, a case number, a school, a family, or what should be done for a child, the answer is always this refusal, even if the rest of the sentence mentions the notice."
      ],
      source: "Boundary set for this 92 Logics prototype. It is not a rule of the prefecture’s specification."
    }
  };

  var PRIVATE = [
    "child", "children", "kid", "minor", "pupil", "student",
    "name", "dob", "birthday", "birth", "age", "school", "family",
    "parent", "mother", "father", "abuse", "neglect", "case",
    "protect", "custody", "foster",
    "児童", "子供", "子ども", "こども", "虐待", "ケース", "氏名",
    "生年月日", "学校", "家族", "保護者", "一時保護", "ネグレクト",
    "生徒", "年齢", "男児", "女児"
  ];

  var ROUTES = [
    { id: "dates", keys: ["deadline", "due", "date", "when", "schedule", "ceiling", "budget", "yen", "cap", "price", "参加", "期限", "上限"] },
    { id: "users", keys: ["who", "user", "where", "centre", "center", "terminal", "導入", "利用者"] },
    { id: "functions", keys: ["function", "feature", "similar", "summar", "draft", "機能", "類似"] },
    { id: "limits", keys: ["must not", "not decide", "decision", "limit", "out of scope", "判断"] },
    { id: "data", keys: ["data", "csv", "aws", "network", "privacy", "train", "closed", "個人情報", "閉域"] },
    { id: "procured", keys: ["procur", "what is", "contract", "buyer", "tochigi", "委託", "概要", "業務"] },
    { id: "refuse", keys: ["why", "refuse", "personal", "sample", "prototype", "デモ"] }
  ];

  var answerEl = document.getElementById("answer");
  var form = document.getElementById("free");
  var field = document.getElementById("q");
  var note = document.getElementById("typed-note");
  var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-q]"));

  function render(id) {
    var item = answers[id];
    if (!item) return;
    answerEl.className = "answer" + (item.kind === "refused" ? " refused" : "");
    answerEl.innerHTML = "";
    var kicker = document.createElement("p");
    kicker.className = "kicker";
    kicker.textContent = item.kind === "refused" ? "Refusal" : "Scripted from the public notice";
    var h = document.createElement("h3");
    h.textContent = item.title;
    var list = document.createElement("ul");
    item.body.forEach(function (line) {
      var li = document.createElement("li");
      li.textContent = line;
      list.appendChild(li);
    });
    var src = document.createElement("p");
    src.className = "src";
    src.textContent = item.source;
    answerEl.appendChild(kicker);
    answerEl.appendChild(h);
    answerEl.appendChild(list);
    answerEl.appendChild(src);
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-q") === id ? "true" : "false");
    });
  }

  function classify(raw) {
    var text = String(raw || "").toLowerCase();
    var folded = text;
    var i;
    if (!folded.trim()) return null;
    for (i = 0; i < PRIVATE.length; i += 1) {
      if (folded.indexOf(PRIVATE[i].toLowerCase()) !== -1) return "refuse";
    }
    if (/\d{4,}/.test(folded)) return "refuse";
    for (i = 0; i < ROUTES.length; i += 1) {
      var keys = ROUTES[i].keys;
      for (var k = 0; k < keys.length; k += 1) {
        if (folded.indexOf(keys[k]) !== -1) return ROUTES[i].id;
      }
    }
    return "refuse";
  }

  buttons.forEach(function (btn) {
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", function () {
      field.value = "";
      note.hidden = true;
      render(btn.getAttribute("data-q"));
      answerEl.focus();
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var raw = field.value;
    field.value = "";
    var id = classify(raw);
    if (!id) {
      note.hidden = false;
      note.textContent = "Type a question about the notice, or use the buttons. The box is cleared either way.";
      return;
    }
    note.hidden = false;
    note.textContent = id === "refuse"
      ? "The text was discarded and is not shown. Only the refusal below is displayed."
      : "The text was discarded and is not shown. A matching public-notice answer is below.";
    render(id);
    answerEl.focus();
  });

  document.getElementById("clear").addEventListener("click", function () {
    field.value = "";
    note.hidden = true;
    answerEl.className = "answer";
    answerEl.innerHTML = "";
    var kicker = document.createElement("p");
    kicker.className = "kicker";
    kicker.textContent = "Waiting";
    var h = document.createElement("h3");
    h.textContent = "Cleared";
    var p = document.createElement("p");
    p.textContent = "Nothing was stored. Select a button to read a scripted answer.";
    answerEl.appendChild(kicker);
    answerEl.appendChild(h);
    answerEl.appendChild(p);
    buttons.forEach(function (btn) { btn.setAttribute("aria-pressed", "false"); });
  });
})();
