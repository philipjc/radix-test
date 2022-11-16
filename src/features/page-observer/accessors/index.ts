import { RootState } from '../../../app/store';

export const selectHeroObserver = (state: RootState) => state.pageObserver.hero;
