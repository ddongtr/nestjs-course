import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    name: { type: "string", required: true },
    age: {type: 'Number', required: true}
})