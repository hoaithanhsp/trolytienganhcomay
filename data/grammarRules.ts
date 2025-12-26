export const GRAMMAR_RULES = {
  "database_info": {
    "name": "English Grammar Rules Database",
    "version": "1.0.0",
    "last_updated": "2025-01-26",
    "target_audience": "Vietnamese students grades 6-12",
    "total_topics": 25
  },
  
  "tenses": [
    {
      "id": "present_simple",
      "name": "Present Simple",
      "vietnamese_name": "Thì Hiện Tại Đơn",
      "level": "Basic",
      "formulas": {
        "affirmative": {
          "structure": "S + V(s/es)",
          "examples": [
            "I work in Ha Noi.",
            "She studies English every day.",
            "They play football on weekends."
          ]
        },
        "negative": {
          "structure": "S + do/does + not + V (infinitive)",
          "examples": [
            "I don't work in Ha Noi.",
            "She doesn't study English every day.",
            "They don't play football on weekends."
          ]
        },
        "question": {
          "structure": "Do/Does + S + V (infinitive)?",
          "examples": [
            "Do you work in Ha Noi?",
            "Does she study English every day?",
            "Do they play football on weekends?"
          ]
        }
      },
      "usage": [
        {
          "case": "Thói quen, hành động lặp đi lặp lại",
          "vietnamese": "Diễn tả những việc làm thường xuyên, thói quen hằng ngày",
          "examples": [
            {
              "english": "I brush my teeth twice a day.",
              "vietnamese": "Tôi đánh răng hai lần một ngày.",
              "note": "Thói quen hằng ngày"
            }
          ]
        },
        {
          "case": "Sự thật hiển nhiên, chân lý",
          "vietnamese": "Những điều luôn đúng, không thay đổi",
          "examples": [
            {
              "english": "The sun rises in the east.",
              "vietnamese": "Mặt trời mọc ở hướng đông.",
              "note": "Chân lý tự nhiên"
            },
            {
              "english": "Water boils at 100°C.",
              "vietnamese": "Nước sôi ở 100°C.",
              "note": "Sự thật khoa học"
            }
          ]
        },
        {
          "case": "Lịch trình, thời gian biểu cố định",
          "vietnamese": "Lịch tàu, xe, máy bay, lịch học, lịch chiếu phim...",
          "examples": [
            {
              "english": "The train leaves at 8 AM tomorrow.",
              "vietnamese": "Tàu khởi hành lúc 8 giờ sáng mai.",
              "note": "Lịch trình cố định"
            }
          ]
        }
      ],
      "time_markers": [
        "always",
        "usually",
        "often",
        "sometimes",
        "rarely",
        "seldom",
        "never",
        "every day/week/month/year",
        "once/twice a week",
        "on Mondays",
        "in the morning/afternoon/evening"
      ],
      "common_mistakes": [
        {
          "wrong": "She go to school every day.",
          "correct": "She goes to school every day.",
          "explanation": "Quên thêm 's' với chủ ngữ ngôi thứ 3 số ít",
          "vietnamese": "Với chủ ngữ là she/he/it phải thêm s/es vào động từ"
        },
        {
          "wrong": "I am work in Ha Noi.",
          "correct": "I work in Ha Noi.",
          "explanation": "Không dùng 'be' với động từ thường ở thì hiện tại đơn",
          "vietnamese": "Chỉ dùng 'am/is/are' khi không có động từ thường"
        }
      ]
    },
    
    {
      "id": "present_continuous",
      "name": "Present Continuous",
      "vietnamese_name": "Thì Hiện Tại Tiếp Diễn",
      "level": "Basic",
      "formulas": {
        "affirmative": {
          "structure": "S + am/is/are + V-ing",
          "examples": [
            "I am reading a book now.",
            "She is cooking dinner.",
            "They are playing basketball."
          ]
        },
        "negative": {
          "structure": "S + am/is/are + not + V-ing",
          "examples": [
            "I am not reading a book now.",
            "She is not (isn't) cooking dinner.",
            "They are not (aren't) playing basketball."
          ]
        },
        "question": {
          "structure": "Am/Is/Are + S + V-ing?",
          "examples": [
            "Are you reading a book now?",
            "Is she cooking dinner?",
            "Are they playing basketball?"
          ]
        }
      },
      "usage": [
        {
          "case": "Hành động đang xảy ra tại thời điểm nói",
          "vietnamese": "Việc đang làm ngay lúc này",
          "examples": [
            {
              "english": "I am studying English now.",
              "vietnamese": "Tôi đang học tiếng Anh bây giờ.",
              "note": "Hành động đang diễn ra"
            }
          ]
        },
        {
          "case": "Kế hoạch trong tương lai gần đã được sắp xếp",
          "vietnamese": "Dự định chắc chắn sẽ xảy ra",
          "examples": [
            {
              "english": "I am meeting my friend tomorrow.",
              "vietnamese": "Tôi sẽ gặp bạn tôi vào ngày mai.",
              "note": "Kế hoạch đã sắp xếp sẵn"
            }
          ]
        }
      ],
      "time_markers": [
        "now",
        "right now",
        "at the moment",
        "at present",
        "Look!",
        "Listen!",
        "Be quiet!"
      ],
      "common_mistakes": [
        {
          "wrong": "I am study English now.",
          "correct": "I am studying English now.",
          "explanation": "Quên thêm -ing vào động từ",
          "vietnamese": "Động từ phải ở dạng V-ing"
        },
        {
          "wrong": "She is play tennis.",
          "correct": "She is playing tennis.",
          "explanation": "Động từ chưa thêm -ing",
          "vietnamese": "Phải dùng 'playing' không phải 'play'"
        }
      ]
    },

    {
      "id": "present_perfect",
      "name": "Present Perfect",
      "vietnamese_name": "Thì Hiện Tại Hoàn Thành",
      "level": "Intermediate",
      "formulas": {
        "affirmative": {
          "structure": "S + have/has + V3/V-ed",
          "examples": [
            "I have finished my homework.",
            "She has lived here for 5 years."
          ]
        },
        "negative": {
          "structure": "S + have/has + not + V3/V-ed",
          "examples": [
            "I have not (haven't) finished my homework.",
            "She has not (hasn't) lived here for 5 years."
          ]
        },
        "question": {
          "structure": "Have/Has + S + V3/V-ed?",
          "examples": [
            "Have you finished your homework?",
            "Has she lived here for 5 years?"
          ]
        }
      },
      "usage": [
        {
          "case": "Hành động đã xảy ra nhưng không rõ thời gian",
          "vietnamese": "Đã từng làm gì đó (nhưng không nói khi nào)",
          "examples": [
            {
              "english": "I have been to Japan.",
              "vietnamese": "Tôi đã từng đến Nhật Bản.",
              "note": "Không nói rõ đi khi nào"
            }
          ]
        },
        {
          "case": "Hành động bắt đầu trong quá khứ, kéo dài đến hiện tại",
          "vietnamese": "Việc đã bắt đầu và vẫn còn tiếp tục",
          "examples": [
            {
              "english": "She has lived in Ha Noi for 10 years.",
              "vietnamese": "Cô ấy đã sống ở Hà Nội được 10 năm (và vẫn đang sống).",
              "note": "Bắt đầu trước đây và vẫn tiếp tục"
            }
          ]
        },
        {
          "case": "Kinh nghiệm, trải nghiệm trong đời",
          "vietnamese": "Đã từng làm bao nhiêu lần",
          "examples": [
            {
              "english": "I have seen this movie three times.",
              "vietnamese": "Tôi đã xem bộ phim này 3 lần.",
              "note": "Kinh nghiệm cá nhân"
            }
          ]
        }
      ],
      "time_markers": [
        "just",
        "already",
        "yet",
        "ever",
        "never",
        "recently",
        "so far",
        "for + khoảng thời gian",
        "since + mốc thời gian"
      ],
      "common_mistakes": [
        {
          "wrong": "I have seen this movie yesterday.",
          "correct": "I saw this movie yesterday.",
          "explanation": "Không dùng Present Perfect với thời gian cụ thể trong quá khứ",
          "vietnamese": "Có 'yesterday' phải dùng quá khứ đơn"
        },
        {
          "wrong": "She has lived here since 5 years.",
          "correct": "She has lived here for 5 years.",
          "explanation": "For + khoảng thời gian, Since + mốc thời gian",
          "vietnamese": "'5 years' là khoảng thời gian nên dùng 'for'"
        }
      ]
    },

    {
      "id": "past_simple",
      "name": "Past Simple",
      "vietnamese_name": "Thì Quá Khứ Đơn",
      "level": "Basic",
      "formulas": {
        "affirmative": {
          "structure": "S + V2/V-ed",
          "examples": [
            "I went to school yesterday.",
            "She studied English last night."
          ]
        },
        "negative": {
          "structure": "S + did not (didn't) + V (infinitive)",
          "examples": [
            "I didn't go to school yesterday.",
            "She didn't study English last night."
          ]
        },
        "question": {
          "structure": "Did + S + V (infinitive)?",
          "examples": [
            "Did you go to school yesterday?",
            "Did she study English last night?"
          ]
        }
      },
      "usage": [
        {
          "case": "Hành động đã xảy ra và kết thúc trong quá khứ",
          "vietnamese": "Việc đã làm xong trong quá khứ",
          "examples": [
            {
              "english": "I visited Ha Long Bay last summer.",
              "vietnamese": "Tôi đã đi thăm Vịnh Hạ Long mùa hè năm ngoái.",
              "note": "Hành động đã hoàn thành"
            }
          ]
        }
      ],
      "time_markers": [
        "yesterday",
        "last night/week/month/year",
        "ago (2 days ago)",
        "in + năm trong quá khứ"
      ],
      "common_mistakes": [
        {
          "wrong": "I goed to school yesterday.",
          "correct": "I went to school yesterday.",
          "explanation": "'go' là động từ bất quy tắc",
          "vietnamese": "go → went (không phải goed)"
        },
        {
          "wrong": "Did you went to school?",
          "correct": "Did you go to school?",
          "explanation": "Sau 'did' dùng động từ nguyên mẫu",
          "vietnamese": "'Did' đã mang nghĩa quá khứ rồi"
        }
      ]
    },
    {
      "id": "future_simple",
      "name": "Future Simple",
      "vietnamese_name": "Thì Tương Lai Đơn",
      "level": "Basic",
      "formulas": {
        "affirmative": {
          "structure": "S + will + V (infinitive)",
          "examples": [
            "I will go to school tomorrow.",
            "She will help you."
          ]
        },
        "negative": {
          "structure": "S + will not (won't) + V",
          "examples": [
            "I won't go to school tomorrow.",
            "She won't help you."
          ]
        },
        "question": {
          "structure": "Will + S + V?",
          "examples": [
            "Will you go to school tomorrow?",
            "Will she help you?"
          ]
        }
      },
      "usage": [
        {
          "case": "Dự đoán, quyết định tức thời, lời hứa",
          "vietnamese": "Dự đoán, hứa hoặc quyết định ngay lúc nói",
          "examples": [
            {
              "english": "I think it will rain.",
              "vietnamese": "Tôi nghĩ trời sẽ mưa.",
              "note": "Dự đoán"
            },
            {
              "english": "I will help you.",
              "vietnamese": "Tôi sẽ giúp bạn.",
              "note": "Lời hứa"
            }
          ]
        }
      ],
      "time_markers": [
        "tomorrow",
        "next week/month/year",
        "soon",
        "I think...",
        "I promise..."
      ]
    }
  ],

  "conditional_sentences": [
    {
      "type": "Conditional Type 0",
      "vietnamese_name": "Câu Điều Kiện Loại 0",
      "usage": "Sự thật hiển nhiên, chân lý",
      "formula": "If + S + V(s/es), S + V(s/es)",
      "examples": [
        {
          "english": "If you heat ice, it melts.",
          "vietnamese": "Nếu bạn đun nóng băng, nó tan chảy."
        }
      ]
    },
    {
      "type": "Conditional Type 1",
      "vietnamese_name": "Câu Điều Kiện Loại 1",
      "usage": "Điều kiện có thể xảy ra ở hiện tại hoặc tương lai",
      "formula": "If + S + V(s/es), S + will + V",
      "examples": [
        {
          "english": "If it rains, I will stay at home.",
          "vietnamese": "Nếu trời mưa, tôi sẽ ở nhà."
        }
      ]
    },
    {
      "type": "Conditional Type 2",
      "vietnamese_name": "Câu Điều Kiện Loại 2",
      "usage": "Điều kiện không có thật ở hiện tại",
      "formula": "If + S + V2/were, S + would + V",
      "examples": [
        {
          "english": "If I were rich, I would buy a car.",
          "vietnamese": "Nếu tôi giàu, tôi sẽ mua xe hơi."
        }
      ]
    },
    {
      "type": "Conditional Type 3",
      "vietnamese_name": "Câu Điều Kiện Loại 3",
      "usage": "Điều kiện không có thật trong quá khứ",
      "formula": "If + S + had + V3, S + would have + V3",
      "examples": [
        {
          "english": "If I had studied harder, I would have passed the exam.",
          "vietnamese": "Nếu tôi đã học chăm hơn, tôi đã đậu kỳ thi."
        }
      ]
    }
  ],

  "passive_voice": {
    "definition": "Câu bị động - Nhấn mạnh hành động, không quan trọng ai làm",
    "formula": "S + be + V3/V-ed (+ by + O)",
    "tenses": [
      {
        "tense": "Present Simple",
        "active": "S + V(s/es) + O",
        "passive": "S + am/is/are + V3/V-ed",
        "example": {
          "active": "People speak English.",
          "passive": "English is spoken."
        }
      },
      {
        "tense": "Past Simple",
        "active": "S + V2/V-ed + O",
        "passive": "S + was/were + V3",
        "example": {
          "active": "He wrote this book.",
          "passive": "This book was written by him."
        }
      },
      {
        "tense": "Future Simple",
        "active": "S + will + V + O",
        "passive": "S + will + be + V3",
        "example": {
          "active": "They will build a school.",
          "passive": "A school will be built."
        }
      }
    ]
  },

  "reported_speech": {
    "definition": "Câu gián tiếp - Thuật lại lời nói của người khác",
    "basic_rules": [
      {
        "rule": "Lùi thì (Tense backshift)",
        "explanation": "Động từ trong câu gián tiếp thường lùi về quá khứ",
        "examples": [
          {"direct": "Present Simple", "reported": "Past Simple"},
          {"direct": "Present Perfect", "reported": "Past Perfect"},
          {"direct": "Past Simple", "reported": "Past Perfect"},
          {"direct": "Will", "reported": "Would"}
        ]
      }
    ]
  },

  "comparisons": {
    "equality": {
      "structure": "as + adj/adv + as",
      "examples": [
        {
          "english": "She is as tall as her brother.",
          "vietnamese": "Cô ấy cao bằng anh trai cô ấy."
        }
      ]
    },
    "comparative": {
      "short_adjectives": {
        "structure": "adj + -er + than",
        "examples": ["bigger than", "taller than"]
      },
      "long_adjectives": {
        "structure": "more + adj + than",
        "examples": ["more beautiful than", "more intelligent than"]
      }
    },
    "superlative": {
      "short_adjectives": {
        "structure": "the + adj + -est",
        "examples": ["the biggest", "the tallest"]
      },
      "long_adjectives": {
        "structure": "the most + adj",
        "examples": ["the most beautiful", "the most intelligent"]
      }
    }
  },

  "modal_verbs": [
    {
      "modal": "can/could",
      "meanings": [
        { "meaning": "Khả năng", "example": "I can swim." },
        { "meaning": "Xin phép/Đề nghị", "example": "Could you help me?" }
      ]
    },
    {
      "modal": "must",
      "meanings": [
        { "meaning": "Bắt buộc", "example": "You must study." },
        { "meaning": "Suy đoán chắc chắn", "example": "He must be tired." }
      ]
    },
    {
      "modal": "should",
      "meanings": [
        { "meaning": "Lời khuyên", "example": "You should sleep early." }
      ]
    }
  ]
};