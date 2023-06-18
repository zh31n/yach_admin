import axios from "axios";


let instance = axios.create({baseURL: 'http://185.225.35.35:4000/api/'});

let Api = {
    login(email, password) {
        return instance.post('login', {email, password})
    },
    getTowns() {
        return instance.get('town')
    },
    addTown(name, country, services) {
        return instance.post('town', {name, country, services})
    },
    deleteTown(id) {
        return instance.delete('town', {data: {id: id}})
    },
    changeTown(name, country, services) {
        return instance.patch('town', {name, country, services})
    },
    getTown(id) {
        return instance.get(`all-info?id=${id}`);
    }
}

export default Api;