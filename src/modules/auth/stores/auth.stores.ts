import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { AuthStatus, type User } from '../interfaces';
import { loginActions, registerAction } from '../actions';
import { useLocalStorage } from '@vueuse/core';

export const useAuthStores = defineStore('auth', () => {
  const authStatus = ref<AuthStatus>(AuthStatus.Checking);
  const user = ref<User | undefined>();
  const token = ref(useLocalStorage('token', ''));

  const login = async (email: string, password: string) => {
    try {
      const loginResp = await loginActions(email, password);
      if (!loginResp.ok) {
        logout();
        return false;
      }
      user.value = loginResp.user;
      token.value = loginResp.token;
      authStatus.value = AuthStatus.Authenticated;
      return true;
    } catch (error) {
      return logout();
    }
  };

  const logout = () => {
    authStatus.value = AuthStatus.Unautenthicated;
    user.value = undefined;
    token.value = '';
    return false;
  };

  const register = async (fullName: string, email: string, password: string) => {
    try {
      const registerResp = await registerAction(fullName, email, password);
      if (!registerResp.ok) {
        logout();
        return { ok: false, message: registerResp.message };
      }
      user.value = registerResp.user;
      token.value = registerResp.token;
      authStatus.value = AuthStatus.Unautenthicated;
      return { ok: true, message: '' };
    } catch (error) {
      return { ok: false, message: 'Error al registrar al usuario' };
    }
  };

  return {
    user,
    token,
    AuthStatus,

    //Getters
    isChecking: computed(() => authStatus.value === AuthStatus.Checking),
    isAuthenticated: computed(() => authStatus.value === AuthStatus.Authenticated),
    username: computed(() => user.value?.fullName),
    login,
    register,

    // ToDo: getter para saber si es Admin o no
  };
});
