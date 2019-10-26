import { Component, OnInit } from "@angular/core";

@Component({
  // selector: 'app-servers',
  selector: ".app-servers",
  // selector: '[app-servers]',
  templateUrl: "./servers.component.html",
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ["./servers.component.css"],
  styles: [`
        .largeNum {
            color: white;
        }`]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  userName = '';
  allowUserReset = false;
  serverCreationStatus = "No Server was Created";
  serverName = 'ServerName';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  displayDetails = false;
  clickLog = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnChanges() {
    this.allowUserReset = !!this.userName;
  }

  ngOnInit() {
  }

  toggleDisplay() {
    this.displayDetails = !this.displayDetails;
    this.clickLog.push(this.clickLog.length + 1);
  }

  onResetUser() {
    this.userName = '';
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value
  }

  getColor(c) {
    return c > 4 ? 'blue' : 'white';
  }
}
