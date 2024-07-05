const functions = require('@google-cloud/functions-framework');

functions.http('signin-redirect', (req, res) => {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
                <meta http-equiv="Refresh" content="2; url=https://docs.google.com/forms/d/e/1FAIpQLSc_CJ1UbRtASVk9KuFIVO6FbBdxlQDaufVpf_tsv4hCbshGaQ/viewform">
            <title>Counseling sign-in redirect page</title>
        </head>
        <body>
            <h2 style="text-align:center;">Redirecting to the Counseling Office Sign-in Page</h2>
        </body>
        </html>
    `
    console.log(html);
    res.set("Content-Type","text/html");
    res.send(html);
});
