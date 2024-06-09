const fs = require('fs');// TODO: tampilkan teks pada notes.txt pada console.
const { resolve } = require('path');

const fileReadCallback = (error, data)=>{
   if(error){
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);