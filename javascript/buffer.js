const  { open } =require('fs/promises');
const { Buffer } = require('buffer');
const data = async()=>{
    let fd;
    try {
      fd = await open(Buffer.from('./file.txt'), 'r');
      // Do something with the file
      console.log(fd);
    } finally {
      await fd.close();
    }
}