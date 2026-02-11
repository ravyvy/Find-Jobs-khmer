const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    // API Endpoints
    if (pathname === '/api/jobs') {
        if (req.method === 'GET') {
            fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
                if (err) {
                    // If file doesn't exist, return empty array
                    if (err.code === 'ENOENT') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end('[]');
                        return;
                    }
                    res.writeHead(500);
                    res.end(JSON.stringify({ error: 'Could not read data.json' }));
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            });
            return;
        } else if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk.toString(); });
            req.on('end', () => {
                try {
                    const newJob = JSON.parse(body);
                    const dataPath = path.join(__dirname, 'data.json');

                    fs.readFile(dataPath, 'utf8', (err, data) => {
                        let jobs = [];
                        if (!err) {
                            try { jobs = JSON.parse(data); } catch (e) { jobs = []; }
                        }

                        jobs.unshift(newJob);

                        fs.writeFile(dataPath, JSON.stringify(jobs, null, 2), (err) => {
                            if (err) {
                                res.writeHead(500);
                                res.end(JSON.stringify({ error: 'Could not write to data.json' }));
                                return;
                            }
                            res.writeHead(201, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ message: 'Job added successfully', job: newJob }));
                        });
                    });
                } catch (e) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ error: 'Invalid JSON body' }));
                }
            });
            return;
        } else if (req.method === 'DELETE') {
            const id = url.searchParams.get('id');
            if (!id) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Missing id parameter' }));
                return;
            }
            const dataPath = path.join(__dirname, 'data.json');
            fs.readFile(dataPath, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end(JSON.stringify({ error: 'Could not read data.json' }));
                    return;
                }
                let jobs = [];
                try { jobs = JSON.parse(data); } catch (e) { }

                const initialLength = jobs.length;
                jobs = jobs.filter(j => String(j.id) !== String(id));

                if (jobs.length === initialLength) {
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: 'Job not found' }));
                    return;
                }

                fs.writeFile(dataPath, JSON.stringify(jobs, null, 2), (err) => {
                    if (err) {
                        res.writeHead(500);
                        res.end(JSON.stringify({ error: 'Could not save changes' }));
                        return;
                    }
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true }));
                });
            });
            return;
        }
    }

    // Static File Serving
    let filePath = '.' + pathname;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', (error, content) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content || '404 Not Found', 'utf-8');
                });
            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
