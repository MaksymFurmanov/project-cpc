const {SitemapStream, streamToPromise} = require('sitemap');
const {createWriteStream} = require('fs');

async function generateSitemap() {
    const sitemap = new SitemapStream({hostname: "https://kosiceforyou.sk/"});

    const pages = [
        '/',
    ];

    pages.forEach((route) => {
        sitemap.write({url: route, changefreq: 'monthly'});
    });

    sitemap.end();

    const data = await streamToPromise(sitemap);
    createWriteStream('./public/sitemap.xml').write(data.toString());
    createWriteStream('./public/favicon.ico').write(data.toString());
    createWriteStream('./public/favicon.png').write(data.toString());
}

generateSitemap();
