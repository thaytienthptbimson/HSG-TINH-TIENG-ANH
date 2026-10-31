// 5.2. TỪ VỰNG VÀ NGỮ PHÁP (37 câu – 37 điểm: Câu 16–52)

(function () {
// ---- Các câu lệnh (instruction) dùng chung: khai báo 1 lần, tham chiếu ở bên dưới ----
const INS_1 = "Mark the letter A, B, C, or D on your answer sheet to indicate the correct answer to each of the following questions from 16 to 25.";
const INS_2 = "Read the following passage and mark the letter A, B, C, D on your answer sheet to indicate the correct word or phrase that fits best each of the numbered blanks from 43 to 52.";
const INS_3 = "Read the following extract from a magazine article and mark the letter A, B, C or D on your answer sheet to indicate the option that fits best each of the numbered blanks from 26 to 31.";
const INS_4 = "Read the following leaflet and mark the letter A, B, C or D on your answer sheet to indicate the option that fits best each of the numbered blanks from 32 to 37.";
const INS_5 = "Read the following passage and mark the letter A, B, C or D on your answer sheet to indicate the option that fits best each of the numbered blanks from 38 to 42.";

window.examDatabase = window.examDatabase || {};
window.examDatabase['lexico'] = {
  "1": {
    "1": [
      {
        "origNum": 16,
        "instruction": INS_1,
        "text": "Hardly anyone had noticed the error until the auditors arrived, __________?",
        "options": [
          "hadn’t they",
          "had they",
          "didn’t they",
          "did he"
        ],
        "answer": 1,
        "explanation": "“Hardly anyone” mang nghĩa phủ định → đuôi khẳng định; chủ ngữ số nhiều “they”, thì quá khứ hoàn thành → had they?"
      },
      {
        "origNum": 17,
        "instruction": INS_1,
        "text": "__________ the committee will reject the proposal outright, the sponsors remain determined to submit it.",
        "options": [
          "Despite the fact is probable that",
          "Nevertheless it seems probable that",
          "Although it seems probable that",
          "In spite of probable that"
        ],
        "answer": 2,
        "explanation": "Although + mệnh đề: “Although it seems probable that…”. Despite/In spite of không đi với mệnh đề; Nevertheless cần dấu chấm câu trước nó."
      },
      {
        "origNum": 18,
        "instruction": INS_1,
        "text": "__________ of renewable energy a country generates, the less it depends on imported fuel.",
        "options": [
          "The larger the proportion",
          "The larger proportion",
          "Larger the proportion",
          "The proportion larger"
        ],
        "answer": 0,
        "explanation": "So sánh kép: The + so sánh hơn + S + V, the + so sánh hơn… → The larger the proportion (of…) a country generates."
      },
      {
        "origNum": 19,
        "instruction": INS_1,
        "text": "Under no circumstances __________ the laboratory without protective goggles.",
        "options": [
          "visitors are allowed to enter",
          "visitors allowed to enter",
          "do visitors allowed to enter",
          "are visitors allowed to enter"
        ],
        "answer": 3,
        "explanation": "Đảo ngữ sau “Under no circumstances”: trợ động từ/to be đứng trước chủ ngữ → are visitors allowed to enter."
      },
      {
        "origNum": 20,
        "instruction": INS_1,
        "text": "Ms Lan: “Congratulations on your promotion! Everyone says you thoroughly deserve it.”\nMr Long: “__________”",
        "options": [
          "Yes, I know. I have always been better than the others.",
          "Thank you. That’s very kind of you to say so, though I couldn’t have done it without my team.",
          "Not at all. You are wasting your time congratulating me.",
          "Never mind. It was nothing worth your attention."
        ],
        "answer": 1,
        "explanation": "Đáp lại lời khen một cách khiêm tốn, lịch sự: cảm ơn và ghi nhận đóng góp của đội."
      },
      {
        "origNum": 21,
        "instruction": INS_1,
        "text": "Gullible as ever, Tim swallowed the salesman’s story __________.",
        "options": [
          "hook, line and sinker",
          "nook and cranny",
          "lock, stock and barrel",
          "rack and ruin"
        ],
        "answer": 0,
        "explanation": "swallow something hook, line and sinker = tin sái cổ."
      },
      {
        "origNum": 22,
        "instruction": INS_1,
        "text": "Although the committee has held ten meetings, it has barely scratched the __________ of the problem.",
        "options": [
          "skin",
          "edge",
          "peel",
          "surface"
        ],
        "answer": 3,
        "explanation": "scratch the surface of a problem = mới chỉ chạm tới bề nổi."
      },
      {
        "origNum": 23,
        "instruction": INS_1,
        "text": "Reliable data on illegal fishing is surprisingly hard to __________.",
        "options": [
          "come off",
          "come at",
          "come by",
          "come to"
        ],
        "answer": 2,
        "explanation": "hard to come by = khó kiếm được."
      },
      {
        "origNum": 24,
        "instruction": INS_1,
        "text": "The minister’s remarks were deliberately __________, leaving journalists unsure whether the project would go ahead.",
        "options": [
          "ambitious",
          "ambiguous",
          "amenable",
          "amiable"
        ],
        "answer": 1,
        "explanation": "deliberately ambiguous = cố ý mập mờ (khiến nhà báo không rõ). ambiguous ≠ ambitious/amenable/amiable."
      },
      {
        "origNum": 25,
        "instruction": INS_1,
        "text": "The new CEO’s frank apology did much to __________ the anger of the shareholders.",
        "options": [
          "assail",
          "assess",
          "assuage",
          "assort"
        ],
        "answer": 2,
        "explanation": "assuage (xoa dịu) the anger; assail = tấn công; assess = đánh giá; assort = phân loại."
      }
    ],
    "2": [
      {
        "origNum": 16,
        "instruction": INS_1,
        "text": "Seldom had the championship witnessed such a dramatic comeback in the final minutes, __________?",
        "options": [
          "hadn’t it",
          "had it",
          "didn’t it",
          "did they"
        ],
        "answer": 1,
        "explanation": "Mệnh đề chính có trạng từ phủ định “Seldom” → phần hỏi đuôi ở dạng khẳng định; trợ động từ “had” + đại từ “it” → had it?"
      },
      {
        "origNum": 17,
        "instruction": INS_1,
        "text": "__________ the central bank’s repeated interest-rate hikes, inflation in the service sector remained stubbornly high.",
        "options": [
          "Albeit it was",
          "Notwithstanding",
          "Nevertheless",
          "Whereas"
        ],
        "answer": 1,
        "explanation": "Notwithstanding + cụm danh từ = In spite of / Despite (Bất chấp những đợt tăng lãi suất liên tiếp của ngân hàng trung ương)."
      },
      {
        "origNum": 18,
        "instruction": INS_1,
        "text": "__________ the acoustic insulation a concert hall possesses, the more faithfully the audience hears subtle orchestral nuances.",
        "options": [
          "The more sophisticated",
          "More sophisticated",
          "The sophisticated more",
          "The most sophisticated"
        ],
        "answer": 0,
        "explanation": "Cấu trúc so sánh kép: The + comparative adj + N + S + V, the + comparative… → The more sophisticated the acoustic insulation…"
      },
      {
        "origNum": 19,
        "instruction": INS_1,
        "text": "On no account __________ confidential patient records onto unencrypted personal devices.",
        "options": [
          "medical staff are permitted to download",
          "medical staff permitted to download",
          "do medical staff permitted to download",
          "are medical staff permitted to download"
        ],
        "answer": 3,
        "explanation": "Đảo ngữ sau cụm phủ định “On no account”: to be/trợ động từ đứng trước chủ ngữ → are medical staff permitted to download."
      },
      {
        "origNum": 20,
        "instruction": INS_1,
        "text": "Dr Minh: “Your keynote presentation on urban wetlands was truly eye-opening!”\nDr Hoa: “__________”",
        "options": [
          "I’m glad it resonated with you; it’s the result of our whole field team’s hard work.",
          "Of course it was. Nobody else in the department understands hydrology.",
          "Don’t mention it. You shouldn’t have wasted your morning listening to me.",
          "Never mind. The slides were far too technical for this audience anyway."
        ],
        "answer": 0,
        "explanation": "Lời đáp lịch sự, khiêm tốn và chuyên nghiệp trong hội thảo khoa học: cảm ơn người khen và ghi nhận công sức của cả nhóm nghiên cứu."
      },
      {
        "origNum": 21,
        "instruction": INS_1,
        "text": "When the start-up ran out of venture capital, the founders had to sell the laboratory equipment __________.",
        "options": [
          "lock, stock and barrel",
          "spick and span",
          "ins and outs",
          "ups and downs"
        ],
        "answer": 0,
        "explanation": "sell something lock, stock and barrel = bán toàn bộ, tất tần tật không chừa lại thứ gì."
      },
      {
        "origNum": 22,
        "instruction": INS_1,
        "text": "The investigative journalist’s latest exposé really hit the __________ on the head regarding municipal corruption.",
        "options": [
          "pin",
          "nail",
          "hammer",
          "screw"
        ],
        "answer": 1,
        "explanation": "hit the nail on the head = nói/chỉ ra hoàn toàn chính xác bản chất vấn đề."
      },
      {
        "origNum": 23,
        "instruction": INS_1,
        "text": "After three rounds of tough negotiations, the dispute between the union and management __________ a single issue: overtime pay.",
        "options": [
          "boiled down to",
          "brushed up on",
          "owned up to",
          "did away with"
        ],
        "answer": 0,
        "explanation": "boil down to something = tựu trung lại, quy về một vấn đề cốt lõi."
      },
      {
        "origNum": 24,
        "instruction": INS_1,
        "text": "An effective mediator must remain completely __________, showing no favouritism toward either party in the dispute.",
        "options": [
          "uninterested",
          "disinterested",
          "uninteresting",
          "disinteresting"
        ],
        "answer": 1,
        "explanation": "disinterested = khách quan, vô tư, không thiên vị (khác với uninterested = thờ ơ, không quan tâm)."
      },
      {
        "origNum": 25,
        "instruction": INS_1,
        "text": "The harsh winter freeze threatened to __________ the structural damage already suffered by the ancient viaduct.",
        "options": [
          "exacerbate",
          "exaggerate",
          "exonerate",
          "exhilarate"
        ],
        "answer": 0,
        "explanation": "exacerbate = làm trầm trọng thêm (hư hại). exaggerate = phóng đại; exonerate = giải oan; exhilarate = làm phấn khích."
      }
    ],
    "3": [
      {
        "origNum": 16,
        "instruction": INS_1,
        "text": "Scarcely anyone on the parish council foresaw how popular the pedestrian zone would become, __________?",
        "options": [
          "had they",
          "didn’t they",
          "did he",
          "did they"
        ],
        "answer": 3,
        "explanation": "“Scarcely anyone” mang nghĩa phủ định → phần hỏi đuôi khẳng định; động từ quá khứ đơn “foresaw” + đại từ “they” → did they?"
      },
      {
        "origNum": 17,
        "instruction": INS_1,
        "text": "__________ the archaeological team discovers beneath the car-park site, construction of the new wing will be delayed by six months.",
        "options": [
          "No matter how",
          "Despite what",
          "However artefacts",
          "Whatever artefacts"
        ],
        "answer": 3,
        "explanation": "Whatever + N (artefacts) + S + V = Bất kể cổ vật gì mà nhóm khảo cổ tìm thấy."
      },
      {
        "origNum": 18,
        "instruction": INS_1,
        "text": "__________ the lens aperture a photographer selects, the shallower the depth of field becomes in the portrait.",
        "options": [
          "The more wide",
          "Wider",
          "The widest",
          "The wider"
        ],
        "answer": 3,
        "explanation": "So sánh kép: The + comparative adj (The wider) + S + V, the + comparative adj..."
      },
      {
        "origNum": 19,
        "instruction": INS_1,
        "text": "Not until the independent toxicology report was published __________ to withdraw the contaminated batch.",
        "options": [
          "the manufacturer agreed",
          "the manufacturer did agree",
          "had the manufacturer agreed",
          "did the manufacturer agree"
        ],
        "answer": 3,
        "explanation": "Đảo ngữ ở mệnh đề chính sau “Not until + mệnh đề quá khứ đơn”: did + S + V nguyên thể (did the manufacturer agree)."
      },
      {
        "origNum": 20,
        "instruction": INS_1,
        "text": "Mr Nam: “Your students’ debate team performed brilliantly in the provincial final!”\nMs Mai: “__________”",
        "options": [
          "Forget it. The judges were clearly biased in our favour.",
          "Yes, obviously. The other schools didn’t stand a chance against my coaching.",
          "Not at all. Debating is a complete waste of curriculum time anyway.",
          "Thank you! They put in months of preparation, and I’m really proud of their effort."
        ],
        "answer": 3,
        "explanation": "Lời đáp lịch sự, khiêm tốn và tự nhiên khi nhận lời khen: cảm ơn và ghi nhận sự nỗ lực của học sinh."
      },
      {
        "origNum": 21,
        "instruction": INS_1,
        "text": "The coastal villagers fought __________ to prevent the developer from draining the historic salt marshes.",
        "options": [
          "heart and soul",
          "flesh and blood",
          "skin and bone",
          "tooth and nail"
        ],
        "answer": 3,
        "explanation": "fight tooth and nail = chiến đấu quyết liệt, hết sức mình."
      },
      {
        "origNum": 22,
        "instruction": INS_1,
        "text": "By automating the routine invoicing tasks, the firm managed to kill two __________ with one stone.",
        "options": [
          "hawks",
          "sparrows",
          "pigeons",
          "birds"
        ],
        "answer": 3,
        "explanation": "kill two birds with one stone = một mũi tên trúng hai đích."
      },
      {
        "origNum": 23,
        "instruction": INS_1,
        "text": "During the Q&A session, several shareholders __________ the issue of executive bonuses.",
        "options": [
          "brought about",
          "brought off",
          "brought round",
          "brought up"
        ],
        "answer": 3,
        "explanation": "bring up an issue = nêu lên, đưa ra một vấn đề để thảo luận. bring off = thực hiện thành công; bring about = gây ra."
      },
      {
        "origNum": 24,
        "instruction": INS_1,
        "text": "The historian’s account of the treaty is remarkably __________, drawing on primary letters from both warring factions.",
        "options": [
          "authoritarian",
          "authorial",
          "authorized",
          "authoritative"
        ],
        "answer": 3,
        "explanation": "authoritative = có uy tín, đáng tin cậy và chuẩn xác về mặt học thuật (khác với authoritarian = độc đoán, chuyên quyền)."
      },
      {
        "origNum": 25,
        "instruction": INS_1,
        "text": "The government’s subsidy scheme was intended to __________ the transition from coal boilers to heat pumps.",
        "options": [
          "exterminate",
          "extradite",
          "extricate",
          "expedite"
        ],
        "answer": 3,
        "explanation": "expedite = đẩy nhanh tiến độ. extradite = dẫn độ; extricate = gỡ thoát; exterminate = tiêu diệt."
      }
    ],
    "4": [
      {
        "origNum": 16,
        "instruction": INS_1,
        "text": "Little did the expedition members suspect that the glacier bridge had already cracked, __________?",
        "options": [
          "did they",
          "didn’t they",
          "had they",
          "hadn’t they"
        ],
        "answer": 0,
        "explanation": "Mệnh đề chính có “Little” (mang nghĩa phủ định) và trợ động từ “did” + chủ ngữ “the expedition members” → câu hỏi đuôi khẳng định: did they?"
      },
      {
        "origNum": 17,
        "instruction": INS_1,
        "text": "__________ the new battery chemistry promises double the energy density, it remains too unstable for commercial aircraft.",
        "options": [
          "Much as",
          "Despite",
          "However",
          "No matter"
        ],
        "answer": 0,
        "explanation": "Much as + S + V = Although + S + V (Mặc dù công nghệ pin mới hứa hẹn mật độ năng lượng gấp đôi...)."
      },
      {
        "origNum": 18,
        "instruction": INS_1,
        "text": "__________ the peer-review process a medical journal enforces, the more credibility its published trials command.",
        "options": [
          "The more rigorous",
          "More rigorous",
          "The most rigorous",
          "The rigorous more"
        ],
        "answer": 0,
        "explanation": "So sánh kép: The + comparative adj (The more rigorous) + N + S + V, the + comparative..."
      },
      {
        "origNum": 19,
        "instruction": INS_1,
        "text": "Only by cross-referencing satellite radar with parish tax rolls __________ the lost medieval harbour.",
        "options": [
          "were the archaeologists able to locate",
          "the archaeologists were able to locate",
          "the archaeologists located",
          "did the archaeologists able to locate"
        ],
        "answer": 0,
        "explanation": "Đảo ngữ sau “Only by + V-ing”: to be/trợ động từ đứng trước chủ ngữ → were the archaeologists able to locate."
      },
      {
        "origNum": 20,
        "instruction": INS_1,
        "text": "Ms Thảo: “Thank you so much for reviewing my grant application at such short notice.”\nDr Kiên: “__________”",
        "options": [
          "My pleasure! The research proposal is very strong, and I hope it gets funded.",
          "You’re welcome, though I doubt the panel will even read your draft.",
          "Never mind. You owe me a big favour next semester for doing this.",
          "Not at all. I had nothing better to do this afternoon anyway."
        ],
        "answer": 0,
        "explanation": "Lời đáp lịch sự, khích lệ và chuyên nghiệp khi được cảm ơn: “My pleasure!...”"
      },
      {
        "origNum": 21,
        "instruction": INS_1,
        "text": "After the merger, the new management team revamped the outdated inventory system, leaving no stone __________.",
        "options": [
          "unturned",
          "unmoved",
          "untouched",
          "unrolled"
        ],
        "answer": 0,
        "explanation": "leave no stone unturned = tìm mọi cách, rà soát kỹ lưỡng từng chi tiết không bỏ sót điều gì."
      },
      {
        "origNum": 22,
        "instruction": INS_1,
        "text": "When the shipping canal was blocked for a week, global electronics manufacturers were left in the __________.",
        "options": [
          "lurch",
          "limbo",
          "ledge",
          "lunge"
        ],
        "answer": 0,
        "explanation": "leave somebody in the lurch = bỏ mặc ai trong hoàn cảnh khó khăn."
      },
      {
        "origNum": 23,
        "instruction": INS_1,
        "text": "It took the forensic accountants nearly a month to __________ the discrepancies in the subsidiary’s balance sheet.",
        "options": [
          "iron out",
          "chalk up",
          "fob off",
          "egg on"
        ],
        "answer": 0,
        "explanation": "iron out (discrepancies/problems) = giải quyết, tháo gỡ những khúc mắc/sai lệch."
      },
      {
        "origNum": 24,
        "instruction": INS_1,
        "text": "The documentary offers a __________ analysis of how fast fashion affects water tables in arid cotton-growing regions.",
        "options": [
          "compelling",
          "compulsory",
          "compulsive",
          "compliant"
        ],
        "answer": 0,
        "explanation": "compelling analysis = phân tích thuyết phục, cuốn hút. compulsive = khó cưỡng (thói quen); compulsory = bắt buộc; compliant = tuân thủ."
      },
      {
        "origNum": 25,
        "instruction": INS_1,
        "text": "Rather than __________ the rumours of a budget deficit, the treasurer’s evasive press conference only fuelled further speculation.",
        "options": [
          "dispelling",
          "dispersing",
          "disbursing",
          "displacing"
        ],
        "answer": 0,
        "explanation": "dispel (rumours/doubts/fears) = xua tan, xóa bỏ tin đồn/nghi ngờ."
      }
    ],
    "5": [
      {
        "origNum": 16,
        "instruction": INS_1,
        "text": "No one in the control tower had been notified of the runway inspection, __________?",
        "options": [
          "hadn’t they",
          "had they",
          "did they",
          "weren’t they"
        ],
        "answer": 1,
        "explanation": "Chủ ngữ “No one” mang nghĩa phủ định → câu hỏi đuôi khẳng định; động từ “had been notified” → had they?"
      },
      {
        "origNum": 17,
        "instruction": INS_1,
        "text": "__________ the restoration of the frescoes takes another two years, the cathedral chapter insists on using traditional mineral pigments.",
        "options": [
          "Even though it",
          "Even if",
          "Despite",
          "As though"
        ],
        "answer": 1,
        "explanation": "Even if + S + V = Ngay cả khi (giả định nhượng bộ). B thừa “it”; C không đi với mệnh đề."
      },
      {
        "origNum": 18,
        "instruction": INS_1,
        "text": "__________ the biodiversity of a floodplain meadow, the more resilient the ecosystem is to prolonged summer droughts.",
        "options": [
          "Richer",
          "The richer",
          "The richest",
          "The more rich"
        ],
        "answer": 1,
        "explanation": "So sánh kép: The + comparative adj (The richer) + N, the more..."
      },
      {
        "origNum": 19,
        "instruction": INS_1,
        "text": "So intricate __________ on the bronze drum that modern foundry workers struggled to replicate it.",
        "options": [
          "the geometric engraving was",
          "was the geometric engraving",
          "did the geometric engraving",
          "were the geometric engraving"
        ],
        "answer": 1,
        "explanation": "Đảo ngữ với “So + Adj + be + S + that...”: So intricate was the geometric engraving..."
      },
      {
        "origNum": 20,
        "instruction": INS_1,
        "text": "Mr Hoàng: “I’m terribly sorry for mixing up the delivery dates for your laboratory glassware.”\nDr Lan: “__________”",
        "options": [
          "You should be. Nobody in your company knows how to read a calendar.",
          "No harm done—our experiments don’t start until next Monday, so Friday’s delivery will be fine.",
          "I’d rather you didn’t apologise and just paid for our entire research project.",
          "Don’t mention it, because we have already cancelled our contract with you."
        ],
        "answer": 1,
        "explanation": "Lời đáp lịch sự, thông cảm khi người khác xin lỗi: “No harm done...” (Không sao đâu...)."
      },
      {
        "origNum": 21,
        "instruction": INS_1,
        "text": "Once the new high-speed rail link opens, the sleepy market town is expected to change beyond __________.",
        "options": [
          "recollection",
          "recognition",
          "remembrance",
          "realisation"
        ],
        "answer": 1,
        "explanation": "change beyond recognition = thay đổi đến mức không còn nhận ra được nữa."
      },
      {
        "origNum": 22,
        "instruction": INS_1,
        "text": "Trying to reform the archaic tax code without cross-party support is like __________ against the tide.",
        "options": [
          "sailing",
          "swimming",
          "rowing",
          "wading"
        ],
        "answer": 1,
        "explanation": "swim against the tide = đi ngược lại xu thế/dòng chảy số đông đầy khó khăn."
      },
      {
        "origNum": 23,
        "instruction": INS_1,
        "text": "Several independent bookshops have had to __________ after commercial rents on the high street doubled.",
        "options": [
          "back down",
          "close down",
          "crack down",
          "step down"
        ],
        "answer": 1,
        "explanation": "close down = đóng cửa, ngừng kinh doanh. back down = nhượng bộ; crack down = trấn áp; step down = từ chức."
      },
      {
        "origNum": 24,
        "instruction": INS_1,
        "text": "The inquiry concluded that the failure of the flood barrier was the result of __________ maintenance over two decades.",
        "options": [
          "negligible",
          "negligent",
          "negotiable",
          "neglected"
        ],
        "answer": 1,
        "explanation": "negligent = cẩu thả, tắc trách (negligent maintenance). negligible = không đáng kể (về số lượng)."
      },
      {
        "origNum": 25,
        "instruction": INS_1,
        "text": "To prevent conflicts of interest, board members must __________ themselves from voting on contracts involving family firms.",
        "options": [
          "refute",
          "recuse",
          "rebuke",
          "repulse"
        ],
        "answer": 1,
        "explanation": "recuse oneself from doing something = tự rút lui khỏi việc xét duyệt/biểu quyết để tránh xung đột lợi ích."
      }
    ],
    "6": [
      {
        "origNum": 16,
        "instruction": INS_1,
        "text": "Nothing in the archive basement had been damaged by the power surge, __________?",
        "options": [
          "did it",
          "hadn’t it",
          "had it",
          "was it"
        ],
        "answer": 2,
        "explanation": "Chủ ngữ “Nothing” mang nghĩa phủ định + đại từ quy chiếu “it” + trợ động từ “had” → had it?"
      },
      {
        "origNum": 17,
        "instruction": INS_1,
        "text": "__________ the satellite’s primary solar array failed to unfold, engineers managed to stabilise the craft using backup batteries.",
        "options": [
          "Albeit",
          "In spite of",
          "Whereas",
          "Notwithstanding that"
        ],
        "answer": 2,
        "explanation": "Whereas / While + mệnh đề = Mặc dù / Trong khi (chỉ sự tương phản giữa hai mệnh đề). Albeit không đứng đầu câu đi với mệnh đề đầy đủ theo cách này; In spite of + N."
      },
      {
        "origNum": 18,
        "instruction": INS_1,
        "text": "__________ the buffer zone between farmland and rivers, the less agricultural nitrate leaches into drinking-water supplies.",
        "options": [
          "The broadest",
          "Broader",
          "The broader",
          "The more broad"
        ],
        "answer": 2,
        "explanation": "So sánh kép: The + comparative adj (The broader) + N, the less..."
      },
      {
        "origNum": 19,
        "instruction": INS_1,
        "text": "Scarcely __________ the podium when the microphone system began to emit a piercing whistle.",
        "options": [
          "the keynote speaker had reached",
          "did the keynote speaker reach",
          "had the keynote speaker reached",
          "was the keynote speaker reaching"
        ],
        "answer": 2,
        "explanation": "Đảo ngữ với “Scarcely + had + S + V3/ed + when + S + V2/ed”."
      },
      {
        "origNum": 20,
        "instruction": INS_1,
        "text": "Ms Hương: “Would you mind if I borrowed your field binoculars for the bird-count this afternoon?”\nMr Tuấn: “__________”",
        "options": [
          "No, I mind very much. Please take them whenever you like.",
          "Yes, please do! I don’t need them until tomorrow morning anyway.",
          "Not at all—they’re in the top drawer of my desk; just bring them back by five.",
          "Never mind. Birdwatching in the rain is no fun at all."
        ],
        "answer": 2,
        "explanation": "Với câu hỏi “Would you mind if...”, đồng ý cho mượn phải dùng “Not at all” / “No, go ahead” (B và C mâu thuẫn ngữ nghĩa)."
      },
      {
        "origNum": 21,
        "instruction": INS_1,
        "text": "The new apprenticeship scheme has breathed new __________ into the region’s traditional boatbuilding yards.",
        "options": [
          "air",
          "wind",
          "life",
          "blood"
        ],
        "answer": 2,
        "explanation": "breathe new life into something = thổi luồng sinh khí mới, làm hồi sinh."
      },
      {
        "origNum": 22,
        "instruction": INS_1,
        "text": "Instead of addressing the root causes of hospital delays, the new guidelines merely paper over the __________.",
        "options": [
          "gaps",
          "holes",
          "cracks",
          "seams"
        ],
        "answer": 2,
        "explanation": "paper over the cracks = che đậy tạm bợ những khuyết điểm/rạn nứt thay vì giải quyết tận gốc."
      },
      {
        "origNum": 23,
        "instruction": INS_1,
        "text": "The municipal library has __________ late-return fines for children’s books in an effort to encourage summer reading.",
        "options": [
          "fallen back on",
          "come up with",
          "done away with",
          "gone in for"
        ],
        "answer": 2,
        "explanation": "do away with = bãi bỏ, xóa bỏ. come up with = nảy ra ý tưởng; fall back on = trông cậy vào lúc bí; go in for = tham gia/yêu thích."
      },
      {
        "origNum": 24,
        "instruction": INS_1,
        "text": "Because the two witnesses gave completely __________ accounts of the collision, the magistrate ordered a review of CCTV footage.",
        "options": [
          "incompetent",
          "incomparable",
          "incompatible",
          "incomplete"
        ],
        "answer": 2,
        "explanation": "incompatible accounts = lời khai mâu thuẫn, không thể dung hòa. incomparable = vô song; incompetent = bất tài."
      },
      {
        "origNum": 25,
        "instruction": INS_1,
        "text": "The charity’s emergency appeal helped __________ the hardship faced by hill farmers after the unseasonal blizzard.",
        "options": [
          "alienate",
          "aggravate",
          "alleviate",
          "allocate"
        ],
        "answer": 2,
        "explanation": "alleviate (hardship/pain/poverty) = làm giảm nhẹ, xoa dịu nỗi khó khăn."
      }
    ],
    "7": [
      {
        "origNum": 16,
        "instruction": INS_1,
        "text": "Barely five percent of the surveyed commuters supported cutting the night-bus service, __________?",
        "options": [
          "had they",
          "didn’t they",
          "were they",
          "did they"
        ],
        "answer": 3,
        "explanation": "“Barely” mang nghĩa phủ định + động từ quá khứ đơn “supported” + đại từ “they” → câu hỏi đuôi khẳng định: did they?"
      },
      {
        "origNum": 17,
        "instruction": INS_1,
        "text": "__________ the cost of lithium-iron batteries continues to fall, grid-scale storage will soon undercut gas peaking plants.",
        "options": [
          "Even though",
          "Despite that",
          "Unless",
          "Assuming that"
        ],
        "answer": 3,
        "explanation": "Assuming that + mệnh đề = Giả sử rằng / Với điều kiện là (mệnh đề điều kiện hợp nghĩa với vế sau)."
      },
      {
        "origNum": 18,
        "instruction": INS_1,
        "text": "__________ the encryption algorithm a banking app uses, the harder it is for cybercriminals to intercept transactions.",
        "options": [
          "The most complex",
          "More complex",
          "The complexer",
          "The more complex"
        ],
        "answer": 3,
        "explanation": "So sánh kép: The more complex + N + S + V, the harder..."
      },
      {
        "origNum": 19,
        "instruction": INS_1,
        "text": "Not only __________ carbon emissions, but the new district heating network also lowered household energy bills by twenty percent.",
        "options": [
          "the project reduced",
          "was the project reducing",
          "had the project reduced",
          "did the project reduce"
        ],
        "answer": 3,
        "explanation": "Đảo ngữ sau “Not only” ở mệnh đề đầu (thì quá khứ đơn tương ứng với “lowered” ở vế sau): did the project reduce."
      },
      {
        "origNum": 20,
        "instruction": INS_1,
        "text": "Dr Phúc: “Your article on coastal mangrove restoration was cited three times at the conference!”\nMs Yến: “__________”",
        "options": [
          "Never mind. Mangrove restoration is far too simple for them to understand.",
          "Only three times? They should have cited it in every single session.",
          "Don’t bother telling me; I never read conference proceedings anyway.",
          "That’s wonderful news! I’m delighted our field data is proving useful to other teams."
        ],
        "answer": 3,
        "explanation": "Lời đáp tự nhiên, khiêm tốn và tích cực khi nghe tin công trình nghiên cứu được trích dẫn."
      },
      {
        "origNum": 21,
        "instruction": INS_1,
        "text": "When the software update crashed the ticketing server on opening night, the box-office staff were left at their wits’ __________.",
        "options": [
          "tip",
          "edge",
          "limit",
          "end"
        ],
        "answer": 3,
        "explanation": "at one’s wits’ end = hết cách, vô cùng bối rối không biết xoay xở thế nào."
      },
      {
        "origNum": 22,
        "instruction": INS_1,
        "text": "The new procurement rules have leveled the playing __________ for small regional cooperatives bidding for school catering contracts.",
        "options": [
          "pitch",
          "ground",
          "court",
          "field"
        ],
        "answer": 3,
        "explanation": "level the playing field = tạo sân chơi bình đẳng, công bằng."
      },
      {
        "origNum": 23,
        "instruction": INS_1,
        "text": "Our initial prototype failed the vibration test, so the engineering team had to __________ and redesign the mounting brackets.",
        "options": [
          "sit on the fence",
          "burn the midnight oil",
          "jump on the bandwagon",
          "go back to the drawing board"
        ],
        "answer": 3,
        "explanation": "go back to the drawing board = làm lại từ đầu sau khi thất bại."
      },
      {
        "origNum": 24,
        "instruction": INS_1,
        "text": "The central bank governor gave a __________ warning that premature interest-rate cuts could reignite housing inflation.",
        "options": [
          "sedentary",
          "sanitary",
          "solitary",
          "salutary"
        ],
        "answer": 3,
        "explanation": "salutary warning/lesson = lời cảnh báo/bài học bổ ích, đáng suy ngẫm. sanitary = vệ sinh; solitary = đơn độc; sedentary = tĩnh tại."
      },
      {
        "origNum": 25,
        "instruction": INS_1,
        "text": "Years of overgrazing on the steep hillsides have __________ the topsoil’s ability to absorb heavy monsoon rains.",
        "options": [
          "implicated",
          "imparted",
          "impounded",
          "impaired"
        ],
        "answer": 3,
        "explanation": "impair = làm suy giảm, làm hỏng (khả năng/chức năng). impart = truyền đạt; impound = tịch thu; implicate = làm liên lụy."
      }
    ],
    "8": [
      {
        "origNum": 16,
        "instruction": INS_1,
        "text": "Neither of the external examiners raised any objection to the thesis methodology, __________?",
        "options": [
          "did they",
          "didn’t they",
          "did he",
          "had they"
        ],
        "answer": 0,
        "explanation": "Chủ ngữ “Neither of...” mang nghĩa phủ định + động từ quá khứ đơn “raised” + đại từ “they” → câu hỏi đuôi khẳng định: did they?"
      },
      {
        "origNum": 17,
        "instruction": INS_1,
        "text": "__________ the new telescope is situated in the arid Atacama Desert, unseasonal cloud cover occasionally disrupts observations.",
        "options": [
          "While",
          "Despite",
          "Notwithstanding",
          "However"
        ],
        "answer": 0,
        "explanation": "While / Although + mệnh đề chỉ sự nhượng bộ (Mặc dù kính thiên văn mới đặt ở sa mạc Atacama khô cằn...)."
      },
      {
        "origNum": 18,
        "instruction": INS_1,
        "text": "__________ the particle size of the recycled aggregate, the smoother the resulting concrete finish becomes.",
        "options": [
          "The finer",
          "Finer",
          "The finest",
          "The more fine"
        ],
        "answer": 0,
        "explanation": "So sánh kép: The + comparative adj (The finer) + N, the smoother..."
      },
      {
        "origNum": 19,
        "instruction": INS_1,
        "text": "At no time during the three-hour hearing __________ that the safety valve had been manually overridden.",
        "options": [
          "did the plant manager admit",
          "the plant manager admitted",
          "was the plant manager admit",
          "the plant manager did admit"
        ],
        "answer": 0,
        "explanation": "Đảo ngữ sau cụm phủ định “At no time...”: did + S + V nguyên thể (did the plant manager admit)."
      },
      {
        "origNum": 20,
        "instruction": INS_1,
        "text": "Ms Liên: “I really appreciate your helping us set up the charity book stall in the rain.”\nMr Đạt: “__________”",
        "options": [
          "Think nothing of it! We raised a great sum for the school library, and that’s what matters.",
          "Yes, you should appreciate it because my coat is completely soaked.",
          "Never mind. Nobody buys second-hand books at these events anyway.",
          "I’m afraid not. Next year you will have to put up the tent yourself."
        ],
        "answer": 0,
        "explanation": "Lời đáp lịch sự, thân thiện khi nhận lời cảm ơn: “Think nothing of it!...” (Không có gì đâu!)."
      },
      {
        "origNum": 21,
        "instruction": INS_1,
        "text": "The sudden resignation of the chief financial officer caught the entire board of directors off __________.",
        "options": [
          "guard",
          "watch",
          "shield",
          "post"
        ],
        "answer": 0,
        "explanation": "catch somebody off guard = làm ai bất ngờ, không kịp trở tay."
      },
      {
        "origNum": 22,
        "instruction": INS_1,
        "text": "With raw-material costs rising and export orders shrinking, local ceramics workshops found themselves caught between a rock and a hard __________.",
        "options": [
          "place",
          "spot",
          "wall",
          "stone"
        ],
        "answer": 0,
        "explanation": "caught between a rock and a hard place = tiến thoái lưỡng nan, ở vào thế kẹt."
      },
      {
        "origNum": 23,
        "instruction": INS_1,
        "text": "Before launching the nationwide vaccination drive, public health officials __________ local community leaders to address vaccine hesitancy.",
        "options": [
          "reached out to",
          "looked down on",
          "ran out of",
          "got away with"
        ],
        "answer": 0,
        "explanation": "reach out to somebody = chủ động liên hệ, kết nối để hợp tác/hỗ trợ."
      },
      {
        "origNum": 24,
        "instruction": INS_1,
        "text": "The architect’s __________ use of salvaged monastery bricks allowed the modern gallery extension to blend effortlessly into the historic square.",
        "options": [
          "judicious",
          "judicial",
          "judgemental",
          "juridical"
        ],
        "answer": 0,
        "explanation": "judicious = khôn ngoan, sáng suốt, có cân nhắc kỹ (judicious use). judicial = thuộc tòa án/tư pháp; judgemental = hay phán xét."
      },
      {
        "origNum": 25,
        "instruction": INS_1,
        "text": "The pharmaceutical company was fined heavily for attempting to __________ unfavourable clinical-trial results.",
        "options": [
          "suppress",
          "oppress",
          "compress",
          "depress"
        ],
        "answer": 0,
        "explanation": "suppress (results/information/evidence) = ém nhẹm, bưng bít thông tin bất lợi."
      }
    ],
    "9": [
      {
        "origNum": 16,
        "instruction": INS_1,
        "text": "Few of the original timber cottages along the quay survived the 1953 storm surge, __________?",
        "options": [
          "didn’t they",
          "did they",
          "were they",
          "had they"
        ],
        "answer": 1,
        "explanation": "Chủ ngữ có “Few” (mang nghĩa phủ định: hầu như không) + động từ quá khứ đơn “survived” → câu hỏi đuôi khẳng định: did they?"
      },
      {
        "origNum": 17,
        "instruction": INS_1,
        "text": "__________ the municipal council decides to pedestrianise the market square, delivery vans will still be granted access before 7 a.m.",
        "options": [
          "In case of",
          "Whether or not",
          "Regardless",
          "Despite whether"
        ],
        "answer": 1,
        "explanation": "Whether or not + mệnh đề = Dù hội đồng thành phố có quyết định biến quảng trường thành phố đi bộ hay không."
      },
      {
        "origNum": 18,
        "instruction": INS_1,
        "text": "__________ the insulation layer installed in the roof cavity, the less heat escapes from the building in January.",
        "options": [
          "Thicker",
          "The thicker",
          "The thickest",
          "The more thick"
        ],
        "answer": 1,
        "explanation": "So sánh kép: The + comparative adj (The thicker) + N, the less..."
      },
      {
        "origNum": 19,
        "instruction": INS_1,
        "text": "Little __________ when she bought the dusty violin at a village auction that it had been crafted in eighteenth-century Cremona.",
        "options": [
          "she realised",
          "did she realise",
          "was she realising",
          "she did realise"
        ],
        "answer": 1,
        "explanation": "Đảo ngữ sau trạng từ phủ định “Little” đầu câu ở thì quá khứ đơn: did she realise."
      },
      {
        "origNum": 20,
        "instruction": INS_1,
        "text": "Mr Khôi: “Congratulations on winning the provincial young-inventor award!”\nMinh: “__________”",
        "options": [
          "Of course I won. The other inventions were completely amateurish.",
          "Thank you! My physics teacher gave me invaluable guidance throughout the project.",
          "Don’t mention it. I didn’t even want to enter the competition.",
          "Never mind. The prize money isn’t enough to buy a new laptop."
        ],
        "answer": 1,
        "explanation": "Lời đáp lịch sự, khiêm tốn khi được chúc mừng đạt giải thưởng: cảm ơn và tri ân sự hướng dẫn của giáo viên."
      },
      {
        "origNum": 21,
        "instruction": INS_1,
        "text": "Rumours of an impending takeover spread like __________ across the trading floor.",
        "options": [
          "whirlwind",
          "wildfire",
          "avalanche",
          "lightning"
        ],
        "answer": 1,
        "explanation": "spread like wildfire = lan nhanh như cháy rừng (tin đồn, dịch bệnh)."
      },
      {
        "origNum": 22,
        "instruction": INS_1,
        "text": "By ignoring the early warning signs of soil salinisation, the irrigation authority is playing with __________.",
        "options": [
          "flame",
          "fire",
          "sparks",
          "ashes"
        ],
        "answer": 1,
        "explanation": "play with fire = đùa với lửa (làm việc liều lĩnh, nguy hiểm)."
      },
      {
        "origNum": 23,
        "instruction": INS_1,
        "text": "The investigative committee was set up to __________ the cause of the blackout that paralysed three provinces.",
        "options": [
          "look up to",
          "look into",
          "look out for",
          "look down on"
        ],
        "answer": 1,
        "explanation": "look into = điều tra, xem xét kỹ nguyên nhân."
      },
      {
        "origNum": 24,
        "instruction": INS_1,
        "text": "The new symphony conductor is known for his __________ attention to detail, rehearsing a single four-bar phrase twenty times.",
        "options": [
          "meritorious",
          "meticulous",
          "melodious",
          "mendacious"
        ],
        "answer": 1,
        "explanation": "meticulous attention to detail = sự tỉ mỉ, kỹ lưỡng đến từng chi tiết."
      },
      {
        "origNum": 25,
        "instruction": INS_1,
        "text": "High-speed satellite internet has helped __________ the digital divide between urban campuses and remote island schools.",
        "options": [
          "bind",
          "bridge",
          "breach",
          "brace"
        ],
        "answer": 1,
        "explanation": "bridge the divide/gap = thu hẹp, xóa bỏ khoảng cách."
      }
    ],
    "10": [
      {
        "origNum": 16,
        "instruction": INS_1,
        "text": "Rarely do wild snow leopards venture below the tree line during summer, __________?",
        "options": [
          "are they",
          "don’t they",
          "do they",
          "did they"
        ],
        "answer": 2,
        "explanation": "Mệnh đề chính có “Rarely” (mang nghĩa phủ định) + trợ động từ hiện tại đơn “do” → câu hỏi đuôi khẳng định: do they?"
      },
      {
        "origNum": 17,
        "instruction": INS_1,
        "text": "__________ the city’s population has grown by thirty percent since 2010, per-capita water consumption has actually fallen.",
        "options": [
          "However",
          "Despite",
          "Even though",
          "In spite of"
        ],
        "answer": 2,
        "explanation": "Even though + mệnh đề = Mặc dù dân số thành phố đã tăng 30%..."
      },
      {
        "origNum": 18,
        "instruction": INS_1,
        "text": "__________ the early-warning lead time before a typhoon makes landfall, the more effectively coastal communes can evacuate.",
        "options": [
          "The longest",
          "Longer",
          "The longer",
          "The more long"
        ],
        "answer": 2,
        "explanation": "So sánh kép: The + comparative adj (The longer) + N, the more..."
      },
      {
        "origNum": 19,
        "instruction": INS_1,
        "text": "Only after the ancient timber beams had been scanned with ultrasound __________ the hidden woodworm damage.",
        "options": [
          "the engineers detected",
          "had the engineers detected",
          "did the engineers detect",
          "were the engineers detected"
        ],
        "answer": 2,
        "explanation": "Đảo ngữ ở mệnh đề chính sau “Only after + mệnh đề”: did + S + V nguyên thể (did the engineers detect)."
      },
      {
        "origNum": 20,
        "instruction": INS_1,
        "text": "Ms Trang: “Your photography exhibition on Thanh Hóa’s coastal salt fields is deeply moving!”\nMr Bình: “__________”",
        "options": [
          "Not at all. Taking photos in the sun was a complete waste of my summer.",
          "I know. Nobody else in the province has a camera as expensive as mine.",
          "Thank you so much! The salt workers welcomed me warmly, and their resilience inspired every shot.",
          "Never mind. The gallery lighting ruined most of the prints anyway."
        ],
        "answer": 2,
        "explanation": "Lời đáp lịch sự, khiêm tốn và giàu cảm xúc khi nhận lời khen về triển lãm nghệ thuật."
      },
      {
        "origNum": 21,
        "instruction": INS_1,
        "text": "After months of inconclusive talks, the two tech giants finally buried the __________ and agreed to share charging standards.",
        "options": [
          "sword",
          "dagger",
          "hatchet",
          "hammer"
        ],
        "answer": 2,
        "explanation": "bury the hatchet = giảng hòa, chấm dứt bất đồng/thù địch."
      },
      {
        "origNum": 22,
        "instruction": INS_1,
        "text": "Investing the entire pension fund in a single unproven biotech start-up would be putting all our __________ in one basket.",
        "options": [
          "coins",
          "apples",
          "eggs",
          "seeds"
        ],
        "answer": 2,
        "explanation": "put all one’s eggs in one basket = bỏ tất cả trứng vào một giỏ (đặt cược toàn bộ rủi ro vào một nơi)."
      },
      {
        "origNum": 23,
        "instruction": INS_1,
        "text": "Because several key witnesses were ill, the magistrate decided to __________ the hearing until the following month.",
        "options": [
          "put up",
          "put out",
          "put off",
          "put through"
        ],
        "answer": 2,
        "explanation": "put off = postpone (trì hoãn)."
      },
      {
        "origNum": 24,
        "instruction": INS_1,
        "text": "The committee’s report provides a __________ overview of the province’s renewable-energy potential over the next decade.",
        "options": [
          "comprehending",
          "comprehensible",
          "comprehensive",
          "compromised"
        ],
        "answer": 2,
        "explanation": "comprehensive = toàn diện, đầy đủ (khác với comprehensible = có thể hiểu được)."
      },
      {
        "origNum": 25,
        "instruction": INS_1,
        "text": "Strict marine-protected zones have helped __________ depleted coral-reef fish populations within just five years.",
        "options": [
          "reprimand",
          "relinquish",
          "replenish",
          "repudiate"
        ],
        "answer": 2,
        "explanation": "replenish = làm đầy lại, phục hồi trữ lượng. relinquish = từ bỏ; reprimand = khiển trách; repudiate = bác bỏ."
      }
    ]
  },
  "2": {
    "1": [
      {
        "origNum": 26,
        "instruction": INS_3,
        "text": "",
        "options": [
          "visibility",
          "versatility",
          "velocity",
          "vulnerability"
        ],
        "answer": 3,
        "explanation": "vulnerability = sự dễ bị tổn thương (structural vulnerability to disruption).",
        "passage": "<b>SUBSEA CABLES: THE FRAGILE BACKBONE OF THE INTERNET</b>\nAlthough most people imagine digital traffic floating effortlessly through ‘the cloud’, over 95 percent of intercontinental data actually travels through hair-thin glass fibres laid across the ocean floor. Recent anchor drags in the Red Sea and the Baltic have exposed the structural (26)__________ of this hidden network. Stretching across abyssal plains and volcanic ridges, a single transoceanic cable can (27)__________ terabits of financial transactions, diplomatic cables and video calls every second.\nBecause only about sixty specialised repair vessels exist worldwide, fixing a severed line in deep water is a slow and costly endeavour. (28)__________, ships must wait for calm weather and sovereign permits before grappling the broken ends from the seabed. During a major outage, telecom operators have to (29)__________ data traffic onto backup terrestrial routes, which increases latency across entire continents.\nLittle (30)__________ when streaming a high-definition film that their signal is passing through a garden-hose-sized conduit three miles beneath the waves. Without stronger maritime protection zones, these subsea arteries will remain the Achilles’ (31)__________ of the global information economy.\n<i>(Adapted from TeleGeography Submarine Cable Map Report and The Economist)</i>"
      },
      {
        "origNum": 27,
        "instruction": INS_3,
        "text": "",
        "options": [
          "convict",
          "convey",
          "convene",
          "convert"
        ],
        "answer": 1,
        "explanation": "convey = truyền tải, vận chuyển (dữ liệu, tín hiệu). convene = triệu tập; convict = kết án; convert = chuyển đổi."
      },
      {
        "origNum": 28,
        "instruction": INS_3,
        "text": "",
        "options": [
          "In contrast",
          "Even so",
          "Otherwise",
          "As a result"
        ],
        "answer": 3,
        "explanation": "“As a result” = kết quả là, do đó (nêu hệ quả của việc thiếu tàu sửa chữa chuyên dụng và điều kiện biển sâu)."
      },
      {
        "origNum": 29,
        "instruction": INS_3,
        "text": "",
        "options": [
          "subvert",
          "divert",
          "revert",
          "avert"
        ],
        "answer": 1,
        "explanation": "divert (traffic/flights) onto... = chuyển hướng lưu lượng sang tuyến dự phòng."
      },
      {
        "origNum": 30,
        "instruction": INS_3,
        "text": "",
        "options": [
          "ordinary users realise",
          "are ordinary users realising",
          "ordinary users do realise",
          "do ordinary users realise"
        ],
        "answer": 3,
        "explanation": "Đảo ngữ sau trạng từ phủ định “Little” đứng đầu câu ở thì hiện tại đơn: Little do ordinary users realise..."
      },
      {
        "origNum": 31,
        "instruction": INS_3,
        "text": "",
        "options": [
          "ankle",
          "heel",
          "wrist",
          "elbow"
        ],
        "answer": 1,
        "explanation": "Achilles’ heel = điểm yếu chí mạng (gót chân Achilles)."
      }
    ],
    "2": [
      {
        "origNum": 26,
        "instruction": INS_3,
        "text": "",
        "options": [
          "longevity",
          "locality",
          "levity",
          "legality"
        ],
        "answer": 0,
        "explanation": "longevity = tuổi thọ, độ bền lâu dài (structural longevity of timber).",
        "passage": "<b>TIMBER SKYSCRAPERS: BUILDING CITIES OUT OF WOOD</b>\nFor over a century, steel and reinforced concrete have dominated urban skylines, while wood was dismissed as a fire hazard suited only to low-rise cottages. Today, however, advances in ‘mass timber’ engineering are demonstrating the remarkable structural (26)__________ of cross-laminated timber (CLT). By gluing kiln-dried spruce boards together in perpendicular layers under immense hydraulic pressure, manufacturers create solid panels that (27)__________ the strength of steel at a fraction of the weight.\nUnlike steel beams, which buckle quickly in extreme heat, thick mass-timber columns char slowly on the outside during a fire, forming an insulating carbon layer that protects the core. (28)__________, because trees absorb carbon dioxide while growing, a twenty-storey timber tower locks away thousands of tonnes of atmospheric carbon for decades. Prefabricated in factory halls with millimetre precision, CLT floor slabs can (29)__________ construction time on noisy city sites by up to 25 percent.\nRarely (30)__________ such a promising path to slashing its embodied emissions as the shift from cement to certified timber. Provided forestry supply chains are managed sustainably, wooden high-rises could become the (31)__________ of low-carbon urban architecture.\n<i>(Adapted from Nature Sustainability and Council on Tall Buildings and Urban Habitat)</i>"
      },
      {
        "origNum": 27,
        "instruction": INS_3,
        "text": "",
        "options": [
          "revel",
          "rebel",
          "rival",
          "ravel"
        ],
        "answer": 2,
        "explanation": "rival (v) = sánh ngang, cạnh tranh được với (rival the strength of steel)."
      },
      {
        "origNum": 28,
        "instruction": INS_3,
        "text": "",
        "options": [
          "Furthermore",
          "Nonetheless",
          "Conversely",
          "Otherwise"
        ],
        "answer": 0,
        "explanation": "“Furthermore” = hơn thế nữa (bổ sung ưu điểm lưu giữ carbon bên cạnh khả năng chống cháy)."
      },
      {
        "origNum": 29,
        "instruction": INS_3,
        "text": "",
        "options": [
          "call off",
          "brush off",
          "shave off",
          "write off"
        ],
        "answer": 2,
        "explanation": "shave off / cut down (time) = cắt giảm đáng kể thời gian thi công. call off = hủy; brush off = phớt lờ; write off = xóa sổ."
      },
      {
        "origNum": 30,
        "instruction": INS_3,
        "text": "",
        "options": [
          "has the construction sector witnessed",
          "the construction sector has witnessed",
          "the construction sector witnesses",
          "does the construction sector witnessed"
        ],
        "answer": 0,
        "explanation": "Đảo ngữ sau trạng từ phủ định “Rarely” đầu câu ở thì hiện tại hoàn thành: has the construction sector witnessed..."
      },
      {
        "origNum": 31,
        "instruction": INS_3,
        "text": "",
        "options": [
          "millstone",
          "stepping-stone",
          "cornerstone",
          "tombstone"
        ],
        "answer": 2,
        "explanation": "cornerstone = nền tảng cốt lõi, viên đá tảng. millstone = gánh nặng; stepping-stone = bàn đạp."
      }
    ],
    "3": [
      {
        "origNum": 26,
        "instruction": INS_3,
        "text": "",
        "options": [
          "pretension",
          "precision",
          "precession",
          "presumption"
        ],
        "answer": 1,
        "explanation": "precision = độ chính xác cao (diagnostic precision).",
        "passage": "<b>AI IN RADIOLOGY: A SECOND PAIR OF EYES</b>\nDeep-learning algorithms trained on millions of medical scans are transforming hospital imaging departments by enhancing the diagnostic (26)__________ of human radiologists. When examining a chest X-ray or mammogram after a twelve-hour night shift, even a veteran specialist can miss a two-millimetre nodule hidden behind a rib. Machine-vision software, by contrast, never suffers from visual fatigue and can (27)__________ subtle pixel patterns in milliseconds.\nEarly sensationalist headlines predicted that artificial intelligence would soon make human radiologists redundant. (28)__________, clinical trials in Sweden and the United Kingdom have shown that the safest outcomes occur when an algorithm acts as an independent second reader alongside a doctor. By triaging normal scans automatically, the software allows clinicians to (29)__________ their limited time to complex, ambiguous cases and patient consultations.\nNot until hospital boards establish clear legal liability rules for algorithmic errors (30)__________ autonomous screening without human sign-off. Used wisely, however, clinical AI is proving to be a (31)__________ in the arm for overstretched healthcare systems.\n<i>(Adapted from The Lancet Digital Health and British Medical Journal)</i>"
      },
      {
        "origNum": 27,
        "instruction": INS_3,
        "text": "",
        "options": [
          "plummet",
          "placate",
          "pilfer",
          "pinpoint"
        ],
        "answer": 3,
        "explanation": "pinpoint = xác định chính xác vị trí/dấu hiệu nhỏ. placate = xoa dịu; pilfer = ăn cắp vặt; plummet = lao dốc."
      },
      {
        "origNum": 28,
        "instruction": INS_3,
        "text": "",
        "options": [
          "In addition",
          "In reality",
          "For instance",
          "As a result"
        ],
        "answer": 1,
        "explanation": "“In reality” = trên thực tế (đối lập với dự đoán giật gân ở câu trước)."
      },
      {
        "origNum": 29,
        "instruction": INS_3,
        "text": "",
        "options": [
          "defer",
          "detract",
          "deviate",
          "devote"
        ],
        "answer": 3,
        "explanation": "devote one’s time to + N = dành thời gian cho việc gì. detract from = làm giảm giá trị; deviate from = chệch hướng; defer to = chiều theo."
      },
      {
        "origNum": 30,
        "instruction": INS_3,
        "text": "",
        "options": [
          "regulators will permit",
          "will regulators permit",
          "regulators permit",
          "do regulators permit"
        ],
        "answer": 1,
        "explanation": "Đảo ngữ ở mệnh đề chính sau cụm “Not until + mệnh đề”: will regulators permit..."
      },
      {
        "origNum": 31,
        "instruction": INS_3,
        "text": "",
        "options": [
          "pat",
          "jab",
          "punch",
          "shot"
        ],
        "answer": 3,
        "explanation": "a shot in the arm = cúích/sự tiếp sức kịp thời và hiệu quả."
      }
    ],
    "4": [
      {
        "origNum": 26,
        "instruction": INS_3,
        "text": "",
        "options": [
          "iniquity",
          "antiquity",
          "ubiquity",
          "ambiguity"
        ],
        "answer": 2,
        "explanation": "ubiquity = sự có mặt ở khắp mọi nơi (the ubiquity of synthetic microfibres).",
        "passage": "<b>SYNTHETIC MICROFIBRES: THE INVISIBLE LAUNDRY POLLUTANT</b>\nEvery time a fleece jacket or polyester sports shirt tumbles through a domestic washing machine, hundreds of thousands of microscopic plastic threads shed into the wastewater stream. Recent ocean-sampling expeditions from the Arctic to the Mediterranean have revealed the alarming (26)__________ of synthetic textile fibres in marine food webs. Because municipal sewage plants were never designed to trap particles thinner than a human hair, millions of tonnes of microfibres (27)__________ filtration screens each year and flow straight into rivers.\nOnce in the sea, these buoyant plastic filaments are mistaken for plankton by filter-feeding mussels, sardines and anchovies. (28)__________, synthetic dyes and flame-retardant chemicals bonded to the fabric can leach into the digestive tracts of fish that humans eventually consume. Laboratory tests show that switching from hot, abrasive wash cycles to cool thirty-minute programmes can (29)__________ fibre shedding by nearly a third.\nOnly by fitting mandatory microfibre-catching filters inside new washing machines (30)__________ this invisible torrent at its source. France’s decision to require built-in filters on all new machines from 2025 is a vital step in nipping textile pollution in the (31)__________.\n<i>(Adapted from Ellen MacArthur Foundation, A New Textiles Economy, and Environmental Science & Technology)</i>"
      },
      {
        "origNum": 27,
        "instruction": INS_3,
        "text": "",
        "options": [
          "bypass",
          "byline",
          "byword",
          "bystand"
        ],
        "answer": 0,
        "explanation": "bypass (v) = đi vòng qua, lọt qua (lưới lọc)."
      },
      {
        "origNum": 28,
        "instruction": INS_3,
        "text": "",
        "options": [
          "Conversely",
          "By contrast",
          "Compounding the problem",
          "Alternatively"
        ],
        "answer": 2,
        "explanation": "“Compounding the problem” = làm vấn đề trầm trọng thêm (bổ sung tác hại hóa chất độc hại ngấm vào cá)."
      },
      {
        "origNum": 29,
        "instruction": INS_3,
        "text": "",
        "options": [
          "curb",
          "coax",
          "cull",
          "cite"
        ],
        "answer": 0,
        "explanation": "curb (fibre shedding) = kiềm chế, cắt giảm lượng sợi vải rụng ra."
      },
      {
        "origNum": 30,
        "instruction": INS_3,
        "text": "",
        "options": [
          "do households stem",
          "households can stem",
          "can households stem",
          "stem households"
        ],
        "answer": 2,
        "explanation": "Đảo ngữ sau “Only by + V-ing” đầu câu: can households stem..."
      },
      {
        "origNum": 31,
        "instruction": INS_3,
        "text": "",
        "options": [
          "bud",
          "leaf",
          "stem",
          "root"
        ],
        "answer": 0,
        "explanation": "nip something in the bud = ngăn chặn ngay từ trong trứng nước."
      }
    ],
    "5": [
      {
        "origNum": 26,
        "instruction": INS_3,
        "text": "",
        "options": [
          "evasion",
          "explosion",
          "excursion",
          "erosion"
        ],
        "answer": 3,
        "explanation": "erosion = sự xói mòn, mai một dần (the quiet erosion of neighbourhood third places).",
        "passage": "<b>THE DISAPPEARING ‘THIRD PLACE’ IN MODERN CITIES</b>\nIn his influential 1989 book <i>The Great Good Place</i>, the urban sociologist Ray Oldenburg argued that healthy democracies need ‘third places’—informal public gathering spots separate from home (the first place) and work (the second place). Over the past decade, skyrocketing commercial rents and algorithmic home entertainment have accelerated the quiet (26)__________ of neighbourhood cafés, independent bookshops, bowling alleys and public baths. Civic researchers warn that losing these low-cost hangout spaces can (27)__________ social trust across age and income lines.\nUnlike social-media feeds, which sort users into ideological echo chambers, a neighbourhood library or park chess table brings pensioners, students and shift workers into unscripted daily contact. (28)__________, epidemiological studies show that regular face-to-face small talk with ‘weak-tie’ acquaintances significantly lowers rates of loneliness and cognitive decline among older adults. When every high-street unit is converted into luxury flats or app-only dark kitchens, residents have nowhere to (29)__________ without spending a fortune.\nSeldom (30)__________ how much mental health depends on casual civic infrastructure until the last local community hall closes its doors. Reclaiming libraries, night markets and plaza seating as public essentials is the surest way to mend the social (31)__________ of our cities.\n<i>(Adapted from Ray Oldenburg, The Great Good Place, and The Atlantic)</i>"
      },
      {
        "origNum": 27,
        "instruction": INS_3,
        "text": "",
        "options": [
          "flee",
          "fray",
          "flout",
          "flaunt"
        ],
        "answer": 1,
        "explanation": "fray = làm sờn, làm rạn nứt/suy yếu (fray social trust/bonds). flout = coi thường (luật); flaunt = khoe khoang."
      },
      {
        "origNum": 28,
        "instruction": INS_3,
        "text": "",
        "options": [
          "Nevertheless",
          "Otherwise",
          "Instead",
          "Indeed"
        ],
        "answer": 3,
        "explanation": "“Indeed” = quả thực là (nhấn mạnh và đưa bằng chứng dịch tễ học củng cố câu trước)."
      },
      {
        "origNum": 29,
        "instruction": INS_3,
        "text": "",
        "options": [
          "segregate",
          "congregate",
          "corrugate",
          "instigate"
        ],
        "answer": 1,
        "explanation": "congregate = tụ họp, gặp gỡ. segregate = tách biệt; instigate = xúi giục."
      },
      {
        "origNum": 30,
        "instruction": INS_3,
        "text": "",
        "options": [
          "municipal planners appreciate",
          "are municipal planners appreciating",
          "municipal planners do appreciate",
          "do municipal planners appreciate"
        ],
        "answer": 3,
        "explanation": "Đảo ngữ sau trạng từ phủ định “Seldom” đứng đầu câu: do municipal planners appreciate..."
      },
      {
        "origNum": 31,
        "instruction": INS_3,
        "text": "",
        "options": [
          "canvas",
          "fabric",
          "velvet",
          "linen"
        ],
        "answer": 1,
        "explanation": "the social fabric = kết cấu/mạng lưới gắn kết xã hội."
      }
    ],
    "6": [
      {
        "origNum": 26,
        "instruction": INS_3,
        "text": "",
        "options": [
          "intermittency",
          "insolvency",
          "incumbency",
          "indifference"
        ],
        "answer": 0,
        "explanation": "intermittency = tính gián đoạn, phụ thuộc thời tiết của điện gió/mặt trời.",
        "passage": "<b>PUMPED-STORAGE HYDROPOWER: WATER AS A GIANT BATTERY</b>\nAs wind turbines and solar panels supply a growing share of global electricity, grid engineers face the technical challenge of managing the natural (26)__________ of weather-dependent power. While lithium-ion battery packs dominate headlines, more than 90 percent of the world’s utility-scale energy storage actually relies on a century-old mechanical workhorse: pumped-storage hydropower. Operating like a reversible hourglass, a pumped-storage plant can (27)__________ gigawatt-hours of surplus midday solar power in the form of elevated water.\nThe engineering principle is elegantly simple: when wholesale electricity is cheap and abundant, reversible turbines pump water from a lower reservoir up through rock tunnels into a mountain lake hundreds of metres above. (28)__________, when evening demand peaks and the wind drops, operators open the floodgates and let gravity spin the same turbines in reverse to feed power back into the grid within seconds. Closed-loop designs built in abandoned quarry pits can (29)__________ the need to dam natural rivers altogether.\nNo sooner (30)__________ below sixty hertz after a power-station trip than pumped-storage units surge into action to prevent a cascading blackout. In an era of volatile renewable generation, these mountain reservoirs remain the unsung (31)__________ of grid stability.\n<i>(Adapted from International Hydropower Association and Nature Energy)</i>"
      },
      {
        "origNum": 27,
        "instruction": INS_3,
        "text": "",
        "options": [
          "balk",
          "bask",
          "bank",
          "bark"
        ],
        "answer": 2,
        "explanation": "bank (v) = tích trữ, dự trữ (năng lượng) để dùng sau. balk at = chùn bước; bask in = đắm mình trong."
      },
      {
        "origNum": 28,
        "instruction": INS_3,
        "text": "",
        "options": [
          "Conversely",
          "Similarly",
          "Regardless",
          "Otherwise"
        ],
        "answer": 0,
        "explanation": "“Conversely” = ngược lại (đối lập giữa lúc thừa điện bơm nước lên và lúc thiếu điện xả nước xuống)."
      },
      {
        "origNum": 29,
        "instruction": INS_3,
        "text": "",
        "options": [
          "oscillate",
          "obligate",
          "obviate",
          "officiate"
        ],
        "answer": 2,
        "explanation": "obviate the need to V = loại bỏ nhu cầu phải làm gì (không cần đắp đập chặn sông tự nhiên nữa)."
      },
      {
        "origNum": 30,
        "instruction": INS_3,
        "text": "",
        "options": [
          "does grid frequency dip",
          "grid frequency dips",
          "grid frequency does dip",
          "is grid frequency dipping"
        ],
        "answer": 0,
        "explanation": "Đảo ngữ với “No sooner + trợ động từ + S + V + than...” (ở thì hiện tại đơn diễn tả quy luật kỹ thuật): No sooner does grid frequency dip... than..."
      },
      {
        "origNum": 31,
        "instruction": INS_3,
        "text": "",
        "options": [
          "trojan horses",
          "dark horses",
          "workhorses",
          "hobby horses"
        ],
        "answer": 2,
        "explanation": "unsung workhorses = những “chiến mã” cống hiến bền bỉ, thầm lặng."
      }
    ],
    "7": [
      {
        "origNum": 26,
        "instruction": INS_3,
        "text": "",
        "options": [
          "procrastination",
          "proliferation",
          "pronunciation",
          "proclamation"
        ],
        "answer": 1,
        "explanation": "proliferation = sự gia tăng/lan tràn nhanh chóng (the proliferation of ultra-processed foods).",
        "passage": "<b>ULTRA-PROCESSED FOODS AND THE MODERN DIET</b>\nOver the past four decades, supermarket shelves across both high- and middle-income countries have been transformed by the rapid (26)__________ of ‘ultra-processed foods’ (UPFs)—industrial formulations made from fractionated starches, hydrogenated oils, flavour enhancers and emulsifiers. According to nutritionists using the NOVA classification system, UPFs now (27)__________ more than half of average daily calorie intake in the United Kingdom and the United States.\nEngineered in food-science laboratories to hit a ‘bliss point’ of salt, sugar and fat while offering a soft texture that requires minimal chewing, these products bypass the gut’s natural satiety signals. (28)__________, controlled inpatient trials by the US National Institutes of Health found that volunteers on an ultra-processed diet consumed roughly 500 more calories per day than those eating whole foods matched for exact nutrients. Synthetic emulsifiers can also (29)__________ the protective mucus layer of the intestinal microbiome, triggering low-grade inflammation.\nScarcely (30)__________ a food-labelling reform more urgently than clear front-of-pack warnings for hyper-palatable industrial snacks. Without fiscal incentives that make fresh vegetables affordable, public-health campaigns against obesity will continue to fight a losing (31)__________.\n<i>(Adapted from The BMJ and Kevin Hall et al., Cell Metabolism)</i>"
      },
      {
        "origNum": 27,
        "instruction": INS_3,
        "text": "",
        "options": [
          "ask for",
          "allow for",
          "answer for",
          "account for"
        ],
        "answer": 3,
        "explanation": "account for + tỉ lệ = chiếm (hơn một nửa lượng calo tiêu thụ hàng ngày)."
      },
      {
        "origNum": 28,
        "instruction": INS_3,
        "text": "",
        "options": [
          "Reluctantly",
          "Tellingly",
          "Randomly",
          "Sparingly"
        ],
        "answer": 1,
        "explanation": "“Tellingly” = đáng chú ý/có ý nghĩa chứng minh rõ rệt là."
      },
      {
        "origNum": 29,
        "instruction": INS_3,
        "text": "",
        "options": [
          "disperse",
          "dispute",
          "dispense",
          "disrupt"
        ],
        "answer": 3,
        "explanation": "disrupt (the protective mucus layer) = phá vỡ, làm rối loạn lớp nhầy bảo vệ đường ruột."
      },
      {
        "origNum": 30,
        "instruction": INS_3,
        "text": "",
        "options": [
          "public health has needed",
          "has public health needed",
          "public health needs",
          "does public health needed"
        ],
        "answer": 1,
        "explanation": "Đảo ngữ sau trạng từ phủ định “Scarcely” đầu câu: has public health needed..."
      },
      {
        "origNum": 31,
        "instruction": INS_3,
        "text": "",
        "options": [
          "brawl",
          "duel",
          "feud",
          "battle"
        ],
        "answer": 3,
        "explanation": "fight a losing battle = chiến đấu một cuộc chiến cầm chắc phần thua/vô vọng."
      }
    ],
    "8": [
      {
        "origNum": 26,
        "instruction": INS_3,
        "text": "",
        "options": [
          "humanisation",
          "hospitalisation",
          "homogenisation",
          "humidification"
        ],
        "answer": 2,
        "explanation": "homogenisation = sự đồng nhất hóa, làm mất bản sắc riêng (the cultural homogenisation of historic quarters).",
        "passage": "<b>OVERTOURISM AND THE SOUL OF HISTORIC CITIES</b>\nFrom Venice’s lagoon islands to Kyoto’s wooden teahouse districts, post-pandemic travel demand has reignited fierce debate over the cultural (26)__________ of historic neighbourhoods turned into open-air theme parks. When millions of short-stay visitors converge on a medieval city centre each summer, commercial landlords quickly realise that holiday lets and souvenir stalls (27)__________ far higher rents than neighbourhood bakeries, cobblers or family apartments.\nThe social consequences follow a predictable spiral: as long-term residents are priced out to peripheral suburbs, schools and clinics close for lack of local children. (28)__________, the very narrow alleys and authentic street life that tourists came to photograph are replaced by identical luggage-locker shops and international chain cafés. Municipal sanitation budgets struggle to (29)__________ with mountains of single-use takeaway packaging left around monuments every evening.\nUnder no circumstances (30)__________ visitor numbers to exceed the carrying capacity of local housing and water infrastructure. Cities such as Amsterdam and Barcelona are now capping cruise-ship berths and phasing out short-term holiday licences so tourism does not kill the (31)__________ that lays the golden egg.\n<i>(Adapted from UN World Tourism Organization Reports and The Guardian)</i>"
      },
      {
        "origNum": 27,
        "instruction": INS_3,
        "text": "",
        "options": [
          "command",
          "commend",
          "comment",
          "commence"
        ],
        "answer": 0,
        "explanation": "command (high rents/prices) = thu được, đòi được mức giá thuê cao. commend = khen ngợi; commence = bắt đầu."
      },
      {
        "origNum": 28,
        "instruction": INS_3,
        "text": "",
        "options": [
          "Alternatively",
          "Fortunately",
          "Ironically",
          "Mercifully"
        ],
        "answer": 2,
        "explanation": "“Ironically” = trớ trêu thay (khách du lịch tìm kiếm nét bản địa nhưng sự quá tải du lịch lại xóa sổ chính nét bản địa đó)."
      },
      {
        "origNum": 29,
        "instruction": INS_3,
        "text": "",
        "options": [
          "keep pace",
          "keep word",
          "keep company",
          "keep track"
        ],
        "answer": 0,
        "explanation": "keep pace with = theo kịp, đáp ứng kịp với."
      },
      {
        "origNum": 30,
        "instruction": INS_3,
        "text": "",
        "options": [
          "do heritage cities allowed",
          "heritage cities should allow",
          "should heritage cities allow",
          "allow heritage cities"
        ],
        "answer": 2,
        "explanation": "Đảo ngữ sau cụm phủ định “Under no circumstances”: should heritage cities allow..."
      },
      {
        "origNum": 31,
        "instruction": INS_3,
        "text": "",
        "options": [
          "goose",
          "swan",
          "duck",
          "hen"
        ],
        "answer": 0,
        "explanation": "kill the goose that lays the golden egg = giết con ngỗng đẻ trứng vàng (hủy hoại nguồn lợi lâu dài vì cái lợi trước mắt)."
      }
    ],
    "9": [
      {
        "origNum": 26,
        "instruction": INS_3,
        "text": "",
        "options": [
          "vulnerability",
          "visibility",
          "volatility",
          "viability"
        ],
        "answer": 3,
        "explanation": "viability = tính khả thi về thương mại và kỹ thuật (the commercial viability of precision fermentation).",
        "passage": "<b>PRECISION FERMENTATION: BREWING PROTEINS WITHOUT LIVESTOCK</b>\nFor forty years, diabetics around the world have injected human insulin produced not by pig pancreases, but by genetically programmed yeast and bacteria inside stainless-steel vats. Today, food biotechnologists are demonstrating the commercial (26)__________ of applying that same ‘precision fermentation’ process to brew milk whey, egg whites and collagen without raising a single farm animal. By inserting the specific DNA sequence for dairy casein into microbes fed on plant sugars, bioreactors can (27)__________ proteins that are molecularly identical to those in cow’s milk.\nThe environmental arithmetic is compelling: livestock grazing and feed-crop cultivation currently occupy nearly 80 percent of all agricultural land on Earth while generating a major share of methane emissions. (28)__________, microbial fermentation inside vertical tanks requires up to 90 percent less land and water per kilogram of protein produced. Because the resulting dairy proteins contain zero lactose, cholesterol or antibiotic residues, food makers can (29)__________ them into cheese and ice cream that melt and stretch just like traditional dairy.\nOnly when renewable electricity and sugar feedstocks become cheap enough to match subsidised commodity milk (30)__________ supermarket shelves at scale. Even so, fermentation-derived ingredients are already poised to shake up the global food system from the ground (31)__________.\n<i>(Adapted from Good Food Institute State of the Industry Report and Nature Food)</i>"
      },
      {
        "origNum": 27,
        "instruction": INS_3,
        "text": "",
        "options": [
          "sympathise",
          "synthesise",
          "synchronise",
          "symbolise"
        ],
        "answer": 1,
        "explanation": "synthesise (proteins/compounds) = tổng hợp nên các protein."
      },
      {
        "origNum": 28,
        "instruction": INS_3,
        "text": "",
        "options": [
          "As a consequence",
          "In other words",
          "For example",
          "By contrast"
        ],
        "answer": 3,
        "explanation": "“By contrast” = trái lại (đối chiếu diện tích đất khổng lồ của chăn nuôi truyền thống với mức tiêu thụ đất cực thấp của lên men vi sinh)."
      },
      {
        "origNum": 29,
        "instruction": INS_3,
        "text": "",
        "options": [
          "incarcerate",
          "incorporate",
          "incinerate",
          "intimidate"
        ],
        "answer": 1,
        "explanation": "incorporate A into B = đưa/kết hợp A vào B (sản phẩm phô mai, kem). incinerate = thiêu hủy; incarcerate = giam cầm."
      },
      {
        "origNum": 30,
        "instruction": INS_3,
        "text": "",
        "options": [
          "reach these proteins",
          "these proteins will reach",
          "do these proteins reached",
          "will these proteins reach"
        ],
        "answer": 3,
        "explanation": "Đảo ngữ ở mệnh đề chính sau “Only when + mệnh đề”: will these proteins reach..."
      },
      {
        "origNum": 31,
        "instruction": INS_3,
        "text": "",
        "options": [
          "down",
          "up",
          "in",
          "out"
        ],
        "answer": 1,
        "explanation": "from the ground up = từ gốc rễ, toàn diện từ nền tảng."
      }
    ],
    "10": [
      {
        "origNum": 26,
        "instruction": INS_3,
        "text": "",
        "options": [
          "fragility",
          "frivolity",
          "fertility",
          "fidelity"
        ],
        "answer": 0,
        "explanation": "fragility = sự mong manh, dễ tổn thương (the fragility of magnetic-tape archives).",
        "passage": "<b>THE ‘DIGITAL DARK AGE’: CAN OUR DATA SURVIVE A CENTURY?</b>\nClay cuneiform tablets baked in Mesopotamian kilns four thousand years ago can still be read in museums today, and medieval vellum manuscripts remain legible after eight centuries. Historians and archivists warn, however, that our twenty-first-century civilisation faces a looming ‘Digital Dark Age’ due to the physical and software (26)__________ of modern storage media. Hard drives demagnetise, optical DVDs suffer from ‘disc rot’, and proprietary file formats can (27)__________ unreadable within a single decade as operating systems evolve.\nThe paradox is that humanity generates more data every forty-eight hours than in all of pre-digital history, yet our recording materials are more ephemeral than acid-free paper. (28)__________, millions of early websites, scientific datasets and family photo albums from the late 1990s have already vanished into broken hyperlinks—a phenomenon librarians call ‘link rot’. To preserve petabytes of climate and genomic records for future centuries, researchers are learning how to (29)__________ binary ones and zeroes into synthetic DNA molecules and laser-etched quartz glass.\nRarely (30)__________ that the most information-rich era in human history could leave the scarcest physical record for future archaeologists. Without open-standard digital libraries and routine format migration, much of our cultural memory could vanish into thin (31)__________.\n<i>(Adapted from IEEE Spectrum and Library of Congress Digital Preservation Briefings)</i>"
      },
      {
        "origNum": 27,
        "instruction": INS_3,
        "text": "",
        "options": [
          "render",
          "deprive",
          "become",
          "compel"
        ],
        "answer": 2,
        "explanation": "become + adj (become unreadable = trở nên không đọc được). render cần tân ngữ (render sth unreadable)."
      },
      {
        "origNum": 28,
        "instruction": INS_3,
        "text": "",
        "options": [
          "Consequently",
          "Conversely",
          "Nevertheless",
          "Instead"
        ],
        "answer": 0,
        "explanation": "“Consequently” = hệ quả là (nêu kết quả thực tế là hàng triệu trang web và dữ liệu thập niên 1990 đã biến mất)."
      },
      {
        "origNum": 29,
        "instruction": INS_3,
        "text": "",
        "options": [
          "encroach",
          "enclose",
          "encode",
          "endorse"
        ],
        "answer": 2,
        "explanation": "encode A into B = mã hóa dữ liệu nhị phân vào phân tử ADN tổng hợp hoặc thủy tinh thạch anh."
      },
      {
        "origNum": 30,
        "instruction": INS_3,
        "text": "",
        "options": [
          "do we pause to consider",
          "we pause to consider",
          "we do pause to consider",
          "are we pausing to consider"
        ],
        "answer": 0,
        "explanation": "Đảo ngữ sau trạng từ phủ định “Rarely” đầu câu: Rarely do we pause to consider..."
      },
      {
        "origNum": 31,
        "instruction": INS_3,
        "text": "",
        "options": [
          "smoke",
          "mist",
          "air",
          "fog"
        ],
        "answer": 2,
        "explanation": "vanish into thin air = biến mất hoàn toàn không để lại dấu vết."
      }
    ]
  },
  "3": {
    "1": [
      {
        "origNum": 32,
        "instruction": INS_4,
        "text": "",
        "options": [
          "convert",
          "divert",
          "invert",
          "revert"
        ],
        "answer": 1,
        "explanation": "divert (waste) from landfill = chuyển hướng, tách rác hữu cơ khỏi bãi chôn lấp.",
        "passage": "<b>COMMUNITY COMPOSTING: TURNING KITCHEN SCRAPS INTO BLACK GOLD</b>\nJoining our neighbourhood composting hub helps (32)__________ tonnes of organic kitchen waste from municipal landfills while enriching local allotment soil. Please follow this simple guide to keep our bins odour-free:\n<b>What to Put In</b>\n• Add (33)__________ such as vegetable peelings, coffee grounds, crushed eggshells and fallen autumn leaves.\n• Balance wet kitchen scraps with dry carbon-rich materials—shredded cardboard or twigs—(34)__________ air can circulate freely through the pile.\n<b>What to Leave Out</b>\n• Never throw cooked meat, dairy products or pet litter into the bay; (35)__________ of these items attract rodents and slow down microbial breakdown.\n• Avoid (36)__________ glossy magazine paper or plastic-coated tea bags, which release synthetic microplastics into the finished compost.\n<b>Harvesting the Compost</b>\n• Turn the heap with a garden fork every fortnight to aerate the core, and within four months you will have dark, crumbly humus ready to (37)__________ across flowerbeds and vegetable patches.\n<i>(Adapted from Royal Horticultural Society Home Composting Guide)</i>"
      },
      {
        "origNum": 33,
        "instruction": INS_4,
        "text": "",
        "options": [
          "fresh plant green trimmings",
          "green fresh plant trimmings",
          "plant fresh green trimmings",
          "fresh green plant trimmings"
        ],
        "answer": 3,
        "explanation": "Trật tự tính từ: condition/age (fresh) – colour (green) – noun adjunct (plant) + trimmings."
      },
      {
        "origNum": 34,
        "instruction": INS_4,
        "text": "",
        "options": [
          "in order to",
          "so that",
          "despite",
          "because of"
        ],
        "answer": 1,
        "explanation": "so that + mệnh đề (S + modal + V) chỉ mục đích. in order to + V; despite / because of + cụm danh từ."
      },
      {
        "origNum": 35,
        "instruction": INS_4,
        "text": "",
        "options": [
          "an amount",
          "much",
          "a little",
          "any"
        ],
        "answer": 3,
        "explanation": "any of these items + V số nhiều. much / a little / an amount of dùng với danh từ không đếm được."
      },
      {
        "origNum": 36,
        "instruction": INS_4,
        "text": "",
        "options": [
          "to add",
          "adding",
          "add",
          "added"
        ],
        "answer": 1,
        "explanation": "avoid + V-ing (avoid adding...)."
      },
      {
        "origNum": 37,
        "instruction": INS_4,
        "text": "",
        "options": [
          "sprawl",
          "sprain",
          "sprout",
          "spread"
        ],
        "answer": 3,
        "explanation": "spread (compost/fertiliser) across... = rải phân trộn lên luống hoa/rau."
      }
    ],
    "2": [
      {
        "origNum": 32,
        "instruction": INS_4,
        "text": "",
        "options": [
          "compensate",
          "commemorate",
          "compromise",
          "complement"
        ],
        "answer": 2,
        "explanation": "compromise (multiple accounts) = xâm nhập, làm lộ an toàn nhiều tài khoản.",
        "passage": "<b>CYBER HYGIENE: PROTECTING YOUR DIGITAL IDENTITY</b>\nA single leaked password can (32)__________ your online banking, cloud storage and work email within minutes. Follow these practical steps from our IT Security Desk to lock down your accounts:\n<b>Upgrade Your Authentication</b>\n• Replace short, reused passwords with a password manager that generates (33)__________ for every website you visit.\n• Enable hardware security keys or authenticator apps (34)__________ relying on SMS text codes, which criminals can intercept through SIM-swapping scams.\n<b>Spot Phishing Traps</b>\n• Be wary of urgent messages claiming your parcel is held up or your bank account is frozen; (35)__________ of the fraudulent links sent by scammers mimic official logos down to the last pixel.\n• Take ten seconds to verify the sender’s actual domain address before (36)__________ any attachment or login button.\n<b>Back Up and Update</b>\n• Turn on automatic operating-system updates so security patches are installed promptly, and keep an encrypted offline backup of vital files to (37)__________ off ransomware extortion.\n<i>(Adapted from National Cyber Security Centre Guidance for Individuals)</i>"
      },
      {
        "origNum": 33,
        "instruction": INS_4,
        "text": "",
        "options": [
          "unique long random passphrases",
          "long random unique passphrases",
          "random long unique passphrases",
          "unique random long passphrases"
        ],
        "answer": 0,
        "explanation": "Trật tự tính từ: opinion/specific quality (unique) – length/size (long) – nature/shape (random) + passphrases."
      },
      {
        "origNum": 34,
        "instruction": INS_4,
        "text": "",
        "options": [
          "on account of",
          "by means of",
          "instead of",
          "in view of"
        ],
        "answer": 2,
        "explanation": "instead of + V-ing = thay vì dựa vào mã SMS."
      },
      {
        "origNum": 35,
        "instruction": INS_4,
        "text": "",
        "options": [
          "many",
          "much",
          "a great deal",
          "a little"
        ],
        "answer": 0,
        "explanation": "many of + the + N số nhiều (links). much / a great deal / a little dùng cho danh từ không đếm được."
      },
      {
        "origNum": 36,
        "instruction": INS_4,
        "text": "",
        "options": [
          "to click",
          "click",
          "clicking",
          "clicked"
        ],
        "answer": 2,
        "explanation": "Giới từ before + V-ing (before clicking...)."
      },
      {
        "origNum": 37,
        "instruction": INS_4,
        "text": "",
        "options": [
          "fend",
          "mend",
          "lend",
          "bend"
        ],
        "answer": 0,
        "explanation": "fend off = chống trả, đẩy lùi (mối đe dọa tống tiền mã hóa dữ liệu)."
      }
    ],
    "3": [
      {
        "origNum": 32,
        "instruction": INS_4,
        "text": "",
        "options": [
          "emulate",
          "evaporate",
          "emancipate",
          "escalate"
        ],
        "answer": 3,
        "explanation": "escalate into... = leo thang, biến chuyển xấu thành tình trạng nguy kịch.",
        "passage": "<b>HEATWAVE FIRST AID: RECOGNISING AND TREATING HEAT ILLNESS</b>\nDuring extreme summer heatwaves, mild dehydration can rapidly (32)__________ into life-threatening heatstroke if warning signs are ignored. Keep this community health leaflet on hand to protect vulnerable neighbours:\n<b>Know the Warning Signs</b>\n• Watch for heavy sweating, dizziness and muscle cramps—early indicators of heat exhaustion—versus hot, dry skin and confusion, (33)__________ signal a medical emergency.\n• Move the affected person immediately out of direct sunlight into a cool, shaded room and loosen any (34)__________.\n<b>Cool the Body Safely</b>\n• Apply cool, damp cloths to the neck, armpits and wrists; (35)__________ of the body’s major superficial blood vessels pass close to the skin in these areas.\n• If the person is fully conscious, encourage them to sip cool water or an electrolyte solution rather than (36)__________ sugary fizzy drinks or alcohol.\n<b>Check on Vulnerable Residents</b>\n• Elderly neighbours living on top floors and outdoor workers face the highest risk; a quick five-minute phone call each afternoon can (37)__________ a preventable tragedy.\n<i>(Adapted from World Health Organization and Red Cross Heatwave Preparedness Guidelines)</i>"
      },
      {
        "origNum": 33,
        "instruction": INS_4,
        "text": "",
        "options": [
          "what",
          "which",
          "where",
          "whose"
        ],
        "answer": 1,
        "explanation": "Đại từ quan hệ “which” sau dấu phẩy thay cho cụm danh từ “hot, dry skin and confusion” và làm chủ ngữ của động từ “signal”."
      },
      {
        "origNum": 34,
        "instruction": INS_4,
        "text": "",
        "options": [
          "tight synthetic heavy clothing",
          "synthetic tight heavy clothing",
          "heavy synthetic tight clothing",
          "tight heavy synthetic clothing"
        ],
        "answer": 3,
        "explanation": "Trật tự tính từ: size/fit (tight) – weight (heavy) – material (synthetic) + clothing."
      },
      {
        "origNum": 35,
        "instruction": INS_4,
        "text": "",
        "options": [
          "much",
          "several",
          "a great deal",
          "a little"
        ],
        "answer": 1,
        "explanation": "several of + the + N số nhiều (blood vessels).",
        "passage": ""
      },
      {
        "origNum": 36,
        "instruction": INS_4,
        "text": "",
        "options": [
          "consumes",
          "to consume",
          "consumed",
          "consuming"
        ],
        "answer": 3,
        "explanation": "rather than + V-ing / V nguyên thể (ở đây không có đáp án V nguyên thể nên chọn consuming)."
      },
      {
        "origNum": 37,
        "instruction": INS_4,
        "text": "",
        "options": [
          "assert",
          "avert",
          "advert",
          "convert"
        ],
        "answer": 1,
        "explanation": "avert a tragedy = ngăn chặn một bi kịch."
      }
    ],
    "4": [
      {
        "origNum": 32,
        "instruction": INS_4,
        "text": "",
        "options": [
          "revive",
          "revoke",
          "revolve",
          "revolt"
        ],
        "answer": 0,
        "explanation": "revive = hồi sinh, khôi phục lại đồ dùng bị hỏng.",
        "passage": "<b>NEIGHBOURHOOD REPAIR CAFÉ: FIX IT TOGETHER!</b>\nWhy toss a wobbly chair or a silent toaster into the skip when you can (32)__________ it with the help of a friendly local technician? Bring your broken household items to our monthly Repair Café at the Civic Hall:\n<b>How the Session Works</b>\n• Volunteers skilled in electrical soldering, woodwork and sewing sit at workbench stations to diagnose faults alongside you, free (33)__________ charge.\n• (34)__________ our goal of passing practical skills between generations, we ask visitors to stay and take part in the repair rather than dropping items off like a commercial laundry.\n<b>Preparing for Your Visit</b>\n• Please bring one item per visit, along with any (35)__________—such as power adapters, coffee-maker carafes or spare buttons—needed to test it.\n• Over the past year, (36)__________ of the lamps, vacuum cleaners and winter coats brought to our tables have gone home in full working order.\n<b>Safety and Spare Parts</b>\n• For safety reasons, we cannot work on microwaves or high-voltage heaters, and we recommend (37)__________ specific replacement parts in advance if you already know which component has failed.\n<i>(Adapted from Repair Café International Foundation Starter Manual)</i>"
      },
      {
        "origNum": 33,
        "instruction": INS_4,
        "text": "",
        "options": [
          "with",
          "from",
          "of",
          "at"
        ],
        "answer": 2,
        "explanation": "free of charge = hoàn toàn miễn phí."
      },
      {
        "origNum": 34,
        "instruction": INS_4,
        "text": "",
        "options": [
          "In line with",
          "In spite of",
          "In place of",
          "In contrast to"
        ],
        "answer": 0,
        "explanation": "In line with + N = phù hợp với, nhất quán với mục tiêu của chúng tôi."
      },
      {
        "origNum": 35,
        "instruction": INS_4,
        "text": "",
        "options": [
          "original plastic essential accessories",
          "plastic original essential accessories",
          "essential original plastic accessories",
          "essential plastic original accessories"
        ],
        "answer": 2,
        "explanation": "Trật tự tính từ: opinion/importance (essential) – age/origin (original) – material (plastic) + accessories."
      },
      {
        "origNum": 36,
        "instruction": INS_4,
        "text": "",
        "options": [
          "two-thirds",
          "much",
          "a great deal",
          "a little"
        ],
        "answer": 0,
        "explanation": "two-thirds of + the + N số nhiều + V số nhiều."
      },
      {
        "origNum": 37,
        "instruction": INS_4,
        "text": "",
        "options": [
          "order",
          "to order",
          "ordering",
          "ordered"
        ],
        "answer": 2,
        "explanation": "recommend + V-ing (recommend ordering...)."
      }
    ],
    "5": [
      {
        "origNum": 32,
        "instruction": INS_4,
        "text": "",
        "options": [
          "sabotage",
          "safeguard",
          "sanction",
          "saturate"
        ],
        "answer": 1,
        "explanation": "safeguard = bảo vệ (các loài bản địa và hệ sinh thái công viên).",
        "passage": "<b>RESPONSIBLE ECOTOURISM: LEAVE ONLY FOOTPRINTS</b>\nVisiting our national biosphere reserve offers a rare glimpse of cloud-forest wildlife, and your mindful behaviour helps (32)__________ fragile habitats for future generations. Please observe our code of conduct on the trails:\n<b>Stay on Marked Paths</b>\n• Keep strictly to timber boardwalks and blazed trails, (33)__________ prevents trampling rare ground orchids and stops fungal spores on boots from spreading into undisturbed soil.\n• (34)__________ the sensitive nesting season between March and June, certain cliffside viewpoints are temporarily closed to hikers.\n<b>Respect Wildlife Distance</b>\n• Observe hornbills, langurs and turtles from at least twenty metres away using (35)__________ rather than approaching for close-up smartphone selfies.\n• Never feed wild primates; (36)__________ of the macaques that become habituated to human snacks lose their natural foraging skills and become aggressive toward visitors.\n<b>Support Local Communities</b>\n• Carry all litter—including biodegradable fruit peels—back out of the valley, and consider (37)__________ certified village guides whose fees directly fund anti-poaching patrols.\n<i>(Adapted from IUCN Guidelines for Sustainable Tourism in Protected Areas)</i>"
      },
      {
        "origNum": 33,
        "instruction": INS_4,
        "text": "",
        "options": [
          "whom",
          "that",
          "where",
          "which"
        ],
        "answer": 3,
        "explanation": "Đại từ quan hệ “which” sau dấu phẩy thay cho cả mệnh đề phía trước (việc đi đúng trên đường mòn được đánh dấu)."
      },
      {
        "origNum": 34,
        "instruction": INS_4,
        "text": "",
        "options": [
          "In spite of",
          "On account of",
          "Regardless of",
          "By means of"
        ],
        "answer": 1,
        "explanation": "On account of + N = vì, do (mùa làm tổ nhạy cảm từ tháng 3 đến tháng 6)."
      },
      {
        "origNum": 35,
        "instruction": INS_4,
        "text": "",
        "options": [
          "lightweight field optical binoculars",
          "optical lightweight field binoculars",
          "field lightweight optical binoculars",
          "lightweight optical field binoculars"
        ],
        "answer": 3,
        "explanation": "Trật tự tính từ: weight/quality (lightweight) – type/mechanism (optical) – noun adjunct/purpose (field) + binoculars."
      },
      {
        "origNum": 36,
        "instruction": INS_4,
        "text": "",
        "options": [
          "much",
          "most",
          "a great deal",
          "an amount"
        ],
        "answer": 1,
        "explanation": "most of + the + N số nhiều (macaques) + V số nhiều."
      },
      {
        "origNum": 37,
        "instruction": INS_4,
        "text": "",
        "options": [
          "hired",
          "to hire",
          "hire",
          "hiring"
        ],
        "answer": 3,
        "explanation": "consider + V-ing (consider hiring...)."
      }
    ],
    "6": [
      {
        "origNum": 32,
        "instruction": INS_4,
        "text": "",
        "options": [
          "stash",
          "splash",
          "slash",
          "smash"
        ],
        "answer": 2,
        "explanation": "slash (your household grocery bill) = cắt giảm mạnh hóa đơn tiền chợ và lượng rác thực phẩm.",
        "passage": "<b>SMART FOOD STORAGE: CUTTING HOUSEHOLD KITCHEN WASTE</b>\nNearly a third of all food bought by households ends up in the bin, yet a few simple storage habits can (32)__________ both your weekly grocery bill and your carbon footprint. Use this kitchen reference guide to keep produce fresh for longer:\n<b>Understand Date Labels</b>\n• Learn the difference between ‘use by’—which applies to perishable meat and fish for safety—and ‘best before’, (33)__________ merely indicates peak texture and flavour.\n• (34)__________ throwing away slightly soft tomatoes, carrots or herbs past their ‘best before’ date, simmer them into soups, pasta sauces or stock.\n<b>Organise Your Fridge Zones</b>\n• Keep your refrigerator between 1°C and 4°C, and store leftovers in (35)__________ on the middle shelf where you can see them at a glance.\n• Keep potatoes, onions and whole bananas in a cool, dark cupboard rather than the fridge; (36)__________ of these items spoil faster or turn starchy when chilled.\n<b>Make the Freezer Your Friend</b>\n• Slice loaves of bread before (37)__________ them so you can toast individual slices on demand, and label frozen portions with the date so nothing is forgotten at the back of the drawer.\n<i>(Adapted from WRAP ‘Love Food Hate Waste’ Household Guide)</i>"
      },
      {
        "origNum": 33,
        "instruction": INS_4,
        "text": "",
        "options": [
          "which",
          "what",
          "where",
          "whose"
        ],
        "answer": 0,
        "explanation": "Đại từ quan hệ “which” sau dấu phẩy bổ nghĩa cho nhãn ‘best before’."
      },
      {
        "origNum": 34,
        "instruction": INS_4,
        "text": "",
        "options": [
          "In addition to",
          "Because of",
          "Rather than",
          "By way of"
        ],
        "answer": 2,
        "explanation": "Rather than + V-ing = Thay vì vứt bỏ cà chua/cà rốt hơi mềm..."
      },
      {
        "origNum": 35,
        "instruction": INS_4,
        "text": "",
        "options": [
          "clear stackable glass containers",
          "glass clear stackable containers",
          "stackable glass clear containers",
          "clear glass stackable containers"
        ],
        "answer": 0,
        "explanation": "Trật tự tính từ: appearance (clear) – function/shape (stackable) – material (glass) + containers."
      },
      {
        "origNum": 36,
        "instruction": INS_4,
        "text": "",
        "options": [
          "a little",
          "much",
          "all",
          "an amount"
        ],
        "answer": 2,
        "explanation": "all of these items + V số nhiều (spoil)."
      },
      {
        "origNum": 37,
        "instruction": INS_4,
        "text": "",
        "options": [
          "freezing",
          "to freeze",
          "freeze",
          "frozen"
        ],
        "answer": 0,
        "explanation": "Giới từ before + V-ing (before freezing them)."
      }
    ],
    "7": [
      {
        "origNum": 32,
        "instruction": INS_4,
        "text": "",
        "options": [
          "flutter",
          "falter",
          "flatter",
          "foster"
        ],
        "answer": 3,
        "explanation": "foster (concentration and physical comfort) = thúc đẩy, nuôi dưỡng sự tập trung và sức khỏe thể chất.",
        "passage": "<b>DIGITAL DETOX AND WORKSPACE ERGONOMICS</b>\nSpending eight hours a day hunched over a glowing laptop screen can strain your spine, eyes and sleep cycle. Small adjustments to your desk setup and evening routine can (32)__________ sustained focus and physical comfort:\n<b>Set Up an Ergonomic Desk</b>\n• Position the top of your monitor at eye level about an arm’s length away, and sit in (33)__________ that supports the natural curve of your lower back.\n• Follow the ‘20-20-20 rule’: every twenty minutes, look at an object twenty feet away for twenty seconds (34)__________ your eye muscles can relax.\n<b>Tame Notification Overload</b>\n• Batch-check email three times a day rather than leaving alerts pinging constantly; (35)__________ of the interruptions that fragment our working morning are non-urgent messages.\n• Try (36)__________ your phone in another room during deep-study blocks to eliminate the temptation of ‘doomscrolling’.\n<b>Protect Your Evening Wind-Down</b>\n• Dim household lights and switch off backlit screens at least an hour before bed to allow natural melatonin levels to (37)__________ for restorative sleep.\n<i>(Adapted from Chartered Institute of Ergonomics and Human Factors Home-Working Guide)</i>"
      },
      {
        "origNum": 33,
        "instruction": INS_4,
        "text": "",
        "options": [
          "an office adjustable ergonomic chair",
          "an adjustable ergonomic office chair",
          "an ergonomic office adjustable chair",
          "a chair adjustable ergonomic office"
        ],
        "answer": 1,
        "explanation": "Trật tự tính từ: quality/capability (adjustable) – design purpose (ergonomic) – noun adjunct (office) + chair."
      },
      {
        "origNum": 34,
        "instruction": INS_4,
        "text": "",
        "options": [
          "in spite of",
          "in order to",
          "because of",
          "so that"
        ],
        "answer": 3,
        "explanation": "so that + mệnh đề (your eye muscles can relax)."
      },
      {
        "origNum": 35,
        "instruction": INS_4,
        "text": "",
        "options": [
          "a great deal",
          "the vast majority",
          "much",
          "a little"
        ],
        "answer": 1,
        "explanation": "the vast majority of + the + N số nhiều (interruptions) + V số nhiều (are)."
      },
      {
        "origNum": 36,
        "instruction": INS_4,
        "text": "",
        "options": [
          "placed",
          "to place",
          "place",
          "placing"
        ],
        "answer": 3,
        "explanation": "try + V-ing = thử làm gì (thử để điện thoại ở phòng khác xem hiệu quả tập trung ra sao)."
      },
      {
        "origNum": 37,
        "instruction": INS_4,
        "text": "",
        "options": [
          "recede",
          "rebound",
          "relapse",
          "refute"
        ],
        "answer": 1,
        "explanation": "rebound / rise = phục hồi, tăng trở lại (nồng độ melatonin tự nhiên vào buổi tối)."
      }
    ],
    "8": [
      {
        "origNum": 32,
        "instruction": INS_4,
        "text": "",
        "options": [
          "transform",
          "transgress",
          "transcend",
          "transcribe"
        ],
        "answer": 0,
        "explanation": "transform A into B = biến đổi bãi cỏ đơn điệu thành ốc đảo giàu mật hoa.",
        "passage": "<b>POLLINATOR-FRIENDLY GARDENING: PLANTING FOR BEES AND BUTTERFLIES</b>\nEven a small urban balcony or suburban back garden can (32)__________ a sterile patch of lawn into a vital refuelling stop for wild bees, hoverflies and butterflies. Here is how to make your green space buzz with life:\n<b>Choose Nectar-Rich Native Plants</b>\n• Plant (33)__________ such as lavender, marjoram, foxgloves and native clovers that bloom in succession from March right through to October.\n• Avoid ‘double-flowered’ ornamental hybrids, (34)__________ extra petals block insects from reaching the pollen and nectar inside.\n<b>Put Down the Sprayer</b>\n• Stop using synthetic garden insecticides and weedkillers; (35)__________ of the ‘bug-free’ sprays sold in garden centres coat pollen grains in neurotoxins that harm foraging bees.\n• (36)__________ mowing your entire lawn every weekend, leave a sunny corner of long grass and dandelions uncut during May.\n<b>Provide Shelter and Water</b>\n• Drill small holes into an untreated hardwood block to create a ‘bee hotel’ for solitary mason bees, and remember (37)__________ a shallow dish of water filled with pebbles so thirsty insects can land safely.\n<i>(Adapted from Bumblebee Conservation Trust and Royal Entomological Society Guides)</i>"
      },
      {
        "origNum": 33,
        "instruction": INS_4,
        "text": "",
        "options": [
          "herbs hardy open-flowered perennial",
          "perennial hardy open-flowered herbs",
          "hardy open-flowered perennial herbs",
          "open-flowered herbs hardy perennial"
        ],
        "answer": 2,
        "explanation": "Trật tự tính từ: quality (hardy) – shape/structure (open-flowered) – botanical classification (perennial) + herbs."
      },
      {
        "origNum": 34,
        "instruction": INS_4,
        "text": "",
        "options": [
          "whose",
          "which",
          "where",
          "whom"
        ],
        "answer": 0,
        "explanation": "Đại từ quan hệ sở hữu “whose” + N (extra petals): các giống hoa kép mà những cánh hoa thừa của chúng chặn côn trùng."
      },
      {
        "origNum": 35,
        "instruction": INS_4,
        "text": "",
        "options": [
          "a little",
          "much",
          "many",
          "an amount"
        ],
        "answer": 2,
        "explanation": "many of + the + N số nhiều (sprays)."
      },
      {
        "origNum": 36,
        "instruction": INS_4,
        "text": "",
        "options": [
          "Instead of",
          "Because of",
          "By means of",
          "In view of"
        ],
        "answer": 0,
        "explanation": "Instead of + V-ing = Thay vì cắt toàn bộ bãi cỏ mỗi cuối tuần..."
      },
      {
        "origNum": 37,
        "instruction": INS_4,
        "text": "",
        "options": [
          "leave",
          "leaving",
          "to leave",
          "left"
        ],
        "answer": 2,
        "explanation": "remember + to V = nhớ phải làm gì (nhiệm vụ, lời dặn)."
      }
    ],
    "9": [
      {
        "origNum": 32,
        "instruction": INS_4,
        "text": "",
        "options": [
          "withhold",
          "withstand",
          "withdraw",
          "withal"
        ],
        "answer": 1,
        "explanation": "withstand (flash floods and power outages) = chống chọi, vượt qua an toàn.",
        "passage": "<b>HOUSEHOLD FLOOD AND TYPHOON PREPAREDNESS</b>\nWith autumn typhoons bringing heavier coastal downpours, preparing your household in advance can help your family (32)__________ flash floods and power outages safely. Review this checklist from the Provincial Civil Defence Committee before the storm season peaks:\n<b>Prepare an Emergency ‘Grab Bag’</b>\n• Pack a waterproof rucksack with three days of drinking water, non-perishable food, a first-aid kit, a whistle and a (33)__________.\n• Store birth certificates, property deeds and insurance policies in sealed zip-lock pouches, (34)__________ keep encrypted digital copies on a cloud drive.\n<b>Secure Your Property</b>\n• Clear fallen leaves from roof gutters and street drains, and move toxic garden chemicals onto high shelves (35)__________ floodwater enters the ground floor.\n• (36)__________ of the electrical injuries reported after storms occur when residents wade into flooded rooms before switching off the main circuit breaker.\n<b>During the Warning</b>\n• Never attempt to drive or walk across a flooded causeway—just thirty centimetres of fast-flowing water can sweep a car away—and stay tuned to official radio bulletins before (37)__________ home.\n<i>(Adapted from Red Cross Disaster Preparedness Handbook)</i>"
      },
      {
        "origNum": 33,
        "instruction": INS_4,
        "text": "",
        "options": [
          "portable weather hand-cranked radio",
          "weather portable hand-cranked radio",
          "hand-cranked weather portable radio",
          "portable hand-cranked weather radio"
        ],
        "answer": 3,
        "explanation": "Trật tự tính từ: quality (portable) – mechanism/participle (hand-cranked) – noun adjunct/purpose (weather) + radio."
      },
      {
        "origNum": 34,
        "instruction": INS_4,
        "text": "",
        "options": [
          "but",
          "and",
          "or",
          "for"
        ],
        "answer": 1,
        "explanation": "Liên từ “and” nối hai hành động song song bổ trợ nhau (cất bản giấy trong túi chống nước và lưu bản số trên đám mây)."
      },
      {
        "origNum": 35,
        "instruction": INS_4,
        "text": "",
        "options": [
          "unless",
          "so that",
          "despite",
          "in case"
        ],
        "answer": 3,
        "explanation": "in case + mệnh đề = phòng khi nước lũ tràn vào tầng trệt."
      },
      {
        "origNum": 36,
        "instruction": INS_4,
        "text": "",
        "options": [
          "much",
          "most",
          "a great deal",
          "a little"
        ],
        "answer": 1,
        "explanation": "most of + the + N số nhiều (electrical injuries)."
      },
      {
        "origNum": 37,
        "instruction": INS_4,
        "text": "",
        "options": [
          "returned",
          "to return",
          "return",
          "returning"
        ],
        "answer": 3,
        "explanation": "Giới từ before + V-ing (before returning home)."
      }
    ],
    "10": [
      {
        "origNum": 32,
        "instruction": INS_4,
        "text": "",
        "options": [
          "offend",
          "expend",
          "extend",
          "upend"
        ],
        "answer": 2,
        "explanation": "extend the lifespan of garments = kéo dài vòng đời của quần áo.",
        "passage": "<b>MINDFUL WARDROBE: STEPPING OFF THE FAST-FASHION TREADMILL</b>\nThe global fashion industry produces over 100 billion garments a year, yet the average item is worn fewer than ten times before being discarded. Adopting a ‘slow wardrobe’ mindset can (32)__________ the active life of your clothes while saving money:\n<b>Apply the ‘Thirty-Wear’ Test</b>\n• Before buying a discounted garment on impulse, ask yourself whether you will wear it at least thirty times, and check the seam stitching on (33)__________.\n• (34)__________ synthetic polyester blends that shed microfibres and trap odours, choose mono-material natural fibres—such as organic cotton, linen or wool—that breathe well and can be recycled.\n<b>Care and Mend</b>\n• Wash clothes at 30°C on a gentle spin and line-dry them outdoors; (35)__________ of the fabric shrinkage and colour fading blamed on ‘poor cloth’ is actually caused by over-using hot tumble dryers.\n• Learn basic needlework so you can reattach loose buttons or darn a small snag instead of (36)__________ the whole jumper.\n<b>Swap, Rent and Donate</b>\n• Use community clothes-swapping days or rental platforms for formal occasion wear, and pass unwanted coats to charity shops to keep textiles in (37)__________.\n<i>(Adapted from Oxfam ‘Second Hand September’ Campaign and Ellen MacArthur Foundation)</i>"
      },
      {
        "origNum": 33,
        "instruction": INS_4,
        "text": "",
        "options": [
          "durable classic tailored jackets",
          "tailored durable classic jackets",
          "classic jackets durable tailored",
          "durable tailored classic jackets"
        ],
        "answer": 0,
        "explanation": "Trật tự tính từ: quality (durable) – style/age (classic) – participle/cut (tailored) + jackets."
      },
      {
        "origNum": 34,
        "instruction": INS_4,
        "text": "",
        "options": [
          "On behalf of",
          "In accordance with",
          "In preference to",
          "By virtue of"
        ],
        "answer": 2,
        "explanation": "In preference to + N = ưu tiên chọn cái gì hơn là (chọn sợi tự nhiên thay vì vải pha polyester tổng hợp)."
      },
      {
        "origNum": 35,
        "instruction": INS_4,
        "text": "",
        "options": [
          "much",
          "many",
          "several",
          "a few"
        ],
        "answer": 0,
        "explanation": "much of + the + danh từ không đếm được (fabric shrinkage and colour fading) + V số ít (is)."
      },
      {
        "origNum": 36,
        "instruction": INS_4,
        "text": "",
        "options": [
          "discard",
          "to discard",
          "discarding",
          "discarded"
        ],
        "answer": 2,
        "explanation": "instead of + V-ing (instead of discarding...)."
      },
      {
        "origNum": 37,
        "instruction": INS_4,
        "text": "",
        "options": [
          "circulation",
          "circumstance",
          "circumference",
          "Segregation"
        ],
        "answer": 0,
        "explanation": "keep textiles in circulation = giữ cho hàng dệt may tiếp tục được lưu thông/sử dụng trong nền kinh tế tuần hoàn."
      }
    ]
  },
  "4": {
    "1": [
      {
        "origNum": 38,
        "instruction": INS_5,
        "text": "",
        "options": [
          "most of them were small, with no more than 25 employees",
          "most of which small, with no more than 25 employees",
          "most of which were small, with no more than 25 employees",
          "most of that were small, with no more than 25 staff"
        ],
        "answer": 2,
        "explanation": "Mệnh đề quan hệ có lượng từ: “most of which were small”. A: lỗi dấu phẩy; B: thiếu động từ; D: “that” sai sau “most of”.",
        "passage": "<b>THE UK'S FOUR-DAY WEEK PILOT</b>\nFor decades, the five-day week was treated as a law of nature. In 2022, however, the United Kingdom staged the world’s largest trial of an alternative: 61 companies, (38)__________, moved around 2,900 employees to a four-day schedule without cutting their pay. Over the six months that followed, participants kept a close eye on both performance and wellbeing.\nThe findings were striking. In surveys, employees reported lower burnout, reduced stress, (39)__________. Some 71% said they felt less burned out and 39% less stressed, while 15% declared that no amount of money would persuade them to return to a five-day week. Companies, too, had little to fear: revenue held steady, rising by an average of 1.4% across the trial. (40)__________. Of the 61 firms, 56 chose to continue afterwards, and 18 made the change permanent.\nNot every workplace can adapt so easily, of course. Hospitals and shops, (41)__________, cannot simply close for a day. Each company in the trial was free to design its own version of the shorter week. Nevertheless, the experiment has changed the terms of the debate. Ultimately, it shows that (42)__________.\n<i>(Adapted from Autonomy, The results are in: the UK’s four-day week pilot (2023))</i>"
      },
      {
        "origNum": 39,
        "instruction": INS_5,
        "text": "",
        "options": [
          "whereas their work-life balance is improved a lot",
          "and a better balance between work and private life",
          "but a balance of their work and private life was better",
          "however, they balanced work and private life more better"
        ],
        "answer": 1,
        "explanation": "Liệt kê song song danh từ: “lower burnout, reduced stress, and a better balance…”."
      },
      {
        "origNum": 40,
        "instruction": INS_5,
        "text": "",
        "options": [
          "In short, working fewer hours did not necessarily mean achieving less",
          "By contrast, working fewer hours always meant that companies achieved less",
          "Even so, achieving less meant that fewer hours were being worked",
          "In addition, to achieve less is to work for fewer hours than before"
        ],
        "answer": 0,
        "explanation": "Câu kết luận hợp lý sau dữ kiện doanh thu giữ vững: làm ít giờ hơn không đồng nghĩa với làm được ít hơn."
      },
      {
        "origNum": 41,
        "instruction": INS_5,
        "text": "",
        "options": [
          "which must be staffed all the time through",
          "that must staff them at all times",
          "whom services must be continuous",
          "where services must be available around the clock"
        ],
        "answer": 3,
        "explanation": "“Hospitals and shops, where services must be available around the clock” – mệnh đề quan hệ chỉ nơi chốn, đúng nghĩa."
      },
      {
        "origNum": 42,
        "instruction": INS_5,
        "text": "",
        "options": [
          "neither productivity nor wellbeing is a goal that should be pursued unless fewer hours are worked",
          "productivity depends upon the hours worked, whereas wellbeing is not dependent on it",
          "productivity and wellbeing need not be traded off against each other",
          "not only productivity but also wellbeing are what longer hours should increase"
        ],
        "answer": 2,
        "explanation": "Kết luận khớp ý bài: năng suất và sức khỏe tinh thần không cần đánh đổi nhau; cấu trúc “need not be + V3”."
      }
    ],
    "2": [
      {
        "origNum": 38,
        "instruction": INS_5,
        "text": "",
        "options": [
          "all of them operated without physical toll booths",
          "all of which operated without physical toll booths",
          "all of which operating without physical toll booths",
          "all of that operated without physical toll booths"
        ],
        "answer": 1,
        "explanation": "Mệnh đề quan hệ có lượng từ: “all of which operated without physical toll booths”.",
        "passage": "<b>CONGESTION PRICING IN STOCKHOLM</b>\nFor years, urban economists argued that charging motorists to enter city centres was politically impossible. In 2006, however, the Swedish capital staged a bold seven-month trial: a cordon of automated cameras, (38)__________, levied a small fee on vehicles crossing into central Stockholm during peak hours. Throughout the experiment, transport researchers tracked traffic volume, air quality and public opinion.\nThe transformation was immediate. Traffic across the cordon fell by more than 20 percent, journey times became far more predictable, (39)__________. Nitrogen dioxide emissions in the inner city dropped by 14 percent, while bus ridership rose sharply without causing overcrowding. Retailers inside the toll zone, too, saw no drop in sales compared with suburban shopping centres. (40)__________. When a referendum was held at the end of the trial, a majority of Stockholm residents voted to make the congestion charge permanent.\nNot every metropolis can replicate the model overnight, of course. Sprawling cities, (41)__________, must first invest in reliable buses and commuter rail before taxing drivers. Each municipality has to calibrate toll rates to local income levels. Even so, Stockholm’s experience has reshaped transport policy worldwide. Above all, it demonstrates that (42)__________.\n<i>(Adapted from Jonas Eliasson, The Stockholm Congestion Charges: An Overview, Centre for Transport Studies)</i>"
      },
      {
        "origNum": 39,
        "instruction": INS_5,
        "text": "",
        "options": [
          "and asthma-related hospital visits among children declined noticeably",
          "whereas hospital visits for childhood asthma are declining a lot",
          "but a decline in asthma-related hospital visits was noticeable",
          "however, fewer children visited hospitals for asthma than before"
        ],
        "answer": 0,
        "explanation": "Cấu trúc liệt kê song song: “Traffic… fell…, journey times became…, and asthma-related hospital visits… declined…”."
      },
      {
        "origNum": 40,
        "instruction": INS_5,
        "text": "",
        "options": [
          "In short, curbing car traffic did not come at the expense of commercial vitality",
          "By contrast, curbing car traffic always ruined inner-city commercial vitality",
          "Even so, commercial vitality meant that more cars were entering the city",
          "Furthermore, to lose commercial vitality is to curb inner-city car traffic"
        ],
        "answer": 0,
        "explanation": "Câu tóm tắt hợp lý sau dữ kiện doanh số bán lẻ không giảm: hạn chế xe cá nhân không làm tổn hại sức sống thương mại."
      },
      {
        "origNum": 41,
        "instruction": INS_5,
        "text": "",
        "options": [
          "which public transit networks remain patchy and underfunded",
          "that commuters have no alternative to private cars",
          "where public transit alternatives remain patchy and underfunded",
          "whom residents depend entirely on private automobiles"
        ],
        "answer": 2,
        "explanation": "Mệnh đề quan hệ chỉ nơi chốn bổ nghĩa cho “Sprawling cities”: “where public transit alternatives remain…”."
      },
      {
        "origNum": 42,
        "instruction": INS_5,
        "text": "",
        "options": [
          "environmental sustainability and urban mobility need not be pitted against each other",
          "neither mobility nor clean air should be pursued unless tolls are abolished",
          "urban mobility depends on road tolls, whereas air quality is unrelated to them",
          "not only traffic congestion but also air pollution are what higher tolls increase"
        ],
        "answer": 0,
        "explanation": "Kết luận chuẩn xác: sự bền vững môi trường và khả năng di chuyển đô thị không cần phải đối đầu/đánh đổi nhau (“need not be pitted against each other”)."
      }
    ],
    "3": [
      {
        "origNum": 38,
        "instruction": INS_5,
        "text": "",
        "options": [
          "many of them have now been planted with shade trees",
          "many of which have now been planted with shade trees",
          "many of which now planted with shade trees",
          "many of that have now been planted with shade trees"
        ],
        "answer": 1,
        "explanation": "Mệnh đề quan hệ có lượng từ: “many of which have now been planted...”.",
        "passage": "<b>PARIS’S ‘SCHOOL STREETS’ INITIATIVE</b>\nFor generations, morning drop-off outside urban primary schools meant a chaotic queue of idling engines and honking horns. Since 2020, however, the French capital has transformed over 200 streets outside nurseries and primary schools, (38)__________, into pedestrian zones closed to motor traffic. Throughout the rollout, municipal engineers monitored air quality, traffic displacement and active-travel rates.\nThe benefits materialised rapidly. Parents and teachers reported calmer school gates, safer crossings for young children, (39)__________. Roadside nitrogen dioxide concentrations outside participating schools fell by up to 30 percent at drop-off time, while the proportion of pupils walking or scooting to class rose significantly. Adjacent boulevards, too, experienced no severe gridlock as short car trips evaporated. (40)__________. Surveyed a year later, more than 80 percent of local residents supported keeping the barriers in place permanently.\nNot every street can be closed with a simple bollard, of course. Arterial avenues, (41)__________, require redesigned junctions and dedicated loading bays instead. Each borough has had to consult disabled residents to preserve doorstep access. Even so, the Parisian programme has inspired cities across Europe. Above all, it proves that (42)__________.\n<i>(Adapted from Ville de Paris & Clean Cities Campaign Report on Rues aux Écoles)</i>"
      },
      {
        "origNum": 39,
        "instruction": INS_5,
        "text": "",
        "options": [
          "whereas morning exhaust fumes are reduced a lot",
          "and a marked reduction in morning exhaust fumes",
          "but a reduction in morning exhaust fumes was marked",
          "however, morning exhaust fumes were reduced more"
        ],
        "answer": 1,
        "explanation": "Cấu trúc song song danh từ: “calmer school gates, safer crossings..., and a marked reduction...”."
      },
      {
        "origNum": 40,
        "instruction": INS_5,
        "text": "",
        "options": [
          "By contrast, reclaiming street space for children always paralysed neighbourhood traffic",
          "In short, reclaiming street space for children did not paralyse neighbourhood traffic",
          "Even so, paralysing neighbourhood traffic meant reclaiming street space for children",
          "Furthermore, to paralyse neighbourhood traffic is to reclaim street space for children"
        ],
        "answer": 1,
        "explanation": "Câu tóm tắt hợp lý sau dữ kiện các đại lộ lân cận không bị ùn tắc."
      },
      {
        "origNum": 41,
        "instruction": INS_5,
        "text": "",
        "options": [
          "which emergency ambulances and city buses must pass through",
          "where emergency ambulances and city buses must pass every few minutes",
          "that must pass emergency ambulances and city buses",
          "whom emergency services depend on at all times"
        ],
        "answer": 1,
        "explanation": "Mệnh đề quan hệ chỉ nơi chốn “where...” bổ nghĩa cho “Arterial avenues”."
      },
      {
        "origNum": 42,
        "instruction": INS_5,
        "text": "",
        "options": [
          "neither child safety nor liveability should be pursued unless cars are banned everywhere",
          "child safety and neighbourhood liveability need not be sacrificed to the private car",
          "neighbourhood liveability depends on traffic, whereas child safety is unrelated to it",
          "not only exhaust fumes but also traffic jams are what pedestrian zones increase"
        ],
        "answer": 1,
        "explanation": "Kết luận chuẩn ngữ pháp và mạch văn: sự an toàn của trẻ em và chất lượng sống khu dân cư không cần phải hy sinh cho xe cá nhân."
      }
    ],
    "4": [
      {
        "origNum": 38,
        "instruction": INS_5,
        "text": "",
        "options": [
          "almost all of which accessible via a single encrypted portal",
          "almost all of them are accessible via a single encrypted portal",
          "almost all of which are accessible via a single encrypted portal",
          "almost all of that are accessible via a single encrypted portal"
        ],
        "answer": 2,
        "explanation": "Mệnh đề quan hệ có lượng từ: “almost all of which are accessible...”.",
        "passage": "<b>ESTONIA’S DIGITAL PUBLIC SERVICES</b>\nIn many countries, dealing with government bureaucracy still involves queuing at municipal counters with folders of paper forms. Following its independence in 1991, however, Estonia built a unified digital state: 99 percent of public services, (38)__________, can now be completed online around the clock using a secure chip-based ID card. Over the past two decades, governance researchers have examined both administrative efficiency and citizen trust.\nThe time savings are remarkable. Estonian citizens can file their annual tax returns in under five minutes, register a new business in twenty minutes, (39)__________. Under the country’s ‘once-only’ data law, no government agency is allowed to ask a citizen for information that another department already holds. Economists estimate that digital signatures alone save the country the equivalent of two percent of its GDP each year in paperwork. (40)__________. Citizens can also view an electronic log showing every official who has accessed their medical or legal file.\nNot every nation can copy the Estonian blueprint overnight, of course. Federal states, (41)__________, face formidable legal hurdles when linking regional databases. Strict cybersecurity backups—including ‘data embassies’ hosted abroad—are essential. Nevertheless, Estonia’s experiment has redefined modern public administration. Ultimately, it illustrates that (42)__________.\n<i>(Adapted from OECD Digital Government Studies and e-Estonia Briefing Centre)</i>"
      },
      {
        "origNum": 39,
        "instruction": INS_5,
        "text": "",
        "options": [
          "but renewing medical prescriptions without a clinic visit was easy",
          "whereas medical prescriptions are renewed without visiting a clinic",
          "and renew medical prescriptions without visiting a clinic in person",
          "however, they renewed medical prescriptions without clinic visits"
        ],
        "answer": 2,
        "explanation": "Cấu trúc liệt kê song song động từ nguyên thể sau “can”: “file..., register..., and renew...”."
      },
      {
        "origNum": 40,
        "instruction": INS_5,
        "text": "",
        "options": [
          "Even so, strengthening transparency meant that red tape had to be increased",
          "By contrast, digitising state administration has increased red tape and weakened transparency",
          "In short, digitising state administration has cut red tape while strengthening transparency",
          "In addition, to increase red tape is to digitise state administration"
        ],
        "answer": 2,
        "explanation": "Câu tổng kết mạch lạc: số hóa hành chính vừa cắt giảm thủ tục rườm rà vừa tăng tính minh bạch."
      },
      {
        "origNum": 41,
        "instruction": INS_5,
        "text": "",
        "options": [
          "that operate incompatible legacy computer systems",
          "which local authorities operate legacy computer systems",
          "where local authorities operate incompatible legacy computer systems",
          "whom local authorities operate computer systems for"
        ],
        "answer": 2,
        "explanation": "Mệnh đề quan hệ chỉ nơi chốn “where...” bổ nghĩa cho “Federal states”."
      },
      {
        "origNum": 42,
        "instruction": INS_5,
        "text": "",
        "options": [
          "data privacy depends on paper forms, whereas speed is unrelated to them",
          "neither speed nor privacy is a goal that digital governments should pursue",
          "administrative speed and data privacy need not be treated as mutually exclusive",
          "not only red tape but also tax evasion are what digital IDs encourage"
        ],
        "answer": 2,
        "explanation": "Kết luận chuẩn xác: tốc độ hành chính và quyền riêng tư dữ liệu không loại trừ lẫn nhau."
      }
    ],
    "5": [
      {
        "origNum": 38,
        "instruction": INS_5,
        "text": "",
        "options": [
          "several of that encompass entire islands and mountain glens",
          "several of them encompass entire islands and mountain glens",
          "several of which encompassing entire islands and mountain glens",
          "several of which encompass entire islands and mountain glens"
        ],
        "answer": 3,
        "explanation": "Mệnh đề quan hệ có lượng từ: “several of which encompass...”.",
        "passage": "<b>SCOTLAND’S COMMUNITY LAND BUYOUTS</b>\nFor centuries, vast swathes of the Scottish Highlands and Islands were owned by a handful of absentee landlords, while local crofting villages dwindled. Starting on the Isle of Eigg in 1997, however, dozens of rural estates, (38)__________, have been purchased by democratically elected community trusts with support from the Scottish Land Fund. Over the decades since, rural sociologists have tracked population trends, housing and renewable energy.\nThe turnaround has been dramatic. On Eigg, the resident population has grown by more than 60 percent, derelict cottages have been refurbished as affordable homes, (39)__________. In 2008, the islanders switched on Europe’s first off-grid electricity network powered almost entirely by wind, water and solar energy, cutting household carbon emissions nearly in half. Small businesses—from bakeries to kayak-hire firms—have flourished under secure long-term leases. (40)__________. Young families are now moving back to islands that demographers had once written off as terminal.\nCommunity ownership is not a magic wand, of course. Remote peninsulas, (41)__________, still struggle to attract builders, teachers and healthcare workers. Volunteer board members can suffer burnout when managing multi-million-pound assets. Even so, the Highland buyouts have inspired rural reformers globally. Above all, they show that (42)__________.\n<i>(Adapted from Community Land Scotland and Scottish Government Land Reform Review)</i>"
      },
      {
        "origNum": 39,
        "instruction": INS_5,
        "text": "",
        "options": [
          "however, they planted native woodland across hillsides more",
          "whereas native woodland is planted across overgrazed hillsides",
          "but planting native woodland across hillsides was completed",
          "and native woodland has been planted across formerly overgrazed hillsides"
        ],
        "answer": 3,
        "explanation": "Cấu trúc song song các mệnh đề hoàn thành: “population has grown..., cottages have been refurbished..., and native woodland has been planted...”."
      },
      {
        "origNum": 40,
        "instruction": INS_5,
        "text": "",
        "options": [
          "Furthermore, to ruin the local ecology is to hand stewardship to residents",
          "By contrast, handing stewardship to local residents has ruined both economy and ecology",
          "Even so, revitalising the economy meant that local residents lost stewardship",
          "In short, handing stewardship to local residents has revitalised both economy and ecology"
        ],
        "answer": 3,
        "explanation": "Câu tóm tắt logic: trao quyền quản lý cho cư dân địa phương đã hồi sinh cả kinh tế lẫn sinh thái."
      },
      {
        "origNum": 41,
        "instruction": INS_5,
        "text": "",
        "options": [
          "whom ferry connections and broadband serve poorly",
          "which ferry connections are infrequent and slow",
          "that have infrequent ferry connections and broadband",
          "where ferry connections are infrequent and broadband remains slow"
        ],
        "answer": 3,
        "explanation": "Mệnh đề quan hệ chỉ nơi chốn “where...” bổ nghĩa cho “Remote peninsulas”."
      },
      {
        "origNum": 42,
        "instruction": INS_5,
        "text": "",
        "options": [
          "not only housing shortages but also carbon emissions are what community trusts increase",
          "neither rural renewal nor conservation can succeed without absentee landlords",
          "environmental conservation depends on depopulation, whereas renewal opposes it",
          "rural economic renewal and environmental conservation need not pull in opposite directions"
        ],
        "answer": 3,
        "explanation": "Kết luận chuẩn xác: phục hồi kinh tế nông thôn và bảo tồn môi trường không cần phải đi ngược chiều nhau."
      }
    ],
    "6": [
      {
        "origNum": 38,
        "instruction": INS_5,
        "text": "",
        "options": [
          "most of which run past homes, shops and local parks",
          "most of them run past homes, shops and local parks",
          "most of which running past homes, shops and local parks",
          "most of that run past homes, shops and local parks"
        ],
        "answer": 0,
        "explanation": "Mệnh đề quan hệ có lượng từ: “most of which run past...”.",
        "passage": "<b>WALES’S DEFAULT 20 MPH URBAN SPEED LIMIT</b>\nFor decades, 30 miles per hour (48 km/h) was the standard speed limit on built-up residential streets across Britain. In September 2023, however, Wales became the first UK nation to lower the default urban limit to 20 mph on thousands of neighbourhood roads, (38)__________. During the first twelve months, transport statisticians and insurers closely tracked collision rates, journey times and public attitudes.\nThe safety dividend was unmistakable. Police collision records showed fewer fatal and serious injuries, lower vehicle-damage insurance claims, (39)__________. Casualties on 20 mph and 30 mph roads combined dropped by roughly 26 percent in the first year—the lowest figure outside the pandemic lockdowns since records began. Average car journey times on urban commutes rose by less than one minute per trip. (40)__________. Several Welsh insurers even began offering slightly lower premiums to drivers in 20 mph postcodes.\nBlanket rules always require local fine-tuning, of course. Industrial ring roads, (41)__________, are now being returned to 30 mph by county councils following public feedback. Clear signage is vital so motorists understand where lower limits apply. Nevertheless, the Welsh policy has shifted the road-safety conversation. Ultimately, it demonstrates that (42)__________.\n<i>(Adapted from Welsh Government Transport Statistics and Transport Research Laboratory Reports)</i>"
      },
      {
        "origNum": 39,
        "instruction": INS_5,
        "text": "",
        "options": [
          "and a noticeable rise in residents cycling for short errands",
          "whereas residents cycling for short errands are rising",
          "but a rise in residents cycling for errands was noticeable",
          "however, residents cycled for short errands more better"
        ],
        "answer": 0,
        "explanation": "Cấu trúc danh từ song song: “fewer... injuries, lower... claims, and a noticeable rise...”."
      },
      {
        "origNum": 40,
        "instruction": INS_5,
        "text": "",
        "options": [
          "In short, a modest reduction in top speed saved lives without bringing cities to a standstill",
          "By contrast, a modest reduction in top speed brought every Welsh city to a standstill",
          "Even so, bringing cities to a standstill meant reducing top speed modestly",
          "In addition, to bring cities to a standstill is to save lives on urban roads"
        ],
        "answer": 0,
        "explanation": "Câu khái quát hợp lý: giảm nhẹ tốc độ tối đa đã cứu sống nhiều người mà không làm tê liệt giao thông."
      },
      {
        "origNum": 41,
        "instruction": INS_5,
        "text": "",
        "options": [
          "where pavements are separated from traffic and few pedestrians cross",
          "which pavements are separated from traffic",
          "that separate pavements from crossing pedestrians",
          "whom pedestrians rarely cross in industrial zones"
        ],
        "answer": 0,
        "explanation": "Mệnh đề quan hệ chỉ nơi chốn “where...” bổ nghĩa cho “Industrial ring roads”."
      },
      {
        "origNum": 42,
        "instruction": INS_5,
        "text": "",
        "options": [
          "pedestrian safety and smooth traffic flow need not be seen as irreconcilable goals",
          "neither pedestrian safety nor traffic flow matters on residential streets",
          "traffic flow depends on high speeds, whereas pedestrian safety is unrelated to speed",
          "not only insurance claims but also road casualties are what 20 mph limits increase"
        ],
        "answer": 0,
        "explanation": "Kết luận chuẩn xác: an toàn cho người đi bộ và lưu thông thông suốt không phải là hai mục tiêu không thể dung hòa."
      }
    ],
    "7": [
      {
        "origNum": 38,
        "instruction": INS_5,
        "text": "",
        "options": [
          "many of them had previously been treeless concrete median strips",
          "many of which had previously been treeless concrete median strips",
          "many of which previously treeless concrete median strips",
          "many of that had previously been treeless concrete strips"
        ],
        "answer": 1,
        "explanation": "Mệnh đề quan hệ có lượng từ: “many of which had previously been...”.",
        "passage": "<b>MEDELLÍN’S GREEN CORRIDORS</b>\nConcrete and asphalt absorb solar radiation all day and radiate it back at night, turning tropical cities into sweltering heat islands. Between 2016 and 2019, however, the Colombian city of Medellín transformed 30 major avenues and stream banks, (38)__________, into shaded botanical corridors planted with over 880,000 trees and palms. Over the years that followed, climatologists and public health teams monitored ambient temperatures, biodiversity and hospital admissions.\nThe cooling effect exceeded expectations. Surface temperatures along the shaded avenues dropped by up to 4 degrees Celsius, particulate air pollution declined, (39)__________. City-wide average temperatures fell by 2 degrees, reducing the demand for energy-hungry indoor air conditioning across surrounding neighbourhoods. Cyclists and pedestrians returned in droves to avenues they had previously avoided during the midday sun. (40)__________. Moreover, the municipal botanical garden trained dozens of residents from low-income barrios as salaried city gardeners.\nLiving infrastructure demands ongoing care, of course. Steep hillside neighbourhoods, (41)__________, require drip-irrigation pipes fed by harvested rainwater during dry spells. Native tree species must be chosen carefully so roots do not lift pavements. Even so, Medellín’s green corridors have won international acclaim. Above all, they prove that (42)__________.\n<i>(Adapted from C40 Cities Climate Leadership Group and Ashden Awards Case Study)</i>"
      },
      {
        "origNum": 39,
        "instruction": INS_5,
        "text": "",
        "options": [
          "whereas native songbirds and butterflies recolonise the city",
          "and native songbirds and butterflies recolonised the centre of the city",
          "but the recolonisation of songbirds and butterflies was rapid",
          "however, native songbirds and butterflies returned more"
        ],
        "answer": 1,
        "explanation": "Cấu trúc song song mệnh đề quá khứ đơn: “temperatures... dropped..., pollution declined, and native songbirds... recolonised...”."
      },
      {
        "origNum": 40,
        "instruction": INS_5,
        "text": "",
        "options": [
          "By contrast, investing in urban trees made the streets hotter than mechanical cooling",
          "In short, investing in urban trees delivered cooler streets at a fraction of the cost of mechanical cooling",
          "Even so, mechanical cooling meant investing in urban trees along avenues",
          "Furthermore, to heat up urban streets is to plant botanical corridors"
        ],
        "answer": 1,
        "explanation": "Câu tổng kết hợp lý: đầu tư trồng cây đô thị mang lại đường phố mát mẻ với chi phí chỉ bằng phần nhỏ so với làm mát cơ học."
      },
      {
        "origNum": 41,
        "instruction": INS_5,
        "text": "",
        "options": [
          "which topsoil is thin and runoff is rapid",
          "where topsoil is thin and summer runoff is rapid",
          "that have thin topsoil and rapid runoff",
          "whom thin topsoil affects during dry spells"
        ],
        "answer": 1,
        "explanation": "Mệnh đề quan hệ chỉ nơi chốn “where...” bổ nghĩa cho “Steep hillside neighbourhoods”."
      },
      {
        "origNum": 42,
        "instruction": INS_5,
        "text": "",
        "options": [
          "neither climate adaptation nor social inclusion can work in tropical valleys",
          "climate adaptation and social inclusion can reinforce each other in modern cities",
          "urban cooling depends on air conditioners, whereas trees only serve aesthetics",
          "not only heatwaves but also air pollution are what green corridors worsen"
        ],
        "answer": 1,
        "explanation": "Kết luận chuẩn xác: thích ứng biến đổi khí hậu và hòa nhập xã hội có thể củng cố lẫn nhau."
      }
    ],
    "8": [
      {
        "origNum": 38,
        "instruction": INS_5,
        "text": "",
        "options": [
          "all of whom sharing the cost of reverse-vending machines",
          "all of them share the cost of reverse-vending machines in supermarkets",
          "all of whom share the cost of reverse-vending machines in supermarkets",
          "all of that share the cost of reverse-vending machines"
        ],
        "answer": 2,
        "explanation": "Mệnh đề quan hệ có lượng từ chỉ người/tổ chức (producers and retailers): “all of whom share...”.",
        "passage": "<b>NORWAY’S DEPOSIT-RETURN SCHEME FOR PLASTIC BOTTLES</b>\nAcross the globe, billions of single-use plastic drink bottles end up in landfills, incinerators or the sea every year. Norway, however, pioneered a nationwide deposit-return system operated by Infinitum, a non-profit consortium of beverage producers and retailers, (38)__________. For more than two decades, environmental economists have studied how financial incentives shape both consumer habits and bottle design.\nThe return rates are world-leading. Norwegian shoppers bring back more than 92 percent of all plastic drink bottles, litter along beaches and highways has plummeted, (39)__________. Under a clever environmental tax rule, the government charges beverage makers a steep levy on every bottle sold, but reduces the tax progressively as the collective return rate climbs; once returns top 95 percent, the tax drops to zero. (40)__________. Standardised clear PET bottles and water-soluble label glues ensure that old bottles can be melted down into new food-grade bottles up to fifty times.\nNot every country can copy the system without preparation, of course. Rural villages, (41)__________, need manual collection agreements with small corner shops so residents are not left out. Anti-fraud bar-code scanners must also be updated regularly. Nevertheless, the Norwegian model has become a global benchmark. Ultimately, it shows that (42)__________.\n<i>(Adapted from Infinitum Annual Report and Ellen MacArthur Foundation Case Studies)</i>"
      },
      {
        "origNum": 39,
        "instruction": INS_5,
        "text": "",
        "options": [
          "but recycling returned containers into food-grade plastic is high",
          "whereas returned containers were recycled into food-grade plastic",
          "and nearly every returned container is recycled into fresh food-grade plastic",
          "however, they recycle returned containers more better"
        ],
        "answer": 2,
        "explanation": "Cấu trúc liệt kê song song mệnh đề: “shoppers bring back..., litter... has plummeted, and nearly every returned container is recycled...”."
      },
      {
        "origNum": 40,
        "instruction": INS_5,
        "text": "",
        "options": [
          "Even so, turning waste into a public nuisance meant lowering taxes on bottles",
          "By contrast, smart tax design forced beverage companies to abandon plastic recycling altogether",
          "In short, smart tax design turned packaging waste from a public nuisance into an industry responsibility",
          "In addition, to abandon recycling is to design a smart environmental tax"
        ],
        "answer": 2,
        "explanation": "Câu tóm tắt chuẩn xác: thiết kế thuế thông minh đã biến rác thải bao bì thành trách nhiệm chung của ngành sản xuất."
      },
      {
        "origNum": 41,
        "instruction": INS_5,
        "text": "",
        "options": [
          "that lack supermarkets and automated machines",
          "which supermarkets are scarce and uneconomical",
          "where supermarkets are scarce and automated machines would be uneconomical",
          "whom automated reverse-vending machines cannot serve"
        ],
        "answer": 2,
        "explanation": "Mệnh đề quan hệ chỉ nơi chốn “where...” bổ nghĩa cho “Rural villages”."
      },
      {
        "origNum": 42,
        "instruction": INS_5,
        "text": "",
        "options": [
          "commercial profitability depends on littering, whereas recycling harms retailers",
          "neither recycling nor profitability can be achieved without banning all beverages",
          "high recycling rates and commercial profitability need not be at odds with one another",
          "not only beach litter but also carbon emissions are what deposit schemes increase"
        ],
        "answer": 2,
        "explanation": "Kết luận chuẩn xác: tỷ lệ tái chế cao và lợi nhuận thương mại không cần phải mâu thuẫn với nhau."
      }
    ],
    "9": [
      {
        "origNum": 38,
        "instruction": INS_5,
        "text": "",
        "options": [
          "each of that is wired directly to the railway’s substation breakers",
          "each of them is wired directly to the railway’s automatic substation breakers",
          "each of which wired directly to the railway’s substation breakers",
          "each of which is wired directly to the railway’s automatic substation breakers"
        ],
        "answer": 3,
        "explanation": "Mệnh đề quan hệ có lượng từ: “each of which is wired...”.",
        "passage": "<b>JAPAN’S ‘SHINKANSEN’ EARTHQUAKE EARLY-WARNING SYSTEM</b>\nRunning passenger trains at 300 kilometres per hour across one of the most seismically active archipelagos on Earth sounds like a recipe for disaster. Since the 1990s, however, Japan Railways has protected its high-speed Shinkansen network with UrEDAS, an array of coastal and trackside seismometers, (38)__________. Over the decades since, railway engineers worldwide have studied the system’s split-second response.\nThe physics behind the system is ingenious. Earthquakes generate two types of waves: fast, low-energy primary (P) waves, and slower, destructive secondary (S) waves. Whenever a coastal sensor detects an initial P-wave tremor, it calculates the epicentre within two seconds, cuts overhead electrical power, (39)__________. During the massive magnitude-9.0 Tohoku earthquake in 2011, twenty-seven bullet trains were travelling at full speed; every single one slowed down safely before the violent S-waves arrived, resulting in zero passenger fatalities or injuries. (40)__________. Reinforced viaduct columns and anti-derailment L-shaped guards on the bogies provided a second layer of protection.\nTechnology alone cannot eliminate every disruption, of course. Mountainous sections, (41)__________, still require days of visual inspection before services can resume after a major quake. Sensor algorithms must also filter out vibrations caused by heavy freight trains nearby. Even so, the Shinkansen’s safety record remains unmatched. Above all, it proves that (42)__________.\n<i>(Adapted from Railway Technical Research Institute of Japan and Nature)</i>"
      },
      {
        "origNum": 39,
        "instruction": INS_5,
        "text": "",
        "options": [
          "however, it triggered emergency brakes on trains",
          "whereas emergency brakes are triggered on every train",
          "but triggering emergency brakes on every train was fast",
          "and triggers emergency brakes on every train in the affected zone"
        ],
        "answer": 3,
        "explanation": "Cấu trúc song song động từ hiện tại đơn: “calculates..., cuts..., and triggers...”."
      },
      {
        "origNum": 40,
        "instruction": INS_5,
        "text": "",
        "options": [
          "Furthermore, to ignore early warning is to prevent a railway catastrophe",
          "By contrast, gaining ten seconds of early warning caused a catastrophe on the tracks",
          "Even so, causing a catastrophe meant gaining ten seconds of early warning",
          "In short, gaining just ten seconds of early warning made the difference between safety and catastrophe"
        ],
        "answer": 3,
        "explanation": "Câu tóm tắt hợp lý sau dữ kiện 27 đoàn tàu dừng an toàn năm 2011."
      },
      {
        "origNum": 41,
        "instruction": INS_5,
        "text": "",
        "options": [
          "whom aftershocks threaten in deep tunnels",
          "which deep tunnels and high bridges are exposed to",
          "that expose deep tunnels and bridges to aftershocks",
          "where deep tunnels and high bridges are exposed to aftershocks"
        ],
        "answer": 3,
        "explanation": "Mệnh đề quan hệ chỉ nơi chốn “where...” bổ nghĩa cho “Mountainous sections”."
      },
      {
        "origNum": 42,
        "instruction": INS_5,
        "text": "",
        "options": [
          "not only power cuts but also derailments are what coastal seismometers cause",
          "neither high-speed rail nor safety is possible in earthquake-prone countries",
          "seismic resilience depends on slow trains, whereas speed is unrelated to engineering",
          "high-speed rail travel and extreme seismic resilience can coexist through proactive engineering"
        ],
        "answer": 3,
        "explanation": "Kết luận chuẩn xác: đường sắt tốc độ cao và khả năng chống chịu động đất có thể song hành nhờ kỹ thuật chủ động."
      }
    ],
    "10": [
      {
        "origNum": 38,
        "instruction": INS_5,
        "text": "",
        "options": [
          "most of which lend out household tools and appliances for a few pounds a day",
          "most of them lend out household tools and appliances for a few pounds a day",
          "most of which lending out household tools and appliances",
          "most of that lend out household tools and appliances"
        ],
        "answer": 0,
        "explanation": "Mệnh đề quan hệ có lượng từ: “most of which lend out...”.",
        "passage": "<b>THE RISE OF ‘LIBRARY OF THINGS’ BORROWING HUBS</b>\nIn a typical suburban street, forty households each own an electric drill, a pressure washer and a camping tent that sit idle in cupboards for 360 days a year. Over the past decade, however, dozens of municipal libraries and community centres across Europe and North America have opened ‘Libraries of Things’, (38)__________. Sociologists and waste-prevention officers have tracked borrowing patterns, repair rates and household savings.\nThe practical impact is striking. Members can borrow heavy-duty carpet cleaners, sewing machines, thermal-imaging cameras for spotting draughts, (39)__________. Surveys in London and Berlin show that 85 percent of borrowers avoided buying a new appliance they would rarely use, saving households hundreds of pounds a year while cutting embodied carbon emissions from manufacturing. Local toolmakers, too, have benefited by supplying durable, commercial-grade models that withstand hundreds of loans. (40)__________. Many hubs also host weekly maintenance evenings where volunteers teach residents how to sharpen blades and replace fuses.\nRunning a lending hub is not without logistical challenges, of course. High-density apartment districts, (41)__________, require cargo-bike delivery partnerships so residents without cars can transport bulky tools home. Clear safety-briefing videos and liability waivers are also essential. Nevertheless, the movement is expanding rapidly. Ultimately, it demonstrates that (42)__________.\n<i>(Adapted from Circular Economy Journal and Library of Things UK Impact Report)</i>"
      },
      {
        "origNum": 39,
        "instruction": INS_5,
        "text": "",
        "options": [
          "and garden shredders without having to store or maintain them at home",
          "whereas garden shredders are borrowed without storing them",
          "but storing and maintaining garden shredders at home was avoided",
          "however, they borrowed garden shredders without storing them"
        ],
        "answer": 0,
        "explanation": "Cấu trúc liệt kê danh từ song song: “carpet cleaners, sewing machines, thermal-imaging cameras..., and garden shredders...”."
      },
      {
        "origNum": 40,
        "instruction": INS_5,
        "text": "",
        "options": [
          "In short, sharing infrequently used equipment has reduced both household clutter and industrial waste",
          "By contrast, sharing infrequently used equipment has increased both clutter and industrial waste",
          "Even so, increasing industrial waste meant sharing infrequently used equipment",
          "In addition, to clutter households is to share infrequently used equipment"
        ],
        "answer": 0,
        "explanation": "Câu tổng kết mạch lạc: chia sẻ thiết bị ít dùng giúp giảm cả sự bừa bộn trong nhà lẫn rác thải công nghiệp."
      },
      {
        "origNum": 41,
        "instruction": INS_5,
        "text": "",
        "options": [
          "where residents rely on public transport and lack garage storage",
          "which residents rely on public transport and lack storage",
          "that rely on public transport and lack garage storage",
          "whom public transport serves in apartment districts"
        ],
        "answer": 0,
        "explanation": "Mệnh đề quan hệ chỉ nơi chốn “where...” bổ nghĩa cho “High-density apartment districts”."
      },
      {
        "origNum": 42,
        "instruction": INS_5,
        "text": "",
        "options": [
          "convenient access to modern tools and lower material consumption need not conflict",
          "neither convenient access nor waste reduction is possible in suburban neighbourhoods",
          "material consumption depends on libraries, whereas convenience requires buying everything new",
          "not only household debt but also landfill waste are what lending hubs generate"
        ],
        "answer": 0,
        "explanation": "Kết luận chuẩn xác: việc tiếp cận tiện lợi các dụng cụ hiện đại và giảm tiêu thụ vật chất không hề mâu thuẫn nhau."
      }
    ]
  },
  "5": {
    "1": [
      {
        "origNum": 43,
        "instruction": INS_2,
        "text": "",
        "options": [
          "deciphered",
          "demolished",
          "defaulted",
          "deflected"
        ],
        "answer": 0,
        "explanation": "decipher (cuneiform scripts) = giải mã chữ hình nêm cổ đại.",
        "passage": "<b>THE MYSTERY OF THE INDUS VALLEY SCRIPT</b>\nWhile the hieroglyphs of ancient Egypt and the cuneiform tablets of Mesopotamia were (43)__________ in the nineteenth century, the writing system of the Bronze Age Indus Valley Civilisation—which flourished across present-day Pakistan and northwest India between 2600 and 1900 BCE—has stubbornly (44)__________ every attempt at translation. Carved onto thousands of tiny soapstone seals, copper plates and pottery shards excavated at Harappa and Mohenjo-daro, the symbols remain one of archaeology’s greatest (45)__________.\nThe primary obstacle is the sheer brevity of the surviving inscriptions. The average Indus text is just five symbols long, and the longest ever found contains only twenty-six characters. Worse still, archaeologists have never unearthed a ‘Rosetta Stone’—a bilingual monument that repeats the same decree in a known ancient language. (46)__________ these limitations, computational linguists have used statistical Markov models to uncover striking structural patterns. The symbols do not appear in random order; certain signs cluster consistently at the beginning or end of lines, (47)__________ the prefixes and suffixes of a spoken grammar.\nDebate over what the seals actually record remains (48)__________. One school of epigraphers argues that the script is ‘logo-syllabic’, encoding an ancestral Dravidian or Indo-Aryan tongue used by merchants to stamp tax receipts and trade bales destined for Persian Gulf ports. A rival hypothesis contends that the symbols are not phonetic writing at all, but rather non-linguistic heraldic emblems and clan totems akin to medieval coats of arms. Recent machine-learning analyses of sign entropy, however, strongly (49)__________ the linguistic view, showing that the information density of Indus inscriptions sits squarely between Sumerian cuneiform and modern syllabaries.\nUntil a longer historical archive surfaces from the unexcavated mounds of the Sarasvati-Indus plains, the voice of South Asia’s first urban civilisation will remain tantalisingly out of (50)__________. Yet as three-dimensional laser scanning and artificial-intelligence pattern recognition advance, epigraphers are hopeful that the silent unicorn seals will one day (51)__________ their secrets, illuminating a society that built planned cities and municipal drainage without leaving a single monument to war or royal (52)__________.\n<i>(Adapted from Andrew Robinson, The Indus: Lost Civilizations, and Science)</i>"
      },
      {
        "origNum": 44,
        "instruction": INS_2,
        "text": "",
        "options": [
          "allied",
          "complied",
          "defied",
          "relied"
        ],
        "answer": 2,
        "explanation": "defy every attempt at... = thách thức, bất chấp mọi nỗ lực giải mã."
      },
      {
        "origNum": 45,
        "instruction": INS_2,
        "text": "",
        "options": [
          "enigmas",
          "dogmas",
          "stigmas",
          "magmas"
        ],
        "answer": 0,
        "explanation": "enigma = bí ẩn lớn. dogma = giáo điều; stigma = sự kỳ thị; magma = dung nham."
      },
      {
        "origNum": 46,
        "instruction": INS_2,
        "text": "",
        "options": [
          "Albeit",
          "Whereas",
          "Notwithstanding",
          "Provided"
        ],
        "answer": 2,
        "explanation": "Notwithstanding + cụm danh từ (these limitations) = Bất chấp những hạn chế này."
      },
      {
        "origNum": 47,
        "instruction": INS_2,
        "text": "",
        "options": [
          "mirroring",
          "marring",
          "mooring",
          "muting"
        ],
        "answer": 0,
        "explanation": "mirror (v) = phản chiếu, tương ứng giống với tiền tố và hậu tố của ngôn ngữ nói."
      },
      {
        "origNum": 48,
        "instruction": INS_2,
        "text": "",
        "options": [
          "contagious",
          "complacent",
          "contentious",
          "contiguous"
        ],
        "answer": 2,
        "explanation": "contentious = gây nhiều tranh cãi. complacent = tự mãn; contagious = lây nhiễm; contiguous = tiếp giáp."
      },
      {
        "origNum": 49,
        "instruction": INS_2,
        "text": "",
        "options": [
          "bolster",
          "banish",
          "blemish",
          "baffle"
        ],
        "answer": 0,
        "explanation": "bolster (the linguistic view) = củng cố, ủng hộ quan điểm ngôn ngữ học."
      },
      {
        "origNum": 50,
        "instruction": INS_2,
        "text": "",
        "options": [
          "sight",
          "touch",
          "reach",
          "hand"
        ],
        "answer": 2,
        "explanation": "tantalisingly out of reach = ở ngoài tầm với một cách đầy khêu gợi tò mò."
      },
      {
        "origNum": 51,
        "instruction": INS_2,
        "text": "",
        "options": [
          "yield",
          "wield",
          "shield",
          "field"
        ],
        "answer": 0,
        "explanation": "yield one’s secrets = tiết lộ, hé mở những bí mật."
      },
      {
        "origNum": 52,
        "instruction": INS_2,
        "text": "",
        "options": [
          "charity",
          "sanity",
          "vanity",
          "clarity"
        ],
        "answer": 2,
        "explanation": "royal vanity = sự phù phiếm/tự tôn của vương quyền."
      }
    ],
    "2": [
      {
        "origNum": 43,
        "instruction": INS_2,
        "text": "",
        "options": [
          "elevated",
          "relegated",
          "delegated",
          "segregated"
        ],
        "answer": 1,
        "explanation": "relegate A to B = xếp A xuống hàng thứ yếu (chỉ coi giấc ngủ là sự nghỉ ngơi thụ động).",
        "passage": "<b>THE GLYMPHATIC SYSTEM: HOW THE BRAIN WASHES ITSELF AT NIGHT</b>\nFor centuries, physiologists were baffled by why animals spend a third of their lives in a state of unconsciousness that leaves them vulnerable to predators. Until recently, medical textbooks (43)__________ sleep to a passive rest period during which neurons simply slowed down to conserve metabolic energy. In 2012, however, neuroscientist Maiken Nedergaard and her team at the University of Rochester uncovered a microscopic plumbing network—dubbed the ‘glymphatic system’—that (44)__________ into high gear the moment we fall into deep, slow-wave sleep.\nThroughout the rest of the body, the lymphatic system clears cellular debris and metabolic waste from organs. The brain, weirdly, contains no lymphatic vessels of its own, despite burning twenty percent of the body’s energy. Nedergaard’s live-imaging experiments revealed an ingenious (45)__________: during deep non-REM sleep, glial support cells shrink by up to 60 percent, widening the interstitial channels between neurons and allowing cerebrospinal fluid to (46)__________ briskly through brain tissue like a dishwasher cycle.\nThis nocturnal rinse is far from trivial. Among the metabolic byproducts swept out into the bloodstream for disposal is beta-amyloid, the sticky protein plaque (47)__________ in Alzheimer’s disease. Just a single night of total sleep deprivation measurably increases beta-amyloid accumulation in the human hippocampus. (48)__________, the glymphatic pump relies on the slow, rhythmic arterial pulsations of natural deep sleep; sedative sleeping pills that merely knock out consciousness without generating slow delta waves can actually (49)__________ fluid clearance.\nThese findings have (50)__________ how neurologists view midlife sleep hygiene. Rather than treating chronic insomnia and fragmented sleep merely as symptoms of ageing, clinicians increasingly recognise poor sleep as a modifiable risk factor that may (51)__________ neurodegenerative decline decades later. Protecting uninterrupted deep sleep, in short, is not a luxury for the idle, but a biological (52)__________ for keeping the mind clear.\n<i>(Adapted from M. Nedergaard & S. A. Goldman, Science, and Scientific American)</i>"
      },
      {
        "origNum": 44,
        "instruction": INS_2,
        "text": "",
        "options": [
          "sifts",
          "drifts",
          "lifts",
          "shifts"
        ],
        "answer": 3,
        "explanation": "shift into high gear = chuyển sang hoạt động hết công suất."
      },
      {
        "origNum": 45,
        "instruction": INS_2,
        "text": "",
        "options": [
          "turnaround",
          "workaround",
          "runaround",
          "background"
        ],
        "answer": 1,
        "explanation": "an ingenious workaround = một cơ chế/giải pháp thay thế khéo léo."
      },
      {
        "origNum": 46,
        "instruction": INS_2,
        "text": "",
        "options": [
          "brush",
          "blush",
          "crush",
          "flush"
        ],
        "answer": 3,
        "explanation": "flush through... = sục rửa, chảy mạnh cuốn trôi chất thải qua mô não."
      },
      {
        "origNum": 47,
        "instruction": INS_2,
        "text": "",
        "options": [
          "complicated",
          "implicated",
          "replicated",
          "dedicated"
        ],
        "answer": 1,
        "explanation": "be implicated in (a disease) = có liên đới/là tác nhân gây ra bệnh Alzheimer."
      },
      {
        "origNum": 48,
        "instruction": INS_2,
        "text": "",
        "options": [
          "Candidly",
          "Casually",
          "Cordially",
          "Crucially"
        ],
        "answer": 3,
        "explanation": "“Crucially” = điều cốt yếu là (nhấn mạnh điểm quan trọng về sóng ngủ tự nhiên so với thuốc an thần)."
      },
      {
        "origNum": 49,
        "instruction": INS_2,
        "text": "",
        "options": [
          "impel",
          "impede",
          "impart",
          "import"
        ],
        "answer": 1,
        "explanation": "impede (fluid clearance) = cản trở quá trình đào thải dịch."
      },
      {
        "origNum": 50,
        "instruction": INS_2,
        "text": "",
        "options": [
          "transmitted",
          "transcribed",
          "transplanted",
          "transformed"
        ],
        "answer": 3,
        "explanation": "transform how neurologists view... = làm thay đổi hoàn toàn cách các nhà thần kinh học nhìn nhận..."
      },
      {
        "origNum": 51,
        "instruction": INS_2,
        "text": "",
        "options": [
          "pacify",
          "precipitate",
          "placate",
          "preclude"
        ],
        "answer": 1,
        "explanation": "precipitate = thúc đẩy nhanh, làm khởi phát sớm (sự suy giảm thần kinh)."
      },
      {
        "origNum": 52,
        "instruction": INS_2,
        "text": "",
        "options": [
          "figurative",
          "narrative",
          "prerogative",
          "imperative"
        ],
        "answer": 3,
        "explanation": "a biological imperative = một mệnh lệnh/nhu cầu bắt buộc về mặt sinh học."
      }
    ],
    "3": [
      {
        "origNum": 43,
        "instruction": INS_2,
        "text": "",
        "options": [
          "unscrupulous",
          "unwarranted",
          "unprecedented",
          "unpretentious"
        ],
        "answer": 2,
        "explanation": "unprecedented = chưa từng có tiền lệ.",
        "passage": "<b>VENICE AND THE MOSE FLOOD BARRIER</b>\nBuilt across a cluster of muddy islands in a crescent-shaped Adriatic lagoon, Venice has lived in a delicate truce with the sea for fifteen centuries. In recent decades, however, the combination of rising global sea levels and the gradual subsidence of the lagoon floor—worsened by twentieth-century industrial groundwater pumping—has exposed the city’s piazzas and Byzantine mosaics to (43)__________ winter flooding, known locally as <i>acqua alta</i>. When a catastrophic storm surge of 187 centimetres inundated eighty percent of the city in November 2019, sceptics wondered whether the long-delayed MOSE mobile barrier project would ever (44)__________ its promise.\nConceived after the devastating flood of 1966 and under construction since 2003, MOSE consists of seventy-eight hollow steel gates (45)__________ into concrete trenches across the lagoon’s three tidal inlets. Under normal weather conditions, the gates lie filled with water and completely invisible on the seabed, allowing cargo ships to pass and tidal currents to flush the lagoon. Whenever meteorologists forecast a tide exceeding 110 centimetres, compressors pump air into the gates, causing them to (46)__________ upward on their hinges and seal off the lagoon from the open Adriatic.\nSince its first operational deployment in October 2020, MOSE has repeatedly (47)__________ St Mark’s Square dry during severe autumn gales that would previously have left ground-floor shops knee-deep in saltwater. (48)__________ the engineering triumph is undeniable, operating the barrier entails painful trade-offs. Each closure costs roughly €300,000, delays port shipping, and—if repeated too frequently as sea levels climb—threatens to trap urban sewage inside the lagoon while starving salt marshes of the sediment they need to (49)__________ pace with rising water.\nMaintenance, too, is a relentless battle against marine nature: mussels, barnacles and brackish silt corrode the underwater hinges, requiring divers to service the gates year-round. Climate modellers caution that if the Adriatic rises by sixty centimetres by 2100, MOSE might have to remain closed for months on end, turning a living tidal estuary into a (50)__________ pond. The yellow barriers, in short, have bought Venice a precious fifty-year (51)__________, but saving the city permanently will require both global decarbonisation and restoring the natural sponge of the surrounding (52)__________.\n<i>(Adapted from Nature Climate Change and Scientific American)</i>"
      },
      {
        "origNum": 44,
        "instruction": INS_2,
        "text": "",
        "options": [
          "fulfil",
          "forfeit",
          "foment",
          "forestall"
        ],
        "answer": 0,
        "explanation": "fulfil its promise = thực hiện được lời hứa/kỳ vọng."
      },
      {
        "origNum": 45,
        "instruction": INS_2,
        "text": "",
        "options": [
          "regressed",
          "repressed",
          "recessed",
          "redressed"
        ],
        "answer": 2,
        "explanation": "recessed into concrete trenches = được đặt âm/chìm trong các rãnh bê tông dưới đáy biển."
      },
      {
        "origNum": 46,
        "instruction": INS_2,
        "text": "",
        "options": [
          "pivot",
          "plummet",
          "pilfer",
          "parish"
        ],
        "answer": 0,
        "explanation": "pivot upward on their hinges = xoay nâng lên quanh trục bản lề."
      },
      {
        "origNum": 47,
        "instruction": INS_2,
        "text": "",
        "options": [
          "made",
          "held",
          "kept",
          "left"
        ],
        "answer": 2,
        "explanation": "keep St Mark’s Square dry = giữ cho quảng trường St Mark khô ráo."
      },
      {
        "origNum": 48,
        "instruction": INS_2,
        "text": "",
        "options": [
          "While",
          "Because",
          "Unless",
          "Where"
        ],
        "answer": 0,
        "explanation": "While + mệnh đề = Mặc dù thành tựu kỹ thuật là không thể phủ nhận..."
      },
      {
        "origNum": 49,
        "instruction": INS_2,
        "text": "",
        "options": [
          "take",
          "make",
          "keep",
          "hold"
        ],
        "answer": 2,
        "explanation": "keep pace with = theo kịp với mực nước biển dâng."
      },
      {
        "origNum": 50,
        "instruction": INS_2,
        "text": "",
        "options": [
          "stagnant",
          "buoyant",
          "vibrant",
          "radiant"
        ],
        "answer": 0,
        "explanation": "stagnant pond = ao tù nước đọng."
      },
      {
        "origNum": 51,
        "instruction": INS_2,
        "text": "",
        "options": [
          "reprisal",
          "reprimand",
          "reprieve",
          "reproach"
        ],
        "answer": 2,
        "explanation": "reprieve = khoảng thời gian trì hoãn/tạm thoát hiểm quý giá."
      },
      {
        "origNum": 52,
        "instruction": INS_2,
        "text": "",
        "options": [
          "wetlands",
          "highlands",
          "woodlands",
          "badlands"
        ],
        "answer": 0,
        "explanation": "wetlands = vùng đất ngập nước xung quanh đầm phá."
      }
    ],
    "4": [
      {
        "origNum": 43,
        "instruction": INS_2,
        "text": "",
        "options": [
          "hindered",
          "hoarded",
          "hounded",
          "heralded"
        ],
        "answer": 3,
        "explanation": "herald (v) = ca ngợi, chào đón như một bước đột phá.",
        "passage": "<b>CRISPR GENE EDITING AND CLIMATE-RESILIENT CROPS</b>\nFor ten thousand years, farmers improved crops through patient selective breeding, saving seeds from the hardiest wheat stalks or sweetest maize cobs after each harvest. In the late twentieth century, first-generation ‘transgenic’ genetically modified organisms (GMOs) provoked fierce public resistance in Europe because they inserted foreign DNA from bacteria or viruses into food plants. Over the past decade, however, the discovery of CRISPR-Cas9 ‘molecular scissors’ has been (43)__________ by plant geneticists as a way to fine-tune a crop’s own native genome with (44)__________ accuracy.\nUnlike older transgenic methods, CRISPR allows scientists to switch off a single undesirable gene—or copy a beneficial allele already present in a wild relative—without leaving any foreign genetic material behind. At the International Rice Research Institute in the Philippines, biologists have edited the <i>Sub1A</i> gene pathway so rice seedlings can survive two weeks completely (45)__________ under monsoon floodwaters, a trait that previously took decades of back-crossing to introduce into local varieties. Elsewhere, researchers have silenced the mildew-susceptibility locus in bread wheat and developed cassava varieties (46)__________ to the devastating brown-streak virus.\n(47)__________ the laboratory science moves at breakneck speed, regulatory frameworks are only now catching up. The United Kingdom, Japan and the United States have recently exempted ‘cisgenic’ gene-edited crops—those containing only edits that could have occurred naturally through conventional breeding—from the (48)__________ approval rules applied to transgenic GMOs, while the European Union is debating similar reforms. Even so, agro-ecologists caution against viewing gene editing as a silver (49)__________.\nHeat tolerance and drought resilience are governed not by a single master switch, but by dozens of interacting genes alongside soil organic matter and mycorrhizal fungi. Moreover, if patented CRISPR seeds are priced out of reach of smallholder farmers in the Global South, technological breakthroughs could (50)__________ rural inequality rather than narrowing it. Combining open-source gene editing with diverse agroforestry and soil conservation will be essential to (51)__________ global harvests against an increasingly (52)__________ climate.\n<i>(Adapted from Nature Biotechnology and Food and Agriculture Organization Reports)</i>"
      },
      {
        "origNum": 44,
        "instruction": INS_2,
        "text": "",
        "options": [
          "standpoint",
          "pinpoint",
          "viewpoint",
          "flashpoint"
        ],
        "answer": 1,
        "explanation": "pinpoint accuracy = độ chính xác tuyệt đối."
      },
      {
        "origNum": 45,
        "instruction": INS_2,
        "text": "",
        "options": [
          "subverted",
          "subsided",
          "submitted",
          "submerged"
        ],
        "answer": 3,
        "explanation": "submerged under floodwaters = bị ngập chìm hoàn toàn dưới nước lũ."
      },
      {
        "origNum": 46,
        "instruction": INS_2,
        "text": "",
        "options": [
          "impune",
          "immune",
          "immature",
          "imminent"
        ],
        "answer": 1,
        "explanation": "immune to (a virus) = miễn nhiễm/kháng được vi-rút."
      },
      {
        "origNum": 47,
        "instruction": INS_2,
        "text": "",
        "options": [
          "Since",
          "Because",
          "Unless",
          "Although"
        ],
        "answer": 3,
        "explanation": "Although + mệnh đề = Mặc dù khoa học phòng thí nghiệm tiến rất nhanh, khung pháp lý mới chỉ đang bắt kịp."
      },
      {
        "origNum": 48,
        "instruction": INS_2,
        "text": "",
        "options": [
          "lenient",
          "stringent",
          "negligent",
          "complacent"
        ],
        "answer": 1,
        "explanation": "stringent approval rules = các quy định phê duyệt nghiêm ngặt."
      },
      {
        "origNum": 49,
        "instruction": INS_2,
        "text": "",
        "options": [
          "coin",
          "arrow",
          "shield",
          "bullet"
        ],
        "answer": 3,
        "explanation": "silver bullet = giải pháp vạn năng giải quyết mọi vấn đề."
      },
      {
        "origNum": 50,
        "instruction": INS_2,
        "text": "",
        "options": [
          "lessen",
          "widen",
          "soften",
          "dampen"
        ],
        "answer": 1,
        "explanation": "widen inequality (làm nới rộng bất bình đẳng) đối lập với “narrowing it”."
      },
      {
        "origNum": 51,
        "instruction": INS_2,
        "text": "",
        "options": [
          "alienate",
          "inundate",
          "instigate",
          "insulate"
        ],
        "answer": 3,
        "explanation": "insulate A against B = bảo vệ, che chắn mùa màng trước biến đổi khí hậu."
      },
      {
        "origNum": 52,
        "instruction": INS_2,
        "text": "",
        "options": [
          "static",
          "erratic",
          "ecstatic",
          "aquatic"
        ],
        "answer": 1,
        "explanation": "erratic climate = khí hậu thất thường, khó lường."
      }
    ],
    "5": [
      {
        "origNum": 43,
        "instruction": INS_2,
        "text": "",
        "options": [
          "tethered",
          "weathered",
          "feathered",
          "gathered"
        ],
        "answer": 0,
        "explanation": "tethered to a specific castle or monastery = bị gắn chặt vào một địa điểm cố định.",
        "passage": "<b>THE ECONOMICS OF CULTURAL HERITAGE AND DIGITAL TWINS</b>\nWhen a devastating fire engulfed the timber roof and nineteenth-century spire of Notre-Dame Cathedral in Paris in April 2019, architects feared that centuries of intricate Gothic carpentry had been lost forever. Historically, the survival of an ancient monument was (43)__________ to the physical survival of its stones and beams. In the case of Notre-Dame, however, the late art historian Andrew Tallon had spent years scanning the cathedral’s interior with tripod-mounted laser beams, recording over a billion data points accurate to within five millimetres. That ‘digital twin’ (44)__________ master carpenters and stonemasons to reconstruct the vaulted ceiling and oak trusses with faithful geometry.\nAcross the globe, heritage conservationists are racing to create high-resolution three-dimensional digital twins of archaeological sites threatened by rising seas, earthquakes and armed conflict. From the rock-hewn churches of Lalibela in Ethiopia to the eroding coastal temples of Rapa Nui, photogrammetry drones and terrestrial LiDAR scanners can (45)__________ every chisel mark and weathered inscription in a matter of days. (46)__________ a physical monument is later damaged by a tremor or storm surge, restoration engineers have a millimetre-perfect blueprint from which to rebuild.\nDigital preservation also democratises access without (47)__________ fragile originals to tourist wear and tear. In Egypt’s Valley of the Kings, humidity and carbon dioxide exhaled by thousands of daily visitors were causing ancient wall paintings in the tomb of Tutankhamun to blister and flake. By constructing a laser-replicated facsimile tomb beside the visitor centre, authorities have (48)__________ pressure on the original burial chamber while still offering travellers an immersive experience.\nYet a digital file is not a substitute for living heritage. Cloud servers require continuous funding and format migration lest today’s 3D models become (49)__________ software artefacts within thirty years. Ethical questions also loom large when Western universities scan artefacts in developing nations and retain exclusive copyright over the resulting datasets. Treating digital twins as a shared public good—and pairing virtual archives with hands-on apprenticeships in traditional stone-carving and lime-mortar (50)__________—ensures that technology serves to (51)__________ physical conservation rather than (52)__________ it.\n<i>(Adapted from UNESCO World Heritage Review and National Geographic)</i>"
      },
      {
        "origNum": 44,
        "instruction": INS_2,
        "text": "",
        "options": [
          "ensured",
          "entailed",
          "enabled",
          "enforced"
        ],
        "answer": 2,
        "explanation": "enable sb to V = giúp cho ai có thể làm gì."
      },
      {
        "origNum": 45,
        "instruction": INS_2,
        "text": "",
        "options": [
          "capture",
          "rupture",
          "fracture",
          "posture"
        ],
        "answer": 0,
        "explanation": "capture (every chisel mark) = ghi lại chi tiết từng vết đục chạm."
      },
      {
        "origNum": 46,
        "instruction": INS_2,
        "text": "",
        "options": [
          "Were",
          "Had",
          "Should",
          "Did"
        ],
        "answer": 2,
        "explanation": "Đảo ngữ câu điều kiện loại 1: Should + S + V nguyên thể (= If a physical monument is later damaged...)."
      },
      {
        "origNum": 47,
        "instruction": INS_2,
        "text": "",
        "options": [
          "subjecting",
          "objecting",
          "projecting",
          "rejecting"
        ],
        "answer": 0,
        "explanation": "subject A to B = làm cho A phải chịu tác động xấu của B (hao mòn do du khách)."
      },
      {
        "origNum": 48,
        "instruction": INS_2,
        "text": "",
        "options": [
          "reprieved",
          "retrieved",
          "relieved",
          "received"
        ],
        "answer": 2,
        "explanation": "relieve pressure on... = giảm bớt áp lực lên hầm mộ gốc."
      },
      {
        "origNum": 49,
        "instruction": INS_2,
        "text": "",
        "options": [
          "obsolete",
          "absolute",
          "obstinate",
          "obscure"
        ],
        "answer": 0,
        "explanation": "obsolete = lỗi thời, không còn sử dụng được."
      },
      {
        "origNum": 50,
        "instruction": INS_2,
        "text": "",
        "options": [
          "censorhip",
          "partisanship",
          "craftsmanship",
          "dictatorship"
        ],
        "answer": 2,
        "explanation": "craftsmanship = nghề thủ công tinh xảo."
      },
      {
        "origNum": 51,
        "instruction": INS_2,
        "text": "",
        "options": [
          "buttress",
          "bypass",
          "beleaguer",
          "belittle"
        ],
        "answer": 0,
        "explanation": "buttress (physical conservation) = nâng đỡ, củng cố công tác bảo tồn vật thể."
      },
      {
        "origNum": 52,
        "instruction": INS_2,
        "text": "",
        "options": [
          "sustaining",
          "supporting",
          "supplanting",
          "supplementing"
        ],
        "answer": 2,
        "explanation": "supplant = thay thế hoàn toàn (đối lập với buttress/hỗ trợ)."
      }
    ],
    "6": [
      {
        "origNum": 43,
        "instruction": INS_2,
        "text": "",
        "options": [
          "dispatched",
          "dismissed",
          "dispersed",
          "disclosed"
        ],
        "answer": 1,
        "explanation": "dismiss A as B = gạt bỏ, coi nhẹ A chỉ như là B.",
        "passage": "<b>THE GUT-BRAIN AXIS: HOW MICROBES SHAPE MOOD</b>\nWhen nineteenth-century physicians spoke of ‘nervous indigestion’ or ‘gut feelings’, mainstream neurology (43)__________ the phrases as quaint folk metaphors. The brain, encased inside the blood-brain barrier and the skull, was assumed to rule the body in splendid isolation from the digestive tract below. Over the past fifteen years, however, breakthroughs in metagenomic sequencing and neurobiology have revealed a bustling bidirectional superhighway—the ‘gut-brain axis’—that (44)__________ the trillions of microbes in our intestines directly to our emotional centres.\nCommunication along this axis travels through three distinct channels. Anatomically, the vagus nerve runs like a fibre-optic cable from the brainstem down to the lining of the colon, transmitting sensory signals upward nine times more frequently than it sends commands downward. Biochemically, gut bacteria manufacture roughly 90 percent of the body’s serotonin and half of its dopamine, alongside short-chain fatty acids such as butyrate that (45)__________ the integrity of the blood-brain barrier. Immunologically, when chronic stress or a fibre-poor diet allows harmful bacteria to proliferate, inflammatory cytokines leak through the gut wall and trigger neuro-inflammation associated with depressive (46)__________.\nGerm-free laboratory mice raised in sterile bubbles without any gut microbiome exhibit exaggerated stress hormones and anxious behaviour; remarkably, transplanting microbiota from calm donor mice can (47)__________ their composure. (48)__________ rodent experiments do not always translate directly to human psychiatry, clinical trials in Ireland and Australia have shown that ‘psychobiotic’ diets rich in fermented foods—kefir, kimchi and yoghurt—and prebiotic plant fibres measurably lower perceived stress and cortisol levels within four weeks.\nNone of this means that severe clinical depression can be cured with a bowl of sauerkraut alone. Responsible psychiatrists therefore (49)__________ nutritional interventions as an adjunct to, rather than a replacement for, psychotherapy and medication. Our internal ecosystem, in short, is not a passive passenger digesting our lunch, but a vocal biochemical partner whose health is (50)__________ bound up with our mental (51)__________ and emotional (52)__________.\n<i>(Adapted from J. F. Cryan & T. G. Dinan, The Psychobiotic Revolution, and Nature Reviews Neuroscience)</i>"
      },
      {
        "origNum": 44,
        "instruction": INS_2,
        "text": "",
        "options": [
          "grapples",
          "crumples",
          "cripples",
          "couples"
        ],
        "answer": 3,
        "explanation": "couple A to B = kết nối chặt chẽ A với B."
      },
      {
        "origNum": 45,
        "instruction": INS_2,
        "text": "",
        "options": [
          "falsify",
          "fortify",
          "mortify",
          "nullify"
        ],
        "answer": 1,
        "explanation": "fortify (the integrity of...) = củng cố, làm vững chắc hàng rào máu não."
      },
      {
        "origNum": 46,
        "instruction": INS_2,
        "text": "",
        "options": [
          "epithets",
          "epilogues",
          "epitaphs",
          "episodes"
        ],
        "answer": 3,
        "explanation": "depressive episodes = các đợt/cơn trầm cảm."
      },
      {
        "origNum": 47,
        "instruction": INS_2,
        "text": "",
        "options": [
          "restrain",
          "restore",
          "restrict",
          "resign"
        ],
        "answer": 1,
        "explanation": "restore one’s composure = khôi phục lại sự bình tĩnh."
      },
      {
        "origNum": 48,
        "instruction": INS_2,
        "text": "",
        "options": [
          "So that",
          "Provided that",
          "On condition that",
          "Granted that"
        ],
        "answer": 3,
        "explanation": "Granted that + mệnh đề = Dẫu biết rằng / Mặc dù thừa nhận rằng."
      },
      {
        "origNum": 49,
        "instruction": INS_2,
        "text": "",
        "options": [
          "flame",
          "frame",
          "blame",
          "shame"
        ],
        "answer": 1,
        "explanation": "frame A as B = định khung/xem A như là một liệu pháp bổ trợ."
      },
      {
        "origNum": 50,
        "instruction": INS_2,
        "text": "",
        "options": [
          "indifferently",
          "inexplicably",
          "inadvertently",
          "inextricably"
        ],
        "answer": 3,
        "explanation": "inextricably bound up with = gắn kết chặt chẽ không thể tách rời với."
      },
      {
        "origNum": 51,
        "instruction": INS_2,
        "text": "",
        "options": [
          "ambiguity",
          "acuity",
          "antiquity",
          "annuity"
        ],
        "answer": 1,
        "explanation": "mental acuity = sự minh mẫn, sắc bén về tinh thần."
      },
      {
        "origNum": 52,
        "instruction": INS_2,
        "text": "",
        "options": [
          "equivocation",
          "equator",
          "equivalence",
          "equilibrium"
        ],
        "answer": 3,
        "explanation": "emotional equilibrium = sự cân bằng cảm xúc."
      }
    ],
    "7": [
      {
        "origNum": 43,
        "instruction": INS_2,
        "text": "",
        "options": [
          "discounted",
          "mounted",
          "accounted",
          "recounted"
        ],
        "answer": 2,
        "explanation": "account for + tỉ lệ = chiếm (khoảng 90% thương mại hàng hóa toàn cầu).",
        "passage": "<b>WIND-ASSISTED PROPULSION: SAILS RETURN TO CARGO SHIPS</b>\nSince steamships eclipsed clipper schooners in the late nineteenth century, ocean-going merchant vessels have relied almost exclusively on fossil fuels. Today, vast container ships, bulk carriers and oil tankers (43)__________ for roughly 90 percent of world trade by volume—and nearly three percent of global carbon-dioxide emissions, burning millions of tonnes of heavy bunker fuel each year. Because transoceanic ships cannot easily run on battery packs, and green hydrogen or ammonia fuels remain expensive and scarce, naval architects are turning back to the oldest free energy source at sea: the wind, (44)__________ with twenty-first-century aerodynamics.\nModern wind-assisted ships bear little resemblance to nineteenth-century square-riggers requiring dozens of sailors to climb icy rigging. Instead, engineers are retrofitting bulk carriers with ‘Flettner rotors’—tall, spinning vertical cylinders rising thirty metres above the deck. When wind blows across a spinning cylinder, the Magnus effect creates a pressure differential that pulls the ship forward at right angles to the breeze. Other vessels deploy rigid, folding carbon-fibre ‘wingsails’ or giant automated parafoil kites that fly hundreds of metres ahead of the bow to (45)__________ high-altitude winds.\nOnboard computers continuously analyse weather-routing satellite data and adjust rotor speeds or wing angles automatically, without requiring a single extra crew member. Sea trials on trans-Pacific and Atlantic routes have shown that wind propulsion allows captains to (46)__________ back the main diesel engine while maintaining schedule speed, cutting fuel burn by 8 to 25 percent on existing hulls and up to 40 percent on purpose-built ships. (47)__________ bunker fuel costs hundreds of dollars a tonne, those fuel savings can pay back the installation cost within five to seven years.\nRegulatory tailwinds are also (48)__________ adoption. In 2023, the International Maritime Organization pledged to reach net-zero greenhouse-gas emissions from shipping by or around 2050, while the European Union brought maritime emissions into its carbon-pricing market. Wind propulsion will not (49)__________ marine engines entirely—ships still need propellers for harbour manoeuvring and calm doldrums—but by (50)__________ clean aerodynamic thrust with future green fuels, high-tech sails are helping global shipping chart a (51)__________ course toward a zero-carbon (52)__________.\n<i>(Adapted from International Maritime Organization Briefings and The Economist)</i>"
      },
      {
        "origNum": 44,
        "instruction": INS_2,
        "text": "",
        "options": [
          "reimagined",
          "relinquished",
          "reprimanded",
          "repudiated"
        ],
        "answer": 0,
        "explanation": "reimagined with 21st-century aerodynamics = được tái định hình bằng khí động học thế kỷ 21."
      },
      {
        "origNum": 45,
        "instruction": INS_2,
        "text": "",
        "options": [
          "harrow",
          "harass",
          "harness",
          "hazard"
        ],
        "answer": 2,
        "explanation": "harness (winds/energy) = khai thác, tận dụng sức gió ở tầm cao."
      },
      {
        "origNum": 46,
        "instruction": INS_2,
        "text": "",
        "options": [
          "throttle",
          "topple",
          "trickle",
          "tumble"
        ],
        "answer": 0,
        "explanation": "throttle back (the engine) = giảm ga/giảm công suất động cơ chính."
      },
      {
        "origNum": 47,
        "instruction": INS_2,
        "text": "",
        "options": [
          "Despite that",
          "Except that",
          "Given that",
          "Unless"
        ],
        "answer": 2,
        "explanation": "Given that + mệnh đề = Xét tới việc / Vì nhiên liệu tàu biển đắt hàng trăm đô la mỗi tấn."
      },
      {
        "origNum": 48,
        "instruction": INS_2,
        "text": "",
        "options": [
          "catalysing",
          "catapulting",
          "categorising",
          "castigating"
        ],
        "answer": 0,
        "explanation": "catalyse adoption = xúc tác, thúc đẩy nhanh việc áp dụng."
      },
      {
        "origNum": 49,
        "instruction": INS_2,
        "text": "",
        "options": [
          "oscillate",
          "officiate",
          "obviate",
          "obligate"
        ],
        "answer": 2,
        "explanation": "obviate (marine engines) = loại bỏ hoàn toàn nhu cầu dùng động cơ tàu biển."
      },
      {
        "origNum": 50,
        "instruction": INS_2,
        "text": "",
        "options": [
          "marrying",
          "marring",
          "mooring",
          "muting"
        ],
        "answer": 0,
        "explanation": "marry A with B = kết hợp nhuần nhuyễn lực đẩy khí động học với nhiên liệu xanh."
      },
      {
        "origNum": 51,
        "instruction": INS_2,
        "text": "",
        "options": [
          "vulnerable",
          "volatile",
          "viable",
          "vacant"
        ],
        "answer": 2,
        "explanation": "chart a viable course = vạch ra một hải trình/lộ trình khả thi."
      },
      {
        "origNum": 52,
        "instruction": INS_2,
        "text": "",
        "options": [
          "horizon",
          "pavilion",
          "criterion",
          "skeleton"
        ],
        "answer": 0,
        "explanation": "horizon = chân trời/tương lai không phát thải carbon."
      }
    ],
    "8": [
      {
        "origNum": 43,
        "instruction": INS_2,
        "text": "",
        "options": [
          "exempted",
          "enacted",
          "extracted",
          "exacted"
        ],
        "answer": 3,
        "explanation": "exact a heavy toll on... = gây ra tổn thất nặng nề cho hệ sinh thái.",
        "passage": "<b>DE-EXTINCTION AND CONSERVATION GENETICS: PROMISE OR DISTRACTION?</b>\nSince the passenger pigeon and the Tasmanian thylacine vanished in the early twentieth century, extinction has been understood as an irreversible biological finality. Advances in ancient-DNA sequencing, somatic-cell nuclear transfer and multiplex CRISPR gene editing, however, have emboldened biotech start-ups to announce ambitious projects to ‘de-extinct’ vanished icons—most famously by editing Asian elephant embryos to express the cold-adapted traits of the woolly mammoth. While such headlines capture public imagination, conservation biologists are deeply divided over whether genetic resurrection will (43)__________ a toll on—or rescue—living endangered species.\nProponents of ‘genetic rescue’ point out that the tools developed for de-extinction already have urgent, practical applications for species teetering on the (44)__________ today. In the United States, biologists successfully cloned a black-footed ferret—one of North America’s most endangered mammals—from cells frozen in liquid nitrogen in 1988, injecting lost genetic diversity back into a population descended from just seven founders. Similar biobanking efforts could one day restore disease resistance to amphibians (45)__________ by chytrid fungus or save the northern white rhinoceros, of which only two infertile females remain.\nCritics, (46)__________, warn of a dangerous moral hazard. Producing a mammoth-elephant hybrid in a laboratory does not recreate a mammoth herd’s learned social culture, nor does it restore the Pleistocene steppe ecosystem in which the animals evolved. Worse still, if lawmakers and philanthropists believe that extinction is merely a temporary technical glitch that geneticists can undo later, political will to protect intact rainforests and coral reefs could (47)__________.\nEcological economists have also calculated the opportunity cost: the millions of dollars required to maintain a single proxy-species breeding programme could (48)__________ conservation rangers across five times as many existing extant species. Technology, conservation geneticists conclude, should be deployed judiciously to (49)__________ genetically bottlenecked wild populations rather than chasing theatrical spectacles. Preventing a living species from slipping over the (50)__________ in the first place remains infinitely wiser—and cheaper—than trying to (51)__________ its ghost from a freezer decades after its habitat has been (52)__________.\n<i>(Adapted from IUCN SSC Guiding Principles on Creating Proxies of Extinct Species and Science)</i>"
      },
      {
        "origNum": 44,
        "instruction": INS_2,
        "text": "",
        "options": [
          "blink",
          "brink",
          "rink",
          "link"
        ],
        "answer": 1,
        "explanation": "teeter on the brink (of extinction) = chênh vênh bên bờ vực tuyệt chủng."
      },
      {
        "origNum": 45,
        "instruction": INS_2,
        "text": "",
        "options": [
          "delegated",
          "decorated",
          "dedicated",
          "decimated"
        ],
        "answer": 3,
        "explanation": "decimated by chytrid fungus = bị tàn sát/suy giảm số lượng nghiêm trọng bởi nấm chytrid."
      },
      {
        "origNum": 46,
        "instruction": INS_2,
        "text": "",
        "options": [
          "consequently",
          "conversely",
          "accordingly",
          "likewise"
        ],
        "answer": 1,
        "explanation": "“conversely” / “however” = ngược lại (đối lập với quan điểm của những người ủng hộ ở đoạn 2)."
      },
      {
        "origNum": 47,
        "instruction": INS_2,
        "text": "",
        "options": [
          "quiver",
          "savour",
          "favour",
          "waver"
        ],
        "answer": 3,
        "explanation": "waver = lung lay, suy giảm (quyết tâm chính trị bảo vệ rừng và rạn san hô)."
      },
      {
        "origNum": 48,
        "instruction": INS_2,
        "text": "",
        "options": [
          "undermine",
          "underwrite",
          "undertake",
          "understate"
        ],
        "answer": 1,
        "explanation": "underwrite = tài trợ kinh phí cho."
      },
      {
        "origNum": 49,
        "instruction": INS_2,
        "text": "",
        "options": [
          "shoring up",
          "shores up",
          "shored up",
          "shore up"
        ],
        "answer": 3,
        "explanation": "to + V nguyên thể: to shore up = củng cố, vực dậy các quần thể hoang dã bị suy giảm di truyền."
      },
      {
        "origNum": 50,
        "instruction": INS_2,
        "text": "",
        "options": [
          "prejudice",
          "precipice",
          "premise",
          "preface"
        ],
        "answer": 1,
        "explanation": "slip over the precipice = trượt qua bờ vực thẳm (tuyệt chủng)."
      },
      {
        "origNum": 51,
        "instruction": INS_2,
        "text": "",
        "options": [
          "confide",
          "concur",
          "confer",
          "conjure"
        ],
        "answer": 3,
        "explanation": "conjure (its ghost) = gọi hồn/tái tạo lại bóng hình của loài đã mất."
      },
      {
        "origNum": 52,
        "instruction": INS_2,
        "text": "",
        "options": [
          "talked over",
          "paved over",
          "won over",
          "handed over"
        ],
        "answer": 1,
        "explanation": "pave over (a habitat) = bê tông hóa/san phẳng sinh cảnh tự nhiên."
      }
    ],
    "9": [
      {
        "origNum": 43,
        "instruction": INS_2,
        "text": "",
        "options": [
          "indispensable",
          "indifferent",
          "indignant",
          "indistinct"
        ],
        "answer": 0,
        "explanation": "indispensable = không thể thiếu được.",
        "passage": "<b>DESALINATION AND THE BRINE DILEMMA</b>\nIn hyper-arid coastal nations from the Persian Gulf to Chile and Australia, reverse-osmosis desalination plants have become (43)__________ lifelines, turning salty seawater into fresh municipal drinking supplies for over 300 million people. Inside a modern plant, high-pressure pumps force seawater through semi-permeable polymer membranes whose microscopic pores block salt ions while allowing pure water molecules to pass. Over the past thirty years, energy-recovery turbines have halved the electricity needed per cubic metre, making desalinated water a (44)__________ buffer against multi-year megadroughts.\nYet every litre of fresh drinking water squeezed from the ocean leaves behind an often-overlooked byproduct: roughly 1.5 litres of hyper-saline concentrate known as brine. Globally, some 16,000 desalination plants (45)__________ more than 140 million cubic metres of brine every single day—enough to cover the entire state of Florida in thirty centimetres of sludge each year. Most coastal facilities simply pipe this dense, salty effluent straight back into the sea, where it (46)__________ to the seabed rather than mixing with surface currents.\nBecause the discharged brine is up to twice as salty as natural seawater and frequently contains residual anti-scaling chemicals and trace heavy metals, it can (47)__________ benthic marine life. Across poorly flushed bays in the Mediterranean and the Red Sea, hyper-saline plumes deplete dissolved oxygen on the ocean floor, bleaching Posidonia seagrass meadows and driving away juvenile fish. (48)__________ countries expand desalination capacity to meet population growth, marine ecologists warn that unchecked brine dumping could turn coastal waters into biological deserts.\nEncouragingly, chemical engineers are beginning to reframe brine from a toxic waste stream into a mineral (49)__________. ‘Zero-liquid-discharge’ pilot plants in Spain, Saudi Arabia and California use solar evaporation ponds and electrodialysis to extract commercial-grade sodium hydroxide, magnesium, gypsum for drywall, and even battery-grade lithium from concentrated brine before returning clean water to the system. Pairing multi-port diffuser nozzles—which dilute effluent rapidly in strong offshore currents—with brine-mining technology will be vital to ensure that quenching humanity’s (50)__________ on land does not (51)__________ the ecosystems beneath the (52)__________.\n<i>(Adapted from E. Jones et al., Science of the Total Environment, and UN University Reports)</i>"
      },
      {
        "origNum": 44,
        "instruction": INS_2,
        "text": "",
        "options": [
          "deplorable",
          "dispensable",
          "dependable",
          "negligible"
        ],
        "answer": 2,
        "explanation": "dependable = đáng tin cậy (tấm đệm đáng tin cậy trước hạn hán kéo dài)."
      },
      {
        "origNum": 45,
        "instruction": INS_2,
        "text": "",
        "options": [
          "generate",
          "germinate",
          "gravitate",
          "venerate"
        ],
        "answer": 0,
        "explanation": "generate (140 million cubic metres of brine) = tạo ra, thải ra."
      },
      {
        "origNum": 46,
        "instruction": INS_2,
        "text": "",
        "options": [
          "soars",
          "floats",
          "sinks",
          "drifts"
        ],
        "answer": 2,
        "explanation": "sink to the seabed = chìm xuống đáy biển (do nước muối đậm đặc nặng hơn nước biển thường)."
      },
      {
        "origNum": 47,
        "instruction": INS_2,
        "text": "",
        "options": [
          "asphyxiate",
          "ameliorate",
          "authenticate",
          "accommodate"
        ],
        "answer": 0,
        "explanation": "asphyxiate / suffocate = làm ngạt thở sinh vật đáy biển do thiếu oxy hòa tan."
      },
      {
        "origNum": 48,
        "instruction": INS_2,
        "text": "",
        "options": [
          "Although",
          "Unless",
          "As",
          "Lest"
        ],
        "answer": 2,
        "explanation": "As + mệnh đề = Khi các quốc gia mở rộng công suất khử mặn..."
      },
      {
        "origNum": 49,
        "instruction": INS_2,
        "text": "",
        "options": [
          "feedstock",
          "livestock",
          "laughingstock",
          "rollingstock"
        ],
        "answer": 0,
        "explanation": "mineral feedstock = nguồn nguyên liệu khoáng sản đầu vào."
      },
      {
        "origNum": 50,
        "instruction": INS_2,
        "text": "",
        "options": [
          "greed",
          "hunger",
          "thirst",
          "curiosity"
        ],
        "answer": 2,
        "explanation": "quench humanity’s thirst = giải cơn khát nước ngọt của nhân loại."
      },
      {
        "origNum": 51,
        "instruction": INS_2,
        "text": "",
        "options": [
          "pickle",
          "tickle",
          "trickle",
          "fickle"
        ],
        "answer": 0,
        "explanation": "pickle (ẩn dụ khoa học phổ biến trong các bài báo về brine: ngâm mặn/làm chết mặn hệ sinh thái dưới đáy biển)."
      },
      {
        "origNum": 52,
        "instruction": INS_2,
        "text": "",
        "options": [
          "dunes",
          "clouds",
          "waves",
          "peaks"
        ],
        "answer": 2,
        "explanation": "beneath the waves = dưới lòng đại dương."
      }
    ],
    "10": [
      {
        "origNum": 43,
        "instruction": INS_2,
        "text": "",
        "options": [
          "diluted",
          "dictated",
          "diverted",
          "disputed"
        ],
        "answer": 1,
        "explanation": "dictate (the acoustic design) = quyết định, chi phối thiết kế âm học.",
        "passage": "<b>ARCHITECTURAL ACOUSTICS: THE SCIENCE OF GREAT CONCERT HALLS</b>\nWhen the Boston Symphony Hall opened in October 1900, it was the first auditorium in history whose proportions had been calculated by mathematical physics rather than trial and error. Prior to the work of Harvard physicist Wallace Clement Sabine, architects designing opera houses and symphony halls relied on guesswork and superstition, sometimes stringing copper wires across ceilings in the vain hope of curing echoes. Sabine discovered that a room’s ‘reverberation time’—the number of seconds it takes for a loud organ chord to fade into silence—is (43)__________ directly by the room’s cubic volume and the sound-absorbing properties of its surfaces.\nFor a Romantic orchestral score by Brahms or Mahler to sound warm and enveloping, a concert hall needs a reverberation time of roughly 1.8 to 2.2 seconds. If the walls are covered in plush velvet curtains and thick carpet, sound energy is (44)__________ too quickly, leaving violins sounding thin, dry and lifeless. (45)__________, in a cavernous glass-and-concrete arena with a four-second echo, rapid woodwind passages blur into an unintelligible muddle. Classic nineteenth-century ‘shoebox’ halls—such as Vienna’s Musikverein and Amsterdam’s Concertgebouw—strike the ideal balance because their high coffered ceilings and narrow parallel side walls bounce early lateral reflections toward the listener’s ears from both sides, creating a sense of acoustic (46)__________.\nEven the audience itself is a major acoustic variable. Because winter overcoats and woollen jumpers absorb far more mid-frequency sound than bare wooden seats, concert-hall designers upholster chairs with precisely calibrated foam pads that (47)__________ the acoustic absorption of a seated human body, ensuring that rehearsals in an empty hall sound identical to a sold-out evening performance. In recent decades, pioneers such as Yasuhisa Toyota have introduced ‘vineyard-style’ terraced seating—as seen in Hamburg’s Elbphilharmonie—where the orchestra sits in the centre and audience balconies (48)__________ upward around them like sloped vineyards.\nBefore a single concrete foundation is poured today, acousticians build one-tenth-scale wooden models filled with dry nitrogen gas and test them with high-frequency sparks, alongside computer ray-tracing simulations. Yet acoustic perfection remains an elusive art as much as a science. A hall that flatters a solo harpsichord may (49)__________ a ninety-piece symphony orchestra, prompting modern venues to install motorised overhead canopies and rotatable wall panels that can (50)__________ the room’s volume between concerts. Great architectural acoustics, in short, turns the entire building into a resonant wooden (51)__________ in which every listener sits inside the music rather than merely (52)__________ it from afar.\n<i>(Adapted from Leo Beranek, Concert Halls and Opera Houses, and Physics Today)</i>"
      },
      {
        "origNum": 44,
        "instruction": INS_2,
        "text": "",
        "options": [
          "dominated",
          "disseminated",
          "designated",
          "dissipated"
        ],
        "answer": 3,
        "explanation": "dissipate (sound energy) = tiêu tán, hấp thụ mất năng lượng âm thanh quá nhanh."
      },
      {
        "origNum": 45,
        "instruction": INS_2,
        "text": "",
        "options": [
          "Consequently",
          "Conversely",
          "Accordingly",
          "Similarly"
        ],
        "answer": 1,
        "explanation": "“Conversely” = ngược lại (đối lập giữa phòng quá khô mất âm vang và nhà thi đấu bê tông vang tới 4 giây làm nhòe âm)."
      },
      {
        "origNum": 46,
        "instruction": INS_2,
        "text": "",
        "options": [
          "insolvency",
          "intricacy",
          "infancy",
          "intimacy"
        ],
        "answer": 3,
        "explanation": "acoustic intimacy = độ gần gũi, bao bọc về mặt âm học."
      },
      {
        "origNum": 47,
        "instruction": INS_2,
        "text": "",
        "options": [
          "malign",
          "mimic",
          "muddle",
          "muffle"
        ],
        "answer": 1,
        "explanation": "mimic (the acoustic absorption of a seated human body) = mô phỏng độ hấp thụ âm của cơ thể người đang ngồi."
      },
      {
        "origNum": 48,
        "instruction": INS_2,
        "text": "",
        "options": [
          "blockade",
          "crusade",
          "charade",
          "cascade"
        ],
        "answer": 3,
        "explanation": "cascade / tier upward = xếp tầng nhấp nhô quanh dàn nhạc như ruộng nho trên sườn đồi."
      },
      {
        "origNum": 49,
        "instruction": INS_2,
        "text": "",
        "options": [
          "oversee",
          "overwhelm",
          "overlook",
          "overtake"
        ],
        "answer": 1,
        "explanation": "overwhelm = làm quá tải âm thanh đối với một dàn nhạc giao hưởng 90 người."
      },
      {
        "origNum": 50,
        "instruction": INS_2,
        "text": "",
        "options": [
          "taper",
          "tether",
          "tamper",
          "tailor"
        ],
        "answer": 3,
        "explanation": "tailor (the room’s volume) = tinh chỉnh thể tích/độ vang của khán phòng cho phù hợp từng buổi diễn."
      },
      {
        "origNum": 51,
        "instruction": INS_2,
        "text": "",
        "options": [
          "implement",
          "instrument",
          "ornament",
          "monument"
        ],
        "answer": 1,
        "explanation": "a resonant wooden instrument = biến cả tòa nhà thành một nhạc cụ bằng gỗ cộng hưởng."
      },
      {
        "origNum": 52,
        "instruction": INS_2,
        "text": "",
        "options": [
          "withstanding",
          "withering",
          "withholding",
          "witnessing"
        ],
        "answer": 3,
        "explanation": "witnessing / observing it from afar = chỉ đứng quan sát từ xa."
      }
    ]
  }
};

// ---- Nhóm "6" (đủ 37 câu: Câu 16–52) = nhóm 1 + 2 + 3 + 4 + 5 nối lại; không lặp lại dữ liệu ----
  const db = window.examDatabase['lexico'];
  db["6"] = {};
  for (let e = 1; e <= 10; e++) {
    db["6"][e] = [].concat(db["1"][e], db["2"][e], db["3"][e], db["4"][e], db["5"][e])
      .map(q => JSON.parse(JSON.stringify(q))); // bản sao độc lập, sửa/đảo câu không ảnh hưởng nhóm gốc
  }
})();