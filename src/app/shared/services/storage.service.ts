import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly DRIVER: string = `LocalStorage`;

  public getType (): string {
    return this.DRIVER;
  }

  public get (key: string = ''): any {
    if (key) {
      return window.localStorage.getItem(key);
    } else {
      return window.localStorage;
    }
  }

  public set (key: string, value: any): void {
    if (key && value) {
      window.localStorage.setItem(key, value);
    } else {
      throw new Error('You must to specify key and value for saving in storage!');
    }
  }

  public clear (): void {
    window.localStorage.clear();
  }
}
