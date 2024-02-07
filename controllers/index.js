const siswa = require('../model/siswa');

const getAll = async (req, res) => {
    try {
        const siswa = await siswa.find();
        res.status(200).json(siswa);
    } catch (error) {
        console.error(error);
        res.status(500).json({Message: 'Server Error'});
    }
}

const create = async (req, res) => {
    const data = new siswa({
        nama: req.body.nama,
        nisn: req.body.nisn,
        alamt: req.body.alamat,
    });
    try {
        const save = await data.save();
        console.log(save);
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({Message: 'Internal Server Error'});
    }
}

module.exports = {
    getAll,
    create
}