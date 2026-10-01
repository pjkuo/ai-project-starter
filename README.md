# 📌 專題名稱：（例如 AI 智慧植物澆灌系統）

> 一句話介紹：這個系統幫 ____ 解決 ____ 的問題。

| 項目 | 連結 |
|---|---|
| 🌐 線上展示（GitHub Pages） | https://你的帳號.github.io/你的repo/ |
| 📝 學習計畫（Notion，想清楚・寫下來） | 貼上你們小組 Notion 計畫頁的分享連結 |
| 🧭 課程專題工作流 | https://pjkuo.github.io/ai-empower/project.html |

**口訣**：🧠 Notion 想清楚 → 📝 Notion 寫下來 → 💻 GitHub 做出來 → 🔄 GitHub 改進它
Notion 留下「學習歷程」，GitHub 留下「技術歷程」。

---

## 1. 問題定義

- 誰遇到問題？
- 現在怎麼做？哪裡不方便？
- 我們的系統要做到什麼程度才算成功？（可量測的標準）

## 2. IPO（輸入 → 處理 → 輸出）

| Input 輸入 | Process 處理 | Output 輸出 |
|---|---|---|
| 例：土壤濕度（%） | 例：濕度 < 門檻 → 開啟水泵 | 例：水泵狀態、提示訊息 |

## 3. 系統架構

```
感測器 / 使用者輸入 ──▶ 判斷邏輯（js/app.js、python/main.py） ──▶ 畫面 / 致動器
```

## 4. 怎麼執行

- **網頁版**：直接開 `index.html`，或啟用 GitHub Pages 後看線上版。
- **Python 版**：`python3 python/main.py`

## 5. 小組分工

| 角色 | 成員暱稱 | 主要工作 | 主要平台 |
|---|---|---|---|
| 🧠 A 企劃 |  | 問題、需求、IPO | Notion |
| 🎨 B 設計 |  | UI、流程、架構 | Notion＋GitHub |
| 💻 C 開發 |  | 程式（Web／Python／IoT） | GitHub |
| 🧪 D 測試 |  | 測試、開 Bug Issue、驗證 | GitHub Issues |

## 6. AI 協作摘要（詳細 Prompt 紀錄寫在 Notion）

| 用 AI 做了什麼 | 我們怎麼驗證它是對的 |
|---|---|
|  |  |

## 7. 版本與改進紀錄

用 Issue 記錄問題、用 Pull Request 提出修改，見 [docs/工作流.md](docs/工作流.md)。

---

## 🚀 第一次使用這個範本（組長做一次）

1. 按右上角 **Use this template → Create a new repository**，名稱用英文小寫加連字號（例：`smart-irrigation`），設 **Public**。
2. **Settings → Collaborators** 邀請組員。
3. **Settings → Pages**：Source 選 `Deploy from a branch`，Branch 選 `main`、資料夾 `/ (root)`，按 Save。約 1 分鐘後就有網址。
4. 把網址填回本頁最上方表格，也填到課程「專題工作流 → 專題登記」。
5. 改掉本 README 所有「例：」的內容。

> ⚠️ 不要在 repo 裡放學號、真實姓名、密碼或 API 金鑰。展示用暱稱就好。
