import axios from "axios";


let instance = axios.create({baseURL: 'http://45.130.42.157:4000/api/'});

let Api = {
    login(email, password) {
        return instance.post('login', {email, password})
    },
    getTowns() {
        return instance.get('town')
    },
    addTown(name, country, token) {
        return instance.post(`town?token=${token}`, {name, country})
    },
    deleteTown(id, token) {
        return instance.delete(`town?token=${token}`, {data: {id: id}})
    },
    changeTown(name, country, services) {
        return instance.patch('town', {name, country, services})
    },
    getTown(id) {
        return instance.get(`all-info?id=${id}`);
    },
    deleteYacht(id) {
        return instance.delete('yachts')
    },
    addYachts(data,token){
        return instance.post(`yachts?token=${token}`,data)
    }
}

export default Api;