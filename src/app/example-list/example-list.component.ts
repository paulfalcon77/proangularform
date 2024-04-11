import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { Router } from '@angular/router';
import { ListService } from '../list.service';
import { Sort, MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { max } from 'rxjs';
@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.css'],
})
export class ExampleListComponent implements OnInit {
  persons: List[] = [
    {
      name: 'Albert',
      Sername: 'Mooran',
      Sex: 'M',
      Phone: '+3726784568',
      info: 'Dolphins are one of the most commonly recognized and beloved sea creatures, in part because they are gregarious and friendly. ',
      image:
        'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Pablo',
      Sername: 'Picasso',
      Sex: 'M',
      Phone: '+3725845367',
      info: ' Their playful nature and intelligence have brought dolphins into close contact with humans, not always to their benefit.',
      image:
        'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Rose',
      Sername: 'Loa',
      Sex: 'N',
      Phone: '+3725845367',
      info: 'Scientists have learned that dolphins live longer, happier lives when they are not in captivity, so you are less likely to see dolphins at an aquarium than in the past.',
      image:
        'https://slp-statics.astockcdn.net/static_assets/staging/24spring/home/EMEA/curated-collections/card-4.jpg?width=580&format=webp',
    },
    {
      name: 'Fred',
      Sername: 'Smith',
      Sex: 'M',
      Phone: '+3725845367',
      info: 'Dolphins are one of the most commonly recognized and beloved sea creatures, in part because they are gregarious and friendly. ',
      image:
        'https://slp-statics.astockcdn.net/static_assets/staging/24spring/home/EMEA/curated-collections/card-6.jpg?width=580&format=webp',
    },
  ];

  selectedPerson?: List;

  filterSearch: string = '';

  onSelect(person: List) {
    this.selectedPerson = person;
  }

  constructor(
    private router: Router,
    private listService: ListService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  public async openItem(selectedPerson: List) {
    await this.router.navigate(['current-list']);
    this.listService.setCurrentList(selectedPerson);
  }

  openAddOrder() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '800px',
      minHeight: '300px',
    });
  }
}
