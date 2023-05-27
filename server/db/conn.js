const mongoose = require('mongoose');

const DB = process.env.DATABASE;


mongoose.connect(DB).then(() => {
    console.log(`Successful DB connection`);
}).catch((err) => console.log(`no connection`));

