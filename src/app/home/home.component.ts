import { MaintainService } from './../app-service/maintain.service';
import { combineLatest } from 'rxjs';
import { LangService } from './../app-service/lang.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '../constant/routes';
import { PublicService, GameTypeKey } from './../app-service/public.service';
import { AuthService } from './../app-service/auth.service';
import { GameService } from './../app-service/game.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  curType = GameTypeKey.Sport;
  types = [];
  showItems = [];

  constructor(
    private router: Router,
    private publicService: PublicService,
    private auth: AuthService,
    private gameService: GameService,
    private langService: LangService,
    private maintainService: MaintainService

  ) {

  }

  ngOnInit(): void {

    combineLatest([
      this.langService.onloadSub,
      this.publicService.getTypeMenu(),
      this.publicService.getPlatforms()
    ])
      .subscribe((res: any[]) => {

        if (res[0] === true && res[1].length > 0 && res[2].platforms) {

          const HEADER_NAV = this.langService.translations.HEADER_NAV;

          res[1].forEach((item) => {

            const tname = HEADER_NAV[item.type];

            if (tname) {
              item.name = tname;
            }

          });

          const typeKeys = [
            GameTypeKey.Sport,
            GameTypeKey.Live,
            GameTypeKey.Slot,
            GameTypeKey.Lottery,
            GameTypeKey.Fishing,
            GameTypeKey.Board
          ];

          const tmp = res[1].filter((t) => {

            return typeKeys.includes(t.type);
          });


          this.types = tmp;
          this.typeChange(this.curType);

        }
      });

  }

  typeChange(type): void {
    this.curType = type;
    this.showItems = this.publicService.getShowItems(this.curType);
    // this.maintainService.parse(type, this.showItems);

  }


  click(item): void {

    console.log('click', item);

    if (item.maintain) {
      return;
    }

    if (this.curType === GameTypeKey.Slot) {

      this.gameService.slotPlatform = item;
      this.router.navigateByUrl(AppRoutes.SlotCenter);

      return;

    }

    if (item.platformId) {

      //game
      const result = this.maintainService.checkByPlatformId(item.platformId);

      if (result) {
        return;
      }

    } else {

      // platform
      const result = this.maintainService.checkByPlatformId(item.id);
      if (result) {
        return;
      }
    }


    this.gameService.clickGame(item, this.curType);

  }

}
