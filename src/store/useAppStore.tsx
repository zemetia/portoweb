import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import { create } from 'zustand';

import AppDataInterface from '@/types/entity/app-data-interface';

type AppStoreType = {
  runningApp: { [id: string]: boolean };
  setRunningApp: (appIdList: string[]) => void;
  setAppStatus: (id: string, status: boolean) => void;
  apps: { [id: string]: AppDataInterface };
  addApp: (id: string, app: AppDataInterface) => void;
  getApp: (id: string) => AppDataInterface;
};

const useAppStoreBase = create<AppStoreType>((set, get) => ({
  runningApp: {},
  apps: {},
  setRunningApp: (appIdList: string[]) => {
    set(
      produce<AppStoreType>((state) => {
        state.runningApp = Object.assign(
          {},
          ...appIdList.map((id) => ({ [id]: false }))
        );
      })
    );
  },
  setAppStatus: (id: string, status: boolean) => {
    set(
      produce<AppStoreType>((state) => {
        state.runningApp[id] = status;
      })
    );
  },
  addApp: (id: string, app: AppDataInterface) => {
    set(
      produce<AppStoreType>((state) => {
        state.apps[id] = app;
        state.runningApp[id] = false;
      })
    );
  },
  getApp: (id: string) => get().apps[id],
}));

const useAppStore = createSelectorHooks(useAppStoreBase);

export default useAppStore;
