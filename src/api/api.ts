import axios from "axios";


let instance = axios.create({
    baseURL: 'http://45.12.238.174:4000/api/',
});

let Api = {
    login(email, password) {
        return instance.post('login', {email, password})
    },
    getTowns(){
       return  instance.get('town')
    },
    addTown(name,country,services){
        return instance.post('town',{name,country,services})
    },
    deleteTown(id){
        return instance.delete(`town/${id}`)
    }
}

export default Api;