const makanan = require('../model/Makanan')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputTransaksi = (data) =>
    new Promise(async (resolve, reject) => {

        const transaksiBaru = new transaksi({
            username : data.username,
            kodemakanan1 : data.kodemakanan1,
            jumlahbeli1 : data.jumlahbeli1,
            kodemakanan2 : data.kodemakanan2,
            jumlahbeli2 : data.jumlahbeli2,
            kodemakanan3 : data.kodemakanan3,
            jumlahbeli3 : data.jumlahbeli3,
            alamat : data.alamat,
            noTelp : data.noTelp,

        })
        await transaksiBaru.save()
            .then(r=>{
                resolve(response.commonSuccessMsg('Berhasil Melakukan Transaksi'))
            }).catch(err =>{
                reject(response.commonErrorMsg('Mohon Maaf, Input Data Gagal'))
            })


    })

exports.lihatTransaksi = () =>
    new Promise(async (resolve, reject) => {
        await transaksi.find({})
            .then(result => {
                resolve(response.commonresult(result))
            })
            .catch(() =>  reject(response.commonErrorMsg('Mohon Maaf, Terjadi Kesalahan pada Server Kami')))

    })

exports.hapustransaksi = (_id) =>
    new Promise(async (resolve, reject) => {
        await transaksi.remove({_id:ObjectId(_id)})
            .then(() => {
                resolve(response.commonSuccessMsg('Berhasil menghapus Data'))
            }).catch(() => {
                reject(response.commonErrorMsg('Mohon Maaf, Terjadi Kesalahan pada Server Kami'))
            })

    })
