import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    id: String,
    title: String,
    link: String,
    category: String
})

export default mongoose.model('cards', cardSchema)