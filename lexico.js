/**
 * lexico.js - Dữ liệu Từ vựng & Ngữ pháp (Lexico-Grammar & Reading Fill)
 * Cấu trúc chuẩn đề thi HSG Lớp 12 Sở GD&ĐT Thanh Hóa (10 Tests x 37 câu = 370 câu)
 * Bao gồm 6 dạng bài:
 *   1. Trắc nghiệm Từ vựng - Ngữ pháp độc lập (Câu hỏi đuôi, liên từ, đảo ngữ, cụm động từ, thành ngữ, collocations)
 *   2. Đọc điền văn bản Khoa học - Môi trường (Biến đổi khí hậu, kháng kháng sinh, rác thải điện tử...)
 *   3. Đọc điền hồ sơ / tờ rơi Danh nhân thế giới
 *   4. Đọc điền mệnh đề ngữ pháp ngữ cảnh (Contextual Clause Completion)
 *   5. Đọc điền thông báo / bản tin Môi trường - Đô thị bền vững
 *   6. Đọc hiểu Cloze test học thuật (Academic Guided Cloze)
 */

const lexicoData = [
  {
    "testId": 1,
    "title": "Đề ôn luyện HSG Lớp 12 Thanh Hóa - Test 01",
    "totalQuestions": 37,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Hardly ________ the research findings on antimicrobial resistance when several pharmaceutical conglomerates announced a shift in funding.",
        "options": [
          "A. had the institute published",
          "B. the institute had published",
          "C. did the institute publish",
          "D. was the institute publishing"
        ],
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ với 'Hardly ... when ...': Hardly + had + S + Vp2 + when + S + V(quá khứ đơn)."
      },
      {
        "id": 2,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Nobody in the regulatory committee anticipated such a rapid escalation of e-waste dumping, ________?",
        "options": [
          "A. did they",
          "B. didn't they",
          "C. did he",
          "D. hadn't they"
        ],
        "answer": "A",
        "explanation": "Câu hỏi đuôi với chủ ngữ 'Nobody' (mang nghĩa phủ định) dùng đại từ 'they' và trợ động từ khẳng định 'did'."
      },
      {
        "id": 3,
        "part": 1,
        "type": "standalone_mcq",
        "question": "________ the stringent emission quotas imposed last decade, global carbon concentrations have continued their upward trajectory.",
        "options": [
          "A. Albeit",
          "B. Notwithstanding",
          "C. Irrespective",
          "D. Whereas"
        ],
        "answer": "B",
        "explanation": "'Notwithstanding + cụm danh từ' = Mặc dù, bất chấp (tương đương Despite/In spite of ở văn phong trang trọng học thuật)."
      },
      {
        "id": 4,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The chief epidemiologist advised the ministry not to ________ the early warning signs of multidrug-resistant pathogens.",
        "options": [
          "A. brush aside",
          "B. crop up",
          "C. boil down",
          "D.eke out"
        ],
        "answer": "A",
        "explanation": "'brush aside' = phớt lờ, gạt bỏ không coi trọng."
      },
      {
        "id": 5,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The municipality's new recycling initiative is a far ________ from the comprehensive circular economy model proposed by environmental scientists.",
        "options": [
          "A. cry",
          "B. shout",
          "C. call",
          "D. scream"
        ],
        "answer": "A",
        "explanation": "Idiom 'a far cry from something' = khác xa hoàn toàn so với cái gì."
      },
      {
        "id": 6,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Were the permafrost to thaw at twice the projected rate, vast quantities of sequestered carbon ________ into the atmosphere.",
        "options": [
          "A. would be unleashed",
          "B. will be unleashed",
          "C. had been unleashed",
          "D. would have unleashed"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 2 với 'Were + S + to V, S + would + V'."
      },
      {
        "id": 7,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Many developing nations find themselves caught between a rock and a hard ________ when balancing industrial growth against ecological preservation.",
        "options": [
          "A. place",
          "B. stone",
          "C. spot",
          "D. ground"
        ],
        "answer": "A",
        "explanation": "Idiom 'between a rock and a hard place' = tiến thoái lưỡng nan."
      },
      {
        "id": 8,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The new biodegradable polymer is touted as a panacea, ________ its large-scale manufacturing still requires substantial fossil-fuel input.",
        "options": [
          "A. albeit",
          "B. whereas",
          "C. nonetheless",
          "D. whereby"
        ],
        "answer": "B",
        "explanation": "'whereas' nối hai mệnh đề tương phản nhau."
      },
      {
        "id": 9,
        "part": 1,
        "type": "standalone_mcq",
        "question": "After months of intense scrutiny, the chemical corporation finally had to ________ and admit that toxic effluents had seeped into the aquifer.",
        "options": [
          "A. face the music",
          "B. hit the sack",
          "C. spill the beans",
          "D. jump the gun"
        ],
        "answer": "A",
        "explanation": "'face the music' = chịu trận, đối mặt với hậu quả/sự chỉ trích."
      },
      {
        "id": 10,
        "part": 1,
        "type": "standalone_mcq",
        "question": "It is imperative that every hospital ________ strict stewardship protocols to curb the proliferation of superbugs.",
        "options": [
          "A. enforce",
          "B. enforces",
          "C. enforced",
          "D. is enforcing"
        ],
        "answer": "A",
        "explanation": "Thức giả định (Subjunctive mood): It is imperative that + S + V(nguyên thể không chia)."
      },
      {
        "id": 11,
        "part": 1,
        "type": "standalone_mcq",
        "question": "So pervasive ________ become that traces of synthetic polymers have been detected even in freshly fallen Antarctic snow.",
        "options": [
          "A. has microplastic pollution",
          "B. microplastic pollution has",
          "C. did microplastic pollution",
          "D. is microplastic pollution"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'So + adj + trợ động từ + S + V + that...'."
      },
      {
        "id": 12,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Local authorities have been accused of paying ________ service to reforestation while quietly approving new logging concessions.",
        "options": [
          "A. lip",
          "B. mouth",
          "C. tongue",
          "D. word"
        ],
        "answer": "A",
        "explanation": "Collocation/Idiom 'pay lip service to something' = chỉ nói suông, hứa hẹn đầu môi chót lưỡi."
      },
      {
        "id": 13,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": "SCIENTIFIC BRIEFING: CLIMATE CHANGE AND POLAR ICE CAPS\nRecent empirical studies have underscored the severity of climate change and polar ice caps, a phenomenon that (13) ________ far-reaching repercussions for planetary stability. Researchers warn that unless immediate mitigation strategies are (14) ________ into effect, ecological tipping points may be crossed within decades. Furthermore, the socioeconomic burden falls disproportionately on vulnerable communities, (15) ________ adaptive capacity remains severely constrained. Policymakers must therefore transition from incremental adjustments to systemic reforms, (16) ________ fostering international cooperation and technological transfer. Only through concerted multilateral action can humanity hope to (17) ________ the worst trajectories.",
        "question": "Question 13 (Blank 13)",
        "options": [
          "A. entails",
          "B. inflicts",
          "C. ensues",
          "D. breeds"
        ],
        "answer": "A",
        "explanation": "'entail repercussions' = kéo theo những hệ lụy tất yếu."
      },
      {
        "id": 14,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 14 (Blank 14)",
        "options": [
          "A. brought",
          "B. put",
          "C. taken",
          "D. made"
        ],
        "answer": "B",
        "explanation": "Collocation 'put into effect' = đưa vào thực thi, áp dụng."
      },
      {
        "id": 15,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 15 (Blank 15)",
        "options": [
          "A. whose",
          "B. which",
          "C. whom",
          "D. where"
        ],
        "answer": "A",
        "explanation": "Đại từ quan hệ sở hữu 'whose' bổ nghĩa cho 'vulnerable communities'."
      },
      {
        "id": 16,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 16 (Blank 16)",
        "options": [
          "A. thereby",
          "B. whereby",
          "C. wherein",
          "D. hitherto"
        ],
        "answer": "A",
        "explanation": "'thereby + V-ing' = qua đó, nhờ đó dẫn đến kết quả."
      },
      {
        "id": 17,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 17 (Blank 17)",
        "options": [
          "A. avert",
          "B. evade",
          "C. elude",
          "D. deflect"
        ],
        "answer": "A",
        "explanation": "'avert the worst trajectories/disasters' = ngăn chặn, đẩy lùi kịch bản tồi tệ nhất."
      },
      {
        "id": 18,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": "HERITAGE PROFILE: MARIE CURIE – PIONEERING RESEARCH ON RADIOACTIVITY\nFew figures in modern intellectual history have left as (18) ________ an imprint as Marie Curie. Working amidst formidable institutional skepticism, Marie Curie demonstrated unwavering perseverance, (19) ________ conventional paradigms that had long dominated the discipline. Not only (20) ________ a revolutionary theoretical framework, but this work also laid the cornerstone for subsequent generations of innovators. Even when confronted with resource scarcity and professional adversity, Marie Curie refused to (21) ________ on scientific rigor. Today, commemorative archives worldwide celebrate this legacy as a testament to human (22) ________.",
        "question": "Question 18 (Blank 18)",
        "options": [
          "A. indelible",
          "B. infallible",
          "C. inaudible",
          "D. illegible"
        ],
        "answer": "A",
        "explanation": "Collocation 'leave an indelible imprint/mark' = để lại dấu ấn không thể phai mờ."
      },
      {
        "id": 19,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 19 (Blank 19)",
        "options": [
          "A. dismantling",
          "B. dismantled",
          "C. to dismantle",
          "D. having been dismantled"
        ],
        "answer": "A",
        "explanation": "Rút gọn mệnh đề chủ động bằng hiện tại phân từ (V-ing) diễn tả hành động song song/hệ quả."
      },
      {
        "id": 20,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 20 (Blank 20)",
        "options": [
          "A. did the research establish",
          "B. the research established",
          "C. had the research established",
          "D. was the research establishing"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'Not only + did + S + V(nguyên thể)'."
      },
      {
        "id": 21,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 21 (Blank 21)",
        "options": [
          "A. compromise",
          "B. concede",
          "C. reconcile",
          "D. yield"
        ],
        "answer": "A",
        "explanation": "'compromise on something' = thỏa hiệp, hạ thấp tiêu chuẩn về điều gì."
      },
      {
        "id": 22,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 22 (Blank 22)",
        "options": [
          "A. ingenuity",
          "B. credulity",
          "C. complacency",
          "D. notoriety"
        ],
        "answer": "A",
        "explanation": "'human ingenuity' = sự tài trí, óc sáng tạo của con người."
      },
      {
        "id": 23,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": "CONTEMPORARY POLICY ANALYSIS: SAFEGUARDING GLOBAL COMMONS\nModern governance faces an unprecedented paradox: while scientific consensus on ecological degradation has never been clearer, regulatory enforcement remains fragmented. (23) ________. In many jurisdictions, short-term electoral cycles incentivize policymakers to defer costly structural transitions, (24) ________. Moreover, transnational supply chains obscure environmental accountability, making it exceedingly difficult (25) ________. Nevertheless, emerging legal frameworks have begun recognizing ecosystems as entities with intrinsic rights, (26) ________. Should these judicial precedents gain traction globally, (27) ________.",
        "question": "Question 23 (Blank 23)",
        "options": [
          "A. This disjunction stems largely from the tension between national sovereignty and collective planetary responsibility",
          "B. Having been resolved through bilateral treaties, national sovereignty no longer impedes planetary responsibility",
          "C. Seldom the tension between national sovereignty and planetary responsibility has been documented by analysts",
          "D. Which stems largely from the tension between national sovereignty and collective planetary responsibility"
        ],
        "answer": "A",
        "explanation": "Cần một câu hoàn chỉnh (mệnh đề độc lập) liên kết mạch lạc với câu mở đầu."
      },
      {
        "id": 24,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 24 (Blank 24)",
        "options": [
          "A. leaving future generations to shoulder the compounded ecological debt",
          "B. that leaves future generations shoulder the compounded ecological debt",
          "C. future generations are left to shoulder the compounded ecological debt",
          "D. whereby future generations shouldering the compounded ecological debt"
        ],
        "answer": "A",
        "explanation": "Cụm phân từ hiện tại 'leaving...' đóng vai trò bổ ngữ chỉ kết quả cho mệnh đề chính."
      },
      {
        "id": 25,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 25 (Blank 25)",
        "options": [
          "A. for independent watchdogs to trace illicit waste disposal back to its corporate originators",
          "B. that independent watchdogs trace illicit waste disposal back to its corporate originators",
          "C. independent watchdogs tracing illicit waste disposal back to its corporate originators",
          "D. of independent watchdogs to trace illicit waste disposal back to its corporate originators"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'make it + adj + for somebody + to V'."
      },
      {
        "id": 26,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 26 (Blank 26)",
        "options": [
          "A. a paradigm shift that empowers citizens to litigate on behalf of endangered habitats",
          "B. empowering citizens litigate on behalf of endangered habitats through a paradigm shift",
          "C. it is a paradigm shift empowers citizens to litigate on behalf of endangered habitats",
          "D. what empowers citizens to litigate on behalf of endangered habitats"
        ],
        "answer": "A",
        "explanation": "Cụm danh từ đồng vị ngữ (Appositive noun phrase) giải thích cho toàn bộ ý phía trước."
      },
      {
        "id": 27,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 27 (Blank 27)",
        "options": [
          "A. multinational corporations would be compelled to internalize the true environmental costs of their operations",
          "B. multinational corporations will compel to internalize the true environmental costs of their operations",
          "C. the true environmental costs of their operations would have been internalized by corporations",
          "D. did multinational corporations compel to internalize the true environmental costs"
        ],
        "answer": "A",
        "explanation": "Mệnh đề chính của câu điều kiện đảo ngữ với 'Should + S + V': S + would/will + V."
      },
      {
        "id": 28,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": "PUBLIC ADVISORY: SUSTAINABLE URBAN TRANSITION (SERIES 1)\nAs metropolitan areas confront escalating resource pressures, civic planners are (28) ________ citizens to adopt circular consumption habits. Discarded electronics and synthetic textiles, if left (29) ________ in municipal landfills, leach hazardous compounds into groundwater reserves. Residents are therefore encouraged to utilize designated collection hubs (30) ________ certified technicians dismantle and recover precious metals. By participating in these community-led schemes, households not only curtail pollution but also (31) ________ the demand for virgin raw materials, contributing to a resilient and (32) ________ urban ecosystem.",
        "question": "Question 28 (Blank 28)",
        "options": [
          "A. urging",
          "B. insisting",
          "C. pleading",
          "D. demanding"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'urge somebody to do something' = thúc giục, kêu gọi ai làm gì."
      },
      {
        "id": 29,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 29 (Blank 29)",
        "options": [
          "A. untreated",
          "B. untreating",
          "C. to untreated",
          "D. un-treat"
        ],
        "answer": "A",
        "explanation": "'left + adj/Vp2 (untreated)' = bị bỏ mặc trong tình trạng chưa qua xử lý."
      },
      {
        "id": 30,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 30 (Blank 30)",
        "options": [
          "A. where",
          "B. which",
          "C. when",
          "D. whose"
        ],
        "answer": "A",
        "explanation": "Trạng từ quan hệ 'where' thay thế cho 'designated collection hubs'."
      },
      {
        "id": 31,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 31 (Blank 31)",
        "options": [
          "A. alleviate",
          "B. aggravate",
          "C. exacerbate",
          "D. proliferate"
        ],
        "answer": "A",
        "explanation": "'alleviate the demand/pressure' = làm giảm bớt nhu cầu/áp lực."
      },
      {
        "id": 32,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 32 (Blank 32)",
        "options": [
          "A. regenerative",
          "B. redundant",
          "C. ephemeral",
          "D. obsolete"
        ],
        "answer": "A",
        "explanation": "'regenerative urban ecosystem' = hệ sinh thái đô thị có khả năng tái tạo."
      },
      {
        "id": 33,
        "part": 6,
        "type": "academic_cloze",
        "passage": "ACADEMIC CLOZE: EPISTEMIC HUMILITY IN THE ANTHROPOCENE\nThe accelerating complexity of global socio-ecological systems has exposed the limitations of reductionist science. Historically, researchers operated under the (33) ________ that natural phenomena could be isolated into discrete variables and predicted with mechanical precision. Yet, contemporary challenges—ranging from antimicrobial resistance to cascading climate feedbacks—defy such linear modeling. Complex adaptive systems exhibit emergent properties that cannot be (34) ________ solely from the behavior of their individual components. Consequently, scholars advocate 'epistemic humility': an acknowledgment that scientific models are provisional approximations rather than (35) ________ truths. Embracing uncertainty does not imply intellectual paralysis; (36) ________, it mandates the precautionary principle, urging societies to safeguard critical thresholds even in the absence of complete certitude. Ultimately, navigating the Anthropocene requires integrating empirical rigor with ethical (37) ________.",
        "question": "Question 33 (Blank 33)",
        "options": [
          "A. assumption",
          "B. resumption",
          "C. consumption",
          "D. presumption"
        ],
        "answer": "A",
        "explanation": "'operate under the assumption that...' = hoạt động dựa trên giả định rằng."
      },
      {
        "id": 34,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 34 (Blank 34)",
        "options": [
          "A. extrapolated",
          "B. interpolated",
          "C. eradicated",
          "D. corroborated"
        ],
        "answer": "A",
        "explanation": "'extrapolate from...' = ngoại suy, suy luận ra từ dữ liệu hiện có."
      },
      {
        "id": 35,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 35 (Blank 35)",
        "options": [
          "A. immutable",
          "B. volatile",
          "C. transient",
          "D. arbitrary"
        ],
        "answer": "A",
        "explanation": "'immutable truths' = những chân lý bất biến."
      },
      {
        "id": 36,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 36 (Blank 36)",
        "options": [
          "A. on the contrary",
          "B. by contrast",
          "C. in addition",
          "D. as a result"
        ],
        "answer": "A",
        "explanation": "'on the contrary' = trái lại (phủ định ý vừa nêu ở mệnh đề trước để khẳng định ý ngược lại)."
      },
      {
        "id": 37,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 37 (Blank 37)",
        "options": [
          "A. foresight",
          "B. hindsight",
          "C. oversight",
          "D. insight"
        ],
        "answer": "A",
        "explanation": "'ethical foresight' = tầm nhìn xa / sự nhìn trước về mặt đạo đức."
      }
    ]
  },
  {
    "testId": 2,
    "title": "Đề ôn luyện HSG Lớp 12 Thanh Hóa - Test 02",
    "totalQuestions": 37,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Nobody in the regulatory committee anticipated such a rapid escalation of e-waste dumping, ________?",
        "options": [
          "A. did they",
          "B. didn't they",
          "C. did he",
          "D. hadn't they"
        ],
        "answer": "A",
        "explanation": "Câu hỏi đuôi với chủ ngữ 'Nobody' (mang nghĩa phủ định) dùng đại từ 'they' và trợ động từ khẳng định 'did'."
      },
      {
        "id": 2,
        "part": 1,
        "type": "standalone_mcq",
        "question": "________ the stringent emission quotas imposed last decade, global carbon concentrations have continued their upward trajectory.",
        "options": [
          "A. Albeit",
          "B. Notwithstanding",
          "C. Irrespective",
          "D. Whereas"
        ],
        "answer": "B",
        "explanation": "'Notwithstanding + cụm danh từ' = Mặc dù, bất chấp (tương đương Despite/In spite of ở văn phong trang trọng học thuật)."
      },
      {
        "id": 3,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The chief epidemiologist advised the ministry not to ________ the early warning signs of multidrug-resistant pathogens.",
        "options": [
          "A. brush aside",
          "B. crop up",
          "C. boil down",
          "D.eke out"
        ],
        "answer": "A",
        "explanation": "'brush aside' = phớt lờ, gạt bỏ không coi trọng."
      },
      {
        "id": 4,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The municipality's new recycling initiative is a far ________ from the comprehensive circular economy model proposed by environmental scientists.",
        "options": [
          "A. cry",
          "B. shout",
          "C. call",
          "D. scream"
        ],
        "answer": "A",
        "explanation": "Idiom 'a far cry from something' = khác xa hoàn toàn so với cái gì."
      },
      {
        "id": 5,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Were the permafrost to thaw at twice the projected rate, vast quantities of sequestered carbon ________ into the atmosphere.",
        "options": [
          "A. would be unleashed",
          "B. will be unleashed",
          "C. had been unleashed",
          "D. would have unleashed"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 2 với 'Were + S + to V, S + would + V'."
      },
      {
        "id": 6,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Many developing nations find themselves caught between a rock and a hard ________ when balancing industrial growth against ecological preservation.",
        "options": [
          "A. place",
          "B. stone",
          "C. spot",
          "D. ground"
        ],
        "answer": "A",
        "explanation": "Idiom 'between a rock and a hard place' = tiến thoái lưỡng nan."
      },
      {
        "id": 7,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The new biodegradable polymer is touted as a panacea, ________ its large-scale manufacturing still requires substantial fossil-fuel input.",
        "options": [
          "A. albeit",
          "B. whereas",
          "C. nonetheless",
          "D. whereby"
        ],
        "answer": "B",
        "explanation": "'whereas' nối hai mệnh đề tương phản nhau."
      },
      {
        "id": 8,
        "part": 1,
        "type": "standalone_mcq",
        "question": "After months of intense scrutiny, the chemical corporation finally had to ________ and admit that toxic effluents had seeped into the aquifer.",
        "options": [
          "A. face the music",
          "B. hit the sack",
          "C. spill the beans",
          "D. jump the gun"
        ],
        "answer": "A",
        "explanation": "'face the music' = chịu trận, đối mặt với hậu quả/sự chỉ trích."
      },
      {
        "id": 9,
        "part": 1,
        "type": "standalone_mcq",
        "question": "It is imperative that every hospital ________ strict stewardship protocols to curb the proliferation of superbugs.",
        "options": [
          "A. enforce",
          "B. enforces",
          "C. enforced",
          "D. is enforcing"
        ],
        "answer": "A",
        "explanation": "Thức giả định (Subjunctive mood): It is imperative that + S + V(nguyên thể không chia)."
      },
      {
        "id": 10,
        "part": 1,
        "type": "standalone_mcq",
        "question": "So pervasive ________ become that traces of synthetic polymers have been detected even in freshly fallen Antarctic snow.",
        "options": [
          "A. has microplastic pollution",
          "B. microplastic pollution has",
          "C. did microplastic pollution",
          "D. is microplastic pollution"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'So + adj + trợ động từ + S + V + that...'."
      },
      {
        "id": 11,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Local authorities have been accused of paying ________ service to reforestation while quietly approving new logging concessions.",
        "options": [
          "A. lip",
          "B. mouth",
          "C. tongue",
          "D. word"
        ],
        "answer": "A",
        "explanation": "Collocation/Idiom 'pay lip service to something' = chỉ nói suông, hứa hẹn đầu môi chót lưỡi."
      },
      {
        "id": 12,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Hardly ________ the research findings on antimicrobial resistance when several pharmaceutical conglomerates announced a shift in funding.",
        "options": [
          "A. had the institute published",
          "B. the institute had published",
          "C. did the institute publish",
          "D. was the institute publishing"
        ],
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ với 'Hardly ... when ...': Hardly + had + S + Vp2 + when + S + V(quá khứ đơn)."
      },
      {
        "id": 13,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": "SCIENTIFIC BRIEFING: ANTIBIOTIC RESISTANCE CRISIS\nRecent empirical studies have underscored the severity of antibiotic resistance crisis, a phenomenon that (13) ________ far-reaching repercussions for planetary stability. Researchers warn that unless immediate mitigation strategies are (14) ________ into effect, ecological tipping points may be crossed within decades. Furthermore, the socioeconomic burden falls disproportionately on vulnerable communities, (15) ________ adaptive capacity remains severely constrained. Policymakers must therefore transition from incremental adjustments to systemic reforms, (16) ________ fostering international cooperation and technological transfer. Only through concerted multilateral action can humanity hope to (17) ________ the worst trajectories.",
        "question": "Question 13 (Blank 13)",
        "options": [
          "A. entails",
          "B. inflicts",
          "C. ensues",
          "D. breeds"
        ],
        "answer": "A",
        "explanation": "'entail repercussions' = kéo theo những hệ lụy tất yếu."
      },
      {
        "id": 14,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 14 (Blank 14)",
        "options": [
          "A. brought",
          "B. put",
          "C. taken",
          "D. made"
        ],
        "answer": "B",
        "explanation": "Collocation 'put into effect' = đưa vào thực thi, áp dụng."
      },
      {
        "id": 15,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 15 (Blank 15)",
        "options": [
          "A. whose",
          "B. which",
          "C. whom",
          "D. where"
        ],
        "answer": "A",
        "explanation": "Đại từ quan hệ sở hữu 'whose' bổ nghĩa cho 'vulnerable communities'."
      },
      {
        "id": 16,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 16 (Blank 16)",
        "options": [
          "A. thereby",
          "B. whereby",
          "C. wherein",
          "D. hitherto"
        ],
        "answer": "A",
        "explanation": "'thereby + V-ing' = qua đó, nhờ đó dẫn đến kết quả."
      },
      {
        "id": 17,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 17 (Blank 17)",
        "options": [
          "A. avert",
          "B. evade",
          "C. elude",
          "D. deflect"
        ],
        "answer": "A",
        "explanation": "'avert the worst trajectories/disasters' = ngăn chặn, đẩy lùi kịch bản tồi tệ nhất."
      },
      {
        "id": 18,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": "HERITAGE PROFILE: ALAN TURING – FOUNDATIONS OF THEORETICAL COMPUTER SCIENCE\nFew figures in modern intellectual history have left as (18) ________ an imprint as Alan Turing. Working amidst formidable institutional skepticism, Alan Turing demonstrated unwavering perseverance, (19) ________ conventional paradigms that had long dominated the discipline. Not only (20) ________ a revolutionary theoretical framework, but this work also laid the cornerstone for subsequent generations of innovators. Even when confronted with resource scarcity and professional adversity, Alan Turing refused to (21) ________ on scientific rigor. Today, commemorative archives worldwide celebrate this legacy as a testament to human (22) ________.",
        "question": "Question 18 (Blank 18)",
        "options": [
          "A. indelible",
          "B. infallible",
          "C. inaudible",
          "D. illegible"
        ],
        "answer": "A",
        "explanation": "Collocation 'leave an indelible imprint/mark' = để lại dấu ấn không thể phai mờ."
      },
      {
        "id": 19,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 19 (Blank 19)",
        "options": [
          "A. dismantling",
          "B. dismantled",
          "C. to dismantle",
          "D. having been dismantled"
        ],
        "answer": "A",
        "explanation": "Rút gọn mệnh đề chủ động bằng hiện tại phân từ (V-ing) diễn tả hành động song song/hệ quả."
      },
      {
        "id": 20,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 20 (Blank 20)",
        "options": [
          "A. did the research establish",
          "B. the research established",
          "C. had the research established",
          "D. was the research establishing"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'Not only + did + S + V(nguyên thể)'."
      },
      {
        "id": 21,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 21 (Blank 21)",
        "options": [
          "A. compromise",
          "B. concede",
          "C. reconcile",
          "D. yield"
        ],
        "answer": "A",
        "explanation": "'compromise on something' = thỏa hiệp, hạ thấp tiêu chuẩn về điều gì."
      },
      {
        "id": 22,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 22 (Blank 22)",
        "options": [
          "A. ingenuity",
          "B. credulity",
          "C. complacency",
          "D. notoriety"
        ],
        "answer": "A",
        "explanation": "'human ingenuity' = sự tài trí, óc sáng tạo của con người."
      },
      {
        "id": 23,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": "CONTEMPORARY POLICY ANALYSIS: SAFEGUARDING GLOBAL COMMONS\nModern governance faces an unprecedented paradox: while scientific consensus on ecological degradation has never been clearer, regulatory enforcement remains fragmented. (23) ________. In many jurisdictions, short-term electoral cycles incentivize policymakers to defer costly structural transitions, (24) ________. Moreover, transnational supply chains obscure environmental accountability, making it exceedingly difficult (25) ________. Nevertheless, emerging legal frameworks have begun recognizing ecosystems as entities with intrinsic rights, (26) ________. Should these judicial precedents gain traction globally, (27) ________.",
        "question": "Question 23 (Blank 23)",
        "options": [
          "A. This disjunction stems largely from the tension between national sovereignty and collective planetary responsibility",
          "B. Having been resolved through bilateral treaties, national sovereignty no longer impedes planetary responsibility",
          "C. Seldom the tension between national sovereignty and planetary responsibility has been documented by analysts",
          "D. Which stems largely from the tension between national sovereignty and collective planetary responsibility"
        ],
        "answer": "A",
        "explanation": "Cần một câu hoàn chỉnh (mệnh đề độc lập) liên kết mạch lạc với câu mở đầu."
      },
      {
        "id": 24,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 24 (Blank 24)",
        "options": [
          "A. leaving future generations to shoulder the compounded ecological debt",
          "B. that leaves future generations shoulder the compounded ecological debt",
          "C. future generations are left to shoulder the compounded ecological debt",
          "D. whereby future generations shouldering the compounded ecological debt"
        ],
        "answer": "A",
        "explanation": "Cụm phân từ hiện tại 'leaving...' đóng vai trò bổ ngữ chỉ kết quả cho mệnh đề chính."
      },
      {
        "id": 25,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 25 (Blank 25)",
        "options": [
          "A. for independent watchdogs to trace illicit waste disposal back to its corporate originators",
          "B. that independent watchdogs trace illicit waste disposal back to its corporate originators",
          "C. independent watchdogs tracing illicit waste disposal back to its corporate originators",
          "D. of independent watchdogs to trace illicit waste disposal back to its corporate originators"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'make it + adj + for somebody + to V'."
      },
      {
        "id": 26,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 26 (Blank 26)",
        "options": [
          "A. a paradigm shift that empowers citizens to litigate on behalf of endangered habitats",
          "B. empowering citizens litigate on behalf of endangered habitats through a paradigm shift",
          "C. it is a paradigm shift empowers citizens to litigate on behalf of endangered habitats",
          "D. what empowers citizens to litigate on behalf of endangered habitats"
        ],
        "answer": "A",
        "explanation": "Cụm danh từ đồng vị ngữ (Appositive noun phrase) giải thích cho toàn bộ ý phía trước."
      },
      {
        "id": 27,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 27 (Blank 27)",
        "options": [
          "A. multinational corporations would be compelled to internalize the true environmental costs of their operations",
          "B. multinational corporations will compel to internalize the true environmental costs of their operations",
          "C. the true environmental costs of their operations would have been internalized by corporations",
          "D. did multinational corporations compel to internalize the true environmental costs"
        ],
        "answer": "A",
        "explanation": "Mệnh đề chính của câu điều kiện đảo ngữ với 'Should + S + V': S + would/will + V."
      },
      {
        "id": 28,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": "PUBLIC ADVISORY: SUSTAINABLE URBAN TRANSITION (SERIES 2)\nAs metropolitan areas confront escalating resource pressures, civic planners are (28) ________ citizens to adopt circular consumption habits. Discarded electronics and synthetic textiles, if left (29) ________ in municipal landfills, leach hazardous compounds into groundwater reserves. Residents are therefore encouraged to utilize designated collection hubs (30) ________ certified technicians dismantle and recover precious metals. By participating in these community-led schemes, households not only curtail pollution but also (31) ________ the demand for virgin raw materials, contributing to a resilient and (32) ________ urban ecosystem.",
        "question": "Question 28 (Blank 28)",
        "options": [
          "A. urging",
          "B. insisting",
          "C. pleading",
          "D. demanding"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'urge somebody to do something' = thúc giục, kêu gọi ai làm gì."
      },
      {
        "id": 29,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 29 (Blank 29)",
        "options": [
          "A. untreated",
          "B. untreating",
          "C. to untreated",
          "D. un-treat"
        ],
        "answer": "A",
        "explanation": "'left + adj/Vp2 (untreated)' = bị bỏ mặc trong tình trạng chưa qua xử lý."
      },
      {
        "id": 30,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 30 (Blank 30)",
        "options": [
          "A. where",
          "B. which",
          "C. when",
          "D. whose"
        ],
        "answer": "A",
        "explanation": "Trạng từ quan hệ 'where' thay thế cho 'designated collection hubs'."
      },
      {
        "id": 31,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 31 (Blank 31)",
        "options": [
          "A. alleviate",
          "B. aggravate",
          "C. exacerbate",
          "D. proliferate"
        ],
        "answer": "A",
        "explanation": "'alleviate the demand/pressure' = làm giảm bớt nhu cầu/áp lực."
      },
      {
        "id": 32,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 32 (Blank 32)",
        "options": [
          "A. regenerative",
          "B. redundant",
          "C. ephemeral",
          "D. obsolete"
        ],
        "answer": "A",
        "explanation": "'regenerative urban ecosystem' = hệ sinh thái đô thị có khả năng tái tạo."
      },
      {
        "id": 33,
        "part": 6,
        "type": "academic_cloze",
        "passage": "ACADEMIC CLOZE: EPISTEMIC HUMILITY IN THE ANTHROPOCENE\nThe accelerating complexity of global socio-ecological systems has exposed the limitations of reductionist science. Historically, researchers operated under the (33) ________ that natural phenomena could be isolated into discrete variables and predicted with mechanical precision. Yet, contemporary challenges—ranging from antimicrobial resistance to cascading climate feedbacks—defy such linear modeling. Complex adaptive systems exhibit emergent properties that cannot be (34) ________ solely from the behavior of their individual components. Consequently, scholars advocate 'epistemic humility': an acknowledgment that scientific models are provisional approximations rather than (35) ________ truths. Embracing uncertainty does not imply intellectual paralysis; (36) ________, it mandates the precautionary principle, urging societies to safeguard critical thresholds even in the absence of complete certitude. Ultimately, navigating the Anthropocene requires integrating empirical rigor with ethical (37) ________.",
        "question": "Question 33 (Blank 33)",
        "options": [
          "A. assumption",
          "B. resumption",
          "C. consumption",
          "D. presumption"
        ],
        "answer": "A",
        "explanation": "'operate under the assumption that...' = hoạt động dựa trên giả định rằng."
      },
      {
        "id": 34,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 34 (Blank 34)",
        "options": [
          "A. extrapolated",
          "B. interpolated",
          "C. eradicated",
          "D. corroborated"
        ],
        "answer": "A",
        "explanation": "'extrapolate from...' = ngoại suy, suy luận ra từ dữ liệu hiện có."
      },
      {
        "id": 35,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 35 (Blank 35)",
        "options": [
          "A. immutable",
          "B. volatile",
          "C. transient",
          "D. arbitrary"
        ],
        "answer": "A",
        "explanation": "'immutable truths' = những chân lý bất biến."
      },
      {
        "id": 36,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 36 (Blank 36)",
        "options": [
          "A. on the contrary",
          "B. by contrast",
          "C. in addition",
          "D. as a result"
        ],
        "answer": "A",
        "explanation": "'on the contrary' = trái lại (phủ định ý vừa nêu ở mệnh đề trước để khẳng định ý ngược lại)."
      },
      {
        "id": 37,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 37 (Blank 37)",
        "options": [
          "A. foresight",
          "B. hindsight",
          "C. oversight",
          "D. insight"
        ],
        "answer": "A",
        "explanation": "'ethical foresight' = tầm nhìn xa / sự nhìn trước về mặt đạo đức."
      }
    ]
  },
  {
    "testId": 3,
    "title": "Đề ôn luyện HSG Lớp 12 Thanh Hóa - Test 03",
    "totalQuestions": 37,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "standalone_mcq",
        "question": "________ the stringent emission quotas imposed last decade, global carbon concentrations have continued their upward trajectory.",
        "options": [
          "A. Albeit",
          "B. Notwithstanding",
          "C. Irrespective",
          "D. Whereas"
        ],
        "answer": "B",
        "explanation": "'Notwithstanding + cụm danh từ' = Mặc dù, bất chấp (tương đương Despite/In spite of ở văn phong trang trọng học thuật)."
      },
      {
        "id": 2,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The chief epidemiologist advised the ministry not to ________ the early warning signs of multidrug-resistant pathogens.",
        "options": [
          "A. brush aside",
          "B. crop up",
          "C. boil down",
          "D.eke out"
        ],
        "answer": "A",
        "explanation": "'brush aside' = phớt lờ, gạt bỏ không coi trọng."
      },
      {
        "id": 3,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The municipality's new recycling initiative is a far ________ from the comprehensive circular economy model proposed by environmental scientists.",
        "options": [
          "A. cry",
          "B. shout",
          "C. call",
          "D. scream"
        ],
        "answer": "A",
        "explanation": "Idiom 'a far cry from something' = khác xa hoàn toàn so với cái gì."
      },
      {
        "id": 4,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Were the permafrost to thaw at twice the projected rate, vast quantities of sequestered carbon ________ into the atmosphere.",
        "options": [
          "A. would be unleashed",
          "B. will be unleashed",
          "C. had been unleashed",
          "D. would have unleashed"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 2 với 'Were + S + to V, S + would + V'."
      },
      {
        "id": 5,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Many developing nations find themselves caught between a rock and a hard ________ when balancing industrial growth against ecological preservation.",
        "options": [
          "A. place",
          "B. stone",
          "C. spot",
          "D. ground"
        ],
        "answer": "A",
        "explanation": "Idiom 'between a rock and a hard place' = tiến thoái lưỡng nan."
      },
      {
        "id": 6,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The new biodegradable polymer is touted as a panacea, ________ its large-scale manufacturing still requires substantial fossil-fuel input.",
        "options": [
          "A. albeit",
          "B. whereas",
          "C. nonetheless",
          "D. whereby"
        ],
        "answer": "B",
        "explanation": "'whereas' nối hai mệnh đề tương phản nhau."
      },
      {
        "id": 7,
        "part": 1,
        "type": "standalone_mcq",
        "question": "After months of intense scrutiny, the chemical corporation finally had to ________ and admit that toxic effluents had seeped into the aquifer.",
        "options": [
          "A. face the music",
          "B. hit the sack",
          "C. spill the beans",
          "D. jump the gun"
        ],
        "answer": "A",
        "explanation": "'face the music' = chịu trận, đối mặt với hậu quả/sự chỉ trích."
      },
      {
        "id": 8,
        "part": 1,
        "type": "standalone_mcq",
        "question": "It is imperative that every hospital ________ strict stewardship protocols to curb the proliferation of superbugs.",
        "options": [
          "A. enforce",
          "B. enforces",
          "C. enforced",
          "D. is enforcing"
        ],
        "answer": "A",
        "explanation": "Thức giả định (Subjunctive mood): It is imperative that + S + V(nguyên thể không chia)."
      },
      {
        "id": 9,
        "part": 1,
        "type": "standalone_mcq",
        "question": "So pervasive ________ become that traces of synthetic polymers have been detected even in freshly fallen Antarctic snow.",
        "options": [
          "A. has microplastic pollution",
          "B. microplastic pollution has",
          "C. did microplastic pollution",
          "D. is microplastic pollution"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'So + adj + trợ động từ + S + V + that...'."
      },
      {
        "id": 10,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Local authorities have been accused of paying ________ service to reforestation while quietly approving new logging concessions.",
        "options": [
          "A. lip",
          "B. mouth",
          "C. tongue",
          "D. word"
        ],
        "answer": "A",
        "explanation": "Collocation/Idiom 'pay lip service to something' = chỉ nói suông, hứa hẹn đầu môi chót lưỡi."
      },
      {
        "id": 11,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Hardly ________ the research findings on antimicrobial resistance when several pharmaceutical conglomerates announced a shift in funding.",
        "options": [
          "A. had the institute published",
          "B. the institute had published",
          "C. did the institute publish",
          "D. was the institute publishing"
        ],
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ với 'Hardly ... when ...': Hardly + had + S + Vp2 + when + S + V(quá khứ đơn)."
      },
      {
        "id": 12,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Nobody in the regulatory committee anticipated such a rapid escalation of e-waste dumping, ________?",
        "options": [
          "A. did they",
          "B. didn't they",
          "C. did he",
          "D. hadn't they"
        ],
        "answer": "A",
        "explanation": "Câu hỏi đuôi với chủ ngữ 'Nobody' (mang nghĩa phủ định) dùng đại từ 'they' và trợ động từ khẳng định 'did'."
      },
      {
        "id": 13,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": "SCIENTIFIC BRIEFING: ELECTRONIC WASTE (E-WASTE) MANAGEMENT\nRecent empirical studies have underscored the severity of electronic waste (e-waste) management, a phenomenon that (13) ________ far-reaching repercussions for planetary stability. Researchers warn that unless immediate mitigation strategies are (14) ________ into effect, ecological tipping points may be crossed within decades. Furthermore, the socioeconomic burden falls disproportionately on vulnerable communities, (15) ________ adaptive capacity remains severely constrained. Policymakers must therefore transition from incremental adjustments to systemic reforms, (16) ________ fostering international cooperation and technological transfer. Only through concerted multilateral action can humanity hope to (17) ________ the worst trajectories.",
        "question": "Question 13 (Blank 13)",
        "options": [
          "A. entails",
          "B. inflicts",
          "C. ensues",
          "D. breeds"
        ],
        "answer": "A",
        "explanation": "'entail repercussions' = kéo theo những hệ lụy tất yếu."
      },
      {
        "id": 14,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 14 (Blank 14)",
        "options": [
          "A. brought",
          "B. put",
          "C. taken",
          "D. made"
        ],
        "answer": "B",
        "explanation": "Collocation 'put into effect' = đưa vào thực thi, áp dụng."
      },
      {
        "id": 15,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 15 (Blank 15)",
        "options": [
          "A. whose",
          "B. which",
          "C. whom",
          "D. where"
        ],
        "answer": "A",
        "explanation": "Đại từ quan hệ sở hữu 'whose' bổ nghĩa cho 'vulnerable communities'."
      },
      {
        "id": 16,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 16 (Blank 16)",
        "options": [
          "A. thereby",
          "B. whereby",
          "C. wherein",
          "D. hitherto"
        ],
        "answer": "A",
        "explanation": "'thereby + V-ing' = qua đó, nhờ đó dẫn đến kết quả."
      },
      {
        "id": 17,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 17 (Blank 17)",
        "options": [
          "A. avert",
          "B. evade",
          "C. elude",
          "D. deflect"
        ],
        "answer": "A",
        "explanation": "'avert the worst trajectories/disasters' = ngăn chặn, đẩy lùi kịch bản tồi tệ nhất."
      },
      {
        "id": 18,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": "HERITAGE PROFILE: ROSALIND FRANKLIN – UNCOVERING THE DOUBLE HELIX STRUCTURE OF DNA\nFew figures in modern intellectual history have left as (18) ________ an imprint as Rosalind Franklin. Working amidst formidable institutional skepticism, Rosalind Franklin demonstrated unwavering perseverance, (19) ________ conventional paradigms that had long dominated the discipline. Not only (20) ________ a revolutionary theoretical framework, but this work also laid the cornerstone for subsequent generations of innovators. Even when confronted with resource scarcity and professional adversity, Rosalind Franklin refused to (21) ________ on scientific rigor. Today, commemorative archives worldwide celebrate this legacy as a testament to human (22) ________.",
        "question": "Question 18 (Blank 18)",
        "options": [
          "A. indelible",
          "B. infallible",
          "C. inaudible",
          "D. illegible"
        ],
        "answer": "A",
        "explanation": "Collocation 'leave an indelible imprint/mark' = để lại dấu ấn không thể phai mờ."
      },
      {
        "id": 19,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 19 (Blank 19)",
        "options": [
          "A. dismantling",
          "B. dismantled",
          "C. to dismantle",
          "D. having been dismantled"
        ],
        "answer": "A",
        "explanation": "Rút gọn mệnh đề chủ động bằng hiện tại phân từ (V-ing) diễn tả hành động song song/hệ quả."
      },
      {
        "id": 20,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 20 (Blank 20)",
        "options": [
          "A. did the research establish",
          "B. the research established",
          "C. had the research established",
          "D. was the research establishing"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'Not only + did + S + V(nguyên thể)'."
      },
      {
        "id": 21,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 21 (Blank 21)",
        "options": [
          "A. compromise",
          "B. concede",
          "C. reconcile",
          "D. yield"
        ],
        "answer": "A",
        "explanation": "'compromise on something' = thỏa hiệp, hạ thấp tiêu chuẩn về điều gì."
      },
      {
        "id": 22,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 22 (Blank 22)",
        "options": [
          "A. ingenuity",
          "B. credulity",
          "C. complacency",
          "D. notoriety"
        ],
        "answer": "A",
        "explanation": "'human ingenuity' = sự tài trí, óc sáng tạo của con người."
      },
      {
        "id": 23,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": "CONTEMPORARY POLICY ANALYSIS: SAFEGUARDING GLOBAL COMMONS\nModern governance faces an unprecedented paradox: while scientific consensus on ecological degradation has never been clearer, regulatory enforcement remains fragmented. (23) ________. In many jurisdictions, short-term electoral cycles incentivize policymakers to defer costly structural transitions, (24) ________. Moreover, transnational supply chains obscure environmental accountability, making it exceedingly difficult (25) ________. Nevertheless, emerging legal frameworks have begun recognizing ecosystems as entities with intrinsic rights, (26) ________. Should these judicial precedents gain traction globally, (27) ________.",
        "question": "Question 23 (Blank 23)",
        "options": [
          "A. This disjunction stems largely from the tension between national sovereignty and collective planetary responsibility",
          "B. Having been resolved through bilateral treaties, national sovereignty no longer impedes planetary responsibility",
          "C. Seldom the tension between national sovereignty and planetary responsibility has been documented by analysts",
          "D. Which stems largely from the tension between national sovereignty and collective planetary responsibility"
        ],
        "answer": "A",
        "explanation": "Cần một câu hoàn chỉnh (mệnh đề độc lập) liên kết mạch lạc với câu mở đầu."
      },
      {
        "id": 24,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 24 (Blank 24)",
        "options": [
          "A. leaving future generations to shoulder the compounded ecological debt",
          "B. that leaves future generations shoulder the compounded ecological debt",
          "C. future generations are left to shoulder the compounded ecological debt",
          "D. whereby future generations shouldering the compounded ecological debt"
        ],
        "answer": "A",
        "explanation": "Cụm phân từ hiện tại 'leaving...' đóng vai trò bổ ngữ chỉ kết quả cho mệnh đề chính."
      },
      {
        "id": 25,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 25 (Blank 25)",
        "options": [
          "A. for independent watchdogs to trace illicit waste disposal back to its corporate originators",
          "B. that independent watchdogs trace illicit waste disposal back to its corporate originators",
          "C. independent watchdogs tracing illicit waste disposal back to its corporate originators",
          "D. of independent watchdogs to trace illicit waste disposal back to its corporate originators"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'make it + adj + for somebody + to V'."
      },
      {
        "id": 26,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 26 (Blank 26)",
        "options": [
          "A. a paradigm shift that empowers citizens to litigate on behalf of endangered habitats",
          "B. empowering citizens litigate on behalf of endangered habitats through a paradigm shift",
          "C. it is a paradigm shift empowers citizens to litigate on behalf of endangered habitats",
          "D. what empowers citizens to litigate on behalf of endangered habitats"
        ],
        "answer": "A",
        "explanation": "Cụm danh từ đồng vị ngữ (Appositive noun phrase) giải thích cho toàn bộ ý phía trước."
      },
      {
        "id": 27,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 27 (Blank 27)",
        "options": [
          "A. multinational corporations would be compelled to internalize the true environmental costs of their operations",
          "B. multinational corporations will compel to internalize the true environmental costs of their operations",
          "C. the true environmental costs of their operations would have been internalized by corporations",
          "D. did multinational corporations compel to internalize the true environmental costs"
        ],
        "answer": "A",
        "explanation": "Mệnh đề chính của câu điều kiện đảo ngữ với 'Should + S + V': S + would/will + V."
      },
      {
        "id": 28,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": "PUBLIC ADVISORY: SUSTAINABLE URBAN TRANSITION (SERIES 3)\nAs metropolitan areas confront escalating resource pressures, civic planners are (28) ________ citizens to adopt circular consumption habits. Discarded electronics and synthetic textiles, if left (29) ________ in municipal landfills, leach hazardous compounds into groundwater reserves. Residents are therefore encouraged to utilize designated collection hubs (30) ________ certified technicians dismantle and recover precious metals. By participating in these community-led schemes, households not only curtail pollution but also (31) ________ the demand for virgin raw materials, contributing to a resilient and (32) ________ urban ecosystem.",
        "question": "Question 28 (Blank 28)",
        "options": [
          "A. urging",
          "B. insisting",
          "C. pleading",
          "D. demanding"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'urge somebody to do something' = thúc giục, kêu gọi ai làm gì."
      },
      {
        "id": 29,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 29 (Blank 29)",
        "options": [
          "A. untreated",
          "B. untreating",
          "C. to untreated",
          "D. un-treat"
        ],
        "answer": "A",
        "explanation": "'left + adj/Vp2 (untreated)' = bị bỏ mặc trong tình trạng chưa qua xử lý."
      },
      {
        "id": 30,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 30 (Blank 30)",
        "options": [
          "A. where",
          "B. which",
          "C. when",
          "D. whose"
        ],
        "answer": "A",
        "explanation": "Trạng từ quan hệ 'where' thay thế cho 'designated collection hubs'."
      },
      {
        "id": 31,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 31 (Blank 31)",
        "options": [
          "A. alleviate",
          "B. aggravate",
          "C. exacerbate",
          "D. proliferate"
        ],
        "answer": "A",
        "explanation": "'alleviate the demand/pressure' = làm giảm bớt nhu cầu/áp lực."
      },
      {
        "id": 32,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 32 (Blank 32)",
        "options": [
          "A. regenerative",
          "B. redundant",
          "C. ephemeral",
          "D. obsolete"
        ],
        "answer": "A",
        "explanation": "'regenerative urban ecosystem' = hệ sinh thái đô thị có khả năng tái tạo."
      },
      {
        "id": 33,
        "part": 6,
        "type": "academic_cloze",
        "passage": "ACADEMIC CLOZE: EPISTEMIC HUMILITY IN THE ANTHROPOCENE\nThe accelerating complexity of global socio-ecological systems has exposed the limitations of reductionist science. Historically, researchers operated under the (33) ________ that natural phenomena could be isolated into discrete variables and predicted with mechanical precision. Yet, contemporary challenges—ranging from antimicrobial resistance to cascading climate feedbacks—defy such linear modeling. Complex adaptive systems exhibit emergent properties that cannot be (34) ________ solely from the behavior of their individual components. Consequently, scholars advocate 'epistemic humility': an acknowledgment that scientific models are provisional approximations rather than (35) ________ truths. Embracing uncertainty does not imply intellectual paralysis; (36) ________, it mandates the precautionary principle, urging societies to safeguard critical thresholds even in the absence of complete certitude. Ultimately, navigating the Anthropocene requires integrating empirical rigor with ethical (37) ________.",
        "question": "Question 33 (Blank 33)",
        "options": [
          "A. assumption",
          "B. resumption",
          "C. consumption",
          "D. presumption"
        ],
        "answer": "A",
        "explanation": "'operate under the assumption that...' = hoạt động dựa trên giả định rằng."
      },
      {
        "id": 34,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 34 (Blank 34)",
        "options": [
          "A. extrapolated",
          "B. interpolated",
          "C. eradicated",
          "D. corroborated"
        ],
        "answer": "A",
        "explanation": "'extrapolate from...' = ngoại suy, suy luận ra từ dữ liệu hiện có."
      },
      {
        "id": 35,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 35 (Blank 35)",
        "options": [
          "A. immutable",
          "B. volatile",
          "C. transient",
          "D. arbitrary"
        ],
        "answer": "A",
        "explanation": "'immutable truths' = những chân lý bất biến."
      },
      {
        "id": 36,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 36 (Blank 36)",
        "options": [
          "A. on the contrary",
          "B. by contrast",
          "C. in addition",
          "D. as a result"
        ],
        "answer": "A",
        "explanation": "'on the contrary' = trái lại (phủ định ý vừa nêu ở mệnh đề trước để khẳng định ý ngược lại)."
      },
      {
        "id": 37,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 37 (Blank 37)",
        "options": [
          "A. foresight",
          "B. hindsight",
          "C. oversight",
          "D. insight"
        ],
        "answer": "A",
        "explanation": "'ethical foresight' = tầm nhìn xa / sự nhìn trước về mặt đạo đức."
      }
    ]
  },
  {
    "testId": 4,
    "title": "Đề ôn luyện HSG Lớp 12 Thanh Hóa - Test 04",
    "totalQuestions": 37,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The chief epidemiologist advised the ministry not to ________ the early warning signs of multidrug-resistant pathogens.",
        "options": [
          "A. brush aside",
          "B. crop up",
          "C. boil down",
          "D.eke out"
        ],
        "answer": "A",
        "explanation": "'brush aside' = phớt lờ, gạt bỏ không coi trọng."
      },
      {
        "id": 2,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The municipality's new recycling initiative is a far ________ from the comprehensive circular economy model proposed by environmental scientists.",
        "options": [
          "A. cry",
          "B. shout",
          "C. call",
          "D. scream"
        ],
        "answer": "A",
        "explanation": "Idiom 'a far cry from something' = khác xa hoàn toàn so với cái gì."
      },
      {
        "id": 3,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Were the permafrost to thaw at twice the projected rate, vast quantities of sequestered carbon ________ into the atmosphere.",
        "options": [
          "A. would be unleashed",
          "B. will be unleashed",
          "C. had been unleashed",
          "D. would have unleashed"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 2 với 'Were + S + to V, S + would + V'."
      },
      {
        "id": 4,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Many developing nations find themselves caught between a rock and a hard ________ when balancing industrial growth against ecological preservation.",
        "options": [
          "A. place",
          "B. stone",
          "C. spot",
          "D. ground"
        ],
        "answer": "A",
        "explanation": "Idiom 'between a rock and a hard place' = tiến thoái lưỡng nan."
      },
      {
        "id": 5,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The new biodegradable polymer is touted as a panacea, ________ its large-scale manufacturing still requires substantial fossil-fuel input.",
        "options": [
          "A. albeit",
          "B. whereas",
          "C. nonetheless",
          "D. whereby"
        ],
        "answer": "B",
        "explanation": "'whereas' nối hai mệnh đề tương phản nhau."
      },
      {
        "id": 6,
        "part": 1,
        "type": "standalone_mcq",
        "question": "After months of intense scrutiny, the chemical corporation finally had to ________ and admit that toxic effluents had seeped into the aquifer.",
        "options": [
          "A. face the music",
          "B. hit the sack",
          "C. spill the beans",
          "D. jump the gun"
        ],
        "answer": "A",
        "explanation": "'face the music' = chịu trận, đối mặt với hậu quả/sự chỉ trích."
      },
      {
        "id": 7,
        "part": 1,
        "type": "standalone_mcq",
        "question": "It is imperative that every hospital ________ strict stewardship protocols to curb the proliferation of superbugs.",
        "options": [
          "A. enforce",
          "B. enforces",
          "C. enforced",
          "D. is enforcing"
        ],
        "answer": "A",
        "explanation": "Thức giả định (Subjunctive mood): It is imperative that + S + V(nguyên thể không chia)."
      },
      {
        "id": 8,
        "part": 1,
        "type": "standalone_mcq",
        "question": "So pervasive ________ become that traces of synthetic polymers have been detected even in freshly fallen Antarctic snow.",
        "options": [
          "A. has microplastic pollution",
          "B. microplastic pollution has",
          "C. did microplastic pollution",
          "D. is microplastic pollution"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'So + adj + trợ động từ + S + V + that...'."
      },
      {
        "id": 9,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Local authorities have been accused of paying ________ service to reforestation while quietly approving new logging concessions.",
        "options": [
          "A. lip",
          "B. mouth",
          "C. tongue",
          "D. word"
        ],
        "answer": "A",
        "explanation": "Collocation/Idiom 'pay lip service to something' = chỉ nói suông, hứa hẹn đầu môi chót lưỡi."
      },
      {
        "id": 10,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Hardly ________ the research findings on antimicrobial resistance when several pharmaceutical conglomerates announced a shift in funding.",
        "options": [
          "A. had the institute published",
          "B. the institute had published",
          "C. did the institute publish",
          "D. was the institute publishing"
        ],
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ với 'Hardly ... when ...': Hardly + had + S + Vp2 + when + S + V(quá khứ đơn)."
      },
      {
        "id": 11,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Nobody in the regulatory committee anticipated such a rapid escalation of e-waste dumping, ________?",
        "options": [
          "A. did they",
          "B. didn't they",
          "C. did he",
          "D. hadn't they"
        ],
        "answer": "A",
        "explanation": "Câu hỏi đuôi với chủ ngữ 'Nobody' (mang nghĩa phủ định) dùng đại từ 'they' và trợ động từ khẳng định 'did'."
      },
      {
        "id": 12,
        "part": 1,
        "type": "standalone_mcq",
        "question": "________ the stringent emission quotas imposed last decade, global carbon concentrations have continued their upward trajectory.",
        "options": [
          "A. Albeit",
          "B. Notwithstanding",
          "C. Irrespective",
          "D. Whereas"
        ],
        "answer": "B",
        "explanation": "'Notwithstanding + cụm danh từ' = Mặc dù, bất chấp (tương đương Despite/In spite of ở văn phong trang trọng học thuật)."
      },
      {
        "id": 13,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": "SCIENTIFIC BRIEFING: MICROPLASTICS IN MARINE ECOSYSTEMS\nRecent empirical studies have underscored the severity of microplastics in marine ecosystems, a phenomenon that (13) ________ far-reaching repercussions for planetary stability. Researchers warn that unless immediate mitigation strategies are (14) ________ into effect, ecological tipping points may be crossed within decades. Furthermore, the socioeconomic burden falls disproportionately on vulnerable communities, (15) ________ adaptive capacity remains severely constrained. Policymakers must therefore transition from incremental adjustments to systemic reforms, (16) ________ fostering international cooperation and technological transfer. Only through concerted multilateral action can humanity hope to (17) ________ the worst trajectories.",
        "question": "Question 13 (Blank 13)",
        "options": [
          "A. entails",
          "B. inflicts",
          "C. ensues",
          "D. breeds"
        ],
        "answer": "A",
        "explanation": "'entail repercussions' = kéo theo những hệ lụy tất yếu."
      },
      {
        "id": 14,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 14 (Blank 14)",
        "options": [
          "A. brought",
          "B. put",
          "C. taken",
          "D. made"
        ],
        "answer": "B",
        "explanation": "Collocation 'put into effect' = đưa vào thực thi, áp dụng."
      },
      {
        "id": 15,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 15 (Blank 15)",
        "options": [
          "A. whose",
          "B. which",
          "C. whom",
          "D. where"
        ],
        "answer": "A",
        "explanation": "Đại từ quan hệ sở hữu 'whose' bổ nghĩa cho 'vulnerable communities'."
      },
      {
        "id": 16,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 16 (Blank 16)",
        "options": [
          "A. thereby",
          "B. whereby",
          "C. wherein",
          "D. hitherto"
        ],
        "answer": "A",
        "explanation": "'thereby + V-ing' = qua đó, nhờ đó dẫn đến kết quả."
      },
      {
        "id": 17,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 17 (Blank 17)",
        "options": [
          "A. avert",
          "B. evade",
          "C. elude",
          "D. deflect"
        ],
        "answer": "A",
        "explanation": "'avert the worst trajectories/disasters' = ngăn chặn, đẩy lùi kịch bản tồi tệ nhất."
      },
      {
        "id": 18,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": "HERITAGE PROFILE: ALEXANDER FLEMING – THE SERENDIPITOUS DISCOVERY OF PENICILLIN\nFew figures in modern intellectual history have left as (18) ________ an imprint as Alexander Fleming. Working amidst formidable institutional skepticism, Alexander Fleming demonstrated unwavering perseverance, (19) ________ conventional paradigms that had long dominated the discipline. Not only (20) ________ a revolutionary theoretical framework, but this work also laid the cornerstone for subsequent generations of innovators. Even when confronted with resource scarcity and professional adversity, Alexander Fleming refused to (21) ________ on scientific rigor. Today, commemorative archives worldwide celebrate this legacy as a testament to human (22) ________.",
        "question": "Question 18 (Blank 18)",
        "options": [
          "A. indelible",
          "B. infallible",
          "C. inaudible",
          "D. illegible"
        ],
        "answer": "A",
        "explanation": "Collocation 'leave an indelible imprint/mark' = để lại dấu ấn không thể phai mờ."
      },
      {
        "id": 19,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 19 (Blank 19)",
        "options": [
          "A. dismantling",
          "B. dismantled",
          "C. to dismantle",
          "D. having been dismantled"
        ],
        "answer": "A",
        "explanation": "Rút gọn mệnh đề chủ động bằng hiện tại phân từ (V-ing) diễn tả hành động song song/hệ quả."
      },
      {
        "id": 20,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 20 (Blank 20)",
        "options": [
          "A. did the research establish",
          "B. the research established",
          "C. had the research established",
          "D. was the research establishing"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'Not only + did + S + V(nguyên thể)'."
      },
      {
        "id": 21,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 21 (Blank 21)",
        "options": [
          "A. compromise",
          "B. concede",
          "C. reconcile",
          "D. yield"
        ],
        "answer": "A",
        "explanation": "'compromise on something' = thỏa hiệp, hạ thấp tiêu chuẩn về điều gì."
      },
      {
        "id": 22,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 22 (Blank 22)",
        "options": [
          "A. ingenuity",
          "B. credulity",
          "C. complacency",
          "D. notoriety"
        ],
        "answer": "A",
        "explanation": "'human ingenuity' = sự tài trí, óc sáng tạo của con người."
      },
      {
        "id": 23,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": "CONTEMPORARY POLICY ANALYSIS: SAFEGUARDING GLOBAL COMMONS\nModern governance faces an unprecedented paradox: while scientific consensus on ecological degradation has never been clearer, regulatory enforcement remains fragmented. (23) ________. In many jurisdictions, short-term electoral cycles incentivize policymakers to defer costly structural transitions, (24) ________. Moreover, transnational supply chains obscure environmental accountability, making it exceedingly difficult (25) ________. Nevertheless, emerging legal frameworks have begun recognizing ecosystems as entities with intrinsic rights, (26) ________. Should these judicial precedents gain traction globally, (27) ________.",
        "question": "Question 23 (Blank 23)",
        "options": [
          "A. This disjunction stems largely from the tension between national sovereignty and collective planetary responsibility",
          "B. Having been resolved through bilateral treaties, national sovereignty no longer impedes planetary responsibility",
          "C. Seldom the tension between national sovereignty and planetary responsibility has been documented by analysts",
          "D. Which stems largely from the tension between national sovereignty and collective planetary responsibility"
        ],
        "answer": "A",
        "explanation": "Cần một câu hoàn chỉnh (mệnh đề độc lập) liên kết mạch lạc với câu mở đầu."
      },
      {
        "id": 24,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 24 (Blank 24)",
        "options": [
          "A. leaving future generations to shoulder the compounded ecological debt",
          "B. that leaves future generations shoulder the compounded ecological debt",
          "C. future generations are left to shoulder the compounded ecological debt",
          "D. whereby future generations shouldering the compounded ecological debt"
        ],
        "answer": "A",
        "explanation": "Cụm phân từ hiện tại 'leaving...' đóng vai trò bổ ngữ chỉ kết quả cho mệnh đề chính."
      },
      {
        "id": 25,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 25 (Blank 25)",
        "options": [
          "A. for independent watchdogs to trace illicit waste disposal back to its corporate originators",
          "B. that independent watchdogs trace illicit waste disposal back to its corporate originators",
          "C. independent watchdogs tracing illicit waste disposal back to its corporate originators",
          "D. of independent watchdogs to trace illicit waste disposal back to its corporate originators"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'make it + adj + for somebody + to V'."
      },
      {
        "id": 26,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 26 (Blank 26)",
        "options": [
          "A. a paradigm shift that empowers citizens to litigate on behalf of endangered habitats",
          "B. empowering citizens litigate on behalf of endangered habitats through a paradigm shift",
          "C. it is a paradigm shift empowers citizens to litigate on behalf of endangered habitats",
          "D. what empowers citizens to litigate on behalf of endangered habitats"
        ],
        "answer": "A",
        "explanation": "Cụm danh từ đồng vị ngữ (Appositive noun phrase) giải thích cho toàn bộ ý phía trước."
      },
      {
        "id": 27,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 27 (Blank 27)",
        "options": [
          "A. multinational corporations would be compelled to internalize the true environmental costs of their operations",
          "B. multinational corporations will compel to internalize the true environmental costs of their operations",
          "C. the true environmental costs of their operations would have been internalized by corporations",
          "D. did multinational corporations compel to internalize the true environmental costs"
        ],
        "answer": "A",
        "explanation": "Mệnh đề chính của câu điều kiện đảo ngữ với 'Should + S + V': S + would/will + V."
      },
      {
        "id": 28,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": "PUBLIC ADVISORY: SUSTAINABLE URBAN TRANSITION (SERIES 4)\nAs metropolitan areas confront escalating resource pressures, civic planners are (28) ________ citizens to adopt circular consumption habits. Discarded electronics and synthetic textiles, if left (29) ________ in municipal landfills, leach hazardous compounds into groundwater reserves. Residents are therefore encouraged to utilize designated collection hubs (30) ________ certified technicians dismantle and recover precious metals. By participating in these community-led schemes, households not only curtail pollution but also (31) ________ the demand for virgin raw materials, contributing to a resilient and (32) ________ urban ecosystem.",
        "question": "Question 28 (Blank 28)",
        "options": [
          "A. urging",
          "B. insisting",
          "C. pleading",
          "D. demanding"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'urge somebody to do something' = thúc giục, kêu gọi ai làm gì."
      },
      {
        "id": 29,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 29 (Blank 29)",
        "options": [
          "A. untreated",
          "B. untreating",
          "C. to untreated",
          "D. un-treat"
        ],
        "answer": "A",
        "explanation": "'left + adj/Vp2 (untreated)' = bị bỏ mặc trong tình trạng chưa qua xử lý."
      },
      {
        "id": 30,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 30 (Blank 30)",
        "options": [
          "A. where",
          "B. which",
          "C. when",
          "D. whose"
        ],
        "answer": "A",
        "explanation": "Trạng từ quan hệ 'where' thay thế cho 'designated collection hubs'."
      },
      {
        "id": 31,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 31 (Blank 31)",
        "options": [
          "A. alleviate",
          "B. aggravate",
          "C. exacerbate",
          "D. proliferate"
        ],
        "answer": "A",
        "explanation": "'alleviate the demand/pressure' = làm giảm bớt nhu cầu/áp lực."
      },
      {
        "id": 32,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 32 (Blank 32)",
        "options": [
          "A. regenerative",
          "B. redundant",
          "C. ephemeral",
          "D. obsolete"
        ],
        "answer": "A",
        "explanation": "'regenerative urban ecosystem' = hệ sinh thái đô thị có khả năng tái tạo."
      },
      {
        "id": 33,
        "part": 6,
        "type": "academic_cloze",
        "passage": "ACADEMIC CLOZE: EPISTEMIC HUMILITY IN THE ANTHROPOCENE\nThe accelerating complexity of global socio-ecological systems has exposed the limitations of reductionist science. Historically, researchers operated under the (33) ________ that natural phenomena could be isolated into discrete variables and predicted with mechanical precision. Yet, contemporary challenges—ranging from antimicrobial resistance to cascading climate feedbacks—defy such linear modeling. Complex adaptive systems exhibit emergent properties that cannot be (34) ________ solely from the behavior of their individual components. Consequently, scholars advocate 'epistemic humility': an acknowledgment that scientific models are provisional approximations rather than (35) ________ truths. Embracing uncertainty does not imply intellectual paralysis; (36) ________, it mandates the precautionary principle, urging societies to safeguard critical thresholds even in the absence of complete certitude. Ultimately, navigating the Anthropocene requires integrating empirical rigor with ethical (37) ________.",
        "question": "Question 33 (Blank 33)",
        "options": [
          "A. assumption",
          "B. resumption",
          "C. consumption",
          "D. presumption"
        ],
        "answer": "A",
        "explanation": "'operate under the assumption that...' = hoạt động dựa trên giả định rằng."
      },
      {
        "id": 34,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 34 (Blank 34)",
        "options": [
          "A. extrapolated",
          "B. interpolated",
          "C. eradicated",
          "D. corroborated"
        ],
        "answer": "A",
        "explanation": "'extrapolate from...' = ngoại suy, suy luận ra từ dữ liệu hiện có."
      },
      {
        "id": 35,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 35 (Blank 35)",
        "options": [
          "A. immutable",
          "B. volatile",
          "C. transient",
          "D. arbitrary"
        ],
        "answer": "A",
        "explanation": "'immutable truths' = những chân lý bất biến."
      },
      {
        "id": 36,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 36 (Blank 36)",
        "options": [
          "A. on the contrary",
          "B. by contrast",
          "C. in addition",
          "D. as a result"
        ],
        "answer": "A",
        "explanation": "'on the contrary' = trái lại (phủ định ý vừa nêu ở mệnh đề trước để khẳng định ý ngược lại)."
      },
      {
        "id": 37,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 37 (Blank 37)",
        "options": [
          "A. foresight",
          "B. hindsight",
          "C. oversight",
          "D. insight"
        ],
        "answer": "A",
        "explanation": "'ethical foresight' = tầm nhìn xa / sự nhìn trước về mặt đạo đức."
      }
    ]
  },
  {
    "testId": 5,
    "title": "Đề ôn luyện HSG Lớp 12 Thanh Hóa - Test 05",
    "totalQuestions": 37,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The municipality's new recycling initiative is a far ________ from the comprehensive circular economy model proposed by environmental scientists.",
        "options": [
          "A. cry",
          "B. shout",
          "C. call",
          "D. scream"
        ],
        "answer": "A",
        "explanation": "Idiom 'a far cry from something' = khác xa hoàn toàn so với cái gì."
      },
      {
        "id": 2,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Were the permafrost to thaw at twice the projected rate, vast quantities of sequestered carbon ________ into the atmosphere.",
        "options": [
          "A. would be unleashed",
          "B. will be unleashed",
          "C. had been unleashed",
          "D. would have unleashed"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 2 với 'Were + S + to V, S + would + V'."
      },
      {
        "id": 3,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Many developing nations find themselves caught between a rock and a hard ________ when balancing industrial growth against ecological preservation.",
        "options": [
          "A. place",
          "B. stone",
          "C. spot",
          "D. ground"
        ],
        "answer": "A",
        "explanation": "Idiom 'between a rock and a hard place' = tiến thoái lưỡng nan."
      },
      {
        "id": 4,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The new biodegradable polymer is touted as a panacea, ________ its large-scale manufacturing still requires substantial fossil-fuel input.",
        "options": [
          "A. albeit",
          "B. whereas",
          "C. nonetheless",
          "D. whereby"
        ],
        "answer": "B",
        "explanation": "'whereas' nối hai mệnh đề tương phản nhau."
      },
      {
        "id": 5,
        "part": 1,
        "type": "standalone_mcq",
        "question": "After months of intense scrutiny, the chemical corporation finally had to ________ and admit that toxic effluents had seeped into the aquifer.",
        "options": [
          "A. face the music",
          "B. hit the sack",
          "C. spill the beans",
          "D. jump the gun"
        ],
        "answer": "A",
        "explanation": "'face the music' = chịu trận, đối mặt với hậu quả/sự chỉ trích."
      },
      {
        "id": 6,
        "part": 1,
        "type": "standalone_mcq",
        "question": "It is imperative that every hospital ________ strict stewardship protocols to curb the proliferation of superbugs.",
        "options": [
          "A. enforce",
          "B. enforces",
          "C. enforced",
          "D. is enforcing"
        ],
        "answer": "A",
        "explanation": "Thức giả định (Subjunctive mood): It is imperative that + S + V(nguyên thể không chia)."
      },
      {
        "id": 7,
        "part": 1,
        "type": "standalone_mcq",
        "question": "So pervasive ________ become that traces of synthetic polymers have been detected even in freshly fallen Antarctic snow.",
        "options": [
          "A. has microplastic pollution",
          "B. microplastic pollution has",
          "C. did microplastic pollution",
          "D. is microplastic pollution"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'So + adj + trợ động từ + S + V + that...'."
      },
      {
        "id": 8,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Local authorities have been accused of paying ________ service to reforestation while quietly approving new logging concessions.",
        "options": [
          "A. lip",
          "B. mouth",
          "C. tongue",
          "D. word"
        ],
        "answer": "A",
        "explanation": "Collocation/Idiom 'pay lip service to something' = chỉ nói suông, hứa hẹn đầu môi chót lưỡi."
      },
      {
        "id": 9,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Hardly ________ the research findings on antimicrobial resistance when several pharmaceutical conglomerates announced a shift in funding.",
        "options": [
          "A. had the institute published",
          "B. the institute had published",
          "C. did the institute publish",
          "D. was the institute publishing"
        ],
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ với 'Hardly ... when ...': Hardly + had + S + Vp2 + when + S + V(quá khứ đơn)."
      },
      {
        "id": 10,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Nobody in the regulatory committee anticipated such a rapid escalation of e-waste dumping, ________?",
        "options": [
          "A. did they",
          "B. didn't they",
          "C. did he",
          "D. hadn't they"
        ],
        "answer": "A",
        "explanation": "Câu hỏi đuôi với chủ ngữ 'Nobody' (mang nghĩa phủ định) dùng đại từ 'they' và trợ động từ khẳng định 'did'."
      },
      {
        "id": 11,
        "part": 1,
        "type": "standalone_mcq",
        "question": "________ the stringent emission quotas imposed last decade, global carbon concentrations have continued their upward trajectory.",
        "options": [
          "A. Albeit",
          "B. Notwithstanding",
          "C. Irrespective",
          "D. Whereas"
        ],
        "answer": "B",
        "explanation": "'Notwithstanding + cụm danh từ' = Mặc dù, bất chấp (tương đương Despite/In spite of ở văn phong trang trọng học thuật)."
      },
      {
        "id": 12,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The chief epidemiologist advised the ministry not to ________ the early warning signs of multidrug-resistant pathogens.",
        "options": [
          "A. brush aside",
          "B. crop up",
          "C. boil down",
          "D.eke out"
        ],
        "answer": "A",
        "explanation": "'brush aside' = phớt lờ, gạt bỏ không coi trọng."
      },
      {
        "id": 13,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": "SCIENTIFIC BRIEFING: PERMAFROST THAWING AND METHANE RELEASE\nRecent empirical studies have underscored the severity of permafrost thawing and methane release, a phenomenon that (13) ________ far-reaching repercussions for planetary stability. Researchers warn that unless immediate mitigation strategies are (14) ________ into effect, ecological tipping points may be crossed within decades. Furthermore, the socioeconomic burden falls disproportionately on vulnerable communities, (15) ________ adaptive capacity remains severely constrained. Policymakers must therefore transition from incremental adjustments to systemic reforms, (16) ________ fostering international cooperation and technological transfer. Only through concerted multilateral action can humanity hope to (17) ________ the worst trajectories.",
        "question": "Question 13 (Blank 13)",
        "options": [
          "A. entails",
          "B. inflicts",
          "C. ensues",
          "D. breeds"
        ],
        "answer": "A",
        "explanation": "'entail repercussions' = kéo theo những hệ lụy tất yếu."
      },
      {
        "id": 14,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 14 (Blank 14)",
        "options": [
          "A. brought",
          "B. put",
          "C. taken",
          "D. made"
        ],
        "answer": "B",
        "explanation": "Collocation 'put into effect' = đưa vào thực thi, áp dụng."
      },
      {
        "id": 15,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 15 (Blank 15)",
        "options": [
          "A. whose",
          "B. which",
          "C. whom",
          "D. where"
        ],
        "answer": "A",
        "explanation": "Đại từ quan hệ sở hữu 'whose' bổ nghĩa cho 'vulnerable communities'."
      },
      {
        "id": 16,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 16 (Blank 16)",
        "options": [
          "A. thereby",
          "B. whereby",
          "C. wherein",
          "D. hitherto"
        ],
        "answer": "A",
        "explanation": "'thereby + V-ing' = qua đó, nhờ đó dẫn đến kết quả."
      },
      {
        "id": 17,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 17 (Blank 17)",
        "options": [
          "A. avert",
          "B. evade",
          "C. elude",
          "D. deflect"
        ],
        "answer": "A",
        "explanation": "'avert the worst trajectories/disasters' = ngăn chặn, đẩy lùi kịch bản tồi tệ nhất."
      },
      {
        "id": 18,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": "HERITAGE PROFILE: RACHEL CARSON – CATALYZING THE MODERN ENVIRONMENTAL MOVEMENT\nFew figures in modern intellectual history have left as (18) ________ an imprint as Rachel Carson. Working amidst formidable institutional skepticism, Rachel Carson demonstrated unwavering perseverance, (19) ________ conventional paradigms that had long dominated the discipline. Not only (20) ________ a revolutionary theoretical framework, but this work also laid the cornerstone for subsequent generations of innovators. Even when confronted with resource scarcity and professional adversity, Rachel Carson refused to (21) ________ on scientific rigor. Today, commemorative archives worldwide celebrate this legacy as a testament to human (22) ________.",
        "question": "Question 18 (Blank 18)",
        "options": [
          "A. indelible",
          "B. infallible",
          "C. inaudible",
          "D. illegible"
        ],
        "answer": "A",
        "explanation": "Collocation 'leave an indelible imprint/mark' = để lại dấu ấn không thể phai mờ."
      },
      {
        "id": 19,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 19 (Blank 19)",
        "options": [
          "A. dismantling",
          "B. dismantled",
          "C. to dismantle",
          "D. having been dismantled"
        ],
        "answer": "A",
        "explanation": "Rút gọn mệnh đề chủ động bằng hiện tại phân từ (V-ing) diễn tả hành động song song/hệ quả."
      },
      {
        "id": 20,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 20 (Blank 20)",
        "options": [
          "A. did the research establish",
          "B. the research established",
          "C. had the research established",
          "D. was the research establishing"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'Not only + did + S + V(nguyên thể)'."
      },
      {
        "id": 21,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 21 (Blank 21)",
        "options": [
          "A. compromise",
          "B. concede",
          "C. reconcile",
          "D. yield"
        ],
        "answer": "A",
        "explanation": "'compromise on something' = thỏa hiệp, hạ thấp tiêu chuẩn về điều gì."
      },
      {
        "id": 22,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 22 (Blank 22)",
        "options": [
          "A. ingenuity",
          "B. credulity",
          "C. complacency",
          "D. notoriety"
        ],
        "answer": "A",
        "explanation": "'human ingenuity' = sự tài trí, óc sáng tạo của con người."
      },
      {
        "id": 23,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": "CONTEMPORARY POLICY ANALYSIS: SAFEGUARDING GLOBAL COMMONS\nModern governance faces an unprecedented paradox: while scientific consensus on ecological degradation has never been clearer, regulatory enforcement remains fragmented. (23) ________. In many jurisdictions, short-term electoral cycles incentivize policymakers to defer costly structural transitions, (24) ________. Moreover, transnational supply chains obscure environmental accountability, making it exceedingly difficult (25) ________. Nevertheless, emerging legal frameworks have begun recognizing ecosystems as entities with intrinsic rights, (26) ________. Should these judicial precedents gain traction globally, (27) ________.",
        "question": "Question 23 (Blank 23)",
        "options": [
          "A. This disjunction stems largely from the tension between national sovereignty and collective planetary responsibility",
          "B. Having been resolved through bilateral treaties, national sovereignty no longer impedes planetary responsibility",
          "C. Seldom the tension between national sovereignty and planetary responsibility has been documented by analysts",
          "D. Which stems largely from the tension between national sovereignty and collective planetary responsibility"
        ],
        "answer": "A",
        "explanation": "Cần một câu hoàn chỉnh (mệnh đề độc lập) liên kết mạch lạc với câu mở đầu."
      },
      {
        "id": 24,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 24 (Blank 24)",
        "options": [
          "A. leaving future generations to shoulder the compounded ecological debt",
          "B. that leaves future generations shoulder the compounded ecological debt",
          "C. future generations are left to shoulder the compounded ecological debt",
          "D. whereby future generations shouldering the compounded ecological debt"
        ],
        "answer": "A",
        "explanation": "Cụm phân từ hiện tại 'leaving...' đóng vai trò bổ ngữ chỉ kết quả cho mệnh đề chính."
      },
      {
        "id": 25,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 25 (Blank 25)",
        "options": [
          "A. for independent watchdogs to trace illicit waste disposal back to its corporate originators",
          "B. that independent watchdogs trace illicit waste disposal back to its corporate originators",
          "C. independent watchdogs tracing illicit waste disposal back to its corporate originators",
          "D. of independent watchdogs to trace illicit waste disposal back to its corporate originators"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'make it + adj + for somebody + to V'."
      },
      {
        "id": 26,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 26 (Blank 26)",
        "options": [
          "A. a paradigm shift that empowers citizens to litigate on behalf of endangered habitats",
          "B. empowering citizens litigate on behalf of endangered habitats through a paradigm shift",
          "C. it is a paradigm shift empowers citizens to litigate on behalf of endangered habitats",
          "D. what empowers citizens to litigate on behalf of endangered habitats"
        ],
        "answer": "A",
        "explanation": "Cụm danh từ đồng vị ngữ (Appositive noun phrase) giải thích cho toàn bộ ý phía trước."
      },
      {
        "id": 27,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 27 (Blank 27)",
        "options": [
          "A. multinational corporations would be compelled to internalize the true environmental costs of their operations",
          "B. multinational corporations will compel to internalize the true environmental costs of their operations",
          "C. the true environmental costs of their operations would have been internalized by corporations",
          "D. did multinational corporations compel to internalize the true environmental costs"
        ],
        "answer": "A",
        "explanation": "Mệnh đề chính của câu điều kiện đảo ngữ với 'Should + S + V': S + would/will + V."
      },
      {
        "id": 28,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": "PUBLIC ADVISORY: SUSTAINABLE URBAN TRANSITION (SERIES 5)\nAs metropolitan areas confront escalating resource pressures, civic planners are (28) ________ citizens to adopt circular consumption habits. Discarded electronics and synthetic textiles, if left (29) ________ in municipal landfills, leach hazardous compounds into groundwater reserves. Residents are therefore encouraged to utilize designated collection hubs (30) ________ certified technicians dismantle and recover precious metals. By participating in these community-led schemes, households not only curtail pollution but also (31) ________ the demand for virgin raw materials, contributing to a resilient and (32) ________ urban ecosystem.",
        "question": "Question 28 (Blank 28)",
        "options": [
          "A. urging",
          "B. insisting",
          "C. pleading",
          "D. demanding"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'urge somebody to do something' = thúc giục, kêu gọi ai làm gì."
      },
      {
        "id": 29,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 29 (Blank 29)",
        "options": [
          "A. untreated",
          "B. untreating",
          "C. to untreated",
          "D. un-treat"
        ],
        "answer": "A",
        "explanation": "'left + adj/Vp2 (untreated)' = bị bỏ mặc trong tình trạng chưa qua xử lý."
      },
      {
        "id": 30,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 30 (Blank 30)",
        "options": [
          "A. where",
          "B. which",
          "C. when",
          "D. whose"
        ],
        "answer": "A",
        "explanation": "Trạng từ quan hệ 'where' thay thế cho 'designated collection hubs'."
      },
      {
        "id": 31,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 31 (Blank 31)",
        "options": [
          "A. alleviate",
          "B. aggravate",
          "C. exacerbate",
          "D. proliferate"
        ],
        "answer": "A",
        "explanation": "'alleviate the demand/pressure' = làm giảm bớt nhu cầu/áp lực."
      },
      {
        "id": 32,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 32 (Blank 32)",
        "options": [
          "A. regenerative",
          "B. redundant",
          "C. ephemeral",
          "D. obsolete"
        ],
        "answer": "A",
        "explanation": "'regenerative urban ecosystem' = hệ sinh thái đô thị có khả năng tái tạo."
      },
      {
        "id": 33,
        "part": 6,
        "type": "academic_cloze",
        "passage": "ACADEMIC CLOZE: EPISTEMIC HUMILITY IN THE ANTHROPOCENE\nThe accelerating complexity of global socio-ecological systems has exposed the limitations of reductionist science. Historically, researchers operated under the (33) ________ that natural phenomena could be isolated into discrete variables and predicted with mechanical precision. Yet, contemporary challenges—ranging from antimicrobial resistance to cascading climate feedbacks—defy such linear modeling. Complex adaptive systems exhibit emergent properties that cannot be (34) ________ solely from the behavior of their individual components. Consequently, scholars advocate 'epistemic humility': an acknowledgment that scientific models are provisional approximations rather than (35) ________ truths. Embracing uncertainty does not imply intellectual paralysis; (36) ________, it mandates the precautionary principle, urging societies to safeguard critical thresholds even in the absence of complete certitude. Ultimately, navigating the Anthropocene requires integrating empirical rigor with ethical (37) ________.",
        "question": "Question 33 (Blank 33)",
        "options": [
          "A. assumption",
          "B. resumption",
          "C. consumption",
          "D. presumption"
        ],
        "answer": "A",
        "explanation": "'operate under the assumption that...' = hoạt động dựa trên giả định rằng."
      },
      {
        "id": 34,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 34 (Blank 34)",
        "options": [
          "A. extrapolated",
          "B. interpolated",
          "C. eradicated",
          "D. corroborated"
        ],
        "answer": "A",
        "explanation": "'extrapolate from...' = ngoại suy, suy luận ra từ dữ liệu hiện có."
      },
      {
        "id": 35,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 35 (Blank 35)",
        "options": [
          "A. immutable",
          "B. volatile",
          "C. transient",
          "D. arbitrary"
        ],
        "answer": "A",
        "explanation": "'immutable truths' = những chân lý bất biến."
      },
      {
        "id": 36,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 36 (Blank 36)",
        "options": [
          "A. on the contrary",
          "B. by contrast",
          "C. in addition",
          "D. as a result"
        ],
        "answer": "A",
        "explanation": "'on the contrary' = trái lại (phủ định ý vừa nêu ở mệnh đề trước để khẳng định ý ngược lại)."
      },
      {
        "id": 37,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 37 (Blank 37)",
        "options": [
          "A. foresight",
          "B. hindsight",
          "C. oversight",
          "D. insight"
        ],
        "answer": "A",
        "explanation": "'ethical foresight' = tầm nhìn xa / sự nhìn trước về mặt đạo đức."
      }
    ]
  },
  {
    "testId": 6,
    "title": "Đề ôn luyện HSG Lớp 12 Thanh Hóa - Test 06",
    "totalQuestions": 37,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Were the permafrost to thaw at twice the projected rate, vast quantities of sequestered carbon ________ into the atmosphere.",
        "options": [
          "A. would be unleashed",
          "B. will be unleashed",
          "C. had been unleashed",
          "D. would have unleashed"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 2 với 'Were + S + to V, S + would + V'."
      },
      {
        "id": 2,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Many developing nations find themselves caught between a rock and a hard ________ when balancing industrial growth against ecological preservation.",
        "options": [
          "A. place",
          "B. stone",
          "C. spot",
          "D. ground"
        ],
        "answer": "A",
        "explanation": "Idiom 'between a rock and a hard place' = tiến thoái lưỡng nan."
      },
      {
        "id": 3,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The new biodegradable polymer is touted as a panacea, ________ its large-scale manufacturing still requires substantial fossil-fuel input.",
        "options": [
          "A. albeit",
          "B. whereas",
          "C. nonetheless",
          "D. whereby"
        ],
        "answer": "B",
        "explanation": "'whereas' nối hai mệnh đề tương phản nhau."
      },
      {
        "id": 4,
        "part": 1,
        "type": "standalone_mcq",
        "question": "After months of intense scrutiny, the chemical corporation finally had to ________ and admit that toxic effluents had seeped into the aquifer.",
        "options": [
          "A. face the music",
          "B. hit the sack",
          "C. spill the beans",
          "D. jump the gun"
        ],
        "answer": "A",
        "explanation": "'face the music' = chịu trận, đối mặt với hậu quả/sự chỉ trích."
      },
      {
        "id": 5,
        "part": 1,
        "type": "standalone_mcq",
        "question": "It is imperative that every hospital ________ strict stewardship protocols to curb the proliferation of superbugs.",
        "options": [
          "A. enforce",
          "B. enforces",
          "C. enforced",
          "D. is enforcing"
        ],
        "answer": "A",
        "explanation": "Thức giả định (Subjunctive mood): It is imperative that + S + V(nguyên thể không chia)."
      },
      {
        "id": 6,
        "part": 1,
        "type": "standalone_mcq",
        "question": "So pervasive ________ become that traces of synthetic polymers have been detected even in freshly fallen Antarctic snow.",
        "options": [
          "A. has microplastic pollution",
          "B. microplastic pollution has",
          "C. did microplastic pollution",
          "D. is microplastic pollution"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'So + adj + trợ động từ + S + V + that...'."
      },
      {
        "id": 7,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Local authorities have been accused of paying ________ service to reforestation while quietly approving new logging concessions.",
        "options": [
          "A. lip",
          "B. mouth",
          "C. tongue",
          "D. word"
        ],
        "answer": "A",
        "explanation": "Collocation/Idiom 'pay lip service to something' = chỉ nói suông, hứa hẹn đầu môi chót lưỡi."
      },
      {
        "id": 8,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Hardly ________ the research findings on antimicrobial resistance when several pharmaceutical conglomerates announced a shift in funding.",
        "options": [
          "A. had the institute published",
          "B. the institute had published",
          "C. did the institute publish",
          "D. was the institute publishing"
        ],
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ với 'Hardly ... when ...': Hardly + had + S + Vp2 + when + S + V(quá khứ đơn)."
      },
      {
        "id": 9,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Nobody in the regulatory committee anticipated such a rapid escalation of e-waste dumping, ________?",
        "options": [
          "A. did they",
          "B. didn't they",
          "C. did he",
          "D. hadn't they"
        ],
        "answer": "A",
        "explanation": "Câu hỏi đuôi với chủ ngữ 'Nobody' (mang nghĩa phủ định) dùng đại từ 'they' và trợ động từ khẳng định 'did'."
      },
      {
        "id": 10,
        "part": 1,
        "type": "standalone_mcq",
        "question": "________ the stringent emission quotas imposed last decade, global carbon concentrations have continued their upward trajectory.",
        "options": [
          "A. Albeit",
          "B. Notwithstanding",
          "C. Irrespective",
          "D. Whereas"
        ],
        "answer": "B",
        "explanation": "'Notwithstanding + cụm danh từ' = Mặc dù, bất chấp (tương đương Despite/In spite of ở văn phong trang trọng học thuật)."
      },
      {
        "id": 11,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The chief epidemiologist advised the ministry not to ________ the early warning signs of multidrug-resistant pathogens.",
        "options": [
          "A. brush aside",
          "B. crop up",
          "C. boil down",
          "D.eke out"
        ],
        "answer": "A",
        "explanation": "'brush aside' = phớt lờ, gạt bỏ không coi trọng."
      },
      {
        "id": 12,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The municipality's new recycling initiative is a far ________ from the comprehensive circular economy model proposed by environmental scientists.",
        "options": [
          "A. cry",
          "B. shout",
          "C. call",
          "D. scream"
        ],
        "answer": "A",
        "explanation": "Idiom 'a far cry from something' = khác xa hoàn toàn so với cái gì."
      },
      {
        "id": 13,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": "SCIENTIFIC BRIEFING: URBAN HEAT ISLANDS AND GREEN ARCHITECTURE\nRecent empirical studies have underscored the severity of urban heat islands and green architecture, a phenomenon that (13) ________ far-reaching repercussions for planetary stability. Researchers warn that unless immediate mitigation strategies are (14) ________ into effect, ecological tipping points may be crossed within decades. Furthermore, the socioeconomic burden falls disproportionately on vulnerable communities, (15) ________ adaptive capacity remains severely constrained. Policymakers must therefore transition from incremental adjustments to systemic reforms, (16) ________ fostering international cooperation and technological transfer. Only through concerted multilateral action can humanity hope to (17) ________ the worst trajectories.",
        "question": "Question 13 (Blank 13)",
        "options": [
          "A. entails",
          "B. inflicts",
          "C. ensues",
          "D. breeds"
        ],
        "answer": "A",
        "explanation": "'entail repercussions' = kéo theo những hệ lụy tất yếu."
      },
      {
        "id": 14,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 14 (Blank 14)",
        "options": [
          "A. brought",
          "B. put",
          "C. taken",
          "D. made"
        ],
        "answer": "B",
        "explanation": "Collocation 'put into effect' = đưa vào thực thi, áp dụng."
      },
      {
        "id": 15,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 15 (Blank 15)",
        "options": [
          "A. whose",
          "B. which",
          "C. whom",
          "D. where"
        ],
        "answer": "A",
        "explanation": "Đại từ quan hệ sở hữu 'whose' bổ nghĩa cho 'vulnerable communities'."
      },
      {
        "id": 16,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 16 (Blank 16)",
        "options": [
          "A. thereby",
          "B. whereby",
          "C. wherein",
          "D. hitherto"
        ],
        "answer": "A",
        "explanation": "'thereby + V-ing' = qua đó, nhờ đó dẫn đến kết quả."
      },
      {
        "id": 17,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 17 (Blank 17)",
        "options": [
          "A. avert",
          "B. evade",
          "C. elude",
          "D. deflect"
        ],
        "answer": "A",
        "explanation": "'avert the worst trajectories/disasters' = ngăn chặn, đẩy lùi kịch bản tồi tệ nhất."
      },
      {
        "id": 18,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": "HERITAGE PROFILE: NIKOLA TESLA – ALTERNATING CURRENT AND WIRELESS POWER VISION\nFew figures in modern intellectual history have left as (18) ________ an imprint as Nikola Tesla. Working amidst formidable institutional skepticism, Nikola Tesla demonstrated unwavering perseverance, (19) ________ conventional paradigms that had long dominated the discipline. Not only (20) ________ a revolutionary theoretical framework, but this work also laid the cornerstone for subsequent generations of innovators. Even when confronted with resource scarcity and professional adversity, Nikola Tesla refused to (21) ________ on scientific rigor. Today, commemorative archives worldwide celebrate this legacy as a testament to human (22) ________.",
        "question": "Question 18 (Blank 18)",
        "options": [
          "A. indelible",
          "B. infallible",
          "C. inaudible",
          "D. illegible"
        ],
        "answer": "A",
        "explanation": "Collocation 'leave an indelible imprint/mark' = để lại dấu ấn không thể phai mờ."
      },
      {
        "id": 19,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 19 (Blank 19)",
        "options": [
          "A. dismantling",
          "B. dismantled",
          "C. to dismantle",
          "D. having been dismantled"
        ],
        "answer": "A",
        "explanation": "Rút gọn mệnh đề chủ động bằng hiện tại phân từ (V-ing) diễn tả hành động song song/hệ quả."
      },
      {
        "id": 20,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 20 (Blank 20)",
        "options": [
          "A. did the research establish",
          "B. the research established",
          "C. had the research established",
          "D. was the research establishing"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'Not only + did + S + V(nguyên thể)'."
      },
      {
        "id": 21,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 21 (Blank 21)",
        "options": [
          "A. compromise",
          "B. concede",
          "C. reconcile",
          "D. yield"
        ],
        "answer": "A",
        "explanation": "'compromise on something' = thỏa hiệp, hạ thấp tiêu chuẩn về điều gì."
      },
      {
        "id": 22,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 22 (Blank 22)",
        "options": [
          "A. ingenuity",
          "B. credulity",
          "C. complacency",
          "D. notoriety"
        ],
        "answer": "A",
        "explanation": "'human ingenuity' = sự tài trí, óc sáng tạo của con người."
      },
      {
        "id": 23,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": "CONTEMPORARY POLICY ANALYSIS: SAFEGUARDING GLOBAL COMMONS\nModern governance faces an unprecedented paradox: while scientific consensus on ecological degradation has never been clearer, regulatory enforcement remains fragmented. (23) ________. In many jurisdictions, short-term electoral cycles incentivize policymakers to defer costly structural transitions, (24) ________. Moreover, transnational supply chains obscure environmental accountability, making it exceedingly difficult (25) ________. Nevertheless, emerging legal frameworks have begun recognizing ecosystems as entities with intrinsic rights, (26) ________. Should these judicial precedents gain traction globally, (27) ________.",
        "question": "Question 23 (Blank 23)",
        "options": [
          "A. This disjunction stems largely from the tension between national sovereignty and collective planetary responsibility",
          "B. Having been resolved through bilateral treaties, national sovereignty no longer impedes planetary responsibility",
          "C. Seldom the tension between national sovereignty and planetary responsibility has been documented by analysts",
          "D. Which stems largely from the tension between national sovereignty and collective planetary responsibility"
        ],
        "answer": "A",
        "explanation": "Cần một câu hoàn chỉnh (mệnh đề độc lập) liên kết mạch lạc với câu mở đầu."
      },
      {
        "id": 24,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 24 (Blank 24)",
        "options": [
          "A. leaving future generations to shoulder the compounded ecological debt",
          "B. that leaves future generations shoulder the compounded ecological debt",
          "C. future generations are left to shoulder the compounded ecological debt",
          "D. whereby future generations shouldering the compounded ecological debt"
        ],
        "answer": "A",
        "explanation": "Cụm phân từ hiện tại 'leaving...' đóng vai trò bổ ngữ chỉ kết quả cho mệnh đề chính."
      },
      {
        "id": 25,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 25 (Blank 25)",
        "options": [
          "A. for independent watchdogs to trace illicit waste disposal back to its corporate originators",
          "B. that independent watchdogs trace illicit waste disposal back to its corporate originators",
          "C. independent watchdogs tracing illicit waste disposal back to its corporate originators",
          "D. of independent watchdogs to trace illicit waste disposal back to its corporate originators"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'make it + adj + for somebody + to V'."
      },
      {
        "id": 26,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 26 (Blank 26)",
        "options": [
          "A. a paradigm shift that empowers citizens to litigate on behalf of endangered habitats",
          "B. empowering citizens litigate on behalf of endangered habitats through a paradigm shift",
          "C. it is a paradigm shift empowers citizens to litigate on behalf of endangered habitats",
          "D. what empowers citizens to litigate on behalf of endangered habitats"
        ],
        "answer": "A",
        "explanation": "Cụm danh từ đồng vị ngữ (Appositive noun phrase) giải thích cho toàn bộ ý phía trước."
      },
      {
        "id": 27,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 27 (Blank 27)",
        "options": [
          "A. multinational corporations would be compelled to internalize the true environmental costs of their operations",
          "B. multinational corporations will compel to internalize the true environmental costs of their operations",
          "C. the true environmental costs of their operations would have been internalized by corporations",
          "D. did multinational corporations compel to internalize the true environmental costs"
        ],
        "answer": "A",
        "explanation": "Mệnh đề chính của câu điều kiện đảo ngữ với 'Should + S + V': S + would/will + V."
      },
      {
        "id": 28,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": "PUBLIC ADVISORY: SUSTAINABLE URBAN TRANSITION (SERIES 6)\nAs metropolitan areas confront escalating resource pressures, civic planners are (28) ________ citizens to adopt circular consumption habits. Discarded electronics and synthetic textiles, if left (29) ________ in municipal landfills, leach hazardous compounds into groundwater reserves. Residents are therefore encouraged to utilize designated collection hubs (30) ________ certified technicians dismantle and recover precious metals. By participating in these community-led schemes, households not only curtail pollution but also (31) ________ the demand for virgin raw materials, contributing to a resilient and (32) ________ urban ecosystem.",
        "question": "Question 28 (Blank 28)",
        "options": [
          "A. urging",
          "B. insisting",
          "C. pleading",
          "D. demanding"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'urge somebody to do something' = thúc giục, kêu gọi ai làm gì."
      },
      {
        "id": 29,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 29 (Blank 29)",
        "options": [
          "A. untreated",
          "B. untreating",
          "C. to untreated",
          "D. un-treat"
        ],
        "answer": "A",
        "explanation": "'left + adj/Vp2 (untreated)' = bị bỏ mặc trong tình trạng chưa qua xử lý."
      },
      {
        "id": 30,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 30 (Blank 30)",
        "options": [
          "A. where",
          "B. which",
          "C. when",
          "D. whose"
        ],
        "answer": "A",
        "explanation": "Trạng từ quan hệ 'where' thay thế cho 'designated collection hubs'."
      },
      {
        "id": 31,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 31 (Blank 31)",
        "options": [
          "A. alleviate",
          "B. aggravate",
          "C. exacerbate",
          "D. proliferate"
        ],
        "answer": "A",
        "explanation": "'alleviate the demand/pressure' = làm giảm bớt nhu cầu/áp lực."
      },
      {
        "id": 32,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 32 (Blank 32)",
        "options": [
          "A. regenerative",
          "B. redundant",
          "C. ephemeral",
          "D. obsolete"
        ],
        "answer": "A",
        "explanation": "'regenerative urban ecosystem' = hệ sinh thái đô thị có khả năng tái tạo."
      },
      {
        "id": 33,
        "part": 6,
        "type": "academic_cloze",
        "passage": "ACADEMIC CLOZE: EPISTEMIC HUMILITY IN THE ANTHROPOCENE\nThe accelerating complexity of global socio-ecological systems has exposed the limitations of reductionist science. Historically, researchers operated under the (33) ________ that natural phenomena could be isolated into discrete variables and predicted with mechanical precision. Yet, contemporary challenges—ranging from antimicrobial resistance to cascading climate feedbacks—defy such linear modeling. Complex adaptive systems exhibit emergent properties that cannot be (34) ________ solely from the behavior of their individual components. Consequently, scholars advocate 'epistemic humility': an acknowledgment that scientific models are provisional approximations rather than (35) ________ truths. Embracing uncertainty does not imply intellectual paralysis; (36) ________, it mandates the precautionary principle, urging societies to safeguard critical thresholds even in the absence of complete certitude. Ultimately, navigating the Anthropocene requires integrating empirical rigor with ethical (37) ________.",
        "question": "Question 33 (Blank 33)",
        "options": [
          "A. assumption",
          "B. resumption",
          "C. consumption",
          "D. presumption"
        ],
        "answer": "A",
        "explanation": "'operate under the assumption that...' = hoạt động dựa trên giả định rằng."
      },
      {
        "id": 34,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 34 (Blank 34)",
        "options": [
          "A. extrapolated",
          "B. interpolated",
          "C. eradicated",
          "D. corroborated"
        ],
        "answer": "A",
        "explanation": "'extrapolate from...' = ngoại suy, suy luận ra từ dữ liệu hiện có."
      },
      {
        "id": 35,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 35 (Blank 35)",
        "options": [
          "A. immutable",
          "B. volatile",
          "C. transient",
          "D. arbitrary"
        ],
        "answer": "A",
        "explanation": "'immutable truths' = những chân lý bất biến."
      },
      {
        "id": 36,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 36 (Blank 36)",
        "options": [
          "A. on the contrary",
          "B. by contrast",
          "C. in addition",
          "D. as a result"
        ],
        "answer": "A",
        "explanation": "'on the contrary' = trái lại (phủ định ý vừa nêu ở mệnh đề trước để khẳng định ý ngược lại)."
      },
      {
        "id": 37,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 37 (Blank 37)",
        "options": [
          "A. foresight",
          "B. hindsight",
          "C. oversight",
          "D. insight"
        ],
        "answer": "A",
        "explanation": "'ethical foresight' = tầm nhìn xa / sự nhìn trước về mặt đạo đức."
      }
    ]
  },
  {
    "testId": 7,
    "title": "Đề ôn luyện HSG Lớp 12 Thanh Hóa - Test 07",
    "totalQuestions": 37,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Many developing nations find themselves caught between a rock and a hard ________ when balancing industrial growth against ecological preservation.",
        "options": [
          "A. place",
          "B. stone",
          "C. spot",
          "D. ground"
        ],
        "answer": "A",
        "explanation": "Idiom 'between a rock and a hard place' = tiến thoái lưỡng nan."
      },
      {
        "id": 2,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The new biodegradable polymer is touted as a panacea, ________ its large-scale manufacturing still requires substantial fossil-fuel input.",
        "options": [
          "A. albeit",
          "B. whereas",
          "C. nonetheless",
          "D. whereby"
        ],
        "answer": "B",
        "explanation": "'whereas' nối hai mệnh đề tương phản nhau."
      },
      {
        "id": 3,
        "part": 1,
        "type": "standalone_mcq",
        "question": "After months of intense scrutiny, the chemical corporation finally had to ________ and admit that toxic effluents had seeped into the aquifer.",
        "options": [
          "A. face the music",
          "B. hit the sack",
          "C. spill the beans",
          "D. jump the gun"
        ],
        "answer": "A",
        "explanation": "'face the music' = chịu trận, đối mặt với hậu quả/sự chỉ trích."
      },
      {
        "id": 4,
        "part": 1,
        "type": "standalone_mcq",
        "question": "It is imperative that every hospital ________ strict stewardship protocols to curb the proliferation of superbugs.",
        "options": [
          "A. enforce",
          "B. enforces",
          "C. enforced",
          "D. is enforcing"
        ],
        "answer": "A",
        "explanation": "Thức giả định (Subjunctive mood): It is imperative that + S + V(nguyên thể không chia)."
      },
      {
        "id": 5,
        "part": 1,
        "type": "standalone_mcq",
        "question": "So pervasive ________ become that traces of synthetic polymers have been detected even in freshly fallen Antarctic snow.",
        "options": [
          "A. has microplastic pollution",
          "B. microplastic pollution has",
          "C. did microplastic pollution",
          "D. is microplastic pollution"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'So + adj + trợ động từ + S + V + that...'."
      },
      {
        "id": 6,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Local authorities have been accused of paying ________ service to reforestation while quietly approving new logging concessions.",
        "options": [
          "A. lip",
          "B. mouth",
          "C. tongue",
          "D. word"
        ],
        "answer": "A",
        "explanation": "Collocation/Idiom 'pay lip service to something' = chỉ nói suông, hứa hẹn đầu môi chót lưỡi."
      },
      {
        "id": 7,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Hardly ________ the research findings on antimicrobial resistance when several pharmaceutical conglomerates announced a shift in funding.",
        "options": [
          "A. had the institute published",
          "B. the institute had published",
          "C. did the institute publish",
          "D. was the institute publishing"
        ],
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ với 'Hardly ... when ...': Hardly + had + S + Vp2 + when + S + V(quá khứ đơn)."
      },
      {
        "id": 8,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Nobody in the regulatory committee anticipated such a rapid escalation of e-waste dumping, ________?",
        "options": [
          "A. did they",
          "B. didn't they",
          "C. did he",
          "D. hadn't they"
        ],
        "answer": "A",
        "explanation": "Câu hỏi đuôi với chủ ngữ 'Nobody' (mang nghĩa phủ định) dùng đại từ 'they' và trợ động từ khẳng định 'did'."
      },
      {
        "id": 9,
        "part": 1,
        "type": "standalone_mcq",
        "question": "________ the stringent emission quotas imposed last decade, global carbon concentrations have continued their upward trajectory.",
        "options": [
          "A. Albeit",
          "B. Notwithstanding",
          "C. Irrespective",
          "D. Whereas"
        ],
        "answer": "B",
        "explanation": "'Notwithstanding + cụm danh từ' = Mặc dù, bất chấp (tương đương Despite/In spite of ở văn phong trang trọng học thuật)."
      },
      {
        "id": 10,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The chief epidemiologist advised the ministry not to ________ the early warning signs of multidrug-resistant pathogens.",
        "options": [
          "A. brush aside",
          "B. crop up",
          "C. boil down",
          "D.eke out"
        ],
        "answer": "A",
        "explanation": "'brush aside' = phớt lờ, gạt bỏ không coi trọng."
      },
      {
        "id": 11,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The municipality's new recycling initiative is a far ________ from the comprehensive circular economy model proposed by environmental scientists.",
        "options": [
          "A. cry",
          "B. shout",
          "C. call",
          "D. scream"
        ],
        "answer": "A",
        "explanation": "Idiom 'a far cry from something' = khác xa hoàn toàn so với cái gì."
      },
      {
        "id": 12,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Were the permafrost to thaw at twice the projected rate, vast quantities of sequestered carbon ________ into the atmosphere.",
        "options": [
          "A. would be unleashed",
          "B. will be unleashed",
          "C. had been unleashed",
          "D. would have unleashed"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 2 với 'Were + S + to V, S + would + V'."
      },
      {
        "id": 13,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": "SCIENTIFIC BRIEFING: LOSS OF POLLINATORS AND BIODIVERSITY\nRecent empirical studies have underscored the severity of loss of pollinators and biodiversity, a phenomenon that (13) ________ far-reaching repercussions for planetary stability. Researchers warn that unless immediate mitigation strategies are (14) ________ into effect, ecological tipping points may be crossed within decades. Furthermore, the socioeconomic burden falls disproportionately on vulnerable communities, (15) ________ adaptive capacity remains severely constrained. Policymakers must therefore transition from incremental adjustments to systemic reforms, (16) ________ fostering international cooperation and technological transfer. Only through concerted multilateral action can humanity hope to (17) ________ the worst trajectories.",
        "question": "Question 13 (Blank 13)",
        "options": [
          "A. entails",
          "B. inflicts",
          "C. ensues",
          "D. breeds"
        ],
        "answer": "A",
        "explanation": "'entail repercussions' = kéo theo những hệ lụy tất yếu."
      },
      {
        "id": 14,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 14 (Blank 14)",
        "options": [
          "A. brought",
          "B. put",
          "C. taken",
          "D. made"
        ],
        "answer": "B",
        "explanation": "Collocation 'put into effect' = đưa vào thực thi, áp dụng."
      },
      {
        "id": 15,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 15 (Blank 15)",
        "options": [
          "A. whose",
          "B. which",
          "C. whom",
          "D. where"
        ],
        "answer": "A",
        "explanation": "Đại từ quan hệ sở hữu 'whose' bổ nghĩa cho 'vulnerable communities'."
      },
      {
        "id": 16,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 16 (Blank 16)",
        "options": [
          "A. thereby",
          "B. whereby",
          "C. wherein",
          "D. hitherto"
        ],
        "answer": "A",
        "explanation": "'thereby + V-ing' = qua đó, nhờ đó dẫn đến kết quả."
      },
      {
        "id": 17,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 17 (Blank 17)",
        "options": [
          "A. avert",
          "B. evade",
          "C. elude",
          "D. deflect"
        ],
        "answer": "A",
        "explanation": "'avert the worst trajectories/disasters' = ngăn chặn, đẩy lùi kịch bản tồi tệ nhất."
      },
      {
        "id": 18,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": "HERITAGE PROFILE: ADA LOVELACE – THE WORLD'S FIRST COMPUTER ALGORITHM\nFew figures in modern intellectual history have left as (18) ________ an imprint as Ada Lovelace. Working amidst formidable institutional skepticism, Ada Lovelace demonstrated unwavering perseverance, (19) ________ conventional paradigms that had long dominated the discipline. Not only (20) ________ a revolutionary theoretical framework, but this work also laid the cornerstone for subsequent generations of innovators. Even when confronted with resource scarcity and professional adversity, Ada Lovelace refused to (21) ________ on scientific rigor. Today, commemorative archives worldwide celebrate this legacy as a testament to human (22) ________.",
        "question": "Question 18 (Blank 18)",
        "options": [
          "A. indelible",
          "B. infallible",
          "C. inaudible",
          "D. illegible"
        ],
        "answer": "A",
        "explanation": "Collocation 'leave an indelible imprint/mark' = để lại dấu ấn không thể phai mờ."
      },
      {
        "id": 19,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 19 (Blank 19)",
        "options": [
          "A. dismantling",
          "B. dismantled",
          "C. to dismantle",
          "D. having been dismantled"
        ],
        "answer": "A",
        "explanation": "Rút gọn mệnh đề chủ động bằng hiện tại phân từ (V-ing) diễn tả hành động song song/hệ quả."
      },
      {
        "id": 20,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 20 (Blank 20)",
        "options": [
          "A. did the research establish",
          "B. the research established",
          "C. had the research established",
          "D. was the research establishing"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'Not only + did + S + V(nguyên thể)'."
      },
      {
        "id": 21,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 21 (Blank 21)",
        "options": [
          "A. compromise",
          "B. concede",
          "C. reconcile",
          "D. yield"
        ],
        "answer": "A",
        "explanation": "'compromise on something' = thỏa hiệp, hạ thấp tiêu chuẩn về điều gì."
      },
      {
        "id": 22,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 22 (Blank 22)",
        "options": [
          "A. ingenuity",
          "B. credulity",
          "C. complacency",
          "D. notoriety"
        ],
        "answer": "A",
        "explanation": "'human ingenuity' = sự tài trí, óc sáng tạo của con người."
      },
      {
        "id": 23,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": "CONTEMPORARY POLICY ANALYSIS: SAFEGUARDING GLOBAL COMMONS\nModern governance faces an unprecedented paradox: while scientific consensus on ecological degradation has never been clearer, regulatory enforcement remains fragmented. (23) ________. In many jurisdictions, short-term electoral cycles incentivize policymakers to defer costly structural transitions, (24) ________. Moreover, transnational supply chains obscure environmental accountability, making it exceedingly difficult (25) ________. Nevertheless, emerging legal frameworks have begun recognizing ecosystems as entities with intrinsic rights, (26) ________. Should these judicial precedents gain traction globally, (27) ________.",
        "question": "Question 23 (Blank 23)",
        "options": [
          "A. This disjunction stems largely from the tension between national sovereignty and collective planetary responsibility",
          "B. Having been resolved through bilateral treaties, national sovereignty no longer impedes planetary responsibility",
          "C. Seldom the tension between national sovereignty and planetary responsibility has been documented by analysts",
          "D. Which stems largely from the tension between national sovereignty and collective planetary responsibility"
        ],
        "answer": "A",
        "explanation": "Cần một câu hoàn chỉnh (mệnh đề độc lập) liên kết mạch lạc với câu mở đầu."
      },
      {
        "id": 24,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 24 (Blank 24)",
        "options": [
          "A. leaving future generations to shoulder the compounded ecological debt",
          "B. that leaves future generations shoulder the compounded ecological debt",
          "C. future generations are left to shoulder the compounded ecological debt",
          "D. whereby future generations shouldering the compounded ecological debt"
        ],
        "answer": "A",
        "explanation": "Cụm phân từ hiện tại 'leaving...' đóng vai trò bổ ngữ chỉ kết quả cho mệnh đề chính."
      },
      {
        "id": 25,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 25 (Blank 25)",
        "options": [
          "A. for independent watchdogs to trace illicit waste disposal back to its corporate originators",
          "B. that independent watchdogs trace illicit waste disposal back to its corporate originators",
          "C. independent watchdogs tracing illicit waste disposal back to its corporate originators",
          "D. of independent watchdogs to trace illicit waste disposal back to its corporate originators"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'make it + adj + for somebody + to V'."
      },
      {
        "id": 26,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 26 (Blank 26)",
        "options": [
          "A. a paradigm shift that empowers citizens to litigate on behalf of endangered habitats",
          "B. empowering citizens litigate on behalf of endangered habitats through a paradigm shift",
          "C. it is a paradigm shift empowers citizens to litigate on behalf of endangered habitats",
          "D. what empowers citizens to litigate on behalf of endangered habitats"
        ],
        "answer": "A",
        "explanation": "Cụm danh từ đồng vị ngữ (Appositive noun phrase) giải thích cho toàn bộ ý phía trước."
      },
      {
        "id": 27,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 27 (Blank 27)",
        "options": [
          "A. multinational corporations would be compelled to internalize the true environmental costs of their operations",
          "B. multinational corporations will compel to internalize the true environmental costs of their operations",
          "C. the true environmental costs of their operations would have been internalized by corporations",
          "D. did multinational corporations compel to internalize the true environmental costs"
        ],
        "answer": "A",
        "explanation": "Mệnh đề chính của câu điều kiện đảo ngữ với 'Should + S + V': S + would/will + V."
      },
      {
        "id": 28,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": "PUBLIC ADVISORY: SUSTAINABLE URBAN TRANSITION (SERIES 7)\nAs metropolitan areas confront escalating resource pressures, civic planners are (28) ________ citizens to adopt circular consumption habits. Discarded electronics and synthetic textiles, if left (29) ________ in municipal landfills, leach hazardous compounds into groundwater reserves. Residents are therefore encouraged to utilize designated collection hubs (30) ________ certified technicians dismantle and recover precious metals. By participating in these community-led schemes, households not only curtail pollution but also (31) ________ the demand for virgin raw materials, contributing to a resilient and (32) ________ urban ecosystem.",
        "question": "Question 28 (Blank 28)",
        "options": [
          "A. urging",
          "B. insisting",
          "C. pleading",
          "D. demanding"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'urge somebody to do something' = thúc giục, kêu gọi ai làm gì."
      },
      {
        "id": 29,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 29 (Blank 29)",
        "options": [
          "A. untreated",
          "B. untreating",
          "C. to untreated",
          "D. un-treat"
        ],
        "answer": "A",
        "explanation": "'left + adj/Vp2 (untreated)' = bị bỏ mặc trong tình trạng chưa qua xử lý."
      },
      {
        "id": 30,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 30 (Blank 30)",
        "options": [
          "A. where",
          "B. which",
          "C. when",
          "D. whose"
        ],
        "answer": "A",
        "explanation": "Trạng từ quan hệ 'where' thay thế cho 'designated collection hubs'."
      },
      {
        "id": 31,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 31 (Blank 31)",
        "options": [
          "A. alleviate",
          "B. aggravate",
          "C. exacerbate",
          "D. proliferate"
        ],
        "answer": "A",
        "explanation": "'alleviate the demand/pressure' = làm giảm bớt nhu cầu/áp lực."
      },
      {
        "id": 32,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 32 (Blank 32)",
        "options": [
          "A. regenerative",
          "B. redundant",
          "C. ephemeral",
          "D. obsolete"
        ],
        "answer": "A",
        "explanation": "'regenerative urban ecosystem' = hệ sinh thái đô thị có khả năng tái tạo."
      },
      {
        "id": 33,
        "part": 6,
        "type": "academic_cloze",
        "passage": "ACADEMIC CLOZE: EPISTEMIC HUMILITY IN THE ANTHROPOCENE\nThe accelerating complexity of global socio-ecological systems has exposed the limitations of reductionist science. Historically, researchers operated under the (33) ________ that natural phenomena could be isolated into discrete variables and predicted with mechanical precision. Yet, contemporary challenges—ranging from antimicrobial resistance to cascading climate feedbacks—defy such linear modeling. Complex adaptive systems exhibit emergent properties that cannot be (34) ________ solely from the behavior of their individual components. Consequently, scholars advocate 'epistemic humility': an acknowledgment that scientific models are provisional approximations rather than (35) ________ truths. Embracing uncertainty does not imply intellectual paralysis; (36) ________, it mandates the precautionary principle, urging societies to safeguard critical thresholds even in the absence of complete certitude. Ultimately, navigating the Anthropocene requires integrating empirical rigor with ethical (37) ________.",
        "question": "Question 33 (Blank 33)",
        "options": [
          "A. assumption",
          "B. resumption",
          "C. consumption",
          "D. presumption"
        ],
        "answer": "A",
        "explanation": "'operate under the assumption that...' = hoạt động dựa trên giả định rằng."
      },
      {
        "id": 34,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 34 (Blank 34)",
        "options": [
          "A. extrapolated",
          "B. interpolated",
          "C. eradicated",
          "D. corroborated"
        ],
        "answer": "A",
        "explanation": "'extrapolate from...' = ngoại suy, suy luận ra từ dữ liệu hiện có."
      },
      {
        "id": 35,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 35 (Blank 35)",
        "options": [
          "A. immutable",
          "B. volatile",
          "C. transient",
          "D. arbitrary"
        ],
        "answer": "A",
        "explanation": "'immutable truths' = những chân lý bất biến."
      },
      {
        "id": 36,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 36 (Blank 36)",
        "options": [
          "A. on the contrary",
          "B. by contrast",
          "C. in addition",
          "D. as a result"
        ],
        "answer": "A",
        "explanation": "'on the contrary' = trái lại (phủ định ý vừa nêu ở mệnh đề trước để khẳng định ý ngược lại)."
      },
      {
        "id": 37,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 37 (Blank 37)",
        "options": [
          "A. foresight",
          "B. hindsight",
          "C. oversight",
          "D. insight"
        ],
        "answer": "A",
        "explanation": "'ethical foresight' = tầm nhìn xa / sự nhìn trước về mặt đạo đức."
      }
    ]
  },
  {
    "testId": 8,
    "title": "Đề ôn luyện HSG Lớp 12 Thanh Hóa - Test 08",
    "totalQuestions": 37,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The new biodegradable polymer is touted as a panacea, ________ its large-scale manufacturing still requires substantial fossil-fuel input.",
        "options": [
          "A. albeit",
          "B. whereas",
          "C. nonetheless",
          "D. whereby"
        ],
        "answer": "B",
        "explanation": "'whereas' nối hai mệnh đề tương phản nhau."
      },
      {
        "id": 2,
        "part": 1,
        "type": "standalone_mcq",
        "question": "After months of intense scrutiny, the chemical corporation finally had to ________ and admit that toxic effluents had seeped into the aquifer.",
        "options": [
          "A. face the music",
          "B. hit the sack",
          "C. spill the beans",
          "D. jump the gun"
        ],
        "answer": "A",
        "explanation": "'face the music' = chịu trận, đối mặt với hậu quả/sự chỉ trích."
      },
      {
        "id": 3,
        "part": 1,
        "type": "standalone_mcq",
        "question": "It is imperative that every hospital ________ strict stewardship protocols to curb the proliferation of superbugs.",
        "options": [
          "A. enforce",
          "B. enforces",
          "C. enforced",
          "D. is enforcing"
        ],
        "answer": "A",
        "explanation": "Thức giả định (Subjunctive mood): It is imperative that + S + V(nguyên thể không chia)."
      },
      {
        "id": 4,
        "part": 1,
        "type": "standalone_mcq",
        "question": "So pervasive ________ become that traces of synthetic polymers have been detected even in freshly fallen Antarctic snow.",
        "options": [
          "A. has microplastic pollution",
          "B. microplastic pollution has",
          "C. did microplastic pollution",
          "D. is microplastic pollution"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'So + adj + trợ động từ + S + V + that...'."
      },
      {
        "id": 5,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Local authorities have been accused of paying ________ service to reforestation while quietly approving new logging concessions.",
        "options": [
          "A. lip",
          "B. mouth",
          "C. tongue",
          "D. word"
        ],
        "answer": "A",
        "explanation": "Collocation/Idiom 'pay lip service to something' = chỉ nói suông, hứa hẹn đầu môi chót lưỡi."
      },
      {
        "id": 6,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Hardly ________ the research findings on antimicrobial resistance when several pharmaceutical conglomerates announced a shift in funding.",
        "options": [
          "A. had the institute published",
          "B. the institute had published",
          "C. did the institute publish",
          "D. was the institute publishing"
        ],
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ với 'Hardly ... when ...': Hardly + had + S + Vp2 + when + S + V(quá khứ đơn)."
      },
      {
        "id": 7,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Nobody in the regulatory committee anticipated such a rapid escalation of e-waste dumping, ________?",
        "options": [
          "A. did they",
          "B. didn't they",
          "C. did he",
          "D. hadn't they"
        ],
        "answer": "A",
        "explanation": "Câu hỏi đuôi với chủ ngữ 'Nobody' (mang nghĩa phủ định) dùng đại từ 'they' và trợ động từ khẳng định 'did'."
      },
      {
        "id": 8,
        "part": 1,
        "type": "standalone_mcq",
        "question": "________ the stringent emission quotas imposed last decade, global carbon concentrations have continued their upward trajectory.",
        "options": [
          "A. Albeit",
          "B. Notwithstanding",
          "C. Irrespective",
          "D. Whereas"
        ],
        "answer": "B",
        "explanation": "'Notwithstanding + cụm danh từ' = Mặc dù, bất chấp (tương đương Despite/In spite of ở văn phong trang trọng học thuật)."
      },
      {
        "id": 9,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The chief epidemiologist advised the ministry not to ________ the early warning signs of multidrug-resistant pathogens.",
        "options": [
          "A. brush aside",
          "B. crop up",
          "C. boil down",
          "D.eke out"
        ],
        "answer": "A",
        "explanation": "'brush aside' = phớt lờ, gạt bỏ không coi trọng."
      },
      {
        "id": 10,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The municipality's new recycling initiative is a far ________ from the comprehensive circular economy model proposed by environmental scientists.",
        "options": [
          "A. cry",
          "B. shout",
          "C. call",
          "D. scream"
        ],
        "answer": "A",
        "explanation": "Idiom 'a far cry from something' = khác xa hoàn toàn so với cái gì."
      },
      {
        "id": 11,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Were the permafrost to thaw at twice the projected rate, vast quantities of sequestered carbon ________ into the atmosphere.",
        "options": [
          "A. would be unleashed",
          "B. will be unleashed",
          "C. had been unleashed",
          "D. would have unleashed"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 2 với 'Were + S + to V, S + would + V'."
      },
      {
        "id": 12,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Many developing nations find themselves caught between a rock and a hard ________ when balancing industrial growth against ecological preservation.",
        "options": [
          "A. place",
          "B. stone",
          "C. spot",
          "D. ground"
        ],
        "answer": "A",
        "explanation": "Idiom 'between a rock and a hard place' = tiến thoái lưỡng nan."
      },
      {
        "id": 13,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": "SCIENTIFIC BRIEFING: OCEAN ACIDIFICATION AND CORAL BLEACHING\nRecent empirical studies have underscored the severity of ocean acidification and coral bleaching, a phenomenon that (13) ________ far-reaching repercussions for planetary stability. Researchers warn that unless immediate mitigation strategies are (14) ________ into effect, ecological tipping points may be crossed within decades. Furthermore, the socioeconomic burden falls disproportionately on vulnerable communities, (15) ________ adaptive capacity remains severely constrained. Policymakers must therefore transition from incremental adjustments to systemic reforms, (16) ________ fostering international cooperation and technological transfer. Only through concerted multilateral action can humanity hope to (17) ________ the worst trajectories.",
        "question": "Question 13 (Blank 13)",
        "options": [
          "A. entails",
          "B. inflicts",
          "C. ensues",
          "D. breeds"
        ],
        "answer": "A",
        "explanation": "'entail repercussions' = kéo theo những hệ lụy tất yếu."
      },
      {
        "id": 14,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 14 (Blank 14)",
        "options": [
          "A. brought",
          "B. put",
          "C. taken",
          "D. made"
        ],
        "answer": "B",
        "explanation": "Collocation 'put into effect' = đưa vào thực thi, áp dụng."
      },
      {
        "id": 15,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 15 (Blank 15)",
        "options": [
          "A. whose",
          "B. which",
          "C. whom",
          "D. where"
        ],
        "answer": "A",
        "explanation": "Đại từ quan hệ sở hữu 'whose' bổ nghĩa cho 'vulnerable communities'."
      },
      {
        "id": 16,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 16 (Blank 16)",
        "options": [
          "A. thereby",
          "B. whereby",
          "C. wherein",
          "D. hitherto"
        ],
        "answer": "A",
        "explanation": "'thereby + V-ing' = qua đó, nhờ đó dẫn đến kết quả."
      },
      {
        "id": 17,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 17 (Blank 17)",
        "options": [
          "A. avert",
          "B. evade",
          "C. elude",
          "D. deflect"
        ],
        "answer": "A",
        "explanation": "'avert the worst trajectories/disasters' = ngăn chặn, đẩy lùi kịch bản tồi tệ nhất."
      },
      {
        "id": 18,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": "HERITAGE PROFILE: LOUIS PASTEUR – GERM THEORY AND THE BREAKTHROUGH OF VACCINATION\nFew figures in modern intellectual history have left as (18) ________ an imprint as Louis Pasteur. Working amidst formidable institutional skepticism, Louis Pasteur demonstrated unwavering perseverance, (19) ________ conventional paradigms that had long dominated the discipline. Not only (20) ________ a revolutionary theoretical framework, but this work also laid the cornerstone for subsequent generations of innovators. Even when confronted with resource scarcity and professional adversity, Louis Pasteur refused to (21) ________ on scientific rigor. Today, commemorative archives worldwide celebrate this legacy as a testament to human (22) ________.",
        "question": "Question 18 (Blank 18)",
        "options": [
          "A. indelible",
          "B. infallible",
          "C. inaudible",
          "D. illegible"
        ],
        "answer": "A",
        "explanation": "Collocation 'leave an indelible imprint/mark' = để lại dấu ấn không thể phai mờ."
      },
      {
        "id": 19,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 19 (Blank 19)",
        "options": [
          "A. dismantling",
          "B. dismantled",
          "C. to dismantle",
          "D. having been dismantled"
        ],
        "answer": "A",
        "explanation": "Rút gọn mệnh đề chủ động bằng hiện tại phân từ (V-ing) diễn tả hành động song song/hệ quả."
      },
      {
        "id": 20,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 20 (Blank 20)",
        "options": [
          "A. did the research establish",
          "B. the research established",
          "C. had the research established",
          "D. was the research establishing"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'Not only + did + S + V(nguyên thể)'."
      },
      {
        "id": 21,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 21 (Blank 21)",
        "options": [
          "A. compromise",
          "B. concede",
          "C. reconcile",
          "D. yield"
        ],
        "answer": "A",
        "explanation": "'compromise on something' = thỏa hiệp, hạ thấp tiêu chuẩn về điều gì."
      },
      {
        "id": 22,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 22 (Blank 22)",
        "options": [
          "A. ingenuity",
          "B. credulity",
          "C. complacency",
          "D. notoriety"
        ],
        "answer": "A",
        "explanation": "'human ingenuity' = sự tài trí, óc sáng tạo của con người."
      },
      {
        "id": 23,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": "CONTEMPORARY POLICY ANALYSIS: SAFEGUARDING GLOBAL COMMONS\nModern governance faces an unprecedented paradox: while scientific consensus on ecological degradation has never been clearer, regulatory enforcement remains fragmented. (23) ________. In many jurisdictions, short-term electoral cycles incentivize policymakers to defer costly structural transitions, (24) ________. Moreover, transnational supply chains obscure environmental accountability, making it exceedingly difficult (25) ________. Nevertheless, emerging legal frameworks have begun recognizing ecosystems as entities with intrinsic rights, (26) ________. Should these judicial precedents gain traction globally, (27) ________.",
        "question": "Question 23 (Blank 23)",
        "options": [
          "A. This disjunction stems largely from the tension between national sovereignty and collective planetary responsibility",
          "B. Having been resolved through bilateral treaties, national sovereignty no longer impedes planetary responsibility",
          "C. Seldom the tension between national sovereignty and planetary responsibility has been documented by analysts",
          "D. Which stems largely from the tension between national sovereignty and collective planetary responsibility"
        ],
        "answer": "A",
        "explanation": "Cần một câu hoàn chỉnh (mệnh đề độc lập) liên kết mạch lạc với câu mở đầu."
      },
      {
        "id": 24,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 24 (Blank 24)",
        "options": [
          "A. leaving future generations to shoulder the compounded ecological debt",
          "B. that leaves future generations shoulder the compounded ecological debt",
          "C. future generations are left to shoulder the compounded ecological debt",
          "D. whereby future generations shouldering the compounded ecological debt"
        ],
        "answer": "A",
        "explanation": "Cụm phân từ hiện tại 'leaving...' đóng vai trò bổ ngữ chỉ kết quả cho mệnh đề chính."
      },
      {
        "id": 25,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 25 (Blank 25)",
        "options": [
          "A. for independent watchdogs to trace illicit waste disposal back to its corporate originators",
          "B. that independent watchdogs trace illicit waste disposal back to its corporate originators",
          "C. independent watchdogs tracing illicit waste disposal back to its corporate originators",
          "D. of independent watchdogs to trace illicit waste disposal back to its corporate originators"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'make it + adj + for somebody + to V'."
      },
      {
        "id": 26,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 26 (Blank 26)",
        "options": [
          "A. a paradigm shift that empowers citizens to litigate on behalf of endangered habitats",
          "B. empowering citizens litigate on behalf of endangered habitats through a paradigm shift",
          "C. it is a paradigm shift empowers citizens to litigate on behalf of endangered habitats",
          "D. what empowers citizens to litigate on behalf of endangered habitats"
        ],
        "answer": "A",
        "explanation": "Cụm danh từ đồng vị ngữ (Appositive noun phrase) giải thích cho toàn bộ ý phía trước."
      },
      {
        "id": 27,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 27 (Blank 27)",
        "options": [
          "A. multinational corporations would be compelled to internalize the true environmental costs of their operations",
          "B. multinational corporations will compel to internalize the true environmental costs of their operations",
          "C. the true environmental costs of their operations would have been internalized by corporations",
          "D. did multinational corporations compel to internalize the true environmental costs"
        ],
        "answer": "A",
        "explanation": "Mệnh đề chính của câu điều kiện đảo ngữ với 'Should + S + V': S + would/will + V."
      },
      {
        "id": 28,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": "PUBLIC ADVISORY: SUSTAINABLE URBAN TRANSITION (SERIES 8)\nAs metropolitan areas confront escalating resource pressures, civic planners are (28) ________ citizens to adopt circular consumption habits. Discarded electronics and synthetic textiles, if left (29) ________ in municipal landfills, leach hazardous compounds into groundwater reserves. Residents are therefore encouraged to utilize designated collection hubs (30) ________ certified technicians dismantle and recover precious metals. By participating in these community-led schemes, households not only curtail pollution but also (31) ________ the demand for virgin raw materials, contributing to a resilient and (32) ________ urban ecosystem.",
        "question": "Question 28 (Blank 28)",
        "options": [
          "A. urging",
          "B. insisting",
          "C. pleading",
          "D. demanding"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'urge somebody to do something' = thúc giục, kêu gọi ai làm gì."
      },
      {
        "id": 29,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 29 (Blank 29)",
        "options": [
          "A. untreated",
          "B. untreating",
          "C. to untreated",
          "D. un-treat"
        ],
        "answer": "A",
        "explanation": "'left + adj/Vp2 (untreated)' = bị bỏ mặc trong tình trạng chưa qua xử lý."
      },
      {
        "id": 30,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 30 (Blank 30)",
        "options": [
          "A. where",
          "B. which",
          "C. when",
          "D. whose"
        ],
        "answer": "A",
        "explanation": "Trạng từ quan hệ 'where' thay thế cho 'designated collection hubs'."
      },
      {
        "id": 31,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 31 (Blank 31)",
        "options": [
          "A. alleviate",
          "B. aggravate",
          "C. exacerbate",
          "D. proliferate"
        ],
        "answer": "A",
        "explanation": "'alleviate the demand/pressure' = làm giảm bớt nhu cầu/áp lực."
      },
      {
        "id": 32,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 32 (Blank 32)",
        "options": [
          "A. regenerative",
          "B. redundant",
          "C. ephemeral",
          "D. obsolete"
        ],
        "answer": "A",
        "explanation": "'regenerative urban ecosystem' = hệ sinh thái đô thị có khả năng tái tạo."
      },
      {
        "id": 33,
        "part": 6,
        "type": "academic_cloze",
        "passage": "ACADEMIC CLOZE: EPISTEMIC HUMILITY IN THE ANTHROPOCENE\nThe accelerating complexity of global socio-ecological systems has exposed the limitations of reductionist science. Historically, researchers operated under the (33) ________ that natural phenomena could be isolated into discrete variables and predicted with mechanical precision. Yet, contemporary challenges—ranging from antimicrobial resistance to cascading climate feedbacks—defy such linear modeling. Complex adaptive systems exhibit emergent properties that cannot be (34) ________ solely from the behavior of their individual components. Consequently, scholars advocate 'epistemic humility': an acknowledgment that scientific models are provisional approximations rather than (35) ________ truths. Embracing uncertainty does not imply intellectual paralysis; (36) ________, it mandates the precautionary principle, urging societies to safeguard critical thresholds even in the absence of complete certitude. Ultimately, navigating the Anthropocene requires integrating empirical rigor with ethical (37) ________.",
        "question": "Question 33 (Blank 33)",
        "options": [
          "A. assumption",
          "B. resumption",
          "C. consumption",
          "D. presumption"
        ],
        "answer": "A",
        "explanation": "'operate under the assumption that...' = hoạt động dựa trên giả định rằng."
      },
      {
        "id": 34,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 34 (Blank 34)",
        "options": [
          "A. extrapolated",
          "B. interpolated",
          "C. eradicated",
          "D. corroborated"
        ],
        "answer": "A",
        "explanation": "'extrapolate from...' = ngoại suy, suy luận ra từ dữ liệu hiện có."
      },
      {
        "id": 35,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 35 (Blank 35)",
        "options": [
          "A. immutable",
          "B. volatile",
          "C. transient",
          "D. arbitrary"
        ],
        "answer": "A",
        "explanation": "'immutable truths' = những chân lý bất biến."
      },
      {
        "id": 36,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 36 (Blank 36)",
        "options": [
          "A. on the contrary",
          "B. by contrast",
          "C. in addition",
          "D. as a result"
        ],
        "answer": "A",
        "explanation": "'on the contrary' = trái lại (phủ định ý vừa nêu ở mệnh đề trước để khẳng định ý ngược lại)."
      },
      {
        "id": 37,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 37 (Blank 37)",
        "options": [
          "A. foresight",
          "B. hindsight",
          "C. oversight",
          "D. insight"
        ],
        "answer": "A",
        "explanation": "'ethical foresight' = tầm nhìn xa / sự nhìn trước về mặt đạo đức."
      }
    ]
  },
  {
    "testId": 9,
    "title": "Đề ôn luyện HSG Lớp 12 Thanh Hóa - Test 09",
    "totalQuestions": 37,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "standalone_mcq",
        "question": "After months of intense scrutiny, the chemical corporation finally had to ________ and admit that toxic effluents had seeped into the aquifer.",
        "options": [
          "A. face the music",
          "B. hit the sack",
          "C. spill the beans",
          "D. jump the gun"
        ],
        "answer": "A",
        "explanation": "'face the music' = chịu trận, đối mặt với hậu quả/sự chỉ trích."
      },
      {
        "id": 2,
        "part": 1,
        "type": "standalone_mcq",
        "question": "It is imperative that every hospital ________ strict stewardship protocols to curb the proliferation of superbugs.",
        "options": [
          "A. enforce",
          "B. enforces",
          "C. enforced",
          "D. is enforcing"
        ],
        "answer": "A",
        "explanation": "Thức giả định (Subjunctive mood): It is imperative that + S + V(nguyên thể không chia)."
      },
      {
        "id": 3,
        "part": 1,
        "type": "standalone_mcq",
        "question": "So pervasive ________ become that traces of synthetic polymers have been detected even in freshly fallen Antarctic snow.",
        "options": [
          "A. has microplastic pollution",
          "B. microplastic pollution has",
          "C. did microplastic pollution",
          "D. is microplastic pollution"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'So + adj + trợ động từ + S + V + that...'."
      },
      {
        "id": 4,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Local authorities have been accused of paying ________ service to reforestation while quietly approving new logging concessions.",
        "options": [
          "A. lip",
          "B. mouth",
          "C. tongue",
          "D. word"
        ],
        "answer": "A",
        "explanation": "Collocation/Idiom 'pay lip service to something' = chỉ nói suông, hứa hẹn đầu môi chót lưỡi."
      },
      {
        "id": 5,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Hardly ________ the research findings on antimicrobial resistance when several pharmaceutical conglomerates announced a shift in funding.",
        "options": [
          "A. had the institute published",
          "B. the institute had published",
          "C. did the institute publish",
          "D. was the institute publishing"
        ],
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ với 'Hardly ... when ...': Hardly + had + S + Vp2 + when + S + V(quá khứ đơn)."
      },
      {
        "id": 6,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Nobody in the regulatory committee anticipated such a rapid escalation of e-waste dumping, ________?",
        "options": [
          "A. did they",
          "B. didn't they",
          "C. did he",
          "D. hadn't they"
        ],
        "answer": "A",
        "explanation": "Câu hỏi đuôi với chủ ngữ 'Nobody' (mang nghĩa phủ định) dùng đại từ 'they' và trợ động từ khẳng định 'did'."
      },
      {
        "id": 7,
        "part": 1,
        "type": "standalone_mcq",
        "question": "________ the stringent emission quotas imposed last decade, global carbon concentrations have continued their upward trajectory.",
        "options": [
          "A. Albeit",
          "B. Notwithstanding",
          "C. Irrespective",
          "D. Whereas"
        ],
        "answer": "B",
        "explanation": "'Notwithstanding + cụm danh từ' = Mặc dù, bất chấp (tương đương Despite/In spite of ở văn phong trang trọng học thuật)."
      },
      {
        "id": 8,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The chief epidemiologist advised the ministry not to ________ the early warning signs of multidrug-resistant pathogens.",
        "options": [
          "A. brush aside",
          "B. crop up",
          "C. boil down",
          "D.eke out"
        ],
        "answer": "A",
        "explanation": "'brush aside' = phớt lờ, gạt bỏ không coi trọng."
      },
      {
        "id": 9,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The municipality's new recycling initiative is a far ________ from the comprehensive circular economy model proposed by environmental scientists.",
        "options": [
          "A. cry",
          "B. shout",
          "C. call",
          "D. scream"
        ],
        "answer": "A",
        "explanation": "Idiom 'a far cry from something' = khác xa hoàn toàn so với cái gì."
      },
      {
        "id": 10,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Were the permafrost to thaw at twice the projected rate, vast quantities of sequestered carbon ________ into the atmosphere.",
        "options": [
          "A. would be unleashed",
          "B. will be unleashed",
          "C. had been unleashed",
          "D. would have unleashed"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 2 với 'Were + S + to V, S + would + V'."
      },
      {
        "id": 11,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Many developing nations find themselves caught between a rock and a hard ________ when balancing industrial growth against ecological preservation.",
        "options": [
          "A. place",
          "B. stone",
          "C. spot",
          "D. ground"
        ],
        "answer": "A",
        "explanation": "Idiom 'between a rock and a hard place' = tiến thoái lưỡng nan."
      },
      {
        "id": 12,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The new biodegradable polymer is touted as a panacea, ________ its large-scale manufacturing still requires substantial fossil-fuel input.",
        "options": [
          "A. albeit",
          "B. whereas",
          "C. nonetheless",
          "D. whereby"
        ],
        "answer": "B",
        "explanation": "'whereas' nối hai mệnh đề tương phản nhau."
      },
      {
        "id": 13,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": "SCIENTIFIC BRIEFING: RENEWABLE GRID STORAGE CHALLENGES\nRecent empirical studies have underscored the severity of renewable grid storage challenges, a phenomenon that (13) ________ far-reaching repercussions for planetary stability. Researchers warn that unless immediate mitigation strategies are (14) ________ into effect, ecological tipping points may be crossed within decades. Furthermore, the socioeconomic burden falls disproportionately on vulnerable communities, (15) ________ adaptive capacity remains severely constrained. Policymakers must therefore transition from incremental adjustments to systemic reforms, (16) ________ fostering international cooperation and technological transfer. Only through concerted multilateral action can humanity hope to (17) ________ the worst trajectories.",
        "question": "Question 13 (Blank 13)",
        "options": [
          "A. entails",
          "B. inflicts",
          "C. ensues",
          "D. breeds"
        ],
        "answer": "A",
        "explanation": "'entail repercussions' = kéo theo những hệ lụy tất yếu."
      },
      {
        "id": 14,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 14 (Blank 14)",
        "options": [
          "A. brought",
          "B. put",
          "C. taken",
          "D. made"
        ],
        "answer": "B",
        "explanation": "Collocation 'put into effect' = đưa vào thực thi, áp dụng."
      },
      {
        "id": 15,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 15 (Blank 15)",
        "options": [
          "A. whose",
          "B. which",
          "C. whom",
          "D. where"
        ],
        "answer": "A",
        "explanation": "Đại từ quan hệ sở hữu 'whose' bổ nghĩa cho 'vulnerable communities'."
      },
      {
        "id": 16,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 16 (Blank 16)",
        "options": [
          "A. thereby",
          "B. whereby",
          "C. wherein",
          "D. hitherto"
        ],
        "answer": "A",
        "explanation": "'thereby + V-ing' = qua đó, nhờ đó dẫn đến kết quả."
      },
      {
        "id": 17,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 17 (Blank 17)",
        "options": [
          "A. avert",
          "B. evade",
          "C. elude",
          "D. deflect"
        ],
        "answer": "A",
        "explanation": "'avert the worst trajectories/disasters' = ngăn chặn, đẩy lùi kịch bản tồi tệ nhất."
      },
      {
        "id": 18,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": "HERITAGE PROFILE: TU YOUYOU – ARTEMISININ AND THE FIGHT AGAINST MALARIA\nFew figures in modern intellectual history have left as (18) ________ an imprint as Tu Youyou. Working amidst formidable institutional skepticism, Tu Youyou demonstrated unwavering perseverance, (19) ________ conventional paradigms that had long dominated the discipline. Not only (20) ________ a revolutionary theoretical framework, but this work also laid the cornerstone for subsequent generations of innovators. Even when confronted with resource scarcity and professional adversity, Tu Youyou refused to (21) ________ on scientific rigor. Today, commemorative archives worldwide celebrate this legacy as a testament to human (22) ________.",
        "question": "Question 18 (Blank 18)",
        "options": [
          "A. indelible",
          "B. infallible",
          "C. inaudible",
          "D. illegible"
        ],
        "answer": "A",
        "explanation": "Collocation 'leave an indelible imprint/mark' = để lại dấu ấn không thể phai mờ."
      },
      {
        "id": 19,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 19 (Blank 19)",
        "options": [
          "A. dismantling",
          "B. dismantled",
          "C. to dismantle",
          "D. having been dismantled"
        ],
        "answer": "A",
        "explanation": "Rút gọn mệnh đề chủ động bằng hiện tại phân từ (V-ing) diễn tả hành động song song/hệ quả."
      },
      {
        "id": 20,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 20 (Blank 20)",
        "options": [
          "A. did the research establish",
          "B. the research established",
          "C. had the research established",
          "D. was the research establishing"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'Not only + did + S + V(nguyên thể)'."
      },
      {
        "id": 21,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 21 (Blank 21)",
        "options": [
          "A. compromise",
          "B. concede",
          "C. reconcile",
          "D. yield"
        ],
        "answer": "A",
        "explanation": "'compromise on something' = thỏa hiệp, hạ thấp tiêu chuẩn về điều gì."
      },
      {
        "id": 22,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 22 (Blank 22)",
        "options": [
          "A. ingenuity",
          "B. credulity",
          "C. complacency",
          "D. notoriety"
        ],
        "answer": "A",
        "explanation": "'human ingenuity' = sự tài trí, óc sáng tạo của con người."
      },
      {
        "id": 23,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": "CONTEMPORARY POLICY ANALYSIS: SAFEGUARDING GLOBAL COMMONS\nModern governance faces an unprecedented paradox: while scientific consensus on ecological degradation has never been clearer, regulatory enforcement remains fragmented. (23) ________. In many jurisdictions, short-term electoral cycles incentivize policymakers to defer costly structural transitions, (24) ________. Moreover, transnational supply chains obscure environmental accountability, making it exceedingly difficult (25) ________. Nevertheless, emerging legal frameworks have begun recognizing ecosystems as entities with intrinsic rights, (26) ________. Should these judicial precedents gain traction globally, (27) ________.",
        "question": "Question 23 (Blank 23)",
        "options": [
          "A. This disjunction stems largely from the tension between national sovereignty and collective planetary responsibility",
          "B. Having been resolved through bilateral treaties, national sovereignty no longer impedes planetary responsibility",
          "C. Seldom the tension between national sovereignty and planetary responsibility has been documented by analysts",
          "D. Which stems largely from the tension between national sovereignty and collective planetary responsibility"
        ],
        "answer": "A",
        "explanation": "Cần một câu hoàn chỉnh (mệnh đề độc lập) liên kết mạch lạc với câu mở đầu."
      },
      {
        "id": 24,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 24 (Blank 24)",
        "options": [
          "A. leaving future generations to shoulder the compounded ecological debt",
          "B. that leaves future generations shoulder the compounded ecological debt",
          "C. future generations are left to shoulder the compounded ecological debt",
          "D. whereby future generations shouldering the compounded ecological debt"
        ],
        "answer": "A",
        "explanation": "Cụm phân từ hiện tại 'leaving...' đóng vai trò bổ ngữ chỉ kết quả cho mệnh đề chính."
      },
      {
        "id": 25,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 25 (Blank 25)",
        "options": [
          "A. for independent watchdogs to trace illicit waste disposal back to its corporate originators",
          "B. that independent watchdogs trace illicit waste disposal back to its corporate originators",
          "C. independent watchdogs tracing illicit waste disposal back to its corporate originators",
          "D. of independent watchdogs to trace illicit waste disposal back to its corporate originators"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'make it + adj + for somebody + to V'."
      },
      {
        "id": 26,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 26 (Blank 26)",
        "options": [
          "A. a paradigm shift that empowers citizens to litigate on behalf of endangered habitats",
          "B. empowering citizens litigate on behalf of endangered habitats through a paradigm shift",
          "C. it is a paradigm shift empowers citizens to litigate on behalf of endangered habitats",
          "D. what empowers citizens to litigate on behalf of endangered habitats"
        ],
        "answer": "A",
        "explanation": "Cụm danh từ đồng vị ngữ (Appositive noun phrase) giải thích cho toàn bộ ý phía trước."
      },
      {
        "id": 27,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 27 (Blank 27)",
        "options": [
          "A. multinational corporations would be compelled to internalize the true environmental costs of their operations",
          "B. multinational corporations will compel to internalize the true environmental costs of their operations",
          "C. the true environmental costs of their operations would have been internalized by corporations",
          "D. did multinational corporations compel to internalize the true environmental costs"
        ],
        "answer": "A",
        "explanation": "Mệnh đề chính của câu điều kiện đảo ngữ với 'Should + S + V': S + would/will + V."
      },
      {
        "id": 28,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": "PUBLIC ADVISORY: SUSTAINABLE URBAN TRANSITION (SERIES 9)\nAs metropolitan areas confront escalating resource pressures, civic planners are (28) ________ citizens to adopt circular consumption habits. Discarded electronics and synthetic textiles, if left (29) ________ in municipal landfills, leach hazardous compounds into groundwater reserves. Residents are therefore encouraged to utilize designated collection hubs (30) ________ certified technicians dismantle and recover precious metals. By participating in these community-led schemes, households not only curtail pollution but also (31) ________ the demand for virgin raw materials, contributing to a resilient and (32) ________ urban ecosystem.",
        "question": "Question 28 (Blank 28)",
        "options": [
          "A. urging",
          "B. insisting",
          "C. pleading",
          "D. demanding"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'urge somebody to do something' = thúc giục, kêu gọi ai làm gì."
      },
      {
        "id": 29,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 29 (Blank 29)",
        "options": [
          "A. untreated",
          "B. untreating",
          "C. to untreated",
          "D. un-treat"
        ],
        "answer": "A",
        "explanation": "'left + adj/Vp2 (untreated)' = bị bỏ mặc trong tình trạng chưa qua xử lý."
      },
      {
        "id": 30,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 30 (Blank 30)",
        "options": [
          "A. where",
          "B. which",
          "C. when",
          "D. whose"
        ],
        "answer": "A",
        "explanation": "Trạng từ quan hệ 'where' thay thế cho 'designated collection hubs'."
      },
      {
        "id": 31,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 31 (Blank 31)",
        "options": [
          "A. alleviate",
          "B. aggravate",
          "C. exacerbate",
          "D. proliferate"
        ],
        "answer": "A",
        "explanation": "'alleviate the demand/pressure' = làm giảm bớt nhu cầu/áp lực."
      },
      {
        "id": 32,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 32 (Blank 32)",
        "options": [
          "A. regenerative",
          "B. redundant",
          "C. ephemeral",
          "D. obsolete"
        ],
        "answer": "A",
        "explanation": "'regenerative urban ecosystem' = hệ sinh thái đô thị có khả năng tái tạo."
      },
      {
        "id": 33,
        "part": 6,
        "type": "academic_cloze",
        "passage": "ACADEMIC CLOZE: EPISTEMIC HUMILITY IN THE ANTHROPOCENE\nThe accelerating complexity of global socio-ecological systems has exposed the limitations of reductionist science. Historically, researchers operated under the (33) ________ that natural phenomena could be isolated into discrete variables and predicted with mechanical precision. Yet, contemporary challenges—ranging from antimicrobial resistance to cascading climate feedbacks—defy such linear modeling. Complex adaptive systems exhibit emergent properties that cannot be (34) ________ solely from the behavior of their individual components. Consequently, scholars advocate 'epistemic humility': an acknowledgment that scientific models are provisional approximations rather than (35) ________ truths. Embracing uncertainty does not imply intellectual paralysis; (36) ________, it mandates the precautionary principle, urging societies to safeguard critical thresholds even in the absence of complete certitude. Ultimately, navigating the Anthropocene requires integrating empirical rigor with ethical (37) ________.",
        "question": "Question 33 (Blank 33)",
        "options": [
          "A. assumption",
          "B. resumption",
          "C. consumption",
          "D. presumption"
        ],
        "answer": "A",
        "explanation": "'operate under the assumption that...' = hoạt động dựa trên giả định rằng."
      },
      {
        "id": 34,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 34 (Blank 34)",
        "options": [
          "A. extrapolated",
          "B. interpolated",
          "C. eradicated",
          "D. corroborated"
        ],
        "answer": "A",
        "explanation": "'extrapolate from...' = ngoại suy, suy luận ra từ dữ liệu hiện có."
      },
      {
        "id": 35,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 35 (Blank 35)",
        "options": [
          "A. immutable",
          "B. volatile",
          "C. transient",
          "D. arbitrary"
        ],
        "answer": "A",
        "explanation": "'immutable truths' = những chân lý bất biến."
      },
      {
        "id": 36,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 36 (Blank 36)",
        "options": [
          "A. on the contrary",
          "B. by contrast",
          "C. in addition",
          "D. as a result"
        ],
        "answer": "A",
        "explanation": "'on the contrary' = trái lại (phủ định ý vừa nêu ở mệnh đề trước để khẳng định ý ngược lại)."
      },
      {
        "id": 37,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 37 (Blank 37)",
        "options": [
          "A. foresight",
          "B. hindsight",
          "C. oversight",
          "D. insight"
        ],
        "answer": "A",
        "explanation": "'ethical foresight' = tầm nhìn xa / sự nhìn trước về mặt đạo đức."
      }
    ]
  },
  {
    "testId": 10,
    "title": "Đề ôn luyện HSG Lớp 12 Thanh Hóa - Test 10",
    "totalQuestions": 37,
    "questions": [
      {
        "id": 1,
        "part": 1,
        "type": "standalone_mcq",
        "question": "It is imperative that every hospital ________ strict stewardship protocols to curb the proliferation of superbugs.",
        "options": [
          "A. enforce",
          "B. enforces",
          "C. enforced",
          "D. is enforcing"
        ],
        "answer": "A",
        "explanation": "Thức giả định (Subjunctive mood): It is imperative that + S + V(nguyên thể không chia)."
      },
      {
        "id": 2,
        "part": 1,
        "type": "standalone_mcq",
        "question": "So pervasive ________ become that traces of synthetic polymers have been detected even in freshly fallen Antarctic snow.",
        "options": [
          "A. has microplastic pollution",
          "B. microplastic pollution has",
          "C. did microplastic pollution",
          "D. is microplastic pollution"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'So + adj + trợ động từ + S + V + that...'."
      },
      {
        "id": 3,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Local authorities have been accused of paying ________ service to reforestation while quietly approving new logging concessions.",
        "options": [
          "A. lip",
          "B. mouth",
          "C. tongue",
          "D. word"
        ],
        "answer": "A",
        "explanation": "Collocation/Idiom 'pay lip service to something' = chỉ nói suông, hứa hẹn đầu môi chót lưỡi."
      },
      {
        "id": 4,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Hardly ________ the research findings on antimicrobial resistance when several pharmaceutical conglomerates announced a shift in funding.",
        "options": [
          "A. had the institute published",
          "B. the institute had published",
          "C. did the institute publish",
          "D. was the institute publishing"
        ],
        "answer": "A",
        "explanation": "Cấu trúc đảo ngữ với 'Hardly ... when ...': Hardly + had + S + Vp2 + when + S + V(quá khứ đơn)."
      },
      {
        "id": 5,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Nobody in the regulatory committee anticipated such a rapid escalation of e-waste dumping, ________?",
        "options": [
          "A. did they",
          "B. didn't they",
          "C. did he",
          "D. hadn't they"
        ],
        "answer": "A",
        "explanation": "Câu hỏi đuôi với chủ ngữ 'Nobody' (mang nghĩa phủ định) dùng đại từ 'they' và trợ động từ khẳng định 'did'."
      },
      {
        "id": 6,
        "part": 1,
        "type": "standalone_mcq",
        "question": "________ the stringent emission quotas imposed last decade, global carbon concentrations have continued their upward trajectory.",
        "options": [
          "A. Albeit",
          "B. Notwithstanding",
          "C. Irrespective",
          "D. Whereas"
        ],
        "answer": "B",
        "explanation": "'Notwithstanding + cụm danh từ' = Mặc dù, bất chấp (tương đương Despite/In spite of ở văn phong trang trọng học thuật)."
      },
      {
        "id": 7,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The chief epidemiologist advised the ministry not to ________ the early warning signs of multidrug-resistant pathogens.",
        "options": [
          "A. brush aside",
          "B. crop up",
          "C. boil down",
          "D.eke out"
        ],
        "answer": "A",
        "explanation": "'brush aside' = phớt lờ, gạt bỏ không coi trọng."
      },
      {
        "id": 8,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The municipality's new recycling initiative is a far ________ from the comprehensive circular economy model proposed by environmental scientists.",
        "options": [
          "A. cry",
          "B. shout",
          "C. call",
          "D. scream"
        ],
        "answer": "A",
        "explanation": "Idiom 'a far cry from something' = khác xa hoàn toàn so với cái gì."
      },
      {
        "id": 9,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Were the permafrost to thaw at twice the projected rate, vast quantities of sequestered carbon ________ into the atmosphere.",
        "options": [
          "A. would be unleashed",
          "B. will be unleashed",
          "C. had been unleashed",
          "D. would have unleashed"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ câu điều kiện loại 2 với 'Were + S + to V, S + would + V'."
      },
      {
        "id": 10,
        "part": 1,
        "type": "standalone_mcq",
        "question": "Many developing nations find themselves caught between a rock and a hard ________ when balancing industrial growth against ecological preservation.",
        "options": [
          "A. place",
          "B. stone",
          "C. spot",
          "D. ground"
        ],
        "answer": "A",
        "explanation": "Idiom 'between a rock and a hard place' = tiến thoái lưỡng nan."
      },
      {
        "id": 11,
        "part": 1,
        "type": "standalone_mcq",
        "question": "The new biodegradable polymer is touted as a panacea, ________ its large-scale manufacturing still requires substantial fossil-fuel input.",
        "options": [
          "A. albeit",
          "B. whereas",
          "C. nonetheless",
          "D. whereby"
        ],
        "answer": "B",
        "explanation": "'whereas' nối hai mệnh đề tương phản nhau."
      },
      {
        "id": 12,
        "part": 1,
        "type": "standalone_mcq",
        "question": "After months of intense scrutiny, the chemical corporation finally had to ________ and admit that toxic effluents had seeped into the aquifer.",
        "options": [
          "A. face the music",
          "B. hit the sack",
          "C. spill the beans",
          "D. jump the gun"
        ],
        "answer": "A",
        "explanation": "'face the music' = chịu trận, đối mặt với hậu quả/sự chỉ trích."
      },
      {
        "id": 13,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": "SCIENTIFIC BRIEFING: DEFORESTATION AND ZOONOTIC SPILLOVER\nRecent empirical studies have underscored the severity of deforestation and zoonotic spillover, a phenomenon that (13) ________ far-reaching repercussions for planetary stability. Researchers warn that unless immediate mitigation strategies are (14) ________ into effect, ecological tipping points may be crossed within decades. Furthermore, the socioeconomic burden falls disproportionately on vulnerable communities, (15) ________ adaptive capacity remains severely constrained. Policymakers must therefore transition from incremental adjustments to systemic reforms, (16) ________ fostering international cooperation and technological transfer. Only through concerted multilateral action can humanity hope to (17) ________ the worst trajectories.",
        "question": "Question 13 (Blank 13)",
        "options": [
          "A. entails",
          "B. inflicts",
          "C. ensues",
          "D. breeds"
        ],
        "answer": "A",
        "explanation": "'entail repercussions' = kéo theo những hệ lụy tất yếu."
      },
      {
        "id": 14,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 14 (Blank 14)",
        "options": [
          "A. brought",
          "B. put",
          "C. taken",
          "D. made"
        ],
        "answer": "B",
        "explanation": "Collocation 'put into effect' = đưa vào thực thi, áp dụng."
      },
      {
        "id": 15,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 15 (Blank 15)",
        "options": [
          "A. whose",
          "B. which",
          "C. whom",
          "D. where"
        ],
        "answer": "A",
        "explanation": "Đại từ quan hệ sở hữu 'whose' bổ nghĩa cho 'vulnerable communities'."
      },
      {
        "id": 16,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 16 (Blank 16)",
        "options": [
          "A. thereby",
          "B. whereby",
          "C. wherein",
          "D. hitherto"
        ],
        "answer": "A",
        "explanation": "'thereby + V-ing' = qua đó, nhờ đó dẫn đến kết quả."
      },
      {
        "id": 17,
        "part": 2,
        "type": "environmental_text_fill",
        "passage": null,
        "question": "Question 17 (Blank 17)",
        "options": [
          "A. avert",
          "B. evade",
          "C. elude",
          "D. deflect"
        ],
        "answer": "A",
        "explanation": "'avert the worst trajectories/disasters' = ngăn chặn, đẩy lùi kịch bản tồi tệ nhất."
      },
      {
        "id": 18,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": "HERITAGE PROFILE: STEPHEN HAWKING – BLACK HOLE THERMODYNAMICS AND COSMOLOGY\nFew figures in modern intellectual history have left as (18) ________ an imprint as Stephen Hawking. Working amidst formidable institutional skepticism, Stephen Hawking demonstrated unwavering perseverance, (19) ________ conventional paradigms that had long dominated the discipline. Not only (20) ________ a revolutionary theoretical framework, but this work also laid the cornerstone for subsequent generations of innovators. Even when confronted with resource scarcity and professional adversity, Stephen Hawking refused to (21) ________ on scientific rigor. Today, commemorative archives worldwide celebrate this legacy as a testament to human (22) ________.",
        "question": "Question 18 (Blank 18)",
        "options": [
          "A. indelible",
          "B. infallible",
          "C. inaudible",
          "D. illegible"
        ],
        "answer": "A",
        "explanation": "Collocation 'leave an indelible imprint/mark' = để lại dấu ấn không thể phai mờ."
      },
      {
        "id": 19,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 19 (Blank 19)",
        "options": [
          "A. dismantling",
          "B. dismantled",
          "C. to dismantle",
          "D. having been dismantled"
        ],
        "answer": "A",
        "explanation": "Rút gọn mệnh đề chủ động bằng hiện tại phân từ (V-ing) diễn tả hành động song song/hệ quả."
      },
      {
        "id": 20,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 20 (Blank 20)",
        "options": [
          "A. did the research establish",
          "B. the research established",
          "C. had the research established",
          "D. was the research establishing"
        ],
        "answer": "A",
        "explanation": "Đảo ngữ với 'Not only + did + S + V(nguyên thể)'."
      },
      {
        "id": 21,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 21 (Blank 21)",
        "options": [
          "A. compromise",
          "B. concede",
          "C. reconcile",
          "D. yield"
        ],
        "answer": "A",
        "explanation": "'compromise on something' = thỏa hiệp, hạ thấp tiêu chuẩn về điều gì."
      },
      {
        "id": 22,
        "part": 3,
        "type": "famous_figure_fill",
        "passage": null,
        "question": "Question 22 (Blank 22)",
        "options": [
          "A. ingenuity",
          "B. credulity",
          "C. complacency",
          "D. notoriety"
        ],
        "answer": "A",
        "explanation": "'human ingenuity' = sự tài trí, óc sáng tạo của con người."
      },
      {
        "id": 23,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": "CONTEMPORARY POLICY ANALYSIS: SAFEGUARDING GLOBAL COMMONS\nModern governance faces an unprecedented paradox: while scientific consensus on ecological degradation has never been clearer, regulatory enforcement remains fragmented. (23) ________. In many jurisdictions, short-term electoral cycles incentivize policymakers to defer costly structural transitions, (24) ________. Moreover, transnational supply chains obscure environmental accountability, making it exceedingly difficult (25) ________. Nevertheless, emerging legal frameworks have begun recognizing ecosystems as entities with intrinsic rights, (26) ________. Should these judicial precedents gain traction globally, (27) ________.",
        "question": "Question 23 (Blank 23)",
        "options": [
          "A. This disjunction stems largely from the tension between national sovereignty and collective planetary responsibility",
          "B. Having been resolved through bilateral treaties, national sovereignty no longer impedes planetary responsibility",
          "C. Seldom the tension between national sovereignty and planetary responsibility has been documented by analysts",
          "D. Which stems largely from the tension between national sovereignty and collective planetary responsibility"
        ],
        "answer": "A",
        "explanation": "Cần một câu hoàn chỉnh (mệnh đề độc lập) liên kết mạch lạc với câu mở đầu."
      },
      {
        "id": 24,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 24 (Blank 24)",
        "options": [
          "A. leaving future generations to shoulder the compounded ecological debt",
          "B. that leaves future generations shoulder the compounded ecological debt",
          "C. future generations are left to shoulder the compounded ecological debt",
          "D. whereby future generations shouldering the compounded ecological debt"
        ],
        "answer": "A",
        "explanation": "Cụm phân từ hiện tại 'leaving...' đóng vai trò bổ ngữ chỉ kết quả cho mệnh đề chính."
      },
      {
        "id": 25,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 25 (Blank 25)",
        "options": [
          "A. for independent watchdogs to trace illicit waste disposal back to its corporate originators",
          "B. that independent watchdogs trace illicit waste disposal back to its corporate originators",
          "C. independent watchdogs tracing illicit waste disposal back to its corporate originators",
          "D. of independent watchdogs to trace illicit waste disposal back to its corporate originators"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'make it + adj + for somebody + to V'."
      },
      {
        "id": 26,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 26 (Blank 26)",
        "options": [
          "A. a paradigm shift that empowers citizens to litigate on behalf of endangered habitats",
          "B. empowering citizens litigate on behalf of endangered habitats through a paradigm shift",
          "C. it is a paradigm shift empowers citizens to litigate on behalf of endangered habitats",
          "D. what empowers citizens to litigate on behalf of endangered habitats"
        ],
        "answer": "A",
        "explanation": "Cụm danh từ đồng vị ngữ (Appositive noun phrase) giải thích cho toàn bộ ý phía trước."
      },
      {
        "id": 27,
        "part": 4,
        "type": "contextual_clause_completion",
        "passage": null,
        "question": "Question 27 (Blank 27)",
        "options": [
          "A. multinational corporations would be compelled to internalize the true environmental costs of their operations",
          "B. multinational corporations will compel to internalize the true environmental costs of their operations",
          "C. the true environmental costs of their operations would have been internalized by corporations",
          "D. did multinational corporations compel to internalize the true environmental costs"
        ],
        "answer": "A",
        "explanation": "Mệnh đề chính của câu điều kiện đảo ngữ với 'Should + S + V': S + would/will + V."
      },
      {
        "id": 28,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": "PUBLIC ADVISORY: SUSTAINABLE URBAN TRANSITION (SERIES 10)\nAs metropolitan areas confront escalating resource pressures, civic planners are (28) ________ citizens to adopt circular consumption habits. Discarded electronics and synthetic textiles, if left (29) ________ in municipal landfills, leach hazardous compounds into groundwater reserves. Residents are therefore encouraged to utilize designated collection hubs (30) ________ certified technicians dismantle and recover precious metals. By participating in these community-led schemes, households not only curtail pollution but also (31) ________ the demand for virgin raw materials, contributing to a resilient and (32) ________ urban ecosystem.",
        "question": "Question 28 (Blank 28)",
        "options": [
          "A. urging",
          "B. insisting",
          "C. pleading",
          "D. demanding"
        ],
        "answer": "A",
        "explanation": "Cấu trúc 'urge somebody to do something' = thúc giục, kêu gọi ai làm gì."
      },
      {
        "id": 29,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 29 (Blank 29)",
        "options": [
          "A. untreated",
          "B. untreating",
          "C. to untreated",
          "D. un-treat"
        ],
        "answer": "A",
        "explanation": "'left + adj/Vp2 (untreated)' = bị bỏ mặc trong tình trạng chưa qua xử lý."
      },
      {
        "id": 30,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 30 (Blank 30)",
        "options": [
          "A. where",
          "B. which",
          "C. when",
          "D. whose"
        ],
        "answer": "A",
        "explanation": "Trạng từ quan hệ 'where' thay thế cho 'designated collection hubs'."
      },
      {
        "id": 31,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 31 (Blank 31)",
        "options": [
          "A. alleviate",
          "B. aggravate",
          "C. exacerbate",
          "D. proliferate"
        ],
        "answer": "A",
        "explanation": "'alleviate the demand/pressure' = làm giảm bớt nhu cầu/áp lực."
      },
      {
        "id": 32,
        "part": 5,
        "type": "environmental_notice_fill",
        "passage": null,
        "question": "Question 32 (Blank 32)",
        "options": [
          "A. regenerative",
          "B. redundant",
          "C. ephemeral",
          "D. obsolete"
        ],
        "answer": "A",
        "explanation": "'regenerative urban ecosystem' = hệ sinh thái đô thị có khả năng tái tạo."
      },
      {
        "id": 33,
        "part": 6,
        "type": "academic_cloze",
        "passage": "ACADEMIC CLOZE: EPISTEMIC HUMILITY IN THE ANTHROPOCENE\nThe accelerating complexity of global socio-ecological systems has exposed the limitations of reductionist science. Historically, researchers operated under the (33) ________ that natural phenomena could be isolated into discrete variables and predicted with mechanical precision. Yet, contemporary challenges—ranging from antimicrobial resistance to cascading climate feedbacks—defy such linear modeling. Complex adaptive systems exhibit emergent properties that cannot be (34) ________ solely from the behavior of their individual components. Consequently, scholars advocate 'epistemic humility': an acknowledgment that scientific models are provisional approximations rather than (35) ________ truths. Embracing uncertainty does not imply intellectual paralysis; (36) ________, it mandates the precautionary principle, urging societies to safeguard critical thresholds even in the absence of complete certitude. Ultimately, navigating the Anthropocene requires integrating empirical rigor with ethical (37) ________.",
        "question": "Question 33 (Blank 33)",
        "options": [
          "A. assumption",
          "B. resumption",
          "C. consumption",
          "D. presumption"
        ],
        "answer": "A",
        "explanation": "'operate under the assumption that...' = hoạt động dựa trên giả định rằng."
      },
      {
        "id": 34,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 34 (Blank 34)",
        "options": [
          "A. extrapolated",
          "B. interpolated",
          "C. eradicated",
          "D. corroborated"
        ],
        "answer": "A",
        "explanation": "'extrapolate from...' = ngoại suy, suy luận ra từ dữ liệu hiện có."
      },
      {
        "id": 35,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 35 (Blank 35)",
        "options": [
          "A. immutable",
          "B. volatile",
          "C. transient",
          "D. arbitrary"
        ],
        "answer": "A",
        "explanation": "'immutable truths' = những chân lý bất biến."
      },
      {
        "id": 36,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 36 (Blank 36)",
        "options": [
          "A. on the contrary",
          "B. by contrast",
          "C. in addition",
          "D. as a result"
        ],
        "answer": "A",
        "explanation": "'on the contrary' = trái lại (phủ định ý vừa nêu ở mệnh đề trước để khẳng định ý ngược lại)."
      },
      {
        "id": 37,
        "part": 6,
        "type": "academic_cloze",
        "passage": null,
        "question": "Question 37 (Blank 37)",
        "options": [
          "A. foresight",
          "B. hindsight",
          "C. oversight",
          "D. insight"
        ],
        "answer": "A",
        "explanation": "'ethical foresight' = tầm nhìn xa / sự nhìn trước về mặt đạo đức."
      }
    ]
  }
];

// Đồng bộ biến toàn cục để tương thích với các cách gọi khác nhau trong index.html
if (typeof window !== 'undefined') {
  window.lexicoData = lexicoData;
  window.LEXICO_DATA = lexicoData;
  window.lexicoTests = lexicoData;
  window.lexico = lexicoData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lexicoData;
}
