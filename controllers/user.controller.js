const User = require("../models/user.model")

const addUser = async(req, res)=> {
    const {sno} = req.body.sno; 
    const {first_name} = req.body.first_name;
    const {last_name} = req.body.last_name;
    const {email} = req.body.email;
    const {phonenumber} = req.body.phonenumber;

    const user = await User.create(req.body)

    console.log(user)
    return res.json({msg:'User created succesfully'})
};

const getUser = async(req, res) => {
    const user = await User.find({});

    try {
        res.send(user);
    } 
    
    catch (error) {
        res.status(500).send(error);
    }
};

const updateUser = async(req, res) => {
    // console.log(req.params)
    // const id = req.query.id
    const{sno} = req.query
    // console.log(id)
    console.log(req.body)

    const {first_name} = req.body.first_name;
    const {last_name} = req.body.last_name;
    const {email} = req.body.email;
    const {phonenumber} = req.body.phonenumber;

    // const user = await User.findByIdAndUpdate(id,req.body)
    const user = await User.findOneAndUpdate({sno}, req.body)

    console.log(user)
    return res.json({msg:'User updated succesfully'})
};

const deleteUser = async(req, res) => {
    // console.log(req.params)
    const {sno} = req.query;
    // const {id} = req.query;

    const user = await User.findOneAndDelete({sno})
    

    const response = {
        message: "User successfully deleted",
        sno
    };

    return res.status(200).send(response);


    // console.log(user)
    // return res.json({msg:'User deleted succesfully'})
}

module.exports = {addUser, getUser, updateUser, deleteUser}