import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public apiEndpoint: string = 'https://catacombstudios.com/api/Auth';

  constructor() { }

  getGlobalVariable(): string {
    return this.apiEndpoint;
  }

  setGlobalVariable(value: string): void {
    this.apiEndpoint = value;
  }
}
