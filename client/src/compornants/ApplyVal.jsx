export default function ApplyVal(values2){


    let errors = {}
    

    
    if(values2.age === ''){
        errors.age = "Age is Required"
    }else{
        errors.age = ""
    }
    
    if(values2.mobile === ''){
        errors.mobile = "Mobile No is Required"
    }else{
        errors.mobile = ""
    }
    if(values2.motivation === ''){
        errors.motivation = "motivation to apply this project is required"
    }else{
        errors.motivation = ""
    }
    

    

   
    return errors;
    
    }