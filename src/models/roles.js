import {Schema, model} from 'mongoose';

const RolSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
    }
)

export default model('rol',RolSchema);