import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DealtransferService {
  emitter = new EventEmitter<String>();
  emitvalue (value: String){
    this.emitter.emit(value);
  }
}
