import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator';

const PostSchema = new Schema({

    title: {
        type: String,
        requrie: true
    },
    description: {
        type: String,
        require: true
    },
    banner: {
        type: String,
        require: true
    },
    banner_type: {
        type: String,
        require: true
    },

    content: {
        type: String,
        require: true
    },

    uri: {
        type: String,
        require: true,
        unique: true
    },
    tags: {
        type: Array,
        default: []
    },
    views: {
        type: Number,
        default: 0
    },

    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
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
PostSchema.plugin(uniqueValidator);

export default mongoose.models.Post || mongoose.model('Post', PostSchema);