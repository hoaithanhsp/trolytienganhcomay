export const GRAMMAR_RULES = {
  "database_info": {
    "name": "English Grammar Rules Database",
    "version": "2.1.0",
    "last_updated": "2025-01-26",
    "target_audience": "Vietnamese students grades 6-12",
    "total_topics": 25
  },
  
  "tenses": [
    {
      "id": "present_simple",
      "name_vi": "Thì Hiện Tại Đơn",
      "name_en": "Present Simple",
      "level": "A1",
      "formula": {
        "positive": "S + V(s/es)",
        "negative": "S + do/does + not + V (infinitive)",
        "question": "Do/Does + S + V (infinitive)?"
      },
      "usage": [
        {
          "description": "Thói quen, hành động lặp đi lặp lại",
          "examples": [
            "I brush my teeth twice a day. (Tôi đánh răng hai lần một ngày.)",
            "She drinks coffee every morning. (Cô ấy uống cà phê mỗi sáng.)"
          ]
        },
        {
          "description": "Sự thật hiển nhiên, chân lý",
          "examples": [
            "The sun rises in the east. (Mặt trời mọc ở hướng đông.)",
            "Water boils at 100 degrees Celsius. (Nước sôi ở 100 độ C.)"
          ]
        },
        {
          "description": "Lịch trình, thời gian biểu cố định",
          "examples": [
            "The train leaves at 8 AM tomorrow. (Tàu khởi hành lúc 8 giờ sáng mai.)",
            "The store opens at 9 AM. (Cửa hàng mở cửa lúc 9 giờ sáng.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "She go to school every day.",
          "correct": "She goes to school every day.",
          "explanation": "Với chủ ngữ là she/he/it phải thêm s/es vào động từ"
        },
        {
          "wrong": "I am work in Ha Noi.",
          "correct": "I work in Ha Noi.",
          "explanation": "Chỉ dùng 'am/is/are' khi không có động từ thường"
        }
      ],
      "signal_words": ["every day", "always", "usually", "often", "sometimes", "rarely", "never", "on Mondays", "in the morning"],
      "notes": "Với chủ ngữ he/she/it, thêm -s/-es vào động từ. Chú ý: have → has, do → does, go → goes"
    },
    {
      "id": "present_continuous",
      "name_vi": "Thì Hiện Tại Tiếp Diễn",
      "name_en": "Present Continuous",
      "level": "A1",
      "formula": {
        "positive": "S + am/is/are + V-ing",
        "negative": "S + am/is/are + not + V-ing",
        "question": "Am/Is/Are + S + V-ing?"
      },
      "usage": [
        {
          "description": "Hành động đang xảy ra tại thời điểm nói",
          "examples": [
            "I am studying English now. (Tôi đang học tiếng Anh bây giờ.)",
            "She is cooking dinner at the moment. (Cô ấy đang nấu bữa tối lúc này.)"
          ]
        },
        {
          "description": "Kế hoạch trong tương lai gần đã được sắp xếp",
          "examples": [
            "I am meeting my friend tomorrow. (Tôi sẽ gặp bạn tôi vào ngày mai.)",
            "They are flying to Paris next week. (Họ sẽ bay đến Paris tuần sau.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "I am study English now.",
          "correct": "I am studying English now.",
          "explanation": "Động từ phải ở dạng V-ing"
        },
        {
          "wrong": "She is play tennis.",
          "correct": "She is playing tennis.",
          "explanation": "Phải dùng 'playing' không phải 'play'"
        }
      ],
      "signal_words": ["now", "at the moment", "at present", "currently", "right now", "Look!", "Listen!"],
      "notes": "Một số động từ không dùng ở thì tiếp diễn: like, love, hate, know, understand, believe, want, need"
    },
    {
      "id": "present_perfect",
      "name_vi": "Thì Hiện Tại Hoàn Thành",
      "name_en": "Present Perfect",
      "level": "A2",
      "formula": {
        "positive": "S + have/has + V3/V-ed",
        "negative": "S + have/has + not + V3/V-ed",
        "question": "Have/Has + S + V3/V-ed?"
      },
      "usage": [
        {
          "description": "Hành động đã xảy ra nhưng không rõ thời gian",
          "examples": [
            "I have been to Japan. (Tôi đã từng đến Nhật Bản.)",
            "She has read that book. (Cô ấy đã đọc cuốn sách đó.)"
          ]
        },
        {
          "description": "Hành động bắt đầu trong quá khứ, kéo dài đến hiện tại",
          "examples": [
            "She has lived in Ha Noi for 10 years. (Cô ấy đã sống ở Hà Nội được 10 năm và vẫn đang sống.)",
            "I have known him since 2015. (Tôi biết anh ấy từ năm 2015.)"
          ]
        },
        {
          "description": "Kinh nghiệm, trải nghiệm trong đời",
          "examples": [
            "I have seen this movie three times. (Tôi đã xem bộ phim này 3 lần.)",
            "Have you ever eaten sushi? (Bạn đã bao giờ ăn sushi chưa?)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "I have seen this movie yesterday.",
          "correct": "I saw this movie yesterday.",
          "explanation": "Có 'yesterday' (thời gian xác định) phải dùng quá khứ đơn"
        },
        {
          "wrong": "She has lived here since 5 years.",
          "correct": "She has lived here for 5 years.",
          "explanation": "'5 years' là khoảng thời gian nên dùng 'for', 'since' dùng với mốc thời gian"
        }
      ],
      "signal_words": ["already", "yet", "just", "ever", "never", "for", "since", "recently", "so far", "up to now"],
      "notes": "For + khoảng thời gian (for 2 years), Since + mốc thời gian (since 2020)"
    },
    {
      "id": "present_perfect_continuous",
      "name_vi": "Thì Hiện Tại Hoàn Thành Tiếp Diễn",
      "name_en": "Present Perfect Continuous",
      "level": "B1",
      "formula": {
        "positive": "S + have/has + been + V-ing",
        "negative": "S + have/has + not + been + V-ing",
        "question": "Have/Has + S + been + V-ing?"
      },
      "usage": [
        {
          "description": "Hành động bắt đầu trong quá khứ, kéo dài đến hiện tại và có thể tiếp tục trong tương lai (nhấn mạnh tính liên tục)",
          "examples": [
            "I have been learning English for 3 years. (Tôi đã học tiếng Anh được 3 năm rồi.)",
            "She has been working here since 2020. (Cô ấy đã làm việc ở đây từ năm 2020.)"
          ]
        },
        {
          "description": "Hành động vừa mới kết thúc, để lại kết quả hoặc dấu hiệu ở hiện tại",
          "examples": [
            "You look tired. Have you been running? (Trông bạn mệt quá. Bạn vừa chạy bộ à?)",
            "The ground is wet. It has been raining. (Mặt đất ướt. Trời vừa mưa xong.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "I have been knowing him for 5 years.",
          "correct": "I have known him for 5 years.",
          "explanation": "Động từ trạng thái (know, like, love) không dùng ở thì tiếp diễn"
        },
        {
          "wrong": "How long are you learning English?",
          "correct": "How long have you been learning English?",
          "explanation": "Hỏi về khoảng thời gian từ quá khứ đến hiện tại dùng Present Perfect Continuous"
        }
      ],
      "signal_words": ["for", "since", "all day", "all week", "how long", "recently", "lately"],
      "notes": "Phân biệt với Present Perfect: Continuous nhấn mạnh quá trình, Perfect nhấn mạnh kết quả"
    },
    {
      "id": "past_simple",
      "name_vi": "Thì Quá Khứ Đơn",
      "name_en": "Past Simple",
      "level": "A1",
      "formula": {
        "positive": "S + V2/V-ed",
        "negative": "S + did not (didn't) + V (infinitive)",
        "question": "Did + S + V (infinitive)?"
      },
      "usage": [
        {
          "description": "Hành động đã xảy ra và kết thúc trong quá khứ",
          "examples": [
            "I visited Ha Long Bay last summer. (Tôi đã đi thăm Vịnh Hạ Long mùa hè năm ngoái.)",
            "She graduated from university in 2020. (Cô ấy tốt nghiệp đại học năm 2020.)"
          ]
        },
        {
          "description": "Chuỗi hành động xảy ra liên tiếp trong quá khứ",
          "examples": [
            "I woke up, brushed my teeth, and had breakfast. (Tôi thức dậy, đánh răng và ăn sáng.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "I goed to school yesterday.",
          "correct": "I went to school yesterday.",
          "explanation": "go → went (động từ bất quy tắc, không phải goed)"
        },
        {
          "wrong": "Did you went to school?",
          "correct": "Did you go to school?",
          "explanation": "'Did' đã mang nghĩa quá khứ rồi, động từ chính phải ở dạng nguyên thể"
        }
      ],
      "signal_words": ["yesterday", "last week/month/year", "ago", "in 2020", "when I was young"],
      "notes": "Học thuộc động từ bất quy tắc. Với câu phủ định và nghi vấn, động từ chính luôn ở dạng nguyên thể"
    },
    {
      "id": "past_continuous",
      "name_vi": "Thì Quá Khứ Tiếp Diễn",
      "name_en": "Past Continuous",
      "level": "A2",
      "formula": {
        "positive": "S + was/were + V-ing",
        "negative": "S + was/were + not + V-ing",
        "question": "Was/Were + S + V-ing?"
      },
      "usage": [
        {
          "description": "Hành động đang xảy ra tại một thời điểm xác định trong quá khứ",
          "examples": [
            "I was studying at 8 PM yesterday. (Tôi đang học lúc 8 giờ tối hôm qua.)",
            "What were you doing at this time last night? (Bạn đang làm gì vào giờ này tối qua?)"
          ]
        },
        {
          "description": "Hành động đang xảy ra thì có hành động khác xen vào (Past Continuous + when + Past Simple)",
          "examples": [
            "I was watching TV when she called. (Tôi đang xem TV thì cô ấy gọi điện.)",
            "While I was cooking, the doorbell rang. (Trong khi tôi đang nấu ăn thì chuông cửa reo.)"
          ]
        },
        {
          "description": "Hai hành động xảy ra đồng thời trong quá khứ",
          "examples": [
            "She was reading while I was cooking. (Cô ấy đang đọc sách trong khi tôi đang nấu ăn.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "I was study when he came.",
          "correct": "I was studying when he came.",
          "explanation": "Động từ phải ở dạng V-ing"
        },
        {
          "wrong": "They was playing football.",
          "correct": "They were playing football.",
          "explanation": "Chủ ngữ số nhiều dùng 'were', không dùng 'was'"
        }
      ],
      "signal_words": ["at this time yesterday", "at 8 PM last night", "while", "when", "as"],
      "notes": "Thường đi kèm với Past Simple để diễn tả hành động đang diễn ra bị gián đoạn"
    },
    {
      "id": "past_perfect",
      "name_vi": "Thì Quá Khứ Hoàn Thành",
      "name_en": "Past Perfect",
      "level": "B1",
      "formula": {
        "positive": "S + had + V3/V-ed",
        "negative": "S + had + not + V3/V-ed",
        "question": "Had + S + V3/V-ed?"
      },
      "usage": [
        {
          "description": "Hành động xảy ra trước một hành động khác trong quá khứ",
          "examples": [
            "When I arrived, the train had left. (Khi tôi đến, tàu đã rời đi rồi.)",
            "She had finished her homework before she went out. (Cô ấy đã hoàn thành bài tập trước khi ra ngoài.)"
          ]
        },
        {
          "description": "Hành động xảy ra trước một thời điểm xác định trong quá khứ",
          "examples": [
            "By 2020, I had lived in Ha Noi for 10 years. (Đến năm 2020, tôi đã sống ở Hà Nội được 10 năm.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "After he ate dinner, he watched TV.",
          "correct": "After he had eaten dinner, he watched TV.",
          "explanation": "Hành động ăn tối xảy ra trước hành động xem TV nên phải dùng Past Perfect"
        },
        {
          "wrong": "I had seen him yesterday.",
          "correct": "I saw him yesterday.",
          "explanation": "Không cần dùng Past Perfect nếu không so sánh với hành động khác trong quá khứ"
        }
      ],
      "signal_words": ["before", "after", "when", "by the time", "already", "just", "never", "until"],
      "notes": "Dùng để nhấn mạnh thứ tự các hành động trong quá khứ. Hành động xảy ra trước dùng Past Perfect, hành động sau dùng Past Simple"
    },
    {
      "id": "past_perfect_continuous",
      "name_vi": "Thì Quá Khứ Hoàn Thành Tiếp Diễn",
      "name_en": "Past Perfect Continuous",
      "level": "B2",
      "formula": {
        "positive": "S + had + been + V-ing",
        "negative": "S + had + not + been + V-ing",
        "question": "Had + S + been + V-ing?"
      },
      "usage": [
        {
          "description": "Hành động kéo dài trong quá khứ trước một hành động/thời điểm khác (nhấn mạnh tính liên tục)",
          "examples": [
            "I had been waiting for 2 hours when she finally arrived. (Tôi đã đợi được 2 giờ thì cô ấy cuối cùng cũng đến.)",
            "They had been living there for 10 years before they moved. (Họ đã sống ở đó 10 năm trước khi chuyển đi.)"
          ]
        },
        {
          "description": "Nguyên nhân của một kết quả trong quá khứ",
          "examples": [
            "The road was wet because it had been raining. (Đường ướt vì trời vừa mưa.)",
            "She was tired because she had been working all day. (Cô ấy mệt vì đã làm việc cả ngày.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "She had been knowing him for years.",
          "correct": "She had known him for years.",
          "explanation": "Động từ trạng thái không dùng ở dạng continuous"
        },
        {
          "wrong": "I had been study for 3 hours.",
          "correct": "I had been studying for 3 hours.",
          "explanation": "Động từ phải ở dạng V-ing"
        }
      ],
      "signal_words": ["for", "since", "before", "until", "how long"],
      "notes": "Phân biệt Past Perfect và Past Perfect Continuous: Continuous nhấn mạnh quá trình và thời gian, Perfect nhấn mạnh hành động hoàn thành"
    },
    {
      "id": "future_simple",
      "name_vi": "Thì Tương Lai Đơn",
      "name_en": "Future Simple",
      "level": "A2",
      "formula": {
        "positive": "S + will + V (infinitive)",
        "negative": "S + will not (won't) + V (infinitive)",
        "question": "Will + S + V (infinitive)?"
      },
      "usage": [
        {
          "description": "Quyết định tức thời tại thời điểm nói",
          "examples": [
            "I will help you with that. (Tôi sẽ giúp bạn việc đó.)",
            "Wait, I'll open the door for you. (Đợi đã, tôi sẽ mở cửa cho bạn.)"
          ]
        },
        {
          "description": "Dự đoán về tương lai (thường dùng với think, believe, hope, expect)",
          "examples": [
            "I think it will rain tomorrow. (Tôi nghĩ ngày mai trời sẽ mưa.)",
            "She will probably pass the exam. (Cô ấy có lẽ sẽ đỗ kỳ thi.)"
          ]
        },
        {
          "description": "Lời hứa, đề nghị, yêu cầu",
          "examples": [
            "I will call you later. (Tôi sẽ gọi cho bạn sau.)",
            "Will you marry me? (Bạn sẽ lấy tôi chứ?)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "I will to go to school tomorrow.",
          "correct": "I will go to school tomorrow.",
          "explanation": "Sau 'will' là động từ nguyên thể không 'to'"
        },
        {
          "wrong": "She will goes to the party.",
          "correct": "She will go to the party.",
          "explanation": "Sau 'will' động từ ở dạng nguyên thể, không thêm s/es"
        }
      ],
      "signal_words": ["tomorrow", "next week/month/year", "in the future", "soon", "probably", "I think", "I hope"],
      "notes": "Will dùng cho quyết định tức thời, be going to dùng cho kế hoạch đã có từ trước"
    },
    {
      "id": "future_continuous",
      "name_vi": "Thì Tương Lai Tiếp Diễn",
      "name_en": "Future Continuous",
      "level": "B1",
      "formula": {
        "positive": "S + will + be + V-ing",
        "negative": "S + will + not + be + V-ing",
        "question": "Will + S + be + V-ing?"
      },
      "usage": [
        {
          "description": "Hành động đang xảy ra tại một thời điểm xác định trong tương lai",
          "examples": [
            "I will be studying at 8 PM tonight. (Tôi sẽ đang học lúc 8 giờ tối nay.)",
            "This time tomorrow, we will be flying to Paris. (Giờ này ngày mai, chúng ta sẽ đang bay đến Paris.)"
          ]
        },
        {
          "description": "Hành động sẽ xảy ra như một phần của kế hoạch hoặc thói quen",
          "examples": [
            "Don't call me at 7 AM. I will be sleeping. (Đừng gọi tôi lúc 7 giờ sáng. Tôi sẽ đang ngủ.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "I will be study tomorrow.",
          "correct": "I will be studying tomorrow.",
          "explanation": "Động từ phải ở dạng V-ing"
        },
        {
          "wrong": "Will you be go to the party?",
          "correct": "Will you be going to the party?",
          "explanation": "Sau 'be' phải là V-ing"
        }
      ],
      "signal_words": ["at this time tomorrow", "at 8 PM tonight", "this time next week", "in the future"],
      "notes": "Thường dùng để hỏi lịch trình một cách lịch sự: Will you be using the car tomorrow?"
    },
    {
      "id": "future_perfect",
      "name_vi": "Thì Tương Lai Hoàn Thành",
      "name_en": "Future Perfect",
      "level": "B2",
      "formula": {
        "positive": "S + will + have + V3/V-ed",
        "negative": "S + will + not + have + V3/V-ed",
        "question": "Will + S + have + V3/V-ed?"
      },
      "usage": [
        {
          "description": "Hành động sẽ hoàn thành trước một thời điểm trong tương lai",
          "examples": [
            "By next month, I will have finished this project. (Đến tháng tới, tôi sẽ hoàn thành dự án này.)",
            "She will have graduated by 2025. (Cô ấy sẽ tốt nghiệp trước năm 2025.)"
          ]
        },
        {
          "description": "Hành động sẽ hoàn thành trước một hành động khác trong tương lai",
          "examples": [
            "I will have left before you arrive. (Tôi sẽ đi rồi trước khi bạn đến.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "By tomorrow, I will finish my work.",
          "correct": "By tomorrow, I will have finished my work.",
          "explanation": "Có 'by' (trước một thời điểm) nên phải dùng Future Perfect"
        },
        {
          "wrong": "She will have went home.",
          "correct": "She will have gone home.",
          "explanation": "Sau 'have' là V3, go → gone (không phải went)"
        }
      ],
      "signal_words": ["by", "by the time", "before", "by next week/month/year", "by 2030"],
      "notes": "Thường dùng với 'by' + thời gian để chỉ hành động sẽ hoàn thành trước thời điểm đó"
    },
    {
      "id": "future_perfect_continuous",
      "name_vi": "Thì Tương Lai Hoàn Thành Tiếp Diễn",
      "name_en": "Future Perfect Continuous",
      "level": "B2",
      "formula": {
        "positive": "S + will + have + been + V-ing",
        "negative": "S + will + not + have + been + V-ing",
        "question": "Will + S + have + been + V-ing?"
      },
      "usage": [
        {
          "description": "Hành động sẽ kéo dài được một khoảng thời gian đến một thời điểm trong tương lai",
          "examples": [
            "By next year, I will have been working here for 10 years. (Đến năm sau, tôi sẽ làm việc ở đây được 10 năm.)",
            "By 2025, they will have been living in this house for 20 years. (Đến năm 2025, họ sẽ sống trong ngôi nhà này được 20 năm.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "By next month, I will have been work here for 5 years.",
          "correct": "By next month, I will have been working here for 5 years.",
          "explanation": "Động từ phải ở dạng V-ing"
        }
      ],
      "signal_words": ["by", "by the time", "for", "by next year", "by 2030"],
      "notes": "Thì này ít dùng trong giao tiếp hàng ngày, chủ yếu trong văn viết trang trọng"
    },
    {
      "id": "be_going_to",
      "name_vi": "Thì Tương Lai Gần (be going to)",
      "name_en": "Be Going To Future",
      "level": "A2",
      "formula": {
        "positive": "S + am/is/are + going to + V (infinitive)",
        "negative": "S + am/is/are + not + going to + V (infinitive)",
        "question": "Am/Is/Are + S + going to + V (infinitive)?"
      },
      "usage": [
        {
          "description": "Kế hoạch, dự định đã được lên từ trước",
          "examples": [
            "I am going to study abroad next year. (Tôi sẽ đi du học năm sau - đã có kế hoạch.)",
            "We are going to buy a new house. (Chúng tôi sẽ mua nhà mới - đã quyết định.)"
          ]
        },
        {
          "description": "Dự đoán dựa trên bằng chứng hiện tại",
          "examples": [
            "Look at those dark clouds! It's going to rain. (Nhìn những đám mây đen kia! Trời sắp mưa rồi.)",
            "He is going to fall! (Anh ấy sắp té rồi!)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "I am going to study tomorrow.",
          "correct": "I am going to study tomorrow. ✓ (hoặc) I will study tomorrow. ✓",
          "explanation": "Cả hai đều đúng nhưng 'be going to' nhấn mạnh đây là kế hoạch đã có"
        },
        {
          "wrong": "She is going study English.",
          "correct": "She is going to study English.",
          "explanation": "Thiếu 'to' sau 'going'"
        }
      ],
      "signal_words": ["next week/month/year", "tomorrow", "soon", "tonight", "in the future"],
      "notes": "Phân biệt: Will = quyết định tức thời, Be going to = kế hoạch có từ trước"
    },
    {
      "id": "near_future",
      "name_vi": "Thì Tương Lai Gần (about to)",
      "name_en": "Near Future",
      "level": "A2",
      "formula": {
        "positive": "S + am/is/are + about to + V (infinitive)",
        "negative": "S + am/is/are + not + about to + V (infinitive)",
        "question": "Am/Is/Are + S + about to + V (infinitive)?"
      },
      "usage": [
        {
          "description": "Hành động sắp xảy ra ngay lập tức",
          "examples": [
            "The movie is about to start. (Phim sắp bắt đầu rồi.)",
            "Hurry up! The train is about to leave. (Nhanh lên! Tàu sắp chạy rồi.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "I am about to go tomorrow.",
          "correct": "I am going to go tomorrow.",
          "explanation": "'About to' chỉ dùng cho hành động sắp xảy ra ngay lập tức, không dùng với 'tomorrow'"
        }
      ],
      "signal_words": ["now", "right now", "at this moment", "immediately"],
      "notes": "'About to' chỉ dùng cho hành động sắp xảy ra trong vài giây hoặc vài phút tới, không dùng cho tương lai xa"
    }
  ],

  "conditional_sentences": [
    {
      "id": "conditional_type_0",
      "name_vi": "Câu Điều Kiện Loại 0",
      "name_en": "Conditional Type 0",
      "level": "A2",
      "formula": {
        "structure": "If + S + V (present simple), S + V (present simple)",
        "alternative": "S + V (present simple) + if + S + V (present simple)"
      },
      "usage": [
        {
          "description": "Diễn tả chân lý, sự thật hiển nhiên, quy luật tự nhiên",
          "examples": [
            "If you heat water to 100°C, it boils. (Nếu bạn đun nước đến 100°C, nó sẽ sôi.)",
            "If it rains, the ground gets wet. (Nếu trời mưa, mặt đất sẽ ướt.)"
          ]
        },
        {
          "description": "Thói quen, hành động lặp đi lặp lại",
          "examples": [
            "If I wake up late, I miss the bus. (Nếu tôi dậy muộn, tôi bị lỡ xe buýt.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "If you will heat water, it boils.",
          "correct": "If you heat water, it boils.",
          "explanation": "Câu điều kiện loại 0 dùng thì hiện tại đơn ở cả hai mệnh đề"
        }
      ],
      "signal_words": ["if", "when", "unless", "as soon as"],
      "notes": "Có thể thay 'if' bằng 'when' vì diễn tả sự thật luôn đúng"
    },
    {
      "id": "conditional_type_1",
      "name_vi": "Câu Điều Kiện Loại 1",
      "name_en": "Conditional Type 1",
      "level": "A2",
      "formula": {
        "structure": "If + S + V (present simple), S + will + V (infinitive)"
      },
      "usage": [
        {
          "description": "Điều kiện có thể xảy ra ở hiện tại hoặc tương lai",
          "examples": [
            "If it rains tomorrow, I will stay at home. (Nếu ngày mai trời mưa, tôi sẽ ở nhà.)",
            "If you study hard, you will pass the exam. (Nếu bạn học chăm, bạn sẽ đỗ kỳ thi.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "If it will rain, I will stay home.",
          "correct": "If it rains, I will stay home.",
          "explanation": "Mệnh đề if dùng thì hiện tại đơn, không dùng will"
        },
        {
          "wrong": "If I have money, I buy a car.",
          "correct": "If I have money, I will buy a car.",
          "explanation": "Mệnh đề chính phải dùng will"
        }
      ],
      "signal_words": ["if", "unless", "as long as", "provided that"],
      "notes": "Có thể dùng can/may/should thay cho will trong mệnh đề chính"
    },
    {
      "id": "conditional_type_2",
      "name_vi": "Câu Điều Kiện Loại 2",
      "name_en": "Conditional Type 2",
      "level": "B1",
      "formula": {
        "structure": "If + S + V-ed/V2, S + would/could/might + V (infinitive)"
      },
      "usage": [
        {
          "description": "Điều kiện không có thật ở hiện tại (giả định trái với hiện tại)",
          "examples": [
            "If I were rich, I would buy a big house. (Nếu tôi giàu, tôi sẽ mua một ngôi nhà lớn - nhưng thực tế tôi không giàu.)",
            "If I had wings, I could fly. (Nếu tôi có cánh, tôi có thể bay - nhưng tôi không có cánh.)"
          ]
        },
        {
          "description": "Lời khuyên",
          "examples": [
            "If I were you, I would study harder. (Nếu tôi là bạn, tôi sẽ học chăm hơn.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "If I was rich, I would buy a car.",
          "correct": "If I were rich, I would buy a car.",
          "explanation": "Với 'I/he/she/it', nên dùng 'were' thay vì 'was' trong câu điều kiện loại 2"
        },
        {
          "wrong": "If I have money, I would buy a car.",
          "correct": "If I had money, I would buy a car.",
          "explanation": "Mệnh đề if phải dùng quá khứ đơn (V2)"
        }
      ],
      "signal_words": ["if", "unless", "if I were you"],
      "notes": "Điều kiện loại 2 diễn tả điều không có thật ở hiện tại hoặc không thể xảy ra"
    },
    {
      "id": "conditional_type_3",
      "name_vi": "Câu Điều Kiện Loại 3",
      "name_en": "Conditional Type 3",
      "level": "B1",
      "formula": {
        "structure": "If + S + had + V3/V-ed, S + would/could/might + have + V3/V-ed"
      },
      "usage": [
        {
          "description": "Điều kiện không có thật trong quá khứ (giả định trái với quá khứ)",
          "examples": [
            "If I had studied harder, I would have passed the exam. (Nếu tôi học chăm hơn, tôi đã đỗ kỳ thi - nhưng thực tế tôi không học chăm và đã trượt.)",
            "If she had known, she would have come. (Nếu cô ấy biết, cô ấy đã đến - nhưng cô ấy không biết nên không đến.)"
          ]
        },
        {
          "description": "Thể hiện sự hối tiếc về quá khứ",
          "examples": [
            "If I had taken that job, I would have been happier. (Nếu tôi nhận công việc đó, tôi đã hạnh phúc hơn.)"
          ]
        }
      ],
      "common_mistakes": [
        {
          "wrong": "If I had money, I would have bought a car.",
          "correct": "If I had had money, I would have bought a car.",
          "explanation": "Cả hai mệnh đề đều phải ở dạng hoàn thành (had V3 và would have V3)"
        },
        {
          "wrong": "If I studied harder, I would have passed.",
          "correct": "If I had studied harder, I would have passed.",
          "explanation": "Mệnh đề if phải dùng Past Perfect (had + V3)"
        }
      ],
      "signal_words": ["if", "if only", "wish"],
      "notes": "Diễn tả điều không thể thay đổi được vì đã xảy ra trong quá khứ, thường mang tính hối tiếc"
    }
  ],

  "passive_voice": {
    "id": "passive_voice",
    "name_vi": "Câu Bị Động",
    "name_en": "Passive Voice",
    "level": "B1",
    "definition": "Câu bị động (Passive Voice) được dùng khi muốn nhấn mạnh vào hành động hoặc đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.",
    "formula": {
      "general": "S + be + V3/V-ed (+ by + O)",
      "present_simple": "S + am/is/are + V3/V-ed",
      "present_continuous": "S + am/is/are + being + V3/V-ed",
      "present_perfect": "S + have/has + been + V3/V-ed",
      "past_simple": "S + was/were + V3/V-ed",
      "past_continuous": "S + was/were + being + V3/V-ed",
      "past_perfect": "S + had + been + V3/V-ed",
      "future_simple": "S + will + be + V3/V-ed",
      "modals": "S + modal verb + be + V3/V-ed"
    },
    "usage": [
      {
        "description": "Nhấn mạnh hành động, không quan trọng ai thực hiện",
        "examples": [
          "English is spoken all over the world. (Tiếng Anh được nói trên toàn thế giới.)",
          "The house was built in 1990. (Ngôi nhà được xây năm 1990.)"
        ]
      },
      {
        "description": "Không biết hoặc không muốn nói ai thực hiện hành động",
        "examples": [
          "My car was stolen. (Xe của tôi bị đánh cắp.)",
          "The window has been broken. (Cửa sổ đã bị vỡ.)"
        ]
      },
      {
        "description": "Văn viết trang trọng, báo cáo khoa học",
        "examples": [
          "The experiment was conducted carefully. (Thí nghiệm được thực hiện cẩn thận.)"
        ]
      }
    ],
    "common_mistakes": [
      {
        "wrong": "The book was wrote by him.",
        "correct": "The book was written by him.",
        "explanation": "Phải dùng V3 (written), không phải V2 (wrote)"
      },
      {
        "wrong": "English is speak in many countries.",
        "correct": "English is spoken in many countries.",
        "explanation": "Sau 'is' phải là V3 (spoken)"
      },
      {
        "wrong": "The letter is being write now.",
        "correct": "The letter is being written now.",
        "explanation": "Passive continuous: be + being + V3"
      }
    ],
    "signal_words": ["by", "with"],
    "notes": "Động từ trong câu bị động luôn ở dạng V3/V-ed. Chủ ngữ trong câu chủ động trở thành 'by + object' trong câu bị động (có thể bỏ nếu không quan trọng)"
  },

  "reported_speech": {
    "id": "reported_speech",
    "name_vi": "Câu Gián Tiếp",
    "name_en": "Reported Speech",
    "level": "B1",
    "definition": "Câu gián tiếp (Reported Speech) dùng để thuật lại lời nói của người khác.",
    "types": [
      {
        "type": "statements",
        "name_vi": "Câu trần thuật",
        "name_en": "Reporting Statements",
        "formula": {
          "structure": "S + reporting verb + (that) + S + V (lùi thì)",
          "reporting_verbs": ["say", "tell", "explain", "mention", "announce", "claim"]
        },
        "tense_changes": {
          "present_simple": "past_simple",
          "present_continuous": "past_continuous",
          "present_perfect": "past_perfect",
          "past_simple": "past_perfect",
          "will": "would",
          "can": "could",
          "may": "might",
          "must": "had to"
        },
        "examples": [
          {
            "direct": "She said, 'I am learning English.'",
            "indirect": "She said (that) she was learning English.",
            "translation": "Cô ấy nói rằng cô ấy đang học tiếng Anh."
          },
          {
            "direct": "He said, 'I will call you tomorrow.'",
            "indirect": "He said (that) he would call me the next day.",
            "translation": "Anh ấy nói rằng anh ấy sẽ gọi cho tôi vào ngày hôm sau."
          }
        ],
        "common_mistakes": [
          {
            "wrong": "She said that she is tired.",
            "correct": "She said that she was tired.",
            "explanation": "Phải lùi thì từ hiện tại đơn sang quá khứ đơn"
          }
        ]
      },
      {
        "type": "questions",
        "name_vi": "Câu hỏi gián tiếp",
        "name_en": "Reporting Questions",
        "formula": {
          "yes_no_questions": "S + asked + (O) + if/whether + S + V",
          "wh_questions": "S + asked + (O) + wh-word + S + V",
          "reporting_verbs": ["ask", "wonder", "want to know", "inquire"]
        },
        "examples": [
          {
            "direct": "She asked, 'Are you ready?'",
            "indirect": "She asked if/whether I was ready.",
            "translation": "Cô ấy hỏi liệu tôi đã sẵn sàng chưa."
          },
          {
            "direct": "He asked, 'Where do you live?'",
            "indirect": "He asked where I lived.",
            "translation": "Anh ấy hỏi tôi sống ở đâu."
          }
        ],
        "common_mistakes": [
          {
            "wrong": "She asked where do I live.",
            "correct": "She asked where I lived.",
            "explanation": "Câu hỏi gián tiếp không đảo trợ động từ, dùng trật tự S + V"
          }
        ]
      },
      {
        "type": "commands_requests",
        "name_vi": "Câu mệnh lệnh/yêu cầu",
        "name_en": "Reporting Commands/Requests",
        "formula": {
          "commands": "S + told/ordered + O + (not) + to-infinitive",
          "requests": "S + asked/requested + O + (not) + to-infinitive"
        },
        "examples": [
          {
            "direct": "She said to me, 'Close the door.'",
            "indirect": "She told me to close the door.",
            "translation": "Cô ấy bảo tôi đóng cửa."
          },
          {
            "direct": "The teacher said, 'Don't talk in class.'",
            "indirect": "The teacher told us not to talk in class.",
            "translation": "Giáo viên bảo chúng tôi đừng nói chuyện trong lớp."
          }
        ],
        "common_mistakes": [
          {
            "wrong": "She told me close the door.",
            "correct": "She told me to close the door.",
            "explanation": "Phải dùng 'to + infinitive' sau tell/ask + object"
          }
        ]
      }
    ],
    "notes": [
      "Động từ 'say' không có tân ngữ, 'tell' phải có tân ngữ",
      "Không cần lùi thì nếu điều được nói vẫn đúng (chân lý, sự thật hiển nhiên)",
      "Có thể bỏ 'that' trong câu trần thuật gián tiếp",
      "Câu hỏi gián tiếp không đảo ngữ, không dùng dấu hỏi"
    ]
  },

  "comparisons": {
    "id": "comparisons",
    "name_vi": "So Sánh",
    "name_en": "Comparisons",
    "level": "A2",
    "types": [
      {
        "type": "equality",
        "name_vi": "So sánh bằng",
        "name_en": "Comparative of Equality",
        "formula": {
          "positive": "S + V + as + adj/adv + as + N/Pronoun",
          "negative": "S + V + not + as/so + adj/adv + as + N/Pronoun"
        },
        "examples": [
          "She is as tall as her brother. (Cô ấy cao bằng anh trai cô ấy.)",
          "He runs as fast as a cheetah. (Anh ấy chạy nhanh như báo.)"
        ],
        "common_mistakes": [
          {
            "wrong": "She is as tall than me.",
            "correct": "She is as tall as me.",
            "explanation": "So sánh bằng dùng 'as...as', không dùng 'than'"
          }
        ]
      },
      {
        "type": "comparative",
        "name_vi": "So sánh hơn",
        "name_en": "Comparative",
        "formula": {
          "short_adj": "S + V + adj-er + than + N/Pronoun",
          "long_adj": "S + V + more + adj + than + N/Pronoun"
        },
        "examples": [
          "She is taller than me. (Cô ấy cao hơn tôi.)",
          "This book is more interesting than that one. (Cuốn sách này thú vị hơn cuốn kia.)"
        ],
        "common_mistakes": [
          {
            "wrong": "She is more tall than me.",
            "correct": "She is taller than me.",
            "explanation": "Tính từ ngắn (1 âm tiết) dùng -er, không dùng more"
          }
        ]
      },
      {
        "type": "superlative",
        "name_vi": "So sánh nhất",
        "name_en": "Superlative",
        "formula": {
          "short_adj": "S + V + the + adj-est + (in/of + N)",
          "long_adj": "S + V + the most + adj + (in/of + N)"
        },
        "examples": [
          "She is the tallest student in the class. (Cô ấy là học sinh cao nhất lớp.)",
          "This is the most beautiful place I have ever seen. (Đây là nơi đẹp nhất tôi từng thấy.)"
        ],
        "common_mistakes": [
          {
            "wrong": "She is the most tall student.",
            "correct": "She is the tallest student.",
            "explanation": "Tính từ ngắn dùng -est, không dùng most"
          }
        ]
      },
      {
        "type": "double_comparative",
        "name_vi": "So sánh kép",
        "name_en": "Double Comparatives",
        "formula": {
          "structure": "The + comparative + S + V, the + comparative + S + V"
        },
        "examples": [
          "The more you study, the smarter you become. (Càng học nhiều, bạn càng thông minh.)",
          "The bigger the house, the more expensive it is. (Nhà càng lớn, càng đắt.)"
        ],
        "common_mistakes": [
          {
            "wrong": "The more you study, you become smarter.",
            "correct": "The more you study, the smarter you become.",
            "explanation": "Cả hai mệnh đề đều phải có 'the + comparative'"
          }
        ]
      }
    ],
    "notes": [
      "Sau so sánh hơn dùng 'than', so sánh bằng dùng 'as...as'",
      "So sánh nhất luôn có 'the' (trừ trạng từ có thể bỏ 'the')",
      "Một số tính từ 2 âm tiết có thể dùng cả -er/est hoặc more/most: clever, simple, quiet",
      "Bất quy tắc: good -> better -> best, bad -> worse -> worst, far -> farther/further -> farthest/furthest"
    ]
  },

  "modal_verbs": {
    "id": "modal_verbs",
    "name_vi": "Động Từ Khuyết Thiếu",
    "name_en": "Modal Verbs",
    "level": "A2",
    "general_rules": [
      "Không chia theo ngôi (không thêm s/es)",
      "Sau modal verb là động từ nguyên thể không 'to' (trừ ought to)",
      "Không dùng trợ động từ do/does/did trong câu phủ định và nghi vấn",
      "Không có dạng -ing, -ed"
    ],
    "modals": [
      {
        "id": "can_could",
        "name": "Can / Could",
        "level": "A1",
        "formula": {
          "positive": "S + can/could + V (infinitive)",
          "negative": "S + can't/cannot/couldn't + V",
          "question": "Can/Could + S + V (infinitive)?"
        },
        "usage": [
          {
            "description": "Khả năng (Ability)",
            "examples": [
              "I can swim. (Tôi biết bơi.)",
              "He could run very fast when he was young. (Anh ấy có thể chạy rất nhanh khi còn trẻ.)"
            ]
          },
          {
            "description": "Xin phép (Permission) / Đề nghị (Offer)",
            "examples": [
              "Can I use your phone? (Tôi có thể dùng điện thoại của bạn không?)",
              "Could you help me? (Bạn có thể giúp tôi không?)"
            ]
          }
        ],
        "common_mistakes": [
          {
            "wrong": "He cans swim.",
            "correct": "He can swim.",
            "explanation": "Modal verb không thêm s/es"
          }
        ]
      },
      {
        "id": "may_might",
        "name": "May / Might",
        "level": "A2",
        "formula": {
          "positive": "S + may/might + V (infinitive)",
          "negative": "S + may/might not + V (infinitive)",
          "question": "May/Might + S + V (infinitive)?"
        },
        "usage": [
          {
            "description": "Khả năng xảy ra (Possibility - không chắc chắn)",
            "examples": [
              "It may rain tomorrow. (Ngày mai có thể mưa.)",
              "She might be late. (Cô ấy có thể đến muộn.)"
            ]
          }
        ],
        "common_mistakes": [
          {
            "wrong": "It may rains tomorrow.",
            "correct": "It may rain tomorrow.",
            "explanation": "Sau may/might là động từ nguyên thể"
          }
        ]
      },
      {
        "id": "must",
        "name": "Must",
        "level": "A2",
        "formula": {
          "positive": "S + must + V (infinitive)",
          "negative": "S + must not (mustn't) + V",
          "question": "Must + S + V (infinitive)?"
        },
        "usage": [
          {
            "description": "Bắt buộc (Obligation - do người nói quyết định)",
            "examples": [
              "You must wear a helmet. (Bạn phải đội mũ bảo hiểm.)"
            ]
          },
          {
            "description": "Cấm đoán (Prohibition)",
            "examples": [
              "You mustn't smoke here. (Bạn không được hút thuốc ở đây.)"
            ]
          }
        ],
        "common_mistakes": [
          {
            "wrong": "I must to go.",
            "correct": "I must go.",
            "explanation": "Sau must là động từ nguyên thể không 'to'"
          }
        ]
      },
      {
        "id": "should",
        "name": "Should",
        "level": "A2",
        "formula": {
          "positive": "S + should + V (infinitive)",
          "negative": "S + should not (shouldn't) + V",
          "question": "Should + S + V (infinitive)?"
        },
        "usage": [
          {
            "description": "Lời khuyên (Advice)",
            "examples": [
              "You should study harder. (Bạn nên học chăm hơn.)",
              "You shouldn't eat too much sugar. (Bạn không nên ăn quá nhiều đường.)"
            ]
          }
        ],
        "common_mistakes": [
          {
            "wrong": "You should to study.",
            "correct": "You should study.",
            "explanation": "Sau should là động từ nguyên thể không 'to'"
          }
        ]
      }
    ],
    "comparison_table": {
      "obligation": {
        "must": "Bắt buộc (người nói quyết định)",
        "have_to": "Bắt buộc (quy định bên ngoài)",
        "should": "Nên làm (lời khuyên)"
      },
      "ability": {
        "can": "Có khả năng (hiện tại)",
        "could": "Có khả năng (quá khứ) hoặc lịch sự hơn"
      },
      "possibility": {
        "may": "Có thể xảy ra (50%)",
        "might": "Có thể xảy ra (30-40%)",
        "must": "Chắc chắn (90%)"
      }
    }
  }
};