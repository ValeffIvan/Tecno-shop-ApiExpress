import {Schema, model} from "mongosse";

const userSchema = new Schema (
   {
    user_id:{
        type: Schema.Types.ObjectId,
        require: true,
    },
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    surename:{
        type: String,
        require: true,
    },
    role_id:{
        type: Number,
        default: 1,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    telefono:{
        type: Number,
        require: true,
    },
    status:{
        type: Number,
        default: 1,
        require:true,
    }
   } 
)

export default model('user', userSchema);