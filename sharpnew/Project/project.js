const http = require("http");
const fs = require("fs");
var showData = "";
http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(`<html><body>`)
        res.write(`${showData}`)
        res.write(`
                    <form action="/message" method="POST">
                        <input type="text" name="message" placeholder="Enter some text" />
                        <button type="submit">Submit</button>
                    </form>
        `)
        res.write(`</body></html>`)
        res.end();
    } else if (req.url === "/message" && req.method === "POST") {
        var bodys = [];
        req.on("data", (chunk) => {
            bodys.push(chunk);
        })
        req.on("end", () => {
            var parseData = Buffer.concat(bodys).toString().split("=")[1];
            showData =  parseData;
            fs.writeFile("project.txt", parseData, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                res.write("<h1>Message</h1>");
                res.end()
            })

        })
    } else {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>NO WEB PAGE FOUND</h1>");
        res.end()
    }
}).listen(4000);