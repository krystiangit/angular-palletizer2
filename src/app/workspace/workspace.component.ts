import { Component,
  ViewChild,
  TemplateRef,
  AfterViewInit,
  ViewContainerRef,
  OnDestroy,
  OnChanges,
  Input,
  ElementRef,
OnInit
   } from "@angular/core";
//import { getMatTooltipInvalidPositionError } from '@angular/material/tooltip';
//import { transition } from '@angular/animations';
import { Pallet } from '../pallet.model';
import { PalletsService } from '../pallets.service'
//import { Observable, of } from 'rxjs';
import panzoom from "panzoom";
import {SetWorkspaceService} from '../set-workspace.service';
import { Workspace } from '../workspace.model';
import { element } from 'protractor';




@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
})
export class WorkspaceComponent implements AfterViewInit {
  @Input() parentsValue: boolean;

pallets: Pallet[] = [];
setWorkspace:Workspace = {width:this.setWorkspaceService.workspaceSets.width*200, height:this.setWorkspaceService.workspaceSets.height*200}; // wymiary pola roboczego przed zmiana
constructor(public palletsService: PalletsService,
    public setWorkspaceService: SetWorkspaceService,
    public elRef:ElementRef,
    ) {

    }

    move(event) {

      let offsetLeft = 0;
    let offsetTop = 0;

    let el = event.srcElement;

    while(el){
        offsetLeft += el.offsetLeft;
        offsetTop += el.offsetTop;
        el = el.parentElement;
    }
    console.log(event)
    console.log(event.srcElement.offsetLeft , event.srcElement.offsetTop)
    console.log(this.elRef.nativeElement.offsetLeft);
    return { offsetTop:offsetTop , offsetLeft:offsetLeft }

    }

setWorkspaceFunc(){
  this.setWorkspace = this.setWorkspaceService.setWorkspace();
}


  ngOnInit() {

  }
  ngAfterViewInit() {

    this.panFunc();
  }
  addPallet() {
    console.log("before" + this.pallets)
    this.pallets = this.palletsService.addPallet();
    console.log("after" + this.pallets)
  }

  deletePallet(id: string) {
    this.pallets.splice(
      this.pallets.findIndex((pallet) => pallet.id === id),
      1
    );
  }

  panFunc() {
    var workspaceElement: HTMLElement = document.querySelector(
      '.workspace-box'
    );

    let instance = panzoom(workspaceElement, {
      zoomSpeed: 0.1,
      pinchSpeed: 1,
      transformOrigin: {x: 0.5, y: 0.5}
    });
    console.log(instance);
    console.log(instance.getTransform());
  }

  //@ViewChild('scene', { static: false }) scene: ElementRef;

  /*
     addPallet(){


      let temp = new Pallet();
      temp.palletName = 'Pallet'+(this.pallets.length+1);
      temp.id=(this.pallets.length+1).toString();
      //temp.width = "500";
      this.pallets.push(temp);
      console.log(temp);


    }
*/


  //setPosValY="400px";
  //setPosValX="400px";
  //containers = [];

  /*
  ngOnChanges() {

    this.pallets = this.palletsService.addPallet();
    this.push();
  }
*/

  /*
  push(){
    console.log("before" + this.pallets)
    this.pallets = this.palletsService.addPallet();
    console.log("after" +this.pallets)
  }
*/


@ViewChild('palletHash', { read: ElementRef }) palletHash: ElementRef<HTMLDivElement>;

getPosValY="";
getPosValX="";
translateX="";
translateY="";
getPos(_id){

var _element = this.palletHash.nativeElement;
//console.log("child PalletHash"+ this.palletHash)
//console.log("child PalletHash.nativeElement"+ this.palletHash.nativeElement)
//console.log("child PalletHash.nativeElement.innerWidth"+ this.palletHash.nativeElement.style.top)


  var _el=document.getElementById(_id);
  this.getPosValY = `position Y = ${_element.style.bottom}`;
  this.getPosValX = `position X = ${_element.style.left}`;


}



/*
setPos(){
  var _btn3=document.getElementById("btn3");
  _btn3.style.top = this.setPosValY;
  _btn3.style.left = this.setPosValX;
  //this.getPos(this.id);
}
*/

  //private palletsUpdated  = new Observable<Pallet[]>()
  /*
check(){
  console.log(this.pallets.length);

}
*/
}

/*
addPallet(){
  this.pallets = this.palletsService.addPallet();

}
*/
/*
add() {
  this.containers.push(this.containers.length);
  this.id=this.containers.length.toString();
  var _id=this.containers.length.toString();
  var item = document.getElementById(this.containers.length.toString());
  item.style.width="200px";
  item.style.height="100px";
  //this.setPos(_id);

}

*/
/*
add1(){
  let newElement = document.createElement('input');
  document.appendChild(newElement);
  document.body.appendChild(newElement);
}

*/



/*
addPallet(){

  let temp = new Pallet();
  temp.palletName = 'Pallet'+(this.pallets.length+1);
  temp.id=(this.pallets.length+1).toString();
  temp.width = "500";
  this.pallets.push(temp);



  console.log(this.pallets.length)
  console.log(document);
  console.log(temp);
  //_pallet.style.width = width;
  //_pallet.style.height = height;
}
*/


