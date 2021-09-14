const Blog = require('../model/Blog');
const {Validator} = require('node-input-validator');

const createBlog = async(req,res) =>{
    try{
        let requestData = req.body;
        const v = new Validator(requestData,
            {
                title:'required',
                description:'required',
                published_date:'required',
                status:'required',
                category:'required',
                author:'required'

            }
        )
    
       await v.check().then((match) => {
                if(!match){
                    res.send({status:500,message:v.errors,data:[]});
                }
        });
        let blog=await Blog.query().insert(v.inputs)
        
        if(blog != undefined){
            res.send({status:200,message:"Blog created successfully",data:[]})
        }

    }catch(err){
        console.log(err);
    }
}

module.exports={
    createBlog
}