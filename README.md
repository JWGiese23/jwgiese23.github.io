<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Japan 356: Readings - Course Schedule</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box
            }

            body {
                font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
                background: linear-gradient(135deg,#f5f7fa 0%,#e4e8ec 100%);
                min-height: 100vh;
                padding: 20px;
                line-height: 1.6
            }

            .schedule-container {
                max-width: 900px;
                margin: 0 auto
            }

            .schedule-header {
                text-align: center;
                padding: 40px 30px;
                background: linear-gradient(135deg,#c41e3a 0%,#8b0000 100%);
                border-radius: 20px 20px 0 0;
                color: white;
                position: relative;
                overflow: hidden
            }

            .schedule-header::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 60%);
                animation: shimmer 15s infinite linear
            }

            @keyframes shimmer {
                0% {
                    transform: rotate(0deg)
                }

                100% {
                    transform: rotate(360deg)
                }
            }

            .schedule-header h1 {
                font-size: 2.2rem;
                font-weight: 700;
                margin-bottom: 8px;
                position: relative;
                z-index: 1
            }

            .schedule-header .japanese-title {
                font-size: 1.4rem;
                opacity: 0.95;
                margin-bottom: 15px;
                position: relative;
                z-index: 1
            }

            .schedule-header .course-info {
                font-size: 0.95rem;
                opacity: 0.9;
                position: relative;
                z-index: 1
            }

            .schedule-header .book-info {
                margin-top: 15px;
                padding: 12px 20px;
                background: rgba(255,255,255,0.15);
                border-radius: 10px;
                display: inline-block;
                position: relative;
                z-index: 1
            }

            .schedule-body {
                background: white;
                border-radius: 0 0 20px 20px;
                padding: 30px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.1)
            }

            .legend {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
                margin-bottom: 30px;
                padding: 15px;
                background: #f8f9fa;
                border-radius: 10px
            }

            .legend-item {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 0.85rem;
                color: #555
            }

            .legend-icon {
                font-size: 1.2rem;
                width: 30px;
                text-align: center
            }

            .week-card {
                background: #fff;
                border: 1px solid #e9ecef;
                border-radius: 12px;
                margin-bottom: 15px;
                overflow: hidden;
                transition: all 0.3s ease;
                opacity: 0;
                transform: translateY(20px)
            }

            .week-card.visible {
                opacity: 1;
                transform: translateY(0)
            }

            .week-card:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(0,0,0,0.12);
                border-color: #c41e3a
            }

            .week-card.spring-break {
                border-color: #dc3545
            }

            .week-card.spring-break .week-header {
                background: linear-gradient(135deg,#dc3545 0%,#a71d2a 100%)
            }

            .week-header {
                background: linear-gradient(135deg,#c41e3a 0%,#8b0000 100%);
                color: white;
                padding: 14px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between
            }

            .week-label {
                font-size: 1.3rem;
                font-weight: 700
            }

            .week-date {
                font-size: 0.95rem;
                opacity: 0.95
            }

            .week-content {
                padding: 20px 25px 20px 35px;
                background: #fafafa
            }

            .week-activities {
                display: flex;
                flex-direction: column;
                gap: 12px
            }

            .activity-item {
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 0.95rem;
                color: #333
            }

            .activity-icon {
                font-size: 1.2rem;
                width: 30px;
                text-align: center
            }

            .activity-text {
                flex: 1
            }

            .activity-text.break-text {
                color: #c62828;
                font-weight: 600
            }

            .student-name {
                font-weight: 600;
                color: #1565c0;
                background: #e3f2fd;
                padding: 2px 8px;
                border-radius: 4px
            }

            @media(max-width: 600px) {
                .schedule-header h1 {
                    font-size:1.6rem
                }

                .schedule-header .japanese-title {
                    font-size: 1.1rem
                }

                .week-header {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 5px
                }

                .week-content {
                    padding: 15px 20px 15px 20px
                }

                .legend {
                    gap: 10px
                }
            }

            .week-card:nth-child(1) {
                transition-delay: 0.05s
            }

            .week-card:nth-child(2) {
                transition-delay: 0.1s
            }

            .week-card:nth-child(3) {
                transition-delay: 0.15s
            }

            .week-card:nth-child(4) {
                transition-delay: 0.2s
            }

            .week-card:nth-child(5) {
                transition-delay: 0.25s
            }

            .week-card:nth-child(6) {
                transition-delay: 0.3s
            }

            .week-card:nth-child(7) {
                transition-delay: 0.35s
            }

            .week-card:nth-child(8) {
                transition-delay: 0.4s
            }

            .week-card:nth-child(9) {
                transition-delay: 0.45s
            }

            .week-card:nth-child(10) {
                transition-delay: 0.5s
            }

            .week-card:nth-child(11) {
                transition-delay: 0.55s
            }

            .week-card:nth-child(12) {
                transition-delay: 0.6s
            }

            .week-card:nth-child(13) {
                transition-delay: 0.65s
            }

            .week-card:nth-child(14) {
                transition-delay: 0.7s
            }
        </style>
    </head>
    <body>
        <div class="schedule-container">
            <header class="schedule-header">
                <h1>Japan 356: Readings</h1>
                <div class="japanese-title">日本語356：読解</div>
                <div class="course-info">University of Wisconsin–Milwaukee | Spring 2026 | Fridays</div>
                <div class="book-info">📚 時の顔 by 小松左京 (Toki no Kao by Komatsu Sakyō) — Pages 29–68</div>
            </header>
            <div class="schedule-body">
                <div class="legend">
                    <div class="legend-item">
                        <span class="legend-icon">👋</span>
                        <span>Course Introduction</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-icon">📖</span>
                        <span>Group Reading</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-icon">📄</span>
                        <span>Assigned Pages</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-icon">📝</span>
                        <span>Vocabulary Quiz</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-icon">👥</span>
                        <span>Discussion Leader</span>
                    </div>
                    <div class="legend-item">
                        <span class="legend-icon">🌸</span>
                        <span>No Class</span>
                    </div>
                </div>
                <div id="schedule-weeks"></div>
            </div>
        </div>
        <script>
            var defined_leaders = {
                4: "Oliver",
                5: "Tara",
                6: "Joshua",
                7: "Wesley",
                8: "Zach",
                10: "David",
                11: "STUDENT_NAME_7",
                12: "STUDENT_NAME_8",
                13: "STUDENT_NAME_9"
            };
            var defined_pages = {
                2: "33–35 (first line)",
                3: "35–37 (third line)",
                4: "37–39 (line 19)",
                5: "39–40 (four lines from end)",
                6: "41–42 (11 lines from end)",
                7: "42–44 (seventh line)",
                8: "44–47 (end of page)",
                10: "48–50 (line 9)",
                11: "50–52 (line 14)",
                12: "52–56 (line 8)",
                13: "56–59 (end of section)"
            };
            var defined_schedule = [{
                week: 1,
                date: "2026-01-30",
                activities: ["intro", "reading"]
            }, {
                week: 2,
                date: "2026-02-06",
                activities: ["reading", "pages"]
            }, {
                week: 3,
                date: "2026-02-13",
                activities: ["reading", "pages", "quiz"]
            }, {
                week: 4,
                date: "2026-02-20",
                activities: ["reading", "pages", "quiz", "leader"]
            }, {
                week: 5,
                date: "2026-02-27",
                activities: ["reading", "pages", "quiz", "leader"]
            }, {
                week: 6,
                date: "2026-03-06",
                activities: ["reading", "pages", "quiz", "leader"]
            }, {
                week: 7,
                date: "2026-03-13",
                activities: ["reading", "pages", "quiz", "leader"]
            }, {
                week: 8,
                date: "2026-03-20",
                activities: ["reading", "pages", "quiz", "leader"]
            }, {
                week: 9,
                date: "2026-03-27",
                activities: ["break"],
                isBreak: true
            }, {
                week: 10,
                date: "2026-04-03",
                activities: ["reading", "pages", "quiz", "leader"]
            }, {
                week: 11,
                date: "2026-04-10",
                activities: ["reading", "pages", "quiz", "leader"]
            }, {
                week: 12,
                date: "2026-04-17",
                activities: ["reading", "pages", "quiz", "leader"]
            }, {
                week: 13,
                date: "2026-04-24",
                activities: ["reading", "pages", "quiz", "leader"]
            }, {
                week: 14,
                date: "2026-05-01",
                activities: ["reading"]
            }];
            var defined_info = {
                intro: {
                    label: "Course Introduction",
                    icon: "👋"
                },
                reading: {
                    label: "Group Reading: 時の顔",
                    icon: "📖"
                },
                pages: {
                    label: "Pages",
                    icon: "📄"
                },
                quiz: {
                    label: "Vocabulary Quiz",
                    icon: "📝"
                },
                leader: {
                    label: "Discussion Leader",
                    icon: "👥"
                },
                break: {
                    label: "Spring Break — No Class",
                    icon: "🌸"
                }
            };
            function formatDate(d) {
                var dt = new Date(d + "T12:00:00");
                return dt.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                });
            }
            function createCard(w) {
                var bc = w.isBreak ? " spring-break" : "";
                var acts = "";
                for (var i = 0; i < w.activities.length; i++) {
                    var a = w.activities[i];
                    var info = defined_info[a];
                    var lbl = info.label;
                    var tc = "activity-text";
                    if (a === "leader" && defined_leaders[w.week]) {
                        lbl = "Discussion Leader: <span class='student-name'>" + defined_leaders[w.week] + "</span>";
                    }
                    if (a === "pages" && defined_pages[w.week]) {
                        lbl = "Assigned Reading: Pages " + defined_pages[w.week];
                    }
                    if (a === "break") {
                        tc = "activity-text break-text";
                    }
                    acts += "<div class='activity-item'><span class='activity-icon'>" + info.icon + "</span><span class='" + tc + "'>" + lbl + "</span></div>";
                }
                return "<div class='week-card" + bc + "'><div class='week-header'><span class='week-label'>Week " + w.week + "</span><span class='week-date'>" + formatDate(w.date) + "</span></div><div class='week-content'><div class='week-activities'>" + acts + "</div></div></div>";
            }
            function render() {
                var c = document.getElementById("schedule-weeks");
                var h = "";
                for (var i = 0; i < defined_schedule.length; i++) {
                    h += createCard(defined_schedule[i]);
                }
                c.innerHTML = h;
                setTimeout(function() {
                    var cards = document.querySelectorAll(".week-card");
                    for (var j = 0; j < cards.length; j++) {
                        cards[j].classList.add("visible");
                    }
                }, 100);
            }
            document.addEventListener("DOMContentLoaded", render);
        </script>
    </body>
</html>
