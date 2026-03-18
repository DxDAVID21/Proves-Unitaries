import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";
import { ref } from 'vue'
import { useUserStore } from "../user";

describe('The user store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  
  it('has the user values', () => {
    const email = ref('siseñor@gmail.com')
    const name = ref('Si Señor')

    const userStore = useUserStore()

    userStore.insertData({
      email: email.value,
      name: name.value
    })

    expect(userStore.userData.email).toBe('siseñor@gmail.com')
    expect(userStore.userData.name).toBe('Si Señor')
  })
})