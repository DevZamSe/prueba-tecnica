import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  rowsData = [
    { "story_title": "Wordpress 4.3 will be written in NodeJS.", "title": null, "author": "- Garbage -", "date": "11:35 am" },
    { "story_title": `A Simple "Hello World" Built on Objective-C and Executed with Node.js.`, "title": null, "author": "- vrunoa -", "date": "11:30 am" },
    { "story_title": null, "title": "Amazon Business.", "author": "- fragmede -", "date": "11:20 am" },
    { "story_title": "The People Who Risk Jail to Maintain the Tor Network.", "title": null, "author": "- mirimir -", "date": "10:50 am" },
    { "story_title": "Blinking LED Using Elixir Embedded Image On Rasperry Pi.", "title": null, "author": "- joezydeco -", "date": "Yesterday" },
    { "story_title": "Polyglot Weekly: A Rust Contributor Tries Their Hand at Go.", "title": null, "author": "- BenjaminCoe -", "date": "Yesterday" },
    { "story_title": "Nagios vs Icinga: The story of one of the most heated forks in free software.", "title": null, "author": "- newsvatore -", "date": "Apr 27" },
  ]


  constructor() { }

  ngOnInit(): void {
    console.log(this.rowsData[0]);
  }
  deleteMsg(item:any) {
    const index: number = this.rowsData.indexOf(item);
    if (index !== -1) {
        this.rowsData.splice(index, 1);
    }        
}
}
