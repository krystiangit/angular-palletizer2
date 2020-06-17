import { Injectable } from '@angular/core';
import {Kcs} from './kcs.model'

@Injectable({
  providedIn: 'root'
})
export class SetKcsService {

  constructor() { }

  public kcs: Kcs;
  public kcsSets: Kcs;

  setWorkspace(){
    var temp = new Kcs()
    temp.positionX = this.kcsSets.positionX;
    temp.positionY = this.kcsSets.positionY;
    //this.workspace.width= this.workspaceSets.width;
    //this.workspace.height= this.workspaceSets.height;
    return this.kcs = temp;
  }

}

