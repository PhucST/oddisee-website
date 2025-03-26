const puppeteer = require('puppeteer');

// In phiên bản Puppeteer để kiểm tra
console.log('Puppeteer version:', puppeteer.version);

async function simulateUserVisit(url, numVisits) {
  for (let i = 0; i < numVisits; i++) {
    const browser = await puppeteer.launch({ headless: true }); // Chạy ở chế độ headless
    const page = await browser.newPage();

    // Đặt User-Agent ngẫu nhiên để mô phỏng các thiết bị khác nhau
    const userAgents = [
        // Chrome trên Windows
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        // Chrome trên macOS
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        // Chrome trên Android
        'Mozilla/5.0 (Linux; Android 13; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
        // Safari trên iPhone
        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1',
        // Safari trên iPad
        'Mozilla/5.0 (iPad; CPU OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/604.1',
        // Firefox trên Windows
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
        // Firefox trên macOS
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 14.3; rv:123.0) Gecko/20100101 Firefox/123.0',
        // Edge trên Windows
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.2365.63',
        // Samsung Internet trên Android
        'Mozilla/5.0 (Linux; Android 13; SAMSUNG SM-A536E) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/23.0 Chrome/122.0.0.0 Mobile Safari/537.36',
        // Chrome trên Linux
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      ];
    const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
    await page.setUserAgent(randomUserAgent);

    try {
      // Truy cập website
      console.log(`Visit ${i + 1}: Accessing ${url}`);
      await page.goto(url, { waitUntil: 'networkidle2' });

      // Mô phỏng hành vi người dùng
      // Cuộn trang ngẫu nhiên
      await page.evaluate(() => window.scrollTo(0, Math.random() * document.body.scrollHeight));
      if (typeof page.waitForTimeout === 'function') {
        await page.waitForTimeout(Math.random() * 5000 + 2000); // Đợi ngẫu nhiên từ 2-7 giây
      } else {
        console.log('page.waitForTimeout not supported, using fallback delay');
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000 + 2000));
      }

      // Nhấp vào một liên kết ngẫu nhiên (ví dụ: trang khách sạn)
      const links = await page.$$('a');
      if (links.length > 0) {
        const randomLink = links[Math.floor(Math.random() * links.length)];
        await randomLink.click();
        if (typeof page.waitForTimeout === 'function') {
          await page.waitForTimeout(Math.random() * 3000 + 2000); // Đợi thêm 2-5 giây
        } else {
          await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 2000));
        }
      }

      console.log(`Visit ${i + 1}: Completed`);
    } catch (error) {
      console.error(`Visit ${i + 1}: Error - ${error.message}`);
    } finally {
      await browser.close();
    }

    // Đợi một khoảng thời gian ngẫu nhiên giữa các lượt truy cập
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000 + 1000));
  }
}

(async () => {
  const websiteUrl = 'https://oddisee-website.netlify.app'; // Thay bằng URL website của bạn
  const numVisits = 100; // Số lượt truy cập (tương ứng với số phiên)

  console.log(`Starting to simulate ${numVisits} visits to ${websiteUrl}...`);
  await simulateUserVisit(websiteUrl, numVisits);
  console.log('Finished simulating visits.');
})();