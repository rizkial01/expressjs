const mongoose = require('mongoose'); 

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    nisn: {
        required: true,
        type: String
    },
    alamat: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('siswa', dataSchema)