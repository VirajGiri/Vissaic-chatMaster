import { Component, OnInit } from '@angular/core';
import { GenralServiceService } from '../Services/genral-service.service';
import { User } from '../Interface/User/user.module';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  chatInPut = new FormControl('');
  currentUserID:any = localStorage.getItem("userData");

  constructor(public genralService:GenralServiceService) { }


  ngOnInit(): void {
  }

  sendMessageObject: any;



  peopleArray:any =  [{
    image:"https://ptetutorials.com/images/user-profile.png",
    name:"Sunil Rajput",
    // date:"Dec 25",
    date:new Date,
    messege:"Test, which is a new approach to have all solutions astrology under one roof"
  }]
  incomningMsg:any = [{
    image:"https://ptetutorials.com/images/user-profile.png",
    name:"Sunil Rajput",
    // date:" 11:01 AM | June 9",
    date:new Date,
    messege:"Test which is a new approach to have all solutions",
    type:"in"
  }]
  outgoingMsg:any = [{
    // date:" 11:01 AM | June 9",
    date:new Date,
    messege:"Test which is a new approach to have all solutions",
    type:"out"
  },{
    // date:" 11:01 AM | June 9",
    date:new Date,
    messege:"khsfdsugdugd s",
    type:"out"
  }]

  showMesseges:any = [...this.incomningMsg,...this.outgoingMsg].sort();



  sendMessage(value:any) {
    console.log("data recived.. ", this.chatInPut, JSON.parse(this.currentUserID));
  
    
    let currentData:any = {
      currentuserId:JSON.parse(this.currentUserID)._id,
      inUser:JSON.parse(this.currentUserID)._id,
      outUser:"out userid",
      messege:this.chatInPut.value,
      type:"out"
    }
    this.genralService.sendMessege(currentData).subscribe((res)=>{
      console.log("sendMessege",res);
      this.genralService.getMesseges(JSON.parse(this.currentUserID)._id).subscribe((res)=>{
        console.log("getMesseges",res);
        this.showMesseges.push(res);
      })
    })

  }

  // updateSendingMessage(value : any) {
  //   const d = new Date();
  //   const month = d.toLocaleString('default', { month: 'long' });
  //   const time = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  //   const date = time + ' | ' + month + ' ' + d.getMonth();
  //   var obj = {
  //     date: new Date(),
  //     messege: value,
  //     type: 'out'
  //   }
    
  //   this.sendMessageObject = obj;
  // }



}
