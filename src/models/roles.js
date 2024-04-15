import {Schema, model} from 'mongosse';

const RolSchema = new Schema(
    {
        role_id:{
            type: Number,
            auto: true,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
    }
)

export default model('rol',RolSchema);