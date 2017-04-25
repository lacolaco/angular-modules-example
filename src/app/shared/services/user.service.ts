import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  getUserList() {
    return [
      { id: 111 },
      { id: 222 },
      { id: 333 },
      { id: 444 },
    ];
  }

  getUser(id: number) {
    return {
      id,
      name: 'Laco', // always Laco
    };
  }

}
