import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'

import HelloWorld from './index.vue'

describe('HelloWorld', () => {
  const { container } = render(HelloWorld)
  it('component renders Hello world properly', () => {
    expect(container.outerHTML).toContain('Hello world')
  })
})