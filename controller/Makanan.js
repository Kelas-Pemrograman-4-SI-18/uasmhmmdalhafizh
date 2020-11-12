const makanan = require('../model/Makanan')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDataMakanan = (data, gambar) =>
    new Promise(async (resolve, reject)=> {

        const makananBaru = new makanan({
            kodemakanan: data.kodemakanan,
            namamakanan: data.namamakanan,
            hargamakanan: data.hargamakanan,
            jumlahmakanan: data.jumlahmakanan,
            tanggalpembuatanmakanan: data.tanggalpembuatanmakanan,
            namakasir: data.namakasir,
            gambar: gambar
        })

        await makanan.findOne({kodemakanan: data.kodemakanan})
            .then(makanan => {
                if (makanan){
                    reject(response.CommonErrorMsg('Kode makanan sudah digunakan'))
                }else {
                    makananBaru.save()
                        .then(r=> {
                            resolve(response.CommonSuccessMsg('Berhasil menginput data'))
                        }).catch(err => {
                        reject(response.CommonErrorMsg('Mohon maaf input barang gagal'))
                    })
                }
            }).catch(err => {
                reject(response.CommonErrorMsg('Mohon maaf terjadi kesalahan  pada server kami'))
            })
    })

exports.lihatDataMakanan = () =>
    new Promise(async (resolve, reject) => {
        await makanan.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.CommonErrorMsg('Mohon maaf terjadi kesalahan  pada server kami')))
    })

exports.lihatDetailDataMakanan = (kodemakanan) =>
    new Promise(async (resolve, reject) => {
        await makanan.findOne({kodemakanan: kodemakanan})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(()=>reject(response.CommonErrorMsg('Mohon maaf terjadi kesalahan  pada server kami')))
    })

exports.updateMakanan = (id, data, gambar) =>
    new Promise(async (resolve, reject)=>{
        await makanan.updateOne(
            {_id : ObjectId(id)},
            {
                $set: {
                    kodemakanan: data.kodemakanan,
                    namamakanan: data.namamakanan,
                    hargamakanan: data.hargamakanan,
                    jumlahmakanan: data.jumlahmakanan,
                    tanggalpembuatanmakanan: data.tanggalpembuatanmakanan,
                    namakasir: data.namakasir,
                    gambar: gambar
                }
            }
        ).then(perabot => {
            resolve(response.CommonSuccessMsg('Berhasil mengubah data'))
        }).catch(err => {
            reject(response.CommonErrorMsg('Mohon maaf terjadi kesalahan  pada server kami'))
        })
    })

exports.hapusmakanan = (_id) =>
    new Promise(async (resolve, reject)=>{
        await makanan.remove({_id: ObjectId(_id)})
            .then(() =>{
                resolve(response.CommonSuccessMsg('Berhasil menghapus data'))
            }).catch(() =>{
                reject(response.CommonErrorMsg('Mohon maaf terjadi kesalahan  pada server kami'))
            })
    })


