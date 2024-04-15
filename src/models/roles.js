import {Schema, model} from 'mongoose';

const RolSchema = new Schema(
    {
        role_id:{
            type: Schema.Types.ObjectId,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
    }
)

export default model('rol',RolSchema);