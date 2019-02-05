const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const port = process.env.PORT || 3001;
const mode = process.argv[2];

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
    if (mode === "nested") {
        const adapter = new FileSync(`${__dirname}/data.json`);
        const db = low(adapter);
        socket.on('folderInfo', (data, response) => {
            console.time();
            const { pt, numericPath } = data;
            let currentFolder = db.get('data');
            numericPath.map((key) => {
                currentFolder = currentFolder.get(`data.folders[${key}]`);
            });
            let currentFolderValue = currentFolder.value();
            if (currentFolderValue) {
                const final = { folders: [], files: currentFolderValue.data.files };
                currentFolderValue['data']['folders'].map((folder) => final.folders.push(folder.name));
                const t2 = new Date().getTime();
                console.timeEnd();
                response(final);
            } else {
                response({ folders: [], files: [] });
            }
        });
    } else {
        const adapter = new FileSync(`${__dirname}/data-ans.json`);
        const db = low(adapter);
        socket.on('folderInfo', (data, response) => {
            console.time();
            const { pt, numericPath } = data;
            let folders = db.get('folders').filter({ path: pt }).value();
            folders.map((folder) => {
                folder = folder.name;
            });
            let files = db.get('files').filter({ path: pt }).value();
            files.map((files) => {
                files = files.name;
            });
            const final = { folders: [], files: [] };

            folders.map((folder) => final.folders.push(folder.name));
            files.map((file) => final.files.push(file.name));

            console.timeEnd();
            response(final);

        });
    }
});