// 我路货
router.beforeEach(function (to, from, next) {
    if (to.matched.some(function (record) {return record.meta.requiresAuth})) {
        if (!window.userInfo) {
            next({name: 'index', query: {token: 'token203'}});
        } else {
            next();
        }
    } else {
        next();
    }
});

router.afterEach(function (to, from, next) {
    if (to.meta && to.meta.title && window.native) {
        window.native.initTopbarTitle(JSON.stringify({title: to.meta.title}));
    }
})



