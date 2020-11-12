const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    kodemakanan: {
        type: String
    },
    namamakanan: {
        type: String
    },
    hargamakanan: {
        type: String
    },
    jumlahmakanan: {
        type: String
    },
    tanggalpembuatanmakanan: {
        type: String
    },
    namakasir: {
        type: String
    },
    gambar: {
        type: String
    }
})

module.exports = mongoose.model('makanan', userSchema)
