const modules = import.meta.glob('./*.js', { eager: true })

const composables = {}

for (const path in modules) {
  const moduleName = path.replace('./', '').replace('.js', '')
  composables[moduleName] = modules[path]
}

export default composables
