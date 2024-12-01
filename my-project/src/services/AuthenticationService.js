import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  },
};

/*AuthenticationService.register({
  email:'edik.yurov@yandex.ru',
  password: '123456'
})*/
