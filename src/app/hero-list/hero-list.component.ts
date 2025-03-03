import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  imports: [
    NgForOf,
    FormsModule
  ],
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: any[] = [];
  filteredHeroes: any[] = [];
  search: string = '';

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data;
      this.filteredHeroes = data;
    });
  }

  filterHeroes(): void {
    this.filteredHeroes = this.heroes.filter(hero =>
      hero.name.toLowerCase().includes(this.search.toLowerCase()) //pas respect de casse
    );
  }
}
