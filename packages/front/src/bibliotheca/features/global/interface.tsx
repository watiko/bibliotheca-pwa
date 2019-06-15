import { User } from 'bibliotheca/types';
import { User as FirebaseUser } from 'firebase/app';
import { createModule } from 'typeless';
import { GlobalSymbol } from './symbol';

// --- Actions ---
const modules = createModule(GlobalSymbol)
  .withActions({
    $mounted: null,
    logout: null,
    loggedIn: (user: FirebaseUser | null) => ({ payload: { user } }),
    progressShow: null,
    progressHide: null,
  })
  .withState<GlobalState>();

export const handle = modules[0];
export const GlobalActions = modules[1];
export const getGlobalState = modules[2];

// --- Types ---
export interface GlobalState {
  isLoaded: boolean;
  user: User | null;
  progress: boolean;
}
