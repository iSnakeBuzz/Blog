import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },

    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        default: []
    }],

    created_at: {
        type: Date,
        require: true
    },
    updated_at: {
        type: Date,
        require: true
    }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);