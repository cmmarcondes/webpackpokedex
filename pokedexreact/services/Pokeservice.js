import api from "../Api";
class PokeService {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static getPoke(data, method, name) {
    return new Promise((resolve, reject) => {
      api
        .get(`/${method}/${name}`, data)
        .then((data) => {
          resolve(data);
        })
        .catch((data) => {
          reject(data);
        });
    });
  }
}

export default PokeService;