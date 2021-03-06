const routeConfig = [{
    name: '根',
    path: '/',
    redirect: '/datapanel/',
    hidden: true
}, {
    name: '数据面板',
    path: '/datapanel/',
    redirect: '/datapanel/overview',
    component: resolve => {
        require.ensure(['components/datapanel-index.vue'], () => {
            resolve(require('components/datapanel-index.vue'));
        });
    },
    children: [{
        name: '总览',
        path: '/datapanel/overview',
        component: resolve => {
            require.ensure(['components/datapanel-overview.vue'], () => {
                resolve(require('components/datapanel-overview.vue'));
            });
        }
    }, {
        name: '产品运营数据',
        path: '/datapanel/operation',
        component: resolve => {
            require.ensure(['components/datapanel-operation.vue'], () => {
                resolve(require('components/datapanel-operation.vue'));
            });
        }
    }, {
        name: '战斗力',
        path: '/datapanel/effectives',
        component: resolve => {
            require.ensure(['components/datapanel-effectives.vue'], () => {
                resolve(require('components/datapanel-effectives.vue'));
            });
        }
    }, {
        name: '付费会员',
        path: '/datapanel/member',
        component: resolve => {
            require.ensure(['components/datapanel-member.vue'], () => {
                resolve(require('components/datapanel-member.vue'));
            });
        }
    }, {
        name: '流量分布',
        path: '/datapanel/map',
        component: resolve => {
            require.ensure(['components/datapanel-map.vue'], () => {
                resolve(require('components/datapanel-map.vue'));
            });
        },
        hidden: true
    }, {
        name: '数据字典',
        path: '/datapanel/readme',
        component: resolve => {
            require.ensure(['components/datapanel-readme.vue'], () => {
                resolve(require('components/datapanel-readme.vue'));
            });
        }
    }, {
        name: '权限管理',
        path: '/datapanel/authority',
        component: resolve => {
            require.ensure(['components/datapanel-authority.vue'], () => {
                resolve(require('components/datapanel-authority.vue'));
            });
        }
    }]
}];

export default routeConfig;