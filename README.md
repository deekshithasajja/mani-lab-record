# Java Programming Laboratory Record

Website for **Ch. Manikanat** · Roll No **25EU02072** · AIML, Section B

Built with React, Vite, JavaScript and CSS.

## Run locally

1. Install [Node.js](https://nodejs.org) (version 18 or newer).
2. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

3. Open the address shown in the terminal (usually http://localhost:5173).

To check that the production build works:

```bash
npm run build
npm run preview
```

## Add your PDFs

Put your real lab PDFs in `public/pdfs/` with exactly these names:

```
week1.pdf  week2.pdf  week3.pdf  week6.pdf  week7.pdf
week8.pdf  week9.pdf  week10.pdf week11.pdf week12.pdf
```

- The website checks each file automatically. If a file is missing, the card shows **"PDF not added yet."** and no button.
- Weeks 4 and 5 never show a PDF button (no tasks were assigned).
- Weeks 11 and 12 show "Pending" until their PDFs are added, then switch to "Completed".

## Edit content

| What                         | File                      |
| ---------------------------- | ------------------------- |
| Name, roll number, branch    | `src/data/student.js`     |
| Week titles, text, PDF paths | `src/data/weeks.js`       |
| Colours and fonts            | top of `src/index.css`    |

## Upload to GitHub

1. Create an account at https://github.com and click **New repository**.
2. Name it `java-laboratory-record`, keep it empty (no README), and click **Create repository**.
3. In a terminal inside this project folder, run:

```bash
git init
git add .
git commit -m "Java laboratory record website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/java-laboratory-record.git
git push -u origin main
```

(Replace `YOUR-USERNAME` with your GitHub username.) Make sure your PDFs are inside `public/pdfs/` before you commit.

## Deploy on Vercel

1. Go to https://vercel.com and sign in with your GitHub account.
2. Click **Add New → Project** and choose the `java-laboratory-record` repository.
3. Vercel detects Vite automatically. Keep these settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. After about a minute you get a public link.

To add or change a PDF later: put the file in `public/pdfs/`, then run `git add .`, `git commit -m "Add PDF"`, `git push`. Vercel redeploys automatically.
