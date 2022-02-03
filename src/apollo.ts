import { makeVar } from '@apollo/client';
import { ColorScheme } from './types';

export const isAuthenticatedVar = makeVar(false);
export const colorSchemeVar = makeVar<ColorScheme>('light');
