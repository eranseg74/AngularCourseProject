import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  @Output() displayMode = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  displayChoice(b) {
    this.displayMode.emit(b);
  }
}
