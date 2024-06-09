import {type_ as StellaType} from '@abstract'

export class Scope {
  scopesList: Map<string, StellaType>[] = [new Map<string, StellaType>()]

  get currentScope() {
    return this.scopesList[this.scopesList.length - 1]
  }

  addVariable(identifier: string, type: StellaType) {
    if (this.currentScope.has(identifier)) {
      throw new Error(`Can not redeclare variable ${identifier}`)
    }

    this.currentScope.set(identifier, type)
  }

  getVariableType(identifier: string): StellaType {
    for (let i = this.scopesList.length - 1; i >= 0; i--) {
      const variableType = this.scopesList[i].get(identifier)
      if (variableType) {
        return variableType
      }
    }

    throw new Error(`identifier ${identifier} is not defined`)
  }

  enterScope() {
    this.scopesList.push(new Map<string, StellaType>())
  }

  exitScope() {
    this.scopesList.pop()
  }
}

