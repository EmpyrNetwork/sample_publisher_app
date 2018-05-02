import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store} from '@ngrx/store';
import { State } from 'app/reducers';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { State as UserState } from '../reducers/user.reducer';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private store: Store<State>, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.store.select('user').map((user: UserState) => {

      if (!user.user) {
        this.router.navigate(['/login']);
        return false;
      }

      return true;
    });
  }
}
