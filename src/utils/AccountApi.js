class AccountApi {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
    register(values) {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                password: values.password,
                email: values.email
            })
        })
        .then(this._checkResponse.bind(this))
      } 
    auth(values) {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                password: values.password,
                email: values.email
            })
        })
        .then(this._checkResponse.bind(this))
      }
    validation(values) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `Bearer ${values}`
            }
        })
        .then(this._checkResponse.bind(this))
      } 
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const url = 'https://auth.nomoreparties.co';
const addAccountApi = new AccountApi(url);
export default addAccountApi;