const RadioHome = () => import("src/pages/radio/index/index.vue")

const routes: Array<RouterItem> = [
    {
      path: "/radio",
      name: "radio-home",
      component: RadioHome,
      props: route => ({ skuid: route.query.skuid })
    }
]

export default routes