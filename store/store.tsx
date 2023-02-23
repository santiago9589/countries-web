import {create} from 'zustand';


export type State = {
    search: string;
    selected:string
    setSearch: (value: string) => void;
    setSelected:(value: string) => void;
  };
  
  export const useStore = create<State>((set) => ({
    search: '',
    setSearch: (value:string) => set({ search:value }),
    selected:'',
    setSelected: (value:string) => set({ selected:value })
  }));



