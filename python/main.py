"""IPO 範例：智慧澆灌判斷（與 js/app.js 同邏輯，請改成你們專題的程式）

執行：python3 python/main.py
"""


def decide(moisture: float, threshold: float) -> tuple[bool, str]:
    """Process：濕度低於門檻就開水泵。"""
    pump_on = moisture < threshold
    if pump_on:
        msg = f"💧 濕度 {moisture}% 低於門檻 {threshold}% → 開啟水泵"
    else:
        msg = f"🌱 濕度 {moisture}% 足夠 → 水泵關閉"
    return pump_on, msg


def main() -> None:
    # Input：之後可改成讀感測器或 data/ 裡的 CSV
    threshold = 40
    readings = [62, 48, 39, 35, 71]
    # Output
    for m in readings:
        _, msg = decide(m, threshold)
        print(msg)


if __name__ == "__main__":
    main()
