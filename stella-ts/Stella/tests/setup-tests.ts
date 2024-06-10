import fs from 'fs'
import path from 'path'
import {jest, expect, test} from '@jest/globals'
import {main} from '../setup'

export function runTestSuite(name: string, directory: string) {
  describe(name, () => {
    afterEach(() => {
      jest.restoreAllMocks()
    })

    fs.readdirSync(path.resolve('tests', directory, 'well-typed'), 'utf-8').forEach((filename) => {
      const newProcessArgv = process.argv.with(2, path.join('tests', directory, 'well-typed', filename))
      test('well-typed', async () => {
        jest.replaceProperty(process, 'argv', newProcessArgv)
        await expect(main()).resolves
      })
    })

    fs.readdirSync(path.resolve('tests', directory, 'ill-typed'), 'utf-8').forEach((filename) => {
      const newProcessArgv = process.argv.with(2, path.join('tests', directory, 'ill-typed', filename))
      test('ill-typed', async () => {
        jest.replaceProperty(process, 'argv', newProcessArgv)
        await expect(main()).rejects.toThrow()
      })
    })
  })
}
