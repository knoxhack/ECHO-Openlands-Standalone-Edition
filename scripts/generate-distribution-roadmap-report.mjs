import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { main } from '../../ECHO-Modules/addons/echoopenlandsprotocol/scripts/generate-openlands-distribution-roadmap-report.mjs'

const editionRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

await main([
  '--edition',
  'standalone',
  '--edition-root',
  editionRoot,
  ...process.argv.slice(2),
])
