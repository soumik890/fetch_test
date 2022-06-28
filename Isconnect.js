const Isconnect = async () =>{
    let result;
        await fetch('http://localhost:5000/')
        .then((response) => {
            if (response.ok){
                result= true
            }else{
                result= false
            }
            })
        .catch((error) => {
            
            });
            
        return result;
    
    }
    export default Isconnect