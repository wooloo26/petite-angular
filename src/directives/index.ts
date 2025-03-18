import { Context } from '../context'
import { effect as rawEffect } from '@vue/reactivity'
import { bind } from './bind'
import { on } from './on'
import { show } from './show'
import { text } from './text'
import { html } from './html'
import { model } from './model'
import { effect } from './effect'

export interface Directive<T = Element> {
    (ctx: DirectiveContext<T>): (() => void) | void
}

export interface DirectiveContext<T = Element> {
    el: T
    get: (exp?: string) => any
    effect: typeof rawEffect
    exp: string
    arg?: string
    modifiers?: Modifier<
        'camel' | 'lazy' | 'trim' | 'number' | 'right' | 'middle'
    >
    ctx: Context
}

export type Modifier<T extends string> = Partial<Record<T, true>>

export const builtInDirectives: Record<string, Directive<any>> = {
    bind,
    on,
    show,
    text,
    html,
    model,
    effect,
}
