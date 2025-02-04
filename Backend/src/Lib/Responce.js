class Responce {
    constructor( message , data = null , success ){
        this.data = data;
        this.success = success;
        this.message = message;
    }

    static success( message , data , success ){
        
        return new Responce( message , data , success );
    }

    static error( message , data , success ){
        return new Responce( message , data , success );
    }
}

export default Responce;