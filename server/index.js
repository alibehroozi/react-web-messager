const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
    console.log('new connection');
    const adapter = new FileSync(`${__dirname}/data.json`);
    const db = low(adapter);
    socket.on('folderInfo', (data, response) => {
        const numericPath = data;
        let currentFolder = db.get('data');
        numericPath.map((key) => {
            currentFolder = currentFolder.get(`data.folders[${key}]`);
        });
        let currentFolderValue = currentFolder.value();
        if (currentFolderValue) {
            const final = { folders: [], files: currentFolderValue.data.files };
            currentFolderValue['data']['folders'].map((folder) => final.folders.push(folder.name));
            response(final);
        } else {
            response({ folders: [], files: [] });
        }
    });
});