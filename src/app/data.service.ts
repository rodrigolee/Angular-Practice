import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
    getUsers() {
      return this.http.get('https://jsonplaceholder.typicode.com/users')
    }
    getUser(userId) {
      return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
    }
    getPostsForUser(userId) {
      return this.http.get('https://jsonplaceholder.typicode.com/users/'+ userId + '/posts')
    }
    getTodosForUser(userId) {
      return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId + '/todos')
    }
    getAlbumsForUser(userId) {
      return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId + '/albums')
    }
    getPosts() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }
    getPost(postId) {
      return this.http.get('https://jsonplaceholder.typicode.com/posts/'+postId)
    }
    getCommentsForPost(postId) {
      return this.http.get('https://jsonplaceholder.typicode.com/posts/'+postId + '/comments')
    }
    getTodos() {
      return this.http.get('https://jsonplaceholder.typicode.com/todos')
    }
}
