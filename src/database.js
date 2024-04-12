const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://oscaryeezus:Integradora6969Y$KanyeWest7468@cluster0.x4pasxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    
}).then(() => {
    console.log('Database is connected');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});
