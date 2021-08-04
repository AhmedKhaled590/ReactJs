import mongoose from 'mongoose'

const listSchema = mongoose.Schema({
    id: String,
    title: String,
    link: String,
    category: String
})

export default mongoose.model('list', listSchema)