const mongoose= require('mongoose');
const userSchema = mongoose.Schema({

    username : {
        type : String
    },
    kodemakanan1 : {
        type : String
    },
    jumlahbeli1 : {
        type : String
    },
    kodemakanan2 : {
        type : String
    },
    jumlahbeli2 : {
        type : String
    },
    kodemakanan3 : {
        type : String
    },
    jumlahbeli3: {
        type : String
    },
    alamat : {
        type : String
    },
    noTelp : {
        type : String
    }



})

module.exports = mongoose.model('transaksi', userSchema)
