import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { List } from '../list';

@Component({
  selector: 'app-current-list',
  templateUrl: './current-list.component.html',
  styleUrls: ['./current-list.component.css'],
})
export class CurrentListComponent implements OnInit {
  public person: List | null = null;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.person = this.listService.getCurrentList();
  }
}
