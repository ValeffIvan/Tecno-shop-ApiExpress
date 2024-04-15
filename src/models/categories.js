import {Schema, model} from 'mongosse';

const categorySchema = new Schema (
    {
        category_id:{
            type: Number,
            auto: true,
            require: true,
        },
        name:{
            type: String,
            require: true,
        }
    }
)