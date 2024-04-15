import {Schema, model} from 'mongoose';

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