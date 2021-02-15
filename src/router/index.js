import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Produto from "../views/Produto.vue";
import Login from "../views/Login.vue";
import Usuario from "../views//usuario/Usuario.vue";
import UsuarioProduto from "../views//usuario/UsuarioProduto.vue";
import UsuarioCompras from "../views//usuario/UsuarioCompras.vue";
import UsuarioVendas from "../views//usuario/UsuarioVendas.vue";
import UsuarioEditar from "../views//usuario/UsuarioEditar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/usuario",
    component: Usuario,
    children: [
      {
        path: "",
        name: "usuario",
        component: UsuarioProduto
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar
      }
    ]
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
});

export default router;
