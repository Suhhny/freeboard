import mongoose from 'mongoose';
import crypto from 'crypto';

const User = new mongoose.Schema({
    name: {type: String},
    userId: {type: String},
    password: {type: String},
    email: {type: String}
});

export const key = "suhhnyboard"; // salt = key + String(Date.now());
const iterations = "180340";
const algorithm = "sha512";
const length = "64";

User.methods.generateHash = function(password, salt){
    return crypto.pbkdf2Sync(password, salt, iterations, length, algorithm).toString('base64');
} //password generating

User.methods.validateHash = function(password){
    return crypto.pbkdf2Sync(password, this.salt, iterations, length, algorithm).toString('base64');
} //password validating

export default mongoose.model('user', User);
