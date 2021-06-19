import {Injectable} from '@angular/core'

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to Local Storage', e)
    }
  }

  get(key: string): any {
    try {
      const item: any = localStorage.getItem(key)
      return JSON.parse(item)
    } catch (e) {
      console.error('Error getting data from Local Storage', e)
      return null
    }
  }
}
