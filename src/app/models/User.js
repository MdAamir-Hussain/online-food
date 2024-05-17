const { Schema } = require("mongoose");

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, 
        required:true,
         validate:() => {
            if(!pass?.length || pass.length < 5){
                new Error('password must be at least 5 characters');
                return false;
            }
         },
        },
}, {timestamps: true});

const User = models?.user || model('User', UserSchema);

export default User;