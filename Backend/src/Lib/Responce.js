class Responce {
    constructor( message , data = null , success ){
        this.message = message;
        this.success = success;
        this.data = data;
    }

    static success( message , data , success ){
        return new Responce( message , data , success );
    }

    static error( message , data , success ){
        return new Responce( message , data , success );
    }
}

export default Responce;