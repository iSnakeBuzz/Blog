import mongoose, { Schema } from 'mongoose'

const PostSchema = new Schema({




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

export default mongoose.models.Post || mongoose.model('Post', PostSchema);