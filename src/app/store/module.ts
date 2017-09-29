import { IAppState } from './module';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgModule } from '@angular/core';

export interface IAppState {
    isLoading: boolean;
}

const defaultState: IAppState = {
    isLoading: false,
}

@NgModule({
    imports: [],
    providers: [],
})
export class StoreModule {
    constructor(
        public store: NgRedux<IAppState>,
        devTools: DevToolsExtension,
        ngReduxRouter: NgReduxRouter,
        rootEpics: RootEpics,
    ) {
        // Tell Redux about our reducers and epics. If the Redux DevTools
        // chrome extension is available in the browser, tell Redux about
        // it too.
        store.configureStore(
            rootReducer,
            {},
            [createLogger(), ...rootEpics.createEpics()],
            devTools.isEnabled() ? [devTools.enhancer()] : []);

        // Enable syncing of Angular router state with our Redux store.
        if (ngReduxRouter) {
            ngReduxRouter.initialize();
        }

        // Enable syncing of Angular form state with our Redux store.
        provideReduxForms(store);
    }
}
