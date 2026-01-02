export default function ProjectValidation(values){


    let errors = {}
    

    
    if(values.name === ''){
        errors.name = "Project Name is required"
    }else{
        errors.name = ""
    }
    
    if(values.country === ''){
        errors.country = "Country is required"
    }else{
        errors.country = ""
    }
    if(values.town === ''){
        errors.town = "Town is required"
    }else{
        errors.town = ""
    }
    if(values.provider === ''){
        errors.provider = "Oppertunity is Required"
    }else{
        errors.provider = ""
    }if(values.description === ''){
        errors.description = "Description is Required"
    }else{          
        errors.description = ""
    }       
    if(values.duration === ''){
        errors.duration = "Duration is Required"
    }
    else{
        errors.duration = ""
    }   
    if(values.fee === ''){
        errors.fee = "Fee is Required"
    }
    else{
        errors.fee = ""
    }       

    

   
    return errors;
    
    }