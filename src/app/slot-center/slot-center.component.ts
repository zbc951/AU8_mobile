import { MaintainService } from './../app-service/maintain.service';
import { filter } from 'rxjs/operators';
import { AppRoutes } from './../constant/routes';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from './../app-service/auth.service';
import { FavoriteService } from './../app-service/favorite.service';
import { LangService } from './../app-service/lang.service';
import { GameService, EnumGameTag } from './../app-service/game.service';
import { ToastService } from './../app-service/toast.service';
import { PublicService, GameTypeKey, IGame } from './../app-service/public.service';


@Component({
  selector: 'app-slot-center',
  templateUrl: './slot-center.component.html',
  // styleUrls: ['./slot-center.component.scss']
})
export class SlotCenterComponent implements OnInit {

  public gamePlatforms: any[] = [];
  public games: any[] = [];

  public platforms: any = [];
  enumGameTags = EnumGameTag;
  showItems = [];
  favorites = [];
  isLogin;
  gameTag: EnumGameTag = this.enumGameTags.all;
  tagsMap: any = {};
  isMaintain = false;

  @ViewChild('partnersList') partnersList: ElementRef;

  constructor(
    private publicService: PublicService,
    private toast: ToastService,
    private gameService: GameService,
    private langService: LangService,
    private favoriteService: FavoriteService,
    private auth: AuthService,
    private router: Router,
    private maintainService: MaintainService

  ) {

    this.publicService.getPlatforms()
      .subscribe((res: any) => {


        const { platforms } = res;

        // console.log('publicService.getPlatforms', platforms);
        // console.log(this.gameService.slotPlatform);

        if (this.gameService.slotPlatform && platforms && platforms.length > 0) {

          const p = platforms.find((pl) => {

            return pl.id == this.gameService.slotPlatform.id;

          });

          // console.log('p', p);


          this.gameService.slotPlatform = p;
          const slotPlatform = this.gameService.slotPlatform;
          this.showMaintain(slotPlatform);

        }

      });

  }

  ngOnInit(): void {

    this.publicService.getPlatforms()
      .subscribe((res: any) => {

        if (!res || res.length == 0) {
          return;
        }

        const slotPlatform = this.gameService.slotPlatform;
        // console.log('ngOnInit slotPlatform', slotPlatform);

        if (!slotPlatform) {

          this.router.navigateByUrl(AppRoutes.HOME);

        }

        this.showMaintain(slotPlatform);

        const tmpGames = slotPlatform.games.filter((game) => {

          return game.type == GameTypeKey.Slot;
        });

        // console.log('games', tmpGames);



        tmpGames.forEach((game) => {
          if (game.tags.length > 0) {

            game.tags.forEach((item) => {

              if (item.tag !== EnumGameTag.hot) {
                this.tagsMap[item.tag] = item.name;
              }
            });
          }
        });

        // console.log('tagsMap', this.tagsMap);
        // this.showItems = this.publicService.getShowItems(GameTypeKey.Slot);
        this.showItems = tmpGames;
        // console.log('888', this.gameService.slotPlatform);

      });


    this.favoriteService.getData()
      .subscribe((res) => {
        this.favorites = res;
      });

    this.auth.isLogin()
      .subscribe((res) => {
        this.isLogin = res;
      });

  }

  showMaintain(slotPlatform) {

    this.isMaintain = this.maintainService.checkIsRoutineMaintainIng(slotPlatform);

  }

  changeGameTag(tag: EnumGameTag): void {

    if (this.gameTag === tag) {
      return;
    }

    this.gameTag = tag;

    // console.log('changeGameTag tag', tag, this.gameTag);

    switch (tag) {
      case EnumGameTag.all:

        if (this.isLogin) {
          this.favoriteService.all();
        }

        break;

      case EnumGameTag.fav:

        if (!this.isLogin) {

          this.toast.forceAlert(this.langService.translations.loginFirst, () => {

            this.router.navigateByUrl(AppRoutes.HOME);

          });
        }

      default:
        // ????????? tags ???  pipe ????????????
        break;
    }
  }

  favClick(gameId): void {
    if (!this.isLogin) {
      // this.toast.error(this.loginFirstTxt);
      this.toast.error(this.langService.translations.loginFirst);
      return;
    }

    const game = this.favorites.find((item) => {
      return item === gameId;
    });

    if (game) {
      this.favoriteService.remove(gameId);
    } else {
      this.favoriteService.add(gameId);
    }

  }

  isFav(gameId): boolean {

    return this.favorites.includes(gameId);

  }

  clickGame(game: IGame, evt): void {

    console.log('evt', evt, evt.target, evt.currentTarget);

    if (evt.target.tagName === 'BUTTON') {
      return;
    }


    if (!this.isLogin) {
      this.toast.error(this.langService.translations.loginFirst);
      return;
    }

    if (this.isMaintain) {
      return;
    }


    this.gameService.clickGame(game, GameTypeKey.Slot);

  }


}
