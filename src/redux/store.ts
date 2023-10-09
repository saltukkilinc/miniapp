import { init, RematchDispatch, RematchRootState, Models } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import auth from "./auth";


export interface RootModel extends Models<RootModel> {
	auth: typeof auth;
}

type FullModel = ExtraModelsFromLoading<RootModel,  { type: 'full' }>;

export const models: RootModel = {
	auth,
};

export const store = init<RootModel, FullModel>({
  models,
  plugins: [loadingPlugin( { type: 'full' })],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;