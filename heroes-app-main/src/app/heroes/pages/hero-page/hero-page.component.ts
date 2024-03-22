import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { Share } from '@capacitor/share';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;
  public isMobile : boolean = false

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {

    this.isMobile = Capacitor.isNativePlatform();

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroById( id )),
      )
      .subscribe( hero => {

        if ( !hero ) return this.router.navigate([ '/heroes/list' ]);

        this.hero = hero;
        return;
      })
  }

  goBack():void {
    this.router.navigateByUrl('heroes/list')
  }


  //3. Share information from hero
  async shareImage(){
    await Share.share({
      title: 'Informacion',
      text: `Informacion del heroe: primerea aparicion: ${this.hero?.first_appearance}, nombre: ${this.hero?.superhero}`,
    
    });
  }

}
