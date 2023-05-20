const User = require('../model/User')

const UserContactedData = async(req,res)=>{
const data = User({
    name:req.body.name,
    email:req.body.email,
    msg:req.body.msg
})
const result =await data.save()
console.log(result)
}

module.exports = {UserContactedData}