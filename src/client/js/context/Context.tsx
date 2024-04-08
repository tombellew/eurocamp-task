import React, {createContext} from 'react'
import type { IState } from '../types/App.types.d.ts'

const Context = createContext(null) as React.Context<IState>

export default Context