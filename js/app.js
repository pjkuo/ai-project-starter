// IPO 範例：智慧澆灌判斷（請改成你們專題的邏輯）
// Input：土壤濕度、門檻  →  Process：比較  →  Output：水泵狀態與提示

function decide(moisture, threshold) {
  // Process：濕度低於門檻就開水泵
  const pumpOn = moisture < threshold;
  const msg = pumpOn
    ? `💧 濕度 ${moisture}% 低於門檻 ${threshold}% → 開啟水泵`
    : `🌱 濕度 ${moisture}% 足夠 → 水泵關閉`;
  return { pumpOn, msg };
}

const $ = (id) => document.getElementById(id);

function render() {
  // Input
  const m = Number($("moist").value);
  const t = Number($("th").value);
  $("moistVal").textContent = m;
  $("thVal").textContent = t;
  // Output
  const r = decide(m, t);
  const out = $("out");
  out.textContent = r.msg;
  out.className = "out " + (r.pumpOn ? "on" : "off");
}

$("moist").addEventListener("input", render);
$("th").addEventListener("input", render);
render();
