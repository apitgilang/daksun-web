import puppeteer from "puppeteer-core";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "http://localhost:3000";
const OUT = "/tmp/ds-shots";

const targets = [
  { path: "/", name: "home", w: 1440, full: true },
  { path: "/", name: "home-mobile", w: 390, full: true, mobile: true },
  { path: "/menu", name: "menu", w: 1440, full: false, h: 1200 },
  { path: "/cabang/bandung-dago", name: "branch", w: 1440, full: false, h: 1200 },
  { path: "/tentang", name: "tentang", w: 1440, full: false, h: 1200 },
  { path: "/kontak", name: "kontak", w: 1440, full: false, h: 1200 },
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars", "--force-prefers-reduced-motion"],
});

await import("node:fs").then((fs) => fs.mkdirSync(OUT, { recursive: true }));

for (const t of targets) {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.setViewport({
    width: t.w,
    height: t.h ?? 900,
    deviceScaleFactor: 2,
    isMobile: !!t.mobile,
    hasTouch: !!t.mobile,
  });
  await page.goto(BASE + t.path, { waitUntil: "networkidle0", timeout: 60000 });
  // nudge scroll to settle any in-view logic, then back to top
  await page.evaluate(async () => {
    await new Promise((r) => {
      let y = 0;
      const id = setInterval(() => {
        window.scrollTo(0, y);
        y += window.innerHeight;
        if (y > document.body.scrollHeight) {
          clearInterval(id);
          window.scrollTo(0, 0);
          r();
        }
      }, 60);
    });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({
    path: `${OUT}/${t.name}.png`,
    fullPage: !!t.full,
    ...(t.full ? {} : { clip: { x: 0, y: 0, width: t.w, height: t.h ?? 1200 } }),
  });
  console.log("shot:", t.name);
  await page.close();
}

await browser.close();
console.log("done");
