import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API = 'http://localhost:5000'

  constructor(private httpClient: HttpClient) {}

  getLoginToken(login: string, password: string) {
    const urlApi = this.API + '/login'
    const key = { login: login, senha: password }
    const headers = { 'content-type': 'application/json' }
    const options = { headers: headers }
    const responseToken = this.httpClient.post<string>(urlApi, key, options)
    return responseToken
  }
  tokenLocal(token: string) {
    const security = 'Bearer ' + token
    localStorage.setItem('token', security)
  }
  addCard(title: string, contents: string) {
    let json = JSON.stringify({ title, contents })
    let url = this.API + '/cards/'
    const tokenGet = localStorage.getItem('token')
    const response = this.httpClient.post(url, contents)
  }
}
