import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { PeopleAction } from './people.actions';

export class PeopleStateModel {
  public items?: string[];
}

const defaults = {
  items: []
};

@State<PeopleStateModel>({
  name: 'people',
  defaults
})
@Injectable()
export class PeopleState {
  @Action(PeopleAction)
  add({ getState, setState }: StateContext<PeopleStateModel>, { payload }: PeopleAction) {
    const state = getState();
    setState({ items: [ ...state.items?, payload ] });
  }
}
