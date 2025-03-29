import { create } from 'zustand';
import { AvatarParams, Expression, Gesture } from '../types/avatar';

interface AvatarState {
  currentAvatar: string | null;
  expressions: Expression[];
  gestures: Gesture[];
  customizations: Partial<AvatarParams>;
  setCurrentAvatar: (id: string | null) => void;
  addExpression: (expression: Expression) => void;
  removeExpression: (index: number) => void;
  addGesture: (gesture: Gesture) => void;
  removeGesture: (index: number) => void;
  updateCustomizations: (updates: Partial<AvatarParams>) => void;
  reset: () => void;
}

export const useAvatarStore = create<AvatarState>((set) => ({
  currentAvatar: null,
  expressions: [],
  gestures: [],
  customizations: {},

  setCurrentAvatar: (id) => set({ currentAvatar: id }),
  
  addExpression: (expression) => 
    set((state) => ({ expressions: [...state.expressions, expression] })),
  
  removeExpression: (index) =>
    set((state) => ({
      expressions: state.expressions.filter((_, i) => i !== index),
    })),
  
  addGesture: (gesture) =>
    set((state) => ({ gestures: [...state.gestures, gesture] })),
  
  removeGesture: (index) =>
    set((state) => ({
      gestures: state.gestures.filter((_, i) => i !== index),
    })),
  
  updateCustomizations: (updates) =>
    set((state) => ({
      customizations: { ...state.customizations, ...updates },
    })),
  
  reset: () => set({
    currentAvatar: null,
    expressions: [],
    gestures: [],
    customizations: {},
  }),
}));