import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
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

    admin: {
        type: Boolean,
        default: false
    },

    created_at: {
        type: Date,
        require: true
    },
    updated_at: {
        type: Date,
        require: true
    }
});

/* Plugins */
UserSchema.plugin(uniqueValidator);

export default mongoose.models.User || mongoose.model('User', UserSchema);