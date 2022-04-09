import { observable, action, computed } from 'mobx'

class MobxStore {
  @observable name = 'World'

  @computed public get greeting(): string {
    return `Hello ${this.name}`
  }

  @action.bound public setName(name: string): void {
    this.name = name
  }
}
export mobx