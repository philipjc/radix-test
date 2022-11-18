import { ActionReducerMapBuilder } from '@reduxjs/toolkit';

const someAsync = (builder: ActionReducerMapBuilder<any>) => {
  return builder;
};

export const bookmarkingReducers = {
  extraAsync: (builder: ActionReducerMapBuilder<any>) => ({ ...someAsync(builder) }),
};
