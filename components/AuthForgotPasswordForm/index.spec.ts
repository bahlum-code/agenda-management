import { describe, it, expect } from 'vitest'
import { defineComponent } from 'vue';
import { render, screen, fireEvent } from '@testing-library/vue'

import AuthForgotPasswordForm from './index.vue'

 const NuxtLink = defineComponent({
  name: 'NuxtLink',
  template: '<a><slot /></a>',
});

describe('AuthForgotPasswordForm', () => {
  it('fills out form correctly', async() => {
    render(AuthForgotPasswordForm,
      {
          global: {
            components: {
              NuxtLink,
          },
        }
      }
    )

  
     await fireEvent.update(screen.getByLabelText('Email address'), 'gonzalo@gmail.com') 

    expect(screen.queryByRole('alert')).toBe(null)

  })

  it('shows error when email is invalid', async () => {
    const { container } = render(AuthForgotPasswordForm)
  await fireEvent.update(screen.getByLabelText('Email address'), 'gonzalo');
  
  expect(container.querySelector('[role="alert"]')).toContain(screen.getByRole('alert'));
});

it('should be disabled button when email is invalid', async () => {
  render(AuthForgotPasswordForm, 
    {
          global: {
            components: {
              NuxtLink,
          },
        }
      }
  )
  await fireEvent.update(screen.getByLabelText('Email address'), 'gonzalo');
  
  const button = screen.getByRole('button');
  // Check if the 'disabled' attribute is present
  const isDisabled = button.getAttribute('disabled') !== null;
  expect(isDisabled).toBe(true);
})

})