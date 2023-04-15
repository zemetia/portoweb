import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import { create } from 'zustand';

type AppStoreType = {
  runningApp: { [id: string]: boolean };
  setRunningApp: (appIdList: string[]) => void;
  setAppStatus: (id: string, status: boolean) => void;
};

const useAppStoreBase = create<AppStoreType>((set) => ({
  runningApp: {},
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
}));

const useAppStore = createSelectorHooks(useAppStoreBase);

export default useAppStore;
