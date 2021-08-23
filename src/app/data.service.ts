import { Injectable } from '@angular/core';
import { list } from '../list';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  DATA: list[] = [];
  constructor() { }
}
