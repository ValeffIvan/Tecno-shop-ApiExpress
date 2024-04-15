import {Schema, model} from 'mongosse';

const categorySchema = new Schema (
    {
        category_id:{
            type: Schema.Types.ObjectId,
            require: true,
        },
        name:{
            type: String,
            require: true,
        }
    }
)